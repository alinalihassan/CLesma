"use strict";(self.webpackChunklesma_website=self.webpackChunklesma_website||[]).push([[938],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4340:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],l={id:"hello-world",title:"Hello World!",sidebar_position:3},s="Hello World!",d={unversionedId:"introduction/hello-world",id:"introduction/hello-world",title:"Hello World!",description:"Now that you\u2019ve installed Lesma, we can start writing our first Lesma program! You can use either a terminal or an editor like Visual Studio Code to create the folder and the files in this tutorial.",source:"@site/docs/introduction/hello-world.md",sourceDirName:"introduction",slug:"/introduction/hello-world",permalink:"/docs/introduction/hello-world",draft:!1,editUrl:"https://github.com/alinalihassan/Lesma/tree/main/docs/docs/introduction/hello-world.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"hello-world",title:"Hello World!",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/introduction/getting-started"},next:{title:"Variables",permalink:"/docs/expressions/variables"}},u={},c=[{value:"Writing a Lesma Program",id:"writing-a-lesma-program",level:2},{value:"Running The Program",id:"running-the-program",level:2}],p={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hello-world"},"Hello World!"),(0,a.kt)("p",null,"Now that you\u2019ve installed Lesma, we can start writing our first Lesma program! You can use either a terminal or an editor like ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code")," to create the folder and the files in this tutorial."),(0,a.kt)("h2",{id:"writing-a-lesma-program"},"Writing a Lesma Program"),(0,a.kt)("p",null,"Make a new source file called ",(0,a.kt)("inlineCode",{parentName:"p"},"main.les"),". All Lesma files will have the extension ",(0,a.kt)("inlineCode",{parentName:"p"},".les"),". If you're using a multi-word filename, you can split it with an ",(0,a.kt)("em",{parentName:"p"},"underscore"),", like ",(0,a.kt)("inlineCode",{parentName:"p"},"hello_world.les")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"helloworld.les"),"."),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"String and built-in functions (like print) are not currently implemented!"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'print("Hello World!")\n')),(0,a.kt)("h2",{id:"running-the-program"},"Running The Program"),(0,a.kt)("p",null,"To be able to use Lesma you need to either refer to the binary file we created in the ",(0,a.kt)("a",{parentName:"p",href:"getting-started"},"Getting Started")," section, or add the folder to the PATH environment variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"lesma run main.les\n")),(0,a.kt)("p",null,"It should print ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello World!")," in the console. If it did, congrats, you wrote your first Lesma program."))}m.isMDXComponent=!0}}]);