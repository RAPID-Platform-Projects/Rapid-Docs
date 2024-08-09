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

## Menu Button Starts

Process runs can also be triggered to begin by configuring a menu button on a table, item, or the sidebar, and then pressing it.

- You can learn about [how to configure menu buttons to launch workflow processes](</docs/Rapid/Keyper%20Manual/Designer/Menus/Menu%20Actions/execute-workflow-process/>).

## Signal Start Events

Another method for executing a **Workflow** process is to begin with a [Signal Start Event](</docs/Rapid/Keyper%20Manual/Workflow/element-types/start-events/>). These **Signal** events can detect when an item is **created** or **updated** on a particular table. This then causes the **Workflow** process diagram to begin automatically.