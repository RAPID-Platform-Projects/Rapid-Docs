# Deleting Items

## Avoiding Deleting Where Possible

Often, you should avoid deleting items. For example, if you had a employee leave the company, it might be tempting to delete their item from the **Employees** table. However, this can cause problems:

- Other items (such as the projects the employee was working on) might be linked to that employee via Lookup Fields, or Linked Items. Those projects will now have no employee assigned to them.

- If payroll needs to contact a past employee, this will be difficult if their item is deleted.

### Instead of Deleting

Instead of deleting an item, you could ask your System Administrator to ensure that the relevant item contains a *Status* column. Here, you can set the item from *Active* to *Inactive*. 

This allows you to build a [View](</docs/Rapid/2-User Manual/2-Explorer/4-Views/1-Views-Overview/1-Views-Overview.md>) to filter out "Inactive" items. This way, the information can still be found by changing the View, but it will disappear from your company's daily operations.

### When to Delete Items

Sometimes deleting items is necessary. For instance:

- An item was created as a "test", and now needs to be removed.
- An item's data is fundamentally incorrect, broken, or is an unwanted duplicate.

In cases like these, deleting may be necessary.

### Deleting Can Be Disabled

If an item cannot be deleted using the following steps, that is most-likely because your System Administrator has disabled item deletion within that **Data Table** component. This usually is done to prevent unwanted data removal, as outlined above.

However, **Data Tables** permit item deletion by default. If item deletion is enabled, you can follow the following processes.

## Deleting Items via Tables

1. Open a [Table](</docs/Rapid/2-User Manual/2-Explorer/1-Tables/1-viewing-data-using-tables/1-viewing-data-using-tables.md>) in [Explorer](</docs/Rapid/2-User Manual/2-Explorer/0-navigating-explorer/0-navigating-explorer.md>).
2. Select the item or items that you wish to delete
3. In the Command Bar, note that the red button labelled `Delete X <Table Name>` has appeared.
4. Press **Delete**.

![A screenshot that demonstrates how to delete items via a table. In this example, the table is an Employees table. The screenshot is annotated in red, with two red boxes indicating where the user should click, and an arrow between them indicating the order that they should be pressed. In this example, the user has selected the Employee item: "Wanda Jones", and will now click the red button that says "Delete 1 Employee" the red button also has a red icon of a trash can.](<Items Deleting.png>)

> Note that it is preferable to set important items like *Employees* to *Inactive*, rather than deleting them.

## Deleting Items via Pages

1. Open an [Item](</docs/Rapid/2-User Manual/2-Explorer/2-Items/1-items-overview/1-items-overview.md>) in [Explorer](</docs/Rapid/2-User Manual/2-Explorer/0-navigating-explorer/0-navigating-explorer.md>).
2. In the Command Bar, note that the red button labelled **Delete** is present.

![A screenshot showing how the Delete button appears on a page view of an item. The screenshot has been annotated with a red box to highlight the button's location. The delete button has red text that reads "Delete" and a red icon of a trash can. The rest of the screenshot is an example Employee page.](<Items Deleting Page.png>)