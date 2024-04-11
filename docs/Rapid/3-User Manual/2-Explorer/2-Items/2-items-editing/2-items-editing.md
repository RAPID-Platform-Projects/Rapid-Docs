# Viewing and Editing Items

## Opening an Item
There are several ways for us to open an item to view or edit it.

### Clicking the Icon

We can click on the item's **Icon**. This is a small image on the far left side of the item row. The icon will become underlined, and your mouse cursor will change to a hand to indicate that this is a hyperlink to another webpage.

![A screenshot that shows how the user can click on the icon of an item to open it.](<Items Example Click Icon.png>)

### Clicking the Title Column

![A screenshot that shows how the user can click on the title of an item to open it.](<Items Example Click Title.png>)

### Double-clicking on the Row

![A screenshot that shows how the user can click anywhere on the row of an item in order to open it.](<Items Example Click Row.png>)

## Fields and the Item Page

Note in the screenshot below that once we open an item, the item's data is no longer arranged as columns. This is called the **Item Page**, and it is the main method for users to edit data on an item. 

![A screenshot that shows the item row that was opened, now in the page view.](<Items Example Fields.png>)

You will notice that the Columns we created (*Name*, *DOB*, and *Email*) have changed appearance. These boxes, where data can be typed or entered, are called **Fields**. All columns created by your system administrator can appear as a **Field**.

This is also where any fields that may have been hidden from view in the table can be viewed and edited.

## Saving Changes
Any changes made to an item will need to be saved before they will take effect. To save the changes to an item, press the **Save** button, or the **Save and Close** button in the [Command Bar](</docs/Rapid/3-User Manual/glossary/glossary.md#command-bar>).

![A screenshot that shows the location of the "Save" and "Save and Close" buttons in the Command Bar. The buttons are annotated with a red box to show their location more clearly. The "Save" button has an icon of a Floppy Disk, and the "Save and Close" icon is stylised as a Floppy Disc, with an arrow pointing into a folder.](<Items Save.png>)

Your system administrator can also ensure that certain menu actions will prompt you to save your changes before you are navigated to a different page.

## Updating Subqueries & Computed Fields

The **Subquery** and **Computed** fields of a Rapid item are unique, in that they must be refreshed before any changes to their contents appears. This is because these fields must execute code to calculate what data they should display. When the contents of an item changes, this means the code may need to be run a second time for the changes to appear in these types of fields.

For example, we could have a **Computed Field** that combines the Name of an Employee, and their Email address.

![Alt text](<Items Subquery Example.png>)

Subquery and Computed Fields are visually distinct from other fields on an item: they will always have a grey background, and will not allow a user to edit their data directly.

 