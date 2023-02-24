"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(n),h=a,p=m["".concat(s,".").concat(h)]||m[h]||c[h]||i;return n?o.createElement(p,r(r({ref:t},u),{},{components:n})):o.createElement(p,r({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7604:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(7294);const a={"donate-card":"donate-card_mbts",bmac:"bmac_qmhE"};function i(){return o.createElement("div",{className:"alert alert--primary",role:"alert"},o.createElement("div",{className:"card__body"},o.createElement("p",null,"Thank you for reading!"),o.createElement("p",null,"The information in this blog, as well as all the tools, apps and libraries I develop are currently open source."),o.createElement("p",null,"I would love to keep it this way, and you can help!"),o.createElement("p",null,"You can buy me a coffee from here, which will go towards the next all-nighter I pull off!"),o.createElement("a",{href:"https://www.buymeacoffee.com/kblagoev",target:"_blank"},o.createElement("img",{src:"https://cdn.buymeacoffee.com/buttons/v2/default-violet.png",className:a.bmac,alt:"Buy Me A Coffee"})),o.createElement("p",null,"Or you can support me and my code monthly over at ",o.createElement("a",{href:"https://github.com/sponsors/tihawk",target:"_blank"},"Github Sponsors!")),o.createElement("p",null,"Thanks!")))}},3733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(7462),a=(n(7294),n(3905)),i=n(7604);const r={slug:"developing-on-android-emulator-from-virtualbox",title:"How to connect to an Android Emulator from VirtualBox",description:"Developing from a VM is great, but there's a problem when you have to run an emulator inside of it. My solution is to have two separate virtual machines running in VirtualBox on the host OS, and let them communicate using networking.",authors:"kiroki",tags:["Coding","Programming","VMs","Android"]},l=void 0,s={permalink:"/blog/developing-on-android-emulator-from-virtualbox",source:"@site/blog/2023-02-24developing-on-android-emulator-from-virtualbox.md",title:"How to connect to an Android Emulator from VirtualBox",description:"Developing from a VM is great, but there's a problem when you have to run an emulator inside of it. My solution is to have two separate virtual machines running in VirtualBox on the host OS, and let them communicate using networking.",date:"2023-02-24T00:00:00.000Z",formattedDate:"February 24, 2023",tags:[{label:"Coding",permalink:"/blog/tags/coding"},{label:"Programming",permalink:"/blog/tags/programming"},{label:"VMs",permalink:"/blog/tags/v-ms"},{label:"Android",permalink:"/blog/tags/android"}],readingTime:4.51,hasTruncateMarker:!1,authors:[{name:"Kiril Panayotov Blagoev",title:"Admin",url:"https://github.com/tihawk",imageURL:"https://github.com/tihawk.png",key:"kiroki"}],frontMatter:{slug:"developing-on-android-emulator-from-virtualbox",title:"How to connect to an Android Emulator from VirtualBox",description:"Developing from a VM is great, but there's a problem when you have to run an emulator inside of it. My solution is to have two separate virtual machines running in VirtualBox on the host OS, and let them communicate using networking.",authors:"kiroki",tags:["Coding","Programming","VMs","Android"]},nextItem:{title:"How to remember what I was reading about?",permalink:"/blog/how-to-remember-what-i-was-reading-about"}},d={authorsImageUrls:[void 0]},u=[{value:"Motivation",id:"motivation",level:2},{value:"Setup",id:"setup",level:2},{value:"Creating a virtual device",id:"creating-a-virtual-device",level:3},{value:"Configuring the virtual mobile device",id:"configuring-the-virtual-mobile-device",level:3},{value:"Configuring the development VM",id:"configuring-the-development-vm",level:3},{value:"Starting up the machines",id:"starting-up-the-machines",level:3},{value:"Connecting to the mobile device",id:"connecting-to-the-mobile-device",level:3},{value:"Success!",id:"success",level:2}],m={toc:u},c="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"If you're like me, you try and keep all of your coding-based clutter on a virtual machine. Which usually works great. You can maintain a clean OS, separate work from pleasure, and quickly return to a snapshot if something goes terribly wrong. But when I tried doing development for Android from a virtual machine, I quickly arrived at an unexpected hurdle."),(0,a.kt)("p",null,"If you try and run ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/studio"},"Android Studio"),"'s emulators, you'll quickly be reminded that you can't simply run a virtual machine inside a virtual machine. You technically can, if you enable ",(0,a.kt)("em",{parentName:"p"},"Nested VT-x/AMD-V"),", but even if you succeed navigating the hell of starting an AVD android emulator from inside your VM, you'd be met by the huge performance hit of running nested virtualisation."),(0,a.kt)("p",null,"You can instead consider running either the ",(0,a.kt)("a",{parentName:"p",href:"https://www.genymotion.com/"},"Genymotion emulator")," or ",(0,a.kt)("a",{parentName:"p",href:"https://xamarin.com/android-player"},"Xamarin Android Player"),", which both use Oracle's ",(0,a.kt)("a",{parentName:"p",href:"https://www.virtualbox.org/"},"VirtualBox")," to run their emulators. But instead of running them inside your VM (and being met with the issue of nested virtualisation), you can run these emulators on your host OS. Since both of these use VirtualBox, ",(0,a.kt)("strong",{parentName:"p"},"you can take full use of the networking aspect of VMs to connect your development VM to your Android emulator VM!")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Hence, my solution is to have two separate virtual machines running in VirtualBox on the host OS, and let them communicate using networking.")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"I'm assuming you've already "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Downloaded and installed VirtualBox"),(0,a.kt)("li",{parentName:"ol"},"Set up a development VM inside of VirtualBox"),(0,a.kt)("li",{parentName:"ol"},"Connected your dev VM to the outside world using either ",(0,a.kt)("em",{parentName:"li"},"NAT")," or ",(0,a.kt)("strong",{parentName:"li"},"Bridged")," networking (I personally use bridged, since it helps me to easier access any web dev instances running in the VM)")),(0,a.kt)("h3",{id:"creating-a-virtual-device"},"Creating a virtual device"),(0,a.kt)("p",null,"Alrighty, now we can download and install either ",(0,a.kt)("a",{parentName:"p",href:"https://www.genymotion.com/"},"Genymotion emulator")," or ",(0,a.kt)("a",{parentName:"p",href:"https://xamarin.com/android-player"},"Xamarin Android Player")," on your host OS."),(0,a.kt)("p",null,"After you've done that, you can start up your software, and set up a virtual device (phone) by following the instructions."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"created virtual device",src:n(1329).Z,width:"1532",height:"386"})),(0,a.kt)("p",null,"Now we need to do some configuration work inside VirtualBox."),(0,a.kt)("h3",{id:"configuring-the-virtual-mobile-device"},"Configuring the virtual mobile device"),(0,a.kt)("p",null,"If you open up VirtualBox, you'll see that the newly created virtual mobile device is listed in the list of machines."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"list virtual devices",src:n(5490).Z,width:"976",height:"678"})),(0,a.kt)("p",null,"We need to edit the network settings for the mobile device. It will need two adapters. One is to connect to the network of the development machine (NAT or Bridged). In my case the machines are in a bridged network, which makes it easier to access from the host OS, as well as between each-other."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For some development platforms like React-Native, it's important that both the dev machine and mobile device are on the same network to allow easy debugging.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"mobile bridged adapter",src:n(886).Z,width:"634",height:"476"})),(0,a.kt)("p",null,"The other, arguably more important adapter to add/enable is the ",(0,a.kt)("strong",{parentName:"p"},"Host-only Adapter"),". This is the one ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/command-line/adb"},"adb")," will connect over."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"mobile host-only adapter",src:n(3953).Z,width:"629",height:"475"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Make note of the adapter ",(0,a.kt)("em",{parentName:"strong"},"name")," here!")),(0,a.kt)("p",null,"VirtualBox has the habit of creating multiple host-only adapters, so this name is very important to make note of."),(0,a.kt)("h3",{id:"configuring-the-development-vm"},"Configuring the development VM"),(0,a.kt)("p",null,"Now that we have set the mobile device settings up, we need to mirror them in the develpment VM. If you've used NAT for the mobile device, redo the settings in the development one. If you've put it into a bridged network, do the same to the dev VM."),(0,a.kt)("p",null,"After this, we need to add a ",(0,a.kt)("em",{parentName:"p"},"Host-only Adapter")," to the dev VM. Did you take note of the Adapter name from the mobile machine? This is where you use it!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dev machine host-only adapter",src:n(511).Z,width:"627",height:"479"})),(0,a.kt)("h3",{id:"starting-up-the-machines"},"Starting up the machines"),(0,a.kt)("p",null,"Normally, you just start them from their respective applications. Start the mobile machine from Xamarin or Genymotion, and start your dev VM from VirtualBox."),(0,a.kt)("p",null,"But I've found that if I start the mobile machine from Genymotion, it tends to reset the Host-only Adapter name, add a new one, and fail to start. So, if this happens to you, this is what I do:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Start the mobile machine from VirtualBox. A command-line terminal will pop up, and will start loading."),(0,a.kt)("li",{parentName:"ol"},"When it appears that the terminal isn't doing anything anymore, you can safely start the mobile device from Genymotion.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"mobile device ready to be started from genymotion",src:n(4256).Z,width:"721",height:"468"})),(0,a.kt)("p",null,"This is how my terminal looks when it stops loading. At this stage, I start the device from Genymotion as normal."),(0,a.kt)("p",null,"If you haven't already, you can now start your development VM as well."),(0,a.kt)("h3",{id:"connecting-to-the-mobile-device"},"Connecting to the mobile device"),(0,a.kt)("p",null,"In this scenario, we are going to use ",(0,a.kt)("inlineCode",{parentName:"p"},"adb")," to connect to the mobile device from the dev VM. All we need is the IP that the device is running on. Both Genymotion and Xamarin provide some way to see the IP."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"genymotion shows ip",src:n(2115).Z,width:"605",height:"81"})),(0,a.kt)("p",null,"But if you're having trouble to find it, you can go to VirtualBox, and see the IP from the terminal we saw earlier."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"virtualbox shows ip",src:n(1147).Z,width:"721",height:"468"})),(0,a.kt)("p",null,"So, now we can easily connect from our dev VM using the command-line tool ",(0,a.kt)("inlineCode",{parentName:"p"},"adb")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kblagoev@deva:~/Android/Sdk/platform-tools$ ./adb connect 192.168.68.101\n* daemon not running; starting now at tcp:5037\n* daemon started successfully\nconnected to 192.168.68.101:5555\nkblagoev@deva:~/Android/Sdk/platform-tools$ \n")),(0,a.kt)("h2",{id:"success"},"Success!"),(0,a.kt)("p",null,"And since I've used a bridged network, I can also easily do network connections between the two devices, which can be quite useful in some cases. So I recommend it, unless you have your own way of doing it."),(0,a.kt)("p",null,"Now you can develop! Have fun!"),(0,a.kt)(i.Z,{mdxType:"DonateCard"}))}h.isMDXComponent=!0},2115:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/adb-ip-1-97587394079d4bdffd667180ea1917b3.png"},1147:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/adb-ip-2-72e0b5031a51946d799118c103e50e00.png"},1329:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/genymotion-devices-dff12f90942a44990988d4a6c83d5b10.png"},4256:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/genymotion-starting-674dbd0fa7a84a0f0770ed922ddb540a.png"},5490:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/virtualbox-list-3b5a3c220f06e055963a16f93a8ba98b.png"},886:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/virtualbox-network-1-6dd7ab0921133098dea8f8e96abd2748.png"},3953:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/virtualbox-network-2-5f94bf500d023db6843b5d7a24a0c9c6.png"},511:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/virtualbox-network-3-bcd4db9880a0523c14773659a107589e.png"}}]);