# Sending Documents With a Sharelink

### Sending Documents With a Sharelink

Note: In order to use this method to share a file, the file must exist in the output of a Workflow Element, as this function grabs the DriveID and DriveItemId from a passed elements embedded\_files. This can be useful for attaching files to SendGrid emails, among other uses.

A webhook is available to automatically create a Sharepoint Sharelink with an Azure function for easy use within Workflow.

![image-1673500768035.png](./downloaded_image_1705285916237.png)

Create a service task and select "trigger a webhook". In the "Trigger Endpoint" enter the endpoint URL of the Azure function:

TBA

Carefully add to the end of this URL:

&amp;env=prod&amp;tenant={tenantName}&amp;site={siteName}&amp;elementId={taskHere}

Making sure to replace the {elements} with the tenant, site and task reference respectively. The elementId is the reference of the task that created the document to be shared. *Note, it is usually safer, and easier, to make this URL in a separate word processor so you can see what you are doing.*

The final Endpoint should look something like this:

TBA

This function will return a URL. You can access this URL by referencing the response.webUrl of this element.

&lt;%= this\_element.properties.response.webUrl %&gt;