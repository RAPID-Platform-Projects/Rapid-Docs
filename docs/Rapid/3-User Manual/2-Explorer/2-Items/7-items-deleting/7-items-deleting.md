# Deleting Items

## Avoiding Deleting Where Possible

Often, you should avoid deleting items. For example, if you had a employee leave the company, it might be tempting to delete their item from the **Employees** table. However, this can cause problems:

- Other items (such as the projects the employee was working on) might be linked to that employee via Lookup Fields, or Linked Items. Those projects will now have no employee assigned to them.

- If payroll needs to contact a past employee, this will be difficult if their item is deleted.

### Instead of Deleting

Instead of deleting an item, you could ask your System Administrator to ensure that the relevant item contains a *Status* column. Here, you can set the item from *Active* to *Inactive*. 

This allows you to build a [View](</docs/Rapid/3-User Manual/2-Explorer/4-Views/4-Views.md>) to filter out "Inactive" items. This way, the information can still be found by changing the View, but it will disappear from your company's daily operations.

### When to Delete Items

Sometimes deleting items is necessary. For instance:

- An item was created as a "test", and now needs to be removed.
- An item's data is fundamentally incorrect, broken, or is an unwanted duplicate.

In cases like these, deleting may be necessary.

## Deleting Items via Tables



## Deleting Items via Pages

