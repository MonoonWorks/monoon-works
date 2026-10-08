---
name: Monoon Works
description: A place to think. Room to continue. — the 모눈 grid as a website.
colors:
  paper: "#F4F1E9"
  light: "#FFFDF7"
  sand: "#EAE5D9"
  ink: "#242923"
  muted: "#60665D"
  rule: "#CECFC3"
  grid: "#DDDCD0"
  cinnabar: "#B44B34"
  tide: "#285E71"
  tide-on-ink: "#7FB1C4"
  moss: "#53634A"
  clay: "#A84F40"
  ochre: "#8B662B"
  iris: "#635686"
  ink-text: "#F4F1E9"
  ink-muted: "#C3C8BD"
  ink-rule: "#4A5248"
typography:
  display:
    fontFamily: "Manrope, Pretendard, 'Apple SD Gothic Neo', sans-serif"
    fontSize: "clamp(46px, 5.6vw, 84px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, Pretendard, 'Apple SD Gothic Neo', sans-serif"
    fontSize: "clamp(34px, 4.2vw, 60px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Manrope, Pretendard, 'Apple SD Gothic Neo', sans-serif"
    fontSize: "clamp(24px, 2.4vw, 34px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Pretendard, Manrope, 'Apple SD Gothic Neo', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Manrope, Pretendard, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.07em"
rounded:
  none: "0"
  tile: "22%"
  pill: "999px"
spacing:
  gutter: "clamp(22px, 5vw, 80px)"
  section: "clamp(80px, 9vw, 140px)"
  row: "28px"
  mobile-gutter: "22px"
  mobile-section: "76px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.light}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "#3a4238"
    textColor: "{colors.light}"
  button-on-cinnabar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.cinnabar}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "52px"
  nav-cta:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "42px"
  tile-research:
    backgroundColor: "{colors.tide}"
    textColor: "{colors.paper}"
    rounded: "{rounded.tile}"
  tile-simple:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.clay}"
    rounded: "{rounded.tile}"
  cite-chip:
    backgroundColor: "transparent"
    textColor: "{colors.clay}"
    rounded: "{rounded.pill}"
    padding: "0 8px"
  search-field:
    backgroundColor: "{colors.light}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "14px 18px"
---

# Design System: Monoon Works

## Overview

**Creative North Star: “The Grid With an Open Corner.”**

The site is built from the logo’s own structure: a 모눈 (worksheet grid) has places, it has room, and it has one dot for the work in hand. Warm paper carries almost everything; ink does the reading; a single cinnabar signature marks what is live right now — the dot on the hero board, the thread that runs down the left rail as the visitor scrolls, the active state, and the one band that asks for action. Each of the five tools owns one colour and uses it inside its own region, never as a page-wide accent.

The page is calm and dense in the way a study desk is: thin rules, full-width ledger rows instead of cards, real application captures set edge to edge inside hairline frames, and one authored motion rather than scattered effects. Korean and English share the same layout; Korean headings switch from Manrope to Pretendard and keep words unbroken.

**Key Characteristics:**
- Paper ground, ink text, cinnabar reserved for the live signature
- Five product colours that fill their own regions (tiles, frames, markers, carets)
- Manrope for English display and labels, Pretendard for Korean and body
- Stroke-drawn marks from the brand book, drawn in by their strokes
- Ledger rows and hairline rules; no cards, no shadows at rest
- One authored moment: the board, the dot, and the thread

## Colors

Paper and ink carry the page; cinnabar is the signature; five tool colours each own a region.

