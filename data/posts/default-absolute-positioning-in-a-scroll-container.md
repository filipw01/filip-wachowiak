---
title: A rather extreme way to find the impossible
subtitle: Let me take you on a quick journey to explore an issue that made me for a brief moment question my understanding of absolute positioning.
date: 2025-01-11
tags: [css, chrome, bug]
---

I recently encountered a weird issue in Chrome.

<figure>
  <video muted controls src="/initial_issue.mp4" />
  <figcaption>Clicking on a checkbox-like component moves the whole interface up leaving an empty space at the bottom</figcaption>
</figure>

I quickly confirmed that this doesn't happen in Safari or Firefox.

It appears that Chrome scrolls the page down even though it's unnecessary, effectively breaking the whole page as there's no way to scroll back up with overflow hidden applied.

This got me thinking, where does it scroll to and why does it do this at all?

## Why does it scroll?

My first guess was a focus event, so I tried tabbing through the page and it indeed let me reproduce the same issue.

While looking for a possible Chromium bug I stumbled upon this issue: [ScrollIntoView causes scrolling to element that isn't visible (clip: rect(0,0,0,0))](https://issuetracker.google.com/issues/40752981)

The title of the bug report caught my attention, it suggests that Chromium internally uses the `scrollIntoView` method to scroll to the element on focus.

I quickly checked if `scrollIntoView` causes the same issue and it indeed does.

So now we know why it scrolls and that programmatically scrolling into view is causing the issue, let's check where it scrolls to.

## Where does it scroll to?

In my case, it's a checkbox that's focused.

<figure>
  <video muted controls loop src="/weird_position.mp4" />
  <figcaption>The facade checkbox appears in the correct position, but the inspector shows the hidden checkbox offscreen</figcaption>
</figure>

Why is the invisible checkbox not in the same place as my visual representation of it where I expect it to be?

The div wrapping it has the CSS rules commonly known as `screen-reader-only` (or `visually-hidden`) applied. It is hidden from the user so other visual elements can pose as a nice looking checkbox while providing all the necessary accessibility features.

```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

The Chromium issue describes a similar problem, the author mentions it's related to `clip: rect(0,0,0,0)` on the element that's scrolled to but removing the property didn't fix it.

Out of curiosity I checked the reproduction attached to the Chromium bug and it was the same there, removing the clip property didn't fix the issue, I'll be sure to leave a comment on the issue once we establish what's really at fault.

## Why is it offscreen?

The fact that the checkbox is offscreen is probably the root cause of the issue, let's quickly check Safari and Firefox.

It's the same, so it looks like it's a `scrollIntoView` bug in Chromium instead of a positioning bug.

The position is determined by the `position: absolute` property, but if top is not specified it should be in the same place as it would be if it didn't have the `position: absolute` applied at all, right?

Let's check what the spec says.

> If all three of top, height, and bottom are auto: First set any auto values for margin-top and margin-bottom to 0, then set top to the static position, and finally apply rule number three below.
>
> <cite>[CSS Positioning Module Level 3](https://www.w3.org/TR/css-position-3/#abs-non-replaced-height)</cite>

Let's dissect it:

1. <q>If all three of top, height, and bottom are auto:</q>

   We got this one, [`auto` is the initial value](https://developer.mozilla.org/en-US/docs/Web/CSS/top#formal_definition) and we didn't specify any of them in our CSS for the element

2. <q>First set any auto values for margin-top and margin-bottom to 0,</q>

   This one doesn't apply to us, we didn't specify any margins and [the initial value is `0`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin#formal_definition)

3. <q>then set top to the static position,</q>

   This part is interesting, the static position is the position it would have if it didn't have the `position: absolute` applied at all. So I was right

4. <q>and finally apply rule number three below.</q>

   This doesn't concern us either, it's something about the height of the element that doesn't really concern us

## I was right but with a small caveat

The static position for our absolutely positioned element is calculated from the nearest containing block, like a position relative ancestor. If there's none in the scrollable area and the static position is below the element will start outside of the viewport and scrolling won't change that.

This is how it looks like when we only keep the `position: absolute` property in the `visually-hidden` class.

<figure>
  <video muted controls loop src="/just_position_absolute.mp4" />
  <figcaption>The checkbox is in the same position on the screen even if we scroll</figcaption>
</figure>

It might look like a small and very specific issue, but the problem with `visually-hidden` is real. All the snippets I found suffer the same issue. Given how common it is to wrap interactive elements in a class like this for the purpose of providing a nice looking UI I see it as a real problem.

## How to fix it

So far the best solution I found is to add `position: relative` somewhere between the absolutely positioned element and the overflowed element. This way when you scroll, the element will follow because the whole containing block is scrolled, and together with it the absolutely positioned elements within.

I prefer to have it either on the element that is overflowing to fix it for the whole scrollable area or if it's a reusable component to the direct parent of the absolutely positioned element. It's an implicit relationship between elements so there's no easy fix other than asking the Chromium team to fix `scrollIntoView` and provide them with more context.

The best I can offer you at this time is this knowledge to help you quickly fix this issue when you see it.

I'm still looking for a better solution, so if you have any ideas please let me know.
