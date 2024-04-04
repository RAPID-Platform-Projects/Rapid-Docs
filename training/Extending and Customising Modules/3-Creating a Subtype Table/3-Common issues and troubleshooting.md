# Common issues and troubleshooting

### Editing the sidebar
1.	Although the Coffee Machine appears in the sidebar, this does not match the other asset tables. It looks strange where it currently sits, at the bottom of the sidebar. Since we’re going to redesign the sidebar, we’ll need to go back into **Designer**.

2. Use the documentation linked below to delete the menu button for **Coffee Machine Assets** from the sidebar:

    - <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/Keyper%20Manual/Designer/Menus/" target="_blank">How to edit and navigate to menus in **Designer**</a>
    - <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/Keyper%20Manual/Designer/Menus/menu-button-configuration/how-to-crud-a-menu-item/" target="_blank">How to **delete** a Menu item</a>

3. Return to **Explorer**.
4. Open the **Assets** table from the sidebar. Notice that the other asset subtype tables (**IT Assets** and **Vehicle Assets**) are displayed as tabs along the tab strip at the top. Let's add our new table to this tab strip.

    - <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/Keyper%20Manual/Designer/Pages/Layouts/list-of-available-layouts/" target="_blank">How to add a new tab to the tab strip</a>

### Creating a form that connects to a table
1.	Let’s build a way to CREATE new Coffee Machines and EDIT their details. We go up to the DESIGNER button in the top right. Then, we make sure the drop-down is set to “COFFEE MACHINE”, singular, and that this display area says FORM.
2.	Rapid Standard gives us this helpful blue button that says, “Add all Coffee Machines columns…”. There’s also a Configure button underneath it, which allows you to choose just the fields you are interested in. Let’s press the configure button. Here, I’ll choose the fields I think are most relevant for a Coffee Machine. Once I’m done, I’ll click “Add to Form.”
3.	Let’s now configure what will appear when we create a COFFEE MACHINE. We do this by pressing the “Create Screen” button here. Just like before, we will configure and choose the fields that we want the user to see and enter information into.
4.	We can drag the layout around and prioritise the information that is most important to *Stationery Inc.* at the top, and less important information below it. By hovering over and of the fields that we have added, a list of options will appear. The most important option here is the MANDATORY button, which has an asterisk icon. The MANDATORY button will make it so that a new COFFEE MACHINE cannot be added without this field being added. For example, we might make the SERIAL NUMBER of the machine mandatory, so the same machine cannot be entered multiple times into the database.
5.	We need to make sure that we save our changes.
6.	Now, if we click on the explorer button in the top right corner of the page, we can see that now when we create a COFFEE MACHINE, we are able to enter data. And, when we open a COFFEE MACHINE item by double-clicking on it, we can edit all the fields that we added to the form.

[Link to docs]()