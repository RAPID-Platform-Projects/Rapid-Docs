# Using the Convert Document to PDF Endpoint

The purpose of this endpoint allows a user to convert Word or PowerPoint (or other file formats that [Microsoft](https://learn.microsoft.com/en-us/graph/api/driveitem-get-content-format?view=graph-rest-1.0&tabs=http) accepts) file in a workflow to a pdf. The pdf will be saved to the same folder as the original file.

To integrate this into a workflow follow these steps:

1. Ensure that you have a fill document service task before the webhook (convert to pdf) service task. [![image-1673925425475.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/scaled-1680-/lrtcehnwLricrVnC-image-1673925425475.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/lrtcehnwLricrVnC-image-1673925425475.png)
2. Configure the word to pdf service task as a webhook
3. Paste in the following endpoint and be sure to fill in your code, tenant, site, and environment: 
    1. If you are working on a Simpli end point you can find the code on the Rapid Internal Site &gt; DevOps &gt; Software Products &gt; SimpliLTDAPI &gt; ConvertDocumentToPDF
    2. https://simpliltd-api.azurewebsites.net/api/ConvertDocumentToPDF?code=**YOUR\_CODE**&amp;tenant=**YOUR MICROSOFT TENANT**&amp;site=**YOUR RAPID SITE**&amp;env=**prod or test**
    3. See this example with a fake code
    4. https://simpliltd-api.azurewebsites.net/api/ConvertDocumentToPDF?code=**j23ou48ijfmds890fu23rni32rj80fujifj2380uf9jc0idsuf8dsu80fij32**&amp;tenant=**simpliltd**&amp;site=**internal**&amp;env=**prod**
    5.
4. Ensure the Method is set to "POST"
5. In the custom body create a JSON with the following format <div>`{`</div><div>`    "drive_item_id": "ENTER ITEM ID OF FILLED DOCUMENT",`</div><div>`    "drive_id": "ENTER DRIVE ID OF FILLED DOCUMENT",`</div><div>`    "target_drive_id": "OPTIONAL: TARGET DRIVE ID",`</div><div>`    "target_drive_item_id": "OPTIONAL: FOLDER"`</div><div>`}`</div>
6. See below example of configured Word to PDF [![image-1673926840636.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/scaled-1680-/jODAru4UPGj1tLZ4-image-1673926840636.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-01/jODAru4UPGj1tLZ4-image-1673926840636.png)