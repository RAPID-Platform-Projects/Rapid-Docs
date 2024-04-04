# Adding New Columns to an Existing Table

Let’s examine how to extend the **Assets** table, by adding a new column.

*Stationery Inc.* have an annual audit of all their assets, and they want to track what should happen to each asset at this review. For instance, the IT Director may decide they want to remove a laptop from circulation because it is getting too old. 

The issue with the current **Asset** table is that it only tracks the current *Status* of an item. The IT Director could leave a note on the item, which states whether an asset should be sold, or recycled. However, the note would not allow us to filter a table and find all the assets that should be sold or recycled.

So, let’s build a column that tracks what the company *intends* to do with each asset.

### 1. Open the Assets table in Designer

> <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/3-User Manual/3-Designer/2-how-to-access-designer/2-how-to-access-designer.md" target="_blank">Click here</a> for a reminder on how to open a table in designer.

Since we want to build a column, we should press the columns tab at the top of the page.

![A screenshot that reveals the location of the columns tab at the top of a table in Designer.](<Designer Assets Columns.png>)

### 2. Create a New Column

Here we can see all the columns that are attached to an ASSET. We want to create a new COLUMN, so let’s press the CREATE COLUMN button at the top of the page.

We will give our column the title “Audit Action”. Note that the *Column Name* field is a protected field. That’s because Rapid Standard needs to build a connection between this column and the table. If we were able to change this *column name*, it would cause problems in the database. If you need to change a *column name*, you will have to delete the entire column, and build it again. All the data that you enter the column will also be deleted.

Luckily, we can change the column title to something else, if we need to. This will change the way that the column’s name appears in **Explorer**, so this is a good option to avoid losing your data. However, the *Column Name* will always be the same when we look at the column in **Designer**.

### Choosing and Troubleshooting the Column Type

So, which type of data is best for us? We *could* type our information into a single line of text, or a multiple line of text. E.g. typing information such as “recycle”, or “sell”... but that will lead to problems:
- Users don’t like having to type out the same thing repeatedly
- The data could have issues, such as typing errors, extra spaces, or a person could type something unexpected into the field.
    - For example, a user could type “Put in Storage”, and another person could type “Store it”.
    - A human can intuit that these are the same thing, but a computer cannot
- It would make it extremely difficult to build a filter or view to see "all the assets that need to go into storage".

### Challenge 1: Decide on which datatype is most suitable
Using the scenario described above, and decide which type of data should be selected for this column. When you are ready, progress to the next page to check your answer.

> You can <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/4-Keyper Manual/2-Designer/1-Tables/5-Table Configuration Guides/how-to-add-columns-to-a-data-table/how-to-add-columns-to-a-data-table.md" target="_blank">click here</a> for an explanation of the different types of columns you can create in Designer.