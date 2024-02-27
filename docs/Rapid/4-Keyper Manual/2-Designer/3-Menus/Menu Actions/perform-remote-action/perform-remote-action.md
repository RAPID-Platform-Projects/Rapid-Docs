# Perform remote action

This is configurable on both the ***[Side Bar](</docs/Rapid/3-User Manual/glossary/glossary.md#sidebar>)*** and ***[Command Bar](</docs/Rapid/3-User Manual/glossary/glossary.md#command-bar>)*** menu types.

## Overview

Rapid Platform nicely blends with Microsoft 365 applications.

There may be a need to trigger Power Automate Flows or some Azure Function apps. Typically, this requires sending input information along with network requests for action.

These external to Rapid actions (like trigger to an external APIs) can be easily performed using **Perform Remote Action** as a On-Click Action for a Menu button.

The Perform Remote Action makes a post request to the specified address.

## How to configure a menu button to Perform a remote action

1. Navigate to Designer &gt; Tables &gt; All Tables  

    ![Navigate to Tables](<../../../Navigate to Tables.png>)
2. Open your desired table. (Find your desired table by using the search bar or scrolling through the list)  

    ![Open Table](<../../../Open Table.png>)
3. Click on Menu  

    ![Navigate to Tables' Menu](<../../Navigate to Table Menus.png>)
4. Click on the **New Blank Item Drop down** then on **New Blank Item** 

    ![Create new menu item](<../Create new menu item.png>)
5. Choose a name and Icon  

    ![Set menu title and icon](<../Set menu title and icon.png>)
6. Select Perform Remote Action as the On-Click Action 

    ![Set menu action](<Set onclick action.png>)
7. Configure the Include Item toggle (Configure to true if you want to include the current item context in the network request)
8. Configure the Single Request toggle (Configure to true, if you have multiple items selected and you want a single network request with these sent as an array of items as opposed to many network requests with one item each)
9. Paste in your post address
10. OPTIONAL Enter info text for reference in Rapid as to what this post request does
11. OPTIONAL Enter an Action ID (This is a hard coded string that can be used for reference in the post address)
12. Configure the "Include Form" toggle (Set this to true if you want to have a drop-down form appear when the menu button is pressed to add in additional information to the request)  

    ![Configure remote action fields](<Configure remote action fields.png>)

## Remote Action Options Further Details

Please note when configuring on the ***[Side Bar](</docs/Rapid/3-User Manual/glossary/glossary.md#sidebar>)*** menu the **Include Item**, **Single Request**, **Silent**, **Include Form**, and **Select Forms** options although visible will not do anything in this context but are used in ***[Command Bar](</docs/Rapid/3-User Manual/glossary/glossary.md#menu>)*** menu type.

As we can observe, the following fields are prompted by the system upon selection of Perform Remote Action as On-Click Action.

- **Include item -** This is a toggle field. A toggle ON would mean the current item context is included in the network request.
- **Single Request -** This is a toggle field. By default if multiple items are selected on a list view and the "Perform Remote Action" menu button is clicked it will send on request per item. If this is toggled ON it will send one request containing all the items as an array.
- **Save Intention** - This is a choice field. This will only take effect for a menu buttons triggered off an item page. The purpose of this is that Users may change the fields of the item they are on and then press the menu button to perform a remote action, expecting their changes on the item to be sent. If they have not saved the item, the most recent changes will not be sent. As such flexibility it given to the keyper where they can designate the Save Intention when the menu button is pressed. These options are: 
    - Save on Action - When the menu button is pressed, the item will be saved then the request sent.
    - Prompt for Save - A prompt will appear asking the user to save or discard changes. Following their selection, the request will be sent.
    - Do not save - The request will be sent regardless of whether the user has saved or not saved the most recent changes on the item.
    - For more information see - [What is the Save Intention Option in a Menu Setup?](/docs/Rapid/4-Keyper%20Manual/2-Designer/3-Menus/3-menu-button-configuration/what-is-save-intention-in-a-menu/what-is-save-intention-in-a-menu.md)
- **Address -** This is a mandatory field. It allows you to set the URL address of the network request. For instance, if you wish to request a Power Automate Flow, pass the appropriate Flow URL here.
- **Info text -** This optional field allows you to set the Metadata or additional Information Text about the action.
- **Action ID -** This optional field is useful when you wish to send an Action ID along with the network request to the remote end when the action is performed. This is a hardcoded string.
- **Silent -** This toggle field when in OFF state, prevents the action from adding a note to the item indicating it was performed. In other words, this field allows you to define if the action behaves in silent mode.
- **Include form -** Sometimes there is a need for a form to collect user input and provide it to the action. The inputs needs to accompany the network request. In such a case, you can toggle this field to ON state. As it goes to ON state, a new field will appear below it.
- **Select form -** This field is enabled only if the "Include form" field is toggled ON. This is a dropdown field and allows you to select the relevant Adaptive Form from a list of all existing forms created in RAPID's Adaptive Designer. You can select the relevant form by clicking on the form title. 

    - Note: The form must only be configured to fields that the menu button is on. Submission of the form will NOT create a new item but include the form data in the network request. See the image below showing what a menu button looks like when a form is included. 
    
    ![Execute action in Explorer](<Execute menu in Explorer.png>)

### Post Body:

The body of the post request will change based on the configuration of the menu button.

### Minimum Configuration:

A "Perform Remote Action" Menu button with the minimum configuration where only the address is filled will send the following post body

```JSON
{
    "site": "example",
    "tenant": "rapidplatform",
    "environment": "production",
    "requestor": 13,
    "item": {},
    "formData": {}
}
```

### Action ID Configuration:

A "Perform Remote Action" Menu button with the Action ID Configured will return the following body:

```JSON
{
    "site": "tristantesting",
    "tenant": "rapidplatform",
    "environment": "production",
    "requestor": 13,
    "actionId": "123abc",
    "item": {},
    "formData": {}
}
```

Include Item ON and Send as Single Request OFF:
As seen the item key returns an object with the selected item. If more than one item was selected from the list view, it will send one network request per item.

```JSON
{
    "site": "home",
    "tenant": "stationaryinc",
    "environment": "test",
    "requestor": 4,
    "item": {
      "id": 3,
      "Attachments": [],
      "Dependencies": [],
      "LinkedItemsToAdd": [],
      "ScopedLinkedItemsToAdd": [],
      "author": "Admin",
      "author_id": 4,
      "created": "2023-11-21T02:04:42.176Z",
      "editor": "Admin",
      "editor_id": 4,
      "modified": "2023-12-07T01:19:53.213Z",
      "parent_id": null,
      "drive_id": null,
      "folder_id": null,
      "rank": null,
      "embedded_files": [],
      "sys_external_id": null,
      "purchased_new": true,
      "status": "Active",
      "name": "Paper Cup Making Machine ",
      "value": 650,
      "condition": "Fair",
      "asset_name": null,
      "manufactured_date": "2005-06-15T14:00:00.000Z",
      "make": "S. K. Engineers",
      "_model": "Three Phase 220v",
      "registration_number": null,
      "pseudo_email": null,
      "purchase_price": 650,
      "seller_link": "https://www.skengineer.org/wax-coated-paper-cup-and-glass-making-machine.html#paper-glass-or-cup-making-machine",
      "Permissions": [
        {
          "principal_id": 2,
          "mode_flags": 7,
          "type": "SecurityGroup"
        },
        {
          "principal_id": 4,
          "mode_flags": 7,
          "type": "User"
        }
      ],
      "__metadata": {
        "type": "Assets"
      }
    },
    "formData": {}
}
```

### Include Item ON and Send as Single Request ON:

As seen the item key returns an array with the item profiles of the selected items.

```JSON
{
    "site": "home",
    "tenant": "stationaryinc",
    "environment": "test",
    "requestor": 4,
    "item": [
      {
        "id": 3,
        "Attachments": [],
        "Dependencies": [],
        "LinkedItemsToAdd": [],
        "ScopedLinkedItemsToAdd": [],
        "author": "Admin",
        "author_id": 4,
        "created": "2023-11-21T02:04:42.176Z",
        "editor": "Admin",
        "editor_id": 4,
        "modified": "2023-12-07T01:19:53.213Z",
        "parent_id": null,
        "drive_id": null,
        "folder_id": null,
        "rank": null,
        "embedded_files": [],
        "sys_external_id": null,
        "purchased_new": true,
        "status": "Active",
        "name": "Paper Cup Making Machine ",
        "value": 650,
        "condition": "Fair",
        "asset_name": null,
        "manufactured_date": "2005-06-15T14:00:00.000Z",
        "make": "S. K. Engineers",
        "_model": "Three Phase 220v",
        "registration_number": null,
        "pseudo_email": null,
        "purchase_price": 650,
        "seller_link": "https://www.skengineer.org/wax-coated-paper-cup-and-glass-making-machine.html#paper-glass-or-cup-making-machine",
        "Permissions": [
          {
            "principal_id": 2,
            "mode_flags": 7,
            "type": "SecurityGroup"
          },
          {
            "principal_id": 4,
            "mode_flags": 7,
            "type": "User"
          }
        ],
        "__metadata": {
          "type": "Assets"
        }
      },
      {
        "id": 2,
        "Attachments": [],
        "Dependencies": [],
        "LinkedItemsToAdd": [],
        "ScopedLinkedItemsToAdd": [],
        "author": "Admin",
        "author_id": 4,
        "created": "2023-11-21T02:02:37.938Z",
        "editor": "Admin",
        "editor_id": 4,
        "modified": "2023-12-07T01:19:53.473Z",
        "parent_id": null,
        "drive_id": null,
        "folder_id": null,
        "rank": null,
        "embedded_files": [],
        "sys_external_id": null,
        "purchased_new": true,
        "status": "Active",
        "name": "Best Paper Plate Making Machine",
        "value": 750,
        "condition": "Good",
        "asset_name": null,
        "manufactured_date": "2016-08-17T14:00:00.000Z",
        "make": "S. K. Engineers",
        "_model": "220 v",
        "registration_number": null,
        "next_service_date": "2023-11-29T14:00:00.000Z",
        "pseudo_email": null,
        "purchase_price": 940,
        "seller_link": "https://www.skengineer.org/dies-silver-dona-plate-making-machine-immediately-selling-24x7-08081308899.html#best-paper-plate-making-machine",
        "__metadata": {
          "type": "Assets"
        }
      }
    ],
    "formData": {}
}
```

### Include Form ON:

As seen the formDate key returns an object with the form information entered.

```JSON
{
    "site": "home",
    "tenant": "stationaryinc",
    "environment": "test",
    "requestor": 4,
    "item": {},
    "formData": {
      "name": "Jamie"
    }
}
```