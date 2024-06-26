# Formatting Values with Lodash

Sometimes when filling a document, a user may want to fill with a number. However, as default, the rapid system returns numbers unformatted (see img below). Sometimes this can be formatted by adding an additional column using SQL but if the number is only used once or twice it is often not worthwhile creating a whole additional column putting additional load on the database.

![image-1674000852384.png](./downloaded_image_1705285495298.png)

As such, if using a LODASH expression that returns a single value (this will not work with an array) you can format by adding the .toLocaleString method.

For example:

`<%= ServiceTask_1ly9smc.properties.item.total_asset_value %>` would return 50000

while

`<%= ServiceTask_1ly9smc.properties.item.total_asset_value.toLocaleString("en-AU") %>` would return "50,000"

The "en-AU" argument tells the method to format the number as per Australian English Standards. If you wish to format your string according to the standards of another locale you can find a list of locale codes here: [https://www.npmjs.com/package/locale-codes](https://www.npmjs.com/package/locale-codes)

| Description | Value | Expression | Result |
| --- | --- | --- | --- |
| Format number | 50000.05 | `VALUE.toLocaleString("en-AU")` | `"50,000.05"` |
| Format Currency - No decimals | 50000.05 | `VALUE.toLocaleString("en-AU", {style: "currency", currency: "AUD", maximumFractionDigits: 0})` | "$50,000" |
| Format ISO to short date | "2023-04-24T00:00:00.000Z" | `DateTime.fromISO(VALUE).toFormat('dd/LL/yyyy')` | 	"24/04/2023" |
| Return Today as ISO | Today as ISO | `DateTime.now().toISO()` | 	"2023-09-04T00:00:00.000Z" | 
| Return Today formatted as short date | Today as ISO formatted | `DateTime.now().toFormat('dd/LL/yyyy')` | 	"04/09/2023" | 
| Format ISO into 24 hour time | "2023-04-24T10:40:00.000Z" | `DateTime.fromISO(VALUE).toFormat('HH:mm')` | "10:40" |
| Now plus 1 hour returned as ISO | Now | `DateTime.now().plus({hours: 1}).toISO()` NOTE: you can also add "seconds", "minutes", "hours", "days", "weeks", "months", "quarters", and "years" | NA |
| Now minus 1 hour returned as ISO | Now | `DateTime.now().minus({hours: 1}).toISO()` NOTE: you can also subtract"seconds", "minutes", "hours", "days", "weeks", "months", "quarters", and "years" | NA |
| Return Start of given day | "2023-09-04T10:10:00.000Z" | `DateTime.now().minus({hours: 1}).startOf('day').toISO()` | "2023-09-04T00:00:00.000Z" |


## Related articles

- [How to **filter values** in a lodash expression](</docs/Rapid/4-Keyper Manual/3-Workflow/filtering-values-with-lodash/filtering-values-with-lodash.md>)

- [How to **format array values** in a lodash expression](</docs/Rapid/4-Keyper Manual/3-Workflow/formatting-arrays-with-lodash/formatting-arrays-with-lodash.md>)

- [How to **fill document** using a service task](</docs/Rapid/4-Keyper Manual/3-Workflow/8-tasks/service-task/fill-document/fill-document.md>)