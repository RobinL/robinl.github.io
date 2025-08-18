---
type: "quote"
title: "Casey Handmer on solar-powered data centers"
source: "Casey Handmer"
url: "https://www.dwarkesh.com/p/casey-handmer"
date: "2025-08-18"
tags: ["AI", "Energy"]
---

> Casey Handmer 00:33:33
>
> Let's get concrete here for a second. Let's say you’ve got one rack and it's 1 megawatt. I'll leave the cooling to someone who specializes in air conditioners, but it's basically throwing air conditioners at the problem. Then you have batteries.
>
> So in order to get four nines of uptime on this… In South Texas, you actually need less than this. But let's just say it’s 24 hours worth of battery storage. That means it'll get you through two bad nights in a row, basically. Actually, it turns out that you can significantly decrease power consumption with a very small reduction in overall compute. So if you've got like three really bad days in a row or something, you can dial back your power usage quite a lot without compromising your inference or training.
>
> Okay, so you've got, say, a Tesla Megapack, something like four megawatt hours. So one megawatt rack, and then six Tesla Megapacks, each of which is roughly one truckload worth of stuff. So one truckload worth of rack, and then like six truckloads worth of batteries. Then in order to operate this at an average power of 1 megawatt, your solar arrays in Texas will be something like 25% utilization. So on average, if the sun came up every day and the day was the same length all the time, you would need 4 megawatts of solar arrays, which is about 4 acres of land. But in practice, because you're aiming for four nines instead of one nine, you need an overbuild of about 2.5x. So you've got about 10 acres of solar.
>
> So 10 acres of solar, six truckloads of batteries, one truckload of data center, and some cooling stuff.
>
> Dwarkesh Patel 00:34:58
>
> For how big of a data center?
>
> Casey Handmer 00:35:00
>
> One megawatt. That's just for one megawatt. So 10 acres, one megawatt kind of situation at four nines.
>
> If you want five gigawatts, then that's 5,000 times 10. So 50,000 acres. At a larger scale, you can probably cut all those numbers down by 10-20%, but it’s on that order. And 50,000 acres sounds like a lot.

Interesting conversation factors - how do you get 1MW of stable power?
