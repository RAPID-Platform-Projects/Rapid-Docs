# Subquery vs Calculated

## Accessing Calculated Columns and Subqueries in an SQL Query: What is the difference?

There are two different columns that can perform calculations: Computed and Subqueries

Computed columns are used to perform math or combine data using only information from the table that the column is on. This is great for doing simple math and concatenations. For example, `Profit = Sales Price – Revenue`. 

When querying computed columns in SQL they WILL appear when accessing the table directly.

Subqueries on the other hand are similar to computed columns in that that they can perform math and concatenations but can also use information from **other** tables. The information on a subquery field is **not** stored in the database but is rather calculated when you load that table. 

Because these are not stored in the database they cannot be referenced directly on the table when using SQL to query it. This also means you cannot reference the output of a subquery field within another subquery field. 

Subquery fields are 'baked' into views they are a part of, so it is possible to fetch and reference their values in a reporting environment. This is not recommended when trying to reference from another subquery due to performance and instability concerns.