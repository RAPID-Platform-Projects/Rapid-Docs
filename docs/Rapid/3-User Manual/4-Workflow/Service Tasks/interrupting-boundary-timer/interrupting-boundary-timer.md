# Interrupting Boundary Timer

## Purpose

Simply put, it allows setting a timeout on any activity. If the activity that the boundary timer is attached to is not completed when the time set lapses, the token should move on through the exception path created through the boundary timer.

## Required Properties

- Scheduled For
- Completed On
- Status

## Completes

When hangfire posts back for job that is related to the timer. Should cause the below knock-on effects

1. The timer's state changes to completed
2. Any activity attached to the timer is set to discarded
3. Token moves on from the boundary timer's outgoing sequence flow

## Errors on

- Invalid expression to resolve the time
- Hangfire returns an error