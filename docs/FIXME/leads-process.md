# Leads Process

### Overview

The Rapid CRM module offers an in-built lead process designed to streamline lead management. The primary objective of this process is to facilitate effective communication between the sales team and potential leads. In instances where the initial contact attempt fails, the process ensures that follow-up tasks are set up to maintain engagement with the lead until successful contact is established or the lead is determined to be unresponsive.

### Process Details

The lead process is initiated upon the **creation** of a lead and encompasses the following sequential steps:

1. **Sales Team Task to contact lead:** A task is generated for the sales team to contact the lead. This task includes an embedded form with relevant lead details. Upon entering this stage, the sales team is presented with two options: 
    1. **Established Contact:** If the sales team successfully connects with the lead, they are required to update the status field from 'new' to the most appropriate category and subsequently mark the task as complete. This action signifies the conclusion of the "Contact Lead" process.
    2. **No Contact Made:** In scenarios where the sales team fails to establish contact with the lead, they should leave the status as 'new' and select a future "Recontact Lead" date before completing the task. This action triggers the creation of another task aimed at re-establishing contact with the lead on the specified "Recontact Lead" date. Alternatively, if no date is selected, a new task will be automatically generated seven days from the current date for further follow-up.