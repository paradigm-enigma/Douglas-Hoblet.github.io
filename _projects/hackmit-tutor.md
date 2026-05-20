---
title: "officehours.exe — HackMIT 2025"
year: 2025
course: "HackMIT"
summary: "A voice-first tutoring agent that screen-shares with you, watches you work through a problem, and hints instead of answers. Won Best Education Hack."
stack: ["React", "WebRTC", "OpenAI Realtime API", "Tailwind"]
repo: "https://github.com/your-github-username/officehours"
demo: "https://officehours-hack.vercel.app"
---

## The one-sentence pitch

Office hours, but at 2am the night before your pset is due, and the TA
doesn't tell you the answer.

## Why

Every MIT student has been in the same hole: it's 1:47am, pset is due at 9,
and the one thing standing between you and sleep is an algorithm concept
you *almost* get but not quite. LLM assistants will cheerfully tell you
the answer, which is the worst possible thing for your learning. Human
TAs are asleep.

We wanted something that acted like a good TA: asks you what you've tried,
spots the specific misconception in your work, and nudges — never answers.

## What we built in 24 hours

- **Voice-in, voice-out** interface using the OpenAI Realtime API.
- **Screen capture** of your code window (with consent), piped to GPT-4o
  via the Vision endpoint every few seconds.
- **Prompt stack** that enforces a strict "Socratic only" policy —
  model cannot give the full answer, only ask questions and flag errors.
- **Whiteboard** component so the tutor can sketch diagrams.

## What we won

Best Education Hack, judged by the [HackMIT](https://hackmit.org) panel.

## What's next

My teammates and I are turning it into a spring project for 6.S978
(software studio). We'll see.
