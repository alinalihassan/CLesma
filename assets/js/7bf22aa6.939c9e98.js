"use strict";(self.webpackChunklesma_website=self.webpackChunklesma_website||[]).push([[8190],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(t),d=r,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8719:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const i={id:"functions",title:"Functions",sidebar_position:4},o="Functions",s={unversionedId:"basics/functions",id:"basics/functions",title:"Functions",description:"Functions are the basic building blocks of Lesma, and many times they are used behind the scenes,",source:"@site/docs/basics/functions.md",sourceDirName:"basics",slug:"/basics/functions",permalink:"/docs/basics/functions",draft:!1,editUrl:"https://github.com/alinalihassan/Lesma/tree/main/docs/docs/basics/functions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"functions",title:"Functions",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Types",permalink:"/docs/basics/types"},next:{title:"Comments",permalink:"/docs/basics/comments"}},l={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Return values",id:"return-values",level:2},{value:"Extern functions",id:"extern-functions",level:2},{value:"Varargs",id:"varargs",level:2}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"functions"},"Functions"),(0,r.kt)("p",null,"Functions are the basic building blocks of Lesma, and many times they are used behind the scenes,\nbut you've also seen one of them, ",(0,r.kt)("inlineCode",{parentName:"p"},"print"),". Here's an example function definition to compute fibbonaci."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def fibonacci(x: int) -> int\n    if x <= 1\n        return x\n    return fibonacci(x - 1) + fibonacci(x - 2)\n\nprint(fibonacci(8)) # Prints 21\n")),(0,r.kt)("p",null,"We define functions with the keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"def"),", followed by the function name and a set of parenthesis.\nThe body block is then defined by a level of indentation. "),(0,r.kt)("p",null,"We can call any defined function, like ",(0,r.kt)("inlineCode",{parentName:"p"},"print"),", by entering its name followed by a set of parenthesis."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"We can define functions to receive parameters when we call them. In the example above,\n",(0,r.kt)("inlineCode",{parentName:"p"},"x")," is our parameter in the function named ",(0,r.kt)("inlineCode",{parentName:"p"},"fibonacci"),". "),(0,r.kt)("p",null,"Unlike variable definitions, function parameters require us to specify the type."),(0,r.kt)("p",null,"We can also define default values for those parameters in a similar way we assign values to variables.\nSimply by adding an ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," and a value after the operator"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Default parameter values are not implemented yet. Additionally, string interpolation is not implemented.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def hello(name: str = "Mark")\n    print("Hello \\{name}!")\n\nhello() # Prints Hello Mark!\n')),(0,r.kt)("h2",{id:"return-values"},"Return values"),(0,r.kt)("p",null,"Functions can return values to the caller of the function. The type of the return value is\ndefined in the function signature after the parameters, delimited by an arrow (",(0,r.kt)("inlineCode",{parentName:"p"},"->"),").\nValues are returned using the ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," keyword followed by a value of the corresponding type."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A function that doesn't have a return type is expected to return nothing.")),(0,r.kt)("h2",{id:"extern-functions"},"Extern functions"),(0,r.kt)("p",null,"Extern functions are functions that we import from the C family of languages. It's Lesma's\n",(0,r.kt)("em",{parentName:"p"},"Foreign Function Interface")," or ",(0,r.kt)("em",{parentName:"p"},"FFI"),"."),(0,r.kt)("p",null,"Let's say we want to get the square root of a number, and we don't know how to implement the function ourselves.\nIf you are sufficiently familiar with C, you can use the math library from there!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def extern sqrt(x: float) -> float\n\nprint(sqrt(4.0)) # Prints 2\n")),(0,r.kt)("h2",{id:"varargs"},"Varargs"),(0,r.kt)("p",null,"Extern functions can have a variable amount of arguments, and to support that, you can\nuse an ellipsis(",(0,r.kt)("inlineCode",{parentName:"p"},"..."),"). For example ",(0,r.kt)("inlineCode",{parentName:"p"},"printf")," uses a variable amount of parameters, let's see how\nwe can define that."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def extern printf(fmt: str, ...)\n\nprintf("Hello %s and %s!\\n", "Mark", "Sussie") # Prints Hello Mark and Sussie!\n')))}p.isMDXComponent=!0}}]);