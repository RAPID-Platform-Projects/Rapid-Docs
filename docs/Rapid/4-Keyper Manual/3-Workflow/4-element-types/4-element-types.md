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

A **Start Event** is where a **Workflow Process** begins. A **Start Event** that is triggered will create a token, which will move along the diagram's flow until it is paused or discarded.

To use a **Start Event**, place a [Default Start Event](</docs/Rapid/4-Keyper Manual/3-Workflow/4-element-types/5-start-events/5-start-events.md>) on the **Canvas** and change its type using the **Configuration Panel**.

![The "Start Event" as it appears on the canvas. It resembles an empty, white circle.](<Start Event Base.png>)

> **Above:** A default *Start Event*

## Intermediate Event Types

**Intermediate Events** are triggered when certain configured conditions are met. If an **Intermediate Event** is set to *interrupt* the diagram, it will discard all other active tokens on the process diagram, and then generate a new token. If an **Intermediate Event** is set to *non-interrupt*, it will not discard all other active tokens, and will instead simply generate a new token.

To access an **Intermediate Event Type**, place a [Default Intermediate Event](</docs/Rapid/4-Keyper Manual/3-Workflow//4-element-types/6-intermediate-events/6-intermediate-events.md>) on the **Canvas** and change its type using the **Configuration Panel**.

![The "Intermediate Event" as it appears on the canvas. It resembles a circle with a thick white border.](<Intermediate Base.png>)

> **Above:** A default *Intermediate Event*

## End Event Types

**End Events** will discard a token that arrives on them.

To access an **End Event**, place an [End Event](</docs/Rapid/4-Keyper Manual/3-Workflow/4-element-types/7-end-events/7-end-events.md>) on the **Canvas**. You can change its type using the **Configuration Panel**.

![The "End Event" as it appears on the canvas. It resembles a circle with a thick, black border.](<End Base.png>)

> **Above:** A default *End Event*

## Task Types

**Tasks** can be completed by users or by the Rapid system. They represent work that needs to be completed before the process flow will continue.

You can access task types by placing a [Default Task](</docs/Rapid/4-Keyper Manual/3-Workflow/4-element-types/8-tasks/8-tasks.md>) on the **Canvas** and change its type using the [Properties Panel](</docs/Rapid/4-Keyper Manual/3-Workflow/3-drawing-diagrams/3-drawing-diagrams.md>).

![A screenshot of a default task element. The task is a rounded rectangle that is empty inside.](Task.png)

> **Above:** A default *Task Event*

## Intermediate Boundary Event Types

This is an element that combines both **Task** and **Intermediate Event**. If the conditions for the **Boundary Event** are met, the **Boundary Event** will trigger before the task is completed. When the task is completed all **Boundary Events** are discarded.

- An *interrupting* **Boundary Event** will discard the task it is attached to. 
- A *non-interrupting* **Boundary Event** will *not* discard the task it is attached to.

Boundary events are created by placing an **Intermediate Event** on top of a **Task**. These events can then have their type configured using the **Configuration Panel**. You can [read more about **Intermediate Boundary Events**](</docs/Rapid/4-Keyper Manual/3-Workflow/4-element-types/6-intermediate-events/boundary-events/boundary-events.md>).

![A screenshot demonstrating the appearance of a boundary event type of element. The screenshot shows a task rectangle which is rounded in the corners. On the top of the task is a timer boundary event: this event has a symbol that resembles a clock. The event symbol has a thick white outline.](<Boundary Example.png>)

> **Above:** An example *Boundary Event*

## Data Store Reference Types

**Data Store References** retrieve or update data from a Rapid database. They can be used to return a single item, or multiple items.

To use a **Data Store References**, place a [Data Store Reference](</docs/Rapid/4-Keyper Manual/3-Workflow/4-element-types/9-data-store-reference/9-data-store-reference.md>) on the **Canvas** and change its type using the [Properties Panel](</docs/Rapid/4-Keyper Manual/3-Workflow/3-drawing-diagrams/3-drawing-diagrams.md>).

![A "Data Store Reference: Get Item" as it appears on the canvas. It resembles a database can, or database stack: a cylinder that is bisected at its top. ](<Workflow Data Can.png>)

> **Above:** A *Data Store Reference* element

## Gateways

**Gateways** control the logical flow of a process diagram, and allow you to apply conditional logic that will determine which path a token will travel down.

To use a **Gateway**, use to the **toolbar** to place a [Gateway](</docs/Rapid/4-Keyper Manual/3-Workflow/4-element-types/10-gateways/10-gateways.md>) on the **Canvas** and change its type as desired using the **Configuration Panel**.

![A "Gateway" as it appears on the canvas. It resembles a diamond. In this example, the Gateway is configured to be an exclusive Gateway, so inside the Gateway is a cross shape.](<Gateway Example.png>)

> **Above:** An *Exclusive Gateway*

## Flows / Links

Flows (or Links), control the direction of tokens across the process diagram. Flows will move any token in the direction of the arrow, and act as bridges between other elements.

Selecting this element by clicking on it will allow you to configure conditions that determine when a token is permitted to travel along this element.

To add a **Flow** to your diagram, you can:
- Use the **Toolbar** to place a [Global Connection](</docs/Rapid/4-Keyper Manual/3-Workflow/2-drawing-tools/2-drawing-tools.md>) between two elements on the **Canvas**
- Select an element, and then click the **Global Connect** button that appears in the **Configuration Panel**

![A "Flow" or "Link" as it appears on the canvas. It resembles a black arrow with a triangular point.](<Flow Example.png>)

> **Above:** A *Flow Connection* between two elements