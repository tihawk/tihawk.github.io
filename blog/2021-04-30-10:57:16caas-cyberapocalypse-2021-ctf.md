---
slug: caas-cyberapocalypse-2021-ctf
title: CaaS - Cyberapocalypse 2021 CTF
description: This is a writeup for the CaaS challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Web.
authors: kiroki
tags: [Cyber Security, CTF]
---

This is a writeup for the CaaS challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Web.

### Prompt

cURL As A Service or CAAS is a brand new Alien application, built so that humans can test the status of their websites. However, it seems that the Aliens have not quite got the hang of Human programming and the application is riddled with issues.

<!-- truncate -->

### Recon

We are given the source code for a site. The site itself seems to be simply a frontend for executing `curl` on the host machine. If we so desire, we can look into the source code for more details.

`index.php` tells us that there exists a POST endpoint `/api/curl`, which takes our host to run curl on as data.

```php
[REDACTED]

$router = new Router();
$router->new('GET', '/', '[email protected]');
$router->new('POST', '/api/curl', '[email protected]' );

[REDACTED]
```

We also get some information on how that works inside the  `controllers/CurlController.php` file

```php
<?php
class CurlController
{
    public function index($router)
    {
        return $router->view('index');
    }

    public function execute($router)
    {
        $url = $_POST['ip'];

        if (isset($url)) {
            $command = new CommandModel($url);
            return json_encode([ 'message' => $command->exec() ]);
        }
    }
}
```

and inside `models/CommandModel.php`

```php
<?php
class CommandModel
{
    public function __construct($url)
    {
        $this->command = "curl -sL " . escapeshellcmd($url);
    }

    public function exec()
    {
        exec($this->command, $output);
        return $output;
    }
}
```

All of this simply makes us certain that we have to exploit `curl`.

Solution The solution is quite simple, once we realise that we can curl for files inside a file system using `file://`.

With this in mind, we simply send `file:///flag` to our POST endpoint at `/api/curl` , and immediately get the flag

```
CHTB{f1le_r3trieval_4s_a_s3rv1ce}
```