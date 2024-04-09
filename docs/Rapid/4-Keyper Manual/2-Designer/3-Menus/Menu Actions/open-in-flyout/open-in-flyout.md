# Open in Fly-out

This is configurable on both the **[Side Bar](</docs/Rapid/3-User Manual/glossary/glossary.md#sidebar>)** and **[Command Bar](</docs/Rapid/3-User Manual/glossary/glossary.md#command-bar>)** menu types.

Till now we have seen several menu buttons that trigger actions on click. However, another important benefit of Menus is to navigate to specific pages upon click. In other words, the ability to configure both sidebar menus and table menus with items that open a specified page.

Using Open in Fly-out you can navigate to a specific page. There are two ways to configure a menu button to **Open in Fly-out.** These are creating a **Link to Table** menu button and create a **Blank** menu button and manually configuring the **Open in Fly-out** option.

## Configuring Link to Table menu button:

The first way is by far the most common way of configuring this on-click action as it is the easiest. In most cases the side bar menus are used to navigate between tables. As such if you want to create link to a specific table follow the steps below:

1. From within Designer navigate to the menu you wish to edit
2. Click New Menu Item
3. Click Link to Table
4. Select the Table
5. Drag and drop the menu button to the desired position in the hierarchy
6. Save

You will notice that this new table will be added to the menu hierarchy and that the configuration is set to Open in Fly-out and the Page ID has already been filled. This menu button now works and if pressed will navigate to the desired table.

![Create menu item linked to table](<Create menu linked to table.png>)

![Observe the menu item is configured for the table selected](<Observe menu item configured for table.png>)

## Configuring Blank Menu Button:

Sometimes you may want to manually enter the **Open in Fly-out** configuration. For example if you want to reference a Page ID that is not the default of a table, where it was created through the Designer Pages section. To do so follow the steps below:

1. From within Designer navigate to the menu you wish to edit
2. Click New Blank Item
3. Drag and drop the menu button to the desired position in the hierarchy
4. Select **Open in Fly-out** from the On-Click Action
5. Enter the Page ID (The Page ID is simply the Page title. See the Pages Manager section of - [All About Pages in Designer](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/1-all-about-pages-in-designer.md) to find out how to access a list of all page titles)
6. Save

![Create new blank menu item](<Create blank menu item.png>)

![Configure the new menu to be linked to the table](<Configure menu to link to table.png>)

## Related article

[Link menu button to a table](/docs/Rapid/4-Keyper%20Manual/2-Designer/3-Menus/3-menu-button-configuration/how-to-link-a-menu-to-a-table/how-to-link-a-menu-to-a-table.md "How to link a menu item to a table?")

[All About Pages in Designer](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/1-all-about-pages-in-designer.md)
