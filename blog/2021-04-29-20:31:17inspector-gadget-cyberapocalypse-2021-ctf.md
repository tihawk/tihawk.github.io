---
slug: inspector-gadget-cyberapocalypse-2021-ctf
title: Inspector Gadget - Cyberapocalypse 2021 CTF
description: This is a writeup for the Inspector Gadget challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Web.
authors: kiroki
tags: [Cyber Security, CTF]
---

This is a writeup for the Inspector Gadget challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Web.

### Prompt

Inspector Gadget was known for having a multitude of tools available for every occasion. Can you find them all?

<!-- truncate -->

### Recon

We are given a url to a website, and upon opening it we see a big ol' `CHTB{` slapped right in our faces.

![ins gesicht](/content/images/2021/04/insp3ct00000r.png)

This clearly indicates, that we're facing a scavenger hunt. So, checking the HTML of the webpage, we find the next piece of the puzzle

```html
<!--1nsp3ction_-->
```

Surprisingly, `robots.txt` doesn't give us anything useful, so we look into  `/static/js/main.js` next.

```js
console.log("us3full_1nf0rm4tion}");
```

Just to make sure, we check whether `CHTB{1nsp3ction_us3full_1nf0rm4tion}` is the flag, and unsurprisingly it isn't.

So, we logically check the css next, and open `/static/css/main.css` to find

```css
/* c4n_r3ve4l_ */
```

### Solution

We can now easily deduce, that our flag is

```
CHTB{1nsp3ction_c4n_r3ve4l_us3full_1nf0rm4tion}
```