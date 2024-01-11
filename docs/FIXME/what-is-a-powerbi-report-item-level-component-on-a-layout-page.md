# What is a PowerBI Report - Item Level component on a Layout / Page?

##### **What is a PowerBI Report - Item Level component?**

Imagine a situation. There is a Maintenances table that tracks the various repair jobs and incidents across the organisation. Additionally, there is a Projects table that tracks different long term projects the business is doing.

The Projects Table has three items:

- First one is to improve the efficiency of the workplace. It has a special report tracking downtime, disruptive maintenance and up-time KPIs.
- Second project is by the Facilities manager to ensure all equipment are up to date. It has a special report on forecasting upcoming maintenance schedule.
- Third project refers to the goal of hitting profit target for the organisation. It has its own special report that tracks income and expenses, which also regards maintenance costs as part of its calculations.

Such a situation require that each project has a different goal and thus the Projects Table doesn't have a singular purpose. Hence, the need is to have different reports for individual items.

This can be addressed using the PowerBI Report - Item Level component.

##### **Important note:**

**You cannot meaningfully include this component to every page. The subject table should have at least one column with the type - PowerBI Report. Only then this component can be configured.  
  
[![1 7.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/scaled-1680-/mDbHPdNIkrg2zPXt-1-7.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/mDbHPdNIkrg2zPXt-1-7.png)**

##### **How to set up PowerBI Report - Item Level component in Designer?**

<div class="pointer-container" id="bkmrk-%C2%A0-1"><div class="pointer anim is-page-editable"><svg class="svg-icon" data-icon="link" role="presentation" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg><div class="input-group inline block"><input id="bkmrk--0" placeholder="url" readonly="readonly" type="text"></input> <button class="button outline icon" data-clipboard-target="#pointer-url" title="Copy Link" type="button"><svg class="svg-icon" data-icon="copy" role="presentation" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg></button></div><svg class="svg-icon" data-icon="edit" role="presentation" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg></div></div>- You can **[add the PowerBI Report - Item Level component on to the Layout / Page](https://docs.rapidplatform.com/books/experiences/page/how-to-add-a-component-to-a-layout-page "How to add a component to a Layout / Page?")**. This component is not present anywhere by default. **[![2 6.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/scaled-1680-/CahdkiENCG1k0i8G-2-6.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/CahdkiENCG1k0i8G-2-6.png)**
- If the PowerBI Report - Item Level component is on a Grid Layout, you can **[resize and move the component over the layout](https://docs.rapidplatform.com/books/experiences/page/how-to-arrange-a-component-on-grid-layout "How to arrange a component on Grid layout?").**
- You can set the **[visibility of PowerBI Report - Item Level on the Details breakpoint](https://docs.rapidplatform.com/books/experiences/page/how-to-set-a-component-to-be-visible-hidden-on-item-details-and-create-breakpoints "How to set a component to be visible / hidden on "Item Details" and "Create" breakpoints?").   
    [![3 4.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/scaled-1680-/jT8O8WbMV4U0GTte-3-4.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/jT8O8WbMV4U0GTte-3-4.png)**
- You can set the **[visibility of PowerBI Report - Item Level on the Create Screen breakpoint](https://docs.rapidplatform.com/books/experiences/page/how-to-set-a-component-to-be-visible-hidden-on-item-details-and-create-breakpoints "How to set a component to be visible / hidden on "Item Details" and "Create" breakpoints?").   
    [![4 6.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/scaled-1680-/OZtmKBC98C2hCnQY-4-6.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/OZtmKBC98C2hCnQY-4-6.png)**
- You can configure the PowerBI Report - Item Level component by clicking on the Edit (pencil) icon. [![5 4.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/scaled-1680-/wXSGDtu0sBKuhkEO-5-4.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/wXSGDtu0sBKuhkEO-5-4.png)

This has two fields in the configuration of this component.

1. **Enable Edit Mode -** This is a toggle field. The default value is set to "Disabled". If you enable this field, it will allow the user to edit the Power BI Report from Explorer.
2. **Report Column -** This is a dropdown field. It will display a list of all the columns titles of the table that have the type as Power BI Report. You can select the relevant one from the list.

Once you have completed the configuration, click Save.

**Please note:**

- Further setting about which report should be displayed on the item can be configured in Explorer by the user. The component in Explorer will display the following options: **[![Screenshot 2023-12-07 at 17.39.02.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/scaled-1680-/KH4SQJNV7SAFMjaw-screenshot-2023-12-07-at-17-39-02.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/KH4SQJNV7SAFMjaw-screenshot-2023-12-07-at-17-39-02.png)** 
    - The user can select an existing report from the Power BI workspace OR can upload a new report. This is very similar to the [PowerBI Report component](https://docs.rapidplatform.com/books/experiences/page/what-is-a-powerbi-report-component-on-a-layout-page "What is a PowerBi Report component on a Layout / Page?").
- This component can be added to an Items List Level (Plural), however, it is meaningful only at the Item Details level (Singular).

##### **Related articles**

[**PowerBI Report component**](https://docs.rapidplatform.com/books/experiences/page/what-is-a-powerbi-report-component-on-a-layout-page "What is a PowerBi Report component on a Layout / Page?")

[**External Page component**](https://docs.rapidplatform.com/books/experiences/page/what-is-an-external-page-component-on-a-layout-page "What is an External Page component on a Layout / Page?")

***[Go back to All Components Page](https://docs.rapidplatform.com/books/experiences/page/what-are-the-available-components-for-pages)***