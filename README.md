# BR Innovation & Technology — YANI

Production-ready static website for BR Innovation & Technology and its YANI
adaptive AI learning companion prototype. The repository requires no build
step, package installation, API key, database or backend.

## GitHub Pages structure

`index.html` is in the repository root, alongside every other public page.
Relative asset and page links work at the project URL:

`https://binduraju1511.github.io/britwebsite/`

The HTML includes pre-rendered content for indexing and retains `fidelity.js`
for navigation, filters, FAQ interactions and the local keyword-based YANI
Product Guide.

## Deploy

1. Put these files at the root of `binduraju1511/britwebsite` on the `main`
   branch.
2. In GitHub, open **Settings → Pages**.
3. Select **Deploy from a branch**, then choose **main** and **/(root)**.
4. Save and wait for the Pages deployment to finish.
5. Open the project URL above and run the post-deployment checks in
   `DEPLOYMENT_CHECKLIST.md`.

Important: the existing remote repository currently contains a `CNAME` file
for `apfabtech.com`, an unrelated A.P. FAB TECH website. Do not retain that
file when publishing this BR Innovation & Technology site. This package
intentionally contains no `CNAME`.

If a new BR Innovation & Technology custom domain is added later, update the
absolute URL in every canonical/social tag, `SITE_URL` in `fidelity.js`,
`robots.txt`, and `sitemap.xml` before publishing the domain.

## Preview locally

From the repository root:

```powershell
py -m http.server 4173 --bind 0.0.0.0
```

Open `http://localhost:4173/` on this computer or use the computer's LAN IP on
another device. Stop the preview with `Ctrl+C`.

## Privacy and security

The assistant processes keyword matches only in the browser and does not store
or transmit chat messages. Waitlist buttons open an external Google Form.
There are no analytics, cookies, logins, uploads or private API credentials in
this repository. GitHub Pages should be configured to enforce HTTPS.
