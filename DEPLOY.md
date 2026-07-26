# Apex Pest Solutions — Run & Deploy

The full site source lives in this folder (`apex-pest/site`). It builds cleanly with
`next build`. Because the build assistant's sandbox can't reach Vercel, the deploy runs
from your Mac (same Vercel CLI flow, just on your machine).

## 1. See it locally first (optional, ~2 min)
Open Terminal and run:

```bash
cd "apex-pest/site"          # cd into this folder (drag it into Terminal to autofill the path)
npm install                  # one-time: installs dependencies
npm run dev                  # starts the site at http://localhost:3000
```

Open http://localhost:3000 in your browser. Ctrl-C in Terminal to stop.

## 2. Deploy to Vercel (first time)
```bash
npm install -g vercel        # one-time: installs the Vercel CLI
cd "apex-pest/site"
vercel                       # follow prompts: log in, link/create project → gives a preview URL
```

The first `vercel` run creates a **preview** deployment (a private URL to review).
When you're happy:

```bash
vercel --prod                # promotes it to production
```

That's it — every later change is one `vercel` command.

## 3. What's built so far
- **Homepage** — hero, "why Apex" (the effortless-experience story), Summit Shield
  scroll diagram (the signature element), Survey→Clear→Shield→Hold, comparison table,
  CTA band, footer, sticky mobile call bar.
- Brand-exact tokens, **self-hosted** Montserrat + Inter, WCAG-minded contrast, and
  PestControlService structured data (no self-serving review schema).

## 4. Where to edit things
- **All copy & data:** `src/lib/site.ts` (phone, license #, stats, zones, steps, comparison).
  This is deliberately centralized so it maps cleanly to Sanity CMS later.
- **Components:** `src/components/`
- **Global styles / colors:** `src/app/globals.css`

## 5. Coming next
Service pages, pest library, location pages, careers, the multi-step quote form
(→ n8n webhook + TCPA consent), and Sanity CMS.
