# Views

A **View** is a way of filtering [Items](</docs/Rapid/3-User Manual/2-Explorer/2-Items/1-items-overview/1-items-overview.md>). A view can be created, edited, or deleted when viewing a [Table](</docs/Rapid/3-User Manual/2-Explorer/3-Pages/2-Page Components/Data Table Component/Data Table Component.md>), [Gantt Chart](</docs/Rapid/3-User Manual/2-Explorer/3-Pages/2-Page Components/Gantt Component/1-how-to-interact-with-a-gantt-chart-in-explorer/1-how-to-interact-with-a-gantt-chart-in-explorer.md>), or [Board](</docs/Rapid/3-User Manual/2-Explorer/3-Pages/2-Page Components/Board Component/Board Component.md>). Views also affect which items are visible when using a [Lookup Field](</docs/Rapid/3-User Manual/2-Explorer/2-Items/1-items-overview/1-items-overview.md#column-and-field-types>), [Multi-Lookup Field](</docs/Rapid/3-User Manual/2-Explorer/2-Items/1-items-overview/1-items-overview.md#column-and-field-types>) or [User Field](</docs/Rapid/3-User Manual/2-Explorer/2-Items/1-items-overview/1-items-overview.md#column-and-field-types>). This is the essential method for **sorting** the **order** of items, and determining which items should **visible** or **hidden**.

In Rapid, the default view is called the *All* view. You can also create, edit, or delete views. Switching between views is useful, because they allow us to find the data quickly.

For example, if you are a project manager for a company, you do not want to view all projects that the company has ever undertaken. Instead, you will want to view all the *current* projects that *you* are managing. If we needed to see projects that have concluded, we could build a view for this as well. Therefore, by using views, we can essentially "zoom in" on the items we need, and hide the items that we don't need.

### Views in Tables

When using a **View** with [Data Table](</docs/Rapid/3-User Manual/2-Explorer/3-Pages/2-Page Components/Data Table Component/Data Table Component.md>), you can control:
- If an item appears in a the Table's list, or not
- The order that items are displayed in
- Which columns are displayed

Note that any new columns added to a table will be automatically added to the *All* View. [System Columns](</docs/Rapid/3-User Manual/2-Explorer/1-Tables/4-default-fields/4-default-fields.md>), however, will need to be added manually to a View if they are required.

![A screenshot that demonstrates how a view filters items in a table. The screenshot is annotated to show that the "Active" view has been selected, and that it selects the ](<Views Active.png>)

> In the example above, we can see the View titled "Active" is being used. The table will now only show projects that **are not** *Completed* or *Aborted*. This is achieved by filtering the choices that appear in the *Status* column.

![Alt text](<Views Inactive.png>)

> In the same table, if the view is set to "Inactive", the table will now only display projects that **are** *Completed* or *Aborted*. This is achieved by filtering the choices that appear in the *Status* column.

### Views in Gantt Charts



### Views in Board





Views allow you to decide which table columns, sort the order of items that appear, and set rules


## Creating a View

Having custom views allows for multiple different views to be chosen. These views may be dependant on an item set or different users may require a different view. Having a custom view is a quick way of cycling between the same data set but with different sorts and filters applied. The alternative to having multiple custom views would be exclusively using the '*All View*' and changing the filters and sorts each time you wish to change the view. To create a new custom view, press the '*Views*' button this will open a drop-down.

//TODO image

Pressing '*Create View*' will bring up the configuration for the view. The initial configuration for the view being made will always be the current configuration of the view already selected. Inputting any sorts and filters on the '*Edit View*' flyout will commit those changes to the view after it is created. After giving the view a title you will now be able to create it. Any custom views will be selectable in the drop-down menu for the views.

//TODO image

## Column Sort

The default sort on a data table is 'Created Date', meaning that the newest items will be at the top. This however is not always desirable. Column sorting allows you to order the data table by the specified field. The sorts have two states. Largest to smallest and smallest to largest. To apply a sort press the edit view button. This will put you in the table edit mode.

Column sorting allows users to order the data table by the specified field. The default sort filter that is applied to a data table is 'Created Date', in which that the newest items will be at the top. Users will also be able to sort from smallest to largest or vice versa.

//TODO image

To enable a sort, click on a column header. Once a sort has been enabled, clicking again will cycle between sorting descending and ascending. The sort will not be saved until the save button is pressed, this will also leave the edit mode. After saving, the change will be committed to the database and any user who then accesses the site will see the change in the view reflected as such.

//TODO image

## Rule Based Filtering

Rule based filtering allows you to narrow down the data set with more precision than exclusively using the quick filter. The following rules are supported by Rapid. Adding a rule requires you to define the exact column the rule should apply to.

- Exact string match: Only returns rows where the specified column is an exact match to the input string. This is denoted by the '=' symbol.
- Does not equal: Only returns rows where the specified column is not equal to the input string. This is denoted by the '!=' symbol.
- Greater than: Returns rows where the specified column is a greater number than input. his is denoted by the '&gt;=' symbol.
- Greater than or equal: As above but also includes equal to. This is denoted by the '&gt;=' symbol.
- Less than: Returns rows where the specified column is a smaller number than input. This is denoted by the '&lt;' symbol.
- Less than or equal: As above but also includes equal to. This is denoted by the '&lt;=' symbol.
- Partial string match: Performs a partial string match. This is denoted by the 'contains' choice.

💡 It is also important to note that all symbols can be used for strings as well as integers.

## Configuring Filters

To open configuration for the rules press the edit view button, then to add a rule press '**+ Rule**'.

//TODO images

It is possible to add multiple rules, the behaviour for adding multiple rules depends on the operator chosen. There are OR rules as well as AND rules. Making a rule group with OR rules specifies that one or another rule should match. AND rules specify that all of the rules must match and will only return rows of data where the rules are true.

## Column Filtering

In certain contexts, having all columns visible in a data table can be redundant or an eye sore. Removing redundant fields from the view will do two things:

1. Make room for important fields
2. Reduce clutter making the table easier to read and more usable overall.

Column filtering allows you to hide columns from the view, it is a simple reversible action that can help reduce clutter. To hide one or more columns from the view open the view edit configuration and change the selection of fields that are visible in the view.

//TODO image