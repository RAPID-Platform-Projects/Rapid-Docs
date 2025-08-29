# Formatting Arrays

A **Get All Items** service task will return an array of item profiles. In this case, to format the values is different to if you are returning a single item. In order to do this the .map method must be used.

For example, say the Lodash expression `<%= servicetask123.properties.items %>` returns the following array:

```JS
[
  { name: "Bill", age: "30", amount: "50,000" },
  { name: "Bob", age: "22", amount: "48,152.51"},
];
```

To format this array, you would use the following  `.map` lodash expression:  

```jsx
<%= servicetask123.properties.items.map(({name, age, amount}) => ({name, age, amount: amount?.toLocaleString("en-US")})) %>
```

In the case above, because we only want to format the 'amount' property, this is the only field to which we apply the `.toLocalString` method.