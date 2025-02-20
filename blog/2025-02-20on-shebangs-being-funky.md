---
slug: on-shebangs-being-funky
title: On shebangs, and their funky behvaiour
description: Shebangs, or interpreter directives have been around since the '80s. They help select interpreters for the little scripts we write. But I realised I've never really looked into why am I writing this magic line of nonsense in the beginning of scripts. And of course, what are its limitations and/or weird associated behaviours we can make use of?
authors: kiroki
tags: [Coding, Scripting, Programming, Linux]
---

## Shebang, or the interpreter directive

Have you ever wondered what's that magical first line that you put on top of your scripts, and starts with the characters `#!` ?

You might've seen it, for example, in the form of `#!/usr/bin/env bash` on the first line of every bash script you've ever written or seen.

But why is it there, and what does it do?

This so-called *shebang* line is a Unix feature which was introduced [back in 1980](https://homepages.cwi.nl/~aeb/std/shebang/origin.html) to allow for scripts to be run as executables by specifying the interpreter that the script needs to run itself. This simply means that with the shebang you're abstracting away the call to the interpreter, and instead of calling `bash script.sh` you can now just say `./script.sh`. That's mostly all there is to it. And yes, it's technically called an *interpreter directive*.

What happens in the background, is that the program loader finds the interpreter you've specified in your `PATH` variable, runs it, and passes the location of your script to the interpreter as an argument. You can see that much in your process viewer as well.

```bash
$ cat > shebang.sh
#! /usr/bin/env bash
echo "SHEBANG!"
read
^C
$ chmod +x shebang.sh
$ ./shebang.sh & ps -aux | grep shebang
[2] 276038
SHEBANG!
kblagoev  276038  0.0  0.0  13156  3584 pts/5    T    13:55   0:00 bash ./shebang.sh

[2]+  Stopped                 ./shebang.sh
$ fg
./shebang.sh
^C
$
```

## Interpreters, you say

If you've also written Python scripts, you surely have seen that you can pass a shebang to the python script as well. Since Python is an interpreted language, it actually works in precisely the same way w.r.t. the shebang line. You can simply write `#!/usr/bin/env python3` at the top of your script, make it executable, and suddenly the program loader knows to run the python interpreter, and pass your script location as an argument.

```python title="test.py"
#!/usr/bin/env python3

print("Hello from the Python interpreter")
```

```bash
$ chmod +x test.py
$ ./test.py
Hello from the Python interpreter
```

### Well, JavaScript is interpreted too

Oh, how right you are! For some reason it never occured to me before, but since JavaScript is also a non-compiled, interpreted language, we should be able to make any scripts written in JS int executable files by providing a shebang line to it with some JS runtime like *node* or *bun*, right?

```javascript title="test.js"
#!/usr/bin/env node

console.log("Hello from Node, it being a javascript interpreter and all")
```

```bash
$ chmod +x test.js
$ ./test.js
Hello from Node, it being a javascript interpreter and all
```

Yep. That's really cool, if you ask me! Now, technically there is a limitation here. As you've noticed, the shebang line starts with a *hash* symbol, and there's a good reason for that. The `#` symbol is used as a comment in many scripting languages, like shell and python, and it has been chosen for exactly that reason - to not break the syntax that the interpreter for shell expects. But in JavaScript `#` is not a comment. So, technically this would break JS syntax. And as such, it's up to each JS interpreter to implement the ignoring of shebang lines - basically a first line of a script file which starts with `#` or `#!` I guess. As such, with languages that don't support *hash* comments your milage may vary depending on the interpreter implementation. But hey, it works on node!

I leave it as an exercise for the reader to see if your favourite scripting language works with shebang lines :) Odds are, it does - as long as either the language already has `#` as a comment, or your interpreter has implemented ignoring shebang lines.

## Arguments in a shebang line

### Interpreter directive arguments

So, technically the the shebang syntax is defined as `#! interpreter [optional-one-arg-only]`. This means that the `interpreter` is actually the first value provided after the magic number `#!`. So, we could write simply `#! /bin/bash` and hope that the *bash* is located at `/bin/bash`.

But, as we've seen, we actually usually write more so something like `#! /usr/bin/env bash`, meaning that the "interpreter" is actually `/usr/bin/env`, and we have an additional optional param called `bash`. This isn't really what's happening though. What we're saying here, is that we are going to look for `bash` inside the `PATH` variable. This helps with the portability of scripts between different OSs, as we can't guarantee that the interpreter will be in the same location on each OS.

But, by doing this, we've also used up all of our 1 available optional arguments we can pass into the shebang line. So, if we need to pass an argument to an interpreter, we are out of luck.

```javascript title="arguments_not_working.js"
#!/usr/bin/env node -e console.log(\"Running this through the shebang line\")
```

If we try running this, we would always get an error that saying "No such file or directory"

