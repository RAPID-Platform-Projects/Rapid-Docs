# Understanding Tables via the Assets Module

To demonstrate how to extend and customise a Rapid Standard module, consider the following scenario:
1. The company *Stationary Inc.* has requested that you create a new table, that includes additional columns, and add it to the Assets module.
2. This is because the company wishes to create a new category of asset. *Stationary Inc.* owns several very expensive coffee machines at their different offices, which often require maintenance, an employee responsible for cleaning the machine, and an employee responsible for buying the coffee beans.

## Viewing and Editing Tables
### 1. Go to Designer	
Let’s look at how to create a new category of assets. First, we need to click on the **Designer button** at the bottom of the sidebar. It has an icon of a ruler and a set square. We need to use Designer, because we are designing a new type of table and data for our system.

![A screenshot that shows how to find the designer button on the sidebar.](<Designer Sidebar Location.png>)

### 2. Examine the IT Assets Table
Rapid Designer will show us a list of all the tables in Rapid Standard when it opens. We can search for tables in our Rapid site here. I can type "IT Assets" in the scrollbar and press enter, or scroll down and find the table alphabetically. 

![A screenshot that indicates where to find the IT Assets table, when viewing the Tables list in Designer.](<Designer IT Assets Location.png>)

Let’s open this table by double-clicking it. Here, I can see at the top that **IT Assets** “Inherits From” a table called **Assets**. What does this mean? Just as children inherit certain looks or personality traits from their parents, a table can also have a parent. If a table has a parent, it "inherits" its columns from the parent.

![A screenshot that indicates where to find a table's inheritance, or where it inherits its columns from. The user must open a table in designer, and see the information in the Options tab.](<Designer IT Assets Inheritance Location.png>)

We can examine the columns of this table, by clicking the **Columns** tab at the top of the page.

![A screenshot that describes how to navigate to view and edit columns in Designer. The columns tab is annotated in this screenshot with a red box and a red arrow pointing towards it.](<Designer IT Assets Column Location.png>)

And then seeing how many of the columns within IT Assets are inherited from the main Assets table. Note that columns which are inherited are classified as having a "Base Type", which means if you edit or delete the column, it will affect the parent table listed here.

![A screenshot that indicates the "Base Type" data for a specific column. The base type will state the name of a parent table (if it exists).](<Designer IT Assets Inheritance Columns.png>)

> Note the *IMEI* (International Mobile Equipment Identity) column. An IMEI number is used to track certain electronics such as mobile phones. This field is only used in the **IT Assets** table, because general assets and vehicle assets do not require this field. It was created inside the **IT Assets** table, instead of in the **Assets** table, and we can deduce this because the *Base Type* for IMEI is empty.

To understand this better, let’s look at the **Assets** table.

### 3. Comparing IT Assets (the subtype) to Assets (the parent)	

We can return to viewing all tables by choosing the “Tables” breadcrumb at the top of the site. The tables are listed alphabetically, so I can find the **Assets** table here at the top. Double-clicking opens the table.

![A screenshot depicting the locatin of the Assets table in Designer.](<Designer Assets Location.png>)

Now, let’s click on the columns tab at the top of the page, to see what types of data are contained in the **Assets** table.

![A screenshot that demonstrates how to use Designer to view the columns built into the Assets table.](<Designer Assets Columns.png>)

4.	We can see that the **Assets** table contains information such as the *Model* of an asset, its *Age*, any *Bills* that are attached to it, and the *Employee* responsible. We can see that the *Name* field is written in bold, which shows that it is title column.

> <a href="http://docs.rapidplatform.com/docs/Rapid/Keyper%20Manual/Designer/Tables/all-about-tables-in-designer/" target="_blank">Click here</a> to learn more about viewing and editing columns in Designer. This doc also goes into detail about what a Title Column is.

## Summary and Explanation

- The **Assets** table is the parent of the **IT Assets** table.
- That means all of the table columns from **Assets**, are given to the table **IT Assets** as well.

A simplistic reason for using tables subtypes is that it makes it easy to create similar tables, without remaking the columns each time. It also means that if we decide to add or remove a column in the parent table, then this change is automatically made to the table’s children as well.

The other reason for using this type of relational table structure is that it allows us to access items of all item types within a single table, such as using the "All" view on the **Assets** table.