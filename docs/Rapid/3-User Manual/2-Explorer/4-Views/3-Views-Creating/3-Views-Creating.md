## Creating a View

Custom **Views** can be created via the **Drop-down Views** menu button when viewing a Table, Gantt Chart, or Board. Having custom views allows for you to switch between them, depending on your needs. Alternatively, other users may require different views, depending on their needs or role.

To create a custom view:

1. Press the **Dropdown Views** button.
2. In the dropdown menu that appears, select **Create View**.

![A screenshot that shows the location of the "Create View" button. The process for creating a new view is described in the steps above. In this screenshot, the "Create View" button is annotated with a red box to highlight its location.](<Views Dropdown Create.png>)

3. Pressing *Create View* will bring up the configuration for the view. The initial configuration fields for the view will default to the values being used for the current view. Essentially, this means when you create a new view, you **clone** the current view, and then can make changes and adjustments to it.

4. Inputting any *sorting* or *filtering* within the **Edit View** flyout will commit those changes to the view after it is created. After giving the view a title, you will now be able to create it.

![A screenshot demonstrating the "Create New" panel that will open when creating a new view. The title of the panel states "Edit Datasource", with a greyed-out save button beneath it. The panel contains several fields, such as "Title" (which is highlighted in red and reads "Title column is required"), as well as a "Default Sort Column", "Default Sort Order", "View Filter", "Extra Filters" and "Columns".](<Views Create New.png>)

Once a view is created, it will be available from the **Views Dropdown** menu button, unless it is hidden by a System Administrator. Each of the sections of the view creation side panel are explained below.

### Details

Every **View** requires a title. The side panel will not allow you to save a **View** unless it has a title. This title will appear in the dropdown menu with the other created views.

### Sort

The default sort on a data table is 'Created Date', meaning that the newest items will be at the top. This however is not always desirable. Column sorting allows you to order the data table by the specified field. The sorts have two states. Largest to smallest and smallest to largest. To apply a sort press the edit view button. This will put you in the table edit mode.

Column sorting allows users to order the data table by the specified field. The default sort filter that is applied to a data table is 'Created Date', in which that the newest items will be at the top. Users will also be able to sort from smallest to largest or vice versa.

//TODO image

To enable a sort, click on a column header. Once a sort has been enabled, clicking again will cycle between sorting descending and ascending. The sort will not be saved until the save button is pressed, this will also leave the edit mode. After saving, the change will be committed to the database and any user who then accesses the site will see the change in the view reflected as such.

//TODO image


### View Filter

Column filtering allows you to hide columns from the view, it is a simple reversible action that can help reduce clutter. To hide one or more columns from the view open the view edit configuration and change the selection of fields that are visible in the view.

Rule based filtering allows you to narrow down the data set with more precision than exclusively using the quick filter. The following rules are supported by Rapid. Adding a rule requires you to define the exact column the rule should apply to.

- Exact string match: Only returns rows where the specified column is an exact match to the input string. This is denoted by the '=' symbol.
- Does not equal: Only returns rows where the specified column is not equal to the input string. This is denoted by the '!=' symbol.
- Greater than: Returns rows where the specified column is a greater number than input. his is denoted by the '&gt;=' symbol.
- Greater than or equal: As above but also includes equal to. This is denoted by the '&gt;=' symbol.
- Less than: Returns rows where the specified column is a smaller number than input. This is denoted by the '&lt;' symbol.
- Less than or equal: As above but also includes equal to. This is denoted by the '&lt;=' symbol.
- Partial string match: Performs a partial string match. This is denoted by the 'contains' choice.

💡 It is also important to note that all symbols can be used for strings as well as integers.

To open configuration for the rules press the edit view button, then to add a rule press '**+ Rule**'.

//TODO images

It is possible to add multiple rules, the behaviour for adding multiple rules depends on the operator chosen. There are OR rules as well as AND rules. Making a rule group with OR rules specifies that one or another rule should match. AND rules specify that all of the rules must match and will only return rows of data where the rules are true.

### Extra Filters

When using the view extra filters these tokens are available

- @me
- @startOfQuarter
- @endOfQuarter
- @startOfMonth
- @endOfMonth
- @startOfWeek
- @endOfWeek
- @today
- @tomorrow

For example

![OdataViews.png](<Views OData.png>)

### Columns

