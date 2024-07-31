# Pages and Tabs

## What is a Page?

A page is a container. We use pages to display tables in Explorer, as well as items and their information. Pages can also be used to hold visuals such as PowerBI reports or other data visualisations.

## Why are Pages Useful?

- Pages can be edited, and their contents rearranged or changed completely
- In the context of items, a page allows us to display or edit the data inside an item as though we were viewing a web form.
- Item pages allow us to hone our focus onto just one row or item in the database and change any of the columns on that item.

## What is a Tab?

Tabs allow us to quickly switch between pages. They sit below the *Command Bar* where we can 

## Why are Tabs Useful?




•	Return to the item, and discuss what is on the page
o	Return to the Details page and discuss the other buttons in the Command Bar: save, save and close, delete, undo changes (when changes have been made), item history (and rollback), item refresh, permissions, and other linked items
o	The web form, where the columns of the item can be edited
o	The asset ID number, which is displayed in the bottom-left corner of the page, and it is also displayed in the URL of the page
o	The date the item was created and updated, and who it was created by and updated by

o	How tabs can navigate to other sections, such as “Activity”, or “Files”, or even a table nested inside this item, that contains “Service Log” items
	Each of these tabs takes us to a new page inside the item we are examining
o	Examine the “Activity” tab more closely, and discuss the features of the Activity field
o	Discuss the “Files” tab, and its features
o	Discuss how other items can be linked to an item: example, we want the service logs that are created, to be “attached” to the asset that has been serviced.
	e.g. You would want to attach students to a class, or the subject they were studying

o	We will talk about how to see these links, and how to edit them, in just a moment.

Page Components
•	Everything we can see on these pages (go through the different tabs), on all these pages, are components
•	Components allow us to either view data and/or edit data.
•	(Navigate to an item for a Vehicle Asset).
•	Here are some basic types of components that can appear on the page:
o	String field – “Name”
o	Whole Number – “Odometer”
	Cannot begin with a 0, (e.g. 013422)
	Cannot have decimal places in them
o	Choice field – “Condition” and “Status”
o	Date Field – “Purchase Date” and “Goods Received Date”
o	Currency Field – “Purchase Price”
o	Boolean – “Purchased New”
o	Computed / Subquery field – “Unique Identifier” and “Age”
	Greyed out because they cannot be edited
	Executes SQL code. Computed fields can only obtain data from the table they are on, and as a result they are much faster
	Subquery fields can obtain data from any table on the site, and are slower as a result
o	Lookup Field – “Employee” and “Bill”
	This is how you can link items together. Here, the field or column “Employee” is linked to an item on the Employee table.
	I can click on the field to change which employee is attached to the vehicle, or I can delete any data in this field, so it isn’t linked to anyone. Alternatively, I can also click this “go to” button, which will take me to the item page for the Employee who is attached to the vehicle.
	If we go back to the popup menu where we can select an employee, I want to draw your attention to something. This is just a simplified way of displaying the Employee table. On the side here, you can see the table views that allow us to filter our data, and the search bar to search for a particular employee. Its like a portal or a tunnel into another table, and we can connect two items on different tables using this component.
	What if I haven’t created the Employee yet, and I need to link to them? Well, the lookup field allows us to create new items by clicking on the field, and then pressing “New Employee”.

## Further Reading
- You can learn more about **Pages** in the [User Manual](<./docs/Rapid/3-User%20Manual/2-Explorer/3-Pages>)
- There is also exhaustive documentation on all the [Page Components](<./docs/Rapid/3-User%20Manual/2-Explorer/3-Pages/2-Page%20Components>) that were not discussed in this lesson