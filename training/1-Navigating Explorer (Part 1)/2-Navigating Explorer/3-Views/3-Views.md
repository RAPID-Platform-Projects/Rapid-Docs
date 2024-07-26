# Understanding Views

Tables can be **filtered** with **views**.

## What is a View

When a **view** is a filter on a table. **Views** allow you to:
- Change which columns are displayed on the table
- Limit which rows appear on the table (even when searched)

You can change a view by going to the **Command Bar** at the top of the table, and clicking the dropdown menu with the icon of a filter.

You can also use the **Search Bar** on a table to quickly search a table's **view** for specific **items** or rows.

## Why are Views Important?

**Views** allow us to quickly find the information we require.

:::note[Example]
e.g. What if I only want to see the *Contacts* for my company who have been *Archived*? In Rapid Business, I can switch to the *Archived* **view** on my *Contacts* table to do this.
:::

## Creating a View

You can create your own **views** to filter data on any table.

To create a view, go to the dropdown menu where we changed our view, and click **Create View**

For example, let's say we want to create a view that only shows the *Contacts* we have in *Australia*.

1. Give the view a name (e.g. "Australian Contacts")
2. Scroll down to the **View Filter**
3. Add a new filter rule with the **+ Rule** button
4. Choose the *Country* column from the drop-down menu
5. Ensure that the logic is set to `=` (equals)
6. Type the word *Australia* in the final box

This tells the view to only show **rows** where the *Country* column contains exactly one word: "Australia".

## Editing and Deleting a View

We can edit how a view's columns appear by clicking the **pencil icon** in the **Command Bar**.

Here, we can resize or reorder our columns.

Alternatively, we can edit a view's logic and appearance by clicking the **Edit View Settings** button on the far right-hand side of the page.

As we saw earlier, rules can be added with teh **+ Rule** button.

We can also declare whether **all the rules be obeyed** for an item to be displayed in the view (using the **AND** option).

Or, whether **any of the rules are obeyed** for the item to be displayed in the view (using the **OR** option).

You can also **delete** a rule by clicking the **x** beside it.