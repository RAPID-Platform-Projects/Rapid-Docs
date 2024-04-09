# Subquery vs Calculated

## Accessing Calculated Columns and Subqueries in an SQL Query - Tables and Views: What is the difference?

The first thing to note is that we have two column types that do calculations: “Computed Columns” and “Subqueries”

Computed columns are used to perform math or combine data using only information from the table that the column is on. This is great for doing simple math and concatenations. Such as “Profit” = “Sales Price” – “Revenue”. When creating an SQL query, these columns WILL appear when accessing the table directly.

Subqueries on the other hand are similar to computed columns in that that they can perform math and concatenations but can also use information from OTHER tables. The information on a subquery field is NOT stored in the database but is rather calculated when you load that table. Because these are NOT stored in the database it means that if you access the table directly (using the example query below) subquery columns will not be present. HOWEVER, there is a way you can access these.

![Selecting from a table](<Selecting from a table.png>)

When you load a table in RAPID, it shows the subqueries, this is called a VIEW. You can access a view using SQL and that way all of the subquery columns will be present and you DO NOT need to recalculate them in powerBI.

This does come with a trade off in that it is more tolling on the database, which is generally, by default, we advise accessing the database table and not the database view. However, if the subqueries are relatively simple, it should not be too tolling. See example below of accessing a view:

![Selecting from a view](<Selecting from a view.png>)

## Related article

[Creating a Financial / Fiscal Year Calendar Table - Template](https://docs.rapidplatform.com/books/powerbi/page/creating-a-financial-fiscal-year-calendar-table-template)