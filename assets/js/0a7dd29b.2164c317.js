"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3589],{3905:(a,e,t)=>{t.d(e,{Zo:()=>N,kt:()=>h});var s=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,s,n=function(a,e){if(null==a)return{};var t,s,n={},m=Object.keys(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var l=s.createContext({}),i=function(a){var e=s.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},N=function(a){var e=i(a.components);return s.createElement(l.Provider,{value:e},a.children)},c="mdxType",o={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},k=s.forwardRef((function(a,e){var t=a.components,n=a.mdxType,m=a.originalType,l=a.parentName,N=r(a,["components","mdxType","originalType","parentName"]),c=i(t),k=n,h=c["".concat(l,".").concat(k)]||c[k]||o[k]||m;return t?s.createElement(h,p(p({ref:e},N),{},{components:t})):s.createElement(h,p({ref:e},N))}));function h(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var m=t.length,p=new Array(m);p[0]=k;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r[c]="string"==typeof a?a:n,p[1]=r;for(var i=2;i<m;i++)p[i]=t[i];return s.createElement.apply(null,p)}return s.createElement.apply(null,t)}k.displayName="MDXCreateElement"},5774:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>o,frontMatter:()=>m,metadata:()=>r,toc:()=>i});var s=t(7462),n=(t(7294),t(3905));const m={slug:"simulating-the-vicsek-model-how-do-birds-flock-and-insects-swarm",title:"Simulating the Vicsek Model (with time delay) - How do birds flock and insects swarm",description:"The standard Vicsek model suffers from one weakness: it lacks an inertial term, which seems to be important in imitating the behaviour of biological systems. So the goal of this post will be to figure out a way to simulate the Vicsek model with time delay.",authors:"kiroki",tags:["Coding","Science"]},p=void 0,r={permalink:"/blog/simulating-the-vicsek-model-how-do-birds-flock-and-insects-swarm",source:"@site/blog/2020-01-20-20:29:52simulating-the-vicsek-model-how-do-birds-flock-and-insects-swarm.md",title:"Simulating the Vicsek Model (with time delay) - How do birds flock and insects swarm",description:"The standard Vicsek model suffers from one weakness: it lacks an inertial term, which seems to be important in imitating the behaviour of biological systems. So the goal of this post will be to figure out a way to simulate the Vicsek model with time delay.",date:"2020-01-20T00:00:00.000Z",formattedDate:"January 20, 2020",tags:[{label:"Coding",permalink:"/blog/tags/coding"},{label:"Science",permalink:"/blog/tags/science"}],readingTime:14.64,hasTruncateMarker:!0,authors:[{name:"Kiril Panayotov Blagoev",title:"Admin",url:"https://github.com/tihawk",imageURL:"https://github.com/tihawk.png",key:"kiroki"}],frontMatter:{slug:"simulating-the-vicsek-model-how-do-birds-flock-and-insects-swarm",title:"Simulating the Vicsek Model (with time delay) - How do birds flock and insects swarm",description:"The standard Vicsek model suffers from one weakness: it lacks an inertial term, which seems to be important in imitating the behaviour of biological systems. So the goal of this post will be to figure out a way to simulate the Vicsek model with time delay.",authors:"kiroki",tags:["Coding","Science"]},prevItem:{title:"On approximating irrational numbers as fractions (algorithms)",permalink:"/blog/on-approximating-irrational-numbers-as-fractions-algorithms"},nextItem:{title:"How do birds flock and insects swarm: the Problem with current models",permalink:"/blog/further-introduction-to-how-do-birds-flock-and-insects-swarm"}},l={authorsImageUrls:[void 0]},i=[{value:"Analysing the equations of motion",id:"analysing-the-equations-of-motion",level:2}],N={toc:i},c="wrapper";function o(a){let{components:e,...t}=a;return(0,n.kt)(c,(0,s.Z)({},N,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In ",(0,n.kt)("a",{parentName:"p",href:"/blog/introduction-to-how-do-birds-flock-and-insects-swarm/"},"two")," previous ",(0,n.kt)("a",{parentName:"p",href:"/blog/further-introduction-to-how-do-birds-flock-and-insects-swarm/"},"posts"),"  we got to know two main things:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"We can analyse the behaviour of groups of animals using statistical tools like correlation functions"),(0,n.kt)("li",{parentName:"ol"},"We can simulate this behaviour using for example the Vicsek model, and by analysing it the same way as natural groups we can measure the accurateness of the model in replicating natural phenomena.")),(0,n.kt)("p",null,"We also learned that the standard Vicsek model suffers from one weakness: it lacks an inertial term, which seems to be important in imitating the behaviour of biological systems. So the goal of this post will be to figure out a way to simulate the Vicsek model with time delay. Let's start by"),(0,n.kt)("h2",{id:"analysing-the-equations-of-motion"},"Analysing the equations of motion"),(0,n.kt)("div",{className:"math math-display"},(0,n.kt)("span",{parentName:"div",className:"katex-display"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mover",{parentName:"mrow",accent:"true"},(0,n.kt)("msub",{parentName:"mover"},(0,n.kt)("mi",{parentName:"msub"},"v"),(0,n.kt)("mi",{parentName:"msub"},"i")),(0,n.kt)("mo",{parentName:"mover"},"\u20d7")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mn",{parentName:"mrow"},"1"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"v"),(0,n.kt)("mn",{parentName:"msub"},"0")),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub",mathvariant:"script"},"R"),(0,n.kt)("mi",{parentName:"msub"},"\u03b7")),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u0398"),(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mo",{parentName:"mrow",fence:"true"},"["),(0,n.kt)("mover",{parentName:"mrow",accent:"true"},(0,n.kt)("msub",{parentName:"mover"},(0,n.kt)("mi",{parentName:"msub"},"v"),(0,n.kt)("mi",{parentName:"msub"},"i")),(0,n.kt)("mo",{parentName:"mover"},"\u20d7")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("munder",{parentName:"mrow"},(0,n.kt)("mo",{parentName:"munder"},"\u2211"),(0,n.kt)("mrow",{parentName:"munder"},(0,n.kt)("mi",{parentName:"mrow"},"j"),(0,n.kt)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2260"),(0,n.kt)("mi",{parentName:"mrow"},"i"))),(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"n"),(0,n.kt)("mrow",{parentName:"msub"},(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"j"))),(0,n.kt)("mover",{parentName:"mrow",accent:"true"},(0,n.kt)("msub",{parentName:"mover"},(0,n.kt)("mi",{parentName:"msub"},"v"),(0,n.kt)("mi",{parentName:"msub"},"j")),(0,n.kt)("mo",{parentName:"mover"},"\u20d7")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,n.kt)("mo",{parentName:"mrow",fence:"true"},"]")),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},",")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\vec{v_i}(t+1) = v_{0}\\mathscr{R}_{\\eta}\\Theta \\left[ \\vec{v_i}(t) + \\sum_{ j \\neq i }{ n_{ij} \\vec{v_j}(t) } \\right] ,")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord accent"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.714em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"}))))))),(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.2355em"}},(0,n.kt)("span",{parentName:"span",className:"overlay",style:{height:"0.714em",width:"0.471em"}},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},(0,n.kt)("path",{parentName:"svg",d:"M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"})))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"1"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"3.6em",verticalAlign:"-1.55em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"0"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathscr",style:{marginRight:"0.06259em"}},"R"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0626em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"\u03b7"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mord"},"\u0398"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"minner"},(0,n.kt)("span",{parentName:"span",className:"mopen"},(0,n.kt)("span",{parentName:"span",className:"delimsizing mult"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.05em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.25em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.155em"}}),(0,n.kt)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,n.kt)("span",{parentName:"span"},"\u23a3"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.397em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.155em"}}),(0,n.kt)("span",{parentName:"span",style:{height:"0.016em",width:"0.6667em"}},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.6667em",height:"0.016em",style:{width:"0.6667em"},viewBox:"0 0 666.67 16",preserveAspectRatio:"xMinYMin"},(0,n.kt)("path",{parentName:"svg",d:"M319 0 H403 V16 H319z M319 0 H403 V16 H319z"})))),(0,n.kt)("span",{parentName:"span",style:{top:"-4.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.155em"}}),(0,n.kt)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,n.kt)("span",{parentName:"span"},"\u23a1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.55em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mord accent"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.714em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"}))))))),(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.2355em"}},(0,n.kt)("span",{parentName:"span",className:"overlay",style:{height:"0.714em",width:"0.471em"}},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},(0,n.kt)("path",{parentName:"svg",d:"M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"})))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mop op-limits"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.05em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-1.8479em",marginLeft:"0em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05724em"}},"j"),(0,n.kt)("span",{parentName:"span",className:"mrel mtight"},(0,n.kt)("span",{parentName:"span",className:"mrel mtight"},(0,n.kt)("span",{parentName:"span",className:"mord vbox mtight"},(0,n.kt)("span",{parentName:"span",className:"thinbox mtight"},(0,n.kt)("span",{parentName:"span",className:"rlap mtight"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.kt)("span",{parentName:"span",className:"inner"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mrel mtight"},"\ue020"))),(0,n.kt)("span",{parentName:"span",className:"fix"}))))),(0,n.kt)("span",{parentName:"span",className:"mrel mtight"},"=")),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,n.kt)("span",{parentName:"span"},(0,n.kt)("span",{parentName:"span",className:"mop op-symbol large-op"},"\u2211")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.4382em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05724em"}},"ij"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mord accent"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.714em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05724em"}},"j")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,n.kt)("span",{parentName:"span"}))))))),(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.2355em"}},(0,n.kt)("span",{parentName:"span",className:"overlay",style:{height:"0.714em",width:"0.471em"}},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},(0,n.kt)("path",{parentName:"svg",d:"M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"})))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")")),(0,n.kt)("span",{parentName:"span",className:"mclose"},(0,n.kt)("span",{parentName:"span",className:"delimsizing mult"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.05em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.25em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.155em"}}),(0,n.kt)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,n.kt)("span",{parentName:"span"},"\u23a6"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.397em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.155em"}}),(0,n.kt)("span",{parentName:"span",style:{height:"0.016em",width:"0.6667em"}},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.6667em",height:"0.016em",style:{width:"0.6667em"},viewBox:"0 0 666.67 16",preserveAspectRatio:"xMinYMin"},(0,n.kt)("path",{parentName:"svg",d:"M263 0 H347 V16 H263z M263 0 H347 V16 H263z"})))),(0,n.kt)("span",{parentName:"span",style:{top:"-4.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.155em"}}),(0,n.kt)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,n.kt)("span",{parentName:"span"},"\u23a4")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.55em"}},(0,n.kt)("span",{parentName:"span"}))))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mpunct"},",")))))),(0,n.kt)("div",{className:"math math-display"},(0,n.kt)("span",{parentName:"div",className:"katex-display"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mover",{parentName:"mrow",accent:"true"},(0,n.kt)("msub",{parentName:"mover"},(0,n.kt)("mi",{parentName:"msub"},"r"),(0,n.kt)("mi",{parentName:"msub"},"i")),(0,n.kt)("mo",{parentName:"mover"},"\u20d7")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mn",{parentName:"mrow"},"1"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mover",{parentName:"mrow",accent:"true"},(0,n.kt)("msub",{parentName:"mover"},(0,n.kt)("mi",{parentName:"msub"},"r"),(0,n.kt)("mi",{parentName:"msub"},"i")),(0,n.kt)("mo",{parentName:"mover"},"\u20d7")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mover",{parentName:"mrow",accent:"true"},(0,n.kt)("msub",{parentName:"mover"},(0,n.kt)("mi",{parentName:"msub"},"v"),(0,n.kt)("mi",{parentName:"msub"},"i")),(0,n.kt)("mo",{parentName:"mover"},"\u20d7")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mn",{parentName:"mrow"},"1"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mi",{parentName:"mrow",mathvariant:"normal"},".")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\vec{r_i}(t+1) = \\vec{r_i}(t) + \\vec{v_i}(t+1) .")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord accent"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.714em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0278em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"}))))))),(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.2355em"}},(0,n.kt)("span",{parentName:"span",className:"overlay",style:{height:"0.714em",width:"0.471em"}},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},(0,n.kt)("path",{parentName:"svg",d:"M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"})))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"1"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord accent"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.714em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0278em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"}))))))),(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.2355em"}},(0,n.kt)("span",{parentName:"span",className:"overlay",style:{height:"0.714em",width:"0.471em"}},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},(0,n.kt)("path",{parentName:"svg",d:"M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"})))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord accent"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.714em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"}))))))),(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.2355em"}},(0,n.kt)("span",{parentName:"span",className:"overlay",style:{height:"0.714em",width:"0.471em"}},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},(0,n.kt)("path",{parentName:"svg",d:"M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"})))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"1"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mord"},".")))))))}o.isMDXComponent=!0}}]);