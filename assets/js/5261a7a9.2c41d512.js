"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8279],{5680:(e,n,t)=>{t.d(n,{xA:()=>h,yg:()=>m});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),g=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},h=function(e){var n=g(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=g(t),c=r,m=p["".concat(l,".").concat(c)]||p[c]||u[c]||i;return t?a.createElement(m,s(s({ref:n},h),{},{components:t})):a.createElement(m,s({ref:n},h))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var g=2;g<i;g++)s[g]=t[g];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9896:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var a=t(8168),r=(t(6540),t(5680));const i={slug:"on-shebangs-being-funky",title:"On shebangs, and their funky behaviour",description:"Shebangs, or interpreter directives have been around since the '80s. They help select interpreters for the little scripts we write. But I realised I've never really looked into why am I writing this magic line of nonsense in the beginning of scripts. And of course, what are its limitations and/or weird associated behaviours we can make use of?",authors:"kiroki",tags:["Coding","Scripting","Programming","Linux"]},s=void 0,o={permalink:"/blog/on-shebangs-being-funky",source:"@site/blog/2025-02-20on-shebangs-being-funky.md",title:"On shebangs, and their funky behaviour",description:"Shebangs, or interpreter directives have been around since the '80s. They help select interpreters for the little scripts we write. But I realised I've never really looked into why am I writing this magic line of nonsense in the beginning of scripts. And of course, what are its limitations and/or weird associated behaviours we can make use of?",date:"2025-02-20T00:00:00.000Z",formattedDate:"February 20, 2025",tags:[{label:"Coding",permalink:"/blog/tags/coding"},{label:"Scripting",permalink:"/blog/tags/scripting"},{label:"Programming",permalink:"/blog/tags/programming"},{label:"Linux",permalink:"/blog/tags/linux"}],readingTime:7.275,hasTruncateMarker:!1,authors:[{name:"Kiril Panayotov Blagoev",title:"Admin",url:"https://github.com/tihawk",imageURL:"https://github.com/tihawk.png",key:"kiroki"}],frontMatter:{slug:"on-shebangs-being-funky",title:"On shebangs, and their funky behaviour",description:"Shebangs, or interpreter directives have been around since the '80s. They help select interpreters for the little scripts we write. But I realised I've never really looked into why am I writing this magic line of nonsense in the beginning of scripts. And of course, what are its limitations and/or weird associated behaviours we can make use of?",authors:"kiroki",tags:["Coding","Scripting","Programming","Linux"]},prevItem:{title:"The Monitor - Bootstrapping a PC from BIOS",permalink:"/blog/bootstrapping-a-pc-from-bios-the-monitor"},nextItem:{title:"The Winamp GitHub repository is seriously mismanaged. And there's nothing they can do about it now.",permalink:"/blog/winamp-github-repository-problems"}},l={authorsImageUrls:[void 0]},g=[{value:"Shebang, or the interpreter directive",id:"shebang-or-the-interpreter-directive",level:2},{value:"Interpreters, you say",id:"interpreters-you-say",level:2},{value:"Well, JavaScript is interpreted too",id:"well-javascript-is-interpreted-too",level:3},{value:"Arguments in a shebang line",id:"arguments-in-a-shebang-line",level:2},{value:"Interpreter directive arguments",id:"interpreter-directive-arguments",level:3},{value:"Passing multiple arguments to the shebang line",id:"passing-multiple-arguments-to-the-shebang-line",level:3},{value:"Nesting shebang calls",id:"nesting-shebang-calls",level:2},{value:"And now with arguments",id:"and-now-with-arguments",level:3}],h={toc:g},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"shebang-or-the-interpreter-directive"},"Shebang, or the interpreter directive"),(0,r.yg)("p",null,"Have you ever wondered what's that magical first line that you put on top of your scripts, and starts with the characters ",(0,r.yg)("inlineCode",{parentName:"p"},"#!")," ?"),(0,r.yg)("p",null,"You might've seen it, for example, in the form of ",(0,r.yg)("inlineCode",{parentName:"p"},"#!/usr/bin/env bash")," on the first line of every bash script you've ever written or seen."),(0,r.yg)("p",null,"But why is it there, and what does it do?"),(0,r.yg)("p",null,"This so-called ",(0,r.yg)("em",{parentName:"p"},"shebang")," line is a Unix feature which was introduced ",(0,r.yg)("a",{parentName:"p",href:"https://homepages.cwi.nl/~aeb/std/shebang/origin.html"},"back in 1980")," to allow for scripts to be run as executables by specifying the interpreter that the script needs to run itself. This simply means that with the shebang you're abstracting away the call to the interpreter, and instead of calling ",(0,r.yg)("inlineCode",{parentName:"p"},"bash script.sh")," you can now just say ",(0,r.yg)("inlineCode",{parentName:"p"},"./script.sh"),". That's mostly all there is to it. And yes, it's technically called an ",(0,r.yg)("em",{parentName:"p"},"interpreter directive"),"."),(0,r.yg)("p",null,"What happens in the background, is that the program loader finds the interpreter you've specified in your ",(0,r.yg)("inlineCode",{parentName:"p"},"PATH")," variable, runs it, and passes the location of your script to the interpreter as an argument. You can see that much in your process viewer as well."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'$ cat > shebang.sh\n#! /usr/bin/env bash\necho "SHEBANG!"\nread\n^C\n$ chmod +x shebang.sh\n$ ./shebang.sh & ps -aux | grep shebang\n[2] 276038\nSHEBANG!\nkblagoev  276038  0.0  0.0  13156  3584 pts/5    T    13:55   0:00 bash ./shebang.sh\n\n[2]+  Stopped                 ./shebang.sh\n$ fg\n./shebang.sh\n^C\n$\n')),(0,r.yg)("h2",{id:"interpreters-you-say"},"Interpreters, you say"),(0,r.yg)("p",null,"If you've also written Python scripts, you surely have seen that you can pass a shebang to the python script as well. Since Python is an interpreted language, it actually works in precisely the same way w.r.t. the shebang line. You can simply write ",(0,r.yg)("inlineCode",{parentName:"p"},"#!/usr/bin/env python3")," at the top of your script, make it executable, and suddenly the program loader knows to run the python interpreter and pass your script location as an argument."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python",metastring:'title="test.py"',title:'"test.py"'},'#!/usr/bin/env python3\n\nprint("Hello from the Python interpreter")\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ chmod +x test.py\n$ ./test.py\nHello from the Python interpreter\n")),(0,r.yg)("h3",{id:"well-javascript-is-interpreted-too"},"Well, JavaScript is interpreted too"),(0,r.yg)("p",null,"Oh, how right you are! For some reason it never occured to me before, but since JavaScript is also a non-compiled, interpreted language, we should be able to make any scripts written in JS into executable files by providing a shebang line to it with some JS runtime like ",(0,r.yg)("em",{parentName:"p"},"node")," or ",(0,r.yg)("em",{parentName:"p"},"bun"),", right?"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="test.js"',title:'"test.js"'},'#!/usr/bin/env node\n\nconsole.log("Hello from Node, it being a javascript interpreter and all")\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ chmod +x test.js\n$ ./test.js\nHello from Node, it being a javascript interpreter and all\n")),(0,r.yg)("p",null,"Yep. That's really cool, if you ask me! Now, technically there is a limitation here. As you've noticed, the shebang line starts with a ",(0,r.yg)("em",{parentName:"p"},"hash")," symbol, and there's a good reason for that. The ",(0,r.yg)("inlineCode",{parentName:"p"},"#")," symbol is used as a comment in many scripting languages, like shell and python, and it has been chosen for exactly that reason - to not break the syntax that the interpreter for shell expects. But in JavaScript ",(0,r.yg)("inlineCode",{parentName:"p"},"#")," is not a comment. So, technically this would break JS syntax. And as such, it's up to each JS interpreter to implement the ignoring of shebang lines - basically a first line of a script file which starts with ",(0,r.yg)("inlineCode",{parentName:"p"},"#")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"#!")," I guess. As such, with languages that don't support ",(0,r.yg)("em",{parentName:"p"},"hash")," comments your milage may vary depending on the interpreter implementation. But hey, it works on node!"),(0,r.yg)("p",null,"I leave it as an exercise for the reader to see if your favourite scripting language works with shebang lines :) Odds are, it does - as long as either the language already has ",(0,r.yg)("inlineCode",{parentName:"p"},"#")," as a comment, or your interpreter has implemented ignoring shebang lines."),(0,r.yg)("h2",{id:"arguments-in-a-shebang-line"},"Arguments in a shebang line"),(0,r.yg)("h3",{id:"interpreter-directive-arguments"},"Interpreter directive arguments"),(0,r.yg)("p",null,"So, technically the the shebang syntax is defined as ",(0,r.yg)("inlineCode",{parentName:"p"},"#! interpreter [optional-one-arg-only]"),". This means that the ",(0,r.yg)("inlineCode",{parentName:"p"},"interpreter")," is actually the first value provided after the magic number ",(0,r.yg)("inlineCode",{parentName:"p"},"#!"),". So, we could write simply ",(0,r.yg)("inlineCode",{parentName:"p"},"#! /bin/bash")," and hope that the ",(0,r.yg)("em",{parentName:"p"},"bash")," is located at ",(0,r.yg)("inlineCode",{parentName:"p"},"/bin/bash"),"."),(0,r.yg)("p",null,"But, as we've seen, we actually usually write more so something like ",(0,r.yg)("inlineCode",{parentName:"p"},"#! /usr/bin/env bash"),', meaning that the "interpreter" is actually ',(0,r.yg)("inlineCode",{parentName:"p"},"/usr/bin/env"),", and we have an additional optional param called ",(0,r.yg)("inlineCode",{parentName:"p"},"bash"),". This isn't really what's happening though. What we're saying here, is that we are going to look for ",(0,r.yg)("inlineCode",{parentName:"p"},"bash")," inside the ",(0,r.yg)("inlineCode",{parentName:"p"},"PATH")," variable. This helps with the portability of scripts between different OSs, as we can't guarantee that the interpreter will be in the same location on each OS."),(0,r.yg)("p",null,"But, by doing this, we've also used up all of our 1 available optional arguments we can pass into the shebang line. So, if we need to pass an argument to an interpreter, we are out of luck."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="arguments_not_working.js"',title:'"arguments_not_working.js"'},'#!/usr/bin/env node -e console.log(\\"Running this through the shebang line\\")\n')),(0,r.yg)("p",null,'If we try running this, we would always get an error that saying "No such file or directory"'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ chmod +x arguments_not_working.js\n$ ./arguments_not_working.js\n/usr/bin/env: 'node -e console.log(\\\\\"Running this through the shebang line\\\\\")': No such file or directory\n/usr/bin/env: use -[v]S to pass options in shebang lines\n")),(0,r.yg)("h3",{id:"passing-multiple-arguments-to-the-shebang-line"},"Passing multiple arguments to the shebang line"),(0,r.yg)("p",null,"But hey, what's that thing on the bottom saying? Well, we can actually ",(0,r.yg)("a",{parentName:"p",href:"https://www.gnu.org/software/coreutils/manual/html_node/env-invocation.html#g_t_002dS_002f_002d_002dsplit_002dstring-usage-in-scripts"},"pass multiple arguments")," to the shebang line, using the ",(0,r.yg)("inlineCode",{parentName:"p"},"-S")," flag! It's not guaranteed to work on every system, so it may reduce portability. But it's still a thing we can try."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="arguments_working.js"',title:'"arguments_working.js"'},'#!/usr/bin/env -S node -e console.log(\\""Running\\_this\\_through\\_the\\_shebang\\_line\\"")\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ chmod +x arguments_working.js\n$ ./arguments_working.js\nRunning this through the shebang line\n")),(0,r.yg)("p",null,"As you notice that the ",(0,r.yg)("a",{parentName:"p",href:"https://www.gnu.org/software/coreutils/manual/html_node/env-invocation.html#Escape-sequences"},"-S escape sequences")," can be somewhat nightmarish, but in more common scenarios you shouldn't need them that much."),(0,r.yg)("p",null,"You can also optionally replace the ",(0,r.yg)("inlineCode",{parentName:"p"},"-S")," argument with ",(0,r.yg)("inlineCode",{parentName:"p"},"-vS")," if you need to debug the arguments you're passing down to the interpreter."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ ./arguments_working.js\nsplit -S:  'node -e console.log(\\\\\"\"Running\\\\_this\\\\_through\\\\_the\\\\_shebang\\\\_line\\\\\"\")'\n into:    'node'\n     &    '-e'\n     &    'console.log(\"Running this through the shebang line\")'\nexecuting: node\n   arg[0]= 'node'\n   arg[1]= '-e'\n   arg[2]= 'console.log(\"Running this through the shebang line\")'\n   arg[3]= './arguments_working.js'\nRunning this through the shebang line\n")),(0,r.yg)("h2",{id:"nesting-shebang-calls"},"Nesting shebang calls"),(0,r.yg)("p",null,"Now, we've been saying that the shebang line is used to specify an interpreter to run the script file. But what's an interpreter? On the highest of levels, it's some ",(0,r.yg)("em",{parentName:"p"},"binary")," that can execute scripts in a given language. But for the purposes of the program loader, a binary is just an executable file. And at the start of the article said that we can make script files executable by providing them with a shebang line."),(0,r.yg)("p",null,"So, what's stopping us from calling ",(0,r.yg)("em",{parentName:"p"},"any"),' executable file from a shebang line, including files that are only executable because they have their own shebang line? Well, let me answer this clearly rhetorically stated by me question with the laconic "nothing". So, let\'s test this with a contrived example.'),(0,r.yg)("p",null,"First, we create a JavaScript script with a shebang line."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:"title=~/code/scripts/js.js",title:"~/code/scripts/js.js"},'#! /usr/bin/env node\n\nconsole.log("Hi from JS")\n')),(0,r.yg)("p",null,"Then, let us create a random-ass file with just a shebang line to call our JS script. Do notice the file locations specified."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="sheshotmedown.bangbang"',title:'"sheshotmedown.bangbang"'},"#! /usr/bin/env -S ${HOME}/code/scripts/js.js\n")),(0,r.yg)("p",null,"Aaaand, let's see what we've done."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ chmod +x sheshotmedown.bangbang js.js\n$ ./sheshotmedown.bangbang\nHi from JS\n")),(0,r.yg)("p",null,"Honestly, upon this realisation I just went \"Daaaang!\". You can basically set up a weird-ass dependency chain this way. Not that you'd want to, probably, but this is still hilariously amusing to me. Let's see if it works with one more layer, but with a local directory call."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="ihittheground.bangbang"',title:'"ihittheground.bangbang"'},"#! ./sheshotmedown.bangbang\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ chmod +x ihittheground.bangbang\n$ ./ihittheground.bangbang\nHi from JS\n")),(0,r.yg)("p",null,"Yep, we got it down. We can just call random executable files from within the shebang line."),(0,r.yg)("h3",{id:"and-now-with-arguments"},"And now with arguments"),(0,r.yg)("p",null,"The last thing I wanted to showcase, is the fact that you keep passing the shebang arguments down the chain of calls. Let's do one final experiment"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="bangbang.js"',title:'"bangbang.js"'},'#! /usr/bin/env -S BANG="He\\_wore\\_black\\_and\\_I\\_wore\\_white" node\nconsole.log([...process.argv, process.env.BANG, "He would always win the fight"])\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="mybabyshotmedown.bangbang"',title:'"mybabyshotmedown.bangbang"'},'#! /usr/bin/env -S ./thatawfulsound.bangbang "We\\_rode\\_on\\_horses\\_made\\_of\\_sticks"\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="thatawfulsound.bangbang"',title:'"thatawfulsound.bangbang"'},'#! /usr/bin/env -S ./bangbang.js "I\\_was\\_five,\\_and\\_he\\_was\\_six" \n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ chmod +x mybabyshotmedown.bangbang thatawfulsound.bangbang bangbang.js\n$ ./mybabyshotmedown.bangbang\n[\n  '/home/kblagoev/.nvm/versions/node/v18.14.0/bin/node',\n  '/home/kblagoev/code/scripts/bangbang.js',\n  'I was five, and he was six',\n  './thatawfulsound.bangbang',\n  'We rode on horses made of sticks',\n  './mybabyshotmedown.bangbang',\n  'He wore black and I wore white',\n  'He would always win the fight'\n]\n")),(0,r.yg)("p",null,'As you can see, we kept the arguments we passed through the shebang lines down until the last call of the Node script. And additionally, we get the "interpreters" called from the shebang line as arguments as well. Pretty neat.'),(0,r.yg)("p",null,"Anyway, I hope you've had fun with this, and maybe you can actually apply it somewhere - who knows. Have fun!"))}u.isMDXComponent=!0}}]);