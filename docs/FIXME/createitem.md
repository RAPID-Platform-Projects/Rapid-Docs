# createItem

The createItem endpoint does exactly that. When provided a list, and item body it will then create an item on that list with that item body.

This means that items can be created through a workflow using a "Trigger a webhook" service task.

The endpoint can be found under Projects Site &gt; Products &gt; Projects API &gt; updateItem &gt; endpoint

For this endpoint to work the rapid site needs to be specified by adding the following url parameters. The endpoint can be found on the projects Site &gt; Products &gt; Rapid Projects API &gt; [Endpoints](https://app.rapidplatform.com/rapidplatform/projects/explorer/Products/Product:Products:27/Endpoint:Endpoints:50)

https://exampleendpoint?env={test or prod}&amp;tenant={tenant name}&amp;site={site name}

The endpoint method must be set to POST.

An example body is provided below:

`{`

<div id="bkmrk-%C2%A0%C2%A0%C2%A0%22list%22%3A-%22listname"><div>`    "list": "ListName",`</div><div>`    "itemBody": {`</div><div>`        "listField1": "value1",`</div><div>`        "listField2": "value2",`</div><div>`        "listField3": "value3"`</div><div>`    }`</div><div>`}`</div><div>Optional Trigger Webhooks parameter  
</div></div>If you want the creation of this item to trigger webhook you can include the trigger webhook key. By default, it is false. To enable see the example below:

`{`

<div id="bkmrk-%C2%A0%C2%A0%C2%A0%22list%22%3A-%22listname-0"><div>`    "list": "ListName",`</div><div>`    "itemBody": {`</div><div>`        "listField1": "value1",`</div><div>`        "listField2": "value2",`</div><div>`        "listField3": "value3"`</div><div>`    },`</div><div> `"triggerWebhooks": true`</div><div>`}`</div></div>