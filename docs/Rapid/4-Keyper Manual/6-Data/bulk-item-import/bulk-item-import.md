# Walkthrough : Importing many items

Building off the [quickstart](../6-Data.md#quickstart), this walkthrough will demonstrate importing a large (over 250 items) amount of data into your site. This example is built off Stationary Inc, a small demo business that manufactures and sells stationery. Recently they have had a successful marketing campaign which has generated several hundred new leads. These leads have been exported from their campaign system as a spreadsheet and now we are intending to import these new leads into the site.

## Setting up the worksheet

First lets navigate to [Data](https://data.rapidplatform.com) and login to our site.

![Site login example with tenant, sitename and environment chosen](<Site login.png>)

Here we enter the [tenant](/docs/Rapid/3-User%20Manual/glossary/glossary.md#site-url) (**1**) and [sitename](/docs/Rapid/3-User%20Manual/glossary/glossary.md#site-url) (**2**). For our example we are selecting the Test environment, but your site is most likely on Production.

After logging in you will be presented with a blank worksheet like this. Note how the default name of `Untitled Spreadsheet` is presented at the top.

![Blank worksheet with an empty title](<Blank worksheet.png>)

If we had an existing worksheet we could load it, but for this example lets set up a new one to import Leads into our site. First we choose which Rapid [tables](/docs/Rapid/3-User%20Manual/glossary/glossary.md#table) we want.

![Selecting RAPID top menu option, then selecting Select Tables below it](<Opening select tables modal.png>)

To bring up the Select Tables picker, from the top menu select RAPID (**1**) then click Select Tables (**2**).

![Select tables modal showing several tables and Leads ticked](<Select Tables modal.png>)

From here we will scroll down and select Leads. There are no other tables we want to interact with, so we then press OK to finish picking tables.

![A new worksheet populated with the Leads columns](<Blank Lead Worksheet.png>)

Data has automatically created a new worksheet for each selected table, and populated the columns ready for data entry. The final step is to save our worksheet and give it a name, either by selecting File -> Save under the top menu or pressing `CTRL + S`.

![The Save worksheet modal setting the name](<Save Modal.png>)

After saving the title of the document will change to reflect your chosen name (**1**) and the first worksheet tab will be selected (**2**).

![The blank Sheet1 worksheet selected after saving, showing the title changed](<Saved Blank Leads Worksheet.png>)

## Preparing the data for import

Currently our data is in Excel. 

![Screenshot of 340 rows of Excel leads data](<Example Data in Spreadsheet.png>)

By copying and pasting, we can apply the content we want to upload to the site to the appropriate columns. Our source data does need a few tweaks, here we will change the date to be in `YYYY-MM-DD` format (for example, `2022-04-03`) and update the industry and lead source to match their ID's in our Rapid site. 

![Data sheet filled in with example data from Excel](<Leads Data input to the worksheet.png>)

:::tip
We have more in-depth coverage of [Lookups](../import-columns/import-columns.md#lookups) and [Dates](../import-columns/import-columns.md#dates) in our [Column importing examples](../import-columns/import-columns.md).
:::

## Importing everything to the site

Syncing is easy. With the the data prepared we press the Sync button in the bottom left corner.

![Sync button location bottom left of screen](<Sync button location.png>)

This brings up the syncing modal where we can choose if importing items triggers webhooks in the site. For our site it dosen't matter if webhooks are triggered so we will leave that unchecked. 

![Sync modal with Trigger Webhooks checkbox and OK button](<Sync Modal.png>)

Finally, hitting OK will start the data import and we can watch the IDs fill in as items are loaded into the site.

![Worksheet showing the leads with the IDs populated and a success toast](<Synced Leads.png>)

Here we can see the Leads have come across into the site. Mission accomplished!

![Leads list in Rapid showing the ported items](<Leads loaded into Rapid.png>)