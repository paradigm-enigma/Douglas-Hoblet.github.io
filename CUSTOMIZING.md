# Customizing your site

Everything you can change without touching Jekyll internals.

## Table of contents

- [Site identity (name, tagline, URL)](#site-identity)
- [Navigation menu](#navigation-menu)
- [Adding a blog post](#adding-a-blog-post)
- [Adding a digital-garden note](#adding-a-digital-garden-note)
- [Adding an MIT course](#adding-an-mit-course)
- [Adding a project](#adding-a-project)
- [Math with MathJax](#math-with-mathjax)
- [Changing colors (MIT red → your color)](#changing-colors)
- [Custom domain (youname.com)](#custom-domain)
- [MIT-specific conventions](#mit-specific-conventions)
- [Troubleshooting](#troubleshooting)

---

## Site identity

Edit `_config.yml`:

```yaml
title:    "Your Name — MIT"
tagline:  "One-line description"
author:   "Your Name"
email:    "you@mit.edu"
url:      "https://YOUR-GITHUB-USERNAME.github.io"
```

After saving, GitHub Pages will rebuild in ~1 minute.

## Navigation menu

Edit the `nav:` section of `_config.yml`:

```yaml
nav:
  - { title: "Home",    url: "/" }
  - { title: "About",   url: "/about/" }
  - { title: "Now",     url: "/now/" }         # add your own
  - { title: "Reading", url: "/reading-list/" }
```

Any URL works — internal or external.

## Adding a blog post

Create a file in `_posts/` named **`YYYY-MM-DD-slug.md`** (the date prefix is
required by Jekyll).

```markdown
---
title: "How I survived my first 18.06 exam"
date: 2026-04-24
tags: [mit, "18.06", study]
abstract: "Short one-paragraph summary shown at the top of the post."
---

Post body in Markdown here. Use `##` for section headings.
Code fences, images, links, tables all work normally.
```

The post appears at `/how-i-survived-my-first-1806-exam/` and in
the Blog list, grouped by year.

## Adding a digital-garden note

Create a file in `_notes/` named `slug.md` (no date prefix):

```markdown
---
title: "Dynamic programming — the one-sentence version"
status: budding           # seedling | budding | evergreen
course: "6.006"           # optional; links note to a course page
tags: [algorithms, dp]
updated: 2026-04-24
related: [amortized-analysis, memoization]
uses_mathjax: true        # optional; enable LaTeX math
---

Body here. Link to other notes like `[this one](/garden/other-slug/)`.
```

**Statuses** sort the garden page:

- `seedling` 🌱 — quick, rough, might be wrong
- `budding`  🌿 — actively tended
- `evergreen` 🌳 — stable, review every so often

**`related:`** is a list of slugs (filenames without `.md`) that will be
shown at the bottom of the note.

## Adding an MIT course

Courses live in `_courses/`. Name the file with the course number, replacing
the dot with a hyphen: `6.006` → `6-006.md`, `18.06` → `18-06.md`.

```markdown
---
number:     "6.006"
title:      "Introduction to Algorithms"
term:       "Fall 2025"                # groups courses on the index page
instructor: "Profs. Demaine & Ku"
units:      "12"
ocw:        "https://ocw.mit.edu/courses/6-006-..."   # optional
---

Free-form Markdown body: what the class is about, your take on it,
resources that helped, etc.
```

**How the linking works:** if a note in `_notes/` has front-matter
`course: "6.006"`, it will automatically appear in a "Notes from this class"
list at the bottom of the `6.006` course page.

### Term names that sort nicely

Use a consistent format like `"Fall 2024"`, `"Spring 2025"`, `"IAP 2026"`.
The Courses index groups courses by the exact string in `term`.

## Adding a project

```markdown
---
title:   "Snekoban solver with A*"
year:    2025
course:  "6.1010"                      # optional
summary: "One-line pitch shown on the grid."
stack:   ["Python", "NumPy"]
repo:    "https://github.com/you/snekoban"
demo:    "https://snekoban.example.com"
paper:   ""                            # optional link to PDF writeup
---

Longer writeup in Markdown. Screenshots go in `assets/`; reference them as
`![Alt text](/assets/screenshot.png)`.
```

## Math with MathJax

Add `uses_mathjax: true` to a post or note's front-matter. Then use:

- Inline: `\\( x^2 + y^2 = r^2 \\)` → \( x^2 + y^2 = r^2 \)
- Display: `\\[ \int_0^1 e^x \, dx = e - 1 \\]`

(The double-backslashes are because Liquid processes the file first.
If you turn off Liquid with `{% raw %}` / `{% endraw %}` around math blocks,
single backslashes work.)

## Changing colors

Open `css/main.css`. The first block of CSS variables controls everything:

```css
:root {
  --accent:      #8a1538;   /* MIT cardinal red — change me */
  --accent-soft: #c94562;
  --accent-bar:  #a31f34;
  /* ... */
}
```

Swap in any hex color. The site auto-updates both light and dark modes.
Nice color palettes to steal: `#2c5282` (MIT dome blue), `#22543d` (fen green),
`#702459` (plum).

## Custom domain

If you own `yourname.com`:

1. Create a file called `CNAME` in the repo root containing exactly:
   ```
   yourname.com
   ```
2. In your DNS provider, add these records pointing at GitHub Pages:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `YOUR-GITHUB-USERNAME.github.io`
3. In the GitHub repo: **Settings → Pages → Custom domain** = `yourname.com`, and check **Enforce HTTPS**.
4. Update `url:` in `_config.yml` to `https://yourname.com`.

## MIT-specific conventions

A few things I've picked up running a site as an MIT student:

- **Use actual course numbers.** `6.006`, not "Intro Algorithms". Alumni and
  prospective students Google by number.
- **Link to OCW.** For any class that has open courseware, link it — it's the
  best free resource MIT produces, and most professors are proud to see
  students using it.
- **Respect pset academic integrity.** Never post current-semester solutions.
  Retrospective writeups and high-level lessons are fine after the term ends.
- **Athena is your friend for preview.** Running `bundle exec jekyll serve` on
  an Athena machine works; use `--host 0.0.0.0 --port 4000` and forward
  the port via `ssh -L 4000:localhost:4000 you@athena.dialup.mit.edu`.
- **UROP conventions.** If you write about research, clear it with your PI
  first. A one-line "discussed with advisor, she's fine with me posting this"
  at the bottom of a post saves future pain.

## Troubleshooting

**"My site is blank / shows a README"**
Check **Settings → Pages → Source** is set to **GitHub Actions**, not
"Deploy from a branch".

**"My post doesn't show up"**
Filename must be `YYYY-MM-DD-slug.md` in `_posts/`. If the date is in the
future, Jekyll hides it by default.

**"Dark mode looks wrong"**
Hard-refresh (Cmd-Shift-R / Ctrl-F5) to bust the CSS cache. If you edited
`main.css`, double-check you kept the `[data-theme="dark"]` block in sync.

**"MathJax doesn't render"**
Add `uses_mathjax: true` to the page's front-matter. It's off by default
so most pages load faster.

**"GitHub Actions is red"**
Click the red X in the Actions tab. The error is almost always a malformed
YAML front-matter block — check that your `---` delimiters are on their own
lines with no trailing spaces.

---

Questions I didn't answer here? Open an issue on the template repo or email
the maintainer listed in `_config.yml`.
