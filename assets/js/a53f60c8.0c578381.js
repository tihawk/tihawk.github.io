"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2921],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),y=l(r),b=a,f=y["".concat(p,".").concat(b)]||y[b]||u[b]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[y]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1608:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={slug:"nintendo-base64-cyberapocalypse-2021-ctf",title:"Nintendo Base64 - Cyberapocalypse 2021 CTF",description:"This is a writeup for the challenge Nintendo Base64, part of the Hack the box's Cyberapocalypse CTF 2021, category Crypto.",authors:"kiroki",tags:["Cyber Security","CTF"]},i=void 0,c={permalink:"/blog/nintendo-base64-cyberapocalypse-2021-ctf",source:"@site/blog/2021-04-28-12:58:58nintendo-base64-cyberapocalypse-2021-ctf.md",title:"Nintendo Base64 - Cyberapocalypse 2021 CTF",description:"This is a writeup for the challenge Nintendo Base64, part of the Hack the box's Cyberapocalypse CTF 2021, category Crypto.",date:"2021-04-28T00:00:00.000Z",formattedDate:"April 28, 2021",tags:[{label:"Cyber Security",permalink:"/blog/tags/cyber-security"},{label:"CTF",permalink:"/blog/tags/ctf"}],readingTime:2.08,hasTruncateMarker:!0,authors:[{name:"Kiril Panayotov Blagoev",title:"Admin",url:"https://github.com/tihawk",imageURL:"https://github.com/tihawk.png",key:"kiroki"}],frontMatter:{slug:"nintendo-base64-cyberapocalypse-2021-ctf",title:"Nintendo Base64 - Cyberapocalypse 2021 CTF",description:"This is a writeup for the challenge Nintendo Base64, part of the Hack the box's Cyberapocalypse CTF 2021, category Crypto.",authors:"kiroki",tags:["Cyber Security","CTF"]},prevItem:{title:"Phasestream 4 - Cyberapocalypse 2021 CTF",permalink:"/blog/phasestream-4-cyberapocalypse-2021-ctf"},nextItem:{title:"Emoji Voting - Cyberapocalypse 2021 CTF",permalink:"/blog/emoji-voting-cyberapocalypse-2021-ctf"}},p={authorsImageUrls:[void 0]},l=[{value:"Prompt",id:"prompt",level:3}],s={toc:l},y="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(y,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is a writeup for the challenge Nintendo Base64, part of the Hack the box's Cyberapocalypse CTF 2021, category Crypto."),(0,a.kt)("h3",{id:"prompt"},"Prompt"),(0,a.kt)("p",null,"Aliens are trying to cause great misery for the human race by using our own cryptographic technology to encrypt all our games."),(0,a.kt)("p",null,"Fortunately, the aliens haven't played CryptoHack so they're making several noob mistakes. Therefore they've given us a chance to recover our games and find their flags."),(0,a.kt)("p",null,"They've tried to scramble data on an N64 but don't seem to understand that encoding and ASCII art are not valid types of encryption!"))}u.isMDXComponent=!0}}]);