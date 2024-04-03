# Viewing and Editing Tables

To demonstrate how to extend and customise a Rapid Standard module, consider the following scenario:
1. The company *Stationery Inc.* has requested that you create a new table, that includes additional columns, and add it to the Assets module.
2. This is because the company wishes to create a new category of asset. *Stationery Inc.* owns several very expensive coffee machines at their different offices, which often require maintenance, an employee responsible for cleaning the machine, and an employee responsible for buying the coffee beans.

### Viewing and Editing Tables
1.	Let’s look at how to create a new category of assets. First, we need to click on the **Designer button** at the bottom of the sidebar. It has an icon of a ruler and a set square. We need to use Designer, because we are designing a new type of table and data for our system.

2.	Rapid Designer will show us a list of all the tables in Rapid Standard when it opens. We can search for tables here. If I type in "IT Assets", the table appears. Let’s open this table by double-clicking it. Here, I can see at the top that IT Assets “Inherits From” a table called Assets. What does this mean? Just as children inherit certain looks or personality traits from their parents, a table can have a parent, and inherit types of information from it. To understand this better, let’s look at the Assets table.

3.	We can return to viewing all tables by choosing the “Tables” tab at the very top of the site. The tables are listed alphabetically, so I can find the Assets table here at the top. Double-clicking opens the table. Now, let’s click on the columns tab at the top of the page, to see what types of data are contained in the Assets Table.

4.	So, the Assets table contains information such as the model type which we saw before, as well as the age of an Asset, any Bills that are attached to it, and the Employee responsible. We can see that the Name field is written in bold, which shows that it is title column. What is the title column? It is the column at the start of the table when we view it in Explorer. (Demonstrate).

5.	So, this Assets table is the parent of the IT Assets table we looked at before. That means all these table columns from Assets, are given to the table IT Assets as well. A simplistic reason for using child tables is that it makes it very quick to create similar tables without you having to remake all your columns each time. It also means that if we decide to change something such as adding a new type of column to a parent table, then this change is automatically made to this table’s children as well.

6.	The other reason for using this type of relational table structure is that it allows us to access items of all types within a single table, such as ALL Assets.
