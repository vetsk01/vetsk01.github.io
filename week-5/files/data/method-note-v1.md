# Physical climate risk for Northwood: method note (v1)

This note explains how the Week 5 physical-risk figures are built, so that Northwood can check, update or re-run them without Kith. It goes with the dashboard (`my-work/week-5/fund-level/physical-risk-dashboard-v1.html`), the assumption ledger (`my-work/week-5/fund-level/leave-behind/assumption-ledger-v1.csv`), the reference-data index (`my-work/week-5/fund-level/leave-behind/reference-data-index-v1.csv`), the result files in `data/`, and the re-run note (`my-work/week-5/fund-level/leave-behind/re-run-note-v1.md`). Every number on the dashboard is a row in one of those files; this note does not restate them.

## 1. What question each figure answers

The work answers Sarah Mitchell's three investment-committee questions for all ten portfolio companies:

1. **What could one bad event cost before exit?** Gross loss in a named event, who pays it (insured, retained, next renewal), and what it does to covenant headroom.
2. **What does physical risk cost on average each year, and is that rising?** Expected loss over each company's hold, and the recurring cost at exit on today's climate and on the buyer's horizon.
3. **Will the companies stay insurable at an acceptable price?** The premium path above a 3% non-climate trend, in the current and a hardened market, and the retained loss a captive could pool.

For each material risk the lever library gives a dollar value protected, a cost, the timing against the exit date, and a named Northwood owner.

## 2. Dating convention

- **Report date.** The figures carry the deliverable's real date, held as the manifest setting `report_date` and never typed into a script. Until it is recorded, the engine uses the run date and marks every output provisional (D-5-42).
- **Hold.** Each company's exit date comes from the Week 4 model: the Week 4 report date (9 October 2026) plus the company's `n_years` (D-4-170, D-4-174). The hold is the exit date minus the report date, with a one-year floor.
- **Age of a figure.** A figure's age runs from the end of the period it covers. Financials are the last twelve months to 31 January 2026, the data room's own date.
- **Reference data.** Public data carries its vintage (in the fetch logs) and is not flagged as stale. The cohort runs on the real calendar; the data room is fictional and its "today" is about 31 January 2026.

## 3. The chain: hazard, exposure, vulnerability, cost

The analysis starts from what each company depends on, not from hazard scores.

