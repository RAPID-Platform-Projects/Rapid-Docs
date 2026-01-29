# API Concepts

## Overview

Rapid Platform is a dynamic server environment where Users, including business personnel, are able to create &amp; modify custom tables containing columns of their choosing on the fly. This allows for a business to update their IT infrastructure with the click of a few buttons allowing Rapid to track the data they care about as their business evolves.

As a consequence, interacting with Rapid Platform from an external entity comes with its own challenges as data structures can not (generally) be assumed to exist and can be reasonably expected to change over the course of minutes. To support tackling these challenges this document covers the overall concepts binding the platform together while documenting how to interact with the existing API structure.

## What is a Site

Businesses can have one or more Sites to operate from. Each of these is treated as a separate instance of Rapid allowing us to isolate people from each other.

Sites are predicated on needing Office365 infrastructure and are scoped to a particular Microsoft Azure Tenant. This allows for a business to own multiple sites for various business purposes.

Rapid Platform is architecturally structured as follows

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

Tables also come with page definitions. These are descriptions the user has constructed of what fields are visible on a page in Rapid Platform and how they are laid out on that page.

Due to tables being dynamic, custom and evolving objects their definition can be fetched as a schema.

Structurally Rapid Platform site database is composed of many tables representing tables and a few special system tables. Currently only tables are available through the API.

### How find what tables are available on a site

`/openapi/lists`

This call will return a JSON object of the lists currently registered to a site

### How to get a tables schema

`/openapi/{listName}/schema`

This will return a JSON object of the queried tables’ schema.

Every table has the same basic system fields created for it to assist the Platform. These are

| Field Name | Type | Purpose |
| --- | --- | --- |
| id | INT | Unique ID of the item | 
| sys_type_id | INT | Entity TYpe ID for quick determination of tables | 
| deleted | DateTime | Date the item was deleted, `Null` if note deleted | 
| author_id | INT | Principal ID of the user that created the item | 
| created | DateTime | Date the item was created | 
| editor_id | INT | Principal ID of the last user to modify the item |
| modified | DateTime | Date last modified | 
| parent_id | INT | ID of the item of the same table type that this item is a child of |
| drive_id | String | Drive ID of the SharePoint/OneDrive location fo the item | 
| rank | String | Unused
| embedded_files | String | Json representation of embedded files component |
| sys_external_id | String | User editable column to store external references |
| sys_valid_from | DateTime | Earliest entry in the history table | 
| sys_valid_to | DateTime | Unused |


### What is an Item

Ultimately Rapid Platform is about helping people track data so they can get their job done. An individual instance of a table we call an Item. For example on the Table of Tasks a single ‘task’ is an item.

Interacting with Items is the core of interacting with the data stored in Rapid. Items follow full CRUD controls.

### How to get an item

```
GET /lists/{listName-dynamic}/items/{itemId}
```

Returns a single item of a given ID from a given table as JSON including the items universal links

### How to get a bunch of items

```
GET /lists/{listName-dynamic}/All/items
```

Returns the first page of items from the given table, sorted by ID descending as a JSON array. This is intended to get the most recent things as they are the most common.

Accepts OData filters to help filter down to the list of items you want in large tables

### How to get a bunch of linked items

```
GET /lists/{listName-dynamic}/{view}/items?linkedTo={listName-dynamic}/{id}
```

Returns the first page of items from the given table that are linked to the specific table and item provided in the linkedTo query. The linkedTo query will return any items that are universally linked, target and origin of a multi lookup or have single lookups pointing at the item.

Accepts OData filters to help filter down to the list of items you want in large tables

### How to get a bunch of universally linked items

```
GET /lists/{listName-dynamic}/{view}/items?universallyLinkedTo={listName-dynamic}/{id}
```

Returns the first page of items from the given table that are linked to the specific table and item provided in the universallyLinkedTo query. This query returns any items that are universally linked.

Accepts OData filters to help filter down to the list of items you want in large tables

### OData Filter Support

