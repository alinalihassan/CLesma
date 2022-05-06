"use strict";(self.webpackChunklesma_website=self.webpackChunklesma_website||[]).push([[5982],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4827:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),l=["components"],o={id:"literals",title:"Literals",sidebar_position:2},s="Literals",p={unversionedId:"expressions/literals",id:"expressions/literals",title:"Literals",description:"Literals are primitive values like booleans, numbers, etc.",source:"@site/docs/expressions/literals.md",sourceDirName:"expressions",slug:"/expressions/literals",permalink:"/docs/expressions/literals",draft:!1,editUrl:"https://github.com/alinalihassan/Lesma/tree/main/docs/docs/expressions/literals.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"literals",title:"Literals",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Variables",permalink:"/docs/expressions/variables"},next:{title:"Overview",permalink:"/docs/types/types-overview"}},c={},u=[{value:"Booleans",id:"booleans",level:2},{value:"Numeric",id:"numeric",level:2},{value:"String Literals",id:"string-literals",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"literals"},"Literals"),(0,i.kt)("p",null,"Literals are primitive values like booleans, numbers, etc."),(0,i.kt)("h2",{id:"booleans"},"Booleans"),(0,i.kt)("p",null,"There are only two values, ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let x = true\n")),(0,i.kt)("h2",{id:"numeric"},"Numeric"),(0,i.kt)("p",null,"Numeric literals can be either integers, or floating points, using ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"float")," types respectively. Currently, Lesma assumes all numeric values to be signed. Both types are 64 bits."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let x: int = 5\nlet pi: float = 3.14\n")),(0,i.kt)("h2",{id:"string-literals"},"String Literals"),(0,i.kt)("p",null,"Strings, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," type, are enclosed in double-quotes ",(0,i.kt)("inlineCode",{parentName:"p"},'"'),". They can contain both ASCII and UTF-8 characters."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"String are not currently implemented!"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'let hello: string = "Hello World!"\n')))}d.isMDXComponent=!0}}]);