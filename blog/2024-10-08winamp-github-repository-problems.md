---
slug: winamp-github-repository-problems
title: The Winamp GitHub repository is seriously mismanaged. And there's nothing they can do about it now.
description: The Winamp GitHub repository is seriously mismanaged. And there's nothing they can do about it now.
authors: kiroki
tags: [Cyber Security]
---

## Preamble

At this point, I think it's no secret that Winamp going "open-source" has been a bit of a [shit-show](https://www.youtube.com/watch?v=NgZPa78InWw&pp=ygUSd2luYW1wIG9wZW4gc291cmNl).

The initial outrage on the repository was in response to the apparent lack of understanding of what open-source means on the side of Winamp, as they claim that their license is "[copyleft](https://www.gnu.org/licenses/copyleft.en.html)", while allowing for neither redistribution of modified versions, nor contributions to the official project, and initially not even [allowing forking](https://github.com/WinampDesktop/winamp/commit/64a51755c6f5d85039463c8bf7c2a9e98e862586)! Someone did [point it out](https://github.com/WinampDesktop/winamp/issues/6) to them that they can't ban forking on GitHub, as that constitutes [a violation of the TOS](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service#5-license-grant-to-other-users). So, Winamp updated their license to allow forking, but it still doesn't allow anything else that would constitute "open-source" - redistribution or even outside contributions.

<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/static/content/images/2024/10/winamp-allowed-forking.jpg" class="kg-image" alt loading="lazy"/><figcaption>A truly historic moment, ladies and gentlemen :)</figcaption></figure>

In objective terms, this license falls in the category of "source-available" rather than open-source, and this *is* an important distinction to make. I have no problem with Winamp making their source available as a valuable case-study, but they really shouldn't have used the term "copyleft" if that is the intention.

But we're here to discuss more so another glaring issue with the repository, which might actually end up landing a lawsuit at Winamp's doors. And sadly, they can't really do anything about it anymore.

## A rough overview of GitHub

In its simplest form, GitHub can be described as a web-hosted git server for the public. As a developer interested in open-source, you can create a git repository, write some incredible code that you AND your mum are really proud of, and share it with the world on GitHub, so everyone can appreciate your contribution to the democratisation of programming.

But GitHub is more than simply a place to host your git repository. It is also a collaboration platform, where anyone who feels like they _like_ your code, and would like to change it until they **love** it, can "fork" your repository. Forking is in fact not a more aggressive version of spooning, but simply the act of making a clone of the original repository in your account. This forked repository contains all the history of the original - all the code, and all the commits that came before the fork.

## Back to the beauty that is the Winamp GitHub repo

If you were to peruse the code on the Winamp repository in the [first few days](https://github.com/WinampDesktop/winamp/tree/20d28e80a5c861a9d5f449ea911ab75b4f37ad0d) after its publishing, you would have noticed some very intriguing things. For example, a `BuildTools` directory which included things like whole executable files the `7zip`, `git`, and other programs just hanging around, designated as "build tools". And although very odd indeed, these things seem more so _stupid_ than harmful.

But there's much more there! Inside the repo there was proprietary code from Dolby, some questionably SDKs which Winamp may or may-not have the right to redistribute, and entire directory containing the commercial version of Qt, and so on, and so forth.

### Winamp did take some action

There are numerous pull requests [deleting said files](https://github.com/WinampDesktop/winamp/pull/1378), and the maintainers [did](https://github.com/WinampDesktop/winamp/commit/16911d12a01f82fea5d851f98e9e702d80f881d5) [also](https://github.com/WinampDesktop/winamp/commit/e721b2e039742c12c1f9c93b1b779ca3b7fc061e) [remove](https://github.com/WinampDesktop/winamp/commit/6ff62b6dda0906648b0a5ce891e85231cbbb40d5) a lot, if not all the unlicensed code. And they did this... in public. You can clearly see many of the commits that delete stuff right there on the [commits page](https://github.com/WinampDesktop/winamp/commits). Which, you know, is a problem. If you open any of the commits listed there, you can simply look at the code that was deleted. If you simply clone that repository locally, you can move around that history and see it at the times before it was removed. This public deletion without rebasing just does nothing.

### They deleted some of the commits

OK well, if you just scroll around the commits history, you will notice that the commits that delete, for example the Dolby code is nowhere to be found. But in the end, that doesn't really do anything either, since you can still just go back in history to [a commit before they deleted it](https://github.com/WinampDesktop/winamp/commit/20d28e80a5c861a9d5f449ea911ab75b4f37ad0d), and just see it there.

### Ok, what can they do?

I mean, they could just rebase everything, this would theoretically get rid of the commit history. They'd need to get rid of pull requests as well, since those contain code from certain history positions. And to be honest, at this point I'd just delete the repo from GitHub, clean up the codebase locally, and create the GitHub repo anew.

But really, even that would not be enough anymore.

## A lesser-known "feature" of GitHub

Remember how I said that they deleted some of the commits from their history, so you can't simply see what code they removed? Well, even though that commit is gone from the git history, and you wouldn't see it even if you cloned the repository locally... you can still see it on GitHub.

You see, to facilitate collaboration through forking, GitHub introduces something called a "[repository network](https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/understanding-connections-between-repositories#viewing-a-repositorys-network)". This network holds information of the "upstream" or parent repository, all of its forks, and all the commits that belong to each fork.

Additionally, GitHub caches commits, so that they can be accessed by other repositories in the repository network. [As explained](https://news.ycombinator.com/item?id=41060102) by GitHub themselves, "GitHub stores the parent repository along with forks in a "repository network". It is a known behavior that objects from one network member are readable via other network members. Blobs and commits are stored together, while refs are stored separately for each fork. This shared storage model is what allows for pull requests between members of the same network.".

So, not only are the deleted commits potentially visible inside of forks that may have this commit from before it was deleted in the upstream repository. No, they are also just visible in general, as long as you know the commit hash. GitHub simply caches them, and you can just visit the page for that commit, and see all the changes it has made, and the entire code-base at that point in history.

<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/static/content/images/2024/10/github-deleted-commit.jpg" class="kg-image" alt loading="lazy"/><figcaption>You can still see deleted commits on GitHub</figcaption></figure>

So, even if you rebase your repository, the commits history is still there, cached and awaiting. And all forks that were made before the rebase, you can just peruse those anyway.

Now, to be fair - GitHub has an entire [docs section](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository#about-sensitive-data-exposure) about leaking sensitive data. It does mention that you can contact support, and request the cached commits to be removed, if they deem that sensitive data has been exposed.

### So, what if GitHub clears the cache, and we delete the repo?

Well, nothing. It has been already forked more than 2600 thousand times as of the time I'm writing this. It's out there on GitHub :) In the same [docs page](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository#about-sensitive-data-exposure) I linked above, GitHub themselves say that yeah - if someone has forked your repo, you're on your own, buddy.

If you remove the upstream repository of a repository network, GitHub simply [designates another fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#deleting-a-public-repository) to be the upstream one. And all of that history and cached commits are still accessible through any of the forked repositories.

## Conclusion

I do find it ironic, that this same collaborative feature which Winamp tried to disallow us from using - forking their repo, is also the one which in the end will not allow them to ever escape the reality that they managed to leak some confidential data on their repository.

But hey, what's done is done, and it did allow me to learn more about how GitHub works with its repository networks and whatnot, so I guess it is possible to learn from someone else's mistakes. I hope you learned something from this too, at the very least to be very careful with what you push to GitHub. And if you do make a mistake - just delete the repo before it was forked, and try again. QED

In terms of the Winamp repository, I am happy that they decided to share their codebase. Even though you literally can't do anything with it apart from reading it, it's still a nice case-study. And I do not wish for them to regret going source-available, so I hope they don't get any legal problems.

But on the other hand, I do wish they'd gone fully open-source. I mean, what are they protecting right now? Winamp is a big part of history, everyone has at least heard of it, if not used it. But nowadays it's just that - part of history. But we've seen that through collaboration and openness of the developers, a lot of software can live for a very long time. Winamp could become something modern and fully maintained, if it allowed for outside contribution. I do hope they take that next step at some point. After they clean up this mess of a repo...
