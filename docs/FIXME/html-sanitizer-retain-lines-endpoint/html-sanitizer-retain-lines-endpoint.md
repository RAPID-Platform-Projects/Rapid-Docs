# HTML Sanitizer retain lines endpoint

This endpoint is used to remove HTML from a string and retain any "/n" characters. Simply copy the string, object or array into the custom body and the endpoint will remove all HTML and return the item in the same shape.

NOTE: this endpoint will not retain line breaks for multiline of texts entered through explorer as they leave &lt;p&gt; tags instead of /n tags. However, multiline of texts constructed in adaptive will retain line breaks.

To use this function follow these steps:

1\. Copy the endpoint (found under [Projects &lt; Products &lt; Rapid Projects API &lt; Endpoints](https://app.rapidplatform.com/rapidplatform/projects/explorer/Products/Product:Products:27/Endpoint:Endpoints:56))

2\. Configure a "Trigger a Webhook" Service Task and paste the endpoint into the "Trigger Endpoint" field.

3\. Copy the lodash for the required object, array, or string into the body. Note that if you are copying Objects or Arrays you will need to JSON.Stringify( ) them. See the example the below example configured service task.

![image-1692249858298.png](./downloaded_image_1705285779416.png)

4\. Hit endpoint