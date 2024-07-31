# Items

First, let's navigate to the **Employees** table in Rapid Business. 

1. Navigate to the Assets page by clicking on **Human Resources** &gt; **Employees** in the *Explorer* side bar. Alternatively, your site may contain an **Organisation** folder at the top of the *Sidebar* that also contains a link to the **Employees** page.

    ![A screenshot of the user navigating the the "Employees" table via the "Organisation" folder in the Sidebar. The screenshot is annotated with two red boxes to indicate where the user would need to click in order to navigate to this table.](<Navigate to Employees.png>)

2. You will see the **Employees** table here. Your table may not contain any items yet, but we will discuss how to add items to a table in just a moment.

    ![A screenshot that provides an example table as described above. It is titled "Employees" and contains three columns: Name, DOB, and Email. The table contains some example data, where a fake name, DOB, and Email have been filled in. It is annotated in red. Three red boxes show that each item in a table resembles a row, and each piece of data resembles a column. The three example items are labelled: item 1, item 2, item 3, to help indicate that they are all separate entities.](<Items Example Rows.png>)

## Creating Items

1. When viewing a table, you will be able to click the **New X** button, where **X** is the name of the item you will be creating. Since we are on the **Employees** table, we will be creating a new employee item.

2. After you click on **New Employee**, a side panel will open where you can enter the relevant data for this new item. (To maintain good bookkeeping practices, it is recommended to enter as much information as possible).

    ![A screenshot of the "Create Employee" side panel. It contains data such as: First Name, Last Name, Personal Email, Status, Start Date, Finish Date, Department, Direct Manager, Role, Mobile Phone, Work Email, and DOB.](<Create Employee.png>)

3. Once you have entered your data, click on **Create**

## Editing Items

There are several ways to open an item to view or edit it.

| Method | Example | Description |
| --- | --- | --- |
| *Clicking the Icon* | ![A screenshot that shows how the user can click on the icon of an item to open it.](<Items Example Click Icon.png>) | We can click on the item's **icon**. This is a small image on the far left side of the item row. The icon will become underlined, and your mouse cursor will change to a hand to indicate that this is a hyperlink to another webpage. |
| *Clicking the Title Column* | ![A screenshot that shows how the user can click on the title of an item to open it.](<Items Example Click Title.png>) | We can also press the **title column** of the item. The **title** of an item is emboldened, and an underline will appear when your mouse hovers over it. | 
|*Double-Clicking on the Row* | ![A screenshot that shows how the user can click anywhere on the row of an item in order to open it.](<Items Example Click Row.png>) | Alternatively, you can double-click anywhere on an item's row, and the item will open. The item's row will become highlighted in light grey when your mouse hovers over it. |

### Editing Fields on an Item's Page

Note in the screenshot below that once we open an item, the item's data is no longer arranged as columns. This is called the **Item Page**, and it is the main method for users to edit data on an item. 

![A screenshot that shows the item row that was opened, now in the page view.](<Items Example Fields.png>)

You will notice that the Columns we created (*Name*, *DOB*, and *Email*) have changed appearance. These boxes, where data can be typed or entered, are called **Fields**. All columns created by your system administrator can appear as a **Field**.

This is also where any fields that may have been hidden from view in the table can be viewed and edited.

