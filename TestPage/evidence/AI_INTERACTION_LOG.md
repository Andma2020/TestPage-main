# AI Interaction Log

## Project
Terapias Bogotá - AI-Assisted Lead Triage

## Purpose
This log summarizes the material AI interactions that shaped the prototype. It intentionally excludes repetitive troubleshooting and sensitive authentication information.

## Phase 1 - Problem Definition
AI collaboration was used to shape an administrative classification use case for the existing Terapias Bogotá project and Salesforce.

Human decision:
- Limit AI to administrative CRM classification.
- Preserve human authority over the final classification.
- Exclude medical diagnosis, treatment recommendations, clinical assessment, and medical urgency decisions.

## Phase 2 - Salesforce Data Model
The proposed workflow was translated into Salesforce Lead fields for business classification, AI recommendations, confidence, rationale, and human review.

Implemented fields:
- `Requested_Service__c`
- `Request_Type__c`
- `AI_Category__c`
- `AI_Confidence__c`
- `AI_Reason__c`
- `AI_Reviewed__c`
- `AI_Accepted__c`

Human decision:
AI recommendation and human acceptance were deliberately represented as separate fields.

## Phase 3 - Evaluation Dataset and Ground Truth
Thirty synthetic administrative requests were prepared. Ground Truth was defined and versioned before the first AI prediction run.

Human decision:
The Ground Truth would not be modified after seeing AI results.

Primary artifacts:
- `evaluation/cases.csv`
- `evaluation/ground_truth.csv`

## Phase 4 - Prompt V1
Artifact:
- `ai/prompts/triage_v1.md`

Observed result:
- Complete classification accuracy: 28/30 = 93.33%
- Requested Service accuracy: 30/30 = 100%

Failures:
- TB019
- TB026

Human finding:
The boundary between `Information` and `Appointment` was underspecified for availability-related requests.

## Phase 5 - Prompt V2
Artifact:
- `ai/prompts/triage_v2.md`

Refinement:
Availability for receiving a specific service was made an explicit scheduling signal.

Observed result:
- Complete classification accuracy: 29/30 = 96.67%
- Requested Service accuracy: 30/30 = 100%

Corrections:
- TB019 corrected
- TB026 corrected

Regression:
- TB007 changed from a correct `Information` classification in V1 to an incorrect `Appointment` classification in V2.

Human finding:
The new availability rule was too broad and confused general service hours with specific booking availability.

## Phase 6 - Prompt V3
Artifact:
- `ai/prompts/triage_v3.md`

Refinement:
V3 explicitly distinguished:
- general service hours or schedules -> `Information`
- availability to receive a service during a specific period -> `Appointment`

Observed result:
- Request Type: 30/30
- Requested Service: 30/30
- Complete classification: 30/30

Interpretation:
The 30/30 result applies only to the controlled synthetic evaluation dataset. It is not evidence of universal 100% accuracy.

Human decision:
Stop prompt refinement at V3 rather than continue optimizing against the same dataset, reducing the risk of evaluation overfitting.

## Phase 7 - Governance
Governance artifacts were created to document risks, human review, and design tradeoffs:
- `governance/AI_Risk_Assessment.md`
- `governance/Human_Review_Policy.md`
- `governance/Decision_Log.md`

Key principle:
AI recommends. A human retains final administrative authority.

## Phase 8 - Salesforce Operationalization
Two Salesforce Lead scenarios were used to demonstrate both branches of human review.

### Accepted V3 recommendation
- AI Category: Appointment
- Final Request Type: Appointment
- AI Confidence: 0.96
- AI Reviewed: TRUE
- AI Accepted: TRUE

### Corrected historical V1 recommendation
- AI Category: Information
- Final Request Type: Appointment
- AI Confidence: 0.82
- AI Reviewed: TRUE
- AI Accepted: FALSE

The corrected scenario reused a genuine historical V1 failure rather than inventing an artificial error.

## Phase 9 - Useful Value Measurement
A controlled 10-case pilot compared manual classification from scratch with review of V3 recommendations.

Observed timing:
- Manual total: 17 seconds
- Manual average: 1.7 seconds per case
- AI-assisted total: 10 seconds
- AI-assisted average: 1.0 second per case
- Observed relative reduction: 41.18%

Manual quality in the same pilot:
- Request Type accuracy: 8/10 = 80%
- Requested Service accuracy: 7/10 = 70%
- Complete manual accuracy: 7/10 = 70%

AI-assisted review:
- Recommendations accepted: 10/10

Limitations:
The timing pilot is small, synthetic, single-reviewer, and affected by prior familiarity with the evaluation cases.

## Interaction Pattern Demonstrated
The project followed this sequence:

`Problem Definition -> Ground Truth -> V1 -> Evaluation -> Human Analysis -> V2 -> Regression Testing -> Human Analysis -> V3 -> Governance -> Salesforce Operationalization -> Value Measurement`

## Conclusion
AI collaboration was used as an iterative engineering process rather than a one-shot content-generation activity. Human judgment determined the problem scope, evaluation standard, refinement decisions, governance constraints, and final operational controls.
