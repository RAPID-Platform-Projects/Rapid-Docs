# Creating a New Item

When viewing a [Table](</docs/Rapid/2-User Manual/2-Explorer/1-Tables/1-viewing-data-using-tables/1-viewing-data-using-tables.md>), click on the **+ New (Table Name)** button in the [Command Bar](</docs/Rapid/2-User Manual/glossary/glossary.md#command-bar>). The button will have an icon that matches the **Item** icons in the **Table**.

![A screenshot demonstrating the appearance of the "New X" item button. The button in this example has an icon of two stylised people, and the words "New Employee" as this example takes place inside the Employees table.](<Create Item.png>)

This will open the **Create Screen** panel, which will prompt you to enter data and to create the item. Your system administrator may disable some fields from being visible on the Create Screen.

The **+ Create** button will create the **Item** and return you to the **Table**. The **Create and Open** button will create the item, and open that item in your browser.

![A screenshot of the Create Screen Panel. The Rapid site will become blurred, and the side panel will open. At the top of the panel are the words "New Employee", as this example takes place on the "Employees" table. Underneath the title are two buttons: "+ Create" and "Create and Open". Below this are several fields for the user to enter data. In this example, these fields are "Name", "Date of Birth", "Email Address" and then a grey field titled "Name and Email".](<Create Screen.png>)

> Note that some fields may also be visible, but displayed. This is indicated by fields that have a grey background. In this example, the "Name and Email" field is a [**Subquery**](</docs/Rapid/2-User Manual/2-Explorer/2-Items/1-items-overview/1-items-overview.md#columns-and-fields>) field, so it cannot be edited by a user.

## Creating a New Sub-type of Items

If you are viewing a table that has subtypes, your system administrator may have created additional buttons to create items. For example, in the Rapid Standard Assets Module, there are several "New X Asset"
 buttons that will each create a different subtype of item on the same table. To learn more about this, visit the following link: 


## Cloning an Item

It is also possible to "clone" an item. When an item is cloned, Rapid will open the **Create Screen**, and copy across the data from the current item, to the new item. This enables you to quickly build similar items without having to enter data multiple times.

For example, if your company owned two vehicles that were the same Make, Model, and Year, you could use the clone tool to copy this information and reduce the time spent entering data.

To clone an item:

1. Open an **Item** in [Explorer](</docs/Rapid/2-User Manual/2-Explorer/0-navigating-explorer/0-navigating-explorer.md>)

2. Find the **Clone** button in the [Jumbotron](</docs/Rapid/2-User Manual/2-Explorer/0-navigating-explorer/0-navigating-explorer.md#jumbotron>) at the top of the site. This button will only be visible when you are viewing an Item Page.

![A screenshot that highlights the location of the clone button. The clone button is at the top of the site, and the screenshot is annotated with a red square to highlight the button. The button's icon resembles two blank pages stacked atop each other. To the right of the Clone button is the Designer Button, then the Launchpad Notifications Bell, the User Coin, and the Rapido Chatbot Button.](<Clone Item.png>)

3. The data from the original item has now been copied across to the fields in the **Create Screen Panel**.

![Alt text](<Item Clone Create Screen.png>)

4. Press the **Create** or **Create and Open** button to create the Item. Alternatively, you can press the **Undo Changes** if you do not wish to cancel.

## Creating items in context

When viewing an item you can have a page component that shows another set of items; typically the Table, Board and Gantt components. Each of these allow for the creation of new items within the context of the current item.

For example, when viewing a Project and navigating to a Tasks tab you can create see the associated tasks for that Project and create new ones. Creating a task here would be creating a new Task in the context of the Project.

![Tasks tab on a project showing some tasks and a create button](<Create Task in Context.png>)
 
When creating an item in context Rapid will automatically attempt to create a link between the new item and the context item. This will allow the newly created item to be displayed in that context.

Creating the link follows two rules:
1)	If the new item has any lookups that can point to the context, populate each of those lookups with the context item; otherwise
2)	Create a new universal link between the new item and context item

Notably multi-lookups will not be regarded when generating this new automatic link.

There is a special case that is not immediately obvious, all items have a Parent lookup that targets their own kind. Thus the Parent lookup will always be used when making items within the same context, for example a child task within a parent task.
