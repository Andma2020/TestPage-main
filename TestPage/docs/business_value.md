# Business Value Evidence

## Project

Terapias Bogotá - AI-Assisted Lead Triage

## Objective

Evaluate whether AI-assisted administrative classification
can provide measurable value while preserving human review.

---

# Classification Quality

The AI workflow was evaluated using a controlled synthetic
dataset containing 30 administrative requests.

## V1

Complete classification accuracy:

93.33%

## V2

Complete classification accuracy:

96.67%

## V3

Complete classifications correct:

30 / 30

This result applies only to the controlled synthetic
evaluation dataset and does not imply universal 100%
accuracy.

---

# Human Review Demonstration

Two operational scenarios were implemented in Salesforce.

## Accepted Recommendation

AI Test TB019

AI Category:

Appointment

Final Request Type:

Appointment

AI Reviewed:

TRUE

AI Accepted:

TRUE

---

## Corrected Recommendation

AI Test V1 TB019

AI Category:

Information

Final Request Type:

Appointment

AI Reviewed:

TRUE

AI Accepted:

FALSE

This demonstrates that AI provides recommendations while
the human reviewer retains authority over the final CRM
classification.

---

# Controlled Timing Pilot

A 10-case timing pilot compared:

1. Manual classification from scratch.
2. Human review of an AI-generated V3 recommendation.

## Manual Classification

Total time:

17 seconds

Average time:

1.7 seconds per case

## AI-Assisted Review

Total time:

10 seconds

Average time:

1.0 second per case

## Observed Difference

Average reduction:

0.7 seconds per case

Observed relative reduction:

41.18%

---

# Manual Classification Quality

Manual Request Type accuracy:

8 / 10

80%

Manual Requested Service accuracy:

7 / 10

70%

Complete manual classification accuracy:

7 / 10

70%

---

# AI-Assisted Acceptance

AI recommendations accepted during the timing pilot:

10 / 10

Acceptance rate:

100%

---

# Observed Value

Within this controlled pilot, AI assistance demonstrated
potential value in two areas:

1. Reduced administrative classification time.

2. More consistent use of the defined classification
   taxonomy.

The AI workflow also preserved human decision authority
through explicit review and acceptance controls in
Salesforce.

---

# Limitations

The timing pilot has important limitations:

- Only 10 requests were measured.
- The requests were synthetic.
- A single project author performed the review.
- The reviewer had previous familiarity with the dataset.
- The measured classification times were very short.
- The experiment does not represent a production workload.
- The V3 result must not be generalized as universal
  100% accuracy.

The results therefore demonstrate value within the
controlled prototype rather than production-level
performance.

---

# Conclusion

The controlled prototype provides evidence that
AI-assisted administrative classification can improve
classification consistency and reduce handling effort
while maintaining human oversight.

Broader testing with independent reviewers and realistic
production-like requests would be required before making
production performance claims.