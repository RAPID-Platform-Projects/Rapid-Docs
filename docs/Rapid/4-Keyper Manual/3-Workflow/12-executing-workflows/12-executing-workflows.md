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

![A diagram depicting how a completed process run will appear. In this example, a start event flows into an exclusive gate, and then diverges down two separate paths as outputs. The upper flow path is labelled "if int != 1" and the lower path is labelled "if int = 1". The start event contains a label that reads "workflow is triggered with int = ?". Both paths lead into a single default task labelled "Example Task", and then meet again by both running into an end event. The following elements are highlighted green: start event, gateway, lower path, lower path example task, and the end event. From this, it can be determined that the lower path of int=1 was taken, as this is the section that is highlighted green.](<Process Run Feedback.png>)

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

![A screenshot that shows the ](<Process Run Versions.png>)

This drop-down menu does not allow you to access previous builds or diagrams (i.e. if you want to return to how the diagram was built before you saved it). Instead, this is used to determine the outcomes of previous process runs, and to assist with troubleshooting.

All process runs (whether triggered manually, automatically by Rapid System, or via a menu item) will appear here in this list. Each process run is assigned an ID to assist with troubleshooting.

### Previous Process Runs Have Static URLs

You can also navigate directly to a process run by typing the run number into a properly-structured URL.

![Alt text](<Process Run URL.png>)

### Previous Process Runs Are Linked to Items

:::note[Example]
A user informs you that a process run did not operate correctly when it was triggered from an item's menu button.
:::

1. Open the specific item that triggered the process run

2. 




## Manually Restarting a Process Run

Process runs can be manually restarted 

## Inputs

