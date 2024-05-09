# Incidents

## Digital Incident Report Form

**Incident Reports** can now be collected digitally, by sending users the URL to our **Digital Incident Report** form. User responses are then recorded in the Rapid database and can be acted upon by the WHS team. Rapid Standard comes packaged with the following Adaptive form prepared.

![A screenshot of the Incident Report form for Rapid. This form has the heading "Report Incident", and then the following fields for recording information: "Who is filling out this form?", "Date and Time", "Location", "Employees Impacted", "What anyone else impacted / involved?". Then there is a Description section with the fields: "What task was being performed at the time of the incident?" and "What happened?" Then there is a Factors section with the subheading: "use each of the lookups below to identify factors that may have contributed to the Incident." The fields after this are: "Environmental", "Equipment / Materials", "Work Systems" and "People". At the bottom of the form is a hCaptcha with a checkbox and the declaration "I am human." Finally, there is a submit button at the bottom of the form.](<Incident Form Collection.png>)

To access the **Incident Report** form:

1. Press **WHS** in the [Sidebar](</docs/Rapid/3-User Manual/glossary/glossary.md#sidebar>)

2. Select **Public Incident Form**

![A screenshot of the menu buttons that must be pressed in order to access the "Public Incident Form". The first button is a folder in the sidebar titled "WHS" and has an icon of a heart with an ECG line through its centre. The link to the form reads "Public Incident Form" and has the alert symbol: a triangle with an exclamation mark in its centre. Both items that have been pressed have a white background with blue text (as opposed to the unpressed menu items, which have a blue background and white text).](<Incident Form Menu.png>)

In a new browser tab, the incident form will open.

:::note[URL]
You can copy the URL from your browser window if the form needs to be accessed elsewhere (e.g. sending the link via email). Note that this form will create an item in the Rapid database, and that the form contains the names of your employees.
:::

## Incidents Table

Incidents entered into the digital **Incident Report** form are converted into database items, that can then be acted upon, edited, annotated, and have corrective actions applied. New incidents are added to the **Incidents** table in Rapid Standard.

### Accessing the Incidents Table

To access the **Incidents** table:

1. Press **WHS** in the [Sidebar](</docs/Rapid/3-User Manual/glossary/glossary.md#sidebar>)

2. Select **Incidents**

![A screenshot of the menu buttons that must be pressed in order to access the "Incidents" table. The first button is a folder in the sidebar titled "WHS" and has an icon of a heart with an ECG line through its centre. The link to the form reads "Incidents" and has the alert symbol: a triangle with an exclamation mark in its centre. Both items that have been pressed have a white background with blue text (as opposed to the unpressed menu items, which have a blue background and white text).](<Incident Table Menu.png>)

## Creating a New Incident

A new incident will be created when the **Public Incident Form** is completed and submitted. Alternatively, new **Incidents** can be recorded just like any other item.

To create an new **Incident** report:

1. Navigate to the **Incidents** data table (*this process is outlined above*)
2. Press the **New Incident** button in the table's [Command Bar](</docs/Rapid/3-User Manual/glossary/glossary.md#command-bar>)

![A screenshot showing the location and appearance of the "New Incident" button in the Incident table's Command Bar. The button reads "New Incident" and has an alert icon: a triangle with an exclamation mark at its centre. The screenshot is annotated with a red box to highlight the location of the button.](<New Incident.png>)

3. The **New Incident** create screen will open in a side panel
4. Enter the details of the **Incident**
5. Press **+ Create** or **Create and Open** at the top of the side panel

![A screenshot of the "New Incident" create screen. At the top is a large navy header that reads "New Incident". There is also a cross in the upper left corner for closing the side panel. Underneath is the usual command strip buttons which read: "+ Create", "Create and Open", and "Undo Changes". Beneath this are the fields for the incident report.](<New Incident Create.png>)

## Viewing Incidents

By default, the **Incidents** table contains the following columns for displaying incident items:
- *Incident Code* (the title field)
- *Date and Time*
- *Location*
- *Who is filling out this form?*
- *Status*
- *Employees Impacted*

![A screenshot of the "Incidents" table. The purpose of this image is to communicate to the reader the appearance of the table. The table is a standard Data Table, and contains the column headings listed above. There is some example data in the table, one item reads for example... Incident Code: "Incident - 000000334", Date and Time: "05/04/2024", Location: "Brisbane", Who is filling out this form?: "Joel Data", Status: "New", Employees Impacted: "Tom King, Jordan King".](<Incident Table.png>)

### Incident Table Views

There are two [views](</docs/Rapid/3-User Manual/2-Explorer/4-Views/1-Views-Overview/1-Views-Overview.md>) created for the **Incidents** table:

| View | Description |
| --- | --- |
| **All** | This displays all of the incident reports *except* for incident reports that have had their *Status* set to *Archived*. |
| **Archived** | This displays all of the *archived* incident reports. |

### Accessing Incident Reports

You can access, view, or edit individual incident items by [opening them from the **Incidents** table](</docs/Rapid/3-User Manual/2-Explorer/1-Tables/1-viewing-data-using-tables/1-viewing-data-using-tables.md#item-icons>). When an **Incident Report** is opened, the page is structured as illustrated below:

![A screenshot of an example incident item in a Rapid site. The title of the incident is "INCIDENT - 000000034" and its layout is a standard Rapid item. The item has a pipeline that progressed from "New" to "Open", and finally "Closed". There are three main sections of the item: "General Details", "Description", and "Factors". These sections all contain information collected from the digital incident form (described above). At the bottom of the form is the "Corrective Action" data table, where a user can record items of corrective action that will be linked to the incident. The "Corrective Actions" table has the following headings: "Corrective Action Code", "Solution", "Who", "Incident Factors", and "Status".](<Incident Form Digital.png>)

There are four main sections of an **Incident Report** details page:

| Section | Purpose |
| --- | --- |
| **Incident Pipeline** | This [Pipeline](</docs/Rapid/3-User Manual/2-Explorer/3-Pages/2-Page Components/Pipeline Choice/pipeline-choice.md>) component illustrates whether an incident is "New", "Open" or "Closed". |
| **General Details** | For recording crucial data such as who the incident affected, where it happened, and when it happened. |
| **Description** | For recording what happened and what task was being performed when the incident occurred. |
| **Factors** | For recording the *Environmental Factors*, *Equipment/Materials*, *Work systems*, or *People* that caused the incident. |
| **Corrective Actions** | This is another Data table where the **Corrective Actions** implemented by the **WHS** team can be recorded. |

## Incident Report Pipeline

The **Incident Pipeline** is a [Pipeline](</docs/Rapid/3-User Manual/2-Explorer/3-Pages/2-Page Components/Pipeline Choice/pipeline-choice.md>) component that visually communicates the status of the **Incident Report**.

To change the **Status** of an incident report:

1. Click a stage of the Incident Report **Pipeline**
2. Press **Save**

Alternatively:

1. Click the **Status** choice field. A drop-down menu will appear.
2. Select a status from the choices.
3. Press **Save**

:::note[Archived]
The "Archived" status has been disabled on the incident report **Pipeline**. If this status is selected, every stage of the **Pipeline** will turn grey.
:::

![A screenshot of the incident pipeline and its attached status field. At the top is the incident pipeline which is currently set to "New". This is indicated by the arrow that reads "New", which is coloured with blue, and the other stages of the pipeline being coloured with grey. Below the pipeline component is a "Status" choice field. The "Status" field currently has the word "New" inside it. The drop-down menu from the status choice field is visible, and the user's cursor is hovering over the "New" choice. Other choices that are visible include: "Open", "Closed" and "Archived".](<Pipeline and Status Choice.png>)

### Incident Status

The following table describes each incident status, and its meaning:

| Status | Meaning |
| --- | --- |
| **New** | The incident report has been created, but no action has been taken to resolve or correct it. |
| **Open** | The incident report is under review. |
| **Closed** | The incident report is closed. No further actions will be taken regarding the incident report. |
| **Archived** | Useful for old incident reports that the user no longer wishes to see in the **Incidents** table's "All" view. |

:::info[Archiving]
It is always preferable to "Archive" an incident report, rather than deleting it. This is because they are legal documents which may need to be produced in the case of worker's compensation or lawsuits. By "Archiving" an old incident report, it is still accessible but will not appear in the Data Table's "All" view.
:::

## Incident Process

- When a new incident is created, it will trigger a **Workflow Process** that will automatically assign the incident as a task to the "WHS Team". The task item will then appear as a notification for all members of this team.

- The incident task will be assigned the title: `NEW INCIDENT -  and Validate INCIDENT - 00000000`. In the title, `00000000` will be replaced with the incident's ID number.

![A screenshot of the task generated automatically by a new incident item being lodged. The task contains the typical "Task Details" section, but also includes an embedded form under the "Form Details" section. This section contains a form titled "Incidents Details" and has the following fields: "Date and Time", "Employees Impacted", "Location", and "What happened?".](<Incident Form Task.png>)

- The WHS can navigate to the incident item using the "go to incident" button on the **Embedded Form**.

![A screenshot of the Incident Details embedded form. The screenshot is annotated with a red box to highlight the location and appearance of the "go to incident" button in the upper-right corner of the embedded form. The button is an icon of a sidepanel, with an arrow pointing to the right.](<Go to incident.png>)

- The WHS team can then create [Corrective Actions](</docs/Rapid/2-Rapid Standard/8-WHS/2-corrective-actions/2-corrective-actions.md>), which will also generate tasks for users who are required to perform a corrective action to fix the issue.

- Once the **NEW INCIDENT** task is resolved, the system will automatically change the incident item's *Status* to *Open*.