# Common SQL Patterns

Subqueries are useful to collapse several data points into a single field. Below are some examples of common design patterns to make developing your own queries easier.

Rapid Platform utilises **SQL Server**.

Please note that Rapid refers to the current table as `T`. Often, you will need to ensure that you bind the results returned with your query, by checking them against an id field in the current table. This will be demonstrated in the examples below.

Because `T` is already in use, you cannot apply this letter as a label to any other tables within your query.

:::warning[Avoid Comments]
The example code in this section contains comments.
```sql
-- This is a comment
```
However, the subquery and computed fields do not support comments and will generate unknown errors if they are included. Please remove all comments from code, and test your code with the test fields before saving.
:::

## CONCAT( )

In this example, we will take the **Invoices** table and create a unique title field.  `CONCAT()` joins together data into a single string, and requires at least two parameters, separated by a comma.

| Field | Type | Configuration |
| --- | --- | --- |
| **invoice_number** | Single Line of Text | |
| **contractor_id** | Lookup | Looks up to a contact with display field of Full Name |
| **invoice_identifier** | Subquery | See Below |


The goal of this query is to display the Invoice Identifier in the format `{Contact Full Name}: INV{Invoice Number}`. This can be achieved using:

```SQL
SELECT CONCAT(C.first_name, ' ', C.last_name, ': INV', t.invoice_number)
FROM dbo.contact as C
WHERE C.id = t.contractor_id -- Ensures that only one item is returned
AND C.deleted IS NULL -- Ignore deleted data
```

## LEFT( ) and RIGHT( )

In this example, we will take the **Date** of the **Projects** table, as well as the initials of the **user** that the Project is assigned to. We will then combine them to create a unique title field for the Projects table.

`LEFT(input, number)` retains a number of characters at the left of the string, and removes anything afterwards. This can be particularly useful for removing time zone data from a **Date and Time** column.

`RIGHT(input, number)` does the opposite: it retains the characters at the right of the string, and removes anything before the number of characters selected.

| Table | Field | Type | Configuration |
| --- | --- | --- | --- |
| Projects | **start_date** | Date and Time | |
| Projects | **assigned_to_id** | Lookup | Stores the id of the **principal** user assigned to the project. | 
| Principals | **given_names** | Single Line of Text |
| Principals | **surname** | Single Line of Text |

The goal of this query is to first obtain information from another table: the first name and last name of the user that is assigned to the project.

We also want to remove all of the time data from the **DateTime** column, as it contains information tracking milliseconds and time zone, which we don't require. Finally, the query must concatenate all of this information into a single display string.

```sql
SELECT CONCAT
(
    LEFT(p.[given_names], 1), -- Obtains only the first character of first name
    LEFT(p.[surname], 1), -- Obtains only the first character of last name
    ': ',
    LEFT(t.[start_date], 10) -- Take the first ten characters of the DateTime
    -- (e.g. '2024-01-01' instead of '2024-08-01 02:00:00.0000000 +00:00')
)
FROM dbo.[principal] AS p
WHERE t.[assigned_to_id] = p.[id] -- Find the user ID of the user, using the lookup.
AND t.[deleted] IS NULL AND p.[deleted] IS NULL -- Ignore deleted data
```

This will now give us a column that displays the initials of the person responsible, and the start date, like so:

`FL: 2024-08-01`

## FORMAT ( )

SQL Server produces DateTime fields like so: `yyyy-MM-ddTHH:mm:ss.fffZ`

An example would be `2024-08-01T02:00:00.000Z`, which can be broken up into the date `2024-08-01`, then time following the `T` (including milliseconds) `02:00:000`, followed by time zone information `Z`, which means zero-time and indicates the data is based on UTC time.

SQL Server provides the `format(value, format, [culture])` function to help us format this data.

:::warning[Performance]
In SQL Server, the `FORMAT()` function is <a href="https://www.sqlservercentral.com/articles/how-to-format-dates-in-sql-server-hint-dont-use-format">very slow</a>. Using this function on a will impact the performance of a table loading. It recommended instead to use `CONVERT()`, which will be outlined later in this article.
:::

It is the combination of letters (**glyphs**) that represent the relevant date or time data. 

A table of potential display formats is below:

### Dates
|  | Result | Type |
| --- | --- | --- |
| **Days** |
| `d` | `1` to `31` | *Days* |
| `dd` | `01` to `31` | *Days, with single digits formatted as 01, 02, 03, etc.* |
| `ddd` | `Mon` to `Sun` | *Day names, abbreviated* |
| `dddd` | `Monday` to `Sunday` | *Day names, full* |
| **Months** |
| `m` | `1` to `12` | *Months* |
| `mm` | `01` to `12` | *Months, with single digits formatted as 01, 02, 03, etc.* |
| `mmm` | `Jan` to `Dec` | *Month names, abbreviated* |
| `mmmm` | `January` to `December` | *Month names, full* |
| **Years** |
| `y` or `yy` | e.g. `24` | *The current year, abbreviated* |
| `yyyy` | e.g. `2024` | *The current year, full* |

### Times
|  | Result | Type |
| --- | --- | --- |
| **Meridiem** |
| `tt` | `AM` or `PM` | *Time of day, full* |
| `t` | `A or P` | *Time of day, abbreviated* |
| **Hours** |
| `H` or `HH` | `00` to `24` | *Military Hours* |
| `h` | `1` to `12` | *Standard Hours* |
| `hh` | `01` to `12` | *Standard Hours with 01, 02, 03, etc.* |
| **Minutes** |
| `mm` | `00` to `59` | *Minutes* |

:::info[Capitalisation]
Glyphs are case-sensitive. `mm` is minutes, but `MM` is the month number.
:::

For instance, if the date is 2024-08-01 we can use the following code to format it:

```sql
FORMAT(t.[start_date], 'dd-MM-yyyy')
-- 01-08-2024

FORMAT(t.[start_date], 'dd/MM/yyyy')
-- 01/08/2024

FORMAT(t.[start_date], 'HH:mm on dd/MM/yy')
-- 02:00 on 01/08/24

FORMAT(t.[start_date], 'htt on dd/MM/yy')
-- 2AM on 01/08/24

FORMAT(t.[start_date], 'ddd, d MMM `yy')
-- Thu, 1 Aug `24

FORMAT(t.[start_date], 'dddd, dd MMMM')
-- Thursday, 01 August
```

## CONVERT( )

This is a much faster alternative to `FORMAT()`. It can be more difficult to produce the exact data desired, but not impossible. The general structure of this function is:

`CONVERT(data_type(length), expression[, style])`

So, when converting a **Date and Time** column's data, we could use the following query:

```sql
CONVERT(varchar(512), t.[start_date], 103)
```

`varchar(512)` declares the **type of data** we want to convert our result into, `t.[start_date]` is the **data** we want to convert, and `103` is the standard British/French date **style**.

You can read <a href="https://learn.microsoft.com/en-us/sql/t-sql/functions/cast-and-convert-transact-sql?view=sql-server-ver16#date-and-time-styles">about all of the different date-time formats</a> that available using `CONVERT()`.

## Further Reading

- You can also learn [how to troubleshoot SQL fields](</docs/Rapid/Keyper%20Manual/Designer/SQL/Troubleshooting>)
- You can learn about the [differences between subquery and computed fields](</docs/Rapid/Keyper%20Manual/Designer/SQL/SQL%20Fields>)