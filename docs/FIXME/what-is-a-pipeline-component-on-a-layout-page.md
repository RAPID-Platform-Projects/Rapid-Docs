# What is a Pipeline component on a Layout / Page?

##### **What is a Pipeline component?**

Imagine you are a Sales Manager. You work with the Sales Leads Table.

Now, you want to see the progression of a lead across the Sales Funnel. Let us assume there is a **[Choice Type](https://docs.rapidplatform.com/books/experiences/page/how-to-add-columns-to-a-data-table "How to add columns to a data table?")** field "***Sales Stage*"** with choice option values as:

- ***Lead***
- ***Prospect***
- ***Opportunity***
- ***Client***

These are the four stages of the Sales Funnel that you have defined.

You want to see them visually progressing from one stage to another.

This is possible through the Pipeline component.

We can think of Pipeline Component as a visual representation of sequential choice fields. The work sequential is important as it is meaningful when we have choice values that can be depicted in a sequence / progression. For instance: a choice field - "***Hobbies***" with choice options as ***Sports, Reading, Cooking*** etc. cannot be meaningfully represented as a Pipeline (from a logical perspective).

##### **How to set up Pipeline component in Designer?**

- You can **[add the Pipeline component on to the Layout / Page](https://docs.rapidplatform.com/books/experiences/page/how-to-add-a-component-to-a-layout-page "How to add a component to a Layout / Page?")**. The Pipeline component is not present anywhere by default.  
    [![1.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/mF2GRINgbBDu1urX-1.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/mF2GRINgbBDu1urX-1.png)
- If the Pipeline component is on a Grid Layout, you can **[resize and move the component over the layout](https://docs.rapidplatform.com/books/experiences/page/how-to-arrange-a-component-on-grid-layout "How to arrange a component on Grid layout?").**
- You can set the **[visibility of Pipeline on the Details breakpoint](https://docs.rapidplatform.com/books/experiences/page/how-to-set-a-component-to-be-visible-hidden-on-item-details-and-create-breakpoints "How to set a component to be visible / hidden on "Item Details" and "Create" breakpoints?").   
    [![2.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/dWGmWoARB2PJpCHm-2.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/dWGmWoARB2PJpCHm-2.png)**
- You can set the **[visibility of Pipeline on the Create Screen breakpoint](https://docs.rapidplatform.com/books/experiences/page/how-to-set-a-component-to-be-visible-hidden-on-item-details-and-create-breakpoints "How to set a component to be visible / hidden on "Item Details" and "Create" breakpoints?").** [![3.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/CTj5Ua0THVBodKvy-3.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/CTj5Ua0THVBodKvy-3.png)
- You can make it mandatory for the user to select a value from the Pipeline component by clicking on the \* button. If the icon turns red, it means the field is mandatory (required) field. A white \* icon denotes non-mandatory field. You can toggle by clicking on the icon.   
    [![4.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/313Vm9V0OL6KXxBb-4.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/313Vm9V0OL6KXxBb-4.png)
- You can configure the Pipeline component by clicking on the Edit (pencil) icon.   
    [![5.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/nWubmVPYYot0XWAv-5.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/nWubmVPYYot0XWAv-5.png)
- In the Edit panel, you the "Field" dropdown shows a list of all the Choice Type column names. Please note, the Pipeline component will refer to the subject Table only (on whose Design Tab you are adding the Pipeline component).
- You can select the desired column. It will display a list of all the choice options value.
- You can toggle off the choice options that you wish to exclude from the Pipeline. These values would not be shown to the user in the Pipeline component in Explorer.

[![Pipe 3.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/kMfoA7GJVCMVVMsU-pipe-3.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/kMfoA7GJVCMVVMsU-pipe-3.png)

- As you save the component and Page, you can see the Pipeline on Explorer as defined.[![7.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/ip5UrDtqhxLF0FD7-7.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/ip5UrDtqhxLF0FD7-7.png)

##### **Important points**

- In case, the Pipeline component is created on a Choice type field which has a **default value**, then mandatory (required) won't be effective.
- The Pipeline component is meaningful only on the Individual Item Level (singular). Although, you can add a Pipeline component to the Item Group List level (Plural), but it remains non-operational (and logically so).[![8.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/nCaIVu7HNJyIEwa8-8.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/nCaIVu7HNJyIEwa8-8.png)
- Selecting a value in the Pipeline is identical to selecting the option from a Choice Type field. If you have the same field added as a Choice Field on the Layout, you can view them to be always in sync with each other. [![9.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/Hhp3Q202RpSIIeSE-9.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/Hhp3Q202RpSIIeSE-9.png)
- The colour of the Pipeline Choices are derived from the subject Choice Type field. While defining the options of the Choice Type column, if you have defined colours, the same will appear in the Pipeline.  
    [![10.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/eyYCN6qcHe6BHyQd-10.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/eyYCN6qcHe6BHyQd-10.png)

##### **Related articles**

[**Board component**](https://docs.rapidplatform.com/books/experiences/page/what-is-a-board-component-on-a-layout-page "What is a Board component on a Layout / Page?")

**[Gantt Chart component](https://docs.rapidplatform.com/books/experiences/page/how-to-configure-the-page-gantt-chart-component "How to configure the Page - Gantt Chart Component?")**

***[Go back to All Components Page](https://docs.rapidplatform.com/books/experiences/page/what-are-the-available-components-for-pages)***