# Viewing Data Using Tables

## Tables Display Data
Data Tables are the main method of viewing data in Rapid. A data table is a page component used for viewing large amounts of data and is the simplest way of conveying a lot of information. To make the data more readable there are a couple key features in Explorer. These include; the quick filter, rule based filter, column filter and row sort.

A data table presents a list of all items that have the same type. For example, the **Policies** table in *Rapid Standard* displays only policy items. The **Assets** tables displays assets.

![A screenshot that outlines all of the main components of a table. The screenshot is annotated with red boxes and red labels. The components that are annotated are: table title, the create item button, the table search bar, and the example of an item in a table.](<Data Table Overview.png>) 

## Tables Use Columns
The data of each item is split into columns. We can see that each item in this **Policies** contains information under the columns titled: *Document Name*, *Status*, *Embedded Files*, and *Share Link*.

![A screenshot that shows how data tables display items. Each item is broken up into columns, so that similar data types of items can be compared easily. The screenshot is annotated with red boxes, and a red text label that states "tables display items, and divide items into columns".](<Data Table Columns.png>)

### Item Icons
Each item in a table begins with an item icon. This icon represents all of the items in the table. This icon is also present beside the "New" button at the top of the table, and will appear next to the table's name in the [Sidebar](</docs/Rapid/3-User Manual/glossary/glossary.md#sidebar>).

You can click on the icon beside a table item, and this will navigate you to the item's page.

![A screenshot that shows the icons beside each item in a data table. The icons are also links that can be clicked in order to open an item in a table.](<Data Table Icons.png>)

### The Title Column
Note that the first column after the item icon is written **in bold**. When your mouse hovers over this **bold** field, it is also underlined. This is called the *Title Column*.

You can click on an item's title column information, and this will navigate you to the item's page.

![A screenshot that shows how a title column is displayed in bold text. The screenshot is annotated with a red box.](<Data Table Title Column.png>)

### Another Method of Opening Items
In addition to opening items via the icon or the title field, you can also double click any item's row to open the item. If you hover the mouse over an item's row, the item row's background will be highlighted grey. Double-clicking anywhere on this grey background will open the item.

![A screenshot that demonstrates how hovering over an item's row will change the row's appearance. You can then double click on the grey highlight of a row to open the data table item.](<Data Table Item Row.png>)

## Quick Filtering Items
Using the Quick Filter, you can find a particular item in a table. To filter for an item:
1. **Click the quick filter bar.** The filter has an icon of a magnifying glass. Note that the quick filter also automatically explains what type of item you will be filtering. For example, when filtering the **Policies** table, the quick filter bar reads: "Search Policies".

![A screenshot of the search bar annotated with a red box.](<Data Table Search.png>)

2. **Type your quick filter.** You can filter for the content of a column, and Rapid Platform will return any relevant items. For example, we can search for all or part of a *Document Name*.

3. Press **Enter** or **Return** on the keyboard.

![A screenshot that demonstrates how a user can type in the partial title of an item, in order to find that item.](<Data Table Search Example.png>)

> *Pictured:* by typing "desk" into the **Policies** table's quick filter, Rapid returned the item that is titled: "Desk Setup Policy".

### Many Columns are Searchable

As another example, we can filter for the *Status* of an item. For example, we can quick filter for any "Archived" items.

![Another example of searching for items in a table. In this example, the user can search for the content of a choice field.](<Data Table Search Example 2.png>)

However, some fields cannot be used with the quick filter. The *Embedded Files* and *Share Link* columns, for example, will not interact with the quick filter. Additionally, your system administrator may decide to prevent quick filter functionality on any columns with sensitive information.

### Undoing a Quick Filter
If you would like to undo a quick filter and view all of the items again, there are several ways to do this.

1. **Press the cancel button.** On the far right-hand side of the quick filter bar, there is an **X** icon that will cancel your quick filter.

![A screenshot that shows how to cancel a search button, by pressing the "cancel" button on the far right-hand side of the search bar. The screenshot is annotated with a red box and an arrow that indicate where the cancel button can be located.](<Data Table Undo Search.png>)

2. **Delete filter text and press enter**. You can delete the text in the quick filter, and then press enter to remove all filters from the table.

3. **Navigate away.** If you leave data table page, and return to it, the filter will also be removed.

3. **Refresh the browser.** By using your browser's refresh button you can view all items in a table again. The keyboard shortcut for this is `F5` (on Windows), or `⌘ Cmd + ⇧ Shift + R` (on Mac)
. Note, however, that this may require you to log in again, so it is not a recommended approach.

## Data Tables can be Refreshed
If the data within in a table is updated, the table will need to be refreshed in order for that data to be visible. Refreshing the entire page is not desirable as you may need to reauthenticate, which will take time.

Rapid Platform includes an *Inline Refresh* button, that allows you to refresh all the items in a data table, without leaving the page. The *Inline Refresh* is located in the [Command Bar](</docs/Rapid/3-User Manual/glossary/glossary.md#command-bar>), and has an icon that resembles a clockwise arrow.

![A screenshot that shows what the inline refresh button looks like. The screenshot is annotated with a red box. The inline refresh button is a clockwise arrow.](<Data Table Inline Refresh.png>)

## Additional Information
- You can [visit the glossary](</docs/Rapid/3-User Manual/glossary/glossary.md#data-table>) to learn more about data tables and their basic terminology.
- You can visit the [Data Tables page component](</docs/Rapid/3-User Manual/2-Explorer/3-Pages/2-Page Components/Data Table Component/Data Table Component.md>) to learn more detailed information regarding how Data Tables and Views operate.
- Tables also utilise [Views](</docs/Rapid/3-User Manual/2-Explorer/4-Views/1-Views-Overview/1-Views-Overview.md>), which are data filters that can be saved and reused. This filters Tables so that they return only the items you want to see.