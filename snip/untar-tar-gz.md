---
slug: untar-tar-gz
title: untar-tar-gz
description: TODO Add description here
authors: kiroki
tags: [linux,bash]
---

# untar-tar-gz

Date created: 2024-09-23

# Resources and links

[https://stackoverflow.com/questions/57335266/how-to-untar-a-file](https://stackoverflow.com/questions/57335266/how-to-untar-a-file)

# If a file ends on `.tar.gz`

```shell-session
tar -xzvf <filename.tar.gz>
```

# If you want to specify a directory to extract to:

```shell-session
tar  -xzvf  <filename.tar.gz>   -C  <output/dir>
```

Where,

- -z : Work on gzip compression automatically when reading archives.
- -x : Extract tar.gz archive.
- -v : Produce verbose output (Display progress and extracted file list on screen).
- -f : Read the archive from the archive to the specified file. (In this case, read example.tar.gz.)
- -t : List the files in the archive.
- -r : Append files to the end of the tarball.
- –delete (GNU/Linux tar only) : Delete files from the tarball.
