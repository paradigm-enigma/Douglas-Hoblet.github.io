# MIT Student Portfolio — Jekyll Template

A minimal, customizable Jekyll template for MIT students who want a personal
site with a **blog**, a **digital garden**, **course notes**, and a **projects
page**. Structure is inspired by [strikingloo.github.io](https://strikingloo.github.io)
but tuned for the MIT context (course numbers, UROP, MIT-red accent).

**Live preview:** see the deployed version attached to this template.

## Quick start (non-technical, 10–15 min)

These steps assume you have a GitHub account and know how to click around
a browser. No command line required until the optional "customize locally" step.

### 1. Fork this repo to *your* GitHub

1. Click **Fork** at the top-right of the repo page.
2. In the "Repository name" field, name it **exactly** `YOUR-GITHUB-USERNAME.github.io`.
   (For example: `tbeaver.github.io`.) This gives you the clean URL
   `https://YOUR-GITHUB-USERNAME.github.io` with no extra path.
3. Click **Create fork**.

> You can only have one user-site repo per account. If you already have one,
> name this repo something else (e.g. `portfolio`) and you'll get
> `https://YOUR-GITHUB-USERNAME.github.io/portfolio/` instead.

### 2. Tell GitHub to publish it

1. In your forked repo, go to **Settings → Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Wait about 30 seconds. A green checkmark will appear on the `main` branch.
4. Visit `https://YOUR-GITHUB-USERNAME.github.io` — you should see the site.

### 3. Make it yours

Open `_config.yml` in the GitHub web UI (click the pencil icon to edit
in the browser). Change:

```yaml
title:       "Your Name — MIT"
tagline:     "Short description of you"
author:      "Your Name"
email:       "you@mit.edu"
url:         "https://YOUR-GITHUB-USERNAME.github.io"

mit:
  class_year: 2027
  major:      "6-3 (Computer Science)"
  dorm:       "Your dorm"

social:
  github:   "your-github-username"
  linkedin: "your-linkedin-slug"
  email:    "you@mit.edu"
```

Commit the change. The site rebuilds in about a minute.

### 4. Write your first post

In the GitHub web UI, click **Add file → Create new file**.
Name it `_posts/2026-04-24-hello-world.md` (`YYYY-MM-DD-slug.md` format is required).
Paste:

```markdown
---
title: "Hello, world"
date: 2026-04-24
tags: [meta]
---

This is my first post on the new site.
```

Commit. Your post appears at `/hello-world/` within a minute.

**See [CUSTOMIZING.md](CUSTOMIZING.md) for everything else** — adding notes,
courses, projects, changing the color scheme, adding math with MathJax, etc.

## What's included

```
.
├── _config.yml          # site-wide settings
├── _layouts/            # page templates (default, post, note, project, course)
├── _posts/              # blog posts (filename: YYYY-MM-DD-slug.md)
├── _notes/              # digital-garden notes
├── _courses/            # MIT course pages (e.g. 6-006.md → /courses/6-006/)
├── _projects/           # project pages
├── pages/               # About, Blog index, Garden index, Courses, Projects
├── css/main.css         # styling (MIT-red accent by default)
├── js/theme.js          # dark/light toggle
├── assets/              # favicon, images
├── index.html           # homepage
├── 404.html             # custom 404 page
├── Gemfile              # Ruby dependencies (for local preview)
└── .github/workflows/   # GitHub Actions → auto-build on push
```

## Features

- **Zero-config GitHub Pages deploy** — push to `main`, site goes live.
- **Blog** with tags, abstracts, prev/next navigation.
- **Digital garden** with `seedling` / `budding` / `evergreen` statuses.
- **Course collection** with MIT-style number grouping by term.
- **Project showcase** with grid layout, year grouping, and stack tags.
- **Dark/light theme toggle** with localStorage persistence.
- **Math via MathJax** — add `uses_mathjax: true` to any note's front-matter.
- **RSS**, **sitemap**, **SEO tags** via standard Jekyll plugins.
- **Mobile responsive**.

## Local preview (optional)

If you want to preview changes on your laptop before pushing:

```bash
# Requires Ruby 3.x
bundle install
bundle exec jekyll serve --livereload
# → open http://localhost:4000
```

On MIT Athena:
```bash
add ruby
bundle install --path vendor/bundle
bundle exec jekyll serve --host 0.0.0.0
```

## Credits

Structure and reading-blog-plus-wiki concept inspired by
[Luciano Strika's personal site](https://strikingloo.github.io).
This implementation is an original rewrite — no code was copied.

Built for MIT students. The Apache-2.0 LICENSE lets you do whatever you want
with it. Rip out the MIT-specific pieces if you're not at MIT; this works
fine as a general student portfolio template.
