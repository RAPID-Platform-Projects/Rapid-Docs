<!-- # Formatting Values in a LODASH expression

Sometimes when filling a document, a user may want to fill with a number. However, as default, the rapid system returns numbers unformatted (see img below). Sometimes this can be formatted by adding an additional column using SQL but if the number is only used once or twice it is often not worthwhile creating a whole additional column putting additional load on the database.

[![image-1674000852384.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/scaled-1680-/kbMD12xxcNaclD1b-image-1674000852384.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/kbMD12xxcNaclD1b-image-1674000852384.png)

As such, if using a LODASH expression that returns a single value (this will not work with an array) you can format by adding the .toLocaleString method.

For example:

`<%= ServiceTask_1ly9smc.properties.item.total_asset_value %>` would return 50000

while

`<%= ServiceTask_1ly9smc.properties.item.total_asset_value.toLocaleString("en-AU") %>` would return "50,000"

The "en-AU" argument tells the method to format the number as per Australian English Standards. If you wish to format your string according to the standards of another locale you can find a list of locale codes here: [https://www.npmjs.com/package/locale-codes](https://www.npmjs.com/package/locale-codes)

<table border="1" id="bkmrk-value-expression-res" style="border-collapse: collapse; width: 100%; height: 223.266px;"><tbody><tr style="height: 29.7969px;"><td style="width: 13.0998%;">**Description**</td><td style="width: 12.7345%; height: 29.7969px;">**Value**</td><td style="width: 58.8381%; height: 29.7969px;">**Expression**</td><td style="width: 15.3276%; height: 29.7969px;">**Result**</td></tr><tr style="height: 30.1094px;"><td style="width: 13.0998%;">Format number</td><td style="width: 12.7345%; height: 30.1094px;">int 50000.05</td><td style="width: 58.8381%; height: 30.1094px;">`VALUE.toLocaleString("en-AU")`</td><td style="width: 15.3276%; height: 30.1094px;">"50,000.05"</td></tr><tr style="height: 40.375px;"><td style="width: 13.0998%;">Format Currency - No decimals</td><td style="width: 12.7345%; height: 40.375px;">int 50000.05</td><td style="width: 58.8381%; height: 40.375px;">`VALUE.toLocaleString("en-AU", {style: "currency", currency: "AUD", maximumFractionDigits: 0})`</td><td style="width: 15.3276%; height: 40.375px;">"$50,000"</td></tr><tr style="height: 63.3906px;"><td style="width: 13.0998%;">Format ISO to short date</td><td style="width: 12.7345%; height: 63.3906px;">"2023-04-24T00:00:00.000Z"</td><td style="width: 58.8381%; height: 63.3906px;">`DateTime.fromISO(VALUE).toFormat('dd/LL/yyyy')`</td><td style="width: 15.3276%; height: 63.3906px;">"24/04/2023"</td></tr><tr><td style="width: 13.0998%;">Return Today as ISO</td><td style="width: 12.7345%;">Today as ISO</td><td style="width: 58.8381%;">`DateTime.now().toISO()`</td><td style="width: 15.3276%;">"2023-09-04T00:00:00.000Z"</td></tr><tr><td style="width: 13.0998%;">Return Today formatted as short date</td><td style="width: 12.7345%;">Today as ISO formatted</td><td style="width: 58.8381%;">`DateTime.now().toFormat('dd/LL/yyyy')`</td><td style="width: 15.3276%;">"04/09/2023"</td></tr><tr><td style="width: 13.0998%;">Format ISO into 24 hour time</td><td style="width: 12.7345%;">"2023-04-24T10:40:00.000Z"</td><td style="width: 58.8381%;">`DateTime.fromISO(VALUE).toFormat('HH:mm')`</td><td style="width: 15.3276%;">"10:40"</td></tr><tr><td style="width: 13.0998%;">Now plus 1 hour returned as ISO</td><td style="width: 12.7345%;">Now</td><td style="width: 58.8381%;">`DateTime.now().plus({hours: 1}).toISO()`

NOTE: you can also add "seconds", "minutes", "hours", "days", "weeks", "months", "quarters", and "years"

</td><td style="width: 15.3276%;">NA</td></tr><tr><td style="width: 13.0998%;">Now minus 1 hour returned as ISO</td><td style="width: 12.7345%;">Now</td><td style="width: 58.8381%;">`DateTime.now().minus({hours: 1}).toISO()`

NOTE: you can also subtract"seconds", "minutes", "hours", "days", "weeks", "months", "quarters", and "years"

</td><td style="width: 15.3276%;">NA</td></tr><tr><td style="width: 13.0998%;">Return Start of given day</td><td style="width: 12.7345%;">"2023-09-04T10:10:00.000Z"</td><td style="width: 58.8381%;">`DateTime.now().minus({hours: 1}).startOf('day').toISO()`

</td><td style="width: 15.3276%;">"2023-09-04T00:00:00.000Z"</td></tr></tbody></table>

##### **Related articles**

[**How to filter values in a lodash expression**](https://docs.rapidplatform.com/books/workflow-keyper/page/how-to-filter-values-in-a-lodash-expression)

[**How to format array values in a lodash expression**](https://docs.rapidplatform.com/books/workflow-keyper/page/how-to-format-array-values-in-a-lodash-expression)

[**Fill Document**](https://docs.rapidplatform.com/books/workflow-keyper/page/fill-document) -->