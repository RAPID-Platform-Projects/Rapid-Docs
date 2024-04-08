# User Task

## Purpose

The user task is an executable task which creates an item in the corresponding RAPID Site, when the process hits a user task the process run will be waiting for the created task to be set to Completed before the process continues

## Required Properties

- Full task item profile (Minilith will send the full definition of the task to workflow to add that to the ledger)
- Embedded Form profile (Minilith will need to send all item profiles of the embedded form items when the task is completed) 
    - There can be many embedded forms on a user task so this slot must be an array

## Completes

The token should move on if the task status is set to completed. Should cause the following knock on effects

1. Minilith sends the completed task profile to the ledger 
    1. If there are embedded forms, post the full item profile of those embedded form items to the ledger as well
2. Status of the user task element set to Completed in the ledger
3. Any boundary event attached to the user task should be set to discarded (boundary timers etc)
4. Token moves on

## Errors on

A user task can be in an errored state if the

- Parent ID cannot resolve
- Any expression fails to resolve
- Invalid linked items
- Invalid embedded form definition  
    - Existing form fails to resolve the ID
    - Expression for list or item ID fail to resolve
    - Invalid linked item on the embedded form item
- Invalid embedded file definition 
    - Missing drive ID
    - Missing Folder ID
    - Expression for either the drive, folder or item fail to resolve