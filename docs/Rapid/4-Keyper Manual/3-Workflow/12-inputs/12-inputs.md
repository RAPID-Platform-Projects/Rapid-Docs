# Workflow Inputs

When a process run is triggered manually or via a menu button, the process run can request additional inputs before running.

:::note[Example]
A manager requires a quote to be generated, but the payment due date for the quote needs to be a value decided as the quote is being generated. The manager could request a date input, so that once the process is triggered, a payment date can be entered by the user.
:::

:::note[Example 2]
A manager wants to schedule a task such as "Manufacture X Erasers", and wants a specific task to be generated, depending on the quantity of erasers being manufactured. (i.e. A small-batch task vs a large-batch task).
:::

Process inputs can be configured to support most field types within RAPID. These inputs can then be referenced within the process to alter it's flow and make process 'regard' its invoked context.

When a process is executing inputs are regarded the same whether they are started manually or from a Call Activity.

## Adding Inputs to a Process Diagram

Inputs can be configured by:

1. Select the **Canvas** background of a process diagram, to *ensure no elements are selected*.

:::note[Configuring the Properties of a Process Diagram]
You can tell whether an element is being configured, or the process diagram itself, by examining the object listed at the top of the **Properties Panel**. It should read: `Process_X (Process)`.
:::

2. In the **Properties Panel**, click the **Process Inputs** chevron to expand it.

![A screenshot of the Properties Panel in the Workflow experience, when the user is not selecting any element and is instead configuring the properties of the entire process itself. The screenshot is annotated with a red box at the top of the panel, which reads "Process_1 (Process)". Underneath is a field for naming the process diagram called "Title". In this example the process diagram is titled "Manufacture Erasers". Underneath this is the "Process Inputs" section. A button allows the user to "+ Add new Input". When a new input is added, it has three fields: "Title", "ColumnName" and "Field Type". In this example, the user has entered the following data: `Title = "Quantity"`, `ColumnName = "Quantity"` and `Field Type = "Number"`. This input section of the screenshot is also annotated with a red box to draw attention to this section.](<Process Input Setup.png>)

Each input that is added to this properties panel, will appear as a field that can have data entered once the process diagram is executed. Below is an explanation of what of the above configuration fields affects.



## Configuring Call Activity Inputs

Adding an input to a diagram requires three pieces of information:

| Field | Explanation |
| --- | --- |
| **Title** | This is the user-friendly name that will appear above the field where the user can input data. |
| **ColumnName** | This is the internal variable name that **Workflow** will use to describe this field. These should be all lowercase, with no spaces. |
| **Field Type** | Here is where you set the expected input from the user. As this process diagram will accept a "Quantity of Erasers", it is set to anticipate the "Number" type of data. |

## Types of Inputs

You can use the following field types as inputs:

| Type | Primitive | Description |
| --- | --- | --- |
| Single Line of Text | String | |
| Email | String | |
| Multiple lines of Text | String | |
| Date and Time | Date |
| Choice | String | These cannot be configured to present choices | 
| Lookup | Integer | Can be configured to regard a list. Will be automatically populated when manually triggered from an item of the related type |
| Boolean | Boolean | |
| Number | Number | |
| Percentage | Number | |
| Currency | Number | Cannot configure the currency type |
| User | Integer | |
| JSON | String | |
| Whole number | Integer | |
| Globally Unique Identifier | String | |
| XML Data | String | |
| PowerBI Report | String | |

## Reading Inputs from a Process Diagram

In the example scenario above, we are manufacturing erasers and launching a different task depending on the quantity of erasers being created. Once our inputs are set up, we must configure elements on the page to read these input values.

![A screenshot of a diagram that will do the following: take a "Quantity" input from the user, and then choose a task to execute depending on the value provided. The process has a default start event, with a label that reads: "Workflow is triggered with `quantity = ?`" The start event flows into an "Exclusive Gateway". The gateway has two outputs: an upper and lower one. The upper output sequence flow has a label that reads `if quantity > 100` and then flows into a task "Large-batch manufacturing" before flowing into the end event. The lower output sequence flow has a label that reads `if quantity <= 100` and then flows into a task "Small-batch manufacturing" before flowing into the end event.](<Process Input Setup 2.png>)

> **Above**: A **Gateway** being configured to take the input value from the user, and selects a path depending on the value.

