# Corrective Actions

When an [Incident Report](</docs/Rapid/2-Rapid Modules/8-WHS/1-incidents/1-incidents.md>) has been submitted, the WHS team may wish to record corrective actions that were applied.

![A screenshot of the Incident Report item page. The screenshot is annotated with a red box to highlight the location of the "Corrective Actions" data table component, at the bottom of the Incidents item details page.](<Corrective Actions Table Highlighted.png>)

The **Corrective Actions** data table is hidden by default on the **Sidebar**. However, the item page for each **Incident Report** will provide access to this data table, so that you can log corrective actions against the current **Incident Report** that is opened.

## Creating a New Corrective Action

To create a new **Corrective Action**:

1. Ensure you are viewing the **Details** page of an **Incident** (pictured above).
2. Press the **New Corrective Action** button in the table's [Command Bar](</docs/Rapid/3-User Manual/glossary/glossary.md#command-bar>)

![A screenshot showing the location and appearance of the "New Corrective Action" button in the Corrective Actions table's Command Bar. The button reads "New Corrective Action" and has an icon of a lightning bolt that is overlaying several lines or list items.](<New Corrective Action.png>)

3. The **New Corrective Action** create screen will open in a side panel
4. Enter the details for the **Corrective Action**
5. Press **+ Create** or **Create and Open** at the top of the side panel

![A screenshot of the "New Corrective Action" create screen. At the top is a large navy header that reads "Corrective Action". There is also a cross in the upper left corner for closing the side panel. Underneath is the usual command strip buttons which read: "+ Create", "Create and Open", and "Undo Changes". Beneath this are the fields for the corrective action plan. These fields are: "Solution", "Who", "When", and "Incident Factors".](<New Corrective Action Example.png>)

## Corrective Action Process

- When a new **Corrective Action** item is created, a task will automatically be assigned to the user listed in the *Who* lookup field, and they will be notified.

- The title of this task will read `WHS: Corrective Action - Solution`. However, `Solution` will be replaced with the text that was entered into the *Solution* field of the **Corrective Action**.

![A screenshot of the task generated automatically by a new Corrective Action being created. The title of the task reads: "WHS: Corrective Action - Provide adequate lighting in the stairwell". ](<Corrective Action Task.png>)

> An example task assigned to a user for actioning.

- The task also provides a **Rapid Form Link**, so that the user can add additional notes if required.

![A screenshot of the Adaptive form that is generated for users, if required. The form does not contain a summary of the incident, but instead provides a solution field, and then requires notes to be supplied from the user and the Completed status of the form to be set to the date that the solution was implemented.](<Corrective Action Form.png>)

- When the task's status has been set to *Completed*, a confirmation task will be sent to the WHS team to check that the **Corrective Action** has been completed correctly.

The confirmation task will contain an [Embedded Form](</docs/Rapid/3-User Manual/2-Explorer/3-Pages/2-Page Components/Embedded Forms/Embedded Forms.md>) to assist the WHS team in confirming the **Corrective Action**.

![A screenshot of a user task titled "Check that corrective action #0000032 has been implemented." The layout of the task is identical to a regular task, however, there is an embedded form included on the right of the Task Details. The form is titled "Corrective Actions Details" and has the following fields and values: "Corrective Action Code":"#000032", "Completed":"Thu May 30 2024", "Incident":"INCIDENT - 00000034", "Solution":"Provide adequate lighting in the stairwell."](<Example Confirmation Task.png>)

> An example confirmation task for a **Corrective Action**. The title of the confirmation task will read:
> *"Check that corrective action #000000 has been implemented."*

## Viewing a Corrective Action

To view a **Corrective Action**:

1. Ensure you are viewing the **Details** page of an **Incident**
2. Select the **Corrective Action** from the data table at the bottom of the **Details** page

![A screenshot of the Corrective Actions data table. The screenshot is annotated with a red box to indicate the location of a Corrective Action item in the table. The item reads: "000032", ""Provide adequate lighting in the stairwell", "Stacy Queen", "Lighting", "Open".](<Corrective Action Item.png>)

The **Corrective Action** item page will resemble the following:

![A screenshot depicting the appearance of the Corrective Action item page. The fields that are present on this page are detailed in the table below.](<Corrective Action Item Page.png>)

Each new corrective action is automatically allocated an **Action Code** ID number. Below is a list of the fields present in the **Corrective Action** item, and what they are used for:

| Field | Description |
| --- | --- |
| **Status** | Used to describe the state of the corrective action. I can be set to *Open*, *Completed and Unchecked*, *Closed* and *Archived*. |
| **Who** | A lookup field to indicate who is responsible for the **Corrective Action** and making sure it is implemented. This person will receive a generated task as a reminder to complete the **Corrective Action**. |
| **When?** | When the incident occurred. |
| **Incident** | This is a lookup field connected to the **Incident** item. This field should be automatically connected to an **Incident** when the **Corrective Action** is created using the data table on an **Incident** details page. |
| **Incident Factors** | Here the WHS Team can indicate an incident factor that will be addressed by the **Corrective Action**. |
| **Completed** | The date that the **Corrective Action** is completed. |
| **Solution** | A text field with the description of what is needed to solve the issue. |