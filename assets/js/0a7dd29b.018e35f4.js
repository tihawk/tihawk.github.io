"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1728],{1830:(a,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>y,frontMatter:()=>m,metadata:()=>r,toc:()=>i});var t=s(8168),n=(s(6540),s(5680));const m={slug:"simulating-the-vicsek-model-how-do-birds-flock-and-insects-swarm",title:"Simulating the Vicsek Model (with time delay) - How do birds flock and insects swarm",description:"The standard Vicsek model suffers from one weakness: it lacks an inertial term, which seems to be important in imitating the behaviour of biological systems. So the goal of this post will be to figure out a way to simulate the Vicsek model with time delay.",authors:"kiroki",tags:["Coding","Science"]},p=void 0,r={permalink:"/blog/simulating-the-vicsek-model-how-do-birds-flock-and-insects-swarm",source:"@site/blog/2020-01-20-20:29:52simulating-the-vicsek-model-how-do-birds-flock-and-insects-swarm.md",title:"Simulating the Vicsek Model (with time delay) - How do birds flock and insects swarm",description:"The standard Vicsek model suffers from one weakness: it lacks an inertial term, which seems to be important in imitating the behaviour of biological systems. So the goal of this post will be to figure out a way to simulate the Vicsek model with time delay.",date:"2020-01-20T00:00:00.000Z",formattedDate:"January 20, 2020",tags:[{label:"Coding",permalink:"/blog/tags/coding"},{label:"Science",permalink:"/blog/tags/science"}],readingTime:14.665,hasTruncateMarker:!0,authors:[{name:"Kiril Panayotov Blagoev",title:"Admin",url:"https://github.com/tihawk",imageURL:"https://github.com/tihawk.png",key:"kiroki"}],frontMatter:{slug:"simulating-the-vicsek-model-how-do-birds-flock-and-insects-swarm",title:"Simulating the Vicsek Model (with time delay) - How do birds flock and insects swarm",description:"The standard Vicsek model suffers from one weakness: it lacks an inertial term, which seems to be important in imitating the behaviour of biological systems. So the goal of this post will be to figure out a way to simulate the Vicsek model with time delay.",authors:"kiroki",tags:["Coding","Science"]},prevItem:{title:"On approximating irrational numbers as fractions (algorithms)",permalink:"/blog/on-approximating-irrational-numbers-as-fractions-algorithms"},nextItem:{title:"How do birds flock and insects swarm: the Problem with current models",permalink:"/blog/further-introduction-to-how-do-birds-flock-and-insects-swarm"}},l={authorsImageUrls:[void 0]},i=[{value:"Analysing the equations of motion",id:"analysing-the-equations-of-motion",level:2}],g={toc:i},N="wrapper";function y(a){let{components:e,...s}=a;return(0,n.yg)(N,(0,t.A)({},g,s,{components:e,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"In ",(0,n.yg)("a",{parentName:"p",href:"/blog/introduction-to-how-do-birds-flock-and-insects-swarm/"},"two")," previous ",(0,n.yg)("a",{parentName:"p",href:"/blog/further-introduction-to-how-do-birds-flock-and-insects-swarm/"},"posts"),"  we got to know two main things:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"We can analyse the behaviour of groups of animals using statistical tools like correlation functions"),(0,n.yg)("li",{parentName:"ol"},"We can simulate this behaviour using for example the Vicsek model, and by analysing it the same way as natural groups we can measure the accurateness of the model in replicating natural phenomena.")),(0,n.yg)("p",null,"We also learned that the standard Vicsek model suffers from one weakness: it lacks an inertial term, which seems to be important in imitating the behaviour of biological systems. So the goal of this post will be to figure out a way to simulate the Vicsek model with time delay. Let's start by"),(0,n.yg)("h2",{id:"analysing-the-equations-of-motion"},"Analysing the equations of motion"),(0,n.yg)("div",{className:"math math-display"},(0,n.yg)("span",{parentName:"div",className:"katex-display"},(0,n.yg)("span",{parentName:"span",className:"katex"},(0,n.yg)("span",{parentName:"span",className:"katex-mathml"},(0,n.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,n.yg)("semantics",{parentName:"math"},(0,n.yg)("mrow",{parentName:"semantics"},(0,n.yg)("mover",{parentName:"mrow",accent:"true"},(0,n.yg)("msub",{parentName:"mover"},(0,n.yg)("mi",{parentName:"msub"},"v"),(0,n.yg)("mi",{parentName:"msub"},"i")),(0,n.yg)("mo",{parentName:"mover"},"\u20d7")),(0,n.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.yg)("mi",{parentName:"mrow"},"t"),(0,n.yg)("mo",{parentName:"mrow"},"+"),(0,n.yg)("mn",{parentName:"mrow"},"1"),(0,n.yg)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.yg)("mo",{parentName:"mrow"},"="),(0,n.yg)("msub",{parentName:"mrow"},(0,n.yg)("mi",{parentName:"msub"},"v"),(0,n.yg)("mn",{parentName:"msub"},"0")),(0,n.yg)("msub",{parentName:"mrow"},(0,n.yg)("mi",{parentName:"msub",mathvariant:"script"},"R"),(0,n.yg)("mi",{parentName:"msub"},"\u03b7")),(0,n.yg)("mi",{parentName:"mrow",mathvariant:"normal"},"\u0398"),(0,n.yg)("mrow",{parentName:"mrow"},(0,n.yg)("mo",{parentName:"mrow",fence:"true"},"["),(0,n.yg)("mover",{parentName:"mrow",accent:"true"},(0,n.yg)("msub",{parentName:"mover"},(0,n.yg)("mi",{parentName:"msub"},"v"),(0,n.yg)("mi",{parentName:"msub"},"i")),(0,n.yg)("mo",{parentName:"mover"},"\u20d7")),(0,n.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.yg)("mi",{parentName:"mrow"},"t"),(0,n.yg)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.yg)("mo",{parentName:"mrow"},"+"),(0,n.yg)("munder",{parentName:"mrow"},(0,n.yg)("mo",{parentName:"munder"},"\u2211"),(0,n.yg)("mrow",{parentName:"munder"},(0,n.yg)("mi",{parentName:"mrow"},"j"),(0,n.yg)("mo",{parentName:"mrow",mathvariant:"normal"},"\u2260"),(0,n.yg)("mi",{parentName:"mrow"},"i"))),(0,n.yg)("mrow",{parentName:"mrow"},(0,n.yg)("msub",{parentName:"mrow"},(0,n.yg)("mi",{parentName:"msub"},"n"),(0,n.yg)("mrow",{parentName:"msub"},(0,n.yg)("mi",{parentName:"mrow"},"i"),(0,n.yg)("mi",{parentName:"mrow"},"j"))),(0,n.yg)("mover",{parentName:"mrow",accent:"true"},(0,n.yg)("msub",{parentName:"mover"},(0,n.yg)("mi",{parentName:"msub"},"v"),(0,n.yg)("mi",{parentName:"msub"},"j")),(0,n.yg)("mo",{parentName:"mover"},"\u20d7")),(0,n.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.yg)("mi",{parentName:"mrow"},"t"),(0,n.yg)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,n.yg)("mo",{parentName:"mrow",fence:"true"},"]")),(0,n.yg)("mo",{parentName:"mrow",separator:"true"},",")),(0,n.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\vec{v_i}(t+1) = v_{0}\\mathscr{R}_{\\eta}\\Theta \\left[ \\vec{v_i}(t) + \\sum_{ j \\neq i }{ n_{ij} \\vec{v_j}(t) } \\right] ,")))),(0,n.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.yg)("span",{parentName:"span",className:"base"},(0,n.yg)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.yg)("span",{parentName:"span",className:"mord accent"},(0,n.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.714em"}},(0,n.yg)("span",{parentName:"span",style:{top:"-3em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.yg)("span",{parentName:"span",className:"mord"},(0,n.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,n.yg)("span",{parentName:"span",className:"msupsub"},(0,n.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.yg)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.yg)("span",{parentName:"span"}))))))),(0,n.yg)("span",{parentName:"span",style:{top:"-3em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.yg)("span",{parentName:"span",className:"accent-body",style:{left:"-0.2355em"}},(0,n.yg)("span",{parentName:"span",className:"overlay",style:{height:"0.714em",width:"0.471em"}},(0,n.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},(0,n.yg)("path",{parentName:"svg",d:"M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"})))))),(0,n.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.yg)("span",{parentName:"span"}))))),(0,n.yg)("span",{parentName:"span",className:"mopen"},"("),(0,n.yg)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.yg)("span",{parentName:"span",className:"mbin"},"+"),(0,n.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.yg)("span",{parentName:"span",className:"base"},(0,n.yg)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.yg)("span",{parentName:"span",className:"mord"},"1"),(0,n.yg)("span",{parentName:"span",className:"mclose"},")"),(0,n.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.yg)("span",{parentName:"span",className:"mrel"},"="),(0,n.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.yg)("span",{parentName:"span",className:"base"},(0,n.yg)("span",{parentName:"span",className:"strut",style:{height:"3.6em",verticalAlign:"-1.55em"}}),(0,n.yg)("span",{parentName:"span",className:"mord"},(0,n.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,n.yg)("span",{parentName:"span",className:"msupsub"},(0,n.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.yg)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.yg)("span",{parentName:"span",className:"mord mtight"},(0,n.yg)("span",{parentName:"span",className:"mord mtight"},"0"))))),(0,n.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.yg)("span",{parentName:"span"})))))),(0,n.yg)("span",{parentName:"span",className:"mord"},(0,n.yg)("span",{parentName:"span",className:"mord mathscr",style:{marginRight:"0.06259em"}},"R"),(0,n.yg)("span",{parentName:"span",className:"msupsub"},(0,n.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,n.yg)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0626em",marginRight:"0.05em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.yg)("span",{parentName:"span",className:"mord mtight"},(0,n.yg)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"\u03b7"))))),(0,n.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,n.yg)("span",{parentName:"span"})))))),(0,n.yg)("span",{parentName:"span",className:"mord"},"\u0398"),(0,n.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.yg)("span",{parentName:"span",className:"minner"},(0,n.yg)("span",{parentName:"span",className:"mopen"},(0,n.yg)("span",{parentName:"span",className:"delimsizing mult"},(0,n.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"2.05em"}},(0,n.yg)("span",{parentName:"span",style:{top:"-2.25em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3.155em"}}),(0,n.yg)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,n.yg)("span",{parentName:"span"},"\u23a3"))),(0,n.yg)("span",{parentName:"span",style:{top:"-3.397em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3.155em"}}),(0,n.yg)("span",{parentName:"span",style:{height:"0.016em",width:"0.6667em"}},(0,n.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.6667em",height:"0.016em",style:{width:"0.6667em"},viewBox:"0 0 666.67 16",preserveAspectRatio:"xMinYMin"},(0,n.yg)("path",{parentName:"svg",d:"M319 0 H403 V16 H319z M319 0 H403 V16 H319z"})))),(0,n.yg)("span",{parentName:"span",style:{top:"-4.05em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3.155em"}}),(0,n.yg)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,n.yg)("span",{parentName:"span"},"\u23a1")))),(0,n.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"1.55em"}},(0,n.yg)("span",{parentName:"span"})))))),(0,n.yg)("span",{parentName:"span",className:"mord accent"},(0,n.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.714em"}},(0,n.yg)("span",{parentName:"span",style:{top:"-3em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.yg)("span",{parentName:"span",className:"mord"},(0,n.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,n.yg)("span",{parentName:"span",className:"msupsub"},(0,n.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.yg)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.yg)("span",{parentName:"span"}))))))),(0,n.yg)("span",{parentName:"span",style:{top:"-3em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.yg)("span",{parentName:"span",className:"accent-body",style:{left:"-0.2355em"}},(0,n.yg)("span",{parentName:"span",className:"overlay",style:{height:"0.714em",width:"0.471em"}},(0,n.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},(0,n.yg)("path",{parentName:"svg",d:"M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"})))))),(0,n.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.yg)("span",{parentName:"span"}))))),(0,n.yg)("span",{parentName:"span",className:"mopen"},"("),(0,n.yg)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.yg)("span",{parentName:"span",className:"mclose"},")"),(0,n.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.yg)("span",{parentName:"span",className:"mbin"},"+"),(0,n.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.yg)("span",{parentName:"span",className:"mop op-limits"},(0,n.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"1.05em"}},(0,n.yg)("span",{parentName:"span",style:{top:"-1.8479em",marginLeft:"0em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,n.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.yg)("span",{parentName:"span",className:"mord mtight"},(0,n.yg)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05724em"}},"j"),(0,n.yg)("span",{parentName:"span",className:"mrel mtight"},(0,n.yg)("span",{parentName:"span",className:"mrel mtight"},(0,n.yg)("span",{parentName:"span",className:"mord vbox mtight"},(0,n.yg)("span",{parentName:"span",className:"thinbox mtight"},(0,n.yg)("span",{parentName:"span",className:"rlap mtight"},(0,n.yg)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.yg)("span",{parentName:"span",className:"inner"},(0,n.yg)("span",{parentName:"span",className:"mord mtight"},(0,n.yg)("span",{parentName:"span",className:"mrel mtight"},"\ue020"))),(0,n.yg)("span",{parentName:"span",className:"fix"}))))),(0,n.yg)("span",{parentName:"span",className:"mrel mtight"},"=")),(0,n.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.yg)("span",{parentName:"span",style:{top:"-3.05em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,n.yg)("span",{parentName:"span"},(0,n.yg)("span",{parentName:"span",className:"mop op-symbol large-op"},"\u2211")))),(0,n.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"1.4382em"}},(0,n.yg)("span",{parentName:"span"}))))),(0,n.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.yg)("span",{parentName:"span",className:"mord"},(0,n.yg)("span",{parentName:"span",className:"mord"},(0,n.yg)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,n.yg)("span",{parentName:"span",className:"msupsub"},(0,n.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.yg)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.yg)("span",{parentName:"span",className:"mord mtight"},(0,n.yg)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05724em"}},"ij"))))),(0,n.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,n.yg)("span",{parentName:"span"})))))),(0,n.yg)("span",{parentName:"span",className:"mord accent"},(0,n.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.714em"}},(0,n.yg)("span",{parentName:"span",style:{top:"-3em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.yg)("span",{parentName:"span",className:"mord"},(0,n.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,n.yg)("span",{parentName:"span",className:"msupsub"},(0,n.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.yg)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.yg)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05724em"}},"j")))),(0,n.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,n.yg)("span",{parentName:"span"}))))))),(0,n.yg)("span",{parentName:"span",style:{top:"-3em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.yg)("span",{parentName:"span",className:"accent-body",style:{left:"-0.2355em"}},(0,n.yg)("span",{parentName:"span",className:"overlay",style:{height:"0.714em",width:"0.471em"}},(0,n.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},(0,n.yg)("path",{parentName:"svg",d:"M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"})))))),(0,n.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,n.yg)("span",{parentName:"span"}))))),(0,n.yg)("span",{parentName:"span",className:"mopen"},"("),(0,n.yg)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.yg)("span",{parentName:"span",className:"mclose"},")")),(0,n.yg)("span",{parentName:"span",className:"mclose"},(0,n.yg)("span",{parentName:"span",className:"delimsizing mult"},(0,n.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"2.05em"}},(0,n.yg)("span",{parentName:"span",style:{top:"-2.25em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3.155em"}}),(0,n.yg)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,n.yg)("span",{parentName:"span"},"\u23a6"))),(0,n.yg)("span",{parentName:"span",style:{top:"-3.397em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3.155em"}}),(0,n.yg)("span",{parentName:"span",style:{height:"0.016em",width:"0.6667em"}},(0,n.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.6667em",height:"0.016em",style:{width:"0.6667em"},viewBox:"0 0 666.67 16",preserveAspectRatio:"xMinYMin"},(0,n.yg)("path",{parentName:"svg",d:"M263 0 H347 V16 H263z M263 0 H347 V16 H263z"})))),(0,n.yg)("span",{parentName:"span",style:{top:"-4.05em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3.155em"}}),(0,n.yg)("span",{parentName:"span",className:"delimsizinginner delim-size4"},(0,n.yg)("span",{parentName:"span"},"\u23a4")))),(0,n.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"1.55em"}},(0,n.yg)("span",{parentName:"span"}))))))),(0,n.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.yg)("span",{parentName:"span",className:"mpunct"},",")))))),(0,n.yg)("div",{className:"math math-display"},(0,n.yg)("span",{parentName:"div",className:"katex-display"},(0,n.yg)("span",{parentName:"span",className:"katex"},(0,n.yg)("span",{parentName:"span",className:"katex-mathml"},(0,n.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,n.yg)("semantics",{parentName:"math"},(0,n.yg)("mrow",{parentName:"semantics"},(0,n.yg)("mover",{parentName:"mrow",accent:"true"},(0,n.yg)("msub",{parentName:"mover"},(0,n.yg)("mi",{parentName:"msub"},"r"),(0,n.yg)("mi",{parentName:"msub"},"i")),(0,n.yg)("mo",{parentName:"mover"},"\u20d7")),(0,n.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.yg)("mi",{parentName:"mrow"},"t"),(0,n.yg)("mo",{parentName:"mrow"},"+"),(0,n.yg)("mn",{parentName:"mrow"},"1"),(0,n.yg)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.yg)("mo",{parentName:"mrow"},"="),(0,n.yg)("mover",{parentName:"mrow",accent:"true"},(0,n.yg)("msub",{parentName:"mover"},(0,n.yg)("mi",{parentName:"msub"},"r"),(0,n.yg)("mi",{parentName:"msub"},"i")),(0,n.yg)("mo",{parentName:"mover"},"\u20d7")),(0,n.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.yg)("mi",{parentName:"mrow"},"t"),(0,n.yg)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.yg)("mo",{parentName:"mrow"},"+"),(0,n.yg)("mover",{parentName:"mrow",accent:"true"},(0,n.yg)("msub",{parentName:"mover"},(0,n.yg)("mi",{parentName:"msub"},"v"),(0,n.yg)("mi",{parentName:"msub"},"i")),(0,n.yg)("mo",{parentName:"mover"},"\u20d7")),(0,n.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.yg)("mi",{parentName:"mrow"},"t"),(0,n.yg)("mo",{parentName:"mrow"},"+"),(0,n.yg)("mn",{parentName:"mrow"},"1"),(0,n.yg)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.yg)("mi",{parentName:"mrow",mathvariant:"normal"},".")),(0,n.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\vec{r_i}(t+1) = \\vec{r_i}(t) + \\vec{v_i}(t+1) .")))),(0,n.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.yg)("span",{parentName:"span",className:"base"},(0,n.yg)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.yg)("span",{parentName:"span",className:"mord accent"},(0,n.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.714em"}},(0,n.yg)("span",{parentName:"span",style:{top:"-3em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.yg)("span",{parentName:"span",className:"mord"},(0,n.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,n.yg)("span",{parentName:"span",className:"msupsub"},(0,n.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.yg)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0278em",marginRight:"0.05em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.yg)("span",{parentName:"span"}))))))),(0,n.yg)("span",{parentName:"span",style:{top:"-3em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.yg)("span",{parentName:"span",className:"accent-body",style:{left:"-0.2355em"}},(0,n.yg)("span",{parentName:"span",className:"overlay",style:{height:"0.714em",width:"0.471em"}},(0,n.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},(0,n.yg)("path",{parentName:"svg",d:"M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"})))))),(0,n.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.yg)("span",{parentName:"span"}))))),(0,n.yg)("span",{parentName:"span",className:"mopen"},"("),(0,n.yg)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.yg)("span",{parentName:"span",className:"mbin"},"+"),(0,n.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.yg)("span",{parentName:"span",className:"base"},(0,n.yg)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.yg)("span",{parentName:"span",className:"mord"},"1"),(0,n.yg)("span",{parentName:"span",className:"mclose"},")"),(0,n.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.yg)("span",{parentName:"span",className:"mrel"},"="),(0,n.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.yg)("span",{parentName:"span",className:"base"},(0,n.yg)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.yg)("span",{parentName:"span",className:"mord accent"},(0,n.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.714em"}},(0,n.yg)("span",{parentName:"span",style:{top:"-3em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.yg)("span",{parentName:"span",className:"mord"},(0,n.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,n.yg)("span",{parentName:"span",className:"msupsub"},(0,n.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.yg)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0278em",marginRight:"0.05em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.yg)("span",{parentName:"span"}))))))),(0,n.yg)("span",{parentName:"span",style:{top:"-3em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.yg)("span",{parentName:"span",className:"accent-body",style:{left:"-0.2355em"}},(0,n.yg)("span",{parentName:"span",className:"overlay",style:{height:"0.714em",width:"0.471em"}},(0,n.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},(0,n.yg)("path",{parentName:"svg",d:"M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"})))))),(0,n.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.yg)("span",{parentName:"span"}))))),(0,n.yg)("span",{parentName:"span",className:"mopen"},"("),(0,n.yg)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.yg)("span",{parentName:"span",className:"mclose"},")"),(0,n.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.yg)("span",{parentName:"span",className:"mbin"},"+"),(0,n.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.yg)("span",{parentName:"span",className:"base"},(0,n.yg)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.yg)("span",{parentName:"span",className:"mord accent"},(0,n.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.714em"}},(0,n.yg)("span",{parentName:"span",style:{top:"-3em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.yg)("span",{parentName:"span",className:"mord"},(0,n.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,n.yg)("span",{parentName:"span",className:"msupsub"},(0,n.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.yg)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.yg)("span",{parentName:"span"}))))))),(0,n.yg)("span",{parentName:"span",style:{top:"-3em"}},(0,n.yg)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.yg)("span",{parentName:"span",className:"accent-body",style:{left:"-0.2355em"}},(0,n.yg)("span",{parentName:"span",className:"overlay",style:{height:"0.714em",width:"0.471em"}},(0,n.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},(0,n.yg)("path",{parentName:"svg",d:"M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z"})))))),(0,n.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.yg)("span",{parentName:"span",className:"vlist-r"},(0,n.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.yg)("span",{parentName:"span"}))))),(0,n.yg)("span",{parentName:"span",className:"mopen"},"("),(0,n.yg)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.yg)("span",{parentName:"span",className:"mbin"},"+"),(0,n.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.yg)("span",{parentName:"span",className:"base"},(0,n.yg)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.yg)("span",{parentName:"span",className:"mord"},"1"),(0,n.yg)("span",{parentName:"span",className:"mclose"},")"),(0,n.yg)("span",{parentName:"span",className:"mord"},".")))))))}y.isMDXComponent=!0},5680:(a,e,s)=>{s.d(e,{xA:()=>g,yg:()=>o});var t=s(6540);function n(a,e,s){return e in a?Object.defineProperty(a,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[e]=s,a}function m(a,e){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),s.push.apply(s,t)}return s}function p(a){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?m(Object(s),!0).forEach((function(e){n(a,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):m(Object(s)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(s,e))}))}return a}function r(a,e){if(null==a)return{};var s,t,n=function(a,e){if(null==a)return{};var s,t,n={},m=Object.keys(a);for(t=0;t<m.length;t++)s=m[t],e.indexOf(s)>=0||(n[s]=a[s]);return n}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(t=0;t<m.length;t++)s=m[t],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(a,s)&&(n[s]=a[s])}return n}var l=t.createContext({}),i=function(a){var e=t.useContext(l),s=e;return a&&(s="function"==typeof a?a(e):p(p({},e),a)),s},g=function(a){var e=i(a.components);return t.createElement(l.Provider,{value:e},a.children)},N="mdxType",y={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},c=t.forwardRef((function(a,e){var s=a.components,n=a.mdxType,m=a.originalType,l=a.parentName,g=r(a,["components","mdxType","originalType","parentName"]),N=i(s),c=n,o=N["".concat(l,".").concat(c)]||N[c]||y[c]||m;return s?t.createElement(o,p(p({ref:e},g),{},{components:s})):t.createElement(o,p({ref:e},g))}));function o(a,e){var s=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var m=s.length,p=new Array(m);p[0]=c;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r[N]="string"==typeof a?a:n,p[1]=r;for(var i=2;i<m;i++)p[i]=s[i];return t.createElement.apply(null,p)}return t.createElement.apply(null,s)}c.displayName="MDXCreateElement"}}]);