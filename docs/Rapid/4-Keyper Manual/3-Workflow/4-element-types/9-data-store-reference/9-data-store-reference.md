# Data Store References

The **Data Store Reference** or "Data Can" is used for both retrieving items from a Rapid Database. When a Start Event in a process diagram is triggered, any **Data Store References** on the canvas will obtain the item(s) they are configured to find. Below are the two methods of configuring **Data Store References**.

| Element Type | Symbol | Function |
| --- | --- | --- |
| **Get Item** | ![The "Data Store Reference: Get Item" icon. This icon resembles a database can, or database stack: a cylinder that is bisected at its top. ](<Workflow Data Can.png>) |  Fetches a single item from a Rapid Table using an item *id*. |
| **Get Items** | ![The "Data Store Reference: Get Items" icon. This icon resembles a database can, or database stack: a cylinder that is bisected at its top. Note that this is the same icon as the previous one.](<Workflow Data Can.png>) | Fetches multiple items from a Rapid Table using: a selected table view, a [lodash array expression for *selection*](</docs/Rapid/Keyper%20Manual/Workflow/Lodash/formatting-arrays-with-lodash/>) and a [lodash expression for *filtering*](</docs/Rapid/Keyper%20Manual/Workflow/Lodash/filtering-values-with-lodash/>). |

## Data Associations

These are used to associate data elements with Activities, Processes, and Tasks. To create a **Data Association**, create a connection between an element and a Data Store Reference.

Doing this will allow you to update the data that was retrieved

![A screenshot of the data association. The data association is a dotted line with an arrow head at one end. The screenshot is annotated with a red box to indicate the location of the data association. The data association is moving from a default task (on the left) to a data store reference (on the right).](<Data Association.png>)

When you click on a **Data Association**, it enables you to set up the specific data that the **Data Association** will modify, as well as the new values that will be assigned to this data.

:::info[Tokens]
Tokens will not travel down a **Data Association**. The diagram should use [Sequence Flows](</docs/Rapid/Keyper%20Manual/Workflow/element-types/flows/#sequence-flow>) or [Default Flows](</docs/Rapid/Keyper%20Manual/Workflow/element-types/flows/#default-flow>) to control the direction of tokens.
:::