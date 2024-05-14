# Leads Process

The Rapid **CRM** module offers an in-built lead process designed to streamline lead management. The primary objective of this process is to facilitate effective communication between the sales team and potential leads. In instances where the initial contact attempt fails, the process ensures that follow-up tasks are set up to maintain engagement with the lead until successful contact is established or the lead is determined to be unresponsive.

## Process Details

The lead process is initiated upon the **creation** of a Lead and encompasses the following sequential steps:

1. **New Lead Task generated:** A task is generated for the sales team to contact the lead. This task includes an embedded form with all relevant lead details. For more details on viewing and actioning tasks please see this documentation: [Editing Tasks](</docs/Rapid/2-Rapid Standard/1-Tasks/creating-editing-and-deleting-tasks/creating-editing-and-deleting-tasks.md>)

2. **Next Steps:** Upon entering this stage, the sales team is presented with two options: 
    - **Established Contact:**
    If the sales team successfully contacts the lead, they are required to update the status field from 'new' to the most appropriate category and subsequently mark the task as complete. This action signifies the conclusion of the "Lead" process.
    - **No Contact Made:**
    In scenarios where the sales team fails to establish contact with the lead, they should leave the status as 'new' and complete the task. This action triggers the creation of another task aimed at re-establishing contact with the lead (generated seven days from the current date).

![A screenshot demonstrating a task that contains the "Lead Details" embedded form as part of the "Contact New Lead" process that is automatically generated. The screenshot is annotated with a red box to highlight the "Complete" button, and with a red box to highlight the location of the embedded form. The embedded form has the following fields that appear: "Full Name: David Jones", "Mobile Phone: 0400 000 000", "Email: jones@jones.com", "Status: New".](<Form Details.png>)