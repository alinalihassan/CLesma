// Copyright (c) 2021-2022 ChilliBits. All rights reserved.

#pragma once

#include <string>
#include <utility>

#include "Type.h"
#include <llvm/IR/Type.h>
#include <llvm/IR/Value.h>

namespace lesma {
    enum SymbolState { DECLARED,
                       INITIALIZED };

    /**
     * Entry of a symbol table, representing an individual symbol with all its properties
     */
    class Value {
    public:
        explicit Value(Type *type) : state(INITIALIZED),
                                     type(type), mutableVar(false),
                                     signedVar(true) {}
        Value(std::string name, Type *type) : name(std::move(name)), state(INITIALIZED),
                                              type(type), mutableVar(false),
                                              signedVar(true) {}
        Value(std::string name, Type *type, llvm::Value *value) : name(std::move(name)), state(INITIALIZED),
                                                                  type(type), llvmValue(value), mutableVar(false),
                                                                  signedVar(true) {}
        Value(std::string name, Type *type, SymbolState state) : name(std::move(name)), state(state),
                                                                 type(type), mutableVar(false),
                                                                 signedVar(true) {}
        Value(std::string name, Type *type,
              SymbolState state, bool mutable_, bool signed_) : name(std::move(name)), state(state),
                                                                type(type), mutableVar(mutable_),
                                                                signedVar(signed_) {}

        [[nodiscard]] std::string getName() { return name; }
        [[nodiscard]] llvm::Value *getLLVMValue() { return llvmValue; }
        [[nodiscard]] bool getMutability() const { return mutableVar; }
        [[nodiscard]] bool getSigned() const { return signedVar; }
        [[nodiscard]] SymbolState getState() { return state; }
        [[nodiscard]] Type *getType() { return type; }
        [[nodiscard]] bool isExported() const { return exported; }
        [[nodiscard]] bool isUsed() const { return used; }

        void setLLVMValue(llvm::Value *value) { llvmValue = value; }
        void setUsed(bool used_) { used = used_; }
        void setSigned(bool signed_) { mutableVar = signed_; }
        void setMutable(bool mutable_) { mutableVar = mutable_; }
        void setExported(bool exported_) { exported = exported_; }

        std::string toString() {
            std::string type_str, value_str;
            llvm::raw_string_ostream rso(type_str), rso2(value_str);
            type->getLLVMType()->print(rso);
            llvmValue->print(rso2);
            return name + ": " + type_str + " = " + value_str;
        }

    private:
        std::string name;
        SymbolState state;
        Type *type;
        llvm::Value *llvmValue = nullptr;
        bool mutableVar;
        bool signedVar;
        bool used = false;
        bool exported = false;
    };
}//namespace lesma