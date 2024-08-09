# Introduction to Lodash

Lodash is a JavaScript library that allows easier data manipulation (for example, it allows better manipulation of arrays or other complex data).

Lodash expressions must be surrounded with tags (i.e. `<%= code %>`) to denote that it is a Lodash script.

In Rapid, Lodash is primarily used to pull variables and their contents from the database, and parse them into Workflow. The table below outlines some common Lodash expressions and their usefulness.

## Lodash and OData

Lodash can also be combined with OData filters, to create dynamic filtering. For example, we could have a Process triggered on the creation of a new item. However, we may only want to trigger the Workflow when that new item has a column set to a certain value.

## Lodash and JSON

Lodash can be parsed into a JSON object, which will allow custom data to be added to a POST or PUT method in Workflow.

For example, we could have a **Service Task** that **Triggers a Webhook** with a POST method, and a custom body that reads:

```json
{
 "message": "A new call back request has been submitted by: <%= StartEvent_1.properties.full_name %> \n \nPlease make contact within the next few hours \nMobile: <%= StartEvent_1.properties.mobile_phone %>",
 "request_item": -1,
 "chatId": "-4250039046"
}
```

In the example above, we can see `<%= StartEvent_1.properties.full_name %>` can be concatenated into the message string to dynamically add a name, and `<%= StartEvent_1.properties.mobile_phone %>` allows a mobile number to be dynamically added as well.