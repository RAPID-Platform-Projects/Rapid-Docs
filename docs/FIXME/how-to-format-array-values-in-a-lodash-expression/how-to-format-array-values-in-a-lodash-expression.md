# How to format array values in a lodash expression

A get all items service task will return an array of item profiles. In this case, to format the values as you want is different to if you are returning a single item. In order to do this the .map method must be used.

Say the following lodash returns the following array

`<%= servicetask123.properties.items %> `

```JSON
[  { name: "Bill", age: "30", amount: 50000 },  { name: "Bob", age: "22", amount: 48152.51 },];
```

<div id="bkmrk-you-may-prefer-to-wo">You may prefer to work with an array with formatted values when filling a document or email. An array like this would be better:</div>

```JSON
  [  { "name": "Bill", "age": "30", "amount": "50,000" },  { "name": "Bob", "age": "22", "amount": "48,152.51"},];
```


<div id="bkmrk-to-do-this-you-would">To do this you would use the following lodash expression:</div><div id="bkmrk--1"></div><div id="bkmrk-%3C%25%3D-servicetask123.p-0">`<%= servicetask123.properties.items.map(({name, age, amount}) => ({name, age, amount: amount?.toLocaleString("en-US")}) ) %> `</div><div id="bkmrk--2"></div><div id="bkmrk-in-the-case-above%2C-b">In the case above, because we only want to format the amount property that is all we do with the .toLocalString method.</div><div id="bkmrk--3"></div>##### **Related articles**

[**Formatting Values in a LODASH expression**](https://docs.rapidplatform.com/books/workflow-keyper/page/formatting-values-in-a-lodash-expression)

[**How to filter values in a lodash expression**](https://docs.rapidplatform.com/books/workflow-keyper/page/how-to-filter-values-in-a-lodash-expression)

**[Fill Document](https://docs.rapidplatform.com/books/workflow-keyper/page/fill-document)**