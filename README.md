# git-workshop-demo

A tiny Node.js CLI used in a **Git and GitHub** workshop: branches, clean merges, conflicts, and unrelated histories.

## Run

```bash
npm start
```

## Workshop map

| Branch | What it teaches | Try this |
|--------|----------------|----------|
| `main` | Baseline, shared work | `git switch main` and run `npm start` |
| `feature/welcome-tweaks` | Merge without conflicts | `git switch main` then `git merge feature/welcome-tweaks` |
| `feature/personalize-greeting` | Resolving a merge conflict | `git switch main` then `git merge feature/personalize-greeting` (then fix `src/greet.js`) |
| `experimental/orphan-rewrite` | “Unrelated histories” (merge refused) | `git switch main` then `git merge experimental/orphan-rewrite` |

## Suggested demo order (commands)

1. **Clean merge** — `main` already includes the merge of `feature/welcome-tweaks` in this repo. To replay from a fresh clone of an older `main`, you would: `git switch main` then `git merge feature/welcome-tweaks` (expect a fast-forward or a clean merge with no conflict markers).

2. **Conflict** — on `main`:
   ```bash
   git switch main
   git merge feature/personalize-greeting
   ```
   Open `src/greet.js`, remove conflict markers, keep the line you want (or combine both), then:
   ```bash
   git add src/greet.js
   git commit -m "Merge feature/personalize-greeting: resolve greet wording"
   ```
   If you need to back out: `git merge --abort` (only while a merge is in progress).

3. **Unrelated histories**:
   ```bash
   git switch main
   git merge experimental/orphan-rewrite
   ```
   Git prints `fatal: refusing to merge unrelated histories`. Optional follow-up (advanced): `git merge experimental/orphan-rewrite --allow-unrelated-histories` and then handle any file overlaps manually.

## Repo layout

- `src/index.js` — entrypoint
- `src/greet.js` — **intentional conflict zone** (two branches change the same lines)
- `src/config.js` — app metadata (tweaked on the easy-merge branch)
- `src/metrics.js` — only on `feature/welcome-tweaks` (added in that branch)
