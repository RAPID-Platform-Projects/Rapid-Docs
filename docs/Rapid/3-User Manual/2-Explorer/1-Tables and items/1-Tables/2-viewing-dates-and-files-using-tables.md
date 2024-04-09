# Viewing Dates and Files Using Tables
## Viewing Date Data
### Date Fields Appear as "Australian Standard Dates"
By default, Rapid Platform's data tables will display dates according to the Australian and British standard date format (*dd/mm/yyyy*). For example, the *21st of April 2024* becomes *21/04/2024*.

![A screenshot that shows how date columns appear in the British or Australian format, when enabled in the view.](<Data Table Dates British.png>)

### Date Fields Can Appear as "Relative Dates"
Alternatively, you can change a date column so that it displays a description of the item's creation time and date. For example, a column with created 10 minutes ago will read '10 minutes ago', and a column with a date from last month will read '1 month ago', etc.

To enable relative dates: 

1. Press the **Edit View** button, located on the right-hand side of the <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/glossary#command-bar">Command Bar</a>.

![A screenshot that shows the location of the "Edit View" button. It is a button on the far right-hand side of the Command Bar, and resembles a Table with a Cog in the corner.](<Data Table View Editor Button.png>)

2. Scroll down to the *Columns* section of the Edit View Sidebar.

3. Press the **Edit Column** button beside the name of the date column. The edit button is an icon of a pencil. (For this example, we will use the system default column titled *Created*, which is a date field that describes the date when an item was created).

![A screenshot that shows how to edit a date field in the edit view sidebar. It is annotate with a red box that shows you must scroll down to the "columns" section of the edit view sidebar, and a red box that indicates what the "Edit Column" button looks like: a pencil icon.](<Data Table Edit Column.png>)

4. **Save** all changes, and return to the table.

Now, dates appear as times or dates relative to the current time and date.

![A screenshot demonstrating how Rapid Platform formats relative dates.](<Data Table Dates Relative.png>)

## Viewing File Data
### Embedded Files Appear as Progress Bars
When viewing an Embedded Files column, the column will appear as a progress bar that indicates how many expected files have been uploaded. For example, in Rapid Standard's **Policies** module, each item is expected to have one policy document embedded. However, a system administrator could choose to create items with several embedded files that are expected.

The embedded files will appear as a progress bar. This allows you to visually see if all expected files for an item have been uploaded. Additionally, the progress bar will be followed by a fraction to show how many files are uploaded and how many are expected.

![A screenshot demonstrating how a progress bar reveals the number of embedded files.](<Data Table Embedded Files Bar.png>)

### The Embedded Files Column Presents a List of File Slots
When clicking on the Embedded Files progress bar, an item description box will appear. The description box will indicate which types of files are expected, as well as a cross or a checkmark to indicate if that filetype has been embedded.

For example, an expected embedded file that has not been uploaded will appear with a cross, as follows:

![A screenshot that shows how a file that has not been uploaded appears in the embedded files description box.](<Data Table Embedded Files Dialogue Box 1.png>)

### Embedded Files Can Be Opened from an Embedded File Slot
If an expected embedded file has been uploaded, it will appear with a checkmark as follows:

![A screenshot that shows how a file that has been uploaded appears in the embedded files description box.](<Data Table Embedded Files Dialogue Box 2.png>)

:::[Note:] that if a file has been embedded, you can click on the embedded file's name and open the embedded file. This will open the attached file in a new browser tab.
:::

![Alt text](<Data Table Embedded Files Dialogue Box 3.png>)