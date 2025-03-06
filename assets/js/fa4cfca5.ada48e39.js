"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3832],{1252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var i=n(4848),o=n(8453),a=n(2714);const r={slug:"developing-on-android-emulator-from-virtualbox",title:"How to connect to an Android Emulator from VirtualBox",description:"Developing from a VM is great, but there's a problem when you have to run an emulator inside of it. My solution is to have two separate virtual machines running in VirtualBox on the host OS, and let them communicate using networking.",authors:"kiroki",tags:["Coding","Programming","VMs","Android"]},s=void 0,l={permalink:"/blog/developing-on-android-emulator-from-virtualbox",source:"@site/blog/2023-02-24developing-on-android-emulator-from-virtualbox.md",title:"How to connect to an Android Emulator from VirtualBox",description:"Developing from a VM is great, but there's a problem when you have to run an emulator inside of it. My solution is to have two separate virtual machines running in VirtualBox on the host OS, and let them communicate using networking.",date:"2023-02-24T00:00:00.000Z",formattedDate:"February 24, 2023",tags:[{label:"Coding",permalink:"/blog/tags/coding"},{label:"Programming",permalink:"/blog/tags/programming"},{label:"VMs",permalink:"/blog/tags/v-ms"},{label:"Android",permalink:"/blog/tags/android"}],readingTime:4.51,hasTruncateMarker:!1,authors:[{name:"Kiril Panayotov Blagoev",title:"Admin",url:"https://github.com/tihawk",imageURL:"https://github.com/tihawk.png",key:"kiroki"}],frontMatter:{slug:"developing-on-android-emulator-from-virtualbox",title:"How to connect to an Android Emulator from VirtualBox",description:"Developing from a VM is great, but there's a problem when you have to run an emulator inside of it. My solution is to have two separate virtual machines running in VirtualBox on the host OS, and let them communicate using networking.",authors:"kiroki",tags:["Coding","Programming","VMs","Android"]},unlisted:!1,prevItem:{title:"How I manage configuration files on my Linux machine using dotfiles and stow",permalink:"/blog/using-stow-for-managing dotfiles"},nextItem:{title:"How to remember what I was reading about?",permalink:"/blog/how-to-remember-what-i-was-reading-about"}},d={authorsImageUrls:[void 0]},h=[{value:"Motivation",id:"motivation",level:2},{value:"Setup",id:"setup",level:2},{value:"Creating a virtual device",id:"creating-a-virtual-device",level:3},{value:"Configuring the virtual mobile device",id:"configuring-the-virtual-mobile-device",level:3},{value:"Configuring the development VM",id:"configuring-the-development-vm",level:3},{value:"Starting up the machines",id:"starting-up-the-machines",level:3},{value:"Connecting to the mobile device",id:"connecting-to-the-mobile-device",level:3},{value:"Success!",id:"success",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,i.jsx)(t.p,{children:"If you're like me, you try and keep all of your coding-based clutter on a virtual machine. Which usually works great. You can maintain a clean OS, separate work from pleasure, and quickly return to a snapshot if something goes terribly wrong. But when I tried doing development for Android from a virtual machine, I quickly arrived at an unexpected hurdle."}),"\n",(0,i.jsxs)(t.p,{children:["If you try and run ",(0,i.jsx)(t.a,{href:"https://developer.android.com/studio",children:"Android Studio"}),"'s emulators, you'll quickly be reminded that you can't simply run a virtual machine inside a virtual machine. You technically can, if you enable ",(0,i.jsx)(t.em,{children:"Nested VT-x/AMD-V"}),", but even if you succeed navigating the hell of starting an AVD android emulator from inside your VM, you'd be met by the huge performance hit of running nested virtualisation."]}),"\n",(0,i.jsxs)(t.p,{children:["You can instead consider running either the ",(0,i.jsx)(t.a,{href:"https://www.genymotion.com/",children:"Genymotion emulator"})," or ",(0,i.jsx)(t.a,{href:"https://xamarin.com/android-player",children:"Xamarin Android Player"}),", which both use Oracle's ",(0,i.jsx)(t.a,{href:"https://www.virtualbox.org/",children:"VirtualBox"})," to run their emulators. But instead of running them inside your VM (and being met with the issue of nested virtualisation), you can run these emulators on your host OS. Since both of these use VirtualBox, ",(0,i.jsx)(t.strong,{children:"you can take full use of the networking aspect of VMs to connect your development VM to your Android emulator VM!"})]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Hence, my solution is to have two separate virtual machines running in VirtualBox on the host OS, and let them communicate using networking."})}),"\n",(0,i.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(t.p,{children:"I'm assuming you've already"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Downloaded and installed VirtualBox"}),"\n",(0,i.jsx)(t.li,{children:"Set up a development VM inside of VirtualBox"}),"\n",(0,i.jsxs)(t.li,{children:["Connected your dev VM to the outside world using either ",(0,i.jsx)(t.em,{children:"NAT"})," or ",(0,i.jsx)(t.strong,{children:"Bridged"})," networking (I personally use bridged, since it helps me to easier access any web dev instances running in the VM)"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"creating-a-virtual-device",children:"Creating a virtual device"}),"\n",(0,i.jsxs)(t.p,{children:["Alrighty, now we can download and install either ",(0,i.jsx)(t.a,{href:"https://www.genymotion.com/",children:"Genymotion emulator"})," or ",(0,i.jsx)(t.a,{href:"https://xamarin.com/android-player",children:"Xamarin Android Player"})," on your host OS."]}),"\n",(0,i.jsx)(t.p,{children:"After you've done that, you can start up your software, and set up a virtual device (phone) by following the instructions."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"created virtual device",src:n(4063).A+"",width:"1532",height:"386"})}),"\n",(0,i.jsx)(t.p,{children:"Now we need to do some configuration work inside VirtualBox."}),"\n",(0,i.jsx)(t.h3,{id:"configuring-the-virtual-mobile-device",children:"Configuring the virtual mobile device"}),"\n",(0,i.jsx)(t.p,{children:"If you open up VirtualBox, you'll see that the newly created virtual mobile device is listed in the list of machines."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"list virtual devices",src:n(5955).A+"",width:"976",height:"678"})}),"\n",(0,i.jsx)(t.p,{children:"We need to edit the network settings for the mobile device. It will need two adapters. One is to connect to the network of the development machine (NAT or Bridged). In my case the machines are in a bridged network, which makes it easier to access from the host OS, as well as between each-other."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"For some development platforms like React-Native, it's important that both the dev machine and mobile device are on the same network to allow easy debugging."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"mobile bridged adapter",src:n(6979).A+"",width:"634",height:"476"})}),"\n",(0,i.jsxs)(t.p,{children:["The other, arguably more important adapter to add/enable is the ",(0,i.jsx)(t.strong,{children:"Host-only Adapter"}),". This is the one ",(0,i.jsx)(t.a,{href:"https://developer.android.com/studio/command-line/adb",children:"adb"})," will connect over."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"mobile host-only adapter",src:n(1704).A+"",width:"629",height:"475"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["Make note of the adapter ",(0,i.jsx)(t.em,{children:"name"})," here!"]})}),"\n",(0,i.jsx)(t.p,{children:"VirtualBox has the habit of creating multiple host-only adapters, so this name is very important to make note of."}),"\n",(0,i.jsx)(t.h3,{id:"configuring-the-development-vm",children:"Configuring the development VM"}),"\n",(0,i.jsx)(t.p,{children:"Now that we have set the mobile device settings up, we need to mirror them in the develpment VM. If you've used NAT for the mobile device, redo the settings in the development one. If you've put it into a bridged network, do the same to the dev VM."}),"\n",(0,i.jsxs)(t.p,{children:["After this, we need to add a ",(0,i.jsx)(t.em,{children:"Host-only Adapter"})," to the dev VM. Did you take note of the Adapter name from the mobile machine? This is where you use it!"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"dev machine host-only adapter",src:n(9569).A+"",width:"627",height:"479"})}),"\n",(0,i.jsx)(t.h3,{id:"starting-up-the-machines",children:"Starting up the machines"}),"\n",(0,i.jsx)(t.p,{children:"Normally, you just start them from their respective applications. Start the mobile machine from Xamarin or Genymotion, and start your dev VM from VirtualBox."}),"\n",(0,i.jsx)(t.p,{children:"But I've found that if I start the mobile machine from Genymotion, it tends to reset the Host-only Adapter name, add a new one, and fail to start. So, if this happens to you, this is what I do:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Start the mobile machine from VirtualBox. A command-line terminal will pop up, and will start loading."}),"\n",(0,i.jsx)(t.li,{children:"When it appears that the terminal isn't doing anything anymore, you can safely start the mobile device from Genymotion."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"mobile device ready to be started from genymotion",src:n(5188).A+"",width:"721",height:"468"})}),"\n",(0,i.jsx)(t.p,{children:"This is how my terminal looks when it stops loading. At this stage, I start the device from Genymotion as normal."}),"\n",(0,i.jsx)(t.p,{children:"If you haven't already, you can now start your development VM as well."}),"\n",(0,i.jsx)(t.h3,{id:"connecting-to-the-mobile-device",children:"Connecting to the mobile device"}),"\n",(0,i.jsxs)(t.p,{children:["In this scenario, we are going to use ",(0,i.jsx)(t.code,{children:"adb"})," to connect to the mobile device from the dev VM. All we need is the IP that the device is running on. Both Genymotion and Xamarin provide some way to see the IP."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"genymotion shows ip",src:n(3133).A+"",width:"605",height:"81"})}),"\n",(0,i.jsx)(t.p,{children:"But if you're having trouble to find it, you can go to VirtualBox, and see the IP from the terminal we saw earlier."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"virtualbox shows ip",src:n(5718).A+"",width:"721",height:"468"})}),"\n",(0,i.jsxs)(t.p,{children:["So, now we can easily connect from our dev VM using the command-line tool ",(0,i.jsx)(t.code,{children:"adb"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"kblagoev@deva:~/Android/Sdk/platform-tools$ ./adb connect 192.168.68.101\n* daemon not running; starting now at tcp:5037\n* daemon started successfully\nconnected to 192.168.68.101:5555\nkblagoev@deva:~/Android/Sdk/platform-tools$ \n"})}),"\n",(0,i.jsx)(t.h2,{id:"success",children:"Success!"}),"\n",(0,i.jsx)(t.p,{children:"And since I've used a bridged network, I can also easily do network connections between the two devices, which can be quite useful in some cases. So I recommend it, unless you have your own way of doing it."}),"\n",(0,i.jsx)(t.p,{children:"Now you can develop! Have fun!"}),"\n","\n","\n",(0,i.jsx)(a.A,{})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1704:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/virtualbox-network-2-5f94bf500d023db6843b5d7a24a0c9c6.png"},2714:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);const i={"donate-card":"donate-card_mbts",bmac:"bmac_qmhE"};var o=n(4848);function a(){return(0,o.jsx)("div",{className:"alert alert--primary",role:"alert",children:(0,o.jsxs)("div",{className:"card__body",children:[(0,o.jsx)("p",{children:"Thank you for reading!"}),(0,o.jsx)("p",{children:"The information in this blog, as well as all the tools, apps and libraries I develop are currently open source."}),(0,o.jsx)("p",{children:"I would love to keep it this way, and you can help!"}),(0,o.jsx)("p",{children:"You can buy me a coffee from here, which will go towards the next all-nighter I pull off!"}),(0,o.jsx)("a",{href:"https://www.buymeacoffee.com/kblagoev",target:"_blank",children:(0,o.jsx)("img",{src:"https://cdn.buymeacoffee.com/buttons/v2/default-violet.png",className:i.bmac,alt:"Buy Me A Coffee"})}),(0,o.jsxs)("p",{children:["Or you can support me and my code monthly over at ",(0,o.jsx)("a",{href:"https://github.com/sponsors/tihawk",target:"_blank",children:"Github Sponsors!"})]}),(0,o.jsx)("p",{children:"Thanks!"})]})})}},3133:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/adb-ip-1-97587394079d4bdffd667180ea1917b3.png"},4063:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/genymotion-devices-dff12f90942a44990988d4a6c83d5b10.png"},5188:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/genymotion-starting-674dbd0fa7a84a0f0770ed922ddb540a.png"},5718:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/adb-ip-2-72e0b5031a51946d799118c103e50e00.png"},5955:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/virtualbox-list-3b5a3c220f06e055963a16f93a8ba98b.png"},6979:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/virtualbox-network-1-6dd7ab0921133098dea8f8e96abd2748.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var i=n(6540);const o={},a=i.createContext(o);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:t},e.children)}},9569:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/virtualbox-network-3-bcd4db9880a0523c14773659a107589e.png"}}]);