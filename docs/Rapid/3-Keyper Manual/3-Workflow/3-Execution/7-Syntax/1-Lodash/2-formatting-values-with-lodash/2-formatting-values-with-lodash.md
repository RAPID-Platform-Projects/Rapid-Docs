# Formatting Values

Sometimes when filling a document, a user may want to display a number. However, as default, the Rapid system returns numbers in an unformatted state.

```js
"total_asset_value" : int 50000

<%= serviceTask_1ly9smc.properties.item.total_asset_value %>
// Returns "50000"
```

Sometimes this can be formatted by adding an additional column using SQL, but if the number is only used once or twice it is often not worthwhile creating a whole additional column and putting additional load on the database.

As such, if using a Lodash expression that returns a single value you can format it by adding the `.toLocaleString` method. Note that this does not work for arrays.

For example:

```jsx
<%= ServiceTask_1ly9smc.properties.item.total_asset_value.toLocaleString("en-AU") %>
// Returns "50,000"
```

The "en-AU" argument above, tells the method to format the number as per Australian English Standards. If you wish to format your string according to the standards of another locale you can find a [list of locale codes here](https://www.npmjs.com/package/locale-codes).

| Description | Value | Expression | Result |
| --- | --- | --- | --- |
| Format number | 50000.05 | `VALUE.toLocaleString("en-AU")` | "50,000.05" |
| Format Currency - No decimals | 50000.05 | `VALUE.toLocaleString("en-AU", {style: "currency", currency: "AUD", maximumFractionDigits: 0})` | "$50,000" |
| Format ISO to short date | "2023-04-24T00:00:00.000Z" | `DateTime.fromISO(VALUE).toFormat('dd/LL/yyyy')` | 	"24/04/2023" |
| Return Today as ISO | Today as ISO | `DateTime.now().toISO()` | 	"2023-09-04T00:00:00.000Z" | 
| Return Today formatted as short date | Today as ISO formatted | `DateTime.now().toFormat('dd/LL/yyyy')` | 	"04/09/2023" | 
| Format ISO into 24 hour time | "2023-04-24T10:40:00.000Z" | `DateTime.fromISO(VALUE).toFormat('HH:mm')` | "10:40" |
| Now plus 1 hour returned as ISO | Now | `DateTime.now().plus({hours: 1}).toISO()` NOTE: you can also add "seconds", "minutes", "hours", "days", "weeks", "months", "quarters", and "years" | NA |
| Now minus 1 hour returned as ISO | Now | `DateTime.now().minus({hours: 1}).toISO()` NOTE: you can also subtract"seconds", "minutes", "hours", "days", "weeks", "months", "quarters", and "years" | NA |
| Return Start of given day | "2023-09-04T10:10:00.000Z" | `DateTime.now().minus({hours: 1}).startOf('day').toISO()` | "2023-09-04T00:00:00.000Z" |

## Rich Text and DocX

Multi-line text fields store their rich text in HTML format. When using these values in DocX scenarios you can end up with ugly `<p>` tags and other junk polluting your document. For smaller fields where retaining the formatting isn't important, you can use the custom `htmlToText()` function in lodash inputs to strip out these tags.

For example, `<%= htmlToText(workflow['Jobs'].properties.item.cab_frame_general_notes) %>` will take the text from a Job items' Cab Frame general notes that originally looked like this:

```
<p>PRE WIRE FOR LIGHT BAR AT BULLBAR</p><p>WEIGH TRUCK AND TRAILER</p><p></p>
```

Then strip out the HTML glyphs ending up with the following text:

```
PRE WIRE FOR LIGHT BAR AT BULLBAR

WEIGH TRUCK AND TRAILER
```

Note the function will insert additional line breaks between `<p>` tags to try and help preserve the shape of the input text.