# Re-running the physical-risk analysis next quarter (v1)

This note is for an analyst at Northwood with no Kith access. It covers what to update, the order to run the scripts in, and how to check the result. The method is in `my-work/week-5/fund-level/leave-behind/method-note-v1.md`.

## What you need

- **Python 3.9 or later.** The scripts use only the standard library. The kit helpers are in `my-work/framework/kernel-v2`.
- **macOS**, only for the page-script syntax check, which uses `osascript`. Every other step runs anywhere.
- **The project folder**, with the data room under `data/northwood-capital/`.
- **Run every command from the project root.** Each script refuses to overwrite its outputs. Before a re-run, move the previous outputs to `my-work/week-5/_archive/` in a folder named after the run that made them (the audit log, `my-work/week-5/record/audit-log-v1.jsonl`, gives the run id).

## What to update each quarter

| Input | Where | Why it matters |
|---|---|---|
| Revenue, EBITDA, debt, exit multiple | `data/northwood-capital/_data/spine/csv/portfolio_companies.csv` and `portco_financials.csv` | Every dollar figure, the covenant headroom and the exit-value lines |
| Exit timing | `my-work/week-4/fund-level/exposure-lines-v6.csv` (`n_years`) | Hold years, lever timing |
| Report date | Manifest setting `report_date` (set with `kit_tools.py bump-manifest`) | Hold periods. While it is unset, outputs are marked provisional |
| Premiums and insurance schedules | Data request DR-1; then the premium history in `my-work/week-4/methodology/d2-inputs-v4.csv` and the programme rules A-17 to A-21 in `my-work/week-5/methodology/engine-parameters-v1.csv` | Insured, retained and renewal split; recurring premium cost |
| New weather events the companies report | Add a row to `my-work/week-5/methodology/calibration-events-v1.csv` with its file, line and verbatim quote | Keeps the calibration current |
| Answers to data requests | `my-work/week-5/fund-level/leave-behind/data/data-requests-v2.md` here; the live list is `my-work/week-5/fund-level/data-requests-v2.md` | Narrows the ranges |
| Assumptions | `my-work/week-5/methodology/engine-parameters-v1.csv` (numbers) and `assumptions-register-v2.csv` (basis) | Change a number only with a recorded decision, and keep low ≤ central ≤ high by loss |

Public hazard data only needs re-fetching when its source publishes a new release. The vintages are in `my-work/week-5/fund-level/inputs/fetched/fetch-log-v1.csv`, `climate-fetch-log-v1.csv` and `downloads-log-v1.csv`; the last of these lists each download's link and sha256.

## Order of the scripts

All scripts are in `my-work/week-5/pipeline/`.

| Step | Script | Writes |
|---|---|---|
| 1 | `fetch-public-sources-v2.py`, `fetch-climate-cmra-v1.py` (only for a new data release) | `my-work/week-5/fund-level/inputs/fetched/` |
| 2 | `extract-downloads-v1.py`, `extract-hazus-valuation-v1.py` (only after new downloads; pass the download folders as arguments, and run with `python3 -I`) | NOAA, Hazus and FAST extracts |
| 3 | `build-join-key-map-v1.py`, `build-site-flood-status-v2.py` | Join keys, flood status by site |
| 4 | `build-synthesis-v1.py` | Site exposure, supplier layers, logic notes |
| 5 | `build-register-v1.py` | Vulnerability register, regions, plausibility |
| 6 | `engine-v1.py` | Grid, presets, stack, expected loss, register v2 (ranked) |
| 7 | `replay-calibration-v1.py` | Calibration replay and groups |
| 8 | `levers-v1.py` | Lever results, captive flag, Target B screen |
| 9 | `sensitivity-v1.py` | `my-work/week-5/fund-level/leave-behind/sensitivity-v1.csv` |
| 10 | `build-dashboard-v1.py` | `my-work/week-5/fund-level/physical-risk-dashboard-v1.html` and its data file |
| 11 | `build-leave-behind-v1.py` | Assumption ledger, reference-data index, `data/` copies, lineage |

If only financials, the report date or assumptions changed, start at step 6.

## How to check the result

1. Run the checks for the Results gate:
   ```
   python3 my-work/framework/kernel-v2/kit_tools.py --week-dir my-work/week-5 check --gate G2 --dry
   ```
   These checks matter most:
   - `calibration-band`: every tested event within 0.5 to 2 times;
   - `page-matches-grid`: the page shows exactly what the engine wrote;
   - `page-script-syntax`;
   - `checks-independent`;
   - `lint`.
2. Run the seeded tests:
   ```
   python3 my-work/week-5/pipeline/test-calibration-band-v1.py
   python3 my-work/week-5/pipeline/test-page-checks-v1.py
   ```
   Each must end "ALL SEEDS CAUGHT". They show the checks still catch a corrupted input or output.
3. Open the page in a browser. Check that the draft banner is gone once the report date is set.
4. Record what changed in the week's record:
   - each run cited in a journal entry;
   - each decision in the decision log, in the decider's words;
   - each in-place edit in `my-work/week-5/record/changelog-v1.csv`.

## When a check fails

- **Calibration.** A failure means the engine no longer reproduces what a company reported. Find the cause before touching a prior, and record any prior change as a decision.
- **Any other check.** A failure means an output and its source disagree. Re-run from the step that wrote the source.
