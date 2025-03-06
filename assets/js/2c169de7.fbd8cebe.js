"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[992],{2355:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var n=a(4848),r=a(8453),s=a(2714);const o={slug:"phasestream-4-cyberapocalypse-2021-ctf",title:"Phasestream 4 - Cyberapocalypse 2021 CTF",description:"This is a writeup for the challenge Phasestream 4, part of the Hack the box's Cyberapocalypse CTF 2021, category Crypto.",authors:"kiroki",tags:["Cyber Security","CTF"]},c=void 0,i={permalink:"/blog/phasestream-4-cyberapocalypse-2021-ctf",source:"@site/blog/2021-04-28-10:18:15phasestream-4-cyberapocalypse-2021-ctf.md",title:"Phasestream 4 - Cyberapocalypse 2021 CTF",description:"This is a writeup for the challenge Phasestream 4, part of the Hack the box's Cyberapocalypse CTF 2021, category Crypto.",date:"2021-04-28T00:00:00.000Z",formattedDate:"April 28, 2021",tags:[{label:"Cyber Security",permalink:"/blog/tags/cyber-security"},{label:"CTF",permalink:"/blog/tags/ctf"}],readingTime:2.33,hasTruncateMarker:!0,authors:[{name:"Kiril Panayotov Blagoev",title:"Admin",url:"https://github.com/tihawk",imageURL:"https://github.com/tihawk.png",key:"kiroki"}],frontMatter:{slug:"phasestream-4-cyberapocalypse-2021-ctf",title:"Phasestream 4 - Cyberapocalypse 2021 CTF",description:"This is a writeup for the challenge Phasestream 4, part of the Hack the box's Cyberapocalypse CTF 2021, category Crypto.",authors:"kiroki",tags:["Cyber Security","CTF"]},unlisted:!1,prevItem:{title:"Phasestream 3 - Cyberapocalypse 2021 CTF",permalink:"/blog/phasestream-3-cyberapocalypse-2021-ctf"},nextItem:{title:"Nintendo Base64 - Cyberapocalypse 2021 CTF",permalink:"/blog/nintendo-base64-cyberapocalypse-2021-ctf"}},l={authorsImageUrls:[void 0]},h=[{value:"Prompt",id:"prompt",level:3},{value:"Recon",id:"recon",level:3},{value:"Analysis",id:"analysis",level:3},{value:"Solution",id:"solution",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This is a writeup for the challenge Phasestream 4, part of the Hack the box's Cyberapocalypse CTF 2021, category Crypto."}),"\n",(0,n.jsx)(t.h3,{id:"prompt",children:"Prompt"}),"\n",(0,n.jsx)(t.p,{children:"The aliens saw us break PhaseStream 3 and have proposed a quick fix to protect their new cipher."}),"\n",(0,n.jsx)(t.h3,{id:"recon",children:"Recon"}),"\n",(0,n.jsx)(t.p,{children:"What we see here, is a direct continuation of the Phasestream 3 challenge. You should probably check out my write-up of that one, if you don't know the concept of repating keystream attacks."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/blog/phasestream-3-cyberapocalypse-2021-ctf/",children:"Phasestream 3 - Cyberapocalypse 2021 CTF"})}),"\n",(0,n.jsxs)(t.p,{children:["The only main difference from this last challenge, is that we no longer have the ",(0,n.jsx)(t.code,{children:"test"})," plaintext string readily available to us. But we still have its encrypted value in our ",(0,n.jsx)(t.code,{children:"output.txt"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"cat output.txt 2d0fb3a56aa66e1e44cffc97f3a2e030feab144124e73c76d5d22f6ce01c46e73a50b0edc1a2bd243f9578b745438b00720870e3118194cbb438149e3cc9c0844d640ecdb1e71754c24bf43bf3fd0f9719f74c7179b6816e687fa576abad1955 2767868b7ebb7f4c42cfffa6ffbfb03bf3b8097936ae3c76ef803d76e11546947157bcea9599f826338807b55655a05666446df20c8e9387b004129e10d18e9f526f71cabcf21b48965ae36fcfee1e820cf1076f65\n"})}),"\n",(0,n.jsx)(t.p,{children:"The code of the encryptor itself hasn't changed other than not showing the test text."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from Crypto.Cipher import AES\nfrom Crypto.Util import Counter\nimport os\n\nKEY = os.urandom(16)\n\n\ndef encrypt(plaintext):\n    cipher = AES.new(KEY, AES.MODE_CTR, counter=Counter.new(128))\n    ciphertext = cipher.encrypt(plaintext)\n    return ciphertext.hex()\n\n\nwith open('test_quote.txt', 'rb') as f:\n    test_quote = f.read().strip()\nprint(encrypt(test_quote))\n\nwith open('flag.txt', 'rb') as f:\n    flag = f.read().strip()\nprint(encrypt(flag))\n"})}),"\n",(0,n.jsxs)(t.p,{children:["But we do get the information, that the test string is a ",(0,n.jsx)(t.strong,{children:"quote"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"analysis",children:"Analysis"}),"\n",(0,n.jsx)(t.p,{children:"Well, our first steps of finding the solution are pretty much the same as in Phasestream 3:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"We XOR the two ciphertexts from output.txt together"}),"\n",(0,n.jsxs)(t.li,{children:["Since we know that our flag starts with ",(0,n.jsx)(t.code,{children:"CHTB{"}),", we will XOR the result of ",(0,n.jsx)(t.code,{children:"1."})," with it, to see the first letters of our quote."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"#!/usr/bin/env python3\n\nciphertext1 = '2d0fb3a56aa66e1e44cffc97f3a2e030feab144124e73c76d5d22f6ce01c46e73a50b0edc1a2bd243f9578b745438b00720870e3118194cbb438149e3cc9c0844d640ecdb1e71754c24bf43bf3fd0f9719f74c7179b6816e687fa576abad1955'\n\nciphertext2 = '2767868b7ebb7f4c42cfffa6ffbfb03bf3b8097936ae3c76ef803d76e11546947157bcea9599f826338807b55655a05666446df20c8e9387b004129e10d18e9f526f71cabcf21b48965ae36fcfee1e820cf1076f65'\n\nflagStart = b'CHTB{'.hex()\n\ndef xor(hex1, hex2, getAscii = False):\n  result = []\n\n  for ind in range(0, len(hex1), 2):\n    longIndex = ind\n    shortIndex = ind%len(hex2)\n    hexChar1 = hex1[longIndex:longIndex+2]\n    byte1 = int(hexChar1, 16)\n\n    hexChar2 = hex2[shortIndex:shortIndex+2]\n    byte2 = int(hexChar2, 16)\n\n    asciiNum = byte1 ^ byte2\n    result.append(chr(asciiNum))\n\n\n  out = ''.join(result)\n  if getAscii:\n    print('Result:', out)\n    return out\n  else:\n    out = out.encode('utf-8').hex()\n    print('Result:', out)\n    return out\n    \n\nxored = xor(ciphertext2, ciphertext1)\n\nstartQuote = xor(xored, flagStart, True)\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"Result: 0a68352e141d1152060003310c1d500b0d131d38124900003a52121a010900734b070c07543b45020c1d7f0213162b56144c1d111d0f074c043c06002c184e1b1f0b7f070d150c1c541117543c13111515064b1e1c\nResult: I alo^YD{@yX_+HEG_CQTBAZNCrC;EwDoyOU+@hUcV7^YIM|LhD{oPYdH7SOnOTSltGSnVN\\g\n"})}),"\n",(0,n.jsxs)(t.p,{children:["So, from our analysis, we can see that the ",(0,n.jsx)(t.code,{children:"test_quote"}),' string starts with "I alo". I think it\'s easy to assume, that the first two words will be "I alone".']}),"\n",(0,n.jsx)(t.h3,{id:"solution",children:"Solution"}),"\n",(0,n.jsxs)(t.p,{children:['This one took a bit of research. We had to find a popular quote, which starts with "I alone". After a couple of tries, I found that to be a quote by ',(0,n.jsx)(t.em,{children:"Mother Theresa"}),", which reads as follows:"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"I alone cannot change the world, but I can cast a stone across the water to create many ripples."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"So, we can take our XOR result from step 1 of the analysis, and XOR it with this quote."}),"\n",(0,n.jsx)(t.p,{children:"This gives us the flag to be as follows"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"Result: 0a68352e141d1152060003310c1d500b0d131d38124900003a52121a010900734b070c07543b45020c1d7f0213162b56144c1d111d0f074c043c06002c184e1b1f0b7f070d150c1c541117543c13111515064b1e1c\nResult: CHTB{stream_ciphers_with_reused_keystreams_are_vulnerable_to_known_plaintext_attacks}\n"})}),"\n","\n","\n",(0,n.jsx)(s.A,{})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},2714:(e,t,a)=>{a.d(t,{A:()=>s});a(6540);const n={"donate-card":"donate-card_mbts",bmac:"bmac_qmhE"};var r=a(4848);function s(){return(0,r.jsx)("div",{className:"alert alert--primary",role:"alert",children:(0,r.jsxs)("div",{className:"card__body",children:[(0,r.jsx)("p",{children:"Thank you for reading!"}),(0,r.jsx)("p",{children:"The information in this blog, as well as all the tools, apps and libraries I develop are currently open source."}),(0,r.jsx)("p",{children:"I would love to keep it this way, and you can help!"}),(0,r.jsx)("p",{children:"You can buy me a coffee from here, which will go towards the next all-nighter I pull off!"}),(0,r.jsx)("a",{href:"https://www.buymeacoffee.com/kblagoev",target:"_blank",children:(0,r.jsx)("img",{src:"https://cdn.buymeacoffee.com/buttons/v2/default-violet.png",className:n.bmac,alt:"Buy Me A Coffee"})}),(0,r.jsxs)("p",{children:["Or you can support me and my code monthly over at ",(0,r.jsx)("a",{href:"https://github.com/sponsors/tihawk",target:"_blank",children:"Github Sponsors!"})]}),(0,r.jsx)("p",{children:"Thanks!"})]})})}},8453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>c});var n=a(6540);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);