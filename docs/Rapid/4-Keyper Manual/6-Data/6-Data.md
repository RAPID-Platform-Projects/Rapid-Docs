# Data

The Data experience makes porting large amounts of tabulated data into your site easy. Based on Excel style tables you can format, organise and prepare your data before syncing it into your site.

In our example, Stationary Inc have several leads generated from their marketing campaign they wish to bring into the site so the team can stay organised.

## Quickstart

1) Navigate to [data.rapidplatform.com](https://data.rapidplatform.com)
2) Enter the tenant and site details for the site you want to import data into
3) Open the table selection panel via the RAPID -> Select Tables top menu

![Top menu bar selecting the Rapid -> Select tables option](<Select Tables.png>)

4) Choose the table(s) you want to import against. This will create worksheets with all the columns matching your site for you.

![Modal list of tables in the site with checkboxes to select them](<Select Table to Import.png>)

5) Save the document
6) Enter in data you want to import

![Example data in the generated table with two rows](<Example Data in Table.png>)

7) Press the Sync button

![Sync Table button located at bottom left of page](<Sync Table.png>)

All the rows on the current sheet will be either created or updated into your site.


## Tips and Tricks

### Item IDs
You can update items instead of creating them by populating the ID column.
It's easy to tell if an item was uploaded to a site as this will be populated for you during the sync.

![Two cases of rows, one before sync with no ID and one after sync with IDs populated](<Ids being created on Sync.png>)

### Lookups
Importing items with lookups, as well as the items those lookup columns look up to can be tricky.
Data supports Excel like formulas so you can reference ID fields across worksheets

For example, here is a 'working' sheet set up with data from the site.
![Worksheet with some example data](<Working Out Sheet.png>)

From this sheet, we can reference the Industries and Businesses associated with the lead. 
![Formula field referencing another cell in a worksheet](<Formula referencing another sheet.png>)

:::tip
Data is based off DHX Spreadsheet technology. You can find a list of supported functions [here](https://docs.dhtmlx.com/spreadsheet/functions/)
:::

Using this you can create an automatically updating system of IDs by reference.

### Dates

Date and DateTime fields are expecting [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) style date strings. While this can sound intimidating they are quite simple.

For only dates you can use `YYYY-MM-DD` format

| Date | Example|
| --- | --- |
| 01/01/1900 | 1900-01-01 |
| 30/05/2020 | 2020-05-30 |
| Third of Jan 2024 | 2024-01-03 |

For dates with times you can use `YYYY-MM-DDThh:mm:ss.zzzzZ`
Here the capital `Z` represents the UTC timezone and is optional

| Date | Example|
| --- | --- |
| 5:45pm 01/01/2000 | 2000-01-01T17:45:00.0000 |
| Midday the Third of June, 2050 | 2050-06-03T12:00:00.0000 |
| 11:36:45 6/4/2019 UTC | 2019-04-06T11:36:45.0000Z |