## Saving Changes
Any changes made to an item will need to be saved before they will take effect. To save the changes to an item, press the **Save** button, or the **Save and Close** button in the [Command Bar](</docs/Rapid/User%20Manual/glossary/#command-bar>).

![A screenshot that shows the location of the "Save" and "Save and Close" buttons in the Command Bar. The buttons are annotated with a red box to show their location more clearly. The "Save" button has an icon of a Floppy Disk, and the "Save and Close" icon is stylised as a Floppy Disc, with an arrow pointing into a folder.](<Items Save.png>)

Your system administrator can also ensure that certain menu actions will prompt you to save your changes before you are navigated to a different page.

## Deleting Items

### Avoiding Deleting Where Possible

Often, you should avoid deleting items. For example, if you had a employee leave the company, it might be tempting to delete their item from the **Employees** table. However, this can cause problems:

- Other items (such as the projects the employee was working on) might be linked to that employee via Lookup Fields, or Linked Items. Those projects will now have no employee assigned to them.
- If payroll needs to contact a past employee, this will be difficult if their item is deleted.

Instead of deleting an item, you could ask your System Administrator to ensure that the relevant item contains a *Status* column. Here, you can set the item from *Active* to *Inactive*. 

### Deleting Items via Tables

1. Open a [Table](</docs/Rapid/User%20Manual/Explorer/Tables/viewing-data-using-tables/>) in [Explorer](</docs/Rapid/User%20Manual/Explorer/navigating-explorer/>).
2. Select the item or items that you wish to delete
3. In the *Command Bar*, note that the red button labelled **Delete X** has appeared.
4. Press **Delete**.

    ![A screenshot that demonstrates how to delete items via a table. In this example, the table is an Employees table. The screenshot is annotated in red, with two red boxes indicating where the user should click, and an arrow between them indicating the order that they should be pressed. In this example, the user has selected the Employee item: "Wanda Jones", and will now click the red button that says "Delete 1 Employee" the red button also has a red icon of a trash can.](<Items Deleting.png>)

### Deleting Items via Pages

1. Open the item
2. In the *Command Bar*, note that the red button labelled **Delete** is present.

    ![A screenshot showing how the Delete button appears on a page view of an item. The screenshot has been annotated with a red box to highlight the button's location. The delete button has red text that reads "Delete" and a red icon of a trash can. The rest of the screenshot is an example Employee page.](<Items Deleting Page.png>)

## Linking Items Together

It is possible to link an item to other items. For example, instead of typing in the name of our employee's manager, it would be better if we could link this employee item to another employee who is their direct manager.

There are several methods for doing this, but for today we will just look at one method: the lookup field.

![A screenshot that shows the location of the field and chevron button. This screenshot is annotated with a red box to indicate the location of the button. The chevron indicates that this field will open a drop-down panel.](<User Field Click.png>)

We can click on the *Direct Manager* lookup field to change this employee's manager, or we can delete any data in this field, so this employee no longer has a manager.

![A screenshot that demonstrates the appearance of the drop-down panel from a User Field or Lookup Field. There is a search bar at the top of the component. Below it is a list of employees. At the bottom is a "+ New Employee" button and a "X Clear" button. The right-hand side of the component is titled "Employee Views". It contains three views such as: "All", "Archived" and "Main".](<User Field Dropdown.png>)

Notice that this lookup panel which opens is just a simplified way of displaying the employee table? I can search for an employee, select them, and then the field will display that employee's name here.

![A screenshot of the "Direct Manager" field, now with data entered. The field now has the name "Stacey Queen" inside the field. Beside the name is an x for removing the data, a box with an arrow for "going to" the linked item, and a downwards chevron for opening the menu again.](<User Field Filled.png>)

On the right-hand side, you can see the table views which allow us to filter our data, and the search bar to search for a particular employee.

So, the lookup component is like a tunnel or a portal into another table, and we can connect two items on different tables using this component.

What if I haven’t created the Employee yet, and I need to link to them? Well, the lookup field allows us to create new items by clicking on the field, and then pressing “New Employee”.

![A screenshot of a portion of the lookup field. The screenshot is annotated with a red box to highlight the location and appearance of the "+ New Employee" button.](<User Field New Employee.png>)

Finally, I can also click this “go to” button, which will take me to the item page for the manager.

![This is the same field as before. The screenshot is now annotated with ar ed box to highlight the location of the "go to" button on the lookup field.](<User Field Goto.png>)

## Further Reading
- There is exhaustive documentation on items and how they work in the [User Manual](</docs/Rapid/User%20Manual/Explorer/Items/items-overview/>)