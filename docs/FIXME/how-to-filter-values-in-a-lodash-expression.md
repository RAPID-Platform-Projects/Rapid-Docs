# How to filter values in a lodash expression

In some instance you may only want the array you are passing to prefill a document, form, or email to be filtered based on one of the array items characteristics. This can be achieved using the filter method.

The filter method creates a new array with all elements that pass the test implemented by the function. The filter method takes a [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) as an argument which passes through each of the array elements. In the example below, the filter is passing through each array element and checking to see if they can be divided by 2.

'1' is not divisible by 2 meaning that it returns a false value and is not added to the new array.

The filter method now moves onto the next element.

'2' is divisible by 2 returning a true value and that element is added to the new array.

[![image-1674425777297.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/scaled-1680-/3obT5xT4RqNIKciy-image-1674425777297.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/3obT5xT4RqNIKciy-image-1674425777297.png)

Generally speaking, the array you will encounter in workflow from the 'get all items' service task will be arrays of objects not numbers. As such you can filter by one of the object properties. To illustrate this below is the items response from a 'get all items' service task that returns a list of contacts.

```JSON
[<br></br>  {<br></br>    "id": 69,<br></br>    "sys_type_id": 81,<br></br>    "deleted": null,<br></br>    "parent_id": null,<br></br>    "parent": null,<br></br>    "parent$type": null,<br></br>    "drive_id": null,<br></br>    "folder_id": null,<br></br>    "first_name": "Danny",<br></br>    "member_id": null,<br></br>    "member": null,<br></br>    "member$type": null,<br></br>    "business_id": 55,<br></br>    "business": "Simpli",<br></br>    "business$type": 13,<br></br>    "last_name": "R",<br></br>    "phone": "789",<br></br>    "mobile_phone": "987",<br></br>    "email": "Sample@simpli.org",<br></br>    "full_name": "Danny R",<br></br>    "role": "Key Stakeholder",<br></br>    "primary_contact": true,<br></br>    "__metadata": {<br></br>      "type": "Contacts"<br></br>    }<br></br>  },<br></br>  {<br></br>    "id": 68,<br></br>    "sys_type_id": 81,<br></br>    "deleted": null,<br></br>    "parent_id": null,<br></br>    "parent": null,<br></br>    "parent$type": null,<br></br>    "drive_id": null,<br></br>    "folder_id": null,<br></br>    "first_name": "Tristan",<br></br>    "member_id": null,<br></br>    "member": null,<br></br>    "member$type": null,<br></br>    "business_id": 55,<br></br>    "business": "Simpli",<br></br>    "business$type": 13,<br></br>    "last_name": "van",<br></br>    "phone": "123",<br></br>    "mobile_phone": "123",<br></br>    "email": "Sample2@simpli.org",<br></br>    "full_name": "Tristan",<br></br>    "role": "CTO",<br></br>    "primary_contact": null,<br></br>    "__metadata": {<br></br>      "type": "Contacts"<br></br>    }<br></br>  }<br></br>]
```

In this specific use case we want to send an email to the primary contact so the array needs to be filtered down to that. As can be seen above each item has a property called `primary_contact`. In cases where it was not set it will return null. In cases where it is set to true it will return true and in cases where it is set to false it will return false.

The lodash expression that will return the whole array is as below:

`<%= UserTask_0jywadt.properties.items %>`

We can now add a filter to this expression which will look as below:

`<%= UserTask_0jywadt.properties.items.filter(items => items.primary_contact ===true) %>`

This will go through each of the contacts, check to see if its property primary\_contact is equal to true and if true it will add that contact to the new array.

Now we have filtered down the list to one item. However, it is still an array (just an array with one item). In order to get that item from the array we can pass through the index of the item. In this case because we know the array only has one item it will be index 0. This can be done as below:

`<%= UserTask_0jywadt.properties.items.filter(items => items.primary_contact ===true)[0] %>`

If we want to send an email to this contact we will not to retrieve the email from this array item as below:

`<%= UserTask_0jywadt.properties.items.filter(items => items.primary_contact ===true)[0]?.email %>`

Note the use of the question mark above. This is called an Optional Chaining Operator and is added to handle null values. To find out more about the Optional Chaining Operator see the following MDN documentation.

##### **Related articles**

[**Formatting Values in a LODASH expression**](https://docs.rapidplatform.com/books/workflow-keyper/page/formatting-values-in-a-lodash-expression)

[**How to format array values in a lodash expression**](https://docs.rapidplatform.com/books/workflow-keyper/page/how-to-format-array-values-in-a-lodash-expression)

**[Fill Document](https://docs.rapidplatform.com/books/workflow-keyper/page/fill-document)**