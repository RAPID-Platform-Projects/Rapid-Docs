# Element Types

The **Workflow Toolbar** only contains the "base" types of diagram element. For example, using the **Toolbar** you can place a **Task**, but not a **User Task**. In order to configure an element and change its type, we must use the **Configuration Panel** once the element is placed on the **Canvas**.

To configure the type of element:

1. Select an element by clicking on it

2. Press the **Change Type** button on the **Configuration Panel**. The **Change Type** button has an icon of a wrench.

![A screenshot demonstrating the location and appearance of the "Change Type" button in the "Configuration Panel". The screenshot is annotated with a red box to highlight the location of the button. The button has an icon of a stylised wrench.](<Workflow Change Type Button.png>)

3. From the menu that appears, select a type of element

![A screenshot demonstrating the appearance of the "Change Type" menu that appears after clicking on the "Change Type" button in the "Configuration Panel". In this example, the user is configuring a Start Event. The options that appear are as follows (from top to bottom): "Intermediate Throw Event", "End Event", "Message Start Event", "Timer Start Event", "Conditional Start Event", and the mouse cursor is hovering over the final option, which is the "Signal Start Event"; this event has an icon of a circle with a triangle inside it. ](<Workflow Change Type Button Menu.png>)

4. The element will now be configured to that type, and its appearance will change to reflect this new type

![A screenshot demonstrating how the Start Event that had its type changed now has a new appearance. As it is now configured as a "Signal Start Event", the element's symbol is now a circle with a triangle inside.](<Workflow Change Type Finished.png>)

Below is a summary of all element types, and the base type that they are configured from:

| Element Type | Base Element | Description | How to Access |
| --- | --- | --- | --- |
| | Start Event | | |
| | Intermediate Event | | |
| | End Event | | |
| | Task | | |
| **Get Item** | Data Store Reference | Fetches a single item from a Rapid *Table* using an item *id*. | Place a Data Store Reference on Canvas, and use the [Properties Panel](</docs/Rapid/4-Keyper Manual/3-Workflow/3-drawing-diagrams/3-drawing-diagrams.md>) to configure the *Type* field. |
| **Get Items** | Data Store Reference | Fetches multiple items from a Rapid *Table* using a *table view*, a [lodash array expression for *selection*](</docs/Rapid/4-Keyper Manual/3-Workflow/formatting-arrays-with-lodash/formatting-arrays-with-lodash.md>) and a [lodash expression for *filtering*](</docs/Rapid/4-Keyper Manual/3-Workflow/filtering-values-with-lodash/filtering-values-with-lodash.md>). | Place a Data Store Reference on Canvas, and use the [Properties Panel](</docs/Rapid/4-Keyper Manual/3-Workflow/3-drawing-diagrams/3-drawing-diagrams.md>) to configure the *Type* field. |