# Week 4 data files

Portfolio edition: Kith Climate cohort case, fictional client. These are the CSV files delivered with the Week 4 work for Northwood Capital, unchanged, so the re-run steps still work. Report date 9 October 2026.

## Read this first

- **`carbon_expected_loss_usd` (in `exposure-summary-v6.csv`) is not a carbon cost.** It is the customer carbon-data requirement line plus the small carbon-price scenario for that company. For example, Sterling's 5,452,054 is 5,443,750 (customer requirement) plus 8,304 (carbon-price scenario). The pages show carbon price as a scenario, left out of every total.
- Expected loss is chance-weighted: the dollar impact if the event happens, times its chance over the remaining hold, per year. The company total is the sum of its lines, excluding the carbon-price scenario.
- "Revenue not yet won" appears in the files as `hope to win`; it is not in earnings and is never counted at exit.
- Notes columns sometimes cite ids such as D-4-37 or A-19. These point to entries in the Week 4 decision and assumption logs, the project record behind the work.
- Amounts are US dollars unless a column says otherwise. A dagger (†) on the pages marks a Kith estimate (grade C).

## Files

### [connected-dataset-lineage-v4.csv](connected-dataset-lineage-v4.csv)

Where each value in the connected dataset came from: file, line and grade.

Columns: `company_slug`, `field`, `value`, `unit`, `period`, `file`, `line`, `source_ref`, `file_sha256_12`, `data_grade`, `basis`, `note`

### [connected-dataset-v4.csv](connected-dataset-v4.csv)

Each company's Week 3 carbon footprint beside its financials (revenue, EBITDA, margin, exit multiple, remaining hold).

Columns: `company_slug`, `week3_slug`, `spine_slug`, `sector`, `acq_date`, `priority_company`, `carbon_period`, `scope1_t_co2e`, `scope2_t_co2e`, `scope12_t_co2e_low`, `scope12_t_co2e_base`, `scope12_t_co2e_high`, `scope12_t_co2e_base_ownership`, `carbon_label`, `financial_period`, `ltm_revenue_usd_m`, `ltm_adj_ebitda_usd_m`, `headcount`, `gross_margin_pct`, `gross_margin_period`, `exit_multiple`, `remaining_hold_n_years`, `gross_margin_pct_basis`, `exit_multiple_basis`, `remaining_hold_n_years_basis`

### [d4-matrix-v5.csv](d4-matrix-v5.csv)

Each exposure placed on the materiality matrix (likelihood band, severity band, priority).

Columns: `company_slug`, `risk`, `revenue_type`, `case`, `status`, `likelihood_band`, `severity_band`, `priority`, `impact_usd`, `p_annual_mid`, `expected_loss_mid_usd`, `expected_loss_low_edge_usd`, `expected_loss_high_edge_usd`, `note`

### [d4-summary-v5.csv](d4-summary-v5.csv)

Company totals: expected loss (mid, low, high, half lost) and the efficiency measures' cost, saving and exit value.

Columns: `company_slug`, `ltm_adj_ebitda_usd`, `measures_cost_usd`, `measures_saving_usd`, `measures_exit_value_usd`, `expected_loss_mid_usd`, `expected_loss_low_usd`, `expected_loss_high_usd`, `expected_loss_half_case_mid_usd`, `lines_not_quantified`, `company_plan_measure`, `note`

### [d5-initiatives-v6.csv](d5-initiatives-v6.csv)

Every initiative considered, with its source, cost and saving ranges.

Columns: `company_slug`, `initiative`, `source_kind`, `source_ref`, `status`, `fuel`, `cost_low_usd`, `cost_high_usd`, `savings_low_usd`, `savings_high_usd`, `eia_price_ratio`, `risk_addressed`, `risk_avoided_usd`, `risk_avoided_low_edge_usd`, `risk_avoided_high_edge_usd`, `exit_multiple`, `gas_flag`, `derivation`, `revenue_type`

### [d5-ranking-v6.csv](d5-ranking-v6.csv)

The initiative ranking: payback, NPV at 8, 10 and 15 percent, risk avoided and exit value effect.

