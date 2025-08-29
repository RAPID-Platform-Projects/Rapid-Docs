# Pages

**Pages** are a fundamental concept in Rapid Platform. A **Page** in Explorer hosts components and displays information as configured in **Designer**. Every component needs a Page on which it can be hosted. **Pages** enable adding, editing, and viewing data based on the nature of the components hosted on it.​

Pages can host groups of items, or display information regarding a single item.

- **List page** – This is a page that hosts the information about a list of items from a table.  
- **Single item page** – These pages host information about unique items in the Rapid database. These types of pages may include an item *Details* page, *Activity* page, *Files* page, *Tasks* page, or other custom pages.

## Accessing a List Page​ in Explorer

1. Click on the **Explorer** button in the bottom left corner of the site.

![A screenshot that shows the appearance and location of the Explorer button in the Sidebar. The screenshot is annotated with a red box and arrow to highlight the location of the Explorer button. The Explorer button is at the bottom of the sidebar: a navy-coloured rectangle that contains the Rapid logo at the top, then a list of tables and folders in the middle, and finally the navigation buttons at the bottom. The Explorer button has an icon that resembles a house.](<Explorer Sidebar Context.png>)

:::note[Selected Experience]
The background of the button will turn white to indicate which experience is currently selected (in this case, Explorer).
:::

2. Select the table title from the **Sidebar** menu.​ *(In this example, we will navigate to the **Service Logs** table, underneath the **Assets** folder).*

