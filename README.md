# Monoon Works

The Monoon Works website: research software for the humanities and social sciences — Saegim 새김 (Academia Flow), Galpi 갈피 (Academia Archive), Simple PDF with its Claude engine, Simple Note and Simple Search. English by default, Korean at `?lang=ko` (chosen automatically for Korean browsers on a first visit).

Static files, no build step, published through GitHub Pages at https://monoonworks.com/.

- `index.html` — the page. The hero is the 모눈 board: the five product marks on a grid, and a cinnabar dot that travels the grid lines between them, then runs down the left rail as a thread that fills with scroll.
- `site.css` — the visual system (see `DESIGN.md`).
- `site.js` — language switch, the board and thread, Saegim workflow tabs, the streamed Claude answer, the Simple Search demo (Korean initial-consonant and partial-name matching over sample file names), the roadmap, the image dialog.
- `privacy.html` — what the site, email and apps send, including Claude in Simple PDF.
- `images/mark-*.svg` — the brand marks from the 2026-10-08 brand book; `images/*.webp` — app captures.
- `fonts/` — Manrope (Regular, Bold) and Pretendard Variable, subset to the characters used on the site; see `FONT-LICENSES.txt`.
- `PRODUCT.md`, `DESIGN.md`, `.impeccable/` — product truth, the design system, and the surface brief used by the Impeccable design workflow.

## Product evidence

Screenshots are captured from the actual desktop apps with demonstration workspaces and public bibliographic records; private notes and attachments are not included. The Claude section's passage/answer cards and the search box are illustrations of how each feature works, labelled as such. Planned features are marked as planned.

## History

The first website, including a game showcase, is preserved in commit `76db0cde8a7bf5df0d937f19e36755d092784e49`. The editorial v2 design that preceded the brand-book build is in commit `a45cc35`.
