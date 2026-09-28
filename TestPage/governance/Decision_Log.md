# AI Decision Log

## Decision 001 - Administrative Scope

### Decision

AI is limited to administrative classification.

### Reason

The project seeks CRM operational value rather than
clinical decision support.

---

## Decision 002 - Exclude Clinical Decisions

### Decision

AI must not provide:

- diagnosis;
- treatment recommendations;
- clinical assessment;
- determination of medical urgency.

### Reason

These activities are outside the purpose and acceptable
risk level of this prototype.

---

## Decision 003 - Synthetic Evaluation Data

### Decision

The evaluation uses synthetic requests.

### Reason

The classifier can be evaluated without exposing real
patient or customer information.

---

## Decision 004 - Ground Truth Before AI Testing

### Decision

Ground Truth was defined and versioned before V1
predictions were generated.

### Reason

This prevents changing expected answers to match AI
predictions.

---

## Decision 005 - Full Regression Testing

### Decision

Every prompt version is evaluated against all 30 cases.

### Reason

Testing only previously failed cases could hide new
regressions.

### Evidence

V2 corrected TB019 and TB026 but introduced a regression
in TB007.

---

## Decision 006 - Preserve Human Authority

### Decision

AI recommendations and human decisions are represented
separately.

### Salesforce Controls

- AI_Reviewed__c
- AI_Accepted__c

### Reason

AI assists the workflow but does not own the final
decision.

---

## Decision 007 - Preserve Ground Truth

### Decision

Ground Truth is not modified when an AI prediction
disagrees with it.

### Reason

Changing evaluation labels after seeing model outputs
would compromise evaluation integrity.

---

## Decision 008 - Interpret V3 Result Conservatively

### Observation

V3 correctly classified 30/30 cases in the controlled
synthetic evaluation.

### Decision

Do not describe the system as universally 100% accurate.

### Reason

The evaluation set is small, synthetic and specific to
the defined administrative taxonomy.

---

## Decision 009 - Stop Prompt Refinement at V3

### Decision

Do not continue creating V4, V5 and additional prompt
versions solely to optimize the existing test set.

### Reason

Repeated optimization against the same dataset increases
the risk of overfitting the evaluation.

The next step is operational validation with human
oversight rather than further optimization against the
same 30 examples.

---

## Decision 010 - Operationalize with Human Review

### Decision

Move the validated V3 classification workflow toward
Salesforce operationalization using human review.

### Reason

The objective is useful business value from AI-assisted
workflow execution, not benchmark optimization.