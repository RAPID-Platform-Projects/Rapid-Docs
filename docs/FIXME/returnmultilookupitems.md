# returnMultiLookupItems

The returnMultiLookupItems endpoint, when provided with an item profile will return the full item profiles of any items that it has a multiple lookup to.

For example, on the item Incident is the multiple lookup employees and factors. The endpoint if provided with the incident item profile will return an array of employee item profiles and factor item profiles that it looks up to.

```JSON
{<br></br>"employees": [{fullItemProfile1}, {fullItemProfile2}],<br></br>"factors": [{fullItemProfile1}, {fullItemProfile2}]<br></br>}
```

This endpoint can be used in two different ways in Rapid platform; Set up on a menu button, or setup in a service task in workflow.

### Configuring on a menu button

When configuring on a menu button simply use the following:  
**Address**: [Endpoint address](https://app.rapidplatform.com/rapidplatform/projects/explorer/Endpoints/Endpoint:Endpoints:58) with the following url parameters appended to the end "&amp;env={env}&amp;site={site}&amp;tenant={tenant}"

### ![image-1694475339411.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-09/scaled-1680-/Y8aLlYlBAtxumkRa-image-1694475339411.png)Configuring on a service task

When configuring on a service task in workflow simply use the following configuration:

[![image-1694475489865.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-09/scaled-1680-/PmmPTOY2oUA08FN7-image-1694475489865.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-09/PmmPTOY2oUA08FN7-image-1694475489865.png)

**Trigger Endpoint:** [Endpoint address](https://app.rapidplatform.com/rapidplatform/projects/explorer/Endpoints/Endpoint:Endpoints:58) with the following url parameters appended to the end "&amp;env={env}&amp;site={site}&amp;tenant={tenant}"

**Custom Body:** a LODASH expression that resolved to a single item profile.