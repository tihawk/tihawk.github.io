"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5502],{2714:(e,n,t)=>{t.d(n,{A:()=>r});t(6540);const i={"donate-card":"donate-card_mbts",bmac:"bmac_qmhE"};var s=t(4848);function r(){return(0,s.jsx)("div",{className:"alert alert--primary",role:"alert",children:(0,s.jsxs)("div",{className:"card__body",children:[(0,s.jsx)("p",{children:"Thank you for reading!"}),(0,s.jsx)("p",{children:"The information in this blog, as well as all the tools, apps and libraries I develop are currently open source."}),(0,s.jsx)("p",{children:"I would love to keep it this way, and you can help!"}),(0,s.jsx)("p",{children:"You can buy me a coffee from here, which will go towards the next all-nighter I pull off!"}),(0,s.jsx)("a",{href:"https://www.buymeacoffee.com/kblagoev",target:"_blank",children:(0,s.jsx)("img",{src:"https://cdn.buymeacoffee.com/buttons/v2/default-violet.png",className:i.bmac,alt:"Buy Me A Coffee"})}),(0,s.jsxs)("p",{children:["Or you can support me and my code monthly over at ",(0,s.jsx)("a",{href:"https://github.com/sponsors/tihawk",target:"_blank",children:"Github Sponsors!"})]}),(0,s.jsx)("p",{children:"Thanks!"})]})})}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(6540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}},8795:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=t(4848),s=t(8453),r=t(2714);const a={slug:"alien-camp-cyberapocalypse-2021-ctf",title:"Alien Camp - Cyberapocalypse 2021 CTF",description:"This is a writeup for the Alien Camp challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Misc.",authors:"kiroki",tags:["Cyber Security","CTF"]},o=void 0,l={permalink:"/blog/alien-camp-cyberapocalypse-2021-ctf",source:"@site/blog/2021-04-29-14:00:49alien-camp-cyberapocalypse-2021-ctf.md",title:"Alien Camp - Cyberapocalypse 2021 CTF",description:"This is a writeup for the Alien Camp challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Misc.",date:"2021-04-29T00:00:00.000Z",formattedDate:"April 29, 2021",tags:[{label:"Cyber Security",permalink:"/blog/tags/cyber-security"},{label:"CTF",permalink:"/blog/tags/ctf"}],readingTime:2.575,hasTruncateMarker:!0,authors:[{name:"Kiril Panayotov Blagoev",title:"Admin",url:"https://github.com/tihawk",imageURL:"https://github.com/tihawk.png",key:"kiroki"}],frontMatter:{slug:"alien-camp-cyberapocalypse-2021-ctf",title:"Alien Camp - Cyberapocalypse 2021 CTF",description:"This is a writeup for the Alien Camp challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Misc.",authors:"kiroki",tags:["Cyber Security","CTF"]},unlisted:!1,prevItem:{title:"Cyber Apocalypse 2021 Capture the Flag Write-ups",permalink:"/blog/cyber-apocalypse-2021-capture-the-flag-write-ups"},nextItem:{title:"Authenticator - Cyberapocalypse 2021 CTF",permalink:"/blog/authenticator-cyberapocalypse-2021-ctf"}},c={authorsImageUrls:[void 0]},p=[{value:"Prompt",id:"prompt",level:3},{value:"Recon",id:"recon",level:3},{value:"Solution",id:"solution",level:3}];function h(e){const n={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This is a writeup for the Alien Camp challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Misc."}),"\n",(0,i.jsx)(n.h3,{id:"prompt",children:"Prompt"}),"\n",(0,i.jsx)(n.p,{children:"The Ministry of Galactic Defense now accepts human applicants for their specialised warrior unit, in exchange for their debt to be erased. We do not want to subject our people to this training and to be used as pawns in their little games. We need you to answer 500 of their questions to pass their test and take them down from the inside."}),"\n",(0,i.jsx)(n.h3,{id:"recon",children:"Recon"}),"\n",(0,i.jsxs)(n.p,{children:["We're given a box to which we can connect with ",(0,i.jsx)(n.code,{children:"netcat"}),". On this machine, there's a service which has two options:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Choosing option 1 will give us a list of numbers associated with emojis."}),"\n",(0,i.jsx)(n.li,{children:"Choosing option 2 starts an exam, in which we need to supply the answer to 500 arithmetic problems. The only catch is, that the numbers in the equations are represented with the emojis from option 1."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Additionally, every time we connect we will have a different set of emoji -> number dictionary entries."}),"\n",(0,i.jsx)(n.p,{children:"If we try to manually translate the emojis into numbers, and then supply the answer to an equation, we will be (likely) told that we're too slow."}),"\n",(0,i.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,i.jsx)(n.p,{children:"Therefore, we need to automate the process. The solution will contain the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Once connected, we will check the emoji -> number relation in option 1, and record it into a dictionary."}),"\n",(0,i.jsx)(n.li,{children:"We then start the exam."}),"\n",(0,i.jsx)(n.li,{children:"Once supplied with an equation, we do some string manipulation to extract the emojis and arithmetic operations, and translate the emojis into numbers."}),"\n",(0,i.jsx)(n.li,{children:"We evaluate the equation, and supply the answer as number."}),"\n",(0,i.jsx)(n.li,{children:"We repeat step 3 and 4 500 times to get the flag."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import socket\nimport time\n\nHOST = '46.101.44.190'\nPORT = 32223\n\n# a generic function to get the response as a string\ndef receive(s):\n  res = ''\n  data = s.recv(1024)\n  res += data.decode()\n  return res\n\n# generate an emoji -> number dictionary\ndef getCode(res):\n  lines = res.split('\\n')\n  arr = lines[2].split(' ')[:-1]\n  emojis = arr[0::3]\n  numbers = arr[2::3]\n  dic = dict(zip(emojis, numbers))\n  return dic\n\n# solve the equation we're provided with\ndef solveEquation(res, dic):\n  lines = res.split('\\n')\n  arr = lines[5].split(' ')[:-1]\n  print(arr)\n  values = arr[0:-1:2]\n  decodedValues = []\n  for value in values:\n    decodedValues.append(dic[value])\n  expressions = arr[1:-2:2]\n  expressions\n  print(decodedValues)\n  print(expressions)\n  index = 0\n  equation = ''\n  for value in decodedValues:\n    equation += value\n    if index < len(expressions):\n      equation += expressions[index]\n    index += 1\n  return str(eval(equation))+'\\n'\n\n# main\nwith socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:\n    s.connect((HOST, PORT))\n    s.settimeout(5)\n    res = ''\n\n    receive(s)\n    time.sleep(0.1)\n\n\t# go to option 1, to generate our dictionary\n    buf = '1'\n    buf += '\\n'\n    print(buf)\n    s.send(buf.encode('utf-8'))\n\n    time.sleep(0.5)\n    res = receive(s)\n    dic = getCode(res)\n\n\t# start the exam\n    buf = '2'\n    buf += '\\n'\n    print(buf)\n    s.send(buf.encode('utf-8'))\n\n\t# keep answering questions until connection is closed\n    while True:\n      time.sleep(0.1)\n      res = receive(s)\n      print(res)\n      answer = solveEquation(res, dic)\n      print(answer)\n      time.sleep(0.1)\n      s.send(answer.encode('utf-8'))\n\n    print (\"Connection closed.\")\n"})}),"\n",(0,i.jsx)(n.p,{children:"By the end, we will get the flag in a response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"CHTB{3v3n_4l13n5_u53_3m0j15_t0_c0mmun1c4t3}\n"})}),"\n","\n","\n",(0,i.jsx)(r.A,{})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);