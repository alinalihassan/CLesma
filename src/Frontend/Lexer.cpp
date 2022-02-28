#include "Lexer.h"

using namespace lesma;

std::vector<Token> Lexer::ScanAll() {
    while (tokens.empty() || tokens.back()->type != TokenType::EOF_TOKEN)
        tokens.push_back(ScanOne());
    return tokens;
}

Token Lexer::ScanOne() {
    if (IsAtEnd())
        return Token{TokenType::EOF_TOKEN, "EOF", loc};
    ResetTokenBeg();
    char c = Advance();
    bool continuation = false;

    switch (c) {
        case '(':
            return AddToken(TokenType::LEFT_PAREN);
        case ')':
            return AddToken(TokenType::RIGHT_PAREN);
        case '[':
            return AddToken(TokenType::LEFT_SQUARE);
        case ']':
            return AddToken(TokenType::RIGHT_SQUARE);
        case '{':
            return AddToken(TokenType::LEFT_BRACE);
        case '}':
            return AddToken(TokenType::RIGHT_BRACE);
        case ':':
            return AddToken(TokenType::COLON);
        case ',':
            return AddToken(TokenType::COMMA);
        case '.': {
            if (MatchAndAdvance(('.'))) {
                if (MatchAndAdvance('.'))
                    return AddToken(TokenType::ELLIPSIS);
                else
                    return AddToken(TokenType::RANGE);
            } else
                return AddToken(TokenType::DOT);
        }
        case '-': {
            if (MatchAndAdvance('>'))
                return AddToken(TokenType::ARROW);
            else if (MatchAndAdvance('='))
                return AddToken(TokenType::MINUS_EQUAL);

            return AddToken(TokenType::MINUS);
        }
        case '+': {
            if (MatchAndAdvance('='))
                return AddToken(TokenType::PLUS_EQUAL);

            return AddToken(TokenType::PLUS);
        }
        case ';':
            return AddToken(TokenType::SEMICOLON);
        case '*': {
            if (MatchAndAdvance('='))
                return AddToken(TokenType::STAR_EQUAL);
            return AddToken(TokenType::STAR);
        }
        case '!':
            return AddToken(MatchAndAdvance('=') ? TokenType::BANG_EQUAL : TokenType::BANG);
        case '=': {
            if (MatchAndAdvance('='))
                return AddToken(TokenType::EQUAL_EQUAL);
            else if (MatchAndAdvance('>'))
                return AddToken(TokenType::FAT_ARROW);

            return AddToken(TokenType::EQUAL);
        }
        case '<':
            return AddToken(MatchAndAdvance('=') ? TokenType::LESS_EQUAL : TokenType::LESS);
        case '>':
            return AddToken(MatchAndAdvance('=') ? TokenType::GREATER_EQUAL : TokenType::GREATER);
        case '/': {
            if (MatchAndAdvance('='))
                return AddToken(TokenType::SLASH_EQUAL);
            return AddToken(TokenType::SLASH);
        }
        case '%': {
            if (MatchAndAdvance('='))
                return AddToken(TokenType::MOD_EQUAL);
            return AddToken(TokenType::MOD);
        }
        case '^': {
            if (MatchAndAdvance('='))
                return AddToken(TokenType::POWER_EQUAL);
            return AddToken(TokenType::POWER);
        }
        case '#': {
            // A comment goes until the end of the line.
            while (Peek() != '\n' && !IsAtEnd()) Advance();
            return ScanOne();
        }
        case ' ':
        case '\r':
        case '\t':
            HandleWhitespace(c);
            if (loc.Col == 1)
                HandleIndentation(false);
            return ScanOne();
        case '\n':
            loc.Line++;
            loc.Col = 0;
            if (!continuation && level_ == 0)
                tokens.push_back(AddToken({TokenType::NEWLINE, "NEWLINE", loc}));
            HandleIndentation(continuation);
            continuation = false;
            return ScanOne();
        case '"':
            return AddStringToken();
        default:
            if (IsDigit(c))
                return AddNumToken();
            else if (IsAlpha(c))
                return AddIdentifierToken();
            else
                Error(fmt::format("Unexpected character: {}", c));
    }
    Error("Unknown error");
    return {};
}

void Lexer::HandleWhitespace(char c) {
    if (!first_indent_char) {
        first_indent_char = c;
    }
    if (first_indent_char != c)
        Error(fmt::format("Mixed indentation, first indentation character is: {}", first_indent_char));
    if (c == '\t')
        loc.Col += 7;
}

