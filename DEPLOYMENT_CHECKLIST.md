# Deployment and ranking checklist

This file separates completed repository work from tasks that require the
deployed GitHub account, domain or ongoing marketing work.

## Completed in this repository

- [x] Root-level `index.html` and relative links compatible with GitHub Pages.
- [x] Original, useful page content with one visible H1 and descriptive H2/H3
      structure on each public content page.
- [x] Unique page titles and meta descriptions using natural YANI, adaptive AI
      learning, parent-guided learning and educational robotics language.
- [x] Canonical URLs, crawl directives, Open Graph and Twitter preview tags.
- [x] Internal navigation and descriptive links across product, family, help,
      privacy and terms pages.
- [x] Organization, Product, FAQ, WebSite and Breadcrumb structured data without
      fabricated ratings, prices, reviews or availability claims.
- [x] `sitemap.xml`, `robots.txt`, `.nojekyll`, a web manifest and custom 404.
- [x] Responsive mobile layouts, fixed mobile navigation, skip links, accessible
      labels and keyboard-operable interactive controls.
- [x] Large page artwork converted to WebP and below-the-fold images lazy-loaded.
- [x] Page templates are pre-rendered and the browser loads only a small
      interaction/schema script instead of duplicate client-side page templates.
- [x] No embedded secrets, private API keys, analytics cookies, localStorage,
      authentication, uploads, database or runtime dependencies.
- [x] Browser Content Security Policy, strict referrer policy, safe external-link
      attributes, text-only chatbot insertion and bounded chatbot input.
- [x] Privacy and terms pages, including the local chatbot and external waitlist
      behavior.

## Required once after deployment

- [ ] Remove the old `apfabtech.com` `CNAME` from the target GitHub repository.
- [ ] Enable GitHub Pages from `main` → `/(root)` and enable **Enforce HTTPS**.
- [ ] If the site later moves away from GitHub Pages, configure HSTS,
      `X-Content-Type-Options`, `Permissions-Policy` and frame protection as real
      HTTP response headers; a static repository cannot set those headers.
- [ ] Confirm all sitemap URLs return HTTP 200 over HTTPS.
- [ ] Add the deployed property to Google Search Console and submit
      `https://binduraju1511.github.io/britwebsite/sitemap.xml`.
- [ ] Inspect the home, YANI and FAQ pages in Search Console, then request
      indexing.
- [ ] Test structured data with Google's Rich Results Test and fix any warnings
      that reflect real product information.
- [ ] Run PageSpeed Insights on home, YANI, Parents, Kids and Gallery after the
      GitHub CDN has cached the assets.
- [ ] Turn on two-factor authentication for repository administrators and use
      branch protection or reviewed pull requests for production changes.
- [ ] Keep a recoverable repository backup and review the external Google Form's
      access, retention and deletion settings.

## Ongoing, not a code-only checkbox

- [ ] Validate target search phrases with Search Console data and ethical keyword
      research; update copy only where it remains natural and accurate.
- [ ] Publish genuinely useful learning, family-safety and product-development
      resources when the company can maintain them. Do not add placeholder blog
      pages merely for keyword volume.
- [ ] Earn relevant links through partnerships, demos, press, schools and trusted
      educational communities. Do not buy links or use automated link schemes.
- [ ] Keep company details consistent on LinkedIn, Instagram and future business
      profiles, and review titles/descriptions when the product status changes.
- [ ] Review privacy, terms and prototype claims before a public launch or before
      collecting child or family data.

## Not applicable to the current static site

Backend API authentication, CORS configuration, databases, server uploads,
payment processing, account passwords, session cookies, admin panels and npm
dependency patching are not present. Reassess these items before adding any of
those features.
