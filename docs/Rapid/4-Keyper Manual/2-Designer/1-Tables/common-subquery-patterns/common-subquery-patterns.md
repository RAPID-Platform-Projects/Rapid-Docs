# Common Subquery Patterns

Subqueries are useful to collapse several data points into a single field. Below are some examples of common design patterns to make developing your own queries easier.

#### Accessing the display field of a lookup that is a subquery

Contacts Table

| Field | Type | Configuration |
| --- | --- | --- |
| first_name | Single Line of Text | |
| last_name | Single Line of Text | |
| full_name | Subquery | `CONCAT(first_name, ' ', last_name)` |

Invoice Table

| Field | Type | Configuration |
| --- | --- | --- |
| invoice_number | Single Line of Text | |
| contractor_id | Lookup | Looks up to Contact with display field of Full Name |
| invoice_identifier | Subquery | See Below |


The goal of this query is to display the Invoice Identifier in the format `{Contact Full Name} : INV{Invoice Number}`

This can be achieved using

```SQL
SELECT CONCAT(C.first_name, ' ', C.last_name, ' : INV', t.invoice_number)
FROM dbo.contact as C
WHERE C.id = t.contractor_id
AND C.deleted IS NULL
```