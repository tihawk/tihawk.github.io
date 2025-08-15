---
slug: mvn-release-typical-usage
title: mvn-release-typical-usage
description: TODO Add description here
authors: kiroki
tags: [maven,java]
---

# mvn-release-typical-usage

Date created: 2024-09-28

# Typical usage of maven release plugin

- Running `./mvnw release:prepare` will create two commits - one with the new
  release version, and one with the next development iteration version. These,
  together with a new git tag will be pushed to the remote repository.

- Running `./mvnw release:perform` will package the new version to the package
  repository defined in the project POM.
    - Additional arguments can be passed to the `release:perform` goal, for
      example as `-Darguments="-Dmaven.javadoc.skip=true"`.