```bash
$ chmod +x arguments_not_working.js
$ ./arguments_not_working.js
/usr/bin/env: 'node -e console.log(\\"Running this through the shebang line\\")': No such file or directory
/usr/bin/env: use -[v]S to pass options in shebang lines
```

### Passing multiple arguments to the shebang line

But hey, what's that thing on the bottom saying? Well, we can actually [pass multiple arguments](https://www.gnu.org/software/coreutils/manual/html_node/env-invocation.html#g_t_002dS_002f_002d_002dsplit_002dstring-usage-in-scripts) to the shebang line, using the `-S` flag! It's not guaranteed to work on every system, so it may reduce portability. But it's still a thing we can try.

```javascript title="arguments_working.js"
#!/usr/bin/env -S node -e console.log(\""Running\_this\_through\_the\_shebang\_line\"")
```

```bash
$ chmod +x arguments_working.js
$ ./arguments_working.js
Running this through the shebang line
```

As you notice that the [-S escape sequences](https://www.gnu.org/software/coreutils/manual/html_node/env-invocation.html#Escape-sequences) can be somewhat nightmarish, but in more common scenarios you shouldn't need them that much.

You can also optionally replace the `-S` argument with `-vS` if you need to debug the arguments you're passing down to the interpreter.

```bash
$ ./arguments_working.js
split -S:  'node -e console.log(\\""Running\\_this\\_through\\_the\\_shebang\\_line\\"")'
 into:    'node'
     &    '-e'
     &    'console.log("Running this through the shebang line")'
executing: node
   arg[0]= 'node'
   arg[1]= '-e'
   arg[2]= 'console.log("Running this through the shebang line")'
   arg[3]= './arguments_working.js'
Running this through the shebang line
```

## Nesting shebang calls

Now, we've been saying that the shebang line is used to specify an interpreter to run the script file. But what's an interpreter? On the highest of levels, it's some *binary* that can execute scripts in a given language. But for the purposes of the program loader, a binary is just an executable file. And at the start of the article said that we can make script files executable by providing them with a shebang line.

So, what's stopping us from calling *any* executable file from a shebang line, including files that are only executable because they have their own shebang line? Well, let me answer this clearly rhetorically stated by me question with the laconic "nothing". So, let's test this with a contrived example.

First, we create a JavaScript script with a shebang line.

```javascript title=~/code/scripts/js.js
#! /usr/bin/env node

console.log("Hi from JS")
```

Then, let us create a random-ass file with just a shebang line to call our JS script. Do notice the file locations specified.

```bash title="sheshotmedown.bangbang"
#! /usr/bin/env -S ${HOME}/code/scripts/js.js
```

Aaaand, let's see what we've done.

```bash
$ chmod +x sheshotmedown.bangbang js.js
$ ./sheshotmedown.bangbang
Hi from JS
```

Honestly, upon this realisation I just went "Daaaang!". You can basically set up a weird-ass dependency chain this way. Not that you'd want to, probably, but this is still hilariously amusing to me. Let's see if it works with one more layer, but with a local directory call.

```bash title="ihittheground.bangbang"
#! ./sheshotmedown.bangbang
```

```bash
$ chmod +x ihittheground.bangbang
$ ./ihittheground.bangbang
Hi from JS
```

Yep, we got it down. We can just call random executable files from within the shebang line.

### And now with arguments

The last thing I wanted to showcase, is the fact that you keep passing the shebang arguments down the chain of calls. Let's do one final experiment

```javascript title="bangbang.js"
#! /usr/bin/env -S BANG="He\_wore\_black\_and\_I\_wore\_white" node
console.log([...process.argv, process.env.BANG, "He would always win the fight"])
```

```bash title="mybabyshotmedown.bangbang"
#! /usr/bin/env -S ./thatawfulsound.bangbang "We\_rode\_on\_horses\_made\_of\_sticks"
```

```bash title="thatawfulsound.bangbang"
#! /usr/bin/env -S ./bangbang.js "I\_was\_five,\_and\_he\_was\_six" 
```

```bash
$ chmod +x mybabyshotmedown.bangbang thatawfulsound.bangbang bangbang.js
$ ./mybabyshotmedown.bangbang
[
  '/home/kblagoev/.nvm/versions/node/v18.14.0/bin/node',
  '/home/kblagoev/code/scripts/bangbang.js',
  'I was five, and he was six',
  './thatawfulsound.bangbang',
  'We rode on horses made of sticks',
  './mybabyshotmedown.bangbang',
  'He wore black and I wore white',
  'He would always win the fight'
]
```
As you can see, we kept the arguments we passed through the shebang lines down until the last call of the Node script. And additionally, we get the "interpreters" called from the shebang line as arguments as well. Pretty neat.

Anyway, I hope you've had fun with this, and maybe you can actually apply it somewhere - who knows. Have fun!

