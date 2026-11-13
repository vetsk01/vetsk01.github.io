# Week 5 Friday answers (v1, report date 16 October 2026)

Answers to the four Friday questions in the Week 5 deck (`_teaching-materials/week-5/kith-climate-cohort-week5-physical-risk-deck-v2.html`, slide 8). Every figure is quoted from the frozen G2 outputs (`my-work/week-5/record/freeze-G2-v1.json`):

- the dashboard: `my-work/week-5/fund-level/physical-risk-dashboard-v1.html`;
- the data behind it: `my-work/week-5/fund-level/dashboard-data-v1.json`;
- the engine outputs: `my-work/week-5/fund-level/engine/outputs-v1.csv`.

Ranges are low – central – high. All losses are gross loss, which here means contribution never recovered plus the cost of recovery.

## 1. Our number

**$18.2M over the hold, with a range of $6.6M – $18.2M – $40.7M.** This is the severe-but-plausible "do nothing" figure across all ten companies:

- a Gulf landfall at 1-in-50;
- an Ohio Valley and Mid-Atlantic winter storm at 1-in-50;
- the chronic cost to each company's exit.

The two events were chosen by a written rule, not by hand: the two events that hit several companies at once with the highest loss, from different hazard families (D-5-31, D-5-47). Northwood's ten companies earn $260.9M EBITDA a year between them.

Beside it, never added to it:

- **Expected loss a year: $6.04M ($1.95M – $13.1M).** This is probability-weighted across every plausible hazard on today's climate. Over each company's hold it comes to $12.6M ($3.96M – $26.8M).
- **Recurring cost at exit: $3.13M a year today ($1.74M – $4.91M), rising to $10.5M on a buyer's horizon of about 2035 to 2040 ($5.83M – $17.2M).** At exit multiples, today's figure is $27.1M of value a buyer may normalise away.
- **The worst single event: a two-season Central Valley drought, $11.1M ($4.66M – $21.0M).**
  - It falls on Harvest Ridge alone, through California input prices. It is 49% of Harvest Ridge's EBITDA in the central case, and none of it is insured.
  - It breaches Harvest Ridge's covenant in the central case. That covenant is assumed (A-32; terms requested in DR-7), but the breach holds whether the assumed cushion is 25%, 30% or 35%.

**The range we would stand behind.**

- **The central figures.** The engine reproduces seven of the companies' own 2023 to 2026 events within 0.5 to 2 times what they reported, so day-to-day downtime is calibrated.
- **The high end is driven by assumptions, not by events.** Two priors move it most:
  - drought pass-through (A-15) moves Harvest Ridge's drought loss from $8.52M to $13.6M;
  - supplier outage weeks (A-07) move the Gulf landfall from $4.60M to $9.71M.
- **The low end assumes everything goes well at once.** Treat it as a floor, not a forecast.

## 2. Monday morning

What Sarah does differently, from the lever table on the dashboard (each verdict follows one stated rule; owners are real Northwood roles):

1. **Ask each company for its insurance schedule and renewal dates (DR-1).** This one request unlocks the top-ranked lever: a portfolio property programme, about $4.98M of exit value for a $75K design cost, if renewals can be aligned. It also unlocks:
   - the captive study: retained expected loss is $3.10M a year across the ten, against a $2M trigger (A-40);
   - the broker quotes for Pinnacle's two transfer options.
2. **Harvest Ridge: qualify second sources for its two sole-source inputs** (Nashville flavour, Fresno organic). Verdict "Do now":
   - value protected $979K for a cost of $200K;
   - $2.21M of retained loss avoided in a 1-in-50 flood;
   - it removes a covenant flag.
   - Owner: Thomas Chen (deal lead). In place before the 2029 exit.
3. **Sterling: replace Akron's R-22 HVAC unit** at the company's own $180K estimate. Verdict "Do now". Owners: David Okafor and James Harrison.
4. **Sterling: hold more superalloy stock rather than qualify a second source.**
   - Sterling exits in about 12 months, and qualifying a second Inconel source takes 9 to 24 months, so that move goes to the buyer's plan.
   - Eight more weeks of stock costs $277K over the hold and protects $325K of retained loss in a 26-week outage.
5. **Do not buy plant generators.** $2.4M per company shows no benefit in the engine: in a regional winter storm the suppliers are down too.
6. **Price the climate exposure into Clearview's Target B (Houston).** It loses $1.40M ($537K – $2.65M) in a 1-in-50 Gulf landfall, which is 26% of its EBITDA in the central case. Its expected loss is $224K a year. Owner: Priya Kapoor.

## 3. Our weakest assumption

**The insurance programme behind every "who pays" figure is synthesised, not seen (A-17 to A-21; DR-1).** The data room has no insurance schedules. Deductibles, sublimits, waiting periods and contingent cover are set by rule for each company. That rule decides:

- the insured and retained split in every scenario;
- every covenant flag;
- the captive trigger;
- the value of the two Pinnacle transfer levers;
- why Sterling's superalloy outage looks mostly covered. Its gross loss is $2.19M, but only $436K is retained, because we assumed contingent business-interruption cover on a named sole supplier.

Gross losses do not depend on this assumption. Who pays them does. We would defend it last.

## 4. The data we wish existed

**First: the insurance schedules and renewal dates for all ten companies (DR-1).**

- **What it closes:** the weakest assumption above. It turns the transfer levers and the captive study into decisions.
- **What it costs:** a request from Northwood's CFO to each company's broker for documents they already hold. That is days of time, not money.

Next, in order of how far they would narrow the ranges:

- **DR-2:** Sterling's superalloy stock and the time to qualify an alternate source. These set the 26-week outage.
- **DR-7:** covenant terms for the seven companies without them in the data room. These decide whether a flag is a breach.
- **DR-10:** street addresses for the 62 points the data room places only by city. These decide flood status.

The full list, with who holds each item, is in `my-work/week-5/fund-level/data-requests-v2.md`.
