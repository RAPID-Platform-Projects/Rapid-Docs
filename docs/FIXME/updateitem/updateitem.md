# updateItem

The updateItem endpoint does exactly that. When provided a list, id, and item body it will then update that item on that list with that item body.

This means that items can be updated through a workflow using a "Trigger a webhook" service task.

The endpoint can be found under Projects Site &gt; Products &gt; Projects API &gt; updateItem &gt; endpoint

For this endpoint to work the rapid site needs to be specified by adding the following url parameters

`https://exampleendpoint?env={test or prod}&amp;tenant={tenant name}&amp;site={site name}`

The endpoint method must be set to POST.

An example body is provided below:

```JSON
{
    "list": "ListName",
    "id": 111,
    "itemBody": {
        "listField1": "value1",
        "listField2": "value2",
        "listField3": "value3"
    }
}
```
### Optional Trigger Webhooks parameter
https://docs.rapidplatform.com/link/112#bkmrk-if-you-want-the-crea
 
If you want the creation of this item to trigger webhook you can include the trigger webhook key. By default, it is false. To enable see the example below:

```JSON
{
    "list": "ListName",
          "id":111,
    "itemBody": {
        "listField1": "value1",
        "listField2": "value2",
        "listField3": "value3"
    },
      "triggerWebhooks": true
}
```