# Email

## Purpose

The email service task enables the sending of emails. It supports the adding of attachements if given a drive, folder and drive item ID

## Required Properties

- Status of service task (need to know if it errored in sending the email)

## Completes

If the email is successfully sent and minilith gets a OK from Microsoft Graph

1. Set status of element to Complete
2. Token moves on

## Errors on

- Email To address is invalid
- Any expression cannot be resolved
- Invalid From address