To configure this element, we select the **Exclusive Gateway** and add a **Rule** to its outputs. Here the following is configured:

![A screenshot of the properties panel, and its rule section for inputs. In this example there are a series of fields that sit below the "And", "+Rule" and "+Group" buttons. The fields have no titles, but in the example they have the following values and types, from top to bottom: "Process_1" (dropdown), "Process Inputs" (dropdown), "Quantity" (dropdown), "Greater Than Sign" (dropdown), "100" (single line of text). The appearance of these fields is similar to how they appear in the view configuration of a table.](<Process Input Setup 3.png>)

| Field | Example | Explanation |
| --- | --- | --- |
| **Process Diagram** | `Process_1` | Which process diagram should this element read data from? This is useful if there is a **sub-process** or **call activity** occurring in a diagram. |
| **Data Source** | `Process Inputs` | This where the data is obtained from: Process Inputs. |
| **ColumnName** | `Quantity` | Which **ColumnName** input to read from. |
| **Operand** | `>` | The operand to apply to the value |
| **Comparison** | `100` | The value to compare with the **ColumnName** value. |

> Now, if the quantity of erasers entered by the user during runtime is greater than 100, the **Gateway** will send the token through this output.

## Manual Starts and Inputs

To enter inputs during a manual start:

1. Press the [Launch button](</docs/Rapid/4-Keyper Manual/3-Workflow/13-executing-workflows/13-executing-workflows.md#manual-starts>) in the **Workflow** experience

2. A sidebar will open with the **Process Inputs**. Enter the values and press **OK**

![A screenshot demonstrating how inputs appear when launching a process diagram. A side panel is visible in the screenshot with the icon of a rocket ship and the title "Launch" at the top. Underneath is a single field titled "Quantity". The user has input the value "50" into this field. Below the field is a blue button with white writing. Its label reads: "OK".](<Process Input Manual 1.png>)

3. The workflow will trigger and produce a feedback diagram to display what occurred during the process run.

![The same process diagram explained earlier: it contains a start event, an exclusive gateway, and two tasks: one for large-batch processing and the other for small-batch processing. The purpose of the image is to show how the diagram executed. The following sections are highlighted green, indicating that they were executed without error: start event, gateway, SMALL-batch manufacturing, end event, and the flow elements between these elements.](<Process Run Feedback.png>)

> **Above:** The user entered "50" as the quantity of erasers in this example, so the gateway resolved this during the process run and sent the token down to the "Small-batch manufacturing" task.

## Menu Button Starts and Inputs

When a [menu button is configured](</docs/Rapid/4-Keyper Manual/2-Designer/3-Menus/3-menu-button-configuration/3-menu-button-configuration.md>) to [execute a workflow process](</docs/Rapid/4-Keyper Manual/2-Designer/3-Menus/Menu Actions/execute-workflow-process/execute-workflow-process.md>), the following will occur:

1. Find the item or table where the button is located and press it. In this example, the button is simply titled "Launch Process Run"

![A screenshot of a button that launches a process diagram. The button has an icon of a table, and the label: "Launch Process Run". The screenshot is annotated red to highlight the location of the button.](<Process Run Menu 1.png>)

2. A dialogue box will open, prompting the user to enter inputs

![A screenshot of the small window that appears below the button. There is a field and a single button. The field has the title: "Quantity" and the user has typed the value 500 into the field. The button is blue with white writing that reads "OK". ](<Process Run Menu 2.png>)

3. Press the **OK** button to trigger the process run's default start event

4. The workflow will trigger. The user can navigate to the process diagram to inspect the result of the process run.

![The same process diagram explained earlier: it contains a start event, an exclusive gateway, and two tasks: one for large-batch processing and the other for small-batch processing. The purpose of the image is to show how the diagram executed. The following sections are highlighted green, indicating that they were executed without error: start event, gateway, LARGE-batch manufacturing, end event, and the flow elements between these elements.](<Process Run Feedback 2.png>)

> **Above:** The user entered "500" as the quantity of erasers in this example, so the gateway resolved this during the process run and sent the token up to the "Large-batch manufacturing" task.

## Referencing inputs with an expression

Inputs are placed on an input's key within the process run. They can be referenced via:

`<%= Process_1.inputs.{input column} %>`