For supported endpoints you can use OData syntax filters to limit the results.


```
GET {route}?$filter={filter_string}
```

Currently supported OData syntax

| Syntax | Purpose | Example |
| --- | --- | --- |
| eq | Equals (exact comparison) | title eq 'My Title' |
| ne | Not Equals (exact comparison) | status ne 'Active' |
| lt | Less Than | due_date lt '2020-12-31T00:00:000Z' |
| le | Less Than or Equal To | priority le 3 |
| gt | Greater Than | cost gt 5000 |
| ge | Greater Than or Equal To | volunteers ge 20 |
| and | Logical AND joining multiple comparisons | title eq 'My Title' and cost gt 5000 |
| or | Logical OR joining multiple comparisons | priority le 3 or cost gt 5000 |
| () | Brackets : Managing order of operations | (priority le 3 or cost gt 5000) and title eq 'My Title' |
| in() | At least one given value is a match | in(parent_id, 1, 2, 3) |
| inUniversal() | At least one universal link is a match | inUniversal(Projects, 1, 2, 3) |
| inScoped() | At least one given scoped link is a match | inScoped(Tasks, contributors, 8, 11, 31) |

#### OData Function Reference

##### Relative Dates
When comparing dates you can use relative date glyphs to represent a dynamic value. The available glyphs are:

- today
- tomorrow
- startOfWeek
- endOfWeek
- startOfMonth
- endOfMonth
- startOfQuarter
- endOfQuarter

For example `created gt '@today'` would compare the created date to be after the start of today. All relative dates have midnight as their time component.

##### in

The in() function tests if at a given column contains at least one of the given values

**Arguments**

| Name | Type | Description |
| --- | --- | --- |
| column_name | String | The column name we are testing if values are against |
| values | Array | A comma separated list of values we are testing for |

**Examples**

When fetching a list of tasks from the all view you can find any where the ID is 1, 2 or 3

```
GET /lists/Tasks/All/items?$filter=in(id, 1, 2, 3)
```

Alternatively, when fetching a list of tasks from the all view you can find any where the title is 'A', 'B', or 'D'

```
GET /lists/Tasks/All/items?$filter=in(title, 'A','B','D')
```

##### inUniversal

The inUniversal() function tests if at a given list of items are linked universally

**Arguments**

| Name | Type | Description |
| --- | --- | --- |
| list-name | String | The target list the items universally linked belong to |
| values | Array | A comma separated list of values we are testing for |

**Examples**

When fetching a list of tasks from the all view you can find any where they are universally linked to Invoices 1, 2 or 3


```
GET /lists/Tasks/All/items?$filter=inUniversal(Invoices, 1, 2, 3)
```

##### inScoped

The inScoped() function tests if a given list of items are linked via a scoped link and returns true for each of them

**Arguments**

| Name | Type | Description |
| table_name | String | The target table the items we are searching for belong to |
| column_name | String | The multi-lookup column name we are testing if the given items are linked via |
| values | Array | A comma separated list of IDs we are testing for |

**Examples**

When fetching a list of tasks from the all view you can find any where they are linked via the contributors multi-lookup to principals 8, 11 or 13


```
GET /lists/Tasks/All/items?$filter=inScoped(Principals, contributors, 8, 11, 13)
```

### How to create an item

```
POST /lists/{listName-dynamic}/items
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

Optionally you can submit several items in an array. By default this will not fire events, which can be overridden with the query parameter bulkEvents=true

#### Creating an item with a file folder

Providing the query parameter createFolder will try to generate a SharePoint folder for that item during creation. For example

```
POST /lists/{listName-dynamic}/all$/items?createFolder=true
```

#### Creating an item without triggering a webhook

Sometimes you need to create an item and not trigger associated hooks. An optional query parameter disables these from activating on item creation

```
POST /lists/{listName-dynamic}/all$/items?webhooks=false
```

#### Creating several items and triggering a webhook for each

When creating an array of items by default webhooks are disabled. To override this you can turn on bulkEvents=true. This will cause a webhook event to fire for each created item, not the set as a whole.

```
POST /lists/{listName-dynamic}/all$/items?webhooks=true&bulkEvents=true
```

### How to update an item

```
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

