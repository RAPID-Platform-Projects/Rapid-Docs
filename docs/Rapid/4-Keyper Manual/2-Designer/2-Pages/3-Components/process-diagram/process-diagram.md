# Process Diagram

## What is a Process Diagram component

As the name suggests, a Process Diagram component will display the Process Diagram on a page. If this component is added properly, it will display the relevant Process Diagram associated with the item on the page.

## Important note

**This component cannot be meaningfully added to any page. A table should have a column by the type - XML Data to host a Process Diagram component. XML Data type of columns cannot be added with the Rapid UI. There is a specialised way to add such columns to the Table, which is beyond the scope of explanation of this article.**

![Process diagram column example](<Process diagram column example.png>)

## **How to set up Process Diagram component in Designer?**

- You can [add the Process Diagram component on to the Layout / Page](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-add-a-component/how-to-add-a-component.md "How to add a component to a Layout / Page?"). This component is not present anywhere by default. 

    ![Component list](<Component list.png>)
- If the Process Diagram component is on a Grid Layout, you can [resize and move the component over the layout](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-arrange-a-component-on-a-grid/how-to-arrange-a-component-on-a-grid.md "How to arrange a component on Grid layout?").
- You can set the [visibility of Process Diagram on the Details breakpoint](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-hide-components-on-breakpoints/how-to-hide-components-on-breakpoints.md "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?").  
 
    ![Visibility toggle](<../Visiblity toggle.png>)
- You can set the [visibility of Process Diagram on the Create Screen breakpoint](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-hide-components-on-breakpoints/how-to-hide-components-on-breakpoints.md "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?"). 

    ![Display toggle](<../Display toggle.png>)

**Please note:**

- This component does not have an Edit (pencil) icon. The process diagram is shown based on the item's XML Data column.
- This component can be added to an Items List Level (Plural), however, it is meaningful only at the Item Details level (Singular).

## Related articles

[Data Table component](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/3-Components/data-table/data-table.md "What is a Data Table component on a Layout / Page?")

[Embedded Form component](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/3-Components/embedded-form/embedded-form.md "What is a Embedded Form component on a Layout / Page?")
