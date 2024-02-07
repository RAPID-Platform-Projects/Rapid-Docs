# The Data Table component

## Data Table component overview

Imagine you are the Project Manager and wish to view the list of all "Active" Projects. This list is possible on the [**Page**](https://docs.rapidplatform.com/books/glossary/page/page-layout-and-component "Page, layout and component") using the Data Table component.

In simple words, a data table component allows you to insert a view of the [**data table**](https://docs.rapidplatform.com/books/glossary/page/data-table "Data Table") to a Page.

Therefore to display a list of items, you need to:

1. Define which table you want the system to refer.
2. Define the [**Table View**](https://docs.rapidplatform.com/books/experiences-oxn/page/data-table-component-views "Data Table Component - Views") you want to set for displaying the Table Data.

## How to set up a Data Table component in Designer

- You can [**add the Data Table component on to the Layout / Page**](https://docs.rapidplatform.com/books/experiences/page/how-to-add-a-component-to-a-layout-page "How to add a component to a Layout / Page?"). The Data Table component is present on the Item Group (Plural) Details breakpoint [**by default**](https://docs.rapidplatform.com/books/experiences/page/how-to-configure-item-details-and-item-creation "How to configure Item Details and Item Creation?"). It is set to the subject Table and All View. 

    ![Data table in component list](<Data table in component list.png>)
- You can Add the Data Table component on both ***Singular Item Details breakpoint Pages*** as well as ***Plural Item Group Details Breakpoint***.
- If the Data Table component is on a Grid Layout, you can [**resize and move the component over the layout**](https://docs.rapidplatform.com/books/experiences/page/how-to-arrange-a-component-on-grid-layout "How to arrange a component on Grid layout?").
- You can set the [**visibility of Data Table on the Details breakpoint**](https://docs.rapidplatform.com/books/experiences/page/how-to-set-a-component-to-be-visible-hidden-on-item-details-and-create-breakpoints "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?").  

    ![Visibility toggle](<../Visiblity toggle.png>)
- You can set the [**visibility of Data Table on the Create Screen breakpoint**](https://docs.rapidplatform.com/books/experiences/page/how-to-set-a-component-to-be-visible-hidden-on-item-details-and-create-breakpoints "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?"). Although, it must be noted that Data Table component on Create Screen does not serve any logical purpose and hence should most likely be turned OFF. 

    ![Display toggle](<../Display toggle.png>)
- As the Data Table component is added to the Layout / Page, it is shown as Red. This indicates the component configuration is missing. 

    ![Data table in unconfigured state](<Data table in unconfigured state.png>)
- You can configure the Data Table component by clicking on the Edit (pencil) icon. 

    ![Configuration panel](<Configuration panel.png>)
- You can select the desired table. 

    ![Selecting a table](<Selecting a table.png>)
- Once the table is selected, you can select the desired View from the list of existing Table Views. Although, the dialogue mentions it is required to select a View, however, if you leave it blank, the system will take the "All" View as default. 

    ![Selecting a default view](<Selecting a default view.png>)
- This is how the Explorer window appears for corresponding Table and View. 
    ![Data table in Explorer example](<Data table in Explorer example.png>)
- You also have four opens that configure the visibility of buttons in command bar. 

    ![Toggle options mapping in Explorer](<Toggle options mapping in Explorer.png>)
- You can disable the Create Item button visibility on Explorer window. 

    ![Disable creation example](<Disable Creation example.png>)
- You can disable the Edit Table View button visibility on Explorer window. 

    ![Disable edit view example](<Disable edit view button.png>)
- You can disable the action menu button(s) visibility on Explorer window. 

    ![Disable menu buttons example](<Disable menu buttons example.png>)
- You can disable the view selection button visibility on Explorer window. 

    ![Disable view selection example](<Disable view selection example.png>)
- After configuring all the fields, you need to press "Save". 

    ![Saving the configuration](<Saving the configuration.png>)

**Please note:**

- The first option in the list of Table Views is a blank option. If you select the same, the system selects the "All" View.

    ![Blank default views default](<Blank default views default.png>)
- The Data Table component can be set up for both Individual Item level (Singular) or Item group level (Plural). However, for Singular Item Details, it will show only the linked items in the list. For example: Let us assume you are on a Data Table - Projects. You have added a Data Table component on the Singular Item Details Page. You have configured it to Table - Project Meetings. In Explorer, when you select a Project Item and open its Details Page, only the Project Meetings linked to the select Project Item will be shown.
- Do not forget to hit the "Save" button for the changes made in the Page to take effect. 

    ![Save the page to save the configuration](<Save the page to save the configuration.png>)

## Related articles

[**Form component**](https://docs.rapidplatform.com/books/experiences/page/what-is-a-form-component-on-a-layout-page "What is a Form Component on a Layout / Page?")

[**Activity Feed component**](https://docs.rapidplatform.com/books/experiences/page/what-is-an-activity-feed-component-on-a-layout-page "What is an Activity Feed component on a Layout / Page?")
