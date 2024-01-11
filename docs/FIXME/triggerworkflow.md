# triggerWorkflow

The triggerWorkflow end point allows you to trigger a manually started workflow.

For this endpoint to work correctly you need to configure a "Perform Remote Action Menu Button".

1. Copy the endpoint url from RAPID Projects &gt; Products &gt; Rapid Projects API &gt; [triggerWorkflow](https://app.rapidplatform.com/rapidplatform/projects/explorer/Products/Product:Products:27/Endpoint:Endpoints:57)
2. In the Action ID Field enter the workflow ID and the name of the start event separated by a "|" character. For example, "1|StartEvent\_1"
3. OPTIONAL INPUTS: if you want column values from a selected item to be available in the workflow create an input with the same name as the column and ensure that "Include Item" is set to true on the menu button. If the item columns match with the input title then the value will be brought across  
      
    Alternatively, you can configure a menu form, and if the column from the form data is labelled the same as the input name it will be used as the input and you will have access to it in the workflow.

[![image-1692840873773.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-08/scaled-1680-/CaajgXwkDSKeFshS-image-1692840873773.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-08/CaajgXwkDSKeFshS-image-1692840873773.png)