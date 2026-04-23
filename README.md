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

## Suggested demo order

1. **Clean merge** — merge `feature/welcome-tweaks` into `main` (or show already merged state and replay from a backup clone).
2. **Conflict** — merge `feature/personalize-greeting`, open conflict markers in `src/greet.js`, resolve, `git add`, `git commit`. Optional: `git merge --abort` to undo.
3. **Unrelated histories** — attempt merge of `experimental/orphan-rewrite`; read the error. Optionally discuss `--allow-unrelated-histories` as an advanced escape hatch (not the default for good reason).

## Repo layout

- `src/index.js` — entrypoint
- `src/greet.js` — **intentional conflict zone** (two branches change the same lines)
- `src/config.js` — app metadata (tweaked on the easy-merge branch)
- `src/metrics.js` — only on `feature/welcome-tweaks` (added in that branch)
