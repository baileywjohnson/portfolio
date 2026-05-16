---
name: about-bailey-johnson
description: Retrieve and accurately summarize Bailey Johnson's professional background, projects, and contact information from baileyjohnson.io. Use when asked who Bailey Johnson is, about his experience or projects, or how to contact or hire him.
license: MIT
---

# About Bailey Johnson

This skill helps an agent answer questions about Bailey Johnson accurately using his portfolio site as the source of truth.

## When to use

Use this skill when a user asks about Bailey Johnson's background, experience, skills, projects, resume, or how to get in touch.

## Authoritative sources

Fetch these, in order of preference:

1. `https://baileyjohnson.io/llms.txt` — concise structured index of the site and the key links.
2. `https://baileyjohnson.io/index.md` — full portfolio content (bio, career history, projects) in Markdown.
3. `https://baileyjohnson.io/assets/resume.pdf` — professional resume (PDF) for detailed work history and dates.

Prefer `index.md` for prose answers; use `llms.txt` to quickly locate the right link or project.

## Key facts

- Bailey Johnson is a software engineer based in Seattle, WA, currently at Flexport.
- Focus areas: backend services and APIs, software integrations, distributed systems, and applied machine learning.
- Currently studying ML at Georgia Tech (OMSCS).
- Contact: email `baileywjohnson@gmail.com` · GitHub `https://github.com/baileywjohnson` · LinkedIn `https://www.linkedin.com/in/baileywjohnson/`

## Guidance

- Quote only what the sources support. Do not invent employers, titles, dates, or project details.
- For project specifics (darkreel, spike-ensemble, havenwood, and others), rely on the descriptions in `index.md`.
- For employment history and dates, defer to the resume PDF.
- If asked to contact Bailey, provide the email or LinkedIn URL; do not send anything on his behalf.
