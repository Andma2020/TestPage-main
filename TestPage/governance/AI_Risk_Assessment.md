# AI Risk Assessment

## Project

Terapias Bogotá - AI-Assisted Lead Triage

## Purpose

This assessment documents the principal risks associated
with using AI to assist with administrative classification
of requests received by Terapias Bogotá.

The AI system is limited to administrative CRM
classification.

It is not intended for clinical decision making.

---

## Risk 1 - Incorrect Administrative Classification

### Risk

The AI can assign an incorrect Request Type or
Requested Service.

### Potential Impact

An incorrect classification could result in inaccurate
CRM data or incorrect administrative routing.

### Control

AI recommendations remain subject to human review.

Salesforce stores the review status separately through:

- AI_Reviewed__c
- AI_Accepted__c

### Residual Risk

Low during the controlled pilot because a human retains
authority over the final classification.

---

## Risk 2 - Medical Interpretation

### Risk

Requests may contain information related to health,
symptoms, therapy or medical conditions.

### Potential Impact

An AI system could incorrectly attempt to provide
clinical guidance.

### Control

The AI prompt explicitly prohibits:

- medical diagnosis;
- treatment recommendations;
- clinical assessment;
- determination of medical urgency.

The AI is used exclusively for administrative
classification.

---

## Risk 3 - Personal and Sensitive Information

### Risk

Production website submissions could contain personal
or health-related information.

### Control

The evaluation dataset uses synthetic requests.

No real patient, customer, medical or personally
identifiable information is required for the evaluation.

Production integration must follow approved privacy
and data-handling practices.

---

## Risk 4 - Overconfidence

### Risk

A high confidence value does not guarantee that an AI
classification is correct.

### Evidence

V1 generated incorrect classifications even when the
model provided relatively high confidence values.

### Control

Confidence is treated as supporting information rather
than proof of correctness.

Human review remains the final control.

---

## Risk 5 - Overgeneralization from Evaluation Results

### Risk

V3 correctly classified all 30 cases in the controlled
evaluation dataset.

This result could incorrectly be interpreted as evidence
of universal 100% accuracy.

### Control

The result is documented only as:

30/30 correct classifications on the controlled
synthetic evaluation dataset.

Additional testing is required before broader or
autonomous production use.

---

## Risk 6 - Prompt Regression

### Risk

A prompt modification intended to correct one problem
can introduce new classification errors.

### Evidence

V2 corrected TB019 and TB026 but introduced a regression
in TB007.

### Control

Every prompt version is evaluated against the complete
test set rather than only against previously failed cases.

---

## Overall Risk Position

The AI workflow is appropriate for controlled
administrative assistance provided that:

1. Human review remains available.
2. Medical decision making remains out of scope.
3. Sensitive information is appropriately protected.
4. AI outputs are monitored and periodically evaluated.
5. Evaluation results are not generalized beyond the
   tested context.