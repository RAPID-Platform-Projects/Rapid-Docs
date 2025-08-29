# Embedded Forms

When an item is usually accessed from a Rapid table, you are only able to edit data associated with that item. However, **Embedded Forms** enable us to edit or create items in another table.

:::note[Example]
The WHS team receives a **Task** where they must enter data into a **Corrective Action** item. This **Corrective Action** item contains a field named *Solution*, where the team must record what they will do to prevent a WHS incident from occurring again.

By using an **Embedded Form**, the WHS team can create a new **Corrective Action** item, or edit the data of an existing item. This can be accomplished via the **Task** item they were assigned.
:::

![A screenshot of an embedded form and its appearance. The screenshot is annotated with a red box to highlight the boundaries of the embedded form. The embedded form also has a faint blue-grey background. Its title reads "Corrective Actions Details", and has some fields such as: "Corrective Action Code":"#000032", "Completed":"Thu May 30 2024", "Incident":"INCIDENT - 00000034", "Solution":"Provide adequate lighting in the stairwell."](<Embedded Form Example.png>)

> An **Embedded Form** highlighted with a red box. The fields inside this form will affect data on another table's item in the database.

## Editing and Saving Data

To edit an item via an **Embedded Form**:

1. Add or edit data in the **Embedded Form's** fields.
2. Press the **Save** button on the item page that contains the **Embedded Form**

![Alt text](<Embedded Form Steps 1.png>)

Now the data on the item that was represented by the **Embedded Form** be updated to the values inside the **Embedded Form's** fields. 

![Alt text](<Embedded Form Steps 2.png>)

## Opening the Associated Item

To visit the item that is associated with an **Embedded Form**, press the "Open Item" button in the top-right corner of the **Embedded Form**.

![Alt text](<Embedded Form Open Button.png>)

## Creating Embedded Forms

- You can read about [how to add embedded forms](</docs/Rapid/3-Keyper Manual/2-Designer/2-Pages/3-Components/embedded-form/embedded-form.md>) in the Keyper Manual.