# AI Triage V1 - Error Analysis

## Evaluation Summary

Total test cases: 30

### Request Type

Correct: 28
Incorrect: 2
Accuracy: 93.33%

### Requested Service

Correct: 30
Incorrect: 0
Accuracy: 100%

### Complete Classification

Both Request Type and Requested Service correct:

28 / 30

Overall complete classification accuracy:

93.33%

---

## Results by Difficulty

### Easy

18 / 18 complete classifications correct

Accuracy: 100%

### Medium

8 / 10 complete classifications correct

Accuracy: 80%

### Hard

2 / 2 complete classifications correct

Accuracy: 100%

The Hard subset contains only two cases, so this result
should not be interpreted as evidence that V1 performs
better on Hard cases than Medium cases.

---

## Incorrect Cases

### TB019

Message:

Quiero saber si tienen disponibilidad para una visita a domicilio.

Expected Request Type:

Appointment

Predicted Request Type:

Information

Expected Service:

Terapia a domicilio

Predicted Service:

Terapia a domicilio

AI Confidence:

0.82

Result:

Request Type: FAIL
Requested Service: PASS

---

### TB026

Message:

¿Tienen disponibilidad para rehabilitación esta semana?

Expected Request Type:

Appointment

Predicted Request Type:

Information

Expected Service:

Rehabilitación

Predicted Service:

Rehabilitación

AI Confidence:

0.84

Result:

Request Type: FAIL
Requested Service: PASS

---

## Error Pattern Identified

Both classification failures involve customers asking
about service availability.

Prompt V1 interpreted availability questions as
Information requests.

However, the Ground Truth defined these requests as
Appointment because the customer is asking about
availability for receiving a specific service.

---

## Root Cause Hypothesis

Prompt V1 defines the available Request Type values but
does not define the semantic difference between:

- Information
- Appointment

As a result, availability requests can reasonably be
interpreted as either category.

The classification rule is therefore underspecified.

---

## Human Assessment

The problem should not be corrected by adding individual
examples for TB019 and TB026.

Instead, Prompt V2 should introduce an explicit business
rule that defines how availability requests are classified.

Proposed distinction:

Information:

The customer is requesting general information about
a service without expressing scheduling intent.

Appointment:

The customer requests a booking or asks about availability
for receiving a specific service or session.

---

## Confidence Observation

The two incorrect Request Type predictions also had
relatively lower confidence values:

TB019: 0.82

TB026: 0.84

This observation may support evaluating a confidence-based
human review threshold in a future iteration.

No threshold will be introduced based solely on these two
cases.

---

## Proposed V2 Refinement

Prompt V2 should:

1. Explicitly define Appointment.
2. Explicitly define Information.
3. Establish a business rule for availability requests.
4. Preserve the existing Requested Service taxonomy.
5. Preserve the restriction against medical diagnosis,
   treatment recommendations, and clinical assessment.

The Ground Truth dataset will remain unchanged.

V2 will be evaluated against exactly the same 30 cases
to allow direct comparison with V1.