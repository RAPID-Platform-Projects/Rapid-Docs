# Column importing tips

There are 13 different input column types and two presentation only column types. Here we will cover importing each type.

## Input Columns

### Booleans

Boolean columns store `TRUE`/`FALSE` values. When importing data you can set this value using the following table.

| Input Value                | Stored in Rapid as |
| -------------------------- | ------------------ |
| `1`                        | `TRUE`             |
| `0`                        | `FALSE`            |
| `"No"`                     | `FALSE`            |
| `"False"`                  | `FALSE`            |
| Any non-zero number        | `TRUE`             |
| Any text not in this table | `TRUE`             |

### Dates

Date fields store a date, without time. Date fields are expecting [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) style date strings. While this can sound intimidating they are quite simple.

For only dates you can use `YYYY-MM-DD` format

| Date | Example|
| --- | --- |
| 01/01/1900 | 1900-01-01 |
| 30/05/2020 | 2020-05-30 |
| Third of Jan 2024 | 2024-01-03 |

### Date and Times

DateTime fields store dates along with time. These can also include the associated time zone following the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard.

For dates with times you can use `YYYY-MM-DDThh:mm:ss.zzzzZ`
Here the capital `Z` represents the UTC time zone and is optional

| Date | Example|
| --- | --- |
| 5:45pm 01/01/2000 | 2000-01-01T17:45:00.0000 |
| Midday the Third of June, 2050 | 2050-06-03T12:00:00.0000 |
| 11:36:45 6/4/2019 UTC | 2019-04-06T11:36:45.0000Z |

### Single lines of text

Single line of text fields store text, with a character limited defined by the column. This limit is by default 512 characters.

### Email

Email columns behave exactly like Single line of Text columns. There is no validation or restriction on their content.

### Choices

Choice columns behave exactly like Single line of Text columns when importing. This allows you to import choices that are not available on the dropdown. These 'unconfigured' choices will use the default colour and otherwise behave like a normal choice. Adding 'unconfigured' choices to an item(s) will not alter the configuration of the choice column on your site.

### Multiple lines of text

Multi-line columns store large amounts of formatted text. They otherwise behave the same as Single Line of Text columns, just with a much larger limit.

### Lookups

Lookup columns are stored as IDs. When importing data against a lookup column it needs to be provided the ID value of the item being targeted.

Data supports Excel like formulas so you can reference ID fields across worksheets

For example, here is a 'working' sheet set up with data from the site.
![Worksheet with some example data](<Working Out Sheet.png>)

From this sheet, we can reference the Industries and Businesses associated with the lead. 
![Formula field referencing another cell in a worksheet](<Formula referencing another sheet.png>)

:::tip
Data is based off DHX Spreadsheet technology. You can find a list of supported functions [here](https://docs.dhtmlx.com/spreadsheet/functions/)
:::

Using this you can create an automatically updating system of IDs by reference.

### Users

User columns behave exactly like lookup columns, except they always target the Principals table.

### Numbers

Number columns can store [decimal numbers](https://learn.microsoft.com/en-us/sql/t-sql/data-types/decimal-and-numeric-transact-sql?view=sql-server-ver16) with up to 4 digits of precision. This includes numbers up to `9,999,999,999,999.9999`

### Percentages

Percentage columns behave exactly like Number columns.

### Currencies

Currency columns behave exactly like Number columns. Be careful not to include the currency symbol in the input data as that will treat the content as text.

### Whole Numbers

Whole numbers can only store [integer](https://learn.microsoft.com/en-us/sql/t-sql/data-types/int-bigint-smallint-and-tinyint-transact-sql?view=sql-server-ver16) values with no decimal component. They are limited to `-2,147,483,648` to `2,147,483,647`

## Display Columns

Subquery and Computed columns are only able to display information and cannot be populated. If you try to sync data against one of these column types it will be ignored.
