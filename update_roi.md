1) File & backup

Open: src/components/ROICalculator.tsx

Make a quick backup copy of the file (e.g., ROICalculator.backup.tsx) so you can diff if needed.

2) Rename/organize state

Goal: move away from a row‑based model to a workflow model.

Remove or deprecate the following state/props (if present):

rowsPerMonth

dataQuality / “quality multipliers”

Any baseHoursPer1000Rows constants

Add four new inputs (state) with sensible defaults:

reportsPerResellerPerMonth → default 4.33 (weekly files averaged per calendar month)

cleaningHours → default 1.0 (your “fast” clean for 50–100 rows)

consolidationHours → default 0.5 (merge to master/loader)

qaPercentage → default 15 (% time overhead for checks/rework)

3) Replace the manual‑hours formula

Remove any logic that computes manual hours from rows and quality multipliers.

Add this formula (keep names consistent with your codebase):

baseHoursPerReport = cleaningHours + consolidationHours

hoursPerReportWithQA = baseHoursPerReport * (1 + qaPercentage / 100)

manualHoursPerMonth = resellers * reportsPerResellerPerMonth * hoursPerReportWithQA

monthlyManualCost = manualHoursPerMonth * hourlyCost

monthlySavings = monthlyManualCost - monthlyCost
(where monthlyCost is the plan cost for the chosen tier)

firstYearNet = (monthlySavings * 12) - setupCost

roiFirstYearPct = (firstYearNet / setupCost) * 100

paybackMonths = setupCost / Math.max(1, monthlySavings)
(guard against divide‑by‑zero and negative savings)

Keep existing tier selection by reseller count; do not let tiers affect the time math.

4) Update the form UI (four new fields)

Add four labeled inputs, wired to state:

Reports per reseller per month (reportsPerResellerPerMonth)
Type number, min 0, step 0.01, default 4.33.

Cleaning hours per report (cleaningHours)
Type number, min 0, step 0.1, default 1.0.

Consolidation hours per report (consolidationHours)
Type number, min 0, step 0.1, default 0.5.

QA time (%) (qaPercentage)
Type number, min 0, step 1, default 15.

Remove inputs for rows, data quality, and any “minutes per 1,000 rows”.

5) Add short field help (inline helper text)

Under the inputs, add concise hints (single lines each):

Cleaning = reformatting + corrections inside each file.

Consolidation = merging into master sheet/DB and checks against totals.

QA (%) = time for validations, fixes, re‑submissions, and email follow‑ups.

6) Defaults that show believable ROI (but stay honest)

Set component defaults to:

resellers: keep your current user‑editable value

reportsPerResellerPerMonth = 4.33

cleaningHours = 1.0

consolidationHours = 0.5

qaPercentage = 15

hourlyCost: keep as user input (example: 50)

setupCost and monthlyCost: keep your current tier table

These defaults typically yield a payback ≈ 11 months for 11 resellers at €50/h (because you’re capturing the real consolidation/QA work, not just the “pure clean”).

7) Results section (clear outcomes)

Ensure the results block displays:

Manual hours/month

Manual cost/month

Subscription/month

Monthly savings (can be negative)

Payback (months) (show — if savings ≤ 0)

First‑year net and First‑year ROI %

Add basic color cues (e.g., green if monthlySavings > 0, red if ≤ 0).

8) Scenario presets (optional but powerful)

Add three small buttons that update the four time inputs at once:

Clean (fast): cleaning=0.8, consolidation=0.3, qa=10

Typical (recommended): cleaning=1.0, consolidation=0.5, qa=15

Messy (reality check): cleaning=1.5, consolidation=0.75, qa=25

Each button simply sets the corresponding state values, then re‑runs the calculation.

9) Input validation & guards

Clamp all numbers to >= 0.

If monthlySavings <= 0, show a neutral message (“Savings are negative at current settings. Try the Typical or Messy presets or review your hourly cost.”).

When computing payback, guard division by zero:
paybackMonths = monthlySavings > 0 ? setupCost / monthlySavings : Infinity
Render — for Infinity.

10) Remove dead code & copy updates

Delete any constants, helper functions, and UI tied to rows or quality multipliers.

Update any explanatory copy near the widget to this concise paragraph:

Cleaning one file is only part of the job. Most brands also spend time consolidating to a master, validating totals, and handling resubmissions. That’s why this calculator separates Clean, Consolidate, and QA time per report. Adjust them to match your team’s reality to see a more accurate payback.

11) Smoke‑test with quick numbers (sanity checks)

Use these fast tests in the browser:

Your pace (per reseller/week): clean=1.0, consolidation=0.5, qa=15%, reports=4.33, resellers=11, hourly=50.
Expect monthly savings to be positive and payback ≈ 10–12 months (tier/pricing dependent).

Edge: set qa=0, consolidation=0, clean=0.5, reports=1, verify calculator can show negative savings and payback —.

Stress: double resellers; manual cost should scale linearly; ROI should improve materially.