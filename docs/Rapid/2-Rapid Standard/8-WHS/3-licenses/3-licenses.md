# Licenses

The **WHS** module contains a **Licenses** table for storing data such as which employees posses a forklift license, white card, blue card, etc. Rapid system will also notify the WHS team when an employee's license will soon expire.

## Licenses Table

The **Licenses** table can be access by:

1. Selecting **WHS** in the [Sidebar](</docs/Rapid/3-User Manual/glossary/glossary.md#sidebar>)
2. Selecting **Licenses** in the flyout panel that opens

![A screenshot of the menu buttons that must be pressed in order to access the "Licenses" table. The first button is a folder in the sidebar titled "WHS" and has an icon of a heart with an ECG line through its centre. The link to the table reads "Licenses" and has an icon of an ID card. Both items that have been pressed have a white background with blue text (as opposed to the unpressed menu items, which have a blue background and white text).](<Licenses Sidebar.png>)

By default, the **Licenses** table will contain the following information:

![A screenshot of the licenses table. This screenshot is used to show the reader how the licenses table will appear, and the types of information it will display. The table contains the following column headers: "Name", "License Code", "Employee", "License Type", "Status", and "Expiry Date".](<Licenses Table.png>)

## Creating License Items

To create a new **License** record:

1. Navigate to the **Licenses** data table (*this process is outlined above*)
2. Press the **New License** button in the table's [Command Bar](</docs/Rapid/3-User Manual/glossary/glossary.md#command-bar>)

![A screenshot showing the location and appearance of the "New License" button in the License table's Command Bar. The button reads "New License" and has an icon of an ID card. The screenshot is annotated with a red box to highlight the location of the button.](<Licenses New Button.png>)

3. The **New License** create screen will open in a side panel
4. Enter the details of the **License**
5. Press **+ Create** or **Create and Open** at the top of the side panel

![A screenshot of the "New License" create screen. At the top is a large navy header that reads "New License". There is also a cross in the upper left corner for closing the side panel. Underneath is the usual command strip buttons which read: "+ Create", "Create and Open", and "Undo Changes". Beneath this are the fields for the license record: "Employee", "License Type", "Expiry Date", and "Additional Details". ](<Licenses Create Panel.png>)

## Adding New License Types

As a user, you may wish to add new types of licenses. This can be accomplished by pressing the *License Type* lookup field when creating a new license, or editing a license on its item page.

The lookup menu that opens will allow you to select a type of license, or add a new type of license by pressing the **+ New License Type** at the bottom of the menu.

![A screenshot of the License Type lookup menu. The screenshot is annotated with a red box to highlight the location of the "+New License Type" button at the bottom of the menu.](<Licenses New Type.png>)

:::note[License Type]
This is a table in Rapid Standard that cannot be accessed via the [Sidebar](</docs/Rapid/3-User Manual/glossary/glossary.md#sidebar>), as its items will rarely require editing. If you need to remove a **License Type**, or view the table, this can be accomplished by [finding the table in **Designer**](</docs/Rapid/4-Keyper Manual/2-Designer/1-Tables/1-all-about-tables-in-designer/1-all-about-tables-in-designer.md>).
:::

## Viewing License Items

You can access, view, or edit individual incident items by [opening them from the **Licenses** table](</docs/Rapid/3-User Manual/2-Explorer/1-Tables/1-viewing-data-using-tables/1-viewing-data-using-tables.md#item-icons>). When a **License** record is opened, the details page is structured as illustrated below:

![A screenshot of the Licenses details page. The purpose of this screenshot is to demonstrate what information can be recorded when creating a license record. There are three main sections on the page, which are outlined below.](<Licenses Item Page.png>)

The **License** page contains the following sections:

| Section | Explanation |
| --- | --- |
| **Attachment** | A photo or photocopy of the license can be attached to the item here. |
| **General Details** | This section contains fields for recording information about the License, such as: the *Employee* it is assigned to, *Expiry Date* for the License, *License Type*, *Status*, and *Additional Details*. |
| **License Timeline** | Comments, reminders, and updates to the item are recorded here. |

## License Renewal Reminders

Rapid Standard comes packaged with a **Workflow Process** that is designed to send reminders to the WHS team when an employee's license will expire in **1 month's** time.

For this reminder to occur, an accurate date must be entered into the *Expiry Date* field in the **License** item.

The reminder will appear as a **Task**, and will be assigned to the WSH team.