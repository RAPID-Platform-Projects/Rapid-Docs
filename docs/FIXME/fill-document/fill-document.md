# Fill Document

The Fill Document service task takes a Microsoft Word file that has been prepared in accordance with the [DocX standard](https://docxtemplater.readthedocs.io/) and creates a copy pre-filled with data from within your process.

### Workflow v1

##### Array Handling

To deal with an unknown number of items in a list DocX has implemented [loops](https://docxtemplater.readthedocs.io/en/latest/tag_types.html#loops). In order to put the array into the service task use the [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) function to convert your array from within your process.

![Fill Document Arrays 01.png](https://docs.rapidplatform.com/uploads/images/gallery/2021-11/JJbp0GQngsLXGJWR-workflow-fill-document.png)

#### Document Example

```
{project.title | upper} <br></br>Start: {project.start_date | endOf: ‘day’ | format: ‘dd-MM-yyyy'} <br></br>{#project.tasks} <br></br>{title} {start_date | format:’dd/MM/yy’} {due_date} {total | currency:’fil-PH’:’PHP’}<br></br>{/}
```

#### Supported Filter Expressions

After the pipe are filter expressions. You can use these to alter the input text before it is placed in the document. Currently supported filter expressions include

||||
|--- |--- |--- |
|Expression|Description|Example|
|upper|Sets the text to be uppercase|`\{project.title | upper}`|
|endOf|Moves a date to the end of the given unit
          Units:

          - year
          - quarter
          - month
          - week
          - day
          - hour
          - minute
          - second
          - millisecond|`\{project.start_date | endOf:'week'}`|
|startOf|Moves a date to the start of the given unit|`\{project.start_date | startOf:'week'}`|
|format|Formats a given date.

        See [supported date formats](https://moment.github.io/luxon/#/formatting?id=table-of-tokens)|`\{project.start_date | format:'dd-MM-yy'}`|
|currency|Formats a given number to the specified locale and currency.

        Locale defaults to 'en-au' and currency defaults to 'AUD'|`\{project.cost | currency:'en-de':'USD'}`|
|where|Filters an array by the specified string expression|`\{project.tasks | where:"status != 'Completed'"}`|
|sumBy|Sums an array by the specified field|`\{projects.invoices | sumBy:"amount"}`|
|parse|Given a bunch of JSON data in a string, parses into JSON object.|`\{#projects.tasks | parse} \{assigned_to} \{}`|


#### Document Themes

You can set the Document theme values using the Theme tab. These values match up with the custom theme configurator found in Word. Do note that Word Online and Word the application have different behaviour when displaying themed documents. The following values will be ignored in Word locally, but display correctly in Word Online

Text/Background - Dark 1 : Sets to Black

Text/Background - Light 1 : Sets to White

##### **Related articles**

[**Formatting Values in a LODASH expression**](https://docs.rapidplatform.com/books/workflow-keyper/page/formatting-values-in-a-lodash-expression)

[**How to filter values in a lodash expression**](https://docs.rapidplatform.com/books/workflow-keyper/page/how-to-filter-values-in-a-lodash-expression)

[**How to format array values in a lodash expression**](https://docs.rapidplatform.com/books/workflow-keyper/page/how-to-format-array-values-in-a-lodash-expression)