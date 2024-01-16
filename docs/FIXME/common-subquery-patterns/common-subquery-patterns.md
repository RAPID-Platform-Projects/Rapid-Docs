# Common Subquery Patterns

Subqueries are useful to collapse several data points into a single field. Below are some examples of common design patterns to make developing your own queries easier.

#### Accessing the display field of a lookup that is a subquery

Contacts Table

<table  id="bkmrk-field-type-configura" ><tbody><tr><td >Field</td><td >Type</td><td >Configuration</td></tr><tr><td >first\_name</td><td >Single Line of Text</td><td > </td></tr><tr><td >last\_name</td><td >Single Line of Text</td><td > </td></tr><tr><td >full\_name</td><td >Subquery</td><td >CONCAT(first\_name, ' ', last\_name)</td></tr></tbody></table>

Invoice Table

<table  id="bkmrk-field-type-configura-0" ><tbody><tr><td >Field</td><td >Type</td><td >Configuration</td></tr><tr><td >invoice\_number</td><td >Single Line of Text</td><td > </td></tr><tr><td >contractor\_id</td><td >Lookup</td><td >Looks up to Contact with display field of Full Name</td></tr><tr><td >invoice\_identifier</td><td >Subquery</td><td >See Below</td></tr></tbody></table>

The goal of this query is to display the Invoice Identifier in the format `{Contact Full Name} : INV{Invoice Number}`

This can be achieved using

```
SELECT CONCAT(C.first_name, ' ', C.last_name, ' : INV', t.invoice_number)
FROM dbo.contact as C
WHERE C.id = t.contractor_id
AND C.deleted IS NULL
```