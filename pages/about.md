---
layout: page
title: About
permalink: /about/
---

Hi — I'm **{{ site.author }}**, a Course {{ site.mit.major }} undergraduate at MIT,
class of {{ site.mit.class_year }}.
I grew up tinkering with electronics and cheap Linux laptops and haven't really stopped.

## What I'm working on

- **Academics.** Wrapping up the CS core — algorithms, systems, and a splash of 6.036.
- **Research.** UROP at CSAIL on <!-- TODO: describe your lab work -->.
- **Side quests.** Contributing to open-source, writing here, and building small tools.

## Beyond the problem sets

- **Dorm / living group:** {{ site.mit.dorm }}
- **Activities:**
  {% for a in site.mit.activities %}
  - {{ a }}
  {% endfor %}

## Get in touch

The fastest way to reach me is email: [{{ site.email }}](mailto:{{ site.email }}).
You can also find me on
{% if site.social.github %}[GitHub](https://github.com/{{ site.social.github }}){% endif %}{% if site.social.linkedin %}, [LinkedIn](https://www.linkedin.com/in/{{ site.social.linkedin }}){% endif %}.

## About this site

This is a Jekyll site hosted on GitHub Pages, inspired by the
[strikingloo.github.io](https://strikingloo.github.io) digital-garden-plus-blog format.
The template is open-source — fork it from
{% if site.social.github %}[my GitHub]({{ site.url }}/){% else %}the repo{% endif %}
and make it your own.
