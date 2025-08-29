# Database and Repair

Under the Advanced tab in Designer lives the Database Page. This page is currently limited to a single function, site repair.

## Site Repair

![Repair button location](<Repair button location.png>)

Repairing a Site performs several actions in an attempt to straighten up sites that have fallen into disrepair. These include:

- Updating system controlled column names that have changed
- Updating column types that have changed
- Regenerating the database views
- Updating the list of Principals based on the current group selection. This includes a full import cycle
- Updating the site file with any structural changes from version to version

When first running into problems with a site it is extremely recommended to perform a repair as a first action.