### Primary
- **Cinnabar** (#B44B34): the brand signature. The dot on the board and at the head of the thread, the thread itself, the tile focus ring, the “Now” milestone, the status dot, and the beta band. Not a general accent.

### Secondary
- **Tide** (#285E71): Saegim 새김 (the app's working title is Academia Flow). Fills the Flow tile; on the ink workbench it appears tinted as Tide-on-ink (#7FB1C4) for the active tab number, arrow and zoom link, and the capture frame border (#4F7D8E).
- **Moss** (#53634A): Galpi 갈피 (working title Academia Archive). Fills its tile, the return-arrow markers, and the Archive capture frame.
- **Clay** (#A84F40): Simple PDF and its Claude engine. The mark inside its sand tile, the “Answer” label, the page-cite chips, the passage highlight, the pilot status line, and the Simple PDF frame.
- **Ochre** (#8B662B): Simple Note. Its mark, the active note-view underline, the Note frame.
- **Iris** (#635686): Simple Search. Its mark, the search caret, matched characters, the first-result row tint, the Search frame.

### Neutral
- **Paper** (#F4F1E9): page ground and the text colour on the cinnabar band.
- **Warm white** (#FFFDF7): the board, the answer cards, the search demo; anything that sits on paper.
- **Sand** (#EAE5D9): tile ground for the Simple tools, the passage stack, image frame ground.
- **Ink** (#242923): text, the primary button, the Flow workbench ground.
- **Muted** (#60665D): secondary copy, captions, labels, placeholders (4.6:1 on warm white).
- **Rule** (#CECFC3) and **Grid** (#DDDCD0): hairline dividers, frames, and the board’s grid lines.
- On ink: text #F4F1E9, muted #C3C8BD, rules #4A5248.

### Named Rules
**The Signature Rule.** Cinnabar marks what is live: the dot, the thread, the active state, the beta band. A heading, a label or a link is never cinnabar.
**The Clay Adjacency Rule.** Clay (#A84F40) and Cinnabar (#B44B34) are one shade apart and cannot be told apart by eye; the dot stays unique by placement, not hue. Never swap the two values, and never put Clay text next to the dot or the thread.
**The Own-Region Rule.** A product colour appears only inside that product’s region: its tile, its frame, its markers. It never leaks into another section or into page chrome.
**The Calm Capture Rule.** Application captures sit inside a hairline frame in the product’s colour on a sand ground; nothing is painted over them.

## Typography

**Display Font:** Manrope 400 / 700 (subset, self-hosted) with Pretendard and Apple SD Gothic Neo fallbacks
**Body Font:** Pretendard Variable 300–800 (subset, self-hosted) with Manrope fallback

**Character:** Manrope gives the English headings a rounded, tightly tracked, contemporary voice; Pretendard carries Korean headings and all running text with the same weight steps, so the two languages read as one system.

### Hierarchy
- **Display** (700, clamp(46px, 5.6vw, 84px), 1.02, −0.04em): the hero statement only. Korean: clamp(42px, 5vw, 76px), 1.14, Pretendard.
- **Headline** (700, clamp(34px, 4.2vw, 60px), 1.1, −0.04em): section statements (“A source has a whole story.”). Korean headings use Pretendard 700 at line-height 1.2 with `word-break: keep-all`.
- **Title** (700, clamp(24px, 2.4vw, 34px), 1.1): product-row headings and ledger headings.
- **Body** (400, 16px, 1.7; 17px in product copy): running text, measure capped at 66ch.
- **Label** (600, 11–12px, 1.4, +0.07em in English, 0 in Korean): board row labels, tile names, the “Selected passage” kinds, timeline dates, result kinds. Never uppercase.

### Named Rules
**The Two Faces Rule.** Manrope for English headings, the wordmark, numerals and labels; Pretendard for Korean and for all body copy. No third face.
**The Weight-Only Rule.** Emphasis comes from weight (600/700) or size, never from colour, italics or gradients.

## Layout

A centred `.wrap` capped at 1440px with a fluid gutter `clamp(22px, 5vw, 80px)`; sections are spaced `clamp(80px, 9vw, 140px)` apart. Most sections use a two-column editorial split (`0.9fr / 1.1fr`): the product identity and heading on the left, the copy on the right, then a full-width figure or ledger beneath. The Flow workbench is a full-bleed ink band with a `0.6fr / 1.8fr` split (tabs left, capture right). The hero is `0.95fr / 1.05fr`: statement left, the board right.

The board is a 600×480 canvas with a 100px grid drawn as background lines; tiles sit at grid positions (Flow and Archive on the top row at 23.3% width, the three Simple tools below at 18.3%) with their names 9px beneath; the dot rests in the bottom-right cell, the logo’s open corner. The thread runs down the left rail at half the gutter, from the hero’s bottom rule to the beta band, and fills to 62% of the viewport height as the page scrolls.

At 1100px the splits tighten. At 780px every split becomes one column, the gutter is 22px, sections 76px, the Flow tabs turn into a horizontal row, the timeline turns vertical with a left rule, and the thread is hidden. Below 400px the nav button and board row labels are hidden.

## Elevation & Depth

Flat by default. Depth comes from tonal layering (warm white on paper on sand, ink for the workbench) and hairline rules; the only soft shadow is the image dialog’s (`0 30px 90px -20px #24292399`). The board’s tiles lift 3px on hover; the active tile shows a cinnabar ring (3px light + 2px cinnabar). The dot carries a 3px light halo so it stays legible over grid lines and tiles, and a slow halo pulse when it rests.

### Named Rules
**The Flat Desk Rule.** No shadows at rest. A rule, a ground change or a colour change does the separating.

## Shapes

Square corners everywhere except two shapes from the brand: the app tile (22% radius, square aspect) and the page-cite chip (pill). Frames, buttons, fields and the board are rectangles with 1px rules. Marks are stroke-drawn (8–12 units at 128 viewBox); strokes draw in with `stroke-dashoffset`, fills fade after. The return-arrow marker (#m-return) and the wordmark grid use the same stroke language at small sizes.

## Components

### Buttons
- **Shape:** rectangle, no radius, 52px tall, 22px side padding, Pretendard 600 15px.
- **Primary:** ink on paper, light text, an ↗ arrow in Manrope at the right; hover darkens to #3a4238.
- **On the cinnabar band:** paper ground, cinnabar text; hover to warm white.
- **Nav action:** 42px, 1px ink outline, fills ink on hover.
- **Quiet link:** underlined text at 14px, offset 5px.
- **Focus:** 2px cinnabar outline, 4px offset (paper on the cinnabar band; Tide-on-ink in the workbench).

### Tiles (signature)
- Square buttons with 22% radius. Research tools fill with their colour and carry a paper mark; Simple tools sit on sand with a 1px rule and carry the mark in their colour. The name sits 9px beneath in the label style. Pressed state: cinnabar ring. Identity rows reuse the tile at 52px beside the product name and a one-line role.

### Ledger rows
- Full-width rows separated by 1px rules: a title column (`0.6fr`/`0.75fr`) and a copy column. Used for the three principles, the four archive map lines, the four grounded facts, the planned-next list and the three Simple tools. Never a card grid.

### Frames and captions
- Captures sit in a 1px frame coloured by the product on a sand ground; the caption below is 12px muted with an optional underlined action (“View full size ↗”) on the right.

### Inputs / Fields
- The search demo field: warm white, 1px rule, 18px Pretendard 500, Iris caret, muted placeholder. Results are 14px rows with the kind label in Manrope 600 11px; the first match is tinted #EFEBFF; matched characters are Iris 700.

### Navigation
- 88px header (72px mobile) on a hairline rule: the grid wordmark (cinnabar mark, Manrope 700 21px, −0.055em) left; 14px links, the outlined beta action and a 44px language button right. Secondary links hide below 780px, the action below 400px.

### The board, the dot and the thread (signature)
- The hero canvas: grid lines, five tiles, two row labels. On load (motion on, in view) the tiles draw in one by one while the dot travels the grid lines to each tile’s open corner and the caption names the tool; hovering or focusing a tile moves the dot there, clicking scrolls to the section. The dot rests in the bottom-right cell and pulses once in a while. Below the hero the thread continues down the left rail with a dot at its head and fills with scroll. With reduced motion everything is shown settled; the toggle reads as plain text.

### Timeline
- Four milestones on a hairline with 11px dots: done milestones ink-filled, “Now” cinnabar, future outlined. The cinnabar progress line scales in from the left to the current milestone (vertical on mobile).

### Image dialog
- 96vw paper panel, 18px padding, hairline-outlined 44px close button, the image on sand with `object-fit: contain`, backdrop ink at 90%.

## Do's and Don'ts

### Do:
- **Do** keep cinnabar for the dot, the thread, active states and the beta band; use the product’s own colour inside its region.
- **Do** set English headings in Manrope 700 at −0.04em and Korean headings in Pretendard 700 with `word-break: keep-all`.
- **Do** separate with 1px rules, ground changes and whitespace (section spacing clamp(80px, 9vw, 140px); more space above a heading than below).
- **Do** show real captures edge to edge in a 1px frame coloured by the product, with a caption that says what the capture is.
- **Do** build motion from the board’s grammar: stroke draw, travel along grid lines, clip wipes, streamed text; always with a settled reduced-motion state.

### Don't:
- **Don't** add cards, card grids, drop shadows at rest, or hairline-plus-shadow containers.
- **Don't** use kickers or eyebrow labels above headings; the identity row (tile + name + role) is the only thing that precedes a product heading.
- **Don't** use uppercase labels, gradient text, glyph or emoji icons; icons are stroke-drawn SVG in the marks’ weight.
- **Don't** let a product colour appear outside its own section, or cinnabar inside a heading, label or link.
- **Don't** paint the grid as page decoration; it belongs to the board and the logo.
