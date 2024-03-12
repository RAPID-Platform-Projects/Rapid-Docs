# The PowerBI Report - Item Level component

## PowerBI Report - Item Level component Overview

Imagine a situation. There is a Maintenances table that tracks the various repair jobs and incidents across the organisation. Additionally, there is a Projects table that tracks different long term projects the business is doing.

The Projects Table has three items:

- First one is to improve the efficiency of the workplace. It has a special report tracking downtime, disruptive maintenance and up-time KPIs.
- Second project is by the Facilities manager to ensure all equipment are up to date. It has a special report on forecasting upcoming maintenance schedule.
- Third project refers to the goal of hitting profit target for the organisation. It has its own special report that tracks income and expenses, which also regards maintenance costs as part of its calculations.

Such a situation require that each project has a different goal and thus the Projects Table doesn't have a singular purpose. Hence, the need is to have different reports for individual items.

This can be addressed using the PowerBI Report - Item Level component.

#### Important note:

**You cannot meaningfully include this component to every page. The subject table should have at least one column with the type - PowerBI Report. Only then this component can be configured.  
  
![PowerBI column](<PowerBI column.png>)

## How to set up PowerBI Report - Item Level component in Designer

- You can [add the PowerBI Report - Item Level component on to the Layout / Page](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-add-a-component/how-to-add-a-component.md "How to add a component to a Layout / Page?"). This component is not present anywhere by default. 
    
    ![Component list](<Component list.png>)

- If the PowerBI Report - Item Level component is on a Grid Layout, you can [resize and move the component over the layout](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-arrange-a-component-on-a-grid/how-to-arrange-a-component-on-a-grid.md"How to arrange a component on Grid layout?").

- You can set the [visibility of PowerBI Report - Item Level on the Details breakpoint](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-hide-components-on-breakpoints/how-to-hide-components-on-breakpoints.md "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?").   
    
    ![Visiblity toggle](<../Visiblity toggle.png>)

- You can set the [visibility of PowerBI Report - Item Level on the Create Screen breakpoint](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-hide-components-on-breakpoints/how-to-hide-components-on-breakpoints.md "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?").   
    
    ![Display toggle](<../Display toggle.png>)

- You can configure the PowerBI Report - Item Level component by clicking on the Edit (pencil) icon. 

    ![Configuration panel](<Configuration panel.png>)

This has two fields in the configuration of this component.

1. **Enable Edit Mode -** This is a toggle field. The default value is set to "Disabled". If you enable this field, it will allow the user to edit the Power BI Report from Explorer.
2. **Report Column -** This is a dropdown field. It will display a list of all the columns titles of the table that have the type as Power BI Report. You can select the relevant one from the list.

Once you have completed the configuration, click Save.

**Please note:**

- Further setting about which report should be displayed on the item can be configured in Explorer by the user. The component in Explorer will display the following options: 
    
    ![Configuring item level component in Explorer](<Configuring item level component in Explorer.png>)

- The user can select an existing report from the Power BI workspace OR can upload a new report. This is very similar to the [PowerBI Report component](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/3-Components/power-bi/power-bi.md  "What is a PowerBi Report component on a Layout / Page?").

- This component can be added to an Items List Level (Plural), however, it is meaningful only at the Item Details level (Singular).

## Related articles

[PowerBI Report component](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/3-Components/power-bi/power-bi.md "What is a PowerBi Report component on a Layout / Page?")

[External Page component](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/3-Components/external-page/external-page.md "What is an External Page component on a Layout / Page?")

