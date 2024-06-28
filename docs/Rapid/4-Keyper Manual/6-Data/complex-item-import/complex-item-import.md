# Walkthrough : Importing complex items

Building off [Importing Items](../bulk-item-import/bulk-item-import.md), adding a load of items into a site is fairly straight forward. Sometimes though, your data is a bit more complex and items depend on each other. In this walkthrough Stationary Inc. have a pair of Invoices they want to load into the system, but Invoices come with Invoice lines as well. We will cover creating both sets of items while also setting up the links between them using formulas.

## Initial setup

Before we begin, the Stationary Inc. site defines an Invoice and it's lines like so

![Details of an invoice on the site showing invoice lines in a sub table](<Example Invoice.png>)

The Invoices table has several columns; Reference, Delivery Date, Delivery Address, Status and so on. Each invoice has several line items that designate what the invoice is about. These Invoice Line items are linked to the invoice via a Lookup field called `invoice_id`. 

![Details of Invoice 2 and Invoice Line 2 that looks up to it](<Invoice 2 has Invoice Line 2.png>)

When we upload the Invoice Line data, we are going to need to fill in this lookup so the Invoice Lines are not separated from their Invoice.

Our first step is to set up the worksheet in [Data](https://data.rapidplatform.com) with the Invoice and Invoice Line tables. See [Importing many Items](../bulk-item-import/bulk-item-import.md#setting-up-the-worksheet) for more in-depth details.

![Data worksheet showing a saved title and both invoice and invoice line tabs loaded](<Worksheet initially loaded.png>)

## Preparing the data

Our source data has two invoices with two invoice lines each.

![Excel spreadsheet of 2 invoices with two lines each](<Source data for invoices.png>)

First lets load the bulk of the content into the Data sheet like normal. Note here we have altered the dates for upload as well.

![Each sheet in data with the content loaded in columns](<Data loaded into sheets.png>)

Now we need to populate the `invoice_id` column on Invoice lines. The problem we face is, as the Invoices haven't been created yet, we don't know what ID to use.

There are a multitude of ways to approach this problem. You could create the invoices first, then copy the IDs over as appropriate. You could configure a formula in each cell to copy the ID value across the worksheet, essentially setting up the copy before uploading the Invoices. This second approach minimises the amount of time you have 'incomplete' data in your site.

While both would be appropriate in this simple example, instead lets use a `XLOOKUP()` formula to determine the ID based on some known value in the Invoices. This approach works very well in realistic large scale scenarios where your source data isn't quite so pristine. 

To start, lets add the Invoice Reference against the appropriate Invoice Lines in the sheet on a blank column. You can add additional content like this in worksheets and Data will not attempt to sync them across; rather useful for cases like this.

![Data invoice line sheet with Invoice References in a column with no heading](<Invoice references added to the sheet.png>)

Next using this formula `=XLOOKUP(O4,'Invoices'!D$4:D$5,'Invoices'!A$4:A$5,-1)` we can dynamically find the corresponding ID for the matching Invoice reference.

![Xlookup formula breakdown as described below](<Xlookup Formula Breakdown.png>)

Here you can see there are 3 main arguments to the `XLOOKUP()`
- `O4` : The lookup value, this is the value to search for.
- `'Invoices'!D$4:D$5` : The lookup array, this is the range of cells we are trying to find the lookup value in.
- `'Invoices'!A$4:A$5` : The return array, this is the value we want to return if we find a match

The final argument `-1` is optional, it is the value returned if nothing is found. Here we are using it to highlight if there are any invoice lines that have a reference that is not in the Invoice worksheet.

You will also notice we are using the `'Invoices'!` notation to reference values across different worksheet tabs.

## Loading the everything into the site

With everything set up, syncing up is easy. We need to sync Invoices before lines so we can get those IDs.

![Data worksheet for invoices showing sync success toast and the new invoice IDs](<Invoices Synced.png>)

:::tip
See [Importing items](../bulk-item-import/bulk-item-import.md#importing-everything-to-the-site) for details on how to sync a worksheet
:::

Looking at our Invoice Lines worksheet, all the Invoice IDs have populated now automatically. 

![Invoice Lines showing the IDs populated via formula](<Invoice Lines with Invoice IDs.png>)

You will also notice the Invoice Lines have IDs. Data has already uploaded them into the site. Because this worksheet is second, it was uploaded second. Thanks to the formula, you can see in the site the invoice lines area already linked to the Invoice.

![Invoice 4 in Rapid with its 2 invoice lines showing](<Invoice 4 with Lines.png>)

If we were manually putting in the lookup IDs we could still re-sync the worksheet. This would update all the invoice lines as their IDs are already loaded.