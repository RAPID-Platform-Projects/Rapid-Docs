# Data Tables

A data table is a page component used for viewing large amounts of data and is the simplest way of conveying a lot of information. To make the data more readable there are a couple key features in Explorer. These include; the quick filter, rule based filter, column filter and row sort.

## The Quick Filter

The quick filter performs a partial string match against data in all visible columns of the data table. To perform a quick filter, click on the quick filter component, type the string you wish to search for followed by the Enter key.

//TODO image

Once the search has been made, there are three ways to clear the quick filter; manually deleting the search phrase followed by enter, pressing the exit character in the quick filter or refreshing the page.

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

## Row Sort

The default sort on a data table is 'Created Date', meaning that the newest items will be at the top. This however is not always desirable. Row sorting allows you to order the data table by the specified field. The sorts have two states. Largest to smallest and smallest to largest. To apply a sort press the edit view button. This will put you in the table edit mode.

Row sorting allows users to order the data table by the specified field. The default sort filter that is applied to a data table is 'Created Date', in which that the newest items will be at the top. Users will also be able to sort from smallest to largest or vice versa.

//TODO image

To enable a sort, click on a column header. Once a sort has been enabled, clicking again will cycle between sorting descending and ascending. The sort will not be saved until the save button is pressed, this will also leave the edit mode. After saving, the change will be committed to the database and any user who then accesses the site will see the change in the view reflected as such.

//TODO image

## The All View

In the above examples, the view that was edited was the '*All View*'. By default any entity, system or user created is made with a view. It is always called the '*All View*' any field on an entity will be added to this view, with the exception of system fields which are universal across all entities. These would have to be added manually to the view if required.

The 'All View' is a default, system created view that displays all items in a data table, without filtering. Though it does not show system fields which are universal across entities.

## Creating a View

`Having custom views allows for multiple different views to be chosen. These views may be dependant on an item set or different users may require a different view. Having a custom view is a quick way of cycling between the same data set but with different sorts and filters applied. The alternative to having multiple custom views would be exclusively using the '*All View*' and changing the filters and sorts each time you wish to change the view. To create a new custom view, press the '*Views*' button this will open a drop-down.

//TODO image

Pressing '*Create View*' will bring up the configuration for the view. The initial configuration for the view being made will always be the current configuration of the view already selected. Inputting any sorts and filters on the '*Edit View*' flyout will commit those changes to the view after it is created. After giving the view a title you will now be able to create it. Any custom views will be selectable in the drop-down menu for the views.

//TODO image