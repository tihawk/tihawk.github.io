---
slug: astronavigation-coordinate-systems
title: Celestial Navigation - coordinate systems
description: It's just like remembering where a distant house at an edge of a field is, then moving around the field, and checking where the house is now relative to us. If the house was distant enough, and coincidentally always north of you, you would call it the polar star.
authors: kiroki
tags: [Science]
---

Nowadays you would be hard-pressed to amaze anyone with the knowledge that stars are these ever-moving objects in the sky, at wildly different distances from us and each-other. Not only that, but many of the objects in the night sky we recognise as stars are often whole galaxies containing billions of stars, or giant clouds of gas glowing with the intensity of stars in our eyes, or god knows what else.

<!-- truncate -->

But not always was that knowledge which humans posessed. After all, if you just go out in the pitch-black of the night and look up with an unarmed eye (or two) - all you see are dots in the inky sky [(or not)](https://en.wikipedia.org/wiki/Light_pollution). Some brighter than others - yes, but not so much that it would make you question the distances between them. In fact you might even find it difficult to believe that if you pick two random stars, chances are the distance between them is close to or greater than between them and us.

So naturally the easier to grasp visualisation is that they are simply objects more or less equidistant from Earth (after all our little planet used to be in the centre of the universe), maybe just sprinkled on the inside of a spherical black fabric at the edge of the universe[^1], looking towards us at the centre of it all.

Now, we might know that this is completely and utterly wrong, but we as humans have this extremely useful most of the time tool called abstraction. We were already able to imagine that the stars are stationary equidistant from Earth objects. It's very easy to imagine in fact, considering they are so far away, that they don't move relative to each other as we move along the Earth's surface. So for our practical purposes as naked-eye observers, we can make up a projection, in which they are in fact as we say - stationary objects on the surface of a sphere centered around Earth. And as we make this approximation, we all of a sudden end up with something which can be extremely useful.

### Any stationary object can be used as a reference point for a moving object!

So now we can map these star-like objects, record where they are positioned relative to a point on Earth; then if we move ourselves on the surface of the Earth we can say where we've gone by just checking how the position of the stars has shifted with respect to us. It's just like remembering where a distant house at an edge of a field is, then moving around the field, and checking where the house is now relative to us. If the house was distant enough, and coincidentally always north of you, you would call it the polar star.

### _If it were only that simple..._

Even though the rough idea is absolutely true, and good enough on a small enough scale (like crossing a field following the polar star), it becomes troublesome once you start requiring any type of accuracy in your endeavour. There are two main problems which we will encounter almost immediately.

### The celestial sphere isn't actually stationary.

The stars may be stationary with respect to each other (the polar star doesn't move away from or towards Sirius for example), but the whole **celestial sphere** on which they are positioned rotates similar to the sun and wobbles up and down (with respect to the horizon) as the months pass. Or in 21st century speak, the Earth rotates around its axis daily, and moves in a tilted manner through space as it rotates around the Sun.

**The solution** to this is rather trivially to just observe the motion of the celestial sphere for a while, find the law which governs it, and start printing annual [Almanac](https://en.wikipedia.org/wiki/Almanac) with information about the position of stars throughout the year.

## What coordinates do you use for the stars?
The problem is that we as observers can only record where we see the star w.r.t our reference frame. That is, we can't do any measurement that will immediately say "oh, the star is currently 30 degrees east of Greenwich". If we could, we could have easily just said where we were, and not had needed to measure the star at all.

> So we need a coordinate system for the position of the star with respect to us.

But on the other hand, the books which tell us where the star should be now, would have no idea where it should be with respect to us as observers. If it did, it would had predicted our future, and the position of the star would have been the least of our interests. [We would have proven the deterministic nature of the universe.](https://en.wikipedia.org/wiki/Determinism)

> So we need one more coordinate system - an absolute position of the star on the surface of the celestial sphere.

> And since we as observers reside not on the celestial sphere (rather disappointing, I know), we need our good old Earthbound coordinates.

And of course, to make the transition between these three cordinate systems, we need a couple more intermediate ones. We will look into them in depth in a later post, but they differ only in that they have different longitude reference points.

So let's take a look at the three main

### Coordinate systems in Astronavigation

Each coordinate system will have a few important points and angles associated with it. First we have a **fundamental plane**, which corresponds to zero degrees of latitude. We on the Earth's surface use the Equator for that purpose. Next is the **primary direction** (where 0 longitude is) - Greenwich for us. When you combine the two, you get the **reference point**, the origin point. In the geographical coordinate system that would be the centre of the Earth. Then you have your two coordinates, the two degree-values, i.e. **latitude** and **longitude**. And lastly - **the poles**. That's where the latitude has its maximum or minimum value.

| Coordinate system | Fundamental plane | Primary direction | Origin | Latitude | Longitude | Poles |
|-------------------|-------------------|-------------------|--------|----------|-----------|-------|
| Horizontal | Horizon | North/South point of horizon | Observer | Altitude | Azimuth | Zenith, Nadir |
| Equatorial | Celestial equator | The First Point of Aries (♈︎) | Centre of Earth | Declination | Hour angle (local, Greenwich or sidereal) | Celestial poles |
| Geographical | Equator | Greenwich | Centre of Earth | Latitude | Longitude | Earth's poles |

### Horizontal coordinate system

This is the coordinate system of the **observer**. That's you. You're standing on the surface of the earth, and you observe the stars around you. What can you see? _A flat earth_. Your fundamental plane is the horizon, that's your reference plane for up and down. You have things above and below the horizon, and the extremes (poles) of that will be the **zenith** right above your head, and the **nadir**  right under your feet. The interesting thing about this coordinate system is that it changes the second you move. Your horizon moves, so do the poles, so does everything. In fact, because the center of your horizon is you, that means that the whole origin (centre point) of this coordinate system is you! Your primary direction can be explained as the **north or south point of your horizon**, but I find it easier to think in terms of your **own meridian**. That means that your main meridian, the zero meridian isn't anymore Greenwich, but is instead your local meridian, the one which cuts you in right between the eyes as you face either north or south. Finally, your coordinates are now called **altitude**  (height over the horizon) and **azimuth** - the angle enclosed between the direction you're facing, and true north.

The purpose of this coordinate system is measurement. This is the only coordinate system in which you can physically measure stuff. You take a [sextant](https://en.wikipedia.org/wiki/Sextant) and you can measure the altitude - the angle between the horizon and the star you're interested in. Then you take a compass, point it in the direction of the star, and you can measure the angle between where you're pointing, and where the compass is pointing (north) - that's the azimuth.

Of course these measurements you just took are of little value to you, since you can't find your own location, unless you know where the star is supposed to be with respect to Earth.

_There is an exception of course._ You can easily estimate very roughly a few things. One of them is using the polar star. You see, if Polaris is really exactly above the north pole, then by measuring the altitude of this star, you can directly translate that to your latitude. If Polaris is at 90 degrees altitude (right above your head), then you're at 90 degrees north - the north pole. You get the point.

Then, to know the real position of a star you have to turn to the annual Almanac. There, the coordinates are written in the

### Equatorial coordinate system

Now this one is a doozy. This is a coordinate system heavily influenced by  convention and history. The problem is that historically you needed a way to write where every one of **[57+1 stars used for navigation](https://en.wikipedia.org/wiki/List_of_stars_for_navigation)** is every single second of the whole year in a book which didn't compete for shelf-space with the  [library of babel](https://libraryofbabel.info/). Plus you need a way to translate between the horizontal and equatorial coordinate systems, which introduces one more variable coordinate.

The end result can be seen as either clumsy or elegant. The clumsiness really only shows itself in the fact that there are three different longitude coordinates, plus their mirror reflections (increasing east or west). But we won't bother ourselves with that for now. Let's just cover the basics.

Fundamental plane - **Celestial equator**. Just a fancy name for an equator which lies on the celestial sphere. Coincides with Earth's equator. Its poles are unsurprisingly the **celestial poles**. Again, just the poles of the celestial sphere which coincide with those down here on Earth. The primary direction is called the **The First Point of Aries (♈︎)** or also the March Equinox. Now that might sound like we're trying do witch-craft, but in fact it's a very simple thing. In the end March on Earth we get an equinox, which literally means that the day and night are equally long. This on the other hand means that the Sun rises, travels along and sets above the Equator. It's a day of perfect symmetry between the north and south hemispheres. So back in the day around [150 B.C.](https://astronavigationdemystified.com/the-first-point-of-aries/) the so called First Point of Aries was 

> [...] the point at which the Sun crosses the celestial equator moving from south to north along the ecliptic (at the vernal Equinox in other words).

and so, was arbitrarily selected to be the celestial Greenwich so to speak. And still is, even though the March Equinox is now in the constellation of Pisces, and no longer in Aries.

The origin of this coordinate system is the centre of the celestial sphere, which you might have guessed already - coincides with **the centre of Earth**. The latitude is called **declination**, and is simply the celestial equivalent of latitude - height above the celestial equator. And now for the longitude... well I promised I would keep it short. In general it's called the **hour angle**. It's different from longitude in that it increases westward, and ranges from 0 to 360 degrees, in contrast to geographical longitude which can go east or west from 0 t0 180 degrees. Now, the problem is that actually we have more than one primary directions, depending on what we're doing currently, and therefore more than one types of hour angles. There's the **sidereal hour angle**, which is the one using the First Point of Aries. Then there's the **Greenwich hour angle**, which works like the sidereal, but its zero is at Greenwich (well Greenwich projected onto the celestial sphere, which is fun to imagine I guess). And then there's the **local hour angle**, which uses your _own meridian_ which we discussed in the horizontal system. And finally there are their mirror alternatives, which increase eastward instead of westward. Those are called **right ascension**.

Well that's it! You now know the names of things. Now that you have an idea of what to look for, I will place the header image again, so you can look at it and search for the above mentioned terms. And next time I will go more in-depth into the measurement process - _the taking down of the stars_.

[^1]: Stars are holes in the fabric of spacetime. You're welcome.

import DonateCard from '@site/src/components/DonateCard';

<DonateCard/>