# Embedded Form

## Embedded Form component overview

**Case 1:**

Imagine a Project Manager is going through a Project Task Item in the Tasks Table. On the subject item, he/she feels the need to add a Phase to the Project Task in the Phases Table. Therefore, the ability to **create a new item in another table from within the subject table item.**

**Case 2:**

Imagine a Sales executive is working with a Leads Table. Leads is a [Sub-type of Tasks](</docs/Rapid/3-User Manual/glossary/glossary.md#inherit-tables> "Inherit Table / Sub-Type Of") table. Now the job of the Sales Executive is to call the lead, tell them about the offering, and collect their email id. Email id is a field in the Contacts Table. Therefore, the ability to **update an existing item in another table from within the subject table item.**

In both the above cases, Embedded Form component can be used.

This is different from the [Form component](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/3-Components/form/form.md "What is a Form Component on a Layout / Page?"). A Form component helps you create and update items of the subject table; whereas an Embedded Form component enables you to create and update specific items of another table from the subject table item.

An embedded form can be perceived as a window to an item of a table other than the subject table.

:::note[Please note:]
An embedded form can be only used for Tasks Table and Sub-type of Tasks Table(s).
:::

## How to set up Embedded Form component in Designer

- You can [add the Embedded Form component on to the Layout / Page](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-add-a-component/how-to-add-a-component.md "How to add a component to a Layout / Page?"). The Embedded Form component is not present anywhere by default. 

    ![Components list](<Components list.png>)

- If the Embedded Form component is on a Grid Layout, you can [resize and move the component over the layout](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-arrange-a-component-on-a-grid/how-to-arrange-a-component-on-a-grid.md "How to arrange a component on Grid layout?").

- You can set the **[visibility of Embedded Form on the Details breakpoint](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-hide-components-on-breakpoints/how-to-hide-components-on-breakpoints.md "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?").   

    ![Visibility toggle](<../Visiblity toggle.png>)
- You can set the **[visibility of Embedded Form on the Create Screen breakpoint](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-hide-components-on-breakpoints/how-to-hide-components-on-breakpoints.md "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?"). 

    ![Display toggle](<../Display toggle.png>)

:::note[Please note:]

- In Rapid Platform, you can configure the Embedded Form via a Workflow Diagram. A workflow diagram has a specific section under User Task titled - "Form Details". You can learn more about it here. **&lt;&lt;PROVIDE LINK TO WORKFLOW PAGE&gt;&gt; 
:::

    ![Embedded form in workflow configuration](<Embedded form in workflow configuration.png>)

- Embedded Form, although can be added to an Items List Level (Plural), however, it is meaningful only at the Item Details level (Singular).

- The Embedded Form component is functional when added to a Tasks Table or a sub-type of Tasks Table, but it can create / update items on any table. This means, you can meaningfully add Embedded Form component to a Table which is Tasks / its sub-type, but you can configure it (in workflow diagram) to create / update any table item.

## Related articles

[**Form component**](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/3-Components/form/form.md "What is a Form Component on a Layout / Page?")

[**Linked Items component**](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/3-Components/linked-items/linked-items.md "What is a Linked Items component on a Layout / Page?")
