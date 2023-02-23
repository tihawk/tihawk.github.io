"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6863],{3905:(t,a,e)=>{e.d(a,{Zo:()=>o,kt:()=>N});var n=e(7294);function s(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){s(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,n,s=function(t,a){if(null==t)return{};var e,n,s={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(s[e]=t[e]);return s}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(s[e]=t[e])}return s}var m=n.createContext({}),p=function(t){var a=n.useContext(m),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},o=function(t){var a=p(t.components);return n.createElement(m.Provider,{value:a},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(t,a){var e=t.components,s=t.mdxType,r=t.originalType,m=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),u=p(e),h=s,N=u["".concat(m,".").concat(h)]||u[h]||c[h]||r;return e?n.createElement(N,l(l({ref:a},o),{},{components:e})):n.createElement(N,l({ref:a},o))}));function N(t,a){var e=arguments,s=a&&a.mdxType;if("string"==typeof t||s){var r=e.length,l=new Array(r);l[0]=h;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=t,i[u]="string"==typeof t?t:s,l[1]=i;for(var p=2;p<r;p++)l[p]=e[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}h.displayName="MDXCreateElement"},1371:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=e(7462),s=(e(7294),e(3905));const r={slug:"quantum-programming-abstraction-level-0",title:"Quantum Programming by abstracting ourselves from Quantum Mechanics: Abstraction level 0",description:"Just as we know that in classical computers we manipulate logical zeroes and ones, we can get an idea of what we are dealing with in the lowest level of logic in a quantum computer.",authors:"kiroki",tags:["Science","Physics","Computing","Quantum","Programming","Computer Science"]},l=void 0,i={permalink:"/blog/quantum-programming-abstraction-level-0",source:"@site/blog/2021-03-27-22:27:23quantum-programming-abstraction-level-0.md",title:"Quantum Programming by abstracting ourselves from Quantum Mechanics: Abstraction level 0",description:"Just as we know that in classical computers we manipulate logical zeroes and ones, we can get an idea of what we are dealing with in the lowest level of logic in a quantum computer.",date:"2021-03-27T00:00:00.000Z",formattedDate:"March 27, 2021",tags:[{label:"Science",permalink:"/blog/tags/science"},{label:"Physics",permalink:"/blog/tags/physics"},{label:"Computing",permalink:"/blog/tags/computing"},{label:"Quantum",permalink:"/blog/tags/quantum"},{label:"Programming",permalink:"/blog/tags/programming"},{label:"Computer Science",permalink:"/blog/tags/computer-science"}],readingTime:9.675,hasTruncateMarker:!0,authors:[{name:"Kiril Panayotov Blagoev",title:"Admin",url:"https://github.com/tihawk",imageURL:"https://github.com/tihawk.png",key:"kiroki"}],frontMatter:{slug:"quantum-programming-abstraction-level-0",title:"Quantum Programming by abstracting ourselves from Quantum Mechanics: Abstraction level 0",description:"Just as we know that in classical computers we manipulate logical zeroes and ones, we can get an idea of what we are dealing with in the lowest level of logic in a quantum computer.",authors:"kiroki",tags:["Science","Physics","Computing","Quantum","Programming","Computer Science"]},prevItem:{title:"Quantum Programming - Abstraction level 1: Logic Gates",permalink:"/blog/quantum-programming-abstraction-level-1-logic-gates"},nextItem:{title:"Celestial Navigation - coordinate systems",permalink:"/blog/astronavigation-coordinate-systems"}},m={authorsImageUrls:[void 0]},p=[{value:"Parallels to classical computers",id:"parallels-to-classical-computers",level:2},{value:"Qubits vs bits",id:"qubits-vs-bits",level:3},{value:"Qubits",id:"qubits",level:3},{value:"Clumping the qubits together",id:"clumping-the-qubits-together",level:3},{value:"Logic Gates",id:"logic-gates",level:3},{value:"Quil - a Quantum Instruction Language",id:"quil---a-quantum-instruction-language",level:2},{value:"QAM - Quantum Abstract Machine",id:"qam---quantum-abstract-machine",level:3}],o={toc:p},u="wrapper";function c(t){let{components:a,...e}=t;return(0,s.kt)(u,(0,n.Z)({},o,e,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"/blog/quantum-programming-abstraction-level-0/"},"Quantum Programming by abstracting ourselves from Quantum Mechanics: Abstraction level 0")," (this)"),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"/blog/quantum-programming-abstraction-level-1-logic-gates/"},"Quantum Programming - Abstraction level 1: Logic Gates")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"/blog/quantum-programming-abstraction-level-2-algorithms/"},"Quantum Programming - Abstraction level 2: State Machine and Algorithms"))),(0,s.kt)("p",null,"The invention of the personal computer, and the further development of the  ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_programming_languages"},"hundreds")," of programming languages which utilise it has allowed us programmers to completely  ",(0,s.kt)("strong",{parentName:"p"},"abstract")," ourselves from the world of electrons flowing through solid matter, and further from the low level programming of turning gates and transistors on and off to produce binary data."),(0,s.kt)("p",null,"And this seems to be the way we as a technological society operate. We like to build abstractions on top of abstractions, until we can communicate with our machines in an as humanly a way as we find easy, and still practical."),(0,s.kt)("p",null,"As solving problems on a quantum machine becomes more of a practical reality, we will be able to start using the terms ",(0,s.kt)("em",{parentName:"p"},"applied")," and ",(0,s.kt)("em",{parentName:"p"},"quantum mechanics")," in the same context. This would be a time, in which we would be able to abstract ourselves from the ",(0,s.kt)("em",{parentName:"p"},"how and why")," of quantum mechanics, and simply utilise its weirdness in real world applications."),(0,s.kt)("p",null,"But just as we know that in classical computers ultimately it all comes down to ones and zeroes being flipped around in a memory grid, we have to have an idea of what we are dealing with in the lowest level of logic in a quantum computer. What are our basic logical constructs allowing us to build and manipulate data, when it comes to quantum computing."),(0,s.kt)("h2",{id:"parallels-to-classical-computers"},"Parallels to classical computers"),(0,s.kt)("h3",{id:"qubits-vs-bits"},"Qubits vs bits"),(0,s.kt)("p",null,"We have to establish a logic timeline here. In classical computers we have certain steps with which we make a calculation. Let's concentrate on two in particular."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"We manipulate a bit's value. We can either flip its value from ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0")))))," to ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1")))))," or from ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1")))))," to ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"))))),", or keep it as it is."),(0,s.kt)("li",{parentName:"ol"},"Now we can measure the bit's value. We will now observe whether it's a ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1")))))," or a ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"))))),".")),(0,s.kt)("p",null,"We can also note that, after measuring it, the bit continues being whatever it was before we observed its value, the act of measuring did nothing to change that."),(0,s.kt)("p",null,"It stands to reason, that if we kept track of what's going on, we would already know whether the bit was a 1 or a 0 before even measuring it. As we will see in a second though,"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"In the majority of cases, we will have no way of knowing a quantum bit's value before measuring it.")),(0,s.kt)("h3",{id:"qubits"},"Qubits"),(0,s.kt)("p",null,"The qubits can also be in the state of 1 or 0, but they can also be in both states at the same time. And when they are in this so called superposition, the states of 0 and 1 are associated with a probability - that is if you take a qubit and measure it, it will choose whether to appear as a 0 or a 1 depending on that probability",(0,s.kt)("sup",{parentName:"p",id:"fnref-1-33a7e8"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1-33a7e8",className:"footnote-ref"},"1")),"."),(0,s.kt)("p",null,"This is important to note - a qubit can hold onto its superposition only as long as it's not being measured. The moment its value is being extracted, the wavefunction defining its probability collapses, and it randomly chooses to be a 0 or a 1 according to its probability before the collapse."),(0,s.kt)("p",null,"Another point to make here, is that we can manipulate the bits in such a way, that the probability is 100% for it being either 1 or a 0. This way, we can use a quantum computer basically the same way as we would use a classical one. But we would also lose one of the advantages of a quantum computer - utilising the quantum weirdness brought by superposition (and later entanglement)."),(0,s.kt)("h3",{id:"clumping-the-qubits-together"},"Clumping the qubits together"),(0,s.kt)("p",null,"Let's consider now that we have many more than one bits in our memory bank. Let's say we have 3! Let's put their possible values of 1 and 0 in a table of all possible states of the system"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"state"),(0,s.kt)("th",{parentName:"tr",align:null},"q2"),(0,s.kt)("th",{parentName:"tr",align:null},"q1"),(0,s.kt)("th",{parentName:"tr",align:null},"q0"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"0"),(0,s.kt)("td",{parentName:"tr",align:null},"0"),(0,s.kt)("td",{parentName:"tr",align:null},"0")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"2"),(0,s.kt)("td",{parentName:"tr",align:null},"0"),(0,s.kt)("td",{parentName:"tr",align:null},"0"),(0,s.kt)("td",{parentName:"tr",align:null},"1")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"3"),(0,s.kt)("td",{parentName:"tr",align:null},"0"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"0")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"4"),(0,s.kt)("td",{parentName:"tr",align:null},"0"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"1")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"5"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"0"),(0,s.kt)("td",{parentName:"tr",align:null},"0")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"6"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"0"),(0,s.kt)("td",{parentName:"tr",align:null},"1")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"7"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"0")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"8"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"1")))),(0,s.kt)("p",null,"We can now observe, that there are 8 states in this system of 3 bits. With 4 bits you get 16 states, with 8 - 256, and so on growing exponentially, such that the number of states is equal to 2 to the power of number of bits. In other words, for each bit added, the number of states doubles."),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"n"),(0,s.kt)("mrow",{parentName:"msub"},(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"s"))),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("msub",{parentName:"msup"},(0,s.kt)("mi",{parentName:"msub"},"m"),(0,s.kt)("mrow",{parentName:"msub"},(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"s"))))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n_{states} = 2^{m_{bits}}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2806em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"es"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7144em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7144em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.113em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"m"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3448em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.3488em",marginLeft:"0em",marginRight:"0.0714em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"bi"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"s"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1512em"}},(0,s.kt)("span",{parentName:"span"}))))))))))))))))))),(0,s.kt)("p",null,"This is no different to holding information in a grid of bits. The difference comes when we try to access those states to manipulate or measure them. When a computer does operations on a state, it loads it into a register. In a single CPU inside a classical computer, a single state can be loaded into the register and manipulated. What's interesting is that the quantum register as such stores all ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mi",{parentName:"msup"},"n"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6644em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6644em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"))))))))))))," possible states at the same time, and can simultaniously change all of them by changing a single qubit's probability distribution."),(0,s.kt)("p",null,"Let's expand a bit on that. Imagine the quantum register as a simple physical grid of qubits, each qubit containing information about its probability of collapsing into either a 1 or a 0. If we take the probabilities of all qubits, we can easily calculate the probability of each of the system states that we listed above appearing when we collapse the whole register. For example, assuming that all 3 qubits have a 50/50 chance of collapsing into a 1 or a 0, we would see that all states have equal probability as well, and we know that the probabilities should add up to 1:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"probability"),(0,s.kt)("th",{parentName:"tr",align:null},"q2"),(0,s.kt)("th",{parentName:"tr",align:null},"q1"),(0,s.kt)("th",{parentName:"tr",align:null},"q0"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"12.5%"),(0,s.kt)("td",{parentName:"tr",align:null},"0"),(0,s.kt)("td",{parentName:"tr",align:null},"0"),(0,s.kt)("td",{parentName:"tr",align:null},"0")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"12.5%"),(0,s.kt)("td",{parentName:"tr",align:null},"0"),(0,s.kt)("td",{parentName:"tr",align:null},"0"),(0,s.kt)("td",{parentName:"tr",align:null},"1")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"12.5%"),(0,s.kt)("td",{parentName:"tr",align:null},"0"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"0")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"12.5%"),(0,s.kt)("td",{parentName:"tr",align:null},"0"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"1")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"12.5%"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"0"),(0,s.kt)("td",{parentName:"tr",align:null},"0")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"12.5%"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"0"),(0,s.kt)("td",{parentName:"tr",align:null},"1")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"12.5%"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"0")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"12.5%"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"1")))),(0,s.kt)("p",null,"So we can redefine the information held inside a quantum register as the list of probabilities for every single state occurring when we observe the system. As this list is the same length as the list of all possible states, the quantum register holds information equal to ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mtext",{parentName:"msup"},"number\xa0of\xa0bits"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{\\text{number of bits}}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8491em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8491em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord text mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"number\xa0of\xa0bits")))))))))))))),". The catch of course is, that when we measure the system, it collapses to one of the states, and then we have information equal to the number of bits."),(0,s.kt)("p",null,"But before we measure the system,"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"if we change the probability of just one qubit, we change the probability distribution of all states immediately.")),(0,s.kt)("p",null,"Let's say that we change the probability of q2 to be such that it has a 100% chance of being a 0. Then we get"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"probability"),(0,s.kt)("th",{parentName:"tr",align:null},"q2"),(0,s.kt)("th",{parentName:"tr",align:null},"q1"),(0,s.kt)("th",{parentName:"tr",align:null},"q0"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"25%"),(0,s.kt)("td",{parentName:"tr",align:null},"0"),(0,s.kt)("td",{parentName:"tr",align:null},"0"),(0,s.kt)("td",{parentName:"tr",align:null},"0")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"25%"),(0,s.kt)("td",{parentName:"tr",align:null},"0"),(0,s.kt)("td",{parentName:"tr",align:null},"0"),(0,s.kt)("td",{parentName:"tr",align:null},"1")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"25%"),(0,s.kt)("td",{parentName:"tr",align:null},"0"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"0")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"25%"),(0,s.kt)("td",{parentName:"tr",align:null},"0"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"1")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"0%"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"0"),(0,s.kt)("td",{parentName:"tr",align:null},"0")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"0%"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"0"),(0,s.kt)("td",{parentName:"tr",align:null},"1")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"0%"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"0")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"0%"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"1")))),(0,s.kt)("p",null,"In other words, all states in which q2 is 1 are impossible, and the other 4 states have equal probability."),(0,s.kt)("p",null,"The next issue is that when we collapse the system, we will get one of the above states. We still don't know what the probabilities are, we just know that one of the states are possible. But,"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"if we collapse the system multiple times, after setting up the qubits the same way every time, we will get statstical information about the probability of each state occurring.")),(0,s.kt)("h3",{id:"logic-gates"},"Logic Gates"),(0,s.kt)("p",null,"So, in order to change the probability of each state occurring, we need to manipulate the probability of each qubit. In a classical computer, in order to manipulate a bit we use ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Logic_gate"},"logic gates"),"  such as NOT, SET1, SET0 and IDENTITY for single bits, and AND, OR, XOR, etc. for two bits.",(0,s.kt)("sup",{parentName:"p",id:"fnref-2-33a7e8"},(0,s.kt)("a",{parentName:"sup",href:"#fn-2-33a7e8",className:"footnote-ref"},"2"))),(0,s.kt)("p",null,"In an analagous way, we have logical gates in the quantum world. Some of them are for operating on one qubit, some of them for two, and you can have ones operating on three. There are many logical gates that can be defined for qubits, and really as long as one obeys the mathematical constraints of QM, the possibilities are endless. But thankfully, ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Solovay%E2%80%93Kitaev_theorem"},"it's been proven"),", that any operation on a quantum computer can be effectively reduced to a finite number of gates, so that we can define a small enough ",(0,s.kt)("strong",{parentName:"p"},"instruction set")," with which we can manipulate the qubits into any probability that we require."),(0,s.kt)("h2",{id:"quil---a-quantum-instruction-language"},"Quil - a Quantum Instruction Language"),(0,s.kt)("p",null,"We have now reached our first level of abstraction in quantum programming - the instruction set. We can now basically define an ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Assembly_language"},"assembly-like")," language to write code in for quantum computers. Let's have a technical definition of this abstraction, before finishing this post. I want to concentrate on the actual gates in a separate post, as this will become too unwieldy otherwise."),(0,s.kt)("h3",{id:"qam---quantum-abstract-machine"},"QAM - Quantum Abstract Machine"),(0,s.kt)("p",null,"This is an abstract representation of a general-purpose quantum computing device (a quantum computer). Notably, QAM defines manipulation techniques for both classical and quantum states. This means that we will have both qubits to work with, and classical bits to store observation data in. As such QAM is specified by a list of elements:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The number of qubits"),(0,s.kt)("li",{parentName:"ul"},"A number of classical bits (e.g. for storing the collapsed states of the qubits)"),(0,s.kt)("li",{parentName:"ul"},"A list of gates to manipulate the qubits with"),(0,s.kt)("li",{parentName:"ul"},"A sequence of instructions specifying the quantum instruction language"),(0,s.kt)("li",{parentName:"ul"},"An integer counter indicating the position of the next instruction to execute")),(0,s.kt)("p",null,"With this, we are now free to define gates and assembly-like instructions, with which to manipulate the probabilities of single or multiple qubits, ultimately changing the probability distribution of the states of the qubit circuit. In the next post we get into defining the Bloch sphere, and a list of gates that operate on it - reaching ",(0,s.kt)("a",{parentName:"p",href:"https://kblagoev.com/blog/quantum-programming-abstraction-level-1-logic-gates/"},"abstraction level 1"),"."),(0,s.kt)("div",{className:"footnotes"},(0,s.kt)("hr",{parentName:"div"}),(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol",id:"fn-1-33a7e8"},"Mind you, there's nothing magical about that statement, it's just a fact of nature that we can't experience in the macroscopic world - any elementary particle left to its own accords will stay in a superposition of all of its possible states, until it's acted upon (observed), at which point its wavefunction which holds information about the probability of all its states collapses, and the particle chooses one of those possible states at random.",(0,s.kt)("a",{parentName:"li",href:"#fnref-1-33a7e8",className:"footnote-backref"},"\u21a9")),(0,s.kt)("li",{parentName:"ol",id:"fn-2-33a7e8"},"Without going into much detail I want to point out some facts: 1. Classical computer gates are mostly irreversible, meaning that after the application of a gate, you can't figure out what the original input was. Quantum ones are all required to be reversible due to the physics of QM. 2. Quantum gates are represented by unitary matrices. Extremely useful. In fact I will probably write a second version of all of this, from the point of view of linear algebra, because it's so satisfying to look at.",(0,s.kt)("a",{parentName:"li",href:"#fnref-2-33a7e8",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);