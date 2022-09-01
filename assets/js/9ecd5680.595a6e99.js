"use strict";(self.webpackChunklesma_website=self.webpackChunklesma_website||[]).push([[938],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4340:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={id:"hello-world",title:"Hello World!",sidebar_position:3},i="Hello World!",l={unversionedId:"introduction/hello-world",id:"introduction/hello-world",title:"Hello World!",description:"Now that you\u2019ve installed Lesma, we can start writing our first Lesma program! You can use either a terminal or an editor like Visual Studio Code to create the folder and the files in this tutorial.",source:"@site/docs/introduction/hello-world.md",sourceDirName:"introduction",slug:"/introduction/hello-world",permalink:"/docs/introduction/hello-world",draft:!1,editUrl:"https://github.com/alinalihassan/Lesma/tree/main/docs/docs/introduction/hello-world.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"hello-world",title:"Hello World!",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/introduction/getting-started"},next:{title:"Programming a Guessing Game",permalink:"/docs/introduction/guessing-game"}},s={},c=[{value:"Writing a Lesma Program",id:"writing-a-lesma-program",level:2},{value:"Running The Program",id:"running-the-program",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hello-world"},"Hello World!"),(0,o.kt)("p",null,"Now that you\u2019ve installed Lesma, we can start writing our first Lesma program! You can use either a terminal or an editor like ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code")," to create the folder and the files in this tutorial."),(0,o.kt)("h2",{id:"writing-a-lesma-program"},"Writing a Lesma Program"),(0,o.kt)("p",null,"Make a new source file called ",(0,o.kt)("inlineCode",{parentName:"p"},"main.les"),". All Lesma files will have the extension ",(0,o.kt)("inlineCode",{parentName:"p"},".les"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'print("Hello World!\ud83d\udc4b")\n')),(0,o.kt)("h2",{id:"running-the-program"},"Running The Program"),(0,o.kt)("p",null,"To be able to use Lesma you need to either refer to the binary file we created in the ",(0,o.kt)("a",{parentName:"p",href:"getting-started"},"Getting Started")," section, or add the folder to the PATH environment variable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"lesma run main.les\n")),(0,o.kt)("p",null,"It should print ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello World!")," in the console. If it did, congrats, you wrote your first Lesma program."))}d.isMDXComponent=!0}}]);