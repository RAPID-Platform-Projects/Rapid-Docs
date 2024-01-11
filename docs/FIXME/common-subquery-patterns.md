# Common Subquery Patterns

Subqueries are useful to collapse several data points into a single field. Below are some examples of common design patterns to make developing your own queries easier.

#### Accessing the display field of a lookup that is a subquery

Contacts Table

<table border="1" id="bkmrk-field-type-configura" style="border-collapse: collapse; width: 100%;"><tbody><tr><td style="width: 33.3333%;">Field</td><td style="width: 33.3333%;">Type</td><td style="width: 33.3333%;">Configuration</td></tr><tr><td style="width: 33.3333%;">first\_name</td><td style="width: 33.3333%;">Single Line of Text</td><td style="width: 33.3333%;"> </td></tr><tr><td style="width: 33.3333%;">last\_name</td><td style="width: 33.3333%;">Single Line of Text</td><td style="width: 33.3333%;"> </td></tr><tr><td style="width: 33.3333%;">full\_name</td><td style="width: 33.3333%;">Subquery</td><td style="width: 33.3333%;">CONCAT(first\_name, ' ', last\_name)</td></tr></tbody></table>

Invoice Table

<table border="1" id="bkmrk-field-type-configura-0" style="border-collapse: collapse; width: 100%;"><tbody><tr><td style="width: 33.3333%;">Field</td><td style="width: 33.3333%;">Type</td><td style="width: 33.3333%;">Configuration</td></tr><tr><td style="width: 33.3333%;">invoice\_number</td><td style="width: 33.3333%;">Single Line of Text</td><td style="width: 33.3333%;"> </td></tr><tr><td style="width: 33.3333%;">contractor\_id</td><td style="width: 33.3333%;">Lookup</td><td style="width: 33.3333%;">Looks up to Contact with display field of Full Name</td></tr><tr><td style="width: 33.3333%;">invoice\_identifier</td><td style="width: 33.3333%;">Subquery</td><td style="width: 33.3333%;">See Below</td></tr></tbody></table>

The goal of this query is to display the Invoice Identifier in the format `{Contact Full Name} : INV{Invoice Number}`

This can be achieved using

```
SELECT CONCAT(C.first_name, ' ', C.last_name, ' : INV', t.invoice_number)
FROM dbo.contact as C
WHERE C.id = t.contractor_id
AND C.deleted IS NULL
```