# Call Activities

## Purpose

The intent of a call activity is to enable the execution of another process run from the context of the current process run. It is also important to be able to parse data into the called process run (inputs)

## Required Properties

- The ledger of the called process run
- Any outputs defined on the called process run

## Completes

When any end event is visited and there are no active tokens on the called process run

1. Add any outputs of the called process run to the ledger of hte parent process
2. Add the full ledger to the ledger of the parent process - maybe under an object called 'calledProcesses'
3. Mark the call activity as Completed
4. Token moves on

## Errors on

- Invalid diagram attempting to be called
- Input expression failing to resolve
- Called process errors on any element (and an exception path was not taken)