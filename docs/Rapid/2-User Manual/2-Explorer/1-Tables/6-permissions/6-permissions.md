# Access Permissions

Each table in Rapid Platform can have unique user permissions. This means on a per-table basis, you can select who is allowed to **Read**, **Write**, or **Delete** the items within a table. Note that if you wish to [only set permissions for a single item](</docs/Rapid/2-User Manual/2-Explorer/2-Items/5-item-permissions/5-item-permissions.md>), this is also possible.

## Opening the Permissions Panel

To edit the permissions on a table, you must view the table in the [Designer](</docs/Rapid/2-User Manual/3-Designer/1-what-is-designer/1-what-is-designer.md>) application. To do this you can either:
1. Open the table using [Explorer](</docs/Rapid/2-User Manual/2-Explorer/0-navigating-explorer/0-navigating-explorer.md>), and then press the [Designer](</docs/Rapid/2-User Manual/3-Designer/1-what-is-designer/1-what-is-designer.md>) button at the top of the site.

![A screenshot that shows the location of the designer button in the context of a table in Explorer. The Designer button at the top of the screenshots is annotated with a red box and red arrow to indicate its location.](<Tables Designer Location.png>)

2. Press the [Designer](</docs/Rapid/2-User Manual/3-Designer/1-what-is-designer/1-what-is-designer.md>) button in the [Sidebar](</docs/Rapid/2-User Manual/glossary/glossary.md#sidebar>), find the name of the table in the list, and open it.

![A screenshot that shows the location of the designer button at the bottom of the sidebar.](<Sidebar Designer.png>)

After the table is opened in [Designer](</docs/Rapid/2-User Manual/3-Designer/1-what-is-designer/1-what-is-designer.md>), open the **Security & Permissions** tab.

![A screenshot that shows the location of the Security & Permissions tab in Designer. This tab allows the user to change the permissions on a particular table.](<Designer Permissions Tab.png>)

## Permissions Page

### Permission Levels

There are several levels of permission that can be granted to a user or a group of users.

| Level | Description |
|---|---|
| Read | The user is allowed to read items from the table. |
| Write | The user is able to create and edit items in the table. |
| Delete | The user is permitted to delete items from the table. |

> Each of these levels can be set separately. For example, you may choose to grant a user Read and Write access, but not Delete access.

The lowest level of permission is "None", where a user does not have Read, Write, or Delete access. The highest level of permission is when a user is able to Read, Write, and Delete data.

### User or Group Permissions

Here, we can set the default permissions for all items inside this Table. At the top of the permissions page is a per-user or per-group permissions component. Here, you can set the Read, Write, and Delete permissions of individual users, or groups of users.

![A screenshot that shows how Read, Write, and Delete permissions can be set for an individual, or an entire group of users.](<Permissions User Group.png>)

In the example above, we are editing the **Policies** table, where the company's policies are stored. We do not want all employees to create new company policies, or delete them. In the example above, the "Human Resources Team" and the users who belong to that group, are given full access to the **Policies** table.

We could also add individuals, such as the CEO, and grant them special access as well.

### Placeholder Permissions

If a user (or the user's group) are not mentioned in the **User or Group** permissions section, their level of access will be determined by the **Placeholder Permissions Manager** which is indicated below.

![A screenshot that shows where the "Placeholder Permissions Manager" section of the Security and Permissions tab is located. The screenshot is annotated with a red box to indicate its location.](<Permissions Placeholder.png>)

In the example above, anyone who does not belong to the "Human Resources Team" will only be allowed to "Read" company policies. They will not be permitted to create new policies, edit existing policies, or delete policies.

It is important to set the **Placeholder Permissions** at the lowest level of access employees will need. This will prevent data from being overwritten or deleted by employees who are not authorised to do so.

## Saving Permissions

After you have set the permissions for a table, ensure you **Save** your changes using the save button in the [Command Bar](</docs/Rapid/2-User Manual/glossary/glossary.md#command-bar>).