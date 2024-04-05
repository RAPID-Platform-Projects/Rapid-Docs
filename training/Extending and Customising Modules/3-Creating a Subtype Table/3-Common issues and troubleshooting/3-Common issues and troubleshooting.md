# Common issues and troubleshooting

### Editing the sidebar
1.	Although the Coffee Machine appears in the sidebar, this does not match the other asset tables. It looks strange where it currently sits, at the bottom of the sidebar. Since we’re going to redesign the sidebar, we’ll need to go back into **Designer**.

2. Use the documentation linked below to delete the menu button for **Coffee Machine Assets** from the sidebar:

    - <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/Keyper%20Manual/Designer/Menus/" target="_blank">How to edit and navigate to menus in **Designer**</a>
    - <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/Keyper%20Manual/Designer/Menus/menu-button-configuration/how-to-crud-a-menu-item/" target="_blank">How to **delete** a Menu item</a>

3. Return to **Explorer**.
4. Open the **Assets** table from the sidebar. Notice that the other asset subtype tables (**IT Assets** and **Vehicle Assets**) are displayed as tabs along the tab strip at the top. Let's add our new table to this tab strip.

    - <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/Keyper%20Manual/Designer/Pages/Layouts/list-of-available-layouts/#tab-strip" target="_blank">How to add a new tab to the Tab Strip</a>

### Building the Create and Details Layout for a Table
You might also notice that if we try to create a new Coffee Machine Asset, the Create sidebar is empty. We need to configure the layout of this section for the table to be able to accept new data.

In this section, we will build a way to create new **Coffee Machine Asset** items, and edit their details.

1. Open the **Coffee Machine Assets** table in **Designer**, and then navigate to the **Design** tab.
2. Read the following documentation

    - <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/Keyper%20Manual/Designer/Pages/all-about-pages-in-designer#design-tab-of-table-in-designer" target="_blank">How to create pages in **Designer**</a>

3. Add the columns to the form that you believe are relevant for tracking a Coffee Machine. Once you are satifisied with the columns selected, click **Add to Form**.

4. Make sure you save your changes.

5. Ensure that the **Create Screen** layout is also configured.

6. Make sure you save your changes.

7. Now, if we view the **Coffee Machine Assets** table in **Explorer**, we can see that now when we create a Coffee Machine, we are able to enter data. And, when we open a Coffee Machine item, we can edit all the fields that we added to the form.