```
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

```
‘{list name}/{id}’
```

Where the item id of the updated/created item are implicit and the stated table name and ID are of the target item to be linked.

How to unlink two items

Conversely populating the LinkedItemsToRemove array will request the deletion of linked items between a created/updated item and the stated target. This is also an array of strings in the format

```
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

```
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

```
DELETE http://dev.rapidplatform.com/rapidplatform/114r1/hooks/433

BODY
{
    "config":{
        "list": "Tasks"
    }
}
```

## Inherit Links

You can fetch the array of expected universal links to add due to inherit link configuration by hitting the inherit-link endpoint

```
/lists/:list/items/:id/inherited-links?type=:list-name
```

Where

:list - The entity context the new item is being created against :id - The item context being created against :list-name - The type of entity being created (plural form)

So for this entity configuration 
![Inherit links ERD](<Inherit Links ERD.png>)

To fetch the links needed to be added to a Note being created against Task 2, while Notes have Inherit Links configured for Projects you would call

## Title Update

Due to table inheritance causing entity fields to be split across multiple tables you can post to the title-field endpoint to set an entities' title field.

```
/lists/:list/title-field
```

This is only a PUT action that requires the title field in the body like

```JSON
{
   "title":"{title column name}"
}
```

## Navigating to a Particular Page in Designer or Explorer

It is sometimes necessary to navigate to a particular page in either Explorer (having a direct link to a page on nav bar for example) or in Designer, which is necessary if you need to edit the page.

As of v1.0.07 pages are not in the URI for a rapid location by default. To get to a page either in Designer or Explorer use the following syntax for the URI construction

For Designer:

```
?tab=Designer&page={pageName}#
```

## Search Endpoint

You can search for items on a specific view from a string input and it will regard any columns on the table marked searchable.

```
GET /lists/{listName}/{view}/items?term={searchTerm}
```

## Dynamically Populating a Lookup

When creating items that contain a lookup field to another table, it is frequently the case where you need to check if the item you want to reference exists on the target table and find it's ID OR if it doesn't exist to create it. This comes up sufficiently that we have implemented an alternate sugar value to smooth this process out.

When populating a lookup in a create/update request on an item you can instead pass an object in the following form

```JSON
{
    "$filter": "",
    "__metadata": {
        "type": ""
    }
}
```

This will execute the filter to attempt to find an item. If at least one is found it will take the first and replace the object with the found items ID. If no items are returned from the filter expression it will take the supplied keys and generate a new item, then replace the object with the newly created items ID.

## Common Endpoints

### Get Site File

Returns a JSON object representation of the site file - note pages are not included in the response

```
GET https://app.rapidplatform.com/api/{tenant}/{site}
```

### Get Table Items

Returns an array of objects, where each object represents the item, keys in each object contain the fields on the view being accessed

Supports an OData query parameters

```
GET /{list}/{view}/items
```

### Get a Table Item

Fetches a specified item from a table.

```
GET /lists/{listNamePlural}items/{itemID}
```

### Delete a Column

Removes the specified column from the specified table.

```
DELETE /lists/{listNamePlural}/fields/{columnName}
```

### Fetch Bundles

Returns an array which includes the system bundles stored in the bundle library

```
GET /bundles
```

### Fetch Bundle Schema

Returns the schema for a particular bundle, including description, author, title and update date

```
GET /bundes/{bundleName}/schema
```

### Edit Feature Versions

Updates the intended feature version used by the site (*Deprecated*)

```
PUT /experienceversions
```

Expected body

```JSON
{
    "featureName": "version"
}
```


Where featureName represents Designer, Explorer, Workflow and Version is the intended SemVer code to be used.

### Edit Column

Updates a column configured on a specified table.

```
PUT /lists/{listNamePlural}/fields/{fieldName}
```

Expected Body

```JSON
{
    "Title": "Bool",
    "ColumnName": "bool",
    "SystemManaged": false,
    "FieldType": "Boolean",
    "Searchable": true,
    "Settings": {
        "Choices": [],
        "LookupBindings": []
    },
    "TitleField": false
}

