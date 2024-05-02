# Executing Workflows

Rapid **Workflows** are not simply [BPMN 2.0](https://www.bpmn.org/)-compliant diagrams, but are also **executable**. There are several methods for executing a process diagram, which are outlined below:

## Manual Starts

All process diagrams can be started manually using the **Launch** button in the **Workflow** experience.

1. Save your process diagram using the **Save** button in the **Command Strip**.

2. Press the **Launch** button on the far right-hand side of the **Command Strip**

![A screenshot of the jumbotron and command strip at the top of the Workflow experience. At the far right of the screenshot is the Launch button. The button is annotated with a red box around it to highlight its location. The launch button has a picture of a rocket ship, and the word "Launch".](<Workflow Manual Launch Button.png>)

:::note[Manual Start]
The default **Start Event** (pictured above) can only be triggered by using the manual launch button inside the **Workflow** experience.
:::

When a process run is launched without error, the following alerts will appear in the bottom-right corner of the screen indicating that the process run started correctly.

![A screenshot showing the appearance of the alerts for a successful run. There are two rectangles with white text, indicating a positive outcome. The top alert reads: "Process run started successfully" and "Process Run 18 Started".](<Process Run Popup.png>)

:::note[Process Run Starts]
Some process runs may have a delay before **Workflow** indicates that they started. This occurs when a process run is executing a particularly complex element or series of elements at the start of its process run.
:::

The process diagram will highlight each element with colours, to visually communicate the outcome of a process run and assist with troubleshooting.

![A diagram depicting how a completed process run will appear. In this example, a start event flows into an exclusive gate, and then diverges down two separate paths as outputs. The upper flow path is labelled "if quantity > 100" and the lower path is labelled "if quantity <= 100". The start event contains a label that reads "Workflow is triggered with quantity = ?". Both paths lead into a single default task. The upper flow task reads "Large-batch manufacturing" and the lower flow task reads "Small-batch manufacturing". Both paths then flow into a single end event. The following elements are highlighted green: start event, gateway, lower path, lower path task, and the end event. From this, it can be determined that the lower path of quantity<=100 was taken, as this is the section that is highlighted green.](<Process Run Feedback.png>)

> **Above:** This process run took the lower sequence flow route, as indicated by the green elements.

| Colour | Meaning |
| --- | --- |
| **White** | The element did not execute. |
| **Green** | The element was executed and completed without error. |
| **Yellow** | The element has been executed, but has not completed yet. *(e.g. awaiting a user's input)* |
| **Red** | The element was executed, but encountered an error. |

## Accessing Previous Process Runs

### Previous Process Runs Accessed via Workflow Experience

Previous process runs can be accessed using the drop-down menu in the **Command Strip**.
1. Ensure you are viewing the desired process run
2. Press the **Process Run** drop-down menu.

![A screenshot that demonstrates the appearance and location of previous process runs when inside the Workflow experience. The Command Strip at the top of the Workflow page contains a dropdown menu. The screenshot is annotated with two red boxes to indicate the main button, and the options that appear. In this example, the button reads: "Process Run: 18 (Manufacture Erasers)". The other items have the same label, but with a different ID number (i.e. 17, 16, 15, etc.). Each process run has an icon of two nodes connected by a sequence flow.](<Process Run Versions.png>)

This drop-down menu does not allow you to access previous builds or diagrams (i.e. if you want to return to how the diagram was built before you saved it). Instead, this is used to determine the outcomes of previous process runs, and to assist with troubleshooting.

All process runs (whether triggered manually, automatically by Rapid System, or via a menu item) will appear here in this list. Each process run is assigned an ID to assist with troubleshooting.

### Previous Process Runs Have Static URLs

You can also navigate directly to a process run by typing the run number into a properly-structured URL.

![A screenshot that demonstrates how a process diagram's URL is structured. The URL reads: "https://environment.tenant/site/workflow/diagrams/4/edit?run=20". In red text, the number 4 is highlighted and labelled as being the Diagram ID. The number 20 is also highlighted, and labelled as being the Process Run ID.](<Process Run URL.png>)

### Previous Process Runs Are Linked to Items

:::note[Example]
A user informs you that a process run did not operate correctly when it was triggered from an item's menu button.
:::

1. Open the specific item that triggered the process run

2. Click the [Linked Items Menu Button](</docs/Rapid/3-User Manual/2-Explorer/3-Pages/2-Page Components/Linked Items/Linked Items.md>) button in the **Command Strip**

![A screenshot of the location and appearance of the "Linked Items" menu button. The menu button has an icon of two chain links, and a downwards chevron indicating that it will open a drop-down menu or panel. The screenshot is annotated with a red box to highlight the button's location.](<Process Run Menu 3.png>)

3. Find the desired process run (they are arranged from latest down to oldest).

4. Press the **Go to process run** button

![A screenshot of the panel that opens from the "Linked Items" menu button. The panel has a section at the top titled "Filter items linked to this Paper." Note that in this example the table is called "Paper". Underneath this is a dropdown section titled "Process Runs (1)" indicating that all the items listed underneath it are process runs, and that there is currently only one process run linked to this item. In the process runs section is an item titled "Manufacture Erasers" which is the name of the process run in this example. The screenshot is annotated with a red box to highlight the location of the process run item. The screenshot is also annotated with a red arrow and another red box inside the first red box, indicating the button to "go to process run". At the bottom of the panel is an "Add Link" button, but this is not relevant for this particular explanation.](<Process Run Menu 4.png>)

You will now be able to view the process run's results, and edit the process diagram if required by clicking the **Edit Diagram** button.

![A screenshot of the "Edit Diagram Button". The button has an icon of a pencil and reads "Edit Diagram".](<Edit Diagram Button.png>)

## Manually Restarting a Process Run

Process runs can be manually restarted if it fails during testing.



## Inputs

When a process run is triggered manually or via a menu button, the process run can request additional inputs before running.

:::note[Example]
A manager requires a quote to be generated, but the payment due date for the quote needs to be a value decided as the quote is being generated. The manager could request a date input, so that once the process is triggered, a payment date can be entered by the user.
:::

:::note[Example 2]
A manager wants to schedule a task such as "Manufacture X Erasers", and wants a specific task to be generated, depending on the quantity of erasers being manufactured. (i.e. A small-batch task vs a large-batch task).
:::

Inputs can be configured by:

1. Select the **Canvas** background of a process diagram, to *ensure no elements are selected*.

:::note[Configuring the Properties of a Process Diagram]
You can tell whether an element is being configured, or the process diagram itself, by examining the object listed at the top of the **Properties Panel**. It should read: `Process_X (Process)`.
:::

2. In the **Properties Panel**, click the **Process Inputs** chevron to expand it.

![A screenshot of the Properties Panel in the Workflow experience, when the user is not selecting any element and is instead configuring the properties of the entire process itself. The screenshot is annotated with a red box at the top of the panel, which reads "Process_1 (Process)". Underneath is a field for naming the process diagram called "Title". In this example the process diagram is titled "Manufacture Erasers". Underneath this is the "Process Inputs" section. A button allows the user to "+ Add new Input". When a new input is added, it has three fields: "Title", "ColumnName" and "Field Type". In this example, the user has entered the following data: Title = "Quantity", ColumnName = "Quantity" and Field Type = "Number". This input section of the screenshot is also annotated with a red box to draw attention to this section.](<Process Input Setup.png>)

Each input that is added to this properties panel, will appear as a field that can have data entered once the process diagram is executed. Below is an explanation of what of the above configuration fields affects.

| Field | Explanation |
| --- | --- |
| **Title** | This is the name that will appear above the field where the user can input data. |
| **ColumnName** | This is the internal variable name that **Workflow** will use to describe this field. There is a distinction here so that the title can be longer and contain an explanation for the user, if required. |
| **Field Type** | Here is where you set the expected input from the user. As this process diagram will accept a "Quantity of Erasers", it is set to anticipate the "Number" type of data. |

3. Configure **Gateways** or other elements to read the input value.

![A screenshot of a diagram that will do the following: take a "Quantity" input from the user, and then choose a task to execute depending on the value provided. The process has a default start event, with a label that reads: "Workflow is triggered with quantity = ?" The start event flows into an "Exclusive Gateway". The gateway has two outputs: an upper and lower one. The upper output sequence flow has a label that reads "if quantity > 100" and then flows into a task "Large-batch manufacturing" before flowing into the end event. The lower output sequence flow has a label that reads "if quantity <= 100" and then flows into a task "Small-batch manufacturing" before flowing into the end event.](<Process Input Setup 2.png>)

In the example scenario above, we are manufacturing erasers and launching a different task depending on the quantity of erasers being created. Once our inputs are set up, we must configure elements on the page to read these input values.



> **Above**: A **Gateway** being configured to take the input value from the user, and selects a path depending on the value.

