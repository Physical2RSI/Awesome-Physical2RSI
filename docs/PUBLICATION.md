# Publication record

## Current release

The survey is public on arXiv as [arXiv:2610.29677](https://arxiv.org/abs/2610.29677) (submitted 21 October 2026, primary category cs.RO). The README and the website's survey section carry a summary of it, with the authors' approval: the title, author names, affiliations, and the corresponding-author mark, the research questions, the framework and its four conditions, Figures 1 to 9, the survey's robot illustrations, the open problems, and a teaser illustration. The text lives in `tools/survey-content.mjs` and the figures in `assets/readme/figures/`; `npm run readme` renders both the README and the website section, and `tools/check.mjs` fails if either is out of date. Keep the content in step with the latest arXiv version.

The website links to the arXiv record from its hero, the README carries an arXiv badge, and both cite the arXiv preprint. The homepage carries `citation_*` meta tags and `ScholarlyArticle` structured data for the arXiv record, and `tools/check.mjs` requires them. The site links to the arXiv PDF and does not host the manuscript PDF, source, or any other figure.

The title, the twelve authors and their order, and the date were checked against the arXiv record on 22 October 2026. The figures, captions, summary text, and all 379 bibliography records were checked against the manuscript of 21 October 2026, with the previously verified PISA publication link preserved where the source omits it.

## When a new arXiv version appears

- Verify the title, author names and order, affiliations, and date against the arXiv record, and update `tools/survey-content.mjs` and the `citation_*` metadata in `index.html` to match.
- Re-crop Figures 1 to 9 from the new version, update their captions, and resynchronize the summary text and the bibliography.
- Run the full build and check desktop, mobile, keyboard navigation, citation copying, and links on the deployed site.

Preserve the public project name **Toward Recursive Self-Improvement in Physical AI** (short form: **Physical2RSI**) and the public reference metadata.
