# Evidence Index

## Project
Terapias Bogotá - AI-Assisted Lead Triage

## Purpose
This index maps each assessment criterion to the concrete evidence artifacts in the repository.

## 1. Interaction
Primary evidence:
- `ai/prompts/triage_v1.md`
- `ai/prompts/triage_v2.md`
- `ai/prompts/triage_v3.md`
- `evidence/AI_INTERACTION_LOG.md`

What it demonstrates:
- Iterative AI collaboration.
- Prompt changes tied to observed failures rather than arbitrary rewriting.
- A traceable sequence from baseline to refined solution.

## 2. Evaluation
Primary evidence:
- `evaluation/cases.csv`
- `evaluation/ground_truth.csv`
- `evaluation/results_v1.csv`
- `evaluation/results_v2.csv`
- `evaluation/results_v3.csv`
- `evaluation/evaluation_summary.md`

What it demonstrates:
- 30-case controlled synthetic dataset.
- Ground Truth defined before AI evaluation.
- Consistent scoring across V1, V2, and V3.

Observed complete classification results:
- V1: 93.33%
- V2: 96.67%
- V3: 30/30 on the controlled synthetic dataset.

## 3. Refinement
Primary evidence:
- `evaluation/error_analysis_v1.md`
- `evaluation/error_analysis_v2.md`
- `ai/prompts/triage_v2.md`
- `ai/prompts/triage_v3.md`

What it demonstrates:
- V1 failures TB019 and TB026 were analyzed.
- V2 corrected both failures.
- Full regression testing detected a new V2 failure in TB007.
- V3 was designed specifically to preserve the V2 corrections while fixing the regression.

## 4. Operationalization
Primary evidence:
- Salesforce Lead custom field metadata under `salesforce/force-app/main/default/objects/Lead/fields/`
- `evidence/EXECUTION_LOG.md`
- Salesforce controlled test Leads.

Implemented Salesforce fields:
- `Requested_Service__c`
- `Request_Type__c`
- `AI_Category__c`
- `AI_Confidence__c`
- `AI_Reason__c`
- `AI_Reviewed__c`
- `AI_Accepted__c`

Operational scenarios:
1. V3 recommendation accepted by a human.
2. Historical V1 recommendation corrected by a human.

## 5. Judgment and Governance
Primary evidence:
- `governance/AI_Risk_Assessment.md`
- `governance/Human_Review_Policy.md`
- `governance/Decision_Log.md`

What it demonstrates:
- AI limited to administrative classification.
- Medical diagnosis, treatment advice, clinical assessment, and medical urgency excluded.
- Human retains final decision authority.
- Ground Truth remains unchanged after evaluation begins.
- V3 results are interpreted conservatively.
- Prompt refinement stops at V3 to reduce overfitting risk.

## 6. Useful Value
Primary evidence:
- `evaluation/value_measurement.csv`
- `docs/business_value.md`

Controlled 10-case pilot:
- Manual average: 1.7 seconds per case.
- AI-assisted average: 1.0 second per case.
- Observed relative reduction: 41.18%.
- Manual complete classification accuracy: 70%.
- V3 recommendations accepted during timing pilot: 10/10.

Important limitation:
These results describe a small controlled pilot and are not production performance claims.

## 7. Technical Execution / Reproducibility
Primary evidence:
- `evidence/EXECUTION_LOG.md`
- Git history (`git log --oneline`)
- Salesforce DX metadata.

Material Git sequence:
`Salesforce model -> Ground Truth -> V1 -> Evaluation V1 -> V2 -> Evaluation V2 -> V3 -> Evaluation V3 -> Governance -> Business Value`

## 8. Final Deliverables
Recommended primary submission:
- `Terapias_Bogota_AI_Evidence_Pack_FINAL_EN_COMPACT.pdf`

Optional supporting deliverables:
- Spanish final Evidence Pack.
- Editable DOCX version.
- Repository URL.

## 9. Sensitive Information Policy
Do not include in the public evidence package:
- Salesforce passwords.
- MFA verification codes.
- Access or refresh tokens.
- Client secrets.
- Local authentication directories.

The repository `.gitignore` is used to exclude local authentication and tooling artifacts.

## 10. Reviewer Navigation Order
Recommended review sequence:
1. Final Evidence Pack PDF.
2. `EVIDENCE_INDEX.md`.
3. `AI_INTERACTION_LOG.md`.
4. `evaluation/evaluation_summary.md`.
5. `evaluation/error_analysis_v1.md` and `error_analysis_v2.md`.
6. Governance files.
7. `EXECUTION_LOG.md`.
8. Salesforce metadata.
9. Git commit history.
