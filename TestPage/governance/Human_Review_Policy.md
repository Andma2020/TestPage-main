# Human Review Policy

## Purpose

This policy defines how AI-generated administrative
classifications are reviewed before being treated as
validated Salesforce CRM information.

---

## Principle

AI provides recommendations.

A human retains authority over the final administrative
classification.

---

## AI Recommendation

The AI can recommend:

- Request Type
- Requested Service
- AI Category
- Confidence
- Reason

The recommendation does not constitute a medical,
clinical or treatment decision.

---

## Salesforce Review Fields

The workflow uses:

AI_Reviewed__c

and:

AI_Accepted__c

---

## Review States

### Pending Review

AI_Reviewed__c = FALSE

AI_Accepted__c = FALSE

Meaning:

The AI recommendation has not yet been validated by
a human.

---

### Recommendation Accepted

AI_Reviewed__c = TRUE

AI_Accepted__c = TRUE

Meaning:

A human reviewed the AI recommendation and determined
that it is appropriate.

---

### Recommendation Corrected or Rejected

AI_Reviewed__c = TRUE

AI_Accepted__c = FALSE

Meaning:

A human reviewed the AI recommendation but did not
accept it as the final CRM classification.

The human-approved classification takes precedence.

---

## Human Reviewer Responsibilities

The reviewer must:

1. Read the original request.
2. Inspect the AI recommendation.
3. Confirm that the recommendation concerns only
   administrative classification.
4. Accept or correct the classification.
5. Avoid using the AI output as medical guidance.

---

## Escalation

Requests that require medical judgment must not be
resolved through the administrative AI classifier.

Such requests must follow the appropriate professional
or organizational process.

---

## Production Principle

The controlled evaluation result does not justify
removing human oversight.

Human review remains a governance control until broader
testing and organizational approval justify a different
operating model.