# AI Evaluation Dataset

## Purpose

This dataset evaluates the AI-assisted administrative
classification workflow for Terapias Bogotá.

## Data Source

All requests contained in this dataset are synthetic.

No real patient, customer, medical, or personally
identifiable information is included.

## Evaluation Target

The AI must predict:

1. Request Type
2. Requested Service

## Allowed Request Types

- Appointment
- Information
- Reschedule
- Cancellation
- Other

## Allowed Services

- Fisioterapia
- Terapia a domicilio
- Rehabilitación
- Información general
- Otro

## Ground Truth

The expected classifications were defined before the
AI evaluation.

The ground truth must not be modified based on AI
predictions.

## Scope

The AI workflow is intended exclusively for
administrative CRM classification.

The AI must not:

- diagnose medical conditions;
- recommend treatment;
- determine clinical urgency;
- replace professional medical judgment.