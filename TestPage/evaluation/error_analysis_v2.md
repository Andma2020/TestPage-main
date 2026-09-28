# AI Triage V2 - Error Analysis

## Evaluation Summary

Total test cases: 30

### Request Type

Correct: 29
Incorrect: 1
Accuracy: 96.67%

### Requested Service

Correct: 30
Incorrect: 0
Accuracy: 100%

### Complete Classification

Both Request Type and Requested Service correct:

29 / 30

Complete classification accuracy:

96.67%

---

## Comparison with V1

### V1

Request Type Accuracy: 93.33%

Requested Service Accuracy: 100%

Complete Classification Accuracy: 93.33%

### V2

Request Type Accuracy: 96.67%

Requested Service Accuracy: 100%

Complete Classification Accuracy: 96.67%

### Observed Improvement

Request Type:

+3.33 percentage points

Complete Classification:

+3.33 percentage points

Requested Service remained unchanged at 100%.

---

## V1 Errors Corrected

### TB019

V1:

Information

Result:

FAIL

V2:

Appointment

Result:

PASS

---

### TB026

V1:

Information

Result:

FAIL

V2:

Appointment

Result:

PASS

---

## Regression Introduced in V2

### TB007

Message:

¿Cuáles son los horarios disponibles para fisioterapia?

Expected Request Type:

Information

V1:

Information

Result:

PASS

V2:

Appointment

Result:

FAIL

Expected Service:

Fisioterapia

V2 Service:

Fisioterapia

Service Result:

PASS

---

## Regression Analysis

V2 successfully corrected the ambiguity identified in
TB019 and TB026.

However, the new availability rule is too broad.

Prompt V2 interprets language related to "horarios disponibles"
as scheduling intent.

The Ground Truth distinguishes between:

1. General questions about service schedules or hours.

2. Availability for receiving a service during a specific
   period.

These two situations require different classifications.

---

## Human Assessment

V2 represents a measurable improvement over V1.

Complete classification accuracy increased from:

93.33%

to:

96.67%

However, V2 introduced a regression in TB007.

The appropriate response is not to modify the Ground Truth.

Instead, the classification rule should be refined again.

---

## Proposed V3 Rule

Information should be used when the customer asks about:

- general operating hours;
- general service schedules;
- how a service works;
- general characteristics of a service.

Appointment should be used when the customer:

- explicitly requests a booking;
- requests an appointment;
- asks about availability for receiving a specific service
  during a specific period;
- asks about availability for a specific visit or session.

Examples:

"¿Cuáles son los horarios disponibles para fisioterapia?"

→ Information

"¿Tienen disponibilidad para rehabilitación esta semana?"

→ Appointment

"¿Tienen disponibilidad para una visita a domicilio?"

→ Appointment

---

## V3 Objective

V3 should preserve the V2 corrections for TB019 and TB026
while correcting the TB007 regression.

The same 30-case Ground Truth dataset will be used again.

No changes will be made to the Ground Truth.