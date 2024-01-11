# deleteItem

The deleteItem endpoint does exactly that. When provided a list and id then delete that item on that list.

This means that items can be deleted through a workflow using a "Trigger a webhook" service task.

The endpoint can be found under Projects Site &gt; Products &gt; Projects API &gt; updateItem &gt; endpoint

For this endpoint to work the rapid site needs to be specified by adding the following url parameters

https://exampleendpoint?env={test or prod}&amp;tenant={tenant name}&amp;site={site name}

https://exampleendpoint?env=test&amp;tenant=rapidplatform&amp;site=projects

The endpoint method must be set to POST.

An example body is provided below:

`{`

<div id="bkmrk-%C2%A0%C2%A0%C2%A0%22list%22%3A-%22listname"><div>`    "list": "ListName",`</div><div>`    "id": 111,`````</div><div>`}`</div><div>``</div><div><div id="bkmrk-optional-trigger-web"><div></div><div>**Optional Trigger Webhooks parameter**</div></div></div></div>If you want the creation of this item to trigger webhook you can include the trigger webhook key. By default, it is false. To enable see the example below:

`{`

<div id="bkmrk-%C2%A0%C2%A0%C2%A0%22list%22%3A-%22listname-0"><div><div id="bkmrk-%C2%A0%C2%A0%C2%A0%22list%22%3A-%22listname-1"><div>`    "list": "ListName",`</div><div>`    "id": 111,```</div><div> `"triggerWebhooks": true`</div><div>`}`</div></div>``</div></div>