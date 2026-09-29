# Technical Execution Log

## Project
Terapias Bogotá - AI-Assisted Lead Triage

## Purpose
This log consolidates the material technical commands and verification steps used during the controlled prototype. Routine navigation commands such as `cd` and `dir` are omitted unless relevant to evidence.

## 1. Salesforce CLI Environment
The local CLI wrapper used during the project was `sf-lts`.

### List authenticated organizations
```text
sf-lts org list
```

A troubleshooting variant was used when connection-status checking caused delays:
```text
sf-lts org list --skip-connection-status
```

### Display the target organization
```text
sf-lts org display --target-org mi-org
```

### Open the target organization
```text
sf-lts org open --target-org mi-org
```

### Browser-based reauthorization, only when required
```text
sf-lts org login web --alias mi-org --set-default
```

Sensitive authentication output, MFA codes, passwords, access tokens, and refresh tokens are intentionally excluded from this log.

## 2. Salesforce Connectivity Verification
### Basic Account query
```text
sf-lts data query --query "SELECT Id, Name FROM Account LIMIT 5" --target-org mi-org
```

### Basic Lead query
```text
sf-lts data query --query "SELECT Id, FirstName, LastName, Email, Phone, Status FROM Lead LIMIT 5" --target-org mi-org
```

## 3. AI Lead Data Model Verification
After the custom Lead fields were created, the model was verified with SOQL:

```text
sf-lts data query --query "SELECT Id, FirstName, LastName, Requested_Service__c, Request_Type__c, AI_Category__c, AI_Confidence__c, AI_Reason__c, AI_Reviewed__c, AI_Accepted__c FROM Lead LIMIT 5" --target-org mi-org
```

Verified custom fields:
- `Requested_Service__c`
- `Request_Type__c`
- `AI_Category__c`
- `AI_Confidence__c`
- `AI_Reason__c`
- `AI_Reviewed__c`
- `AI_Accepted__c`

## 4. Salesforce Metadata Retrieval
The project entered the `salesforce` DX directory and retrieved the seven custom Lead fields individually.

Representative commands:
```text
..\sf-lts project retrieve start --metadata "CustomField:Lead.Requested_Service__c" --target-org mi-org
..\sf-lts project retrieve start --metadata "CustomField:Lead.Request_Type__c" --target-org mi-org
..\sf-lts project retrieve start --metadata "CustomField:Lead.AI_Category__c" --target-org mi-org
..\sf-lts project retrieve start --metadata "CustomField:Lead.AI_Confidence__c" --target-org mi-org
..\sf-lts project retrieve start --metadata "CustomField:Lead.AI_Reason__c" --target-org mi-org
..\sf-lts project retrieve start --metadata "CustomField:Lead.AI_Reviewed__c" --target-org mi-org
..\sf-lts project retrieve start --metadata "CustomField:Lead.AI_Accepted__c" --target-org mi-org
```

Metadata was verified under:
```text
salesforce/force-app/main/default/objects/Lead/fields/
```

Retrieved field files:
```text
AI_Accepted__c.field-meta.xml
AI_Category__c.field-meta.xml
AI_Confidence__c.field-meta.xml
AI_Reason__c.field-meta.xml
AI_Reviewed__c.field-meta.xml
Request_Type__c.field-meta.xml
Requested_Service__c.field-meta.xml
```

## 5. Repository Safety Controls
### Confirm repository root
```text
git rev-parse --show-toplevel
```

### Inspect repository state
```text
git status
```

### Inspect changes without staging
```text
git diff -- TestPage/ai/prompts/triage_v3.md
git diff -- TestPage/evaluation/README.md
```

### Restore accidentally modified evidence files
```text
git restore TestPage/ai/prompts/triage_v3.md
git restore TestPage/evaluation/README.md
```

The root `.gitignore` was configured to exclude local or sensitive artifacts including:
```text
.sf/
**/.coda/
*-diagnosis.json
sf-lts.cmd
TestPage/.git-terapias-backup/
node_modules/
```

The project deliberately avoided broad `git add .` commands while evidence was being assembled.

## 6. Evidence Commits
Material commits observed in the project history include:

