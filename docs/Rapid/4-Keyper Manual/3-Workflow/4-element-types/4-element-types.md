# Element Types

The **Workflow Toolbar** only contains the "base" types of diagram element. For example, using the **Toolbar** you can place a **Task**, but not a **User Task**. In order to configure an element and change its type, we must use the **Configuration Panel** once the element is placed on the **Canvas**.

## Configuring an Element's Type

To configure the type of element:

1. Select an element by clicking on it

2. Press the **Change Type** button on the **Configuration Panel**. The **Change Type** button has an icon of a wrench.

![A screenshot demonstrating the location and appearance of the "Change Type" button in the "Configuration Panel". The screenshot is annotated with a red box to highlight the location of the button. The button has an icon of a stylised wrench.](<Workflow Change Type Button.png>)

3. From the menu that appears, select a type of element

![A screenshot demonstrating the appearance of the "Change Type" menu that appears after clicking on the "Change Type" button in the "Configuration Panel". In this example, the user is configuring a Start Event. The options that appear are as follows (from top to bottom): "Intermediate Throw Event", "End Event", "Message Start Event", "Timer Start Event", "Conditional Start Event", and the mouse cursor is hovering over the final option, which is the "Signal Start Event"; this event has an icon of a circle with a triangle inside it. ](<Workflow Change Type Button Menu.png>)

4. The element will now be configured to that type, and its appearance will change to reflect this new type

![A screenshot demonstrating how the Start Event that had its type changed now has a new appearance. As it is now configured as a "Signal Start Event", the element's symbol is now a circle with a triangle inside.](<Workflow Change Type Finished.png>)

Below is a summary of all element types, and the base type that they are configured from.

## Start Event Types

To access any of the **Start Event Types** below, place a [Start Event](</docs/Rapid/4-Keyper Manual/3-Workflow/5-start-events/5-start-events.md>) on the **Canvas** and change its type using the [Configuration Panel](</docs/Rapid/4-Keyper Manual/3-Workflow/4-element-types/4-element-types.md#configuring-an-elements-type>).

| Element Type | Symbol | Function |
| --- | --- | --- |
| **Start Event** |![The "Start Event" icon. This icon resembles an empty, white circle.](<Start Event Base.png>)| The default **Start Event**. This event will start when manually triggered with the **Launch** button in the **Workflow** experience, and cannot be configured. |
| **Message Start Event** |![The "Message Start Event" icon. This icon resembles circle with an envelope inside.](<Start Event Message.png>) | Automated **Message Events** are not implemented at the time of writing. This event cannot be configured, and is only useful for documentation purposes. |
| **Timer Start Event** |![The "Timer Start Event" icon. This icon resembles circle with an analogue clock inside.](<Start Event Timer.png>) | Triggers the start of a workflow and produces a token as set by a timer. For example, can be configured to run at *specific dates of the year* or at specific *times of day*. |
| **Conditional Start Event** |![The "Conditional Start Event" icon. This icon resembles circle with an page of written instructions inside.](<Start Event Conditional.png>) | Conditional events are not implemented at the time of writing. This event cannot be configured. |
| **Signal Start Event** |![The "Signal Start Event" icon. This icon resembles circle with a triangle inside.](<Start Event Signal.png>) | Triggers the start of a workflow and produces a token when certain conditions on a table are met. The trigger is configured using an [OData query](</docs/Rapid/3-User Manual/2-Explorer/4-Views/3-Views-Creating/3-Views-Creating.md#extra-filters>). |

- You can also [read more about **Start Events**](</docs/Rapid/4-Keyper Manual/3-Workflow/5-start-events/5-start-events.md>).

## Intermediate Event Types

To access any of the **Intermediate Event Types** below, place an [Intermediate Event](</docs/Rapid/4-Keyper Manual/3-Workflow/6-intermediate-events/6-intermediate-events.md>) on the **Canvas** and change its type using the [Configuration Panel](</docs/Rapid/4-Keyper Manual/3-Workflow/4-element-types/4-element-types.md#configuring-an-elements-type>).

| Element Type | Symbol | Function |
| --- | --- | --- |
| **Intermediate Event** | ![The "Intermediate Event" icon. This icon resembles a circle with a thick white border.](<Intermediate Base.png>) | The default **Intermediate Event**. This event cannot be configured, and should be changed to a different intermediate type. |
| **Message Intermediate Catch Event** | ![The "Message Intermediate Catch Event" icon. This icon resembles a circle with a thick white border, with an envelope inside.](<Intermediate Message Catch.png>) | |
| **Message Intermediate Throw Event** | ![The "Message Intermediate Throw Event" icon. This icon resembles a circle with a thick white border, with a black envelope inside.](<Intermediate Message Throw.png>) | |
| **Timer Intermediate Catch Event** | ![The "Timer Intermediate Catch Event" icon. This icon resembles a circle with a thick white border, with a clock inside.](<Intermediate Timer Catch.png>) | Pauses the process token for a duration that is specified using a Lodash expression, or for a fixed length of time. |
| **Escalation Intermediate Throw Event** | ![The "Escalation Intermediate Throw Event" icon. This icon resembles a circle with a thick white border, with a black upwards arrow inside.](<Intermediate Escalation Throw.png>) |  |
| **Conditional Intermediate Catch Event** | ![The "Conditional Intermediate Catch Event" icon. This icon resembles a circle with a thick white border, with a page of writing inside.](<Intermediate Conditional Catch.png>) |  |
| **Link Intermediate Catch Event** | ![The "Link Intermediate Catch Event" icon. This icon resembles a circle with a thick white border, with a white arrow pointing to the right, inside.](<Intermediate Link Catch.png>) ||
| **Link Intermediate Throw Event** | ![The "Link Intermediate Throw Event" icon. This icon resembles a circle with a thick white border, with a black arrow pointing to the right, inside.](<Intermediate Link Throw.png>) ||
| **Compensation Intermediate Throw Event** | ![The "Compensation Intermediate Throw Event" icon. This icon resembles a circle with a thick white border, with a "rewind" symbol inside. The rewind symbol is two arrows point to the left.](<Intermediate Compensation Throw.png>) ||
| **Signal Intermediate Catch Event** | ![The "Signal Intermediate Catch Event" icon. This icon resembles a circle with a thick white border, with white equilateral triangle inside.](<Intermediate Signal Catch.png>) | Creates a new token when the conditions for a table are met. Also discards all other active tokens. These conditions are specified using an OData query.|
| **Signal Intermediate Throw Event** | ![The "Signal Intermediate Throw Event" icon. This icon resembles a circle with a thick white border, with black equilateral triangle inside.](<Intermediate Signal Throw.png>) ||

## Intermediate Boundary Event Types

Boundary events are created by placing an **Intermediate Event** on top of a **Task**. The result is an element that combines both task and intermediate event.

![A screenshot demonstrating the appearance of a boundary event type of element. The screenshot shows a task rectangle which is rounded in the corners. On the top of the task is a timer boundary event: this event has a symbol that resembles a clock. The event symbol has a thick white outline.](<Boundary Example.png>)

These events can then have their type configured using the [Configuration Panel](</docs/Rapid/4-Keyper Manual/3-Workflow/4-element-types/4-element-types.md#configuring-an-elements-type>). You can [read more about **Intermediate Boundary Events**](</docs/Rapid/4-Keyper Manual/3-Workflow/6-intermediate-events/boundary-events/boundary-events.md>).

| Element Type | Symbol | Function |
| --- | --- | --- |
| **Boundary Event** |![The "Boundary Event" icon. This icon resembles a circle with a thick white border. Behind the icon is a straight line from the task that the event has been placed on.](<Boundary Intermediate.png>)| The default boundary event. This element cannot be configured, and should be changed to another element type.|
| **Message Boundary Event** |![The "Message Boundary Event" icon. This icon resembles a circle with a thick white border, with a white envelope inside. Behind the icon is a straight line from the task that the event has been placed on.](<Boundary Message.png>)||
| **Timer Boundary Event** |![The "Timer Boundary Event" icon. This icon resembles a circle with a thick white border, with a clock inside. Behind the icon is a straight line from the task that the event has been placed on.](<Boundary Timer.png>)| Generates a new token from a task, once the specified *Duration* has elapsed. Discards all other active tokens. |
| **Escalation Boundary Event** |![The "Escalation Boundary Event" icon. This icon resembles a circle with a thick white border, with a white upwards arrow inside. Behind the icon is a straight line from the task that the event has been placed on.](<Boundary Escalation.png>)| |
| **Conditional Boundary Event** |![The "Conditional Boundary Event" icon. This icon resembles a circle with a thick white border, with a page symbol inside. Behind the icon is a straight line from the task that the event has been placed on.](<Boundary Conditional.png>)| |
| **Error Boundary Event** |![The "Error Boundary Event" icon. This icon resembles a circle with a thick white border, with a white lightning bolt symbol inside. Behind the icon is a straight line from the task that the event has been placed on.](<Boundary Error.png>)| When the associated element throws an error, the **Error Boundary Event** creates a token. The previous token that arrived on the element is discarded. |
| **Cancel Boundary Event** |![The "Cancel Boundary Event" icon. This icon resembles a circle with a thick white border, with a white x inside. Behind the icon is a straight line from the task that the event has been placed on.](<Boundary Cancel.png>)||
| **Signal Boundary Event** |![The "Signal Boundary Event" icon. This icon resembles a circle with a thick white border, with a white equilateral triangle inside. Behind the icon is a straight line from the task that the event has been placed on.](<Boundary Signal.png>)||
| **Compensation Boundary Event** |![The "Compensation Boundary Event" icon. This icon resembles a circle with a thick white border, with two white arrows pointing to the left, inside. Behind the icon is a straight line from the task that the event has been placed on.](<Boundary Compensation.png>)|   |
| **Message Boundary Event (non-interrupting)** |![The "Message Boundary Event (Non-Interrupting)" icon. This icon resembles a circle with a double-dashed border, with a white envelope inside. Behind the icon is a straight line from the task that the event has been placed on.](<Boundary Message Non.png>)|  |
| **Timer Boundary Event (non-interrupting)** |![The "Message Boundary Event (Non-Interrupting)" icon. This icon resembles a circle with a double-dashed border, with a clock inside. Behind the icon is a straight line from the task that the event has been placed on.](<Boundary Timer Non.png>)| This event generates a new token upon the configured *Duration* elapsing. However, it does not delete all other active tokens.|
| **Escalation Boundary Event (non-interrupting)** |![The "Message Boundary Event (Non-Interrupting)" icon. This icon resembles a circle with a double-dashed border, with a white upwards arrow inside. Behind the icon is a straight line from the task that the event has been placed on.](<Boundary Escalation Non.png>)| |
| **Conditional Boundary Event (non-interrupting)** |![The "Message Boundary Event (Non-Interrupting)" icon. This icon resembles a circle with a double-dashed border, with a page symbol inside. Behind the icon is a straight line from the task that the event has been placed on.](<Boundary Conditional Non.png>)| |
| **Signal Boundary Event (non-interrupting)** |![The "Signal Boundary Event (Non-Interrupting)" icon. This icon resembles a circle with a double-dashed border, with a white equilateral triangle inside. Behind the icon is a straight line from the task that the event has been placed on.](<Boundary Signal Non.png>)||

## End Event Types

To access any of the **End Events** below, place an [End Event](</docs/Rapid/4-Keyper Manual/3-Workflow/7-end-events/7-end-events.md>) on the **Canvas** and change its type using the [Configuration Panel](</docs/Rapid/4-Keyper Manual/3-Workflow/4-element-types/4-element-types.md#configuring-an-elements-type>).

| Element Type | Symbol | Function |
| --- | --- | --- |
| **End Event** |![The "End Event" icon. This icon resembles a circle with a thick, black border.](<End Base.png>)| Discards any token that arrives on it.|
| **Message End Event** |![The "Message Event" icon. This icon resembles a circle with a thick, black border. Inside the circle is a black envelope.](<End Message.png>)||
| **Escalation End Event** |![The "Escalation Event" icon. This icon resembles a circle with a thick, black border. Inside the circle is a black arrow pointing upwards.](<End Escalation.png>)||
| **Error End Event** |![The "Error Event" icon. This icon resembles a circle with a thick, black border. Inside the circle is a black lightning bolt symbol.](<End Error.png>)||
| **Compensation End Event** |![The "Compensation Event" icon. This icon resembles a circle with a thick, black border. Inside the circle are two black arrows pointing to the left.](<End Compensation.png>)||
| **Signal End Event** |![The "Signal Event" icon. This icon resembles a circle with a thick, black border. Inside the circle is a black equilateral triangle.](<End Signal.png>)||
| **Terminate End Event** |![The "Terminate Event" icon. This icon resembles a circle with a thick, black border. Inside the circle is another circle that is black and with a thick border.](<End Terminate.png>)||

## Task Types

To access any of the **Tasks** below, place a [Task](</docs/Rapid/4-Keyper Manual/3-Workflow/8-tasks/8-tasks.md>) on the **Canvas** and change its type using the [Configuration Panel](</docs/Rapid/4-Keyper Manual/3-Workflow/4-element-types/4-element-types.md#configuring-an-elements-type>).

| Element Type | Symbol | Function |
| --- | --- | --- |
| **Abstract Task** |![A screenshot of a default task element. The task is a rounded rectangle that is empty inside.](Task.png)| This type of task cannot be configured or automated. It is useful for documentation purposes only. |
| **Send Task** |![A screenshot of a "Send Task" element. The task is a rounded rectangle that has a black envelop inside, in the upper-left corner.](<Task Send.png>)| This uses Omnichannel to send messages. At the time of writing, this can only be configured to send emails via SendGrid. For this element to be configured correctly, SendGrid must be configured on your Rapid site. |
| **Receive Task** |![A screenshot of a "Receive Task" element. The task is a rounded rectangle that has a white envelop inside, in the upper-left corner.](<Task Receive.png>)| Receives a message from SendGrid or Omnichannel. SendGrid must be configured on your Rapid site.|
| **User Task** |![A screenshot of a "User Task" element. The task is a rounded rectangle that has a symbol of a person inside, in the upper-left corner.](<Task User.png>)| Generates a task or project for a user to complete. This task can be configured with a *Title*, *Adaptive Document*, a static or dynamic *Assignee*, a *Parent Task*, a *Start Date*, a relative *Due Date*, and a *Description*. The task can also send an email communication to a relevant user so they are informed about the task being generated. |
| **Manual Task** |![A screenshot of a "Manual Task" element. The task is a rounded rectangle that has a hand inside, in the upper-left corner.](<Task Manual.png>)| This is a task that cannot be configured. Drawing a **Global Link** from this task downstream to a **Data Store Reference**, will allow you to click the global link and configure the link to update an item or items in the **Data Store Reference**. This is called "modifying a data output association".|
| **Business Rule Task** |![A screenshot of a "Business Rule Task" element. The task is a rounded rectangle that has a table or spreadsheet icon inside, in the upper-left corner.](<Task Business Rule.png>)| This element cannot be configured. It is a [BPMN 2.0](https://www.bpmn.org/) symbol and useful for documentation only. |
| **Service Task** |![A screenshot of a "Service Task" element. The task is a rounded rectangle that has a symbol of two cogs inside, in the upper-left corner.](<Task Service.png>)| Triggers a [Service Task](</docs/Rapid/4-Keyper Manual/3-Workflow/8-tasks/service-task/service-task.md>). The type of service task can be configured. |
| **Script Task** |![A screenshot of a "Script Task" element. The task is a rounded rectangle that has an unravelled scroll inside, in the upper-left corner.](<Task Script.png>) | This element cannot be configured. It is a [BPMN 2.0](https://www.bpmn.org/) symbol and useful for documentation only. |
| **Call Activity** |![A screenshot of a "Call Activity" element. The element is a rounded rectangle that has a thick, dark border. Inside the element, at the bottom, there is an icon of a plus symbol.](<Task Call.png>)| Launches another **Workflow Process Diagram**. The specific **Start Event** that will be triggered can be configured from this task. |

Note that a **task** can also be configured into a **sub-process**.

## Data Store Reference Types

To access any of the **Data Store References** below, place a [Data Store Reference](</docs/Rapid/4-Keyper Manual/3-Workflow/9-data-store-reference/9-data-store-reference.md>) on the **Canvas** and change its type using the [Properties Panel](</docs/Rapid/4-Keyper Manual/3-Workflow/3-drawing-diagrams/3-drawing-diagrams.md>).

| Element Type | Symbol | Function |
| --- | --- | --- |
| **Get Item** | ![The "Data Store Reference: Get Item" icon. This icon resembles a database can, or database stack: a cylinder that is bisected at its top. ](<Workflow Data Can.png>) |  Fetches a single item from a Rapid Table using an item *id*. |
| **Get Items** | ![The "Data Store Reference: Get Items" icon. This icon resembles a database can, or database stack: a cylinder that is bisected at its top. Note that this is the same icon as the previous one.](<Workflow Data Can.png>) | Fetches multiple items from a Rapid Table using: a selected table view, a [lodash array expression for *selection*](</docs/Rapid/4-Keyper Manual/3-Workflow/formatting-arrays-with-lodash/formatting-arrays-with-lodash.md>) and a [lodash expression for *filtering*](</docs/Rapid/4-Keyper Manual/3-Workflow/filtering-values-with-lodash/filtering-values-with-lodash.md>). |