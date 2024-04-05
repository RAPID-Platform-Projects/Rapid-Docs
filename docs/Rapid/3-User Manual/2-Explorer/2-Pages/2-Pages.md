# Introduction to Pages in Explorer

Pages is a fundamental concept in Rapid Platform. A Page in Explorer hosts components and displays information as configured in Designer. Whether it is a Gantt Chart, Counter component, Data Table, Board, or Report etc., every component needs a Page on which it can be hosted. Page enables adding, editing and viewing capabilities based on the nature of components hosted on it.​
​
Arguably, among the most important applications of Explorer, is data management through tables (item list) and individual items. An average system user will most likely interact with Explorer for referring to information in tables.​

Therefore, in this article, we discuss Pages for tables in Explorer.​

​With reference to Pages for tables, there can be two types:​

**List page** – This is the page which hosts the information about the item lists or group of items as configured in Designer.  
  
  ​
**Single item page** – This can be a group of pages which hosts different types of information with reference to a single item of the table, as configured in Designer. The collection of pages may include item details page, activity page, files page, tasks page and other custom created pages.

## How to access a List Page​ in Explorer?

Please consider below steps to navigate to the table list page 

1. Click on Explorer button at the bottom left corner of the screen.
2. Select the table title from the Explorer Sidebar menu.​

​![Image showing List page in Explorer](<Explorer Page 1.png>)

The above image displays the List page for a table titled "Quotes". Observe the marked "PAGE AREA". This is the boundary of the Page and it is hosting the Data Table component. 

To learn more about the Data Table component <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/Explorer/Page%20Components/Data%20Table%20Component/" target="_blank">**click here**</a>.

:::note[Please note]
You may see the List Page showing other components as well. The Explorer Page will display information based on the component's hosted and configured in Designer.
:::

Most likely you will see the Data Table component on the List Page. Following is a brief introduction to various features that you will see on the List Page (because of Data Table component)

Please refer to the image below image and corresponding descriptions:

![Image showing features on List Page](<Explorer Page 2.png>)

:::info[Please note]
The buttons labelled from "a" to "g" in the above image, are the default feature buttons present on the List Page (Data Table component). You may see other menu buttons as configured in Designer for specific actions.
:::

a. New item button (New Quote) - this button allows user to add item to the table.​  
  


b. Search item button (Search Quotes) - this field allows users to search the items list based on the entered keyword.  
  


c. Views selection / creation - this allows user to select an existing View to filter the items list. There is also an option to create new Views for the table here.  
  


d. Edit View button (pencil icon) - this is for editing the appearance of the items list as it is displayed on the List Page. This allows users to resize the column width, move column header from left to right or vice versa.​  
  

e. Refresh button - This button is for refreshing the data in the List page.​  
  


f. Edit View button - This button allows users to modify the parameters of the selected View. ​One can also delete the selected View here.  
  


g. Export selected view as CSV version – by clicking on this button users can export the table list as a .CSV file. This file is downloaded to the local system.  
  


Next let us look at the Single Item Page.

## How to access a Single Item Page​ in Explorer?

![Image showing how to access single item page](<Explorer Page 3.png>)

​You can navigate to single item page from the list page by clicking on either the title of the item or the icon of the item. 

This is how a Single Item Page for a Table item may look like (see image below)

![Image showing Single Item Page](<Explorer Page 4.png>)

:::note[Please Note]
A Single Item Page may have a collection of Pages as seen above. Each Page serves a specific purpose. There are some default pages, which can be configured in Designer.
:::

There are four default pages in the Single Items Page. These are:

1. Item Details Page
2. Activity Page
3. Files Page
4. Tasks Page

![Image showing Single Item Page with labelling to other pages within](<Explorer Page 5.png>)

The above image shows how Single Item Page can host a collection of Pages. Observe that we have the following on the tab strip:

a. Details  
b. Activity  
c. Files  
e. Invoices  

:::note[Please note]
While a, b and c (above) are default pages in the Single Item Page, Tasks does not appear in the list. This is because, in Designer, this default page has been configured as inactive. Therefore, based on need, your system builder can enable / disable default pages in Designer. 

Further, e. is a custom page created and linked to this table. 
Hence, pages can display linked items to the selected item from other tables.
:::

What you see on the Single Item Page is completely configurable in Designer, and can adapt to your business needs.

Here we shall take a brief introduction to the three default pages visible in the above image.

## Details Page (also known as Item Details Page)

This page can be configured to display the information about the item. 

![Image showing Item Details Page](<Explorer Page 6.png>)

Most likely, the Item Details page will host a Form Component. To learn more about the Form Component <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/Explorer/Page%20Components/Form%20Component/" target="_blank">**click here**</a>.

Please note this page may host other components as well. For example the above image shows a Data Table component hosted on this page.  

The Details Page has some default buttons. Let us discuss them (please refer to the image above)

i. Save – this allows user to save the added/edited information.​

ii. Save and Close – this allows user to save and close the Details tab. The user will be redirected to the List page.​

iii. Delete – allows the user to delete the subject item . 

iv. Item history – Here the user can view the history of the previous version of the items. One can revert to an older version and reverse the changes made by selecting the previous versions of the item. To learn more about Item history <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/Explorer/Items/item-history/" target="_blank">**click here**</a>.

v. Refresh button - allows the user to refresh the data on page.​ To learn more about refresh feature <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/Explorer/Items/item-history/" target="_blank">**click here**</a>.

vi. Permissions (key icon) - a user can configure access permissions for other users to this item. For further information on item level permissions, please refer <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/Explorer/Items/permissions/" target="_blank">**this link**</a>.

vii. Link - a user can create links to items of other tables using this button. To learn more about link feature <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/Explorer/Page%20Components/linked-items/" target="_blank">**click here**</a>.​  

Apart from the above buttons, you can also observe other buttons on the <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/glossary/#command-bar" target="_blank">**command bar**</a>.​  These are the menu buttons configured in Designer and are not the part of  default buttons​. For example - viii. Generate Invoice From Quote and ix. Generate Quote PDF (as seen in the image).

## Activity Page

Activity page hosts activity feed component. This page displays the ledger of creation and all the changes that the item has gone through, with respective timestamps and other details. To learn more about activity feed component, <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/Explorer/Page%20Components/Activity%20Feed%20Component/" target="_blank">**click here**</a>.

![Image showing Activity Page](<Explorer Page 7.png>)

## Files Page

Files page allows a user to attach relevant folder(s)/file(s)  to the subject item. 

By default, this page hosts two components:
1. The File Browser component. <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/Explorer/Page%20Components/File%20Browser%20Component/" target="_blank">**Click here to learn more**</a>.
2. The File Preview component. <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/Explorer/Page%20Components/File%20Preview%20Component/" target="_blank">**Click here to learn more**</a>.

![Image showing Files Page](<Explorer Page 8.png>)  

Some prominent features of this Page includes the ability to:

a. Add a new Folder​  
b. Upload files​ to the existing folder  
c. Download files​  
d. Preview the selected files​  
​
Other features include
Rename (selected) file, E-mail (selected) file, Delete file, open in SharePoint window, change folder, share the selected file, and expand preview.


:::note[Please note]
The above description of the Pages is what you will see in most likely situation. However, Rapid Platform​ allows for full customisation of the Pages and hence it is possible that can see other components hosted on Pages.
:::

​