# Leads Process

### Overview

The Rapid CRM module offers an in-built lead process designed to streamline lead management. The primary objective of this process is to facilitate effective communication between the sales team and potential leads. In instances where the initial contact attempt fails, the process ensures that follow-up tasks are set up to maintain engagement with the lead until successful contact is established or the lead is determined to be unresponsive.

### Process Details

The lead process is initiated upon the **creation** of a Lead and encompasses the following sequential steps:

**1. New Lead Task generated:** A task is generated for the sales team to contact the lead. This task includes an embedded form with all relevant lead details. For more details on view and actioning tasks please see this documentation: [Editing Tasks](../../../1-Tasks/creating-editing-and-deleting-tasks.md)

![Contact Lead Task](<Screenshot 2024-03-12 at 3.07.36 pm.png>)

**2. Next Steps:** Upon entering this stage, the sales team is presented with two options: 
    
**i. Established Contact:** If the sales team successfully contacts the lead, they are required to update the status field from 'new' to the most appropriate category and subsequently mark the task as complete. This action signifies the conclusion of the "Lead" process.

**ii. No Contact Made:** In scenarios where the sales team fails to establish contact with the lead, they should leave the status as 'new' and complete the task. This action triggers the creation of another task aimed at re-establishing contact with the lead (generated seven days from the current date).