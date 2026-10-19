# GitHub Pages deployment

Project source: <https://github.com/Physical2RSI/Awesome-Physical2RSI>

Website deployment: <https://github.com/Physical2RSI/physical2rsi.github.io>

Website: <https://physical2rsi.github.io/>

## Publish changes

Make project, bibliography, asset, and website changes in `Awesome-Physical2RSI`. Its quality workflow validates pull requests and pushes. The separate website repository checks out `Awesome-Physical2RSI/main`, runs `npm run build`, and deploys the resulting `dist/` directory to the organization root website.

The website workflow checks for new source commits every five minutes, subject to GitHub scheduling delays. It reads the live `_deployment.json` and skips scheduled deployments when the source commit is unchanged. For an immediate release, run **Deploy GitHub Pages** from the website repository's Actions tab. Pushes to the website repository also trigger deployment. If GitHub disables scheduled workflows after repository inactivity, re-enable the workflow in Actions.

In the website repository's **Settings > Pages**, keep **Source** set to **GitHub Actions**. Source checkout is read-only; only the deployment job receives Pages and OpenID Connect write permissions. Concurrent deployments are serialized. No additional cross-repository credentials are needed.

## Deployment boundary

The source build selects these public paths:

- `index.html`, `404.html`, `robots.txt`, `sitemap.xml`, and `site.webmanifest`
- Approved web assets under `assets/`
- CSS and JavaScript under `site/`
- `data/references.json`

The output also receives an empty `.nojekyll` marker. The deployment workflow adds `_deployment.json` with the source repository and commit. Repository documentation, workflow files, import tools, raw bibliography files, manuscript files, and archives are never copied. The script rejects symlinks and unsupported extensions under the selected directories.

## Verify a release

```sh
npm run build
npm run preview
```

Confirm a successful deployment in the website repository, check that `_deployment.json` contains the intended Awesome source commit, and inspect `https://physical2rsi.github.io/`, including a nonexistent URL, mobile navigation, and a reference link. The dedicated `physical2rsi.github.io` repository preserves the organization root website URL.

## Repository history and old links

The original project repository is named `Physical2RSI/Awesome-Physical2RSI`, preserving its full history, stars, and existing collaborator access. Its content remains the single source for both the project README and website. The dedicated website repository contains deployment configuration and documentation only.

The earlier personal-account repository links should redirect to the Awesome project repository. The previous website paths, `awesome-physical-ai`, `awesome-physical-ai-rsi`, and `Awesome-Physical2RSI`, are handled separately by matching pages in `Eurekaleo/Eurekaleo.github.io`. These redirect to the organization website while preserving query parameters and anchors. Keep them deployed, and do not reuse the old personal-account repository names.

## Roll back

Revert the problematic source commit in `Awesome-Physical2RSI`, then run the website deployment workflow. Do not change the upload directory to the repository root to work around a deployment failure.