bool Lexer::HandleIndentation(bool continuation) {
    const int tab_size = 8;
    int col = 0, alt_col = 0;
    char c = 0;
    int changes = 0;
    for (;;) {
        if (IsAtEnd())
            break;
        c = Advance();
        if (c == ' ') {
            ++col;
            ++alt_col;
        } else if (c == '\t') {
            col = (col / tab_size + 1) * tab_size;
            alt_col += 1;
        } else {
            break;
        }
    }
    if (!IsAtEnd())
        Fallback();

    if (continuation || level_ != 0 || c == '#' || c == '\n' || c == '\r') {
        if (c == '#' || c == '\n') {
            // If this line is a commented line or an empty line, don't emit NewLine
            if (!tokens.empty() && tokens.back()->type == TokenType::NEWLINE) {
                tokens.pop_back();
            }
        }
        return true;
    }

    if (col == indent_stack_[indent_]) {
        if (alt_col != alt_indent_stack_[indent_]) {
            Error("Indentation error");
            return false;
        }
    } else if (col > indent_stack_[indent_]) {
        if (alt_col <= alt_indent_stack_[indent_]) {
            Error("Indentation error");
            return false;
        }
        ++indent_;
        ++changes;
        assert(indent_stack_.size() >= size_t(indent_));
        if (indent_stack_.size() == size_t(indent_)) {
            alt_indent_stack_.push_back(alt_col);
            indent_stack_.push_back(col);
        } else {
            alt_indent_stack_[indent_] = alt_col;
            indent_stack_[indent_] = col;
        }
    } else {
        while (indent_ > 0 && col < indent_stack_[indent_]) {
            --changes;
            --indent_;
        }
        if (col != indent_stack_[indent_]) {
            Error("Dedentation error");
            return false;
        }
        if (alt_col != alt_indent_stack_[indent_]) {
            Error("Indentation error");
            return false;
        }
    }

    while (changes != 0) {
        tokens.push_back(AddToken({changes > 0 ? TokenType::INDENT : TokenType::DEDENT, changes > 0 ? "INDENT" : "DEDENT", loc}));
        changes += changes > 0 ? -1 : 1;
    }
    return true;
}

// TODO: Could possibly make it more efficient
Token Lexer::AddToken(TokenType type) {
    auto ret = Token(type, std::string(srcs_->cbegin() + start_lex_pos_, srcs_->cbegin() + current_lex_pos_), loc);
    ResetTokenBeg();
    return ret;
}

Token Lexer::AddToken(Token tok) {
    ResetTokenBeg();
    return tok;
}

void Lexer::ResetTokenBeg() {
    start_lex_pos_ = current_lex_pos_;
}

void Lexer::Fallback() {
    --current_lex_pos_;
    --loc.Col;
}

char Lexer::Advance() {
    auto ret = LastChar();
    ++current_lex_pos_;
    ++loc.Col;
    return ret;
}

bool Lexer::MatchAndAdvance(char expected) {
    if (IsAtEnd()) return false;
    if (LastChar() != expected) return false;
    Advance();
    return true;
}

char Lexer::Peek(int offset) {
    if ((current_lex_pos_ + offset) >= srcs_->size()) return '\0';
    return srcs_->at(current_lex_pos_ + offset);
}

Token Lexer::AddStringToken() {
    while (Peek() != '"' && !IsAtEnd()) {
        if (Peek() == '\n') {
            loc.Line++;
            loc.Col = 0;
        }
        Advance();
    }

    if (IsAtEnd())
        Error("Unterminated string.");

    // The closing ".
    Advance();

    return AddToken(TokenType::STRING);
}
Token Lexer::AddNumToken() {
    while (IsDigit(Peek())) Advance();

    // Look for a fractional part.
    if ((Peek() == '.') && IsDigit(Peek(1))) {
        // Consume the "."
        Advance();

        while (IsDigit(Peek())) Advance();

        return AddToken(TokenType::DOUBLE);
    } else {
        return AddToken(TokenType::INTEGER);
    }
}

Token Lexer::AddIdentifierToken() {
    while (IsAlphaNumeric(Peek())) Advance();

    return AddToken(Token::GetIdentifierType(std::string(srcs_->cbegin() + start_lex_pos_, srcs_->cbegin() + current_lex_pos_)));
}

char Lexer::LastChar() { return srcs_->at(current_lex_pos_); }

void Lexer::Error(const std::string &msg) const {
    throw LexerError("[line {}, col {}] {}\n", loc.Line + 1, loc.Col + 1, msg);
}