Columns: `company_slug`, `rank`, `status`, `initiative`, `source_kind`, `n_years`, `cost_low_usd`, `cost_high_usd`, `savings_low_usd`, `savings_high_usd`, `case`, `cost_used_usd`, `savings_used_usd`, `savings_basis`, `escalation_rate`, `roi`, `payback_years`, `payback_exceeds_n`, `npv_8`, `npv_10`, `npv_15`, `risk_avoided_usd`, `exit_value_effect_usd`, `exit_lead`, `gas_flag`, `sensitivity_flag`, `npv_lineage`

### [d5-value-protected-v6.csv](d5-value-protected-v6.csv)

Cost of answering customers' carbon-data requests, and the expected loss it reduces.

Columns: `company_slug`, `action`, `revenue_type`, `what_the_customers_ask`, `components_in_base`, `optional_not_in_base`, `effort_days_low`, `effort_days_central`, `effort_days_high`, `day_rate_low_usd`, `day_rate_central_usd`, `day_rate_high_usd`, `cost_low_usd`, `cost_central_usd`, `cost_high_usd`, `value_protected_per_year_everything_lost_usd`, `value_protected_per_year_half_lost_usd`, `payback_days_central_vs_half_lost`, `payback_days_high_cost_vs_half_lost`, `exit_value_effect_what_if_usd`, `exit_value_effect_half_lost_what_if_usd`, `value_label`, `label`, `not_covered`, `source`

### [exposure-lines-v6.csv](exposure-lines-v6.csv)

The exposure model's workings: one row per company and risk (62 rows; Harvest Ridge has two extra water lines).

Columns: `company_slug`, `risk`, `label`, `status`, `period`, `indicator_level`, `indicator_fact`, `grade`, `dollar_suffix`, `flag_impact`, `flag_probability`, `lineage`, `note`, `period_ebitda`, `ltm_adj_ebitda_usd`, `report_date`, `impact_usd`, `impact_pct_ebitda`, `severity_band`, `one_off`, `likelihood_band`, `n_years`, `p_hold_midpoint`, `p_annual_mid`, `p_annual_low_edge`, `p_annual_high_edge`, `expected_loss_mid_usd`, `expected_loss_low_edge_usd`, `expected_loss_high_edge_usd`, `value_at_risk_what_if_usd`, `freq_own`, `freq_pooled`, `freq_fema`, `freq_range_per_year`, `band_own`, `band_pooled`, `band_fema`, `band_rubric`, `disagreement_flag`, `stability`, `expected_loss_rate_low_usd`, `expected_loss_rate_high_usd`, `impact_high_scope_usd`, `impact_pct_ebitda_high_scope`, `severity_band_high_scope`, `expected_loss_high_scope_usd`, `value_at_risk_half_lost_what_if_usd`, `revenue_type`, `case_everything_lost_expected_loss_usd`, `case_half_lost_impact_usd`, `case_half_lost_expected_loss_usd`, `half_lost_label`, `impact_low_usd`, `impact_high_usd`, `expected_loss_range_usd`, `gas_flag`, `impact_upper_bound_usd`, `uses_simulated`

### [exposure-summary-v6.csv](exposure-summary-v6.csv)

Expected loss a year per company, split by type of exposure.

Columns: `company_slug`, `ltm_adj_ebitda_usd`, `lines_quantified`, `customer_requirement_expected_loss_usd`, `physical_expected_loss_usd`, `energy_expected_loss_usd`, `insurance_expected_loss_usd`, `supplier_expected_loss_usd`, `water_expected_loss_usd`, `carbon_expected_loss_usd`, `largest_line`, `largest_line_revenue_type`, `largest_line_expected_loss_usd`, `note`

### [revision-benchmarks-v1.csv](revision-benchmarks-v1.csv)

Outside benchmarks used for grade C estimates, with source, URL and retrieval date.

Columns: `id`, `value`, `unit`, `n`, `source`, `url`, `vintage`, `retrieved`, `quote`, `use`

### [revision-validation-v1.csv](revision-validation-v1.csv)

How each benchmark estimate was cross-checked.

Columns: `estimate`, `method`, `input`, `cross_check`, `result`, `reading`

### [simulated-extended-data-v1.csv](simulated-extended-data-v1.csv)

A simulated water and site baseline for Harvest Ridge Foods, labelled SIMULATED and kept out of every other figure.

Columns: `company_slug`, `plant`, `city`, `parameter`, `value`, `unit`, `central`, `range_low`, `range_high`, `anchor`, `label`, `seed`, `preregistered_by`, `preregistration_date`