```text
dc28a46 docs: add measured AI business value evidence
68fd3a8 docs: add AI governance and human review controls
c0a4cb9 test: complete AI triage v3 evaluation
14b942c refactor: distinguish general hours from booking availability in v3
af43244 test: evaluate AI triage v2 and document regression
76e85b6 refactor: refine AI triage availability rules in v2
03efc7c test: evaluate AI triage v1 and document errors
805d838 test: record AI triage v1 predictions
00d82e1 feat: add baseline AI triage prompt v1
1f1f59b test: add AI triage dataset and ground truth
7b30016 feat: add Salesforce AI lead triage data model
```

The exact current commit hashes can be reconfirmed at any time with:
```text
git log --oneline
```

## 7. Human-in-the-Loop Salesforce Verification
Two controlled Lead scenarios were queried together:

```text
sf-lts data query --query "SELECT Id, LastName, Request_Type__c, Requested_Service__c, AI_Category__c, AI_Confidence__c, AI_Reviewed__c, AI_Accepted__c FROM Lead WHERE LastName LIKE 'AI Test%TB019' ORDER BY LastName" --target-org mi-org
```

Observed scenario A, accepted V3 recommendation:
```text
Last Name: AI Test TB019
Request Type: Appointment
Requested Service: Terapia a domicilio
AI Category: Appointment
AI Confidence: 0.96
AI Reviewed: true
AI Accepted: true
```

Observed scenario B, corrected historical V1 recommendation:
```text
Last Name: AI Test V1 TB019
Request Type: Appointment
Requested Service: Terapia a domicilio
AI Category: Information
AI Confidence: 0.82
AI Reviewed: true
AI Accepted: false
```

## 8. Duplicate Test Record Cleanup
A duplicate historical V1 test Lead was identified by ID and creation time.

An initial delete attempt incorrectly supplied a date instead of a Salesforce record ID and returned an invalid ID length error. No record was deleted by that failed command.

The duplicate was then deleted using its 18-character Lead ID:
```text
sf-lts data delete record --sobject Lead --record-id 00Qbm00000sIbBhEAK --target-org mi-org
```

The human-review query was rerun and confirmed exactly two evidence records remained.

## 9. AI Evaluation Execution Record
Evaluation artifacts provide the durable execution record for AI classification:

```text
ai/prompts/triage_v1.md
evaluation/results_v1.csv
evaluation/error_analysis_v1.md

ai/prompts/triage_v2.md
evaluation/results_v2.csv
evaluation/error_analysis_v2.md

ai/prompts/triage_v3.md
evaluation/results_v3.csv
evaluation/evaluation_summary.md
```

Observed complete classification results:
```text
V1: 28/30 = 93.33%
V2: 29/30 = 96.67%
V3: 30/30 on the controlled synthetic dataset
```

## 10. Useful Value Measurement
Source artifact:
```text
evaluation/value_measurement.csv
```

Observed controlled 10-case timing pilot:
```text
Manual total: 17 seconds
Manual average: 1.7 seconds per case
AI-assisted total: 10 seconds
AI-assisted average: 1.0 second per case
Observed relative time reduction: 41.18%
```

Manual classification quality in the same pilot:
```text
Request Type: 8/10 = 80%
Requested Service: 7/10 = 70%
Complete classification: 7/10 = 70%
```

AI-assisted recommendations accepted during the timing pilot:
```text
10/10
```

## 11. Known Limitations
- This is a controlled prototype, not a production deployment.
- Evaluation data is synthetic.
- Timing data is based on 10 cases and one reviewer.
- The reviewer had prior familiarity with the evaluation cases.
- The V3 30/30 result is not a universal accuracy claim.
- Full raw terminal history is not guaranteed to be preserved by Git; this file records the commands material to the evidence chain.

## 12. Verification Commands for Final Review
```text
git status
git log --oneline
```

Salesforce evidence check:
```text
sf-lts data query --query "SELECT Id, LastName, Request_Type__c, Requested_Service__c, AI_Category__c, AI_Confidence__c, AI_Reviewed__c, AI_Accepted__c FROM Lead WHERE LastName LIKE 'AI Test%TB019' ORDER BY LastName" --target-org mi-org
```
