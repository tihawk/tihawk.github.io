---
slug: untar-tar-xz
title: untar-tar-xz
description: TODO Add description here
authors: kiroki
tags: [linux,bash]
---

# untar-tar-xz

Date created: 2024-09-23

# Resources and links

[https://stackoverflow.com/questions/57335266/how-to-untar-a-file](https://stackoverflow.com/questions/57335266/how-to-untar-a-file)

# If a file ends on `.tar.xz`

```shell-session
tar -xjvf <filename.tar.xz>
```

# If you want to specify a directory to extract to:

```shell-session
tar  -xjvf  <filename.tar.xz>   -C  <output/dir>
```

Where,

- -z : Work on bzip2 compression automatically when reading archives.
- -x : Extract tar.xz archive.
- -v : Produce verbose output (Display progress and extracted file list on screen).
- -f : Read the archive from the archive to the specified file. (In this case, read example.tar.xz.)
- -t : List the files in the archive.
- -r : Append files to the end of the tarball.
- –delete (GNU/Linux tar only) : Delete files from the tarball.
