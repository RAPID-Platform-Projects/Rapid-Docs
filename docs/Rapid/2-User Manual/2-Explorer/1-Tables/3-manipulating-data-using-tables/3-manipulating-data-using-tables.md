# Manipulating Data Using Tables

## Selecting Multiple Items
Rapid Platform allows you to select multiple items at once. This allows you to use a button from the [Command Bar](</docs/Rapid/2-User Manual/glossary/glossary.md#command-bar>), and apply its commands to multiple items. When multiple items are selected, this allows the user to: 
1. Delete multiple items
2. Link multiple items to another item
3. Launch a [Process or Workflow](</docs/Rapid/2-User Manual/4-Workflow/4-Workflow.md>) using multiple items

To select items in Rapid, hover the cursor over an item row. A circle will appear on the far left of the item row. Press this selection circle. 

![A screenshot that depicts how a selection icon will appear when the user hovers their mouse over an item row. The screenshot is annotated with a red box that indicates the location of the selection circle.](<Data Table Finding Selection Circle.png>)

Once you select an item the circle will become filled, and will now display a checkmark. Additionally, the background will be faintly highlighted in grey.

![A screenshot that depicts how items appear that ](<Data Table Item Selected.png>)

You can press additional selection circles to select multiple items.

## Bulk Editing

While you have multiple items selected in a data table, any edit made to an in-line item will be applied to every item selected.
This can be a quick way to update a bunch of items.

For example, let's set the due date to these forward in time

![The task table with several tasks selected](<Many selected tasks.png>)

First we set the due date for one of the selected items

![Date picker on the inline task selecting another date](<Setting bulk date 02.png>)

Then note how it affects all the selected tasks. Modified tasks that are not saved are highlighted.

![All the selected tasks in the table now show the future date](<Setting bulk date 03.png>)

Finally we hit save to commit the changes. Saving will save every modified item, not just the selected ones.

![Save button on the data table command bar](<Setting bulk date 04.png>)


## Downloading a CSV Version of the Current View
The Command Bar also contains an **Export as CSV** button, which will export and download the current table, including any views or filters, as a .csv file.

![A screenshot that shows the location of the "Export As CSV" button in the Command Bar. The button is stylised as an Excel spreadsheet icon.](<Data Table Export CSV.png>)

The button will download the CSV file to your computer, in your computer's default downloads folder.