<!-- # updateItem

The updateItem endpoint does exactly that. When provided a list, id, and item body it will then update that item on that list with that item body.

This means that items can be updated through a workflow using a "Trigger a webhook" service task.

The endpoint can be found under Projects Site &gt; Products &gt; Projects API &gt; updateItem &gt; endpoint

For this endpoint to work the rapid site needs to be specified by adding the following url parameters

https://exampleendpoint?env={test or prod}&amp;tenant={tenant name}&amp;site={site name}

The endpoint method must be set to POST.

An example body is provided below:

`{`

<div id="bkmrk-%C2%A0%C2%A0%C2%A0%22list%22%3A-%22listname"><div>`    "list": "ListName",`</div><div>`    "id": 111,`</div><div>`    "itemBody": {`</div><div>`        "listField1": "value1",`</div><div>`        "listField2": "value2",`</div><div>`        "listField3": "value3"`</div><div>`    }`</div><div>`}`</div></div><div id="bkmrk-optional-trigger-web"><div>**Optional Trigger Webhooks parameter**  
</div></div>If you want the creation of this item to trigger webhook you can include the trigger webhook key. By default, it is false. To enable see the example below:

`{`

<div id="bkmrk-%C2%A0%C2%A0%C2%A0%22list%22%3A-%22listname-0"><div>`    "list": "ListName",`</div><div> "id":111,``</div><div>`    "itemBody": {`</div><div>`        "listField1": "value1",`</div><div>`        "listField2": "value2",`</div><div>`        "listField3": "value3"`</div><div>`    },`</div><div> `"triggerWebhooks": true`</div><div>`}`</div></div> -->