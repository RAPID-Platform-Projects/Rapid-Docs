# Intermediate Timer Event

## Purpose

The most basic timer event is used when a token needs to wait for any period of time before continuing on past the timer element

## Required Properties

- Scheduled For
- Completed On
- Status

## Completes

When hangfire posts back for job that is related to the timer and should cause the below knockons

1. Timer element set to completed state
2. Token moves on

## Errors on

- Invalid expression to resolve the time
- Hangfire returns an error