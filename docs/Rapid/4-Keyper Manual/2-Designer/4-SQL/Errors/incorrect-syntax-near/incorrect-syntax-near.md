# Error: "Incorrect syntax near"

### Issue:
Your **computed** or **subquery** column returned an error stating that your code contains "incorrect syntax near..."

### Cause:
There is an error in the code's syntax that is preventing the field from working properly.

### Solution 1: Remove any comments from code

Any SQL comments in your **computed** or **subquery** code will cause the column to throw an "incorrect syntax error".

Remove any code comments to resolve the issue.

```sql
SELECT t.[start_date]
-- This comment will causes an error
```

### Solution 2: Check all functions are compatible with SQL Server

Not all SQL functions or commands are compatible with the version of SQL Server that runs Rapid. For example, if we run the following depreciated code, it will result in a syntax error. For full documentation on valid SQL syntax, check out the [T-SQL docs](https://learn.microsoft.com/en-us/sql/t-sql/language-reference?view=sql-server-ver16).

```sql
RAISERROR 5005 'Raise Custom Error Message'
-- This creates an syntax error because RAISERROR is no longer supported.
```