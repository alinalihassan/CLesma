"use strict";(self.webpackChunklesma_website=self.webpackChunklesma_website||[]).push([[261],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4340:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={id:"hello-world",title:"Hello World!",sidebar_position:3},u="Hello World!",s={unversionedId:"introduction/hello-world",id:"introduction/hello-world",title:"Hello World!",description:"Now that you\u2019ve installed Lesma, we can start writing our first Lesma program! You can use either a terminal or an editor like Visual Studio Code to create the folder and the files in this tutorial.",source:"@site/docs/introduction/hello-world.md",sourceDirName:"introduction",slug:"/introduction/hello-world",permalink:"/docs/introduction/hello-world",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/introduction/hello-world.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"hello-world",title:"Hello World!",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/introduction/getting-started"}},c={},d=[{value:"Writing a Lesma Program",id:"writing-a-lesma-program",level:2},{value:"Running The Program",id:"running-the-program",level:2}],p={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hello-world"},"Hello World!"),(0,i.kt)("p",null,"Now that you\u2019ve installed Lesma, we can start writing our first Lesma program! You can use either a terminal or an editor like ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code")," to create the folder and the files in this tutorial."),(0,i.kt)("h2",{id:"writing-a-lesma-program"},"Writing a Lesma Program"),(0,i.kt)("p",null,"Make a new source file called ",(0,i.kt)("inlineCode",{parentName:"p"},"main.les"),". All Lesma files will have the extension ",(0,i.kt)("inlineCode",{parentName:"p"},".les"),". If you're using a multi-word filename, you can split it with an ",(0,i.kt)("em",{parentName:"p"},"underscore"),", like ",(0,i.kt)("inlineCode",{parentName:"p"},"hello_world.les")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"helloworld.les"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'print("Hello World!")\n')),(0,i.kt)("h2",{id:"running-the-program"},"Running The Program"),(0,i.kt)("p",null,"To be able to use Lesma you need to either refer to the binary file we created in the ",(0,i.kt)("a",{parentName:"p",href:"getting-started"},"Getting Started")," section, or add the folder to the PATH environment variable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"lesma main.les\n")),(0,i.kt)("p",null,"It should print ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello World!")," in the console. If it did, congrats, you wrote your first Lesma program."))}m.isMDXComponent=!0}}]);