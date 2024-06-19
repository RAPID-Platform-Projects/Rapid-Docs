# Task Reporting

The **Tasks** module includes a report known as the **Task Dashboard**. This report grants stakeholders the capability to view tasks based on the assigned user or their status, offering comprehensive oversight at both an organisational and employee level, regarding task statuses.

## Task Dashboard
### Accessing the Task Dashboard
On the Explorer sidebar click on **Tasks** > **Task Reporting**
![A screenshot depicting how to navigate to the Task Dashboard using the sidebar. The user has selected "Tasks" and then "Task Reporting". The screenshot is annotated with red boxes to indicate where the user has clicked.](<Task Reporting Dashboard Sidebar.png>)

The **Task Dashboard** is divided into four sections: slicers, cards, and the Task Table.

### Slicers
Slicers provides the user with the ability to filter all of the visuals on the page by a specific attribute and can be found at the top of the page.

The **Tasks Dashboard** can be “sliced” based on no attributes, one attribute, or multiple attributes. The attributes available to “slice” by are *Status* and *Assigned To*.

For example, you could use the slicers to filter down the visuals to Tasks that are assigned to “John Doe” with a status of “Not Started”.

![A screenshot depicting the location and appearance of slicers. These are drop-down menus in the upper-right corner of the screen that allow the user to filter all the other data in the report. The screenshot is annotated with a red box to highlight the location of the slicers.](<PowerBI Slicer.png>)

### Cards
The Cards section within the **Tasks Dashboard** offers concise reference statistics. The values of these cards will change based on the slicers or if selections are made on tables or charts.

The provided cards are as follows:
 
- **Outstanding Tasks** – Displays the number of tasks that are *Not Started* or *In Progress*
- **Overdue Tasks** – Displays the number of tasks that are *Not Started* or *In Progress* and have passed their *Due Date*

![A screenshot depicting the location and appearance of Cards on the Tasks Dashboard. One task card is blue and reads "Outstanding Tasks", and the other is red and reads "Overdue Tasks". The screenshot is annotated with a red box to highlight the location of the cards.](<PowerBI Cards.png>)

### Task Table
The Task Table displays the *Task, Assigned To, Start Date , Due date, Status, Overdue* (Red Flag = Overdue, Green Flag = On Track), *Days Over*, and *Link* to the Rapid item.

It is an interactive visual, allowing users to click any row. When an element has been selected, the report visuals will highlight or filter based on the selected row.

![A screenshot showing the location and appearance of the PowerBI Task table. This is a data table that contains a list of all active tasks in the Rapid site. The data table has the following headings: Task, Assigned To, Start Date, Due Date, Status, Overdue, Days Over, and Link. The screenshot is annotated with a red box to highlight the table's location.](<PowerBI Task Table.png>)