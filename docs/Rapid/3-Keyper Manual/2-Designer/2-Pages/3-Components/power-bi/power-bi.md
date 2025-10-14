# PowerBI Reports

## Component overview

It would be good to see the Project Tasks statuses in real-time. It would be even more useful if we could slice and dice the tasks so we can get a feeling for the state of things, right now. The PowerBI reporting component allows you to present tasks and other site data live, with all the reporting controls you need to dig into your data

Rapid Platform has the ability to seamlessly connect with Microsoft Power BI. A workspace can be created for each Rapid Site. Reports can be displayed and actioned in the Rapid Site environment.

The PowerBi Report component provides a easy method to integrate and access PowerBi reports onto a Page. To learn about how to create PowerBI reports, you can [visit the PowerBI documentation site](<https://learn.microsoft.com/en-us/power-bi/fundamentals/>).

## Setting Up PowerBI in Designer

- You can [add the PowerBi Report component on to the Layout / Page](/docs/Rapid/3-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-add-a-component/how-to-add-a-component.md "How to add a component to a Layout / Page?"). The PowerBi Report component is not present anywhere by default.   
    
    ![Component list](<Component list.png>)

- If the PowerBi Report component is on a Grid Layout, you can [resize and move the component over the layout](/docs/Rapid/3-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-arrange-a-component-on-a-grid/how-to-arrange-a-component-on-a-grid.md "How to arrange a component on Grid layout?").

- You can set the **[visibility of PowerBi Report on the Details breakpoint](/docs/Rapid/3-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-hide-components-on-breakpoints/how-to-hide-components-on-breakpoints.md "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?").   
    
    ![Visibility toggle](<../Visiblity toggle.png>)

- You can set the **[visibility of PowerBi Report on the Create Screen breakpoint](/docs/Rapid/3-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-hide-components-on-breakpoints/how-to-hide-components-on-breakpoints.md "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?").   
    
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
    **a. Select Existing Report -** If you have selected this option, then it will enable two fields:  
        
      - **Select a report -** This is a dropdown field. As you click on this, a list of all the existing reports configured on the provisioned PowerBI workspace will appear. 

        ![List of PowerBI reports](<List of powerbi reports.png>)
                    
        You can select the desired report from this list and it will get configured on the Layout / Page.
      
      - **Filter Report at Item Level -** If your page is configured at the Individual Item (Singular) level and if you turn this field to "**Yes"** state, then the PowerBI Report will filter data to the subject item's data.

    **b. Upload a New Report -** Instead of selecting an existing report, you can also directly upload a PowerBI report file (extension .pbix or .rdl). As you upload the file, it will get added to the workspace as well and get configured on the subject Page.

## PowerBI Reports on the Item Level

To display a report that only displays items (instead of entire views or tables), ensure you select the **PowerBI Report - Item Level** component, instead of the **PowerBI Report** component.

![The "Add a Component" side menu in Explorer. The screenshot has been annotated with a red box to show the location of the "PowerBI Report - Item Level" component.](<item level.png>)

The user can select an existing report from the Power BI workspace OR can upload a new report. This is very similar to the [PowerBI Report component](</docs/Rapid/Keyper%20Manual/Designer/Pages/Components/power-bi/>).

![Configuring item level component in Explorer](<Configuring item level component in Explorer.png>)
