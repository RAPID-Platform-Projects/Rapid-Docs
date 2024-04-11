# Item-Level Permissions

Each item in Rapid Platform can have unique user permissions. This means on a per-item basis, you can select who is allowed to **Read**, **Write**, or **Delete** an item. Note that if you wish to [set default permissions for all items in a table](</docs/Rapid/3-User Manual/2-Explorer/1-Tables/6-permissions/6-permissions.md>), this is also possible.

## Permissions Panel

### Viewing Permissions

To view the permissions on an individual item, first open the item in [Explorer](</docs/Rapid/3-User Manual/2-Explorer/0-navigating-explorer/0-navigating-explorer.md>). In the [Command Bar](</docs/Rapid/3-User Manual/glossary/glossary.md#command-bar>), press the **Edit Permissions** button. The **Edit Permissions** button has an icon of a housekey.

![A screenshot that shows the location and appearance of the Edit Permissions button. To access an item's permission, open the item in Explorer. The Permissions button is in the top right-hand corner of the site, in the Command Bar. The button is stylised as a housekey.](<Permissions Access Button.png>)

The permissions panel will appear as an overlay panel.

![A screenshot that shows the appearance of the permissions panel. The permissions panel in this example has the prompt "Manage Permissions" at the top. Below it is a label that describes which item is having its permissions edited, in this example, the item is "Policy 21 - AI Generation Policy". Below this is a section titled "User or Group". There are three groups in the list. The "Projects Team" has Read access only enabled. The "Workplace Health & Safety Team" also only has Read access. Finally, the "Policies" team has Read, Write, and Delete access enabled. The permission access is granted by clicking a checkbox, which is filled with a black background and a checkmark when the permission is granted. At the bottom of the panel is a searchbar for finding additional users or groups. There is also a Save button with a black background. To the right of the save button is the "Save and Synchronise" button on a white background. In the far bottom right of the panel is a white button that reads "Cancel".](<Permissions Panel.png>)

The permissions panel has the following attributes and functionality:

| Attribute | Description | Screenshot |
|---|---|---|
| *Label* | At the top of the panel, the name of the item whose permissions are being edited is written, along with its item id number. In this example, the label reads: 'Policy 21 - AI Generation Policy' |![A screenshot that shows the location of the *Label* on the Permissions Panel. The screenshot is annotated with a red box that highlights the *label*'s location.](<Permissions Label.png>)|
| *User or Group Permissions* | Here, the user can delete a user or group from a policy, by using the cancel (**X**) button to the right of the user's coin. Each user or group has a coloured coin with the initials of the group or user in white. It also has a string of text that describes which user or group is attached to the item's permission list. At the righthand side of this component is the Read/Write/Delete checkboxes. |![A screenshot that shows the location of the *User or Group Permissions* section on the Permissions Panel. The screenshot is annotated with a red box that highlights the *section*'s location.](<Permissions Users Groups.png>)|
| *Read / Write / Delete* | This is a matrix of checkboxes. Each item row can have the permission to Read, Write, and/or Delete set individually. |![A screenshot that shows the location of the *Read, Write, and Delete matrix* on the Permissions Panel. The screenshot is annotated with a red box that highlights the *matrix*'s location.](<Permissions RWD Matrix.png>)|
| *Add User or Group* | This searchbar allows you to search for a User or Group and add them to the item's permissions. You can find a User or Group by typing their name into the searchbar. At the time of writing, this searchbar is *Case Sensititve*.|![A screenshot that shows the location of the *Add User or Group searchbar* on the Permissions Panel. The screenshot is annotated with a red box that highlights the *searchbar*'s location.](<Permissions Users Groups.png>)|
| *Save* | This button saves changes to the item's permissions |![A screenshot that shows the location of the *Save button* on the Permissions Panel. The screenshot is annotated with a red box that highlights the *buttons*'s location.](<Permissions Save.png>)|
| *Save and Synchronise* | This button saves changes to the item's permissions. It also synchronises these changes to **all** items that are linked to this item. |![A screenshot that shows the location of the *Save and Synchronise button* on the Permissions Panel. The screenshot is annotated with a red box that highlights the *buttons*'s location.](<Permissions Synchronise.png>)|
| *Cancel* | A button that allows you to undo any changes made to permissions without saving. |![A screenshot that shows the location of the *Cancel button* on the Permissions Panel. The screenshot is annotated with a red box that highlights the *buttons*'s location.](<Permissions Cancel.png>)|

> **Caution:** The **Save and Synchronise** button will change permissions for all tasks, notes, and items that are linked to the current item. This can often lead to unintended consequences, such as certain users losing access to tasks, notes, and items that they require access to.

### Permission Levels

![A screenshot that shows a zoomed-in view of the Read, Write and Delete checkboxes arranged in a matrix. The purpose of this image is to help the read quickly identify that this section of the article will discuss the meaning of these three permission levels.](<Permissions RWD.png>)

There are several levels of permission that can be granted to a user or a group of users.

| Level | Description |
|---|---|
| Read | The user is allowed to read items from the table. |
| Write | The user is able to create and edit items in the table. |
| Delete | The user is permitted to delete items from the table. |

> Each of these levels can be set separately. For example, you may choose to grant a user Read and Write access, but not Delete access.

The lowest level of permission is "None", where a user does not have Read, Write, or Delete access. The highest level of permission is when a user is able to Read, Write, and Delete data.