![A screenshot of the user navigating to a list page using the sidebar. In this example, the user has selected the "Assets" folder and then the "Service Logs" page. Both menu items that have been selected contain a white background. The Assets folder contains an icon of a box with confetti coming out of it. This folder opens a sidepanel that contains several page items. The user's mouse is hovering over the "Service Logs" page, which has an icon of a wrench and a screwdriver.](<Explorer Sidebar Selection.png>)

3. Once a table has been selected from the **Sidebar**, Rapid will display a List page to present the table's items.

![A screenshot that shows the appearance and location of a list page in Explorer. The screenshot is annotated with a red box to highlight its location. There is a sidebar on the lefthand side, and the title of the page reads "Service Logs". Underneath is a page that contains the Data Table component.](<Explorer Page Area.png>)

:::note [Please note]
The area marked in red denotes a page. This page is hosting a [Data Table](</docs/Rapid/2-User Manual/2-Explorer/3-Pages/2-Page Components/Data Table/Data Table.md>) component, which displays all of the items contained in a specific table. In this example, the data table is displaying all of the Service Logs. The **List Page** can be configured via **Designer** to host other page components as well.
:::

![An example Data Table titled "Service Logs". This is a zoomed-in view of the previous image, focusing on the Data Table element. The Data Table component contains a Command Strip where buttons are located, such as the "New Service Log", "Generate CSV", "Select View Filter" drop down menu, as well as the "Edit View Headers" button, "Inline Refresh" button, and "Edit View" button. The page component also contains a search filter, for filtering the items displayed. Below this is the headers for each column in the database, and then a list of several service log items.](<Data Table Example.png>)

- You can read more about the [**Data Table** component here](</docs/Rapid/2-User Manual/2-Explorer/3-Pages/2-Page Components/Data Table/Data Table.md>)
- You can also learn more about [how to view data within **Data Tables**](</docs/Rapid/2-User Manual/2-Explorer/1-Tables/1-viewing-data-using-tables/1-viewing-data-using-tables.md>)

## Accessing a Single Item Page

Pages can also display data for a single Rapid database item. To navigate to a single item page from the list page by clicking on either the title of the item, its icon, or double-clicking anywhere on the row of the item.

![A screenshot of a single item in a Rapid Data Table. The screenshot is annotated with a red box to highlight the appearance of a single item.](<Data Table Item Example.png>)

> **Above:** A single item in a **Data Table**

:::note[Page Tabs]
Rapid items can contain a multiple pages. If several pages are connected to a Rapid item, they will appear in the Tab Strip. Here, you can switch between multiple *Single Item Pages*, which contain data about the current item selected.
- [Pages can be configured in **Designer**](</docs/Rapid/3-Keyper Manual/2-Designer/2-Pages/1-all-about-pages-in-designer.md>).
:::

There are four default pages in an item. These are:

1. Details Page
2. Activity
3. Files
4. Tasks

:::note[Please note]
The **Tasks** item page may not appear on certain items' tab strips. This is because the **Tasks** page is set to inactive by default. Your system builder can enable the Tasks page for items in **Designer**.

- [Custom pages can be created in Designer](</docs/Rapid/3-Keyper Manual/2-Designer/2-Pages/1-all-about-pages-in-designer.md>) and linked to items.
:::

## Details Page

The **Details** page can be configured to display information about the database item. In the example below, the page renders data regarding a **Service Log's**: *Asset*, *Service Date* and who the asset was *Serviced By*.

![A screenshot that shows an example details page. The screenshot is annotated with a red box to highlight that the "Details" tab of the page has been selected. Underneath the Details tab is a page layout that contains a typical command bar, and the "Service Details" for a Service Log. The fields underneath the "Service Details" label are: "Asset", "Service Date", and "Serviced By".](<Details Page.png>)

Usually, the **Details** page will host a [Form Component](</docs/Rapid/3-Keyper Manual/2-Designer/2-Pages/3-Components/form/form.md>). However, other components may be placed on a page as well. The [Command Bar](</docs/Rapid/2-User Manual/glossary/glossary.md#command-bar>) on an item contains several useful buttons such as **Save**, **Save and Close**, **Delete**, etc.

You can learn more about the functionality of the **Details** page, and:
- [The Command Bar](</docs/Rapid/2-User Manual/2-Explorer/2-Items/2-items-editing/2-items-editing.md#saving-changes>)
- [Item History](</docs/Rapid/2-User Manual/2-Explorer/2-Items/4-item-history/4-item-history.md>)
- [Item Permissions](</docs/Rapid/2-User Manual/2-Explorer/2-Items/5-item-permissions/5-item-permissions.md>)
- [Linked Items](</docs/Rapid/2-User Manual/2-Explorer/2-Items/6-items-linked/6-items-linked.md>)
- [Deleting Items](</docs/Rapid/2-User Manual/2-Explorer/2-Items/7-items-deleting/7-items-deleting.md>)

## Activity Page

The **Activity** page hosts the [Activity Feed Component](</docs/Rapid/2-User Manual/2-Explorer/3-Pages/2-Page Components/Activity Feed/Activity Feed.md>). This page displays the ledger of item creation and lists all the changes that the item has gone through, with respective timestamps and other details.

![A screenshot of the Activities page for an item. The screenshot is annotated with a red box to highlight that the "Activity" tab is currently selected. Underneath the tab strip is the label "Service Log Timeline". In this example, there is only one entry in the timeline which reads "Admin created this Service Log" and an example date and time that this occurred. At the bottom of the "Activity" page is a textbox where the user can type a message or reminder.](<Activity Page.png>)

## Files Page

Files page allows a user to attach relevant folder(s) and/or file(s) to an item. 

![A screenshot of the "Files" item page as it appears in Explorer. The screenshot is annotated with two red boxes to assist the viewer in locating the location of the file browser page. In the upper portion of the screen, the user has selected the "Files" tab of an item. In this example, the item is a Project titled "Office Building Construction". Underneath is the Command Bar, and below it is the File Browser component. The Browser component is similar to how files appear in Windows File Explorer: each file is placed in a row. In the "Name" column, the projects are labelled as: "Project Scope - 26-03-2024.docx" "Project Scope - 26-03-2024.pdf" and "Project Scope.docx". The next column has a "download" button for each file. The icon of the download button is a cloud, with an arrow pointing downwards. The next column states when files were modified. The column afterwards states who modified the file. The final column lists the size of the files.](<File Browser Example.png>)

By default, this page hosts two components:
1. [The **File Browser** component](</docs/Rapid/2-User Manual/2-Explorer/3-Pages/2-Page Components/File Browser/1-File-Browser/1-File-Browser.md>)
2. [The **File Preview** component](</docs/Rapid/2-User Manual/2-Explorer/3-Pages/2-Page Components/File Preview/File Preview.md>)

The **Files** page allows you to:

- Add a new Folder​  
- Upload files​ to the existing folder  
- Download files​  
- Preview the selected files​
- Renaming files
- Emailing selected files
- Deleting files
- Opening files in Sharepoint

## Pages can be Refreshed

If the data within in a page is updated (e.g. by another user, or by an automated process), the page will need to be refreshed for that data to become visible. Refreshing the entire page is not desirable as you may need to reauthenticate, which will take time.

Rapid Platform includes an *Inline Refresh* button, that allows you to refresh all the items in a page. The *Inline Refresh* is located in the [Command Bar](</docs/Rapid/2-User Manual/glossary/glossary.md#command-bar>), and has an icon that resembles a clockwise arrow.

![A screenshot that shows the appearance of the inline refresh button. The screenshot is annotated with a red box. The inline refresh button has an icon that resembles a clockwise arrow.](<Page Refresh.png>)

## Page Permissions

The permissions for a page can be set. This will authorise or prevent access to a specific page. The access permissions can be set for either users or user groups. The *Permissions* is located in the [Command Bar](</docs/Rapid/2-User Manual/glossary/glossary.md#command-bar>), and has an icon that resembles a house key.

![A screenshot that shows the appearance of the inline refresh button. The screenshot is annotated with a red box. The inline refresh button has an icon that resembles a clockwise arrow.](<Page Permissions Button.png>)

You can read about [Item Permissions](<docs/Rapid/2-User Manual/2-Explorer/2-Items/5-item-permissions/5-item-permissions.md>) and how to set *Read*, *Write* and *Delete* permissions.
