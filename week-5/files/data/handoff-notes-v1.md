# Week 5 to Week 6 handoff (v1, 16 October 2026)

Week 6 writes an S2-style climate disclosure for Northwood from the Week 5 evidence. This note is for the fresh session that starts Week 6. It gives position, judgment and traps only. Facts are in the record: `python3 my-work/framework/kernel-v2/kit_tools.py --week-dir my-work/week-5 query <id>`. It supersedes the headline figures in `my-work/week-5/handover/build-kickoff-notes-v2.md`, which predate D-5-69 to D-5-77.

## Position

- **G1 and G2 are signed and frozen** (`my-work/week-5/record/freeze-G1-v1.json`, `my-work/week-5/record/freeze-G2-v1.json`, 46 files).
- **G3 freezes this note and `my-work/week-5/fund-level/friday-answers-v1.md`.**
- **Report date:** 16 October 2026 (D-5-77, manifest v6). No output is provisional.
- **Red team:** stays deferred and may be dropped (D-5-16, D-5-76).
- **Records:** decisions D-5-1 to D-5-77; findings F-001 to F-014, all fixed.
- **Process note:** several calls were made by Claude under Daniel's delegation and are logged that way: D-5-65, D-5-73, D-5-74, D-5-75, A-48 and the lever verdict rule. Week 6 should treat them as decided but open to Daniel.

## Where the evidence is

| Disclosure need | Week 5 source |
|---|---|
| Physical risks, by hazard and region, and which companies they touch | `my-work/week-5/fund-level/register/vulnerability-register-v2.csv` (223 rows, ranked by 1-in-50 gross loss, archetype per row) |
| Scenario analysis and resilience | Seven presets and the builder grid. Figures in `my-work/week-5/fund-level/engine/outputs-v1.csv`; grid in `my-work/week-5/fund-level/engine/grid-hazard-v1.json` and `my-work/week-5/fund-level/engine/grid-dependency-v1.json` |
| Current and anticipated financial effects | Event loss by channel; who pays (insured, retained, renewal); covenant flags; recurring cost at exit and × exit multiple (`outputs-v1.csv`, engine summary) |
| Time horizons | The hold period to each exit (Week 4 model) and the buyer's horizon, about 2035 to 2040. The buyer's horizon changes recurring heat cost only (method note, section 10) |
| Risk management: how risks are found and ranked | `my-work/week-5/fund-level/leave-behind/method-note-v1.md`, sections 3 and 9; the plausibility rule A-01 |
| Actions and transition of the response | `my-work/week-5/fund-level/levers/lever-results-v1.csv` (verdicts, owners, timing against exits); captive flag and Target B screen in `my-work/week-5/fund-level/levers/portfolio-levers-v1.json` |
| Assumptions, sources, sensitivity and limits | `my-work/week-5/fund-level/leave-behind/assumption-ledger-v1.csv`, `reference-data-index-v1.csv`, `sensitivity-v1.csv`; calibration in `my-work/week-5/fund-level/engine/calibration-groups-v1.csv`; method note section 10 |
| Data gaps to disclose | `my-work/week-5/fund-level/data-requests-v2.md` (DR-1 to DR-13) |

**Mapping to IFRS S2.** The likely homes for this evidence:

- physical risks and their time horizons: paragraphs 10 to 12;
- current and anticipated financial effects: paragraphs 15 to 21;
- climate resilience and scenario analysis: paragraph 22;
- risk management: paragraph 25;
- the cross-industry metric for assets or business activities vulnerable to physical risks: paragraph 29(b).

Check every paragraph reference against the standard's text before citing it.

## Headline figures (frozen, quote from the files)

- **"Do nothing" stack:** $6.6M – $18.2M – $40.7M over the hold.
- **Expected loss:** $1.95M – $6.04M – $13.1M a year.
- **Worst single event:** the Central Valley drought, $11.1M, at Harvest Ridge. It breaches the assumed covenant in the central case.
- **Gulf landfall:** $6.97M across five companies. Pinnacle's share is $3.53M; its high-case breach was removed by A-49 (D-5-73).
- **Recurring cost at exit:** $3.13M a year today, rising to $10.5M on the buyer's horizon.
- **Captive flag:** on, with retained expected loss of $3.10M a year.

The Friday answers say which of these to lead with.

## Judgment to carry

- **Disclose gross losses; label who pays as synthesised.** Insurance is synthesised by rule (DR-1). In an S2 text, keep it separate from the gross losses, which do not depend on it.
- **A covenant flag is a finding about headroom, not a statement about a lender.** Seven of ten covenants are assumed (A-32). Say so wherever a flag appears.
- **Keep these limitations visible** (method note, section 10):
  - hurricane hits every site in a region at once;
  - Ridgeline's project slippage is not modelled (D-5-72);
  - Keystone's session data is inconsistent with its revenue (D-5-71, DR-13);
  - each figure's own range need not add across columns.
- **Northwood framing still governs** (CLAUDE.md). The disclosure should read as a decision about money, not a compliance exercise. Every paragraph should tie to EBITDA, deal risk or exit readiness.

## Traps

- **Do not edit frozen G2 files.** A change needs a new version, a decision, a downstream re-run and a fresh sign-off. The `frozen-unchanged` check enforces this. Week 6 should read the Week 5 outputs, not rebuild them.
- **The dashboard HTML is about 830 thousand tokens. Never open it.** Use `my-work/week-5/fund-level/dashboard-data-v1.json`, or a reading copy made from the rendered page (`my-work/week-5/packets/reading-copies/` holds the G2 ones).
- **The preview server cannot read OneDrive.** Serve a copy from `/tmp/northwood-preview` (the `static` launch configuration). That server also accepts a POST to `/save-reading-copy`.
- **The re-run order and the clean re-run check depend on the table in `my-work/week-5/fund-level/leave-behind/re-run-note-v1.md`.** Keep its format if it is ever versioned.
- **In zsh, `echo ====` fails.** Quote globs. Python is 3.9.
