# Authoring Bundle 

It is possible to collect one or more custom entities into a package that can be installed onto a site. We call these packages a bundle. Bundles contain a definition for tables, menus and pages. When installed they add their definitions to the site.

Tables that collide with existing Tables will abort the installation of a bundle. Pages that collide will be replaced. Menus will never collide and are simply additive.

Bundles can be generated from a site that already has tables/pages/menus configured using the Download feature. See [Bundle Installation](/docs/Rapid/4-Keyper%20Manual/2-Designer/9-Advanced/bundles/bundles.md "Bundle Installation").

## Bundle Contents

A bundle contains the definition for one or more entities, notably including

Template Bundle JSON

| Syntax Rules | List Title &amp; ListName = Plural Table = Singular Lookups reference the LISTNAME Lookups and User fields require \_id in their column names List titles/names are Title Case Field titles are sentence case No spaces in column names or in table names

```JSON
//Bundle Header
{
    "$schema": "./Bundle.schema.json",
    "Name": "<BundleName>",
    "Author": "<AuthorName> <<AuthorEmail>>",
    "Description": "<Description>",
    "Version": "1.0",
    "Pages": {},
    "Lists": [

```

```JSON
//List Header
        {
            "Title": "",
            "ListName": "",
            "ListNameSingular": "",
            "Searchable": true,
            "ShortName": "",
            "Table": "",
            "SystemManaged": false,
            "Fields": [

```

```JSON
//Single Text Field
        {
          "Title": "",
          "ColumnName": "",
          "Description": "",
          "FieldType": "Text",
          "Searchable": true
        },

```

```JSON
//Multi Line Text Field
        {
          "Title": "",
          "ColumnName": "",
          "Description": "",
          "FieldType": "Note"
        },

```

```JSON
//DateTime Field
        {
          "Title": "",
          "ColumnName": "",
          "Description": "",
          "FieldType": "DateTime"
        },

```

```JSON
//Choice Field
        {
          "Title": "",
          "ColumnName": "",
          "Description": "",
          "FieldType": "Choice",
          "Settings": {
            "Choices": [
                    {
                    "Text": "",
                    "AccentColour": "rgb(0, 0, 0)"
                    },
                    {
                    "Text": "",
                    "AccentColour": "black"
                    },
                    {
                    "Text": "",
                    "AccentColour": "#000000"
                    }
                ]
            }
        },

```

```JSON
//Lookup Field
        {
          "Title": "",
          "ColumnName": "_id",
          "Description": "",
          "FieldType": "Lookup",
          "Settings": {
            "LookupList": "",
            "LookupField": ""
          },
          "Searchable": true
        },

```

```JSON
//Boolean Field
        {
          "Title": "",
          "ColumnName": "",
          "Description": "",
          "FieldType": "Boolean"
        },

```

```JSON
//Number Field
        {
          "Title": "",
          "ColumnName": "",
          "Description": "",
          "FieldType": "Number"
        },

```

```JSON
//Percentage Field
        {
          "Title": "",
          "ColumnName": "",
          "Description": "",
          "FieldType": "Percentage"
        },

```

```JSON
//Currency Field
        {
          "Title": "",
          "ColumnName": "",
          "Description": "",
          "FieldType": "Currency"
        },

```

```JSON
//User Field
        {
          "Title": "",
          "ColumnName": "_id",
          "Description": "",
          "FieldType": "User",
          "Searchable": true
        },

```

```JSON
//Whole Number Field
        {
          "Title": "",
          "ColumnName": "",
          "Description": "",
          "FieldType": "Integer"
        },

```

```JSON
//Query
        {
            "Title": "Query",
            "ColumnName": "query",
            "SystemManaged": false,
            "FieldType": "Subquery",
            "Nullable": true,
            "Searchable": true,
            "Settings": {
                "Choices": [],
                "Query": "SELECT 10+1",
                "DisplayAs": "Currency"
            }
        },

```

```JSON
//Entity Tail
            ]
        }

```

```JSON
//Bundle Tail
    ]
}

```

## Related articles

[**ADVANCED Bundle Installation**](/docs/Rapid/4-Keyper%20Manual/2-Designer/9-Advanced/bundles/bundles.md)