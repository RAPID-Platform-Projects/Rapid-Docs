# Formatting Arrays

A get all items service task will return an array of item profiles. In this case, to format the values as you want is different to if you are returning a single item. In order to do this the .map method must be used.

Say the following lodash returns the following array

`<%= servicetask123.properties.items %> `

```JS
[
  { name: "Bill", age: "30", amount: 50000 },
  { name: "Bob", age: "22", amount: 48152.51 },
];
```

You may prefer to work with an array with formatted values when filling a document or email. An array like this would be better:

```JS
[
  { name: "Bill", age: "30", amount: "50,000" },
  { name: "Bob", age: "22", amount: "48,152.51"},
];
```


To do this you would use the following lodash expression:  

`<%= servicetask123.properties.items.map(({name, age, amount}) => ({name, age, amount: amount?.toLocaleString("en-US")}) ) %> `   

In the case above, because we only want to format the 'amount' property that is the only field to which we apply the .toLocalString method.

## Related articles

- [How to **filter values** in a lodash expression](</docs/Rapid/Keyper%20Manual/Workflow/Lodash/filtering-values-with-lodash/>)
- [How to **format values** in a lodash expression](</docs/Rapid/Keyper%20Manual/Workflow/Lodash/formatting-values-with-lodash/>)
- [How to **fill document** using a service task](</docs/Rapid/Keyper%20Manual/Workflow/element-types/tasks/service-task/fill-document/>)