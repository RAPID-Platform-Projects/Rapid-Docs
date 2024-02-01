# What is a PowerBI Report component on a Layout / Page?

## **What is a PowerBi Report component?**

Imagine a Project Manager has described the need to view the Project Tasks statuses on a real-time basis. The requirement is to have the ability to slice and dice the data across defined parameters and view a snapshot of it in real-time.

This can be achieved through the PowerBi Report component.

Rapid Platform has the ability to seamlessly connect with Microsoft Power BI application. A workspace can be created for each Rapid Site and reports can be created in the same. These reports can be displayed and actioned in the Rapid Site environment.

The PowerBi Report component provides a easy method to integrate and access PowerBi reports onto a Page.

## **How to set up PowerBi Report component in Designer?**

- You can **[add the PowerBi Report component on to the Layout / Page](https://docs.rapidplatform.com/books/experiences/page/how-to-add-a-component-to-a-layout-page "How to add a component to a Layout / Page?")**. The PowerBi Report component is not present anywhere by default.   
    
    ![Component list](<Component list.png>)

- If the PowerBi Report component is on a Grid Layout, you can **[resize and move the component over the layout](https://docs.rapidplatform.com/books/experiences/page/how-to-arrange-a-component-on-grid-layout "How to arrange a component on Grid layout?").**

- You can set the **[visibility of PowerBi Report on the Details breakpoint](https://docs.rapidplatform.com/books/experiences/page/how-to-set-a-component-to-be-visible-hidden-on-item-details-and-create-breakpoints "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?").   
    
    ![Visibility toggle](<../Visiblity toggle.png>)

- You can set the **[visibility of PowerBi Report on the Create Screen breakpoint](https://docs.rapidplatform.com/books/experiences/page/how-to-set-a-component-to-be-visible-hidden-on-item-details-and-create-breakpoints "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?").   
    
    ![Display toggle](<../Display toggle.png>)

- You can configure the PowerBi Report component by clicking on the Edit (pencil) icon. 
    
    ![Configuration panel](<Configuration panel.png>)

**Please note:** The above image depicts a case when the workspace is created and provisioned for the Rapid Site. If a Rapid Site does not have a provisioned workspace in MS PowerBI application, then you can create one from this component. In such a case (Rapid site not provisioned a Workspace) the below window will appear when you press the Edit (pencil) icon. 
    
![Creating a new workspace](<Creating a new workspace.png>)

Assuming that you have set up a Power BI workspace for your Rapid Site, let us go through the individual fields and options:

![Configuration breakdown](<Configuration breakdown.png>)

1. The banner shows whether your subject PowerBI workspace is running on a dedicated capacity or not.
2. **Enable Edit Mode -** This is a toggle field. The default value is Disabled. If you enable this field, it will allow the user to edit the Power BI Report from Explorer.
3. You have two options on the radio button (marked as 3a and 3b in above image). You can select only one of the two :  
    **a) Select Existing Report -** If you have selected this option, then it will enable two fields:  
        
      - **Select a report -** This is a dropdown field. As you click on this, a list of all the existing reports configured on the provisioned PowerBI workspace will appear. 

        ![List of powerbi reports](<List of powerbi reports.png>)
                    
        You can select the desired report from this list and it will get configured on the Layout / Page.
      
      - **Filter Report at Item Level -** If your page is configured at the Individual Item (Singular) level and if you turn this field to "**Yes"** state, then the PowerBI Report will filter data to the subject item's data.

**b) Upload a New Report -** Instead of selecting an existing report, you can also directly upload a PowerBI report file (extension .pbix or .rdl). As you upload the file, it will get added to the workspace as well and get configured on the subject Page.

**Please note:**

- You can set up a PowerBi Report component on an Individual Item (Singular) Level and Group Item List (Plural) Level.

## **Related articles**

[**PowerBI Report - Item Level component**](https://docs.rapidplatform.com/books/experiences/page/what-is-a-powerbi-report-item-level-component-on-a-layout-page "What is a PowerBI Report - Item Level component on a Layout / Page?")

[**External Page component**](https://docs.rapidplatform.com/books/experiences/page/what-is-an-external-page-component-on-a-layout-page "What is an External Page component on a Layout / Page?")
