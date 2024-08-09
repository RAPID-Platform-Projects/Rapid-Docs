# Error: "Invalid column name"

### Issue:
Your **computed** or **subquery** column returned an error stating that your code contains an "invalid column name".

### Cause:
The table being referenced does not exist, or is misspelled.

### Example:
```sql
SELECT t.[start_dat]
-- ERROR --
-- Invalid column name 't.start_dat'
```

Alternatively, you may be incorrectly referencing a table when you mean to construct a string.

```sql
SELECT "Test"
-- ERROR --
-- Invalid column name 'Test'
```

### Solution 1: Check whether you meant to use double-quotation marks

In Rapid's deployment of SQL Server, double-quotation marks are used to denote column names, whereas single quotation marks are used to denote a string.

Ensure all string construction is created with single quotation marks instead of double-quote marks.

```sql
SELECT 'Test'
-- This will display a string correctly.
```

### Solution 2: Check the spelling of the column name

Sometimes user error is to blame for this error. In the first example above, the column name contained a typing error.

```sql
SELECT t.[start_date]
```

Another reason for this error is that the column name contains an underscore or the system has added additional information (such as lookup fields having `_id` added at the end of their display column name).

1. Going to **Designer**
2. Clicking **Tables** &gt; **All Tables** in the sidebar
3. Open the table, and click the **Columns** tab in the header

![A screenshot of the Designer > Tables page. The screenshot is annotated with a red box to denote that the user has clicked the "Columns" tab at the top of the page. Another red box denotes the "Column Names" column, with the database names of all the columns](columns.png)

:::warning[Subtype Tables]
Subtype tables who "inherit" columns from a parent table do not, in fact, have an inherited column on their table. This is discussed further in the next section.
:::

### Solution 3: Check that requested column is not on a parent table

This error will also display if you request a column that does not exist on the table. Let's examine the **IT Assets** table in Rapid Business, which is a **subtype** of the **Assets** table.

Because of this, the *Status* column does not, in fact, exist on this table, but rather the parent table. We can check this by examining the *Base Type* column in the list, and seeing that it is referencing the **Assets** table.

![A screenshot of the columns list again. The screenshot is annotated with a red box to draw the reader's attention to the "Base Type" column on the far right of the page. This column states that the "Status" column on the table is inherited from "Assets". Therefore, this column does not, in fact, exist on the "IT Assets" table, but on the "Assets" table instead.](column_issues.png)

So, unless a column has they light-grey message "Not Inherited" in this column, we cannot reference it directly on this table. This means a **computed** column will never be able to access this data, and we will need to use a **subquery** column instead.

Using a **subquery** column, we can join the current item we are viewing to its parent table, in order to access the *Status* column we desire.

```sql
SELECT a.[start_date]
-- Instead of t., we now reference the parent table (a.)
FROM dbo.[asset] AS a
WHERE a.[id] = t.[id]
```

Fortunately, **parent** tables will store a reference item when a **subtype** table item is created. So, with a simple declaration of `WHEN parent.[id] = subtype.[id]` we can retrieve the data.

### Solution 4: Check that requested column is not a subquery

You may find that the column you are requesting is on the same table as the column. The final solution is to check whether this column is a **subquery**.

This is because **subquery** columns are baked into the view of the table, and are not legitimate columns. Therefore, **subqueries** cannot access another **subquery** column. They can, however, reference **computed** columns, because these are built into the table.

![A screenshot of the "Age" column in the "Assets" table. This screenshot is annotated with a red box designed to draw the user's attention to the "Subquery" type. Therefore, the data in this column cannot be accessed with a subquery column.](subquery_error.png)