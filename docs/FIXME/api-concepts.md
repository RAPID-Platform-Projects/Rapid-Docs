# API Concepts

## Overview

The Rapid Platform is a dynamic server environment where Users, including business personnel, are able to create &amp; modify custom tables containing columns of their choosing on the fly. This allows for a business to update their IT infrastructure with the click of a few buttons allowing Rapid to track the data they care about as their business evolves.

As a consequence, interacting with the Rapid Platform from an external entity comes with its own challenges as data structures can not (generally) be assumed to exist and can be reasonably expected to change over the course of minutes. To support tackling these challenges this document covers the overall concepts binding the platform together while documenting how to interact with the existing API structure.

## What is a Site

Businesses can have one or more Sites to operate from. Each of these is treated as a separate instance of Rapid allowing us to isolate people from each other.

Sites are predicated on needing Office365 infrastructure and are scoped to a particular Microsoft Azure Tenant. This allows for a business to own multiple sites for various business purposes.

The Rapid Platform is architecturally structured as follows

There are multiple database mapping 1:1 with user Sites.

A site URL is composed of three elements

- Server Domain (App or Dev)
- Tenant
- Site Name

For example:

If my tenant is ‘contoso’ and my site name is ‘rapid’ and I want to access the production server ‘app.rapidplatform.com.au’ then my full URL would be [https://app.rapidplatform.com/contoso/rapid](https://app.rapidplatform.com/contoso/rapid)

When communicating to the API, interact via the /api/ route and pre-pend the host with api, thus the above example would become [https://api.rapidplatform.com/api/contoso/rapid](https://api.rapidplatform.com/api/contoso/rapid)

## What are Tables

Tables and Entities will be used synonymously.

A table is easiest thought of as a database table with some extra meta-data. It comprises of a set of data to capture (columns) and many instances of that data (rows). Business users can create new tables at run-time as well as modify their data structure by adding/modifying/removing columns.

For clarity each field that stores useful data for the table will be called a column.

Tables also come with page definitions. These are descriptions the user has constructed of what fields are visible on a page in the Rapid Platform and how they are laid out on that page.

Due to tables being dynamic, custom and evolving objects their definition can be fetched as a schema.

Structurally the Rapid Platform site database is composed of many tables representing tables and a few special system tables. Currently only tables are available through the API.

### How find what tables are available on a site

```Java
/openapi/lists
```

This call will return a JSON object of the lists currently registered to a site

### How to get a tables schema

```Java
/openapi/{listName}/schema
```

This will return a JSON object of the queried tables’ schema.

Every table has the same basic system fields created for it to assist the Platform. These are

<table id="bkmrk-field-name-type-purp" style="height: 493px; width: 74.8148%;"><thead><tr style="height: 29px;"><th style="height: 29px; width: 18.8485%;">Field Name</th><th style="height: 29px; width: 12.5596%;">Type</th><th style="height: 29px; width: 64.3908%;">Purpose</th></tr></thead><tbody><tr style="height: 29px;"><td style="height: 29px; width: 18.8485%;">id</td><td style="height: 29px; width: 12.5596%;">INT</td><td style="height: 29px; width: 64.3908%;">Unique ID of the item</td></tr><tr style="height: 29px;"><td style="height: 29px; width: 18.8485%;">sys\_type\_id</td><td style="height: 29px; width: 12.5596%;">INT</td><td style="height: 29px; width: 64.3908%;">Entity Type ID for quick determination of tables</td></tr><tr style="height: 29px;"><td style="height: 29px; width: 18.8485%;">deleted</td><td style="height: 29px; width: 12.5596%;">DateTime</td><td style="height: 29px; width: 64.3908%;">Date the item was deleted, Null if not deleted</td></tr><tr style="height: 29px;"><td style="height: 29px; width: 18.8485%;">author\_id</td><td style="height: 29px; width: 12.5596%;">INT</td><td style="height: 29px; width: 64.3908%;">Principal ID of the user that created the item</td></tr><tr style="height: 29px;"><td style="height: 29px; width: 18.8485%;">created</td><td style="height: 29px; width: 12.5596%;">DateTime</td><td style="height: 29px; width: 64.3908%;">Date created</td></tr><tr style="height: 29px;"><td style="height: 29px; width: 18.8485%;">editor\_id</td><td style="height: 29px; width: 12.5596%;">INT</td><td style="height: 29px; width: 64.3908%;">Principal ID of the last user to modify the item</td></tr><tr style="height: 29px;"><td style="height: 29px; width: 18.8485%;">modified</td><td style="height: 29px; width: 12.5596%;">DateTime</td><td style="height: 29px; width: 64.3908%;">Date last modified</td></tr><tr style="height: 29px;"><td style="height: 29px; width: 18.8485%;">parent\_id</td><td style="height: 29px; width: 12.5596%;">INT</td><td style="height: 29px; width: 64.3908%;">ID of the item of the same table type that this item is a child of</td></tr><tr style="height: 29px;"><td style="height: 29px; width: 18.8485%;">drive\_id</td><td style="height: 29px; width: 12.5596%;">String</td><td style="height: 29px; width: 64.3908%;">Drive\_ID of the SharePoint/OneDrive location for the item</td></tr><tr style="height: 29px;"><td style="height: 29px; width: 18.8485%;">folder\_id</td><td style="height: 29px; width: 12.5596%;">String</td><td style="height: 29px; width: 64.3908%;">Folder\_ID of SharePoint folder location for the item</td></tr><tr style="height: 29px;"><td style="height: 29px; width: 18.8485%;">rank</td><td style="height: 29px; width: 12.5596%;">???</td><td style="height: 29px; width: 64.3908%;">Unused</td></tr><tr style="height: 29px;"><td style="height: 29px; width: 18.8485%;">embedded\_files</td><td style="height: 29px; width: 12.5596%;">String</td><td style="height: 29px; width: 64.3908%;">Json representation of embedded files component</td></tr><tr style="height: 29px;"><td style="height: 29px; width: 18.8485%;">sys\_external\_id</td><td style="height: 29px; width: 12.5596%;">INT</td><td style="height: 29px; width: 64.3908%;">Unused</td></tr><tr style="height: 29px;"><td style="height: 29px; width: 18.8485%;">sys\_valid\_from</td><td style="height: 29px; width: 12.5596%;">DateTime</td><td style="height: 29px; width: 64.3908%;">Unused</td></tr><tr style="height: 29px;"><td style="height: 29px; width: 18.8485%;">sys\_valid\_to</td><td style="height: 29px; width: 12.5596%;">DateTime</td><td style="height: 29px; width: 64.3908%;">Unused</td></tr></tbody></table>

### What is an Item

Ultimately the Rapid Platform is about helping people track data so they can get their job done. An individual instance of a table we call an Item. For example on the Table of Tasks a single ‘task’ is an item.

Interacting with Items is the core of interacting with the data stored in Rapid. Items follow full CRUD controls.

### How to get an item

```JSON
GET /lists/{listName-dynamic}/items/{itemId}
```

Returns a single item of a given ID from a given table as JSON including the items universal links

### How to get a bunch of items

```JSON
GET /lists/{listName-dynamic}/All/items
```

Returns the first page of items from the given table, sorted by ID descending as a JSON array. This is intended to get the most recent things as they are the most common.

Accepts OData filters to help filter down to the list of items you want in large tables

### How to get a bunch of linked items

```JSON
GET /lists/{listName-dynamic}/{view}/items?linkedTo={listName-dynamic}/{id}
```

Returns the first page of items from the given table that are linked to the specific table and item provided in the linkedTo query. The linkedTo query will return any items that are universally linked, target and origin of a multi lookup or have single lookups pointing at the item.

Accepts OData filters to help filter down to the list of items you want in large tables

### How to get a bunch of universally linked items

```JSON
GET /lists/{listName-dynamic}/{view}/items?universallyLinkedTo={listName-dynamic}/{id}
```

Returns the first page of items from the given table that are linked to the specific table and item provided in the universallyLinkedTo query. This query returns any items that are universally linked.

Accepts OData filters to help filter down to the list of items you want in large tables

### OData Filter Support

For supported endpoints you can use OData syntax filters to limit the results.


```C#
GET {route}?$filter={filter_string}
```

Currently supported OData syntax

<table border="1" id="bkmrk-syntax-purpose-examp" style="border-collapse: collapse; width: 121.358%; height: 379px;"><tbody><tr><td style="width: 14.4623%;">**Syntax**</td><td style="width: 41.6564%;">**Purpose**</td><td style="width: 43.8813%;">**Example**</td></tr><tr><td style="width: 14.4623%;">eq</td><td style="width: 41.6564%;">Equals : exact comparison between two values</td><td style="width: 43.8813%;">title eq 'My Title'</td></tr><tr><td style="width: 14.4623%;">lt</td><td style="width: 41.6564%;">Less Than</td><td style="width: 43.8813%;">due\_date lt '2020-12-31T00:00.00z'</td></tr><tr><td style="width: 14.4623%;">lte</td><td style="width: 41.6564%;">Less Than or Equal To</td><td style="width: 43.8813%;">priority lte 3</td></tr><tr><td style="width: 14.4623%;">gt</td><td style="width: 41.6564%;">Greater Than</td><td style="width: 43.8813%;">cost gt 5000</td></tr><tr><td style="width: 14.4623%;">gte</td><td style="width: 41.6564%;">Greater Than or Equal To</td><td style="width: 43.8813%;">volunteers gte 20</td></tr><tr><td style="width: 14.4623%;">and</td><td style="width: 41.6564%;">Logical AND joining multiple comparisons</td><td style="width: 43.8813%;">title eq 'My Title' and cost gt 5000</td></tr><tr><td style="width: 14.4623%;">or</td><td style="width: 41.6564%;">Logical OR joining multiple comparisons</td><td style="width: 43.8813%;">priority lte 3 or cost gt 5000</td></tr><tr><td style="width: 14.4623%;">( )</td><td style="width: 41.6564%;">Brackets : Managing order of operations</td><td style="width: 43.8813%;">(priority lte 3 or cost gt 5000) and title eq 'My Title'</td></tr><tr><td style="width: 14.4623%;">in()</td><td style="width: 41.6564%;">At least one given value is a match</td><td style="width: 43.8813%;">in('parent\_id', 1, 2, 3)</td></tr><tr><td style="width: 14.4623%;">inUniversal()</td><td style="width: 41.6564%;">At least one universal link is a match</td><td style="width: 43.8813%;">inUniversal('Projects', 1, 2, 3)</td></tr><tr><td style="width: 14.4623%;">inScoped()</td><td style="width: 41.6564%;">At least one given scoped link is a match</td><td style="width: 43.8813%;">inScoped('Tasks', 'contributors', 8, 11, 31)</td></tr></tbody></table>

#### OData Function Reference

##### in

The in() function tests if at a given column contains at least one of the given values

**Arguments**

<table border="1" id="bkmrk-name-type-descriptio" style="border-collapse: collapse; width: 100%;"><tbody><tr><td style="width: 18.5414%;">Name</td><td style="width: 9.68899%;">Type</td><td style="width: 71.7696%;">Description</td></tr><tr><td style="width: 18.5414%;">column\_name</td><td style="width: 9.68899%;">String</td><td style="width: 71.7696%;">The column name we are testing if values are against</td></tr><tr><td style="width: 18.5414%;">values</td><td style="width: 9.68899%;">Array</td><td style="width: 71.7696%;">A comma separated list of values we are testing for</td></tr></tbody></table>

**Examples**

When fetching a list of tasks from the all view you can find any where the ID is 1, 2 or 3


```C#
GET /lists/Tasks/All/items?$filter=in('id', 1,2,3)
```

Alternatively, when fetching a list of tasks from the all view you can find any where the title is 'A', 'B', or 'D'


```C#
GET /lists/Tasks/All/items?$filter=in('title', 'A','B','D')
```

**Returns :** Bool

##### inUniversal

The inUniversal() function tests if at a given list of items are linked universally

**Arguments**

<table border="1" id="bkmrk-name-type-descriptio-0" style="border-collapse: collapse; width: 100%;"><tbody><tr><td style="width: 18.5414%;">Name</td><td style="width: 9.68899%;">Type</td><td style="width: 71.7696%;">Description</td></tr><tr><td style="width: 18.5414%;">list\_name</td><td style="width: 9.68899%;">String</td><td style="width: 71.7696%;">The target list the items universally linked belong to</td></tr><tr><td style="width: 18.5414%;">values</td><td style="width: 9.68899%;">Array</td><td style="width: 71.7696%;">A comma separated list of values we are testing for</td></tr></tbody></table>

**Examples**

When fetching a list of tasks from the all view you can find any where they are universally linked to Invoices 1, 2 or 3


```C#
GET /lists/Tasks/All/items?$filter=inUniversal('Invoices', 1,2,3)
```

**Returns :** Bool

##### inScoped

The inScoped() function tests if a given list of items are linked via a scoped link and returns true for each of them

**Arguments**

<table border="1" id="bkmrk-name-type-descriptio-1" style="border-collapse: collapse; width: 100%;"><tbody><tr><td style="width: 18.5414%;">Name</td><td style="width: 9.68899%;">Type</td><td style="width: 71.7696%;">Description</td></tr><tr><td style="width: 18.5414%;">table\_name</td><td style="width: 9.68899%;">String</td><td style="width: 71.7696%;">The target table the items we are searching for belong to</td></tr><tr><td style="width: 18.5414%;">column\_name</td><td style="width: 9.68899%;">String</td><td style="width: 71.7696%;">The multi-lookup column name we are testing if the given items are linked via</td></tr><tr><td style="width: 18.5414%;">values</td><td style="width: 9.68899%;">Array</td><td style="width: 71.7696%;">A comma separated list of ids we are testing for</td></tr></tbody></table>

**Examples**

When fetching a list of tasks from the all view you can find any where they are linked via the contributors multi-lookup to principals 8, 11 or 13


```C#
GET /lists/Tasks/All/items?$filter=inScoped('Principals', 'contributors', 8, 11, 13)
```

**Returns :** Bool

### How to create an item

```JSON
POST /lists/{listName-dynamic}/all$/items
```

Posting to the items table with a JSON body containing the item values will generate a new item and return reply with the generated item in JSON. This is mainly useful for tracking the ID and other system generated values when creating items This uses the built in all$ datasource which contains every field. Other datasources can be reused instead, though they will be available in the UI and changeable by Users. Fields not listed in a datasource are not returned.

Example post body to create a task

```JSON
{ 
  "LinkedItemsToAdd": [], 
  "ScopedLinkedItemsToAdd": [], 
  "title": "asdf", 
  "start_date": null, 
  "due_date": null, 
  "description": null, 
  "assigned_to_id": null, 
  "status": null 
}

```

Optionally you can submit several items in an array. By default this will not fire events, which can be overridden with the query paramater bulkEvents=true

#### Creating an item with a file folder

Providing the query parameter createFolder will try to generate a SharePoint folder for that item during creation. For example

```JSON
POST /lists/{listName-dynamic}/all$/items?createFolder=true
```

#### Creating an item without triggering a webhook

Sometimes you need to create an item and not trigger associated hooks. An optional query parameter disables these from activating on item creation

```JSON
POST /lists/{listName-dynamic}/all$/items?webhooks=false
```

#### Creating several items and triggering a webhook for each

When creating an array of items by default webhooks are disabled. To override this you can turn on bulkEvents=true. This will cause a webhook event to fire for each created item, not the set as a whole.

```JSON
POST /lists/{listName-dynamic}/all$/items?webhooks=true&bulkEvents=true
```

### How to update an item

```JSON
PUT /lists/{listName-dynamic}/items/{itemId}
```

Like creating an item, Posting to a specific item with a given ID will update the target item with the posted body JSON content. Returns the updated item in JSON.

Example update post body to edit the created task

```JSON
{ 
  "title": "Good title", 
  "start_date": "2019-10-08T14:00:00.000Z", 
  "due_date": "2019-10-09T14:00:00.000Z", 
  "description": "<p>Some Desc</p>", 
  "assigned_to_id": 14, 
  "status": "Not started" 
}
```

#### Updating an item without triggering a webhook

Sometimes you need to update an item and not trigger associated hooks. An optional query parameter disables these from activating on item creation

```JSON
PUT /lists/{listName-dynamic}/all$/items?webhooks=false
```


### What are parents

When wanting to relate two items together where one ‘contains’ the other and they are items on the same table, you can set the parent\_id value for the child item to point to the parent’s ID. This allows the construction within a table of tree like data structures and is also reflected in the Rapid UI.

## What are Universal Links

To construct more elaborate hierarchies of data beyond within a single table, Universal links allow the relationship between two Items to be generated on the fly. Unlike direct lookups these relationships are not between pre-determined entities. Unlike Parents this can span outside of one table.

Universal links can come with inherent context through the use of Multi-Lookup fields. These are required to be designed and do dictate a relationship between two specific tables while retaining the many:1 ratio. Universal links between two items that stem from a multi-lookup field have the column name of that field baked into them.

### How to link two items

When creating or updating an item, populating the LinkedItemsToAdd array with strings will request Minilith to generate the universal link.

These strings are in the format

```JSON
‘{list name}/{id}’
```

Where the item id of the updated/created item are implicit and the stated table name and ID are of the target item to be linked.

How to unlink two items

Conversely populating the LinkedItemsToRemove array will request the deletion of linked items between a created/updated item and the stated target. This is also an array of strings in the format

```JSON
‘{list name}/{id}’
```

## What is an Inherited table

Tables can be constructed so that a set of tables inherit from a single base table. For clarity I will refer to the source of the inheritance as the Base Entity/Table and to its children as the Inherited Entities/Tables.

Inherited tables inherit their base table fields and extend it with additional fields. Inherited tables have a copy of themselves on the base table within the database. This has the consequence of forcing ID’s to be unique throughout the entire structure of base and inherited tables items.

Items returned will only contain the base table columns even when they are inherited items that are fetched from a base table context.

A secondary effect is when requesting for items on the base table, inherited items will also be returned. Each item has a type property within the \_\_metadata object which can be used to filter and out inherited or base types as desired.

## What are Webhooks

Webhooks can be registered with Rapid that send a payload based on triggered events within Rapid. The current supported hooks are

- When an item is created on a table
- When an item is updated on a table

Webhooks are registered at

```JSON
POST /hooks
```

An example webhook registration JSON body

```JSON
"config": { 
  "url": "{listCallbackUrl}", 
  "list": "Tasks", 
  "type": "ItemUpdated" 
}
```

Where the list property expects the table name

And Type is a string in the form of :

- 'ItemCreated'
- 'ItemUpdated'
- EntityCreated
- ItemDeleted

The response headers will include the location of the created webhook in a `location` header For example

`Location : http://dev.rapidplatform.com/rapidplatform/114r1/hooks/433`

To DELETE a webhook submit a delete request to the same location including the table type in the body.

For example:

```Nginx
DELETE http://dev.rapidplatform.com/rapidplatform/114r1/hooks/433<br></br><br></br>BODY<br></br>{<br></br>    "config":{<br></br>        "list": "Tasks",<br></br>    }<br></br>}
```

## Inherit Links

You can fetch the array of expected universal links to add due to inherit link configuration by hitting the inherit-link endpoint

```Nginx
/lists/:list/items/:id/inherited-links?type=:list-name
```

Where

:list - The entity context the new item is being created against :id - The item context being created against :list-name - The type of entity being created (plural form)

So for this entity configuration [![Inherit Link Example.png](https://docs.rapidplatform.com/uploads/images/gallery/2021-09/scaled-1680-/H4z06qHCN9gWcgq8-inherit-link-example.png)](https://docs.rapidplatform.com/uploads/images/gallery/2021-09/H4z06qHCN9gWcgq8-inherit-link-example.png)

To fetch the links needed to be added to a Note being created against Task 2, while Notes have Inherit Links configured for Projects you would call

### Title Update

Due to table inheritance causing entity fields to be split across multiple tables you can post to the title-field endpoint to set an entities' title field.

```Nginx
/lists/:list/title-field
```

This is only a PUT action that requires the title field in the body like

```JavaScript
{
   "title":"{title column name}"
}
```

### Navigating to a Particular Page in Designer or Explorer

It is sometimes necessary to navigate to a particular page in either Explorer (having a direct link to a page on nav bar for example) or in Designer, which is necessary if you need to edit the page.

As of v1.0.07 pages are not in the URI for a rapid location by default. To get to a page either in Designer or Explorer use the following syntax for the URI construction

For Designer:

```JavaScript
?tab=Designer&page={pageName}#
```

### Search Endpoint

You can search for items on a specific view from a string input and it will regard any columns on the table marked searchable.

```Nginx
GET /lists/{listName}/{view}/items?term={searchTerm}
```

### Dynamically Populating a Lookup

When creating items that contain a lookup field to another table, it is frequently the case where you need to check if the item you want to reference exists on the target table and find it's ID OR if it doesn't exist to create it. This comes up sufficiently that we have implemented an alternate sugar value to smooth this process out.

When populating a lookup in a create/update request on an item you can instead pass an object in the following form

```JSON
{<br></br>	"$filter": "",<br></br>	"__metadata": {<br></br>		"type": ""<br></br>	}<br></br>}
```

This will execute the filter to attempt to find an item. If at least one is found it will take the first and replace the object with the found items ID. If no items are returned from the filter expression it will take the supplied keys and generate a new item, then replace the object with the newly created items ID.

### Get Site File

Returns a JSON object representation of the site file - note pages are not included in the response

```Nginx
GET https://app.rapidplatform.com/api/{tenant}/{site}
```

### Get Table Items

Returns an array of objects, where each object represents the item, keys in each object contain the fields on the view being accessed

Supports an OData query parameters

```Nginx
GET /{list}/{view}/items
```

### Get a Table Item

Fetches a specified item from a table.

```Nginx
GET /lists/{listNamePlural}items/{itemID}
```

### Delete a Column

Removes the specified column from the specified table.

```Nginx
DELETE /lists/{listNamePlural}/fields/{columnName}
```

### Fetch Bundles

Returns an array which includes the system bundles stored in the bundle library

```Nginx
GET /bundles
```

### Fetch Bundle Schema

Returns the schema for a particular bundle, including description, author, title and update date

```Nginx
GET /bundes/{bundleName}/schema
```

### Edit Feature Versions

Updates the intended feature version used by the site (*Deprecated*)

```Nginx
PUT /experienceversions
```


Expected body

```JavaScript
{<br></br>	"featureName": "version"<br></br>}
```


Where featureName represents Designer, Explorer, Workflow and Version is the intended SemVer code to be used.

### Edit Column

Updates a column configured on a specified table.

```Nginx
PUT /lists/{listNamePlural}/fields/{fieldName}
```


Expected Body

```JavaScript
{<br></br>	"Title": "Bool",<br></br>	"ColumnName": "bool",<br></br>	"SystemManaged": false,<br></br>	"FieldType": "Boolean",<br></br>	"Searchable": true,<br></br>	"Settings": {<br></br>		"Choices": [],<br></br>		"LookupBindings": []<br></br>	},<br></br>	"TitleField": false<br></br>}
```


Create Form

Creates a new Form. These are for the Forms experience and not Adaptive Forms.

```Nginx
POST /forms/{formTitle}
```


Where formTitle is the permalink for the created form and must be unique

Example Body:

```JavaScript
{<br></br>	"description": "<Describe the new form in this area>",<br></br>	"list": "All Fields",<br></br>	"slug": "new-forms",<br></br>	"title": "New Forms",<br></br>	"showAttachments": false,<br></br>	"slugErrors": false,<br></br>	"fields": [<br></br>		{<br></br>			"columnName": "bool"<br></br>		}<br></br>	]<br></br>}
```


Create Table

Creates a new table on the site. Columns must be created after.

```Nginx
POST /lists
```


Body can contain a key called 'Extends' which can contain a string of the parent table if a inherited table needs to be created

Example Body:

```JavaScript
{<br></br>	"ListName": "tests",<br></br>	"ListNameSingular": "test",<br></br>	"NewItemPage": "test Details",<br></br>	"Fields": [],<br></br>	"Table": "Test",<br></br>	"Searchable": true,<br></br>	"Settings": {},<br></br>	"TitleField": null,<br></br>	"DefaultPermissions": [<br></br>		{<br></br>			"principal_id": 2,<br></br>			"mode_flags": 7<br></br>		}<br></br>	],<br></br>	"PlaceholderPermissions": {<br></br>		"Author": 7<br></br>	},<br></br>	"InheritLinks": []<br></br>}
```


Delete Table

Delete the given table from the site permanently. Will throw an error if trying to delete a table that has inherited table.

```Nginx
DELETE /lists/listNamePlural
```

### Create page

Cerates a new blank page to be used within a site. Pages are independent of tables by default. To ensure a page has a table context preface the page name with the table name. For example a new Tasks page could be called "Tasks Details Two".

```Nginx
POST /pages/Explorer/{pageName}
```


Example Body:

```JavaScript
{<br></br>	"layouts": {},<br></br>	"body": null,<br></br>	"jumbotronEnabled": true<br></br>}
```


Get Page

Returns the page layout structure for the given page

```Nginx
GET /pages/Explorer/{pageName}
```

### Edit Form

Updates a form configuration

```Nginx
PUT /forms/{formTitle}
```


FormTitle is the forms' permalink and must exist.

Example Body:

```JavaScript
{<br></br>	"layouts": {},<br></br>	"body": {<br></br>		"id": "tests_TabStrip1",<br></br>		"type": "TabStrip",<br></br>		"attributes": {<br></br>			"config": {<br></br>				"jumbotron": true,<br></br>				"title": "View tests",<br></br>				"tabs": [<br></br>					{<br></br>						"title": "Details",<br></br>						"page": "test Details",<br></br>						"hidden": false,<br></br>						"attributes": {<br></br>							"itemId": "{itemId}",<br></br>							"itemType": "tests",<br></br>							"linkItemType": "tests",<br></br>							"linkItemId": "{itemId}"<br></br>						}<br></br>					},<br></br>					{<br></br>						"title": "Activity",<br></br>						"page": "test Activity",<br></br>						"hidden": false,<br></br>						"attributes": {<br></br>							"itemId": "{itemId}",<br></br>							"itemType": "tests",<br></br>							"linkItemType": "tests",<br></br>							"linkItemId": "{itemId}"<br></br>						}<br></br>					},<br></br>					{<br></br>						"title": "Files",<br></br>						"page": "tests Files",<br></br>						"hidden": false,<br></br>						"attributes": {<br></br>							"itemId": "{itemId}",<br></br>							"linkItemType": "tests",<br></br>							"linkItemId": "{itemId}",<br></br>							"itemType": "tests"<br></br>						}<br></br>					},<br></br>					{<br></br>						"title": "Tasks",<br></br>						"page": "Tasks",<br></br>						"hidden": false,<br></br>						"attributes": {<br></br>							"linkItemType": "tests",<br></br>							"linkItemId": "{itemId}",<br></br>							"itemType": "Tasks"<br></br>						}<br></br>					},<br></br>					{<br></br>						"title": "TEST",<br></br>						"page": "GREATE TEST",<br></br>						"hidden": false,<br></br>						"attributes": {<br></br>							"linkItemType": "tests",<br></br>							"linkItemId": "{itemId}",<br></br>							"itemType": "Entities"<br></br>						}<br></br>					}<br></br>				]<br></br>			}<br></br>		}<br></br>	},<br></br>	"id": "test",<br></br>	"jumbotronEnabled": true,<br></br>	"attributes": {<br></br>		"pageId": 0,<br></br>		"itemType": 1,<br></br>		"itemId": 2<br></br>	}<br></br>}
```


Delete Form

Deletes the specified form

```Nginx
DELETE /forms/{formTitle}
```


FormTitle is the forms' permalink and must exist.

Edit Form Quotes 

Updates the list of form quotes shared across all forms in the site

```Nginx
PUT /forms
```


Example Body :

```JavaScript
{<br></br>	"items": [<br></br>		{<br></br>			"description": "<Describe the new form in this area>",<br></br>			"list": "All Fields",<br></br>			"slug": "new-forms",<br></br>			"title": "New Formsaa",<br></br>			"showAttachments": false,<br></br>			"slugErrors": false,<br></br>			"fields": [<br></br>				{<br></br>					"columnName": "bool"<br></br>				}<br></br>			]<br></br>		}<br></br>	],<br></br>	"quotes": [<br></br>		{<br></br>			"title": "FIRST",<br></br>			"phrase": "sec",<br></br>			"isNew": false<br></br>		},<br></br>		{<br></br>			"title": "SECOND",<br></br>			"phrase": "qwe",<br></br>			"isNew": false<br></br>		}<br></br>	]<br></br>}
```


Warning: Hitting this endpoint requires allform data for every form on site, it is not recommended to hit this endpoint externally as it can cause corruption to form data if not used correctly

Update Menu item

Edits a specified menu in the site

```Nginx
PUT /menus/{menuItemName}
```


menuItemName is the name of menu for example, 'Explorer Sidebar'

Example Body :

```JavaScript
{<br></br>	"id": "Launchpad",<br></br>	"Items": [<br></br>		{<br></br>			"Text": "RAPID Platform",<br></br>			"Arguments": {},<br></br>			"Items": [<br></br>				{<br></br>					"Text": "Explorer",<br></br>					"Icon": "Search",<br></br>					"Arguments": {<br></br>						"href": "Explorer"<br></br>					},<br></br>					"Items": [],<br></br>					"Action": "Open App",<br></br>					"Permissions": {<br></br>						"enabled": false,<br></br>						"principalIds": []<br></br>					}<br></br>				},<br></br>				{<br></br>					"Text": "Forms",<br></br>					"Icon": "TextField",<br></br>					"Arguments": {<br></br>						"href": "form"<br></br>					},<br></br>					"Items": [],<br></br>					"Action": "Open App",<br></br>					"Permissions": {<br></br>						"enabled": false,<br></br>						"principalIds": []<br></br>					}<br></br>				},<br></br>				{<br></br>					"Text": "Workflow",<br></br>					"Icon": "ServerProcesses",<br></br>					"Arguments": {<br></br>						"href": "compoza"<br></br>					},<br></br>					"Items": [],<br></br>					"Action": "Open App",<br></br>					"Permissions": {<br></br>						"enabled": false,<br></br>						"principalIds": []<br></br>					}<br></br>				},<br></br>				{<br></br>					"Text": "Designer",<br></br>					"Icon": "EditMirrored",<br></br>					"Arguments": {<br></br>						"href": "Dezigna"<br></br>					},<br></br>					"Items": [],<br></br>					"Action": "Open App",<br></br>					"Permissions": {<br></br>						"enabled": false,<br></br>						"principalIds": [<br></br>							1,<br></br>							2,<br></br>							3,<br></br>							4,<br></br>							5,<br></br>							6,<br></br>							7,<br></br>							8,<br></br>							9,<br></br>							10,<br></br>							11,<br></br>							12,<br></br>							13,<br></br>							14,<br></br>							15,<br></br>							16,<br></br>							17,<br></br>							18,<br></br>							19,<br></br>							20,<br></br>							21<br></br>						]<br></br>					}<br></br>				}<br></br>			],<br></br>			"Permissions": {<br></br>				"enabled": false,<br></br>				"principalIds": []<br></br>			}<br></br>		}<br></br>	]<br></br>}
```


Note that updating permissions requires the whole menu item object to be updated

### Update Table

Updates a specified table on the site

```JavaScript
PUT /lists/{listNamePlural}
```


Example Body :

```JavaScript
{<br></br>	"ListName": "tests",<br></br>	"ListNameSingular": "test",<br></br>	"NewItemPage": "test Details",<br></br>	"Fields": [],<br></br>	"Table": "test",<br></br>	"Searchable": true,<br></br>	"Settings": {},<br></br>	"TitleField": null,<br></br>	"DefaultPermissions": [<br></br>		{<br></br>			"principal_id": 2,<br></br>			"mode_flags": 7<br></br>		}<br></br>	],<br></br>	"PlaceholderPermissions": {<br></br>		"author_id": 7<br></br>	},<br></br>	"InheritLinks": []<br></br>}
```


Lock View

Locks a view from being edited in Explorer. No body required.

```Nginx
POST /lists/{listnamePlural}/{viewName}/lock
```

### Unlock View

Unlocks a view so it can now be edited in Explorer. No body required.

```Nginx
POST /lists/{listnamePlural}/{viewName}/unlock
```

### Create View

Creates a new view on the specified table

```Nginx
POST /lists/{listnamePlural}
```


Example Body:

```JavaScript
{<br></br>	"Title": "TEST VIEW",<br></br>	"Columns": [],<br></br>	"FilterExpression": null,<br></br>	"SortBy": "id",<br></br>	"SortDirection": "desc",<br></br>	"Deletable": false,<br></br>	"IsVisible": true,<br></br>	"ExtraFilterExpression": null<br></br>}
```


Update View

Alters a given datasource.

```Nginx
PUT /lists/{listnamePlural}/{viewName}
```

Example Body:

```JavaScript
{<br></br>	"Title": "TEST VIEW",<br></br>	"Columns": [],<br></br>	"FilterExpression": null,<br></br>	"SortBy": "id",<br></br>	"SortDirection": "desc",<br></br>	"Deletable": false,<br></br>	"IsVisible": true,<br></br>	"ExtraFilterExpression": null<br></br>}
```


Delete View

Removes a specified view from the site

```Nginx
DELETE /lists/{listnamePlural}/{viewName}
```

### Create Column

Creates a new column on the specified table.

```Nginx
POST /lists/{listNamePlural}/fields
```


Example Body

```JavaScript
{<br></br>	"Title": "test",<br></br>	"ColumnName": "test",<br></br>	"SystemManaged": false,<br></br>	"FieldType": "Text",<br></br>	"Searchable": true,<br></br>	"Settings": {<br></br>		"Choices": [],<br></br>		"LookupBindings": []<br></br>	},<br></br>	"TitleField": false<br></br>}
```


Create Item


Creates a new item on the specified table in the target site.

```Nginx
POST /lists/{listNamePlural}/items
```


Example Body

```JavaScript
{<br></br>	"Attachments": [],<br></br>	"Dependencies": [],<br></br>	"LinkedItemsToAdd": [],<br></br>	"ScopedLinkedItemsToAdd": [],<br></br>	"embedded_files": [],<br></br>	"title": "test task",<br></br>	"status": "Not started",<br></br>	"Permissions": [],<br></br>	"__metadata": {<br></br>		"type": "Tasks"<br></br>	}<br></br>}
```


### Update Item


Updates a specified item on the target site.

```Nginx
PUT /lists/{listNamePlural}/items/{Id}
```


Example Body

```JavaScript
{<br></br>	"Attachments": [],<br></br>	"Dependencies": [],<br></br>	"LinkedItemsToAdd": [],<br></br>	"ScopedLinkedItemsToAdd": [],<br></br>	"embedded_files": [],<br></br>	"title": "test task",<br></br>	"status": "Not started",<br></br>	"Permissions": [],<br></br>	"__metadata": {<br></br>		"type": "Tasks"<br></br>	}<br></br>}
```



Add Sharepoint Drive to Table



Alters a given table to use a specified Drive ID and Folder ID when creating file folders for items on that table. This action has no effect on existing items.

```Nginx
PUT /lists/{listNamePlural}/drive
```


Example Body

```JavaScript
{<br></br>	"DriveId": <driveID>,<br></br>	"DriveItemId": <DriveItemID><br></br>}
```



### Fetch OpenAPI

Returns the OpenAPI connector as a file

```Nginx
GET /openapi
```

### Fetch PowerApps

Returns the OpenAPI power apps connector as a file

```Nginx
GET /openapi/powerapps
```

### Notification Types

Notifications are generated with a type corresponding to these values

<table border="1" id="bkmrk-meaning-type-notific" style="border-collapse: collapse; width: 100%;"><tbody><tr><td style="width: 49.9383%;">**Meaning**</td><td style="width: 49.9383%;">**Type**</td></tr><tr><td style="width: 49.9383%;">Notification</td><td style="width: 49.9383%;">0</td></tr><tr><td style="width: 49.9383%;">Reminder</td><td style="width: 49.9383%;">1</td></tr><tr><td style="width: 49.9383%;">Announcement</td><td style="width: 49.9383%;">2</td></tr><tr><td style="width: 49.9383%;">Mention</td><td style="width: 49.9383%;">3</td></tr></tbody></table>

````