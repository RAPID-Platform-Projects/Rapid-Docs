# Open API Integrations

The [Open API](https://swagger.io/docs/specification/about/) specification (formerly Swagger specification) is a consistent way to communicate how different systems online can interact. The Rapid Platform is a highly dynamic system so each site is able to generate a custom Open API definition for itself.

A common application for these Open API definitions is the creation of [custom data connectors](https://docs.microsoft.com/en-us/connectors/custom-connectors/define-blank) in [Microsoft Power Automate](http://flow.microsoft.com/) and [Microsoft PowerApps](https://powerapps.microsoft.com/en-us/)

## Downloading the Open API definition

1. Navigate to Designer
2. Navigate to Maintenance and open the Open API page

![Open API location](<Open API location.png>)

Press the **Flow Connector.json** button to download the Open API definition for Microsoft Flow

Press the **PowerApps Connect.json** button to download the Open API definition for Microsoft PowerApps

## Flow Connector structure

When generated from a site the Flow connector Open API definition file comes pre-configured for that site. Due to the nature of the Rapid Platform constantly evolving with a business, this definition is written to dynamically fetch the majority of site specific details at time of execution.

### Site Connection Details

The definition contains

- `basePath` : This is the slug to the specific Rapid Platform site that the connector was generated from. It takes the form of `/api/{tenant name}/{site name}`
- `host` : This is the fully qualified domain name for the site environment. This comes pre-filled directed at local host for local development.
- `securityDefinitions.oauth2_auth` : This array contains the default OAuth 2.0 connection details to fetch a user token to authenticate to the Rapid Platform
- `security[0].oauth2_auth[0]` : This contains the Application ID and permissions scope needed to authenticate to the Rapid Platform. By default it comes in the form `{application oid}/.default`

### Rapid Endpoints

Under the paths property are the different endpoints that can be called.

`/hooks` This is used to register a webhook within Rapid. The trigger events are based on Create, Update and Delete events on Rapid Platform lists.

`/openapi/lists` This is used to fetch the list of list names on the target Rapid site. It will return all the entities registered on the site. These list names are used in the following paths denoted with a `{listName}`

`/openapi/{listName}/schema` This is used to fetch the structure of the given entity. It returns a JSON representation of the entity, most notably including its field definitions.

`/openapi/{listname}/schema/single` This is almost identical to the previous endpoint except the shape of the response is not in an array. This is used to support Microsoft Power Automate tooltips and cards that expect an item response.

`/lists/{listName-dynamic}/All/items` This endpoint can be used in both GET and POST mode. When fetching from this endpoint it is used to fetch the first page of items from the given list. Items are returned in JSON format with a OData next link reference at the bottom to fetch the following page. A page is 250 items.

When posting to this endpoint it is used to create an item of the given list. The POST body is required to be a JSON item with the parameters matching the field names of the item. You can include only the fields desired to be updated, not all fields are required.

This endpoint accepts OData query parameters.

The All reference for this endpoint refers to the All view.

`/lists/{listName-dynamic}/items/{itemId}` This endpoint can be used in both GET and POST mode. When fetching from this endpoint you can get a single item of the given id from the given list. This returns a JSON representation of the item including its data.

When posting to this endpoint you can update a given item of the given list. The POST body is required to be a JSON item with the parameters matching the field names of the item. You can include only the fields desired to be updated, not all fields are required.