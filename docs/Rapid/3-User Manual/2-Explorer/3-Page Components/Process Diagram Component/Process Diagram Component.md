# What is a Process Diagram component?

As the name suggests, a Process Diagram component will display the Process Diagram on a page. If this component is added properly, it will display the relevant Process Diagram associated with the item on the page.

:::info[**Important note**]

This is a unique component and cannot be visible for every possible Page. It is only visible for specific Table Pages which have an XML type of column present.
:::

Below is an image of Process Runs table. This table is a system table and shows the list of all workflows executions as items. We will consider this to illustrate the features of Process Diagram Component. 

![Image showing Process Runs System Table with Activity Example Item highlighted](<Process Diagram 1.png>)

Let us look select Activity Example. Click on it just like any other item in Explorer. 

The Item Details page appears as shown below. We can view the Process Diagram Component here. 

![Image showing Activity Example Item Details Page displaying Process Diagram Component](<Process Diagram 2.png>)

:::info[Please note]
The Item Details page can have more details than just the Process Diagram Component. This depends on how the Page has been configured in Designer.

![Image showing another example of a Page where Process Diagram Component present with other elements](<Process Diagram 3.png>)

Here we can observe other fields apart from the Process Diagram Component.
:::

## Interpreting the Process Diagram run  

The Process Run of workflow in Explorer helps us to interpret the execution of elements (events, tasks, gateways) based on a colour scheme.

1. Green - this represents that the token has passed the subject element and the action was performed successfully. The token proceeds forward on the path once the element has turned green.

2. Orange - this represents that the token is active at the subject element.

3. Red - this indicates that the token has reached the subject element, but the action could not be performed as defined and has errored. The token does not proceed forward on the path, if the element has errored.

4. Colourless - this indicates that the token has not reached the subject element yet on the path.

## Open Tasks from Process Diagram Component

You can double click on ***Active (Orange)*** or ***Successfully Completed (Green)*** UserTasks to open the corresponding Task Item Profile.

![Image showing how double clicking on valid UserTasks opens Task Item Profile](<Process Diagram 4.png>)

:::warning[Please note]

1. This will work only for UserTasks.

2. Clicking on Colourless or Red UserTasks would not navigate you to the corresponding Task Item Profile. This is because the system did not action such tasks.
:::

## Navigate to diagram with Process Run

If you are viewing a specific process run for a workflow diagram, you can click on "Edit Diagram" button. 

This will navigate you to the Workflow Page with the same Process Run as pre-loaded.

![Image showing how Edit Diagram option navigates from Explorer to Workflow with corresponding Process Run Diagram preloaded](<Process Diagram 5.png>)
