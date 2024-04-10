# Pipeline

## Pipeline component overview

Imagine you are a Sales Manager. You work with the Sales Leads Table.

Now, you want to see the progression of a lead across the Sales Funnel. Let us assume there is a [**Choice Type**](/docs/Rapid/4-Keyper%20Manual/2-Designer/1-Tables/5-Table%20Configuration%20Guides/how-to-add-columns-to-a-data-table/how-to-add-columns-to-a-data-table.md "How to add columns to a data table?") field "**Sales Stage"** with choice option values as:

- Lead
- Prospect
- Opportunity
- Client

These are the four stages of the Sales Funnel that you have defined.

You want to see them visually progressing from one stage to another.

This is possible through the Pipeline component.

We can think of Pipeline Component as a visual representation of sequential choice fields. The work sequential is important as it is meaningful when we have choice values that can be depicted in a sequence / progression. For instance: a choice field - **Hobbies** with choice options as **Sports, Reading, Cooking** etc. cannot be meaningfully represented as a Pipeline (from a logical perspective).

## How to set up Pipeline component in Designer

- You can [add the Pipeline component on to the Layout / Page](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-add-a-component/how-to-add-a-component.md "How to add a component to a Layout / Page?"). The Pipeline component is not present anywhere by default.  

    ![Component list](<Component list.png>)
- If the Pipeline component is on a Grid Layout, you can [resize and move the component over the layout](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-arrange-a-component-on-a-grid/how-to-arrange-a-component-on-a-grid.md "How to arrange a component on Grid layout?").
- You can set the **[visibility of Pipeline on the Details breakpoint](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-hide-components-on-breakpoints/how-to-hide-components-on-breakpoints.md "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?").   

    ![Visibility toggle](<../Visiblity toggle.png>)
- You can set the [visibility of Pipeline on the Create Screen breakpoint](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-hide-components-on-breakpoints/how-to-hide-components-on-breakpoints.md "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?").

    ![Display toggle](<../Display toggle.png>)
- You can make it mandatory for the user to select a value from the Pipeline component by clicking on the \* button. If the icon turns red, it means the field is mandatory (required) field. A white \* icon denotes non-mandatory field. You can toggle by clicking on the icon.   

    ![Marking the choice field required](<Marking the choice field required.png>)
- You can configure the Pipeline component by clicking on the Edit (pencil) icon.   

    ![Configuration panel](<Configuration panel.png>)
- In the Edit panel, you the "Field" dropdown shows a list of all the Choice Type column names. Please note, the Pipeline component will refer to the subject Table only (on whose Design Tab you are adding the Pipeline component).
- You can select the desired column. It will display a list of all the choice options value.
- You can toggle off the choice options that you wish to exclude from the Pipeline. These values would not be shown to the user in the Pipeline component in Explorer.

    ![Configuring different choices](<Configuring difference choices.png>)

- As you save the component and Page, you can see the Pipeline on Explorer as defined.

    ![Pipeline in Explorer example](<Pipeline in Explorer example.png>)

## Important points

- In case, the Pipeline component is created on a Choice type field which has a **default value**, then mandatory (required) won't be effective.
- The Pipeline component is meaningful only on the Individual Item Level (singular). Although, you can add a Pipeline component to the Item Group List level (Plural), but it remains non-operational (and logically so).

    ![Blank pipeline](<Blank pipeline.png>)
- Selecting a value in the Pipeline is identical to selecting the option from a Choice Type field. If you have the same field added as a Choice Field on the Layout, you can view them to be always in sync with each other. 

    ![Pipeline with a choice field](<Pipeline with a choice field.png>)
- The colour of the Pipeline Choices are derived from the subject Choice Type field. While defining the options of the Choice Type column, if you have defined colours, the same will appear in the Pipeline.  

    ![Choice field colour configuration](<Choice field colour configuration.png>)

## Related articles

[Board component](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/3-Components/board/board.md "What is a Board component on a Layout / Page?")

[Gantt Chart component](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/3-Components/gantt-chart/gantt-chart.md "How to configure the Page - Gantt Chart Component?")

