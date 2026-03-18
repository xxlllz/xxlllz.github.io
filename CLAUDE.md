# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Academic Pages**, a Jekyll-based GitHub Pages template for academic and professional portfolio websites. It helps researchers showcase publications, talks, teaching experience, portfolio items, and blog posts.

- **Repository**: https://github.com/academicpages/academicpages.github.io
- **Technology**: Jekyll (Ruby-based static site generator) with Node.js build tooling
- **License**: MIT License

## Development Commands

### Local Development (Native Ruby)

```bash
# Install dependencies (Linux/WSL)
sudo apt install ruby-dev ruby-bundler nodejs build-essential

# Install Ruby gems locally (recommended to avoid permission issues)
bundle config set --local path 'vendor/bundle'
bundle install

# Serve locally with live reload
bundle exec jekyll serve -l -H localhost
# Site available at http://localhost:4000
```

### Docker Development

```bash
# Make files writable and start container
chmod -R 777 .
docker compose up
# Site available at http://localhost:4000
```

### JavaScript Build

```bash
# Install Node dependencies
npm install

# Build minified JavaScript
npm run build:js

# Watch JS files for changes
npm run watch:js
```

## Architecture

### Content Collections

Jekyll collections defined in `_config.yml`:
- `_publications/` - Academic papers with citation support
- `_talks/` - Presentations with optional location mapping
- `_teaching/` - Course listings
- `_portfolio/` - Project showcases
- `_posts/` - Blog posts
- `_pages/` - Static pages

### Key Configuration Files

- `_config.yml` - Main Jekyll configuration (site settings, author profile, social links)
- `_data/navigation.yml` - Header navigation structure
- `_data/authors.yml` - Author profiles
- `_data/cv.json` - Structured CV data
- `Gemfile` - Ruby dependencies
- `package.json` - Node.js dependencies and build scripts

### Styling

- `_sass/` - Sass stylesheets
  - `_themes.scss` - Theme variables (default, air themes available)
  - `theme/` - Theme implementations with dark/light mode support
- `assets/css/` - Compiled CSS output
- Theme switching is handled via JavaScript with localStorage persistence

### JavaScript

- `assets/js/_main.js` - Main application code
- `assets/js/plugins/` - Plugin code (greedy navigation, etc.)
- `assets/js/main.min.js` - Minified output (generated, do not edit directly)

### Automation

- `.github/workflows/scrape_talks.yml` - GitHub Action that geocodes talk locations and generates an interactive map
- `talkmap.py` - Python script for geocoding talk locations using geopy/Nominatim
- `markdown_generator/` - Jupyter notebooks and Python scripts for bulk content generation from TSV/BibTeX files

## Important Development Notes

- Changes to `_config.yml` require restarting the Jekyll server
- Changes to Markdown/HTML files are automatically reloaded with `-l` flag
- Static files (PDFs, images) go in `files/` and `images/` directories
- Generated site output goes to `_site/` (gitignored)
- The `github-pages` gem ensures compatibility with GitHub Pages build environment

## Content Front Matter Standards

### Publications
```yaml
---
title: "Paper Title"
collection: publications
category: manuscripts  # or conferences, books
permalink: /publication/filename
venue: 'Journal Name'
date: YYYY-MM-DD
paperurl: 'https://...'
citation: 'Formatted citation'
---
```

### Talks
```yaml
---
title: "Talk Title"
collection: talks
type: "Talk"
permalink: /talks/filename
venue: "Venue Name"
date: YYYY-MM-DD
location: "City, Country"
---
```
