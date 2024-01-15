# deleteItem

The deleteItem endpoint does exactly that. When provided a list and id then delete that item on that list.

This means that items can be deleted through a workflow using a "Trigger a webhook" service task.

The endpoint can be found under Projects Site &gt; Products &gt; Projects API &gt; updateItem &gt; endpoint

For this endpoint to work the rapid site needs to be specified by adding the following url parameters

https://exampleendpoint?env=\{test or prod}&amp;tenant=\{tenant name}&amp;site=\{site name\}

https://exampleendpoint?env=test&amp;tenant=rapidplatform&amp;site=projects

The endpoint method must be set to POST.

An example body is provided below:
```json
{"list": "ListName", "id": 111,}
```
Optional Trigger Webhooks parameter If you want the creation of this item to trigger webhook you can include the trigger webhook key. By default, it is false. To enable see the example below:

```json
{"list": "ListName",    "id": 111, `"triggerWebhooks": true}
```