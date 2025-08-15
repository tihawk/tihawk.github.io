---
slug: libreoffice-convert-xlsx-to-csv-separate-sheets-with
title: libreoffice-convert-xlsx-to-csv-separate-sheets-with
description: TODO Add description here
authors: kiroki
tags: [linux,bash]
---

# libreoffice-convert-xlsx-to-csv-separate-sheets-with

Date created: 2024-10-10

# Resources and links

[https://wiki.documentfoundation.org/ReleaseNotes/7.2#Document_Conversion](https://wiki.documentfoundation.org/ReleaseNotes/7.2#Document_Conversion)
[https://wiki.openoffice.org/wiki/Documentation/DevGuide/Spreadsheets/Filter_Options#Tokens_1_to_5](https://wiki.openoffice.org/wiki/Documentation/DevGuide/Spreadsheets/Filter_Options#Tokens_1_to_5)

# Description

This shit is crazy... look at the links above for some context.

Each of those things after the `:` column has a meaning, and is mentioned as a
"Token" in the documentation.

The linked documentation seems to not be up to date, as it says there are only
9 possible Tokens, and yet, we have like 12 in the command below.

The last token, being `-1` is what splits each "wokrsheet" into its own file.

# Go wild here

```shell-session
libreoffice --headless --convert-to csv:"Text - txt - csv (StarCalc)":44,34,UTF8,1,,0,false,true,false,false,false,-1 Profile.xlsx --outdir testis
```
