## Linked Items

Items can be linked to other items. This allows additional functionality for tracking connections between items, and can be automated by a system administrator.

When an **Item** is loaded in [Explorer](</docs/Rapid/3-User Manual/2-Explorer/0-navigating-explorer/0-navigating-explorer.md>), it also fetches all of the [Linked Items](</docs/Rapid/3-User Manual/2-Explorer/3-Pages/2-Page Components/linked-items/linked-items.md>) connected to it. To view the items that are linked to the current item, open the **Links** dropdown menu in the [Command Bar](</docs/Rapid/3-User Manual/glossary/glossary.md#command-bar>).

![A screenshot that shows Linked Items button location in the Command Bar when viewing an Item Page. The button has an icon of two chainlinks. The screenshot has been annotated with a red box to highlight the button's location.](<Items Linked Items.png>)

After linking on this button, the **Linked Items Panel** will open, displaying all categories or linked items as accordian menus.

![A screenshot that shows how the Linked Items Panel appears to the user. The screenshot will be explained in further detail in the next table.](<Linked Items Raw.png>)

Below is a list of the attributes and features of the **Linked Items Panel**.

| Attribute | Description | Screenshot |
|---|---|---|
| *Filter* | This filter search bar allows you to search for a particular linked item. To use the filter, type in the name of the item and press enter. The panel will then only display items that contains the filter's text in their title. | ![A screenshot demonstrating the location of the Filter on the Linked Items Panel. The screenshot is annotated in red to show the location of the Filter.](<Linked Items Filter.png>)|
| *Accordian Menus* | Each linked item will be contained in an accordian menu that describes which Table the item is stored in, or what kind of item it is. Note that the accordian menu has a sideways chevron **>** as well as the title of the Table, and a number in brackets to denote how many items from that Table have been linked. | ![A screenshot demonstrating the location of the Accordian Menus on the Linked Items Panel. The screenshot is annotated in red to show the location of the Accordian Menus.](<Linked Items Accordian.png>)|
| *Linked Item Rows* | Clicking on the *Accordian Menus* will cause them to "open" and display the items inside. The chevron will now point downwards to indicate the menu has opened. Each linked item appears with a green background, and two additional buttons. | ![A screenshot that demonstrates how Linked Items appear underneath Accordian Menus. The screenshot is annotated with red boxes to highlight the location of these items. In the example of this screenshot, the item's read "Confirm Attendance" and "Attendance ID: 16".](<Linked Items List.png>) |
| *Open Item* | At the end of each *Linked Item*'s row is the **Open Item** button, which will open the item in the same browser tab by default. When pressing this button, Rapid will prompt you to save your changes to the current item before navigating away. | ![A screenshot demonstrating the location of the "Open Item" button on the Linked Items Panel. The screenshot is annotated in red to show the location of the "Open Item" button.](<Linked Items Goto.png>) |
| *Unlink Item* | At the end of each *Linked Item*'s row is the **Unlink Item** button, which will delete the connection between linked items. Note that the items themselves will not be deleted, just the link or connectio between them. | ![A screenshot demonstrating the location of the "Unlink Item" button on the Linked Items Panel. The screenshot is annotated in red to show the location of the "Unlink Item" button.](<Linked Items Delete.png>) |
| *Add Link* | At the bottom of the panel is the **Add Link** button, which allows the user to navigate through a list of all Tables and Items in the site, to link an item. This is only one method of linking items. Linking items can also be accomplished automatically via [Workflows](</docs/Rapid/3-User Manual/4-Workflow/workflow-introduction.md>). | ![A screenshot demonstrating the location of the "Unlink Item" button on the Linked Items Panel. The screenshot is annotated in red to show the location of the "Unlink Item" button.](<Linked Items Add New Items.png>) |

### Linked Items and Page Components
Note that there are several other methods for viewing linked items. The following page components will also display items that are linked to the current item:

- [Linked Items Component](</docs/Rapid/3-User Manual/2-Explorer/3-Pages/2-Page Components/linked-items/linked-items.md>)
- [Data Table Component](</docs/Rapid/3-User Manual/2-Explorer/3-Pages/2-Page Components/Data Table Component/Data Table Component.md>)
- [User Fields, Lookup Fields, and Multi-lookup Fields](</docs/Rapid/3-User Manual/2-Explorer/3-Pages/2-Page Components/Form Component/Form Component.md#user-fields-and-lookup-fields>)