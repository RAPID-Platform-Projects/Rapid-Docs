# Implementing the Rapid Support framework

Rapid provides support for you and your customers' sites. When developing a product include the support framework to ensure the Rapid support team are made aware of requests.

This framework is designed to be flexiable and extendable for your use case. It includes at a minimum:
1) A support request table to store requests
2) A suite of Workflow processes to manage the lifecycle of support requests
3) A pair of webhooks to keep requests in sync with our oversight database

Optionally we also provide a basic Adaptive Form that can be configured to be presented by the Rapid AI Helpbot when needed.

## Basic installation

Install the `Rapid Support Ticket` bundle to bring in the table and pages. You can download the bundle [here](https://cdn.rapidplatform.com/themes/rapidplatform/support/support-bundle.zip).

Add the following webhooks (not internal webhooks)
| Table | Title | Callback Url | Trigger |
| --- | --- | --- | --- | 
| Rapid Support Requests | Sync Rapid Support Request on Creation | https://rapid-internal-api.azurewebsites.net/api/syncSupportRequest?code=N_wY5LNVrdK2_IKpQQ78gjoHy1RL2ldRnGX5Pz3AgYKeAzFuGGnL-w== | Item Created |
| Rapid Support Requests | Sync Rapid Support Request on Update | https://rapid-internal-api.azurewebsites.net/api/syncSupportRequest?code=N_wY5LNVrdK2_IKpQQ78gjoHy1RL2ldRnGX5Pz3AgYKeAzFuGGnL-w== | Item Updated |

Create the support process diagrams, you can download our example process [here](https://cdn.rapidplatform.com/themes/rapidplatform/support/support-diagrams.zip)

The example process includes Call Activities, so make sure you link the correct diagrams in the Lifecycle process.
These diagrams are designed to be extended and adapted to your product, feel free to customize them to your needs.

Optionally, add the Support Adapative document and configure it to be both provided by the Rapid AI Helpbot.

:::info
We only care about creating the Rapid Support Request items. Feel free to configure any means of achieving that as appropriate to your product.
:::

You can download the example Adaptive document [here](https://cdn.rapidplatform.com/themes/rapidplatform/support/support-request.json), or simply use the following item body:

```JSON
{
    "document": {
        "type": "form",
        "head": {
            "title": "Rapid Support Request",
            "states": {
                "default": {
                    "label": "Default",
                    "state": {}
                },
                "IAuQ": {
                    "state": {
                        "root": {
                            "data": "",
                            "$visible": true,
                            "$enabled": true
                        },
                        "Component.Label_I581": {
                            "data": "",
                            "$visible": true,
                            "$enabled": true
                        },
                        "Rapid Support Requests:title:Fk9Vf": {
                            "$visible": true,
                            "$enabled": true
                        },
                        "Rapid Support Requests:requester_id:aCkQF": {
                            "$visible": true,
                            "$enabled": true
                        },
                        "Rapid Support Requests:description:_Y7c5": {
                            "$visible": true,
                            "$enabled": true
                        },
                        "Rapid Support Requests:request_url:YRwsl": {
                            "$visible": true,
                            "$enabled": true
                        },
                        "Rapid Support Requests:scale:kNqiZ": {
                            "$visible": true,
                            "$enabled": true
                        },
                        "Layout.Section_AjCX": {
                            "data": "",
                            "$visible": true,
                            "$enabled": true
                        },
                        "Action.Button_6ykV": {
                            "data": "",
                            "$visible": true,
                            "$enabled": true
                        },
                        "RAPID_PqQx": {},
                        "$validation": {},
                        "Layout.Grid_zsQR": {
                            "data": "",
                            "$visible": true,
                            "$enabled": true
                        }
                    },
                    "label": "Example",
                    "namespace": "default"
                }
            },
            "type": "Form",
            "connections": {
                "RAPID_PqQx": {
                    "id": "RAPID_PqQx",
                    "connectorId": "RAPID Platform",
                    "method": "Single Item",
                    "args": {
                        "list": {
                            "listName": "Rapid Support Requests",
                            "table": "rapid_support_request"
                        },
                        "fetch": false
                    },
                    "elements": [
                        "Rapid Support Requests:title:Fk9Vf",
                        "Rapid Support Requests:requester_id:aCkQF",
                        "Rapid Support Requests:description:_Y7c5",
                        "Rapid Support Requests:request_url:YRwsl",
                        "Rapid Support Requests:scale:kNqiZ"
                    ],
                    "validation": [],
                    "children": [],
                    "isLegacy": false
                }
            },
            "conditions": {
                "vStvE": {
                    "id": "vStvE",
                    "label": "Basic Fields",
                    "isValidation": true,
                    "triggers": {},
                    "forceValidationMessages": true,
                    "watchers": [
                        {
                            "id": "bNoCo",
                            "actionId": "validate",
                            "expression": {
                                "id": "ZUZwx",
                                "rules": [
                                    {
                                        "id": "uZw-2CmVGi",
                                        "targetId": "Rapid Support Requests:title:Fk9Vf",
                                        "type": "string",
                                        "state": "data",
                                        "operator": "empty",
                                        "validation": {
                                            "invalidMessage": "Please provide a basic description of the issue"
                                        }
                                    },
                                    {
                                        "id": "PwcU7o2vrw",
                                        "targetId": "Rapid Support Requests:requester_id:aCkQF",
                                        "type": "number",
                                        "state": "data",
                                        "operator": "greater",
                                        "value": 0,
                                        "validation": {
                                            "invalidMessage": "Please indicate who is the primary contact for this issue."
                                        }
                                    },
                                    {
                                        "id": "KvxvIqfKon",
                                        "targetId": "Rapid Support Requests:scale:kNqiZ",
                                        "type": {
                                            "connection": false,
                                            "type": "boolean"
                                        },
                                        "state": "hasValue",
                                        "validation": {
                                            "invalidMessage": "Please indicate the scale of the issue."
                                        }
                                    }
                                ],
                                "combinator": "or"
                            }
                        }
                    ]
                }
            }
        },
        "body": {
            "$type": "Layout.Section",
            "id": "root",
            "$children": [
                {
                    "$type": "Component.Label",
                    "title": "Label",
                    "id": "Component.Label_I581",
                    "attributes": {
                        "label": "Rapid Support Request",
                        "size": "h2",
                        "divider": true
                    },
                    "$children": [],
                    "conditions": []
                },
                {
                    "id": "Rapid Support Requests:title:Fk9Vf",
                    "description": "Text",
                    "title": "Title",
                    "attributes": {
                        "label": "Title *",
                        "listName": "Rapid Support Requests",
                        "columnName": "title",
                        "listNameSingular": "Rapid Support Request",
                        "tableName": "rapid_support_request",
                        "placeholder": "Please simply describe the issue"
                    },
                    "connection": {
                        "id": "RAPID_PqQx",
                        "path": [
                            {
                                "path": "$[\"title\"]",
                                "id": "RAPID_PqQx",
                                "key": "data"
                            }
                        ]
                    },
                    "$type": "Input.Text",
                    "$children": [],
                    "conditions": []
                },
                {
                    "$type": "Layout.Grid",
                    "title": "Horizontal Grid",
                    "id": "Layout.Grid_zsQR",
                    "attributes": {
                        "gridWidth": {},
                        "gridHeight": {},
                        "cellWidth": {},
                        "cellHeight": {},
                        "togglePositioning": false,
                        "autoColumnSize": false,
                        "justifyCells": "center",
                        "alignCells": "center",
                        "gap": "10px",
                        "columns": 2
                    },
                    "$children": [
                        {
                            "id": "Rapid Support Requests:scale:kNqiZ",
                            "description": "Choice",
                            "title": "Scale",
                            "attributes": {
                                "label": "Scale *",
                                "listName": "Rapid Support Requests",
                                "columnName": "scale",
                                "listNameSingular": "Rapid Support Request",
                                "tableName": "rapid_support_request",
                                "valueKey": "Text",
                                "choices": [
                                    {
                                        "Text": "This is inconvenient",
                                        "AccentColour": "#d6c0baff"
                                    },
                                    {
                                        "Text": "This prevents me from working",
                                        "AccentColour": "#ba8c80ff"
                                    },
                                    {
                                        "Text": "This prevents a team/department from working",
                                        "AccentColour": "#995c4dff"
                                    },
                                    {
                                        "Text": "This prevents the business from working",
                                        "AccentColour": "#bf492cff"
                                    },
                                    {
                                        "Text": "Data is being corrupted",
                                        "AccentColour": "#d12d04ff"
                                    }
                                ]
                            },
                            "connection": {
                                "id": "RAPID_PqQx",
                                "path": [
                                    {
                                        "path": "$[\"scale\"]",
                                        "id": "RAPID_PqQx",
                                        "key": "data"
                                    }
                                ]
                            },
                            "$type": "Input.Choice",
                            "$children": [],
                            "conditions": []
                        },
                        {
                            "id": "Rapid Support Requests:requester_id:aCkQF",
                            "description": "User",
                            "title": "Requester",
                            "attributes": {
                                "label": "Requester *",
                                "listName": "Rapid Support Requests",
                                "columnName": "requester_id",
                                "listNameSingular": "Rapid Support Request",
                                "tableName": "rapid_support_request",
                                "lookupList": "Principals",
                                "lookupField": "display_name"
                            },
                            "connection": {
                                "id": "RAPID_PqQx",
                                "path": [
                                    {
                                        "path": "$[\"requester_id\"]",
                                        "id": "RAPID_PqQx",
                                        "key": "data"
                                    }
                                ]
                            },
                            "$type": "Input.User",
                            "$children": [],
                            "conditions": []
                        }
                    ],
                    "conditions": []
                },
                {
                    "id": "Rapid Support Requests:description:_Y7c5",
                    "description": "Note",
                    "title": "Description",
                    "attributes": {
                        "label": "Description",
                        "listName": "Rapid Support Requests",
                        "columnName": "description",
                        "listNameSingular": "Rapid Support Request",
                        "tableName": "rapid_support_request",
                        "multiline": true,
                        "fullHeight": false,
                        "placeholder": "Please give a robust description of the issue. Including what, where and when are all appreciated."
                    },
                    "connection": {
                        "id": "RAPID_PqQx",
                        "path": [
                            {
                                "path": "$[\"description\"]",
                                "id": "RAPID_PqQx",
                                "key": "data"
                            }
                        ]
                    },
                    "$type": "Input.MultiLineText",
                    "$children": [],
                    "conditions": []
                },
                {
                    "id": "Rapid Support Requests:request_url:YRwsl",
                    "description": "Text",
                    "title": "Request URL",
                    "attributes": {
                        "label": "Request URL",
                        "listName": "Rapid Support Requests",
                        "columnName": "request_url",
                        "listNameSingular": "Rapid Support Request",
                        "tableName": "rapid_support_request",
                        "placeholder": "If relevant, where did you observe the issue?"
                    },
                    "connection": {
                        "id": "RAPID_PqQx",
                        "path": [
                            {
                                "path": "$[\"request_url\"]",
                                "id": "RAPID_PqQx",
                                "key": "data"
                            }
                        ]
                    },
                    "$type": "Input.Text",
                    "$children": [],
                    "conditions": []
                },
                {
                    "$type": "Action.Button",
                    "title": "Button",
                    "id": "Action.Button_6ykV",
                    "attributes": {
                        "label": "Submit",
                        "showLabel": true,
                        "isBlock": false,
                        "isDanger": false,
                        "shape": "default",
                        "type": "primary",
                        "size": "middle",
                        "actionId": "submitButtonAction",
                        "targetElementId": "Action.Button_6ykV"
                    },
                    "$children": [],
                    "conditions": []
                }
            ],
            "attributes": {
                "label": "Support Request"
            },
            "title": "Root",
            "conditions": []
        },
        "id": "43"
    },
    "type": "form",
    "title": "Rapid Support Request",
    "description": "<p>Ask for help from the Rapid team. Support requests are manged within your site so you can easily tell what is going on.</p>",
    "slug": null,
    "classification": "Public",
    "__metadata": {
        "type": "Adaptive Documents"
    },
    "isUpdate": true
}
```