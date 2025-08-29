# Viewing and Editing Items

## Opening an Item
There are several ways for us to open an item to view or edit it.

### Clicking the Icon

We can click on the item's **Icon**. This is a small image on the far left side of the item row. The icon will become underlined, and your mouse cursor will change to a hand to indicate that this is a hyperlink to another webpage.

![A screenshot that shows how the user can click on the icon of an item to open it.](<Items Example Click Icon.png>)

### Clicking the Title Column

We can also press the title field of the item. The title of an item is emboldened, and an underline will appear when your mouse hovers over it.

![A screenshot that shows how the user can click on the title of an item to open it.](<Items Example Click Title.png>)

### Double-clicking on the Row

Alternatively, you can double-click anywhere on an item's row, and the item will open. The item's row will become highlighted in light grey when your mouse hovers over it.

![A screenshot that shows how the user can click anywhere on the row of an item in order to open it.](<Items Example Click Row.png>)

### Selecting Multiple Items

Rapid Platform allows you to select multiple items at once. This allows you to use a button from the [Command Bar](</docs/Rapid/2-User Manual/glossary/glossary.md#command-bar>), and apply its commands to multiple items.

- Read about [how to select multiple items in a Table](</docs/Rapid/2-User Manual/2-Explorer/1-Tables/3-manipulating-data-using-tables/3-manipulating-data-using-tables.md#selecting-multiple-items>)

## Fields and the Item Page

Note in the screenshot below that once we open an item, the item's data is no longer arranged as columns. This is called the **Item Page**, and it is the main method for users to edit data on an item. 

![A screenshot that shows the item row that was opened, now in the page view.](<Items Example Fields.png>)

You will notice that the Columns we created (*Name*, *DOB*, and *Email*) have changed appearance. These boxes, where data can be typed or entered, are called **Fields**. All columns created by your system administrator can appear as a **Field**.

This is also where any fields that may have been hidden from view in the table can be viewed and edited.

## Saving Changes
Any changes made to an item will need to be saved before they will take effect. To save the changes to an item, press the **Save** button, or the **Save and Close** button in the [Command Bar](</docs/Rapid/2-User Manual/glossary/glossary.md#command-bar>).

![A screenshot that shows the location of the "Save" and "Save and Close" buttons in the Command Bar. The buttons are annotated with a red box to show their location more clearly. The "Save" button has an icon of a Floppy Disk, and the "Save and Close" icon is stylised as a Floppy Disc, with an arrow pointing into a folder.](<Items Save.png>)

Your system administrator can also ensure that certain menu actions will prompt you to save your changes before you are navigated to a different page.

## Updating Subqueries & Computed Fields

The **Subquery** and **Computed** fields of a Rapid item are unique, in that they must be refreshed before any changes to their contents appears. This is because these fields must execute code to calculate what data they should display. When the contents of an item changes, this means the code may need to be run a second time for the changes to appear in these types of fields.

For example, we could have a **Computed Field** that combines the Name of an Employee, and their Email address.

![A screenshot demonstrating what a Computed or Subquery field looks like on an Item Page. The field has a grey background, and the screenshot is annotated with a red arrow and text that explains the field is a "Subquery Field".](<Items Subquery Example.png>)

**Subquery** and **Computed Fields** are visually distinct from other fields on an item: they will always have a grey background, and will not allow a user to edit their data directly.

Note that in the screenshot below, we have changed the employee's email address field from `wandajones@example.com` to `wandajones2@example.com`, however, this change is not seen in the **Subquery** field.

 ![A screenshot demonstrating that changing data in a field does not mean that data is then integrated into the calculations of subquery and computed fields. The email field remains as it was. The email field is highlighted in red for demonstration purposes.](<Items Subquery Change.png>)

 If we press **Save**, however, the **Subquery** field runs its internal code again and recalculates the value it should contain. Now, the new data is displayed in the subquery field.
 
 ![A screenshot demonstrating that by saving an item, the subquery and computed fields will be updated. The screenshot is annotated with a red box and arrow to highlight saving will change a value.](<Items Subquery Save.png>)

## Items can be Refreshed
If the data in an item is updated (e.g. by another user, or by an automated process), the item will need to be refreshed in order for that data to become visible. Refreshing the entire page is not desirable as you may need to reauthenticate, which will take time.

Rapid Platform includes an *Inline Refresh* button, that allows you to refresh all the items in an item, without leaving the page. The *Inline Refresh* is located in the [Command Bar](</docs/Rapid/2-User Manual/glossary/glossary.md#command-bar>), and has an icon that resembles a clockwise arrow.

![A screenshot that shows what the inline refresh button looks like. The screenshot is annotated with a red box. The inline refresh button is a clockwise arrow.](<Items Inline Refresh.png>)