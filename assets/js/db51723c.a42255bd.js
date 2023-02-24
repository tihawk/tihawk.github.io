"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9196],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),y=s(a),h=n,g=y["".concat(i,".").concat(h)]||y[h]||u[h]||o;return a?r.createElement(g,l(l({ref:t},c),{},{components:a})):r.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=h;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[y]="string"==typeof e?e:n,l[1]=p;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7387:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={slug:"cyber-apocalypse-2021-capture-the-flag-write-ups",title:"Cyber Apocalypse 2021 Capture the Flag Write-ups",description:"A collection of write-ups for challenges from the Cyber Apocalypse 2021 CTF finished by Kiril Blagoev.",authors:"kiroki",tags:["Cyber Security","CTF"]},l=void 0,p={permalink:"/blog/cyber-apocalypse-2021-capture-the-flag-write-ups",source:"@site/blog/2021-04-30-10:58:36cyber-apocalypse-2021-capture-the-flag-write-ups.md",title:"Cyber Apocalypse 2021 Capture the Flag Write-ups",description:"A collection of write-ups for challenges from the Cyber Apocalypse 2021 CTF finished by Kiril Blagoev.",date:"2021-04-30T00:00:00.000Z",formattedDate:"April 30, 2021",tags:[{label:"Cyber Security",permalink:"/blog/tags/cyber-security"},{label:"CTF",permalink:"/blog/tags/ctf"}],readingTime:2.98,hasTruncateMarker:!1,authors:[{name:"Kiril Panayotov Blagoev",title:"Admin",url:"https://github.com/tihawk",imageURL:"https://github.com/tihawk.png",key:"kiroki"}],frontMatter:{slug:"cyber-apocalypse-2021-capture-the-flag-write-ups",title:"Cyber Apocalypse 2021 Capture the Flag Write-ups",description:"A collection of write-ups for challenges from the Cyber Apocalypse 2021 CTF finished by Kiril Blagoev.",authors:"kiroki",tags:["Cyber Security","CTF"]},prevItem:{title:"CaaS - Cyberapocalypse 2021 CTF",permalink:"/blog/caas-cyberapocalypse-2021-ctf"},nextItem:{title:"Alien Camp - Cyberapocalypse 2021 CTF",permalink:"/blog/alien-camp-cyberapocalypse-2021-ctf"}},i={authorsImageUrls:[void 0]},s=[{value:"Category Web",id:"category-web",level:2},{value:"Category Reverse",id:"category-reverse",level:2},{value:"Category Forensics",id:"category-forensics",level:2},{value:"Category Crypto",id:"category-crypto",level:2},{value:"Category Misc",id:"category-misc",level:2}],c={toc:s},y="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(y,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Well, here we go. This was the very first CTF event that I took part of while it was happening, and I'm quite proud of my results!"),(0,n.kt)("p",null,"Most importantly, almost every challenge that I finished taught me a bunch of new concepts and techniques, and showcased what can be expected in the field of hunting vulnerabilities."),(0,n.kt)("p",null,"By the end of the 5-day ordeal I got to 357th place out of 4740 teams and more than 9500 players, and I'm very satisfied with such an outcome from my very first event of this type."),(0,n.kt)("p",null,"But, as I can now see, the learning process continues even after the event, in the form of writing write-ups! The much more level-headed approach of trying to explain and follow the process of finding the flags means that I get to see my ideas and techniques in a new light, and organise the tools and concepts much better."),(0,n.kt)("p",null,"Reading write-ups is also indisplensable, as there were quite a few other challenges that I was sure I was very near to solving, but never found out what I was missing. Reading other people's write-ups allowed me to see what I was did right or wrong, and how to improve on that."),(0,n.kt)("p",null,"So I hope you get that from reading these write-ups as well, and learn a few things from them, or at least see an another approach to solving the same problem."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Enjoy!")),(0,n.kt)("h2",{id:"category-web"},"Category Web"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/blog/inspector-gadget-cyberapocalypse-2021-ctf/"},"Inspector Gadget - Cyberapocalypse 2021 CTF")),(0,n.kt)("p",null,"An easy warm-up challenge in the style of a scavenger hunt"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/blog/caas-cyberapocalypse-2021-ctf/"},"CaaS - Cyberapocalypse 2021 CTF")),(0,n.kt)("p",null,"Exploiting curl running locally on the host, to get local file inclusion"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/blog/ministrypalace-cyberapocalypse-2021-ctf/"},"miniSTRypalace - Cyberapocalypse 2021 CTF")),(0,n.kt)("p",null,"Showcasing the importance of white-listing instead of black-listing commands and strings inside PHP"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/blog/blitzprop-cyberapocalypse-2021-ctf/"},"BlitzProp - Cyberapocalypse 2021 CTF")),(0,n.kt)("p",null,"Exploring the interesting concept ot AST injection and prototype pollution, resulting in remote code exectution. And all of that because we use the wrong version of a library in node"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/blog/e-tree-cyberapocalypse-2021-ctf/"},"E.Tree - Cyberapocalypse 2021 CTF")),(0,n.kt)("p",null,"Blind XPATH injection with a slight twist"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/blog/wild-goose-hunt-cyberapocalypse-2021-ctf/"},"Wild goose hunt - Cyberapocalypse 2021 CTF")),(0,n.kt)("p",null,"A challenge showcasing the weakness of improper handling of mongo queries"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/blog/emoji-voting-cyberapocalypse-2021-ctf/"},"Emoji Voting - Cyberapocalypse 2021 CTF")),(0,n.kt)("p",null,"This fun challenge showcases blind SQL injection inside of an ORDER BY clause"),(0,n.kt)("h2",{id:"category-reverse"},"Category Reverse"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/blog/passphrase-cyberapocalypse-2021-ctf/"},"Passphrase - Cyberapocalypse 2021 CTF")),(0,n.kt)("p",null,"A simple reverse-engineering challenge invoving stringcompare"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/blog/authenticator-cyberapocalypse-2021-ctf/"},"Authenticator - Cyberapocalypse 2021 CTF")),(0,n.kt)("p",null,"Reverse-engineering a binary, involving both stringcompare and a bit of XOR magic"),(0,n.kt)("h2",{id:"category-forensics"},"Category Forensics"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/blog/key-mission-cyberapocalypse-2021-ctf/"},"Key Mission - Cyberapocalypse 2021 CTF")),(0,n.kt)("p",null,"Having fun with USB Human Interface Devices, namely a keyboard. The twist was having to deal with the Shift key"),(0,n.kt)("h2",{id:"category-crypto"},"Category Crypto"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/blog/nintendo-base64-cyberapocalypse-2021-ctf/"},"Nintendo Base64 - Cyberapocalypse 2021 CTF")),(0,n.kt)("p",null,"An easy warm-up cryptography challenge, dealing with multilayered base64 encoding and obfuscation"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/blog/soulcrabber-cyberapocalypse-2021-ctf/"},"Soulcrabber - Cyberapocalypse 2021 CTF")),(0,n.kt)("p",null,"A challenge written in Rust, showcasing using known seeds for pseudo-random number generators"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/blog/phasestream-1-cyberapocalypse-2021-ctf/"},"Phasestream 1- Cyberapocalypse 2021 CTF")),(0,n.kt)("p",null,"The first challenge of this series showcased XOR encryption with a 5-byte key"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/blog/phasestream-2-cyberapocalypse-2021-ctf/"},"Phasestream 2 - Cyberapocalypse 2021 CTF")),(0,n.kt)("p",null,"Still on the topic of XOR, this time using a 1-byte key, but hiding the real flag in a list of 9999 different strings"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/blog/phasestream-3-cyberapocalypse-2021-ctf/"},"Phasestream 3 - Cyberapocalypse 2021 CTF")),(0,n.kt)("p",null,"A challenge showcasing the devastating effects of reusing keystreams in AES encryption"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/blog/phasestream-4-cyberapocalypse-2021-ctf/"},"Phasestream 4 - Cyberapocalypse 2021 CTF")),(0,n.kt)("p",null,"A direct follow-up of the previous challenge, introducing a bit of a guessing game"),(0,n.kt)("h2",{id:"category-misc"},"Category Misc"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/blog/alien-camp-cyberapocalypse-2021-ctf/"},"Alien Camp - Cyberapocalypse 2021 CTF")),(0,n.kt)("p",null,"A fun scripting challenge involving the automatic handling of ",(0,n.kt)("inlineCode",{parentName:"p"},"nc")," based services"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/blog/input-as-a-service-cyberapocalypse-2021-ctf/"},"Input as a Service - Cyberapocalypse 2021 CTF")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"input()")," in python2.x is scary by default"))}u.isMDXComponent=!0}}]);