# Data Store References

The Data Store Reference or "Data Can" is used for both retrieving items from a Rapid Database, and also updating those items. The data can can be configured to retrieve a single item, or multiple items, as outlined below:

| Element Type | Symbol | Function |
| --- | --- | --- |
| **Get Item** | ![The "Data Store Reference: Get Item" icon. This icon resembles a database can, or database stack: a cylinder that is bisected at its top. ](<Workflow Data Can.png>) |  Fetches a single item from a Rapid Table using an item *id*. |
| **Get Items** | ![The "Data Store Reference: Get Items" icon. This icon resembles a database can, or database stack: a cylinder that is bisected at its top. Note that this is the same icon as the previous one.](<Workflow Data Can.png>) | Fetches multiple items from a Rapid Table using: a selected table view, a [lodash array expression for *selection*](</docs/Rapid/4-Keyper Manual/3-Workflow/formatting-arrays-with-lodash/formatting-arrays-with-lodash.md>) and a [lodash expression for *filtering*](</docs/Rapid/4-Keyper Manual/3-Workflow/filtering-values-with-lodash/filtering-values-with-lodash.md>). |