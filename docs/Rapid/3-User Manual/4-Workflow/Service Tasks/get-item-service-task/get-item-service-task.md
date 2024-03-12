# Get Item Service Task

## Purpose

This service task type represents the ability to add any RAPID item from the site to the ledger of the process run. This will put the full item profile for that item in there and allow it to be accessed through any expressions aswell as rules added to sequence flows.

##  Required Properties

- Full item profile for the item specified

## Completes

If the item defined is successfully fetched   
Causes the following:

1. Minilith Adds the full item profile for the fetched item to the ledger
2. Marks the activity as completed
3. Token moves on

## Errors on

- ID fails to resolve - invalid fetch item
- List cannot be found
- Expression for ID returns not a number
- Item not found (invalid ID or does not exist)