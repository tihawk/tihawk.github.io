"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6912],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=i(a),h=n,b=f["".concat(s,".").concat(h)]||f[h]||u[h]||o;return a?r.createElement(b,l(l({ref:t},p),{},{components:a})):r.createElement(b,l({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[f]="string"==typeof e?e:n,l[1]=c;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},319:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=a(7462),n=(a(7294),a(3905));const o={slug:"phasestream-4-cyberapocalypse-2021-ctf",title:"Phasestream 4 - Cyberapocalypse 2021 CTF",description:"This is a writeup for the challenge Phasestream 4, part of the Hack the box's Cyberapocalypse CTF 2021, category Crypto.",authors:"kiroki",tags:["Cyber Security","CTF"]},l=void 0,c={permalink:"/blog/phasestream-4-cyberapocalypse-2021-ctf",source:"@site/blog/2021-04-28-10:18:15phasestream-4-cyberapocalypse-2021-ctf.md",title:"Phasestream 4 - Cyberapocalypse 2021 CTF",description:"This is a writeup for the challenge Phasestream 4, part of the Hack the box's Cyberapocalypse CTF 2021, category Crypto.",date:"2021-04-28T00:00:00.000Z",formattedDate:"April 28, 2021",tags:[{label:"Cyber Security",permalink:"/blog/tags/cyber-security"},{label:"CTF",permalink:"/blog/tags/ctf"}],readingTime:2.305,hasTruncateMarker:!0,authors:[{name:"Kiril Panayotov Blagoev",title:"Admin",url:"https://github.com/tihawk",imageURL:"https://github.com/tihawk.png",key:"kiroki"}],frontMatter:{slug:"phasestream-4-cyberapocalypse-2021-ctf",title:"Phasestream 4 - Cyberapocalypse 2021 CTF",description:"This is a writeup for the challenge Phasestream 4, part of the Hack the box's Cyberapocalypse CTF 2021, category Crypto.",authors:"kiroki",tags:["Cyber Security","CTF"]},prevItem:{title:"Phasestream 3 - Cyberapocalypse 2021 CTF",permalink:"/blog/phasestream-3-cyberapocalypse-2021-ctf"},nextItem:{title:"Nintendo Base64 - Cyberapocalypse 2021 CTF",permalink:"/blog/nintendo-base64-cyberapocalypse-2021-ctf"}},s={authorsImageUrls:[void 0]},i=[{value:"Prompt",id:"prompt",level:3},{value:"Recon",id:"recon",level:3},{value:"Analysis",id:"analysis",level:3},{value:"Solution",id:"solution",level:3}],p={toc:i},f="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This is a writeup for the challenge Phasestream 4, part of the Hack the box's Cyberapocalypse CTF 2021, category Crypto."),(0,n.kt)("h3",{id:"prompt"},"Prompt"),(0,n.kt)("p",null,"The aliens saw us break PhaseStream 3 and have proposed a quick fix to protect their new cipher."),(0,n.kt)("h3",{id:"recon"},"Recon"),(0,n.kt)("p",null,"What we see here, is a direct continuation of the Phasestream 3 challenge. You should probably check out my write-up of that one, if you don't know the concept of repating keystream attacks."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/blog/phasestream-3-cyberapocalypse-2021-ctf/"},"Phasestream 3 - Cyberapocalypse 2021 CTF")),(0,n.kt)("p",null,"The only main difference from this last challenge, is that we no longer have the ",(0,n.kt)("inlineCode",{parentName:"p"},"test")," plaintext string readily available to us. But we still have its encrypted value in our ",(0,n.kt)("inlineCode",{parentName:"p"},"output.txt")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cat output.txt 2d0fb3a56aa66e1e44cffc97f3a2e030feab144124e73c76d5d22f6ce01c46e73a50b0edc1a2bd243f9578b745438b00720870e3118194cbb438149e3cc9c0844d640ecdb1e71754c24bf43bf3fd0f9719f74c7179b6816e687fa576abad1955 2767868b7ebb7f4c42cfffa6ffbfb03bf3b8097936ae3c76ef803d76e11546947157bcea9599f826338807b55655a05666446df20c8e9387b004129e10d18e9f526f71cabcf21b48965ae36fcfee1e820cf1076f65\n")),(0,n.kt)("p",null,"The code of the encryptor itself hasn't changed other than not showing the test text."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from Crypto.Cipher import AES\nfrom Crypto.Util import Counter\nimport os\n\nKEY = os.urandom(16)\n\n\ndef encrypt(plaintext):\n    cipher = AES.new(KEY, AES.MODE_CTR, counter=Counter.new(128))\n    ciphertext = cipher.encrypt(plaintext)\n    return ciphertext.hex()\n\n\nwith open('test_quote.txt', 'rb') as f:\n    test_quote = f.read().strip()\nprint(encrypt(test_quote))\n\nwith open('flag.txt', 'rb') as f:\n    flag = f.read().strip()\nprint(encrypt(flag))\n")),(0,n.kt)("p",null,"But we do get the information, that the test string is a ",(0,n.kt)("strong",{parentName:"p"},"quote"),"."),(0,n.kt)("h3",{id:"analysis"},"Analysis"),(0,n.kt)("p",null,"Well, our first steps of finding the solution are pretty much the same as in Phasestream 3:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"We XOR the two ciphertexts from output.txt together"),(0,n.kt)("li",{parentName:"ol"},"Since we know that our flag starts with ",(0,n.kt)("inlineCode",{parentName:"li"},"CHTB{"),", we will XOR the result of ",(0,n.kt)("inlineCode",{parentName:"li"},"1.")," with it, to see the first letters of our quote.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"#!/usr/bin/env python3\n\nciphertext1 = '2d0fb3a56aa66e1e44cffc97f3a2e030feab144124e73c76d5d22f6ce01c46e73a50b0edc1a2bd243f9578b745438b00720870e3118194cbb438149e3cc9c0844d640ecdb1e71754c24bf43bf3fd0f9719f74c7179b6816e687fa576abad1955'\n\nciphertext2 = '2767868b7ebb7f4c42cfffa6ffbfb03bf3b8097936ae3c76ef803d76e11546947157bcea9599f826338807b55655a05666446df20c8e9387b004129e10d18e9f526f71cabcf21b48965ae36fcfee1e820cf1076f65'\n\nflagStart = b'CHTB{'.hex()\n\ndef xor(hex1, hex2, getAscii = False):\n  result = []\n\n  for ind in range(0, len(hex1), 2):\n    longIndex = ind\n    shortIndex = ind%len(hex2)\n    hexChar1 = hex1[longIndex:longIndex+2]\n    byte1 = int(hexChar1, 16)\n\n    hexChar2 = hex2[shortIndex:shortIndex+2]\n    byte2 = int(hexChar2, 16)\n\n    asciiNum = byte1 ^ byte2\n    result.append(chr(asciiNum))\n\n\n  out = ''.join(result)\n  if getAscii:\n    print('Result:', out)\n    return out\n  else:\n    out = out.encode('utf-8').hex()\n    print('Result:', out)\n    return out\n    \n\nxored = xor(ciphertext2, ciphertext1)\n\nstartQuote = xor(xored, flagStart, True)\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"Result: 0a68352e141d1152060003310c1d500b0d131d38124900003a52121a010900734b070c07543b45020c1d7f0213162b56144c1d111d0f074c043c06002c184e1b1f0b7f070d150c1c541117543c13111515064b1e1c\nResult: I alo^YD{@yX_+HEG_CQTBAZNCrC;EwDoyOU+@hUcV7^YIM|LhD{oPYdH7SOnOTSltGSnVN\\g\n")),(0,n.kt)("p",null,"So, from our analysis, we can see that the ",(0,n.kt)("inlineCode",{parentName:"p"},"test_quote"),' string starts with "I alo". I think it\'s easy to assume, that the first two words will be "I alone".'),(0,n.kt)("h3",{id:"solution"},"Solution"),(0,n.kt)("p",null,'This one took a bit of research. We had to find a popular quote, which starts with "I alone". After a couple of tries, I found that to be a quote by ',(0,n.kt)("em",{parentName:"p"},"Mother Theresa"),", which reads as follows:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"I alone cannot change the world, but I can cast a stone across the water to create many ripples.")),(0,n.kt)("p",null,"So, we can take our XOR result from step 1 of the analysis, and XOR it with this quote."),(0,n.kt)("p",null,"This gives us the flag to be as follows"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"Result: 0a68352e141d1152060003310c1d500b0d131d38124900003a52121a010900734b070c07543b45020c1d7f0213162b56144c1d111d0f074c043c06002c184e1b1f0b7f070d150c1c541117543c13111515064b1e1c\nResult: CHTB{stream_ciphers_with_reused_keystreams_are_vulnerable_to_known_plaintext_attacks}\n")))}u.isMDXComponent=!0}}]);