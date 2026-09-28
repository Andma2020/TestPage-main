# AI Triage Evaluation Summary

## Evaluation Dataset

Total cases:

30

Data type:

Synthetic administrative requests.

The Ground Truth was defined and versioned before
the AI evaluation.

The same dataset and Ground Truth were used to
evaluate V1, V2 and V3.

---

# V1

## Request Type

Correct: 28 / 30

Accuracy: 93.33%

## Requested Service

Correct: 30 / 30

Accuracy: 100%

## Complete Classification

Correct: 28 / 30

Accuracy: 93.33%

## Observed Problem

V1 incorrectly classified TB019 and TB026 as Information.

Both requests concerned availability for receiving a
specific service.

---

# V2

## Request Type

Correct: 29 / 30

Accuracy: 96.67%

## Requested Service

Correct: 30 / 30

Accuracy: 100%

## Complete Classification

Correct: 29 / 30

Accuracy: 96.67%

## Improvement

V2 corrected:

- TB019
- TB026

However, V2 introduced a regression:

- TB007

TB007 asked about general available hours for
physiotherapy.

V2 incorrectly interpreted this as appointment intent.

---

# V3

## Request Type

Correct:

30 / 30

Accuracy:

100%

## Requested Service

Correct:

30 / 30

Accuracy:

100%

## Complete Classification

Correct:

30 / 30

Accuracy:

100%

---

# Refinement Result

| Metric | V1 | V2 | V3 |
|---|---:|---:|---:|
| Request Type | 93.33% | 96.67% | 100% |
| Requested Service | 100% | 100% | 100% |
| Complete Classification | 93.33% | 96.67% | 100% |

The progression demonstrates measurable refinement:

V1
→ evaluation
→ error analysis
→ V2
→ regression testing
→ error analysis
→ V3

---

# Key Refinement

The primary classification challenge involved
distinguishing:

General service schedules

from:

Availability for receiving a service during a
specific period.

V3 introduced an explicit semantic distinction.

General service hours:

→ Information

Specific availability for receiving a service:

→ Appointment

---

# Evaluation Limitation

The V3 result must not be interpreted as evidence that
the AI system has universal 100% accuracy.

The evaluation contains:

- 30 cases;
- synthetic data;
- controlled categories;
- a specific administrative use case.

The result demonstrates that V3 correctly classified
all cases contained in this controlled evaluation set.

Additional testing would be required before broader
production use.