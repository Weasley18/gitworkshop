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

## GitHub: why some compares look “empty” or “broken”

- **`main` vs `feature/welcome-tweaks`** — GitHub says *“main is up to date with all commits from feature/welcome-tweaks”* and shows **0 files**. That is expected: the welcome work is **already merged** into `main`, so there is no remaining diff between those two tips. To **show students the actual file changes** that branch introduced, compare the **base** to the pre-merge state: use tag **`v1.0.0`** as the base and **`feature/welcome-tweaks`** as the compare (GitHub: `v1.0.0`…`feature/welcome-tweaks`).

- **`main` vs `feature/personalize-greeting`** — Use this compare for a normal PR-style diff: that branch is **not** merged, so you should see changes (mostly in `src/greet.js`).

- **`main` vs `experimental/orphan-rewrite`** — You may see *“entirely different commit histories”* or *“There isn’t anything to compare”* in the usual sense. That matches the local Git error: **unrelated histories**. The diff area may still list the orphan’s files; the message is the teaching point for the workshop.

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