```

### Create Form

Creates a new Form. These are for the Forms experience and not Adaptive Forms.

```
POST /forms/{formTitle}
```


Where formTitle is the permalink for the created form and must be unique

Example Body:

```JSON
{
	"description": "<Describe the new form in this area>",
	"list": "All Fields",
	"slug": "new-forms",
	"title": "New Forms",
	"showAttachments": false,
	"slugErrors": false,
	"fields": [
		{
			"columnName": "bool"
		}
	]
}
```

### Create Table

Creates a new table on the site. Columns must be created after.

```
POST /lists
```

Body can contain a key called 'Extends' which can contain a string of the parent table if a inherited table needs to be created

Example Body:

```JSON
{
	"ListName": "tests",
	"ListNameSingular": "test",
	"NewItemPage": "test Details",
	"Fields": [],
	"Table": "Test",
	"Searchable": true,
	"Settings": {},
	"TitleField": null,
	"DefaultPermissions": [
		{
			"principal_id": 2,
			"mode_flags": 7
		}
	],
	"PlaceholderPermissions": {
		"Author": 7
	},
	"InheritLinks": []
}
```


### Delete Table

Delete the given table from the site permanently. Will throw an error if trying to delete a table that has inherited table.

```
DELETE /lists/listNamePlural
```

### Create page

Creates a new blank page to be used within a site. Pages are independent of tables by default. To ensure a page has a table context preface the page name with the table name. For example a new Tasks page could be called "Tasks Details Two".

```
POST /pages/Explorer/{pageName}
```

Example Body:

```JavaScript
{
	"layouts": {},
	"body": null,
	"jumbotronEnabled": true
}
```


### Get Page

Returns the page layout structure for the given page

```
GET /pages/Explorer/{pageName}
```

### Dependencies
Dependencies can be created just like any item, except they have totally custom columns.

| Column | Type | Description |
| --- | --- | --- |
| `source_id` | Number | Task ID that is the parent of the dependency (The source of the arrow) |
| `target_id` | Number | Task ID that is the child of the dependency (The arrow points to this task) |
| `type` | String | Enumeration of which direction the dependency is operating (see below) |
| `gap` | Number | The number of whole days lag/lead for the dependency |

Dependencies come in four flavours defined by type
- 0 : Finish to Start (the 'standard' dependency)
- 1 : Start to Start
- 2 : Finish to Finish
- 3 : Start to Finish

Dependencies are only supported on Tasks and sub-types of Tasks. When fetching a Task item the list of dependencies that task is the source of will be presented in the `dependencies` key. For example when fetching Task 4 with a single dependency:
```JSON
{
    "id": 4,
    "dependencies": [
        {
            "id": 3,
            "source_id": 4,
            "target_id": 3,
            "type": "2"
        }
    ],
   "__metadata": {
        "type": "Tasks"
    }
}
```

#### Create a new Dependency

`POST /lists/Dependencies/All/items`

```JSON
{
  "source_id": 4,
  "target_id": 3,
  "type": "0",
  "gap": 2
}
```
`gap` is optional

#### Update and existing Dependency

`PUT /lists/Dependencies/All/items/{dependency id}`

```JSON
{
  "source_id": 4,
  "target_id": 3,
  "type": "1",
  "gap": 0
}
```
When updating, all columns are optional

#### Delete an existing Dependency
`DELETE /lists/Dependencies/All/items/{dependency id}`

### Edit Form

Updates a form configuration

```
PUT /forms/{formTitle}
```

FormTitle is the forms' permalink and must exist.

Example Body:

```JavaScript
{
	"layouts": {},
	"body": {
		"id": "tests_TabStrip1",
		"type": "TabStrip",
		"attributes": {
			"config": {
				"jumbotron": true,
				"title": "View tests",
				"tabs": [
					{
						"title": "Details",
						"page": "test Details",
						"hidden": false,
						"attributes": {
							"itemId": "{itemId}",
							"itemType": "tests",
							"linkItemType": "tests",
							"linkItemId": "{itemId}"
						}
					},
					{
						"title": "Activity",
						"page": "test Activity",
						"hidden": false,
						"attributes": {
							"itemId": "{itemId}",
							"itemType": "tests",
							"linkItemType": "tests",
							"linkItemId": "{itemId}"
						}
					},
					{
						"title": "Files",
						"page": "tests Files",
						"hidden": false,
						"attributes": {
							"itemId": "{itemId}",
							"linkItemType": "tests",
							"linkItemId": "{itemId}",
							"itemType": "tests"
						}
					},
					{
						"title": "Tasks",
						"page": "Tasks",
						"hidden": false,
						"attributes": {
							"linkItemType": "tests",
							"linkItemId": "{itemId}",
							"itemType": "Tasks"
						}
					},
					{
						"title": "TEST",
						"page": "GREAT TEST",
						"hidden": false,
						"attributes": {
							"linkItemType": "tests",
							"linkItemId": "{itemId}",
							"itemType": "Entities"
						}
					}
				]
			}
		}
	},
	"id": "test",
	"jumbotronEnabled": true,
	"attributes": {
		"pageId": 0,
		"itemType": 1,
		"itemId": 2
	}
}
```


### Delete Form

Deletes the specified form

```
DELETE /forms/{formTitle}
```

FormTitle is the forms' permalink and must exist.

### Edit Form Quotes

Updates the list of form quotes shared across all forms in the site

```
PUT /forms
```

Example Body :

```JSON
{
	"items": [
		{
			"description": "<Describe the new form in this area>",
			"list": "All Fields",
			"slug": "new-forms",
			"title": "New Formsaa",
			"showAttachments": false,
			"slugErrors": false,
			"fields": [
				{
					"columnName": "bool"
				}
			]
		}
	],
	"quotes": [
		{
			"title": "FIRST",
			"phrase": "sec",
			"isNew": false
		},
		{
			"title": "SECOND",
			"phrase": "qwe",
			"isNew": false
		}
	]
}
```

:::warning
Hitting this endpoint requires all form data for every form on site, it is not recommended to hit this endpoint externally as it can cause corruption to form data if not used correctly
:::


### Update Menu item

Edits a specified menu in the site

```
PUT /menus/{menuItemName}
```


menuItemName is the name of menu for example, 'Explorer Sidebar'

Example Body :

```JSON
{
	"id": "Launchpad",
	"Items": [
		{
			"Text": "RAPID Platform",
			"Arguments": {},
			"Items": [
				{
					"Text": "Explorer",
					"Icon": "Search",
					"Arguments": {
						"href": "Explorer"
					},
					"Items": [],
					"Action": "Open App",
					"Permissions": {
						"enabled": false,
						"principalIds": []
					}
				},
				{
					"Text": "Forms",
					"Icon": "TextField",
					"Arguments": {
						"href": "form"
					},
					"Items": [],
					"Action": "Open App",
					"Permissions": {
						"enabled": false,
						"principalIds": []
					}
				},
				{
					"Text": "Workflow",
					"Icon": "ServerProcesses",
					"Arguments": {
						"href": "compoza"
					},
					"Items": [],
					"Action": "Open App",
					"Permissions": {
						"enabled": false,
						"principalIds": []
					}
				},
				{
					"Text": "Designer",
					"Icon": "EditMirrored",
					"Arguments": {
						"href": "Dezigna"
					},
					"Items": [],
					"Action": "Open App",
					"Permissions": {
						"enabled": false,
						"principalIds": [
							1,
							2,
							3,
							4,
							5,
							6,
							7,
							8,
							9,
							10,
							11,
							12,
							13,
							14,
							15,
							16,
							17,
							18,
							19,
							20,
							21
						]
					}
				}
			],
			"Permissions": {
				"enabled": false,
				"principalIds": []
			}
		}
	]
}
```

Note that updating permissions requires the whole menu item object to be updated

### Update Table

Updates a specified table on the site

```
PUT /lists/{listNamePlural}
```

Example Body :

```JSON
{
	"ListName": "tests",
	"ListNameSingular": "test",
	"NewItemPage": "test Details",
	"Fields": [],
	"Table": "test",
	"Searchable": true,
	"Settings": {},
	"TitleField": null,
	"DefaultPermissions": [
		{
			"principal_id": 2,
			"mode_flags": 7
		}
	],
	"PlaceholderPermissions": {
		"author_id": 7
	},
	"InheritLinks": []
}
```


### Lock View

Locks a view from being edited in Explorer. No body required.

```
POST /lists/{listnamePlural}/{viewName}/lock
```

### Unlock View

Unlocks a view so it can now be edited in Explorer. No body required.

```
POST /lists/{listnamePlural}/{viewName}/unlock
```

### Create View

Creates a new view on the specified table

```
POST /lists/{listnamePlural}
```

Example Body:

```JavaScript
{
	"Title": "TEST VIEW",
	"Columns": [],
	"FilterExpression": null,
	"SortBy": "id",
	"SortDirection": "desc",
	"Deletable": false,
	"IsVisible": true,
	"ExtraFilterExpression": null
}
```


### Update View

Alters a given datasource.

```
PUT /lists/{listnamePlural}/{viewName}
```

Example Body:

```JSON
{
	"Title": "TEST VIEW",
	"Columns": [],
	"FilterExpression": null,
	"SortBy": "id",
	"SortDirection": "desc",
	"Deletable": false,
	"IsVisible": true,
	"ExtraFilterExpression": null
}
```


### Delete View

Removes a specified view from the site

```
DELETE /lists/{listnamePlural}/{viewName}
```

### Create Column

Creates a new column on the specified table.

```
POST /lists/{listNamePlural}/fields
```

Example Body

```JSON
{
	"Title": "test",
	"ColumnName": "test",
	"SystemManaged": false,
	"FieldType": "Text",
	"Searchable": true,
	"Settings": {
		"Choices": [],
		"LookupBindings": []
	},
	"TitleField": false
}
```


### Create Item

Creates a new item on the specified table in the target site.

```
POST /lists/{listNamePlural}/items
```

Example Body

```JSON
{
	"Attachments": [],
	"Dependencies": [],
	"LinkedItemsToAdd": [],
	"ScopedLinkedItemsToAdd": [],
	"embedded_files": [],
	"title": "test task",
	"status": "Not started",
	"Permissions": [],
	"__metadata": {
		"type": "Tasks"
	}
}
```


### Update Item

Updates a specified item on the target site.

```
PUT /lists/{listNamePlural}/items/{Id}
```

Example Body

```JSON
{
	"Attachments": [],
	"Dependencies": [],
	"LinkedItemsToAdd": [],
	"ScopedLinkedItemsToAdd": [],
	"embedded_files": [],
	"title": "test task",
	"status": "Not started",
	"Permissions": [],
	"__metadata": {
		"type": "Tasks"
	}
}
```

### Add Sharepoint Drive to Table

Alters a given table to use a specified Drive ID and Folder ID when creating file folders for items on that table. This action has no effect on existing items.

```
PUT /lists/{listNamePlural}/drive
```

Example Body

```JSON
{
	"DriveId": "<driveID>",
	"DriveItemId": "<DriveItemID>"
}
```

### Fetch OpenAPI

Returns the OpenAPI connector as a file

```
GET /openapi
```

### Fetch PowerApps

Returns the OpenAPI power apps connector as a file

```
GET /openapi/powerapps
```

### Notification Types

Notifications are generated with a type corresponding to these values

| Meaning | Type |
| --- | --- |
| Notification | 0 |
| Reminder | 1 |
| Announcement | 2 |
| Mention | 3 |

