Adding New Columns to a Table
1.	Let’s examine how to add new columns to a table. Perhaps Clear Consulting have an annual audit of all their assets, and they want to track what should happen to each asset at this review. For instance, the IT Director may decide they want to remove the laptop from circulation because it is getting too old. 
2.	The issue with the current ASSET table is that it only tracks the status of an item. The IT Director could leave a note on the item, which states the laptop should be sold or recycled. However, this would mean that there is no way to filter a table to find all the laptops that should be sold or recycled.
3.	Let’s build a column that tracks what the company intends to do with each asset. First, we need to make sure we are viewing a table in DESIGNER. We can do this by opening a table in EXPLORER and then using the DESIGNER button in the top right-hand corner. This button will always try and show you the DESIGNER view of whatever you are viewing in EXPLORER. 
4.	Alternatively, we can press the DESIGNER button down at the very bottom of the sidebar. The DESIGNER button here on the sidebar will always take you to the main menu in DESIGNER and show all tables.
5.	Let’s open the ASSETS table.
6.	We can see there are several TABS along the top of the page now. Here is where we can edit, create, or delete COLUMNS, VIEWS, and even build the MENU items that will appear on the table.
7.	Since we want to build a column, we should press the COLUMNS tab.
8.	Okay, here we can see all the columns that are attached to an ASSET. We want to create a new COLUMN, so let’s press the CREATE COLUMN button at the top of the page.
9.	We will give our COLUMN the title “Audit Action”. Note that the COLUMN NAME field is a protected field. I can’t edit it. That’s because Rapid Standard needs to build a connection between this column and the table. If we were able to change this column name, it would cause problems in the database. If you need to change a column name, you will have to delete the entire COLUMN, and build it again. All the data that you enter the COLUMN will also be deleted.
10.	Luckily, we can change the column title to something else, if we need to. This will change the way that the column’s name appears in EXPLORER, so this is a good option to avoid losing your data. However, the COLUMN NAME will always be the same when we look at the COLUMN in DESIGNER.
11.	What TYPE of COLUMN do we want? If we open the drop-down field, we can see that Rapid Platform gives us a variety of options for the type of data we want to choose. Here are some simple columns:
a.	Single Line of Text is useful for things such as website links, serial numbers (that may begin with a 0), names, etc.
b.	Email will only accept email addresses that are properly formatted
c.	Multiple lines of Text is useful for notes, or long passages of writing. It will appear as a larger box that you can type in, compared to a single line of text.
d.	Date and Time, and Date are self-explanatory. You try to use Date where possible, unless the Time that something is occurring needs to be recorded.
e.	Choice gives us multiple-choice options
f.	We will examine Lookup COLUMNS in a moment, but they allow us to use data from other tables
g.	Boolean allows us to say whether something is True or False
h.	There is also a number field, which also accepts decimal places, a percentage field, a currency field, and a whole number field (which only accepts whole numbers).
12.	So, which type of data is best for us?
a.	We could type information into a single line of text, or a multiple line of text. So, typing information such as “recycle”, or “sell”... but that will lead to problems: people don’t like having to type out the same thing repeatedly; and the data could have issues such as typing errors, extra spaces, or a person could type something unexpected into the field. Someone could type “Put laptop in Storage” and another person could type “Store it”. A human can intuit that these are the same thing, but a computer can’t. This would also make it extremely difficult to build a FILTER or VIEW to see all the laptops that need to go into storage.
b.	The best option for Clear Consulting would be a Choice column. Just like the STATUS column, the Choice datatype lets us create multiple options that someone can choose from. This means that instructions won’t be mistyped, and it will be very easy to build VIEWS that can filter all the laptops that have a certain choice selected.
c.	We can skip the hyperlink templates and move down to the choices. We will want a few different options here, for example: “No action”, in case the asset has no problems. Once we have entered an option, we need to press the Enter or Return key. Alternatively, we can press the checkmark.
d.	Let’s add some other audit options, such as “Return” for items under warranty, “Repair”, “Dispose” or “Sell”. We can change the order that these options will appear in the dropdown menu, by clicking on a choice, dragging it to a new position, and then releasing it.
i.	(No action, Repair, Dispose, Sell)
e.	We can enter a default value. For this example, “No Action” is the best default, because we expect that most ASSETS won’t require any action.
f.	Let’s add a description here, and then press Save at the top.
13.	Now, if we try to edit an ASSET, you might notice that the new type of field we added isn’t here. That’s because we need to redesign this DETAILS PAGE, so that we can edit the AUDIT ACTIONS data. We will look at how to do this in the next video.