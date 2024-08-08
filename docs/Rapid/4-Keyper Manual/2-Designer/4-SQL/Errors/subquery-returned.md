# Error: "Subquery returned more than 1 value"

### Cause:

Rapid is unable to determine a top single result to return. Instead, it is returning multiple items at once and will crash.

### Example:

```sql
SELECT [id]
FROM dbo.[contact]
-- ERROR --
-- Subquery returned more than 1 value. This is not permitted when the subquery follows =, !=, <, <=, >, >= or when the subquery is used as an expression.
```

### Solution:
We can force SQL Server to return a single result, or bind the result to an id attached to the current item.

#### Option 1: Force the return of a single result

The following code returns the ID of the newest item on the contact table

```sql
SELECT TOP 1 c.[id]
FROM dbo.[contact] AS c
ORDER BY [created] DESC
```

#### Option 2. Bind the result to a specific ID

This solution requires a lookup column to exist on this table (e.g. `t.[contact_id]`) that contains a foreign key to another table (e.g. `c.[id]`).

```sql
SELECT c.[id]
FROM dbo.[contact] AS c
WHERE c.[id] = t.[contact_id]
```