**Vulnerability register.** One row per dependency: each own site, each supplier, each client base, the workforce where heat matters, and shared infrastructure (Bowling Green's water). Each row carries:

- the revenue that depends on it (seeded where the data room has it, otherwise synthesised by rule);
- one of four archetypes assigned by written rule: can't produce, can't serve, can reroute, exposed through clients' assets;
- its region, hazards and flood status;
- its worst plausible 1-in-50 loss.

The data room's 1 to 5 hazard scores are the "before" picture only.

**Hazards and regions.** There are seven hazards: hurricane, flood, winter and ice, extreme heat, wildfire and smoke, drought, and severe convective storms. There are six regions: Gulf coast, Southeast Atlantic, Central Valley, Southwest, Mountain West, and Ohio Valley and Mid-Atlantic.

- A hazard and region pair is plausible only if its NRI annual frequency is above 0.01 in at least one county with a site or supplier there (A-01).
- Wildfire smoke is also allowed where a company's questionnaire names it (D-5-62).
- Severity has three levels: 1-in-10, 1-in-50 and 1-in-100. Base downtime is set at 1-in-50 and scaled by 0.4 and 1.6 (A-04).

**Exposure rules.**

- Hurricane hits every site in its region at once. This overstates the Gulf and Southeast Atlantic presets.
- A river flood hits each company's worst county or its single worst supplier, whichever loses more.
- A convective storm hits one site per company at 1-in-50 and the worst county at 1-in-100.
- Facility coordinates are the case's site locations. The FEMA flood zone at the coordinate sets flood status.
- Where the map and the company disagree (13 sites), or a point has only a city (62 points), the site is carried as a range from "not in zone" to "in zone" (D-5-56).

**Vulnerability.**

- Own-site downtime days come from priors by facility class and hazard (A-05), adjusted by event length.
- Field operations add client-driven days: Pinnacle's clients shut for 2 to 3 times the storm (A-06).
- Supplier outages last 1 to 26 weeks by severity (A-07). Stock, substitution by alternate status, and requalification time then apply (A-08, A-09, A-12).
- Physical damage uses FEMA Hazus depth-damage curves for flood and stated wind ratios (A-45).

**Cost.** Loss is contribution never recovered, plus the cost of recovery.

- Within the first four weeks of an outage (A-47), part of the lost revenue is recovered:
  - 50 to 90% for manufacturing, food, and the deferrable-work services, Pinnacle, Patriot and Ridgeline (A-30, A-49);
  - 0 to 20% for clinics and the other services.
- Recovered revenue goes on a separate cash-timing line.
- Recovery cost is 10 to 25% of the recovered contribution (A-31).
- One company's lost revenue in one event is capped at its revenue times the longest outage in that event.
- Nothing is netted: upside, if evidenced, is a separate line.

## 4. Who pays

No insurance schedules are in the data room (data request DR-1), so each company has a programme synthesised by rule (A-17 to A-21):

- an all-risk deductible by size band;
- a 2 to 5% named-storm deductible on coastal sites;
- flood sublimits;
- a 72-hour waiting period for business interruption;
- contingent business-interruption cover on named sole suppliers.

A hardened-market toggle doubles deductibles, sets the named-storm deductible to 5%, halves flood sublimits and removes contingent cover. After a claim, the next renewal steps up by 10 to 25% (A-23).

Insured and retained each report their own range, because cover only triggers in the worse cases. Gross = insured + retained holds within each case.

**Covenants.**

- Sterling, Trident and NovaCare have seeded covenants (D-5-49).
- For the other seven, the covenant level is entry leverage divided by one minus a 25 to 35% cushion (A-32).
- A scenario flags a breach when retained loss plus the renewal step exceeds the headroom. It also reports Northwood's own trigger: a cushion under 15% (`_reference/risk-framework.md`).

## 5. Recurring cost and exit value

Recurring cost a year at exit is the sum of four parts:

- premium growth above a 3% non-climate trend (seeded histories where they exist; A-24, A-25);
- heat productivity loss on outdoor and field labour (A-26, A-27, CMRA county hot-day projections);
- cooling and water uplift (A-28, A-46);
- in the hardened market only, higher retained deductibles.

It is shown on two horizons: the hold, to each exit, and the buyer's horizon (about 2035 to 2040). It is also multiplied by each company's exit multiple, as value a buyer may normalise away. One-off event cash and recurring cost times the multiple are always shown apart.

## 6. Presets, the do-nothing figures and the builder

**Presets.** Seven presets are fixed settings of the same engine:

1. Gulf landfall
2. Southeast Atlantic landfall
3. Sterling superalloy supplier outage, 26 weeks (D-5-67)
4. Central Valley drought, two seasons
5. Ohio Valley and Mid-Atlantic winter storm
6. Southwest heat summer
7. Hold-period "do nothing"

**The do-nothing preset** shows two figures that are never added together:

- **The severe-but-plausible stack.** The rule takes the two multi-company presets with the highest gross loss at 1-in-50, from different hazard families, counting a row hit by both once, and adds the chronic baseline over each hold (D-5-31, D-5-47).
  - The rule picks the Gulf landfall and the winter storm.
  - NRI ranks flood and convective higher by expected annual loss. Both are local hazards that do not stack across companies at 1-in-50, so their weight is in the expected loss (D-5-65).
- **Expected loss over the hold.** A trapezoid over 1-in-10, 1-in-50 and 1-in-100 for every plausible hazard and region, times each hold (spec s8).

**The builder** reads a precomputed grid. Hazard-led settings cover hazard × region × severity × length × market (768 plausible settings). Dependency-led settings cover each site and supplier × 2 to 26 weeks × market (2,020 settings). The page looks results up and does no arithmetic of its own (D-5-12).

## 7. Calibration

Nine events the companies reported for 2023 to 2026 were replayed through the engine with their actual sites, hazard, storm length and a severity fixed before the replay (1-in-10). Modelled lost-plus-delayed revenue was compared with the reported figure. A pass is 0.5 to 2 times (A-33). The results are in `my-work/week-5/fund-level/leave-behind/data/calibration-groups-v1.csv`.

- **First run:** five of nine passed.
- **Two priors were narrowed by decision:** food-plant winter downtime (D-5-69) and clinic hurricane downtime (D-5-70).
- **Two events are reported but not tested, by decision:**
  - Keystone (D-5-71): its session count and its reported revenue contradict each other, and data request DR-13 asks Keystone to resolve it.
  - Ridgeline (D-5-72): see limitations.
- **Final run:** all seven tested events pass.

An independent check (`my-work/week-5/checks/chk_calibration_band.py`) re-derives every replayed figure without using the engine.

## 8. Levers

Each lever in `my-work/week-5/fund-level/leave-behind/data/levers-v1.csv` names the input it changes and a cost range (A-35 to A-39, A-50; Akron's HVAC cost is seeded). The engine is re-run with each lever applied, for the lever's companies only (`my-work/week-5/fund-level/leave-behind/data/lever-results-v1.csv`).

For each lever:

- **Value protected** is expected loss avoided over the part of the hold after the lever is in place, plus recurring cost avoided times the exit multiple if it is in place before exit.
- **Ranking** is by value protected per dollar of cost over the hold.
- **Tail protection**, the retained loss avoided in a 1-in-50 event, is shown beside the value and never added to it.
- **Timing:** a lever that cannot be in place before exit is listed for the buyer's plan and earns no exit credit.

Two portfolio overlays sit beside the levers:

- **Captive feasibility flag:** retained expected loss across the ten against $2M a year (A-40).
- **Pipeline screen:** Clearview's Target B (Houston), run through the Gulf preset as a synthesised Clearview field site.

## 9. How far to trust it

- **Ranges.** Every output has a low, central and high. The wide-range priors (group 3 in D-5-48) are carried to every figure.
- **Sensitivity.** `my-work/week-5/fund-level/leave-behind/sensitivity-v1.csv` moves each group 3 prior from end to end with everything else at central. Drought pass-through (A-15) and supplier outage weeks (A-07) move the answers most. The Harvest Ridge covenant breach holds across the full covenant-cushion range (A-32).
- **Assumption ledger.** `my-work/week-5/fund-level/leave-behind/assumption-ledger-v1.csv` gives each assumption's treatment: calibrated, cited, a visible range with sensitivity, or accepted judgment.
- **Data requests.** `my-work/week-5/fund-level/leave-behind/data/data-requests-v2.md` lists every gap filled by a synthesised or assumed input, in priority order. The insurance schedules (DR-1), Sterling's superalloy stock and requalification (DR-2) and street addresses (DR-10) would narrow the ranges most.

## 10. Limitations

- **Hurricane hits every site in a region at once.** This overstates the Gulf and Southeast Atlantic presets for companies spread along the coast.
- **Project schedule slippage is not modelled.** Ridgeline's January 2026 storms deferred fit-out work for tenants by weeks, with no margin impact. The engine models closure days, not project slippage, so that event is reported but not tested (D-5-72). The effect is cash timing, not loss.
- **Insurance is synthesised.** Insured and retained splits, and the contingent business-interruption cover behind Sterling's superalloy result, are rules, not schedules (DR-1). Sterling's cover is a question to ask, not a reassurance.
- **Supplier layers for eight companies are synthesised** from their cost lines by sector template (A-41). Sterling's and Harvest Ridge's supplier files are seeded.
- **Flood status is a range** for 75 points (D-5-56), so the central flood figure is a midpoint, not a probability.
- **Each figure's low, central and high are its own lowest, middle and highest of the three cases.** For local floods and convective storms, a different county can be worst in each case. A company's channels, insured and retained then need not add to its gross column by column. Within each case they always do.
- **Keystone's clinic closure cost** rests on the spine revenue. The data room's session count implies about a third of that (DR-13).
- **Revenue per closure day uses calendar days.** Clinics and offices open about 250 days a year, so a closure on a working day may cost more than shown.
- **The buyer's horizon changes recurring heat cost only.** It uses CMRA county projections of days at or above 95°F for the 2030s and 2040s. The range runs across five model and scenario pairs: LOCA2 under SSP2-4.5, SSP3-7.0 and SSP5-8.5, and STAR under SSP2-4.5 and SSP5-8.5. The low case is the lowest of the five, the central case the median, the high case the highest. The hold period uses the 2020s. Event losses use today's climate on both horizons (spec s3).
- **Lever costs are stated judgment** (D-5-74). Broker quotes should replace the insurance pricing (A-39, A-50) when DR-1 is answered.
