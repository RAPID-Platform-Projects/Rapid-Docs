# Filtering Values

In some instances you may want to filter the array of items you are passing to prefill a document, form, or email. This can be achieved using the `.filter` method.

The `.filter` method creates a new array with all elements that pass the test implemented by the function. The filter method takes a [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) as an argument, which then passes through each of the array elements.

In the example below, the filter is passing through each array element and checking to see if they can be divided by 2. Because 1 is not divisible by 2, it returns a false value and is not added to the new array.

The filter method now moves onto the next element in the array. If an element returns true, it is added to the new array, and so on.

```js
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function(num){
    return num % 2 === 0;
});

console.log(evenNumbers); // Returns: [2, 4]
```

Generally speaking, the array you will encounter in workflow from the **Get All Items** service task will be arrays of objects not numbers. As such, you can filter by one of the object properties. To illustrate this, below is the response from a **Get All Items** service task. It returns a list of contacts.

```json
[{
    "id": 69,
    "sys_type_id": 81,
    "deleted": null,
    "parent_id": null,
    "parent": null,
    "parent$type": null,
    "drive_id": null,
    "folder_id": null,
    "first_name": "Duncan",
    "member_id": null,
    "member": null,
    "member$type": null,
    "business_id": 55,
    "business": "Simpli",
    "business$type": 13,
    "last_name": "Duncan",
    "phone": "789",
    "mobile_phone": "987",
    "email": "DuncanMartinez@simpli.org",
    "full_name": "Duncan Martinez",
    "role": "Key Stakeholder",
    "primary_contact": true,
    "__metadata": {
        "type": "Contacts"
    }
},
{
    "id": 68,
    "sys_type_id": 81,
    "deleted": null,
    "parent_id": null,
    "parent": null,
    "parent$type": null,
    "drive_id": null,
    "folder_id": null,
    "first_name": "Boyd",
    "member_id": null,
    "member": null,
    "member$type": null,
    "business_id": 55,
    "business": "Simpli",
    "business$type": 13,
    "last_name": "McDoogle",
    "phone": "123",
    "mobile_phone": "123",
    "email": "BoydMcDoogle@simpli.org",
    "full_name": "Boyd McDoogle",
    "role": "CTO",
    "primary_contact": null,
    "__metadata": {
        "type": "Contacts"
    }
}]
```

In this specific use case we want to send an email to the primary contact, so the array needs to be filtered down to that. As can be seen above each item has a property called `primary_contact`. In cases where it is null the `.filter` will return false. In cases where it contains an email, the `.filter` will return true.

The lodash expression that will return the whole array is:

```jsx
<%= UserTask_0jywadt.properties.items %>
```

## .filter( )

We can now add a filter to this expression which will look as below:

```jsx
<%= UserTask_0jywadt.properties.items.filter(items => items.primary_contact === true) %>
```

This will go through each of the contacts, check to see if its property primary\_contact is equal to true and if true it will add that contact to the new array.

Now we have filtered down the list to one item. However, it is still an array (just an array with one item). In order to get that item from the array we can pass through the index of the item. In this case because we know the array only has one item it will be index 0. This can be done as below:

```jsx
<%= UserTask_0jywadt.properties.items.filter(items => items.primary_contact === true)[0] %>
```

If we want to send an email to this contact, we will need to retrieve the email from this array item, by specifying the `.email` column like so:

```jsx
<%= UserTask_0jywadt.properties.items.filter(items => items.primary_contact === true)[0]?.email %>s
```

Note the use of the question mark above. This is called an Optional Chaining Operator and is added to handle null values. To find out more about the Optional Chaining Operator see the following MDN documentation.