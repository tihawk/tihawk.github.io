"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5312],{5680:(e,t,o)=>{o.d(t,{xA:()=>u,yg:()=>d});var a=o(6540);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,i=function(e,t){if(null==e)return{};var o,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var h=a.createContext({}),l=function(e){var t=a.useContext(h),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=l(e.components);return a.createElement(h.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,h=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(o),p=i,d=m["".concat(h,".").concat(p)]||m[p]||c[p]||n;return o?a.createElement(d,r(r({ref:t},u),{},{components:o})):a.createElement(d,r({ref:t},u))}));function d(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,r=new Array(n);r[0]=p;var s={};for(var h in t)hasOwnProperty.call(t,h)&&(s[h]=t[h]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<n;l++)r[l]=o[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},9577:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var a=o(8168),i=(o(6540),o(5680));const n={slug:"winamp-github-repository-problems",title:"The Winamp GitHub repository is seriously mismanaged. And there's nothing they can do about it now.",description:"The Winamp GitHub repository is seriously mismanaged. And there's nothing they can do about it now.",authors:"kiroki",tags:["Cyber Security"]},r=void 0,s={permalink:"/blog/winamp-github-repository-problems",source:"@site/blog/2024-10-08winamp-github-repository-problems.md",title:"The Winamp GitHub repository is seriously mismanaged. And there's nothing they can do about it now.",description:"The Winamp GitHub repository is seriously mismanaged. And there's nothing they can do about it now.",date:"2024-10-08T00:00:00.000Z",formattedDate:"October 8, 2024",tags:[{label:"Cyber Security",permalink:"/blog/tags/cyber-security"}],readingTime:7.535,hasTruncateMarker:!1,authors:[{name:"Kiril Panayotov Blagoev",title:"Admin",url:"https://github.com/tihawk",imageURL:"https://github.com/tihawk.png",key:"kiroki"}],frontMatter:{slug:"winamp-github-repository-problems",title:"The Winamp GitHub repository is seriously mismanaged. And there's nothing they can do about it now.",description:"The Winamp GitHub repository is seriously mismanaged. And there's nothing they can do about it now.",authors:"kiroki",tags:["Cyber Security"]},prevItem:{title:"On shebangs, and their funky behvaiour",permalink:"/blog/on-shebangs-being-funky"},nextItem:{title:"How I manage configuration files on my Linux machine using dotfiles and stow",permalink:"/blog/using-stow-for-managing dotfiles"}},h={authorsImageUrls:[void 0]},l=[{value:"Preamble",id:"preamble",level:2},{value:"A rough overview of GitHub",id:"a-rough-overview-of-github",level:2},{value:"Back to the beauty that is the Winamp GitHub repo",id:"back-to-the-beauty-that-is-the-winamp-github-repo",level:2},{value:"Winamp did take some action",id:"winamp-did-take-some-action",level:3},{value:"They deleted some of the commits",id:"they-deleted-some-of-the-commits",level:3},{value:"Ok, what can they do?",id:"ok-what-can-they-do",level:3},{value:"A lesser-known &quot;feature&quot; of GitHub",id:"a-lesser-known-feature-of-github",level:2},{value:"So, what if GitHub clears the cache, and we delete the repo?",id:"so-what-if-github-clears-the-cache-and-we-delete-the-repo",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:l},m="wrapper";function c(e){let{components:t,...o}=e;return(0,i.yg)(m,(0,a.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"preamble"},"Preamble"),(0,i.yg)("p",null,'At this point, I think it\'s no secret that Winamp going "open-source" has been a bit of a ',(0,i.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=NgZPa78InWw&pp=ygUSd2luYW1wIG9wZW4gc291cmNl"},"shit-show"),"."),(0,i.yg)("p",null,'The initial outrage on the repository was in response to the apparent lack of understanding of what open-source means on the side of Winamp, as they claim that their license is "',(0,i.yg)("a",{parentName:"p",href:"https://www.gnu.org/licenses/copyleft.en.html"},"copyleft"),'", while allowing for neither redistribution of modified versions, nor contributions to the official project, and initially not even ',(0,i.yg)("a",{parentName:"p",href:"https://github.com/WinampDesktop/winamp/commit/64a51755c6f5d85039463c8bf7c2a9e98e862586"},"allowing forking"),"! Someone did ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/WinampDesktop/winamp/issues/6"},"point it out")," to them that they can't ban forking on GitHub, as that constitutes ",(0,i.yg)("a",{parentName:"p",href:"https://docs.github.com/en/site-policy/github-terms/github-terms-of-service#5-license-grant-to-other-users"},"a violation of the TOS"),'. So, Winamp updated their license to allow forking, but it still doesn\'t allow anything else that would constitute "open-source" - redistribution or even outside contributions.'),(0,i.yg)("figure",{class:"kg-card kg-image-card kg-card-hascaption"},(0,i.yg)("img",{src:"/content/images/2024/10/winamp-allowed-forking.jpg",class:"kg-image",alt:!0,loading:"lazy"}),(0,i.yg)("figcaption",null,"A truly historic moment, ladies and gentlemen :)")),(0,i.yg)("p",null,'In objective terms, this license falls in the category of "source-available" rather than open-source, and this ',(0,i.yg)("em",{parentName:"p"},"is"),' an important distinction to make. I have no problem with Winamp making their source available as a valuable case-study, but they really shouldn\'t have used the term "copyleft" if that is the intention.'),(0,i.yg)("p",null,"But we're here to discuss more so another glaring issue with the repository, which might actually end up landing a lawsuit at Winamp's doors. And sadly, they can't really do anything about it anymore."),(0,i.yg)("h2",{id:"a-rough-overview-of-github"},"A rough overview of GitHub"),(0,i.yg)("p",null,"In its simplest form, GitHub can be described as a web-hosted git server for the public. As a developer interested in open-source, you can create a git repository, write some incredible code that you AND your mum are really proud of, and share it with the world on GitHub, so everyone can appreciate your contribution to the democratisation of programming."),(0,i.yg)("p",null,"But GitHub is more than simply a place to host your git repository. It is also a collaboration platform, where anyone who feels like they ",(0,i.yg)("em",{parentName:"p"},"like")," your code, and would like to change it until they ",(0,i.yg)("strong",{parentName:"p"},"love"),' it, can "fork" your repository. Forking is in fact not a more aggressive version of spooning, but simply the act of making a clone of the original repository in your account. This forked repository contains all the history of the original - all the code, and all the commits that came before the fork.'),(0,i.yg)("h2",{id:"back-to-the-beauty-that-is-the-winamp-github-repo"},"Back to the beauty that is the Winamp GitHub repo"),(0,i.yg)("p",null,"If you were to peruse the code on the Winamp repository in the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/WinampDesktop/winamp/tree/20d28e80a5c861a9d5f449ea911ab75b4f37ad0d"},"first few days")," after its publishing, you would have noticed some very intriguing things. For example, a ",(0,i.yg)("inlineCode",{parentName:"p"},"BuildTools")," directory which included things like whole executable files the ",(0,i.yg)("inlineCode",{parentName:"p"},"7zip"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"git"),', and other programs just hanging around, designated as "build tools". And although very odd indeed, these things seem more so ',(0,i.yg)("em",{parentName:"p"},"stupid")," than harmful."),(0,i.yg)("p",null,"But there's much more there! Inside the repo there was proprietary code from Dolby, some questionable SDKs which Winamp may or may-not have the right to redistribute, an entire directory containing the commercial version of Qt, some, admittedly expired, credentials, and so on, and so forth."),(0,i.yg)("h3",{id:"winamp-did-take-some-action"},"Winamp did take some action"),(0,i.yg)("p",null,"There are numerous pull requests ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/WinampDesktop/winamp/pull/1378"},"deleting said files"),", and the maintainers ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/WinampDesktop/winamp/commit/16911d12a01f82fea5d851f98e9e702d80f881d5"},"did")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/WinampDesktop/winamp/commit/e721b2e039742c12c1f9c93b1b779ca3b7fc061e"},"also")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/WinampDesktop/winamp/commit/6ff62b6dda0906648b0a5ce891e85231cbbb40d5"},"remove")," a lot, if not all the unlicensed code. And they did this... in public. You can clearly see many of the commits that delete stuff right there on the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/WinampDesktop/winamp/commits"},"commits page"),". Which, you know, is a problem. If you open any of the commits listed there, you can simply look at the code that was deleted. If you simply clone that repository locally, you can move around that history and see it at the times before it was removed. This public deletion without rebasing just does nothing."),(0,i.yg)("h3",{id:"they-deleted-some-of-the-commits"},"They deleted some of the commits"),(0,i.yg)("p",null,"OK well, if you just scroll around the commits history, you will notice that the commits that delete, for example the Dolby code is nowhere to be found. But in the end, that doesn't really do anything either, since you can still just go back in history to ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/WinampDesktop/winamp/commit/20d28e80a5c861a9d5f449ea911ab75b4f37ad0d"},"a commit before they deleted it"),", and just see it there."),(0,i.yg)("figure",{class:"kg-card kg-image-card kg-card-hascaption"},(0,i.yg)("img",{src:"/content/images/2024/10/look-mum-im-a-criminal-now.jpg",class:"kg-image",alt:!0,loading:"lazy"}),(0,i.yg)("figcaption",null,"Does this count as distribution?")),(0,i.yg)("h3",{id:"ok-what-can-they-do"},"Ok, what can they do?"),(0,i.yg)("p",null,"I mean, they could just rebase everything, this would theoretically get rid of the commit history. They'd need to get rid of pull requests as well, since those contain code from certain history positions. And to be honest, at this point I'd just delete the repo from GitHub, clean up the codebase locally, and create the GitHub repo anew."),(0,i.yg)("p",null,"But really, even that would not be enough anymore."),(0,i.yg)("h2",{id:"a-lesser-known-feature-of-github"},'A lesser-known "feature" of GitHub'),(0,i.yg)("p",null,"Remember how I said that they deleted some of the commits from their history, so you can't simply see what code they removed? Well, even though that commit is gone from the git history, and you wouldn't see it even if you cloned the repository locally... you can still see it on GitHub."),(0,i.yg)("p",null,'You see, to facilitate collaboration through forking, GitHub introduces something called a "',(0,i.yg)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/understanding-connections-between-repositories#viewing-a-repositorys-network"},"repository network"),'". This network holds information of the "upstream" or parent repository, all of its forks, and all the commits that belong to each fork.'),(0,i.yg)("p",null,"Additionally, GitHub caches commits, so that they can be accessed by other repositories in the repository network. As explained by ",(0,i.yg)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=41060102"},"Github themselves"),":"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},'GitHub stores the parent repository along with forks in a "repository network". It is a known behavior that objects from one network member are readable via other network members. Blobs and commits are stored together, while refs are stored separately for each fork. This shared storage model is what allows for pull requests between members of the same network.')),(0,i.yg)("p",null,"So, not only are the deleted commits potentially visible inside of forks that may have this commit from before it was deleted in the upstream repository. No, they are also just visible in general, as long as you know the commit hash. GitHub simply caches them, and you can just visit the page for that commit, and see all the changes it has made, and the entire code-base at that point in history."),(0,i.yg)("figure",{class:"kg-card kg-image-card kg-card-hascaption"},(0,i.yg)("img",{src:"/content/images/2024/10/github-deleted-commit.jpg",class:"kg-image",alt:!0,loading:"lazy"}),(0,i.yg)("figcaption",null,"You can still see deleted commits on GitHub")),(0,i.yg)("p",null,"So, even if you rebase your repository, the commits history is still there, cached and awaiting. And all forks that were made before the rebase, you can just peruse those anyway."),(0,i.yg)("p",null,"Now, to be fair - GitHub has an entire ",(0,i.yg)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository#about-sensitive-data-exposure"},"docs section")," about leaking sensitive data. It does mention that you can contact support, and request the cached commits to be removed, if they deem that sensitive data has been exposed."),(0,i.yg)("h3",{id:"so-what-if-github-clears-the-cache-and-we-delete-the-repo"},"So, what if GitHub clears the cache, and we delete the repo?"),(0,i.yg)("p",null,"Well, nothing. It has been already forked more than 2600 thousand times as of the time I'm writing this. It's out there on GitHub :) A lot of the forks were even made before anything was deleted from the repo. So you don't even have to rely on cached commit hashes. In the same ",(0,i.yg)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository#about-sensitive-data-exposure"},"docs page")," I linked above, GitHub themselves say that yeah - if someone has forked your repo, you're on your own, buddy."),(0,i.yg)("p",null,"If you remove the upstream repository of a repository network, GitHub simply ",(0,i.yg)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#deleting-a-public-repository"},"designates another fork")," to be the upstream one. And all of that history and cached commits are still accessible through any of the forked repositories."),(0,i.yg)("h2",{id:"conclusion"},"Conclusion"),(0,i.yg)("p",null,"I do find it ironic, that this same collaborative feature which Winamp tried to disallow us from using - forking their repo, is also the one which in the end will not allow them to ever escape the reality that they managed to leak some confidential data on their repository."),(0,i.yg)("p",null,"But hey, what's done is done, and it did allow me to learn more about how GitHub works with its repository networks and whatnot, so I guess it is possible to learn from someone else's mistakes. I hope you learned something from this too, at the very least to be very careful with what you push to GitHub. And if you do make a mistake - just delete the repo before it was forked, and try again. QED"),(0,i.yg)("p",null,"In terms of the Winamp repository, I am happy that they decided to share their codebase. Even though you literally can't do anything with it apart from reading it, it's still a nice case-study. And I do not wish for them to regret going source-available, so I hope they don't get any legal problems."),(0,i.yg)("p",null,"But on the other hand, I do wish they'd gone fully open-source. I mean, what are they protecting right now? Winamp is a big part of history, everyone has at least heard of it, if not used it. But nowadays it's just that - part of history. But we've seen that through collaboration and openness of the developers, a lot of software can live for a very long time. Winamp could become something modern and fully maintained, if it allowed for outside contribution. I do hope they take that next step at some point. After they clean up this mess of a repo..."))}c.isMDXComponent=!0}}]);