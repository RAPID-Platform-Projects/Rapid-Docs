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
| **Message Start Event** |![The "Message Start Event" Reference icon. This icon resembles circle with an envelope inside.](<Start Event Message.png>)||
| **Timer Start Event** |![The "Timer Start Event" Reference icon. This icon resembles circle with an analogue clock inside.](<Start Event Timer.png>)||
| **Conditional Start Event** |![The "Conditional Start Event" Reference icon. This icon resembles circle with an page of written instructions inside.](<Start Event Conditional.png>)||
| **Signal Start Event** |![The "Signal Start Event" Reference icon. This icon resembles circle with a triangle inside.](<Start Event Signal.png>)|||

- You can also [read more about **Start Events**](</docs/Rapid/4-Keyper Manual/3-Workflow/5-start-events/5-start-events.md>).

## Intermediate Event Types

To access any of the **Intermediate Event Types** below, place an [Intermediate Event](</docs/Rapid/4-Keyper Manual/3-Workflow/6-intermediate-events/6-intermediate-events.md>) on the **Canvas** and change its type using the [Configuration Panel](</docs/Rapid/4-Keyper Manual/3-Workflow/4-element-types/4-element-types.md#configuring-an-elements-type>).

| Element Type | Symbol | Function |
| --- | --- | --- |
| **Message Intermediate Catch Event** |||
| **Message Intermediate Throw Event** |||
| **Timer Intermediate Catch Event** |||
| **Escalation Intermediate Throw Event** |||
| **Conditional Intermediate Catch Event** |||
| **Link Intermediate Catch Event** |||
| **Link Intermediate Throw Event** |||
| **Compensation Intermediate Throw Event** |||
| **Signal Intermediate Catch Event** |||
| **Signal Intermediate Throw Event** |||

## Intermediate Boundary Event Types

Boundary events are created by placing an **Intermediate Event** on top of a **Task**. These events can then have their type configured using the [Configuration Panel](</docs/Rapid/4-Keyper Manual/3-Workflow/4-element-types/4-element-types.md#configuring-an-elements-type>). You can [read more about **Intermediate Boundary Events**](</docs/Rapid/4-Keyper Manual/3-Workflow/6-intermediate-events/boundary-events/boundary-events.md>).

| Element Type | Symbol | Function |
| --- | --- | --- |
||||

## End Event Types

To access any of the **End Events** below, place an [End Event](</docs/Rapid/4-Keyper Manual/3-Workflow/7-end-events/7-end-events.md>) on the **Canvas** and change its type using the [Configuration Panel](</docs/Rapid/4-Keyper Manual/3-Workflow/4-element-types/4-element-types.md#configuring-an-elements-type>).

| Element Type | Symbol | Function |
| --- | --- | --- |
| **Message End Event** |||
| **Escalation End Event** |||
| **Error End Event** |||
| **Compensation End Event** |||
| **Signal End Event** |||
| **Terminate End Event** |||

## Task Types

To access any of the **Tasks** below, place a [Task](</docs/Rapid/4-Keyper Manual/3-Workflow/8-tasks/8-tasks.md>) on the **Canvas** and change its type using the [Configuration Panel](</docs/Rapid/4-Keyper Manual/3-Workflow/4-element-types/4-element-types.md#configuring-an-elements-type>).

| Element Type | Symbol | Function |
| --- | --- | --- |
| **Send Task** |||
| **Receive Task** |||
| **User Task** |||
| **Manual Task** |||
| **Business Rule Task** |||
| **Script Task** |||
| **Call Activity** |||

## Data Store Reference Types

To access any of the **Data Store References** below, place a [Data Store Reference](</docs/Rapid/4-Keyper Manual/3-Workflow/9-data-store-reference/9-data-store-reference.md>) on the **Canvas** and change its type using the [Properties Panel](</docs/Rapid/4-Keyper Manual/3-Workflow/3-drawing-diagrams/3-drawing-diagrams.md>).

| Element Type | Symbol | Function |
| --- | --- | --- |
| **Get Item** | ![The "Data Store Reference: Get Item" icon. This icon resembles a database can, or database stack: a cylinder that is bisected at its top. ](<Workflow Data Can.png>) |  Fetches a single item from a Rapid Table using an item *id*. |
| **Get Items** | ![The "Data Store Reference: Get Items" icon. This icon resembles a database can, or database stack: a cylinder that is bisected at its top. Note that this is the same icon as the previous one.](<Workflow Data Can.png>) | Fetches multiple items from a Rapid Table using: a selected table view, a [lodash array expression for *selection*](</docs/Rapid/4-Keyper Manual/3-Workflow/formatting-arrays-with-lodash/formatting-arrays-with-lodash.md>) and a [lodash expression for *filtering*](</docs/Rapid/4-Keyper Manual/3-Workflow/filtering-values-with-lodash/filtering-values-with-lodash.md>). |