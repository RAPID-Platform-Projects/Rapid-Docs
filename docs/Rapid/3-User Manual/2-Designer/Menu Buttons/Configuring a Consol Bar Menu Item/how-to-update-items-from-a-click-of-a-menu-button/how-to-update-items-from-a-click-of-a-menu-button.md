# How to update items from a click of a Menu button?

This is configurable only on the ***[Command Bar](https://docs.rapidplatform.com/books/glossary/page/command-bar)*** menu type.

#### Overview

There may be occasions when in a data table you would need to update an item *or* maybe update items in bulk from the list view.

For example - updating the status of tasks as complete with a click of a menu button.

#### How to configure an "Update Items" menu button

1. Navigate to Designer &gt; Tables &gt; All Tables  
    ![Navigate to the All Tables page](<Navigate to the All Tables page.png>)
2. Open your desired table. (Find your desired table by using the search bar or scrolling through the list)  
    ![Open desired Table](<Open desired table.png>)
3. Navigate to the 'Menu' Tab  
    ![Open the 'Menu' Tab](<Navigate to the menu tab.png>)
4. Click on the **New Blank Item Drop down** then on **New Blank Item** ![Create a new Menu item](<Create a new blank menu item.png>)
5. Choose a name and icon  
    ![Choose a name and icon](<Choose a name and icon.png>)
6. Choose **Update Items** as the On-Click Action  
    *Image of 'update items' selected on anew menu item config
7. Select the form you wish to dropdown when the menu button is clicked  
    ![image-1702273809498.png](./downloaded_image_1705285733416.png)
8. Press Save  
    ![image-1702273827649.png](./downloaded_image_1705285734437.png)

#### Additional Details:

As we can observe, the Update Items On-Click Action has one additional field.

- **Select form -** This is the dropdown field. The dropdown will contain the titles of all the existing forms created in Rapid's Adaptive Designer. You can select the desired form by clicking on the title. The selected form will update item(s) based on user inputs provided in the selected form.

This On-Click Action, basically executes an Adaptive Document. The user can input information which can be updated to the table.

**Please note:** if you wish to update a specific table data from the menu button, please make sure that in the Adaptive Document, the connections to the table and columns are appropriately made.

**Updating Items in bulk:**

Now that the menu button is configured, makes it simple to update many items in bulks. Simply select the multiple items, press the menu button, fill in the field and press "OK". In image below the user wants to update the name of all three selected items to be the same.

![image-1701914296870.png](./downloaded_image_1705285735454.png)

![image-1701914334147.png](./downloaded_image_1705285736468.png)

[Go back to ***On-Click Actions*** learning resource](https://docs.rapidplatform.com/books/experiences/page/how-to-set-on-click-action-for-a-menu-item "How to set On-Click Action for a menu item?")