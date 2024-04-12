# Form Component

The **Form Component** is used to store the fields of an item on the item page. We often use forms in the physical world. For example, we need to fill out a form when we visit a dentist for the first time. We need to complete a form to start studying at an educational institution, or to complete our tax returns at the end of the financial year.

These physical forms are simply [fields](</docs/Rapid/3-User Manual/2-Explorer/2-Items/1-items-overview/1-items-overview.md#column-and-field-types>) of data, just like in Rapid. When you submit a form to your dentist, you are really submitting a collection of fields (e.g. *Name*, *Private Health Insurance*, *Date of Birth*, etc.)

While we have briefly discussed how the data in an item can be edited, in this section we will go into detail about this process.

## Appearance

**Forms** are invisible when we view them in [Explorer](</docs/Rapid/3-User Manual/2-Explorer/0-navigating-explorer/0-navigating-explorer.md>). However, we *can* see a form when viewing an item's page in [Designer](</docs/Rapid/3-User Manual/3-Designer/1-what-is-designer/1-what-is-designer.md>).

To view a form:

1. Open an [Item](<docs/Rapid/3-User Manual/2-Explorer/2-Items/1-items-overview/1-items-overview.md>) in [Explorer](</docs/Rapid/3-User Manual/2-Explorer/0-navigating-explorer/0-navigating-explorer.md>).

2. Click the Designer button at the top of the site (in the [Jumbotron](/docs/Rapid/3-User%20Manual/2-Explorer/0-navigating-explorer/0-navigating-explorer.md#jumbotron)).

![A screenshot demonstrating how to view an item page in Designer. The screenshot shows an example item on an Employees table. The item is named "Wanda Jones", who is a fictional employee. The screenshot is annotated with a red box and a red arrow, which highlight the location of the Designer button. The designer button is button that resembles a Ruler and a Set Square.](<Forms Designer Button.png>)

3. The item will now open in the [Designer](</docs/Rapid/3-User Manual/3-Designer/1-what-is-designer/1-what-is-designer.md>) application, where we can see how the item's page has been designed by the System Administrator. Here, we can see the form is box with a dashed border, where all of our fields are stored.

![A screenshot that shows how forms appear in Designer. This is to assist the user in understanding that a form is simply a box containing fields. This screenshot is annotated with a red box, and red text that states: "A form is a container that holds fields."](<Forms Designer View.png>)

4. To return to Explorer, we go back to where the Designer button was. It how now changed to the Explorer button, which is stylised as a browser with a magnifying glass. Clicking on this button will return us to Explorer.

![A screenshot that shows how the user can return to Explorer. They must return to the jumbotron at the top of the site, and press the button that resembles a browser window with a magnifying glass. The button is beside the dark blue Rapido Chatbot button. The screenshot is annotated with a red box and red arrow to highlight where the button is located on the site.](<Forms Explorer Return.png>)

> Note that you can read a detailed explanation of [How to use Designer](</docs/Rapid/3-User Manual/3-Designer/1-what-is-designer/1-what-is-designer.md>) here.

### Labels

#### Component Labels

Component Labels are large pieces of text that act as headings on an item page. Component Labels allow us to understand sections of complex form. The example below is from a Rapid Standard item called "Incidents". Both the "General Details" and "Descriptions".

Component Labels will appear in large text, and also have a horizontal rule that helps break up content on a complex item page.

In **Designer**, labels are added to forms, just like a field. However, they can also be added as a separate page component outside of a form as well.

![A screenshot that demonstrates how component labels appear on an item's page. The screenshot is annotated with two red boxes to help the user see where the labels are located in the example. The two component labels read "General Details" and "Description".](<Forms Labels.png>)

#### Field Labels

Fields can also be labelled. This is to show other text instead of the field or column title. The example below is a field titled "report_by_id", but this would not look aesthetic on a form. Instead, the System Administrator has placed the label "Who is filling out this form?" on the field instead. Now this text appears on the field instead.

![A screenshot demonstrating how labels can be added to fields. The field has a title that reads "Who is filling out this form?" instead of its proper column / field name.](<User Field Raw.png>)

### Fields

The fields in a form display data uniquely, depending on the type of column they represent. The field functionality and how fields are displayed are explained in detail here:

- [Types of Fields and Columns](</docs/Rapid/3-User Manual/2-Explorer/2-Items/1-items-overview/1-items-overview.md#column-and-field-types>)

### Description Tooltips

If you System Administrator has created field descriptions, these will appear as an information icon `ⓘ` above the field. These explain the purpose of the field, in context.

![A screenshot demonstrating what the information icon looks like. It resembles the letter "i" inside of a circle. The screenshot is annotated with a red box to highlight the icon.](<Forms Description Icon.png>)

To read a field's **Description**,  hover your mouse cursor over the information icon.

![A screenshot demonstrating what the tooltip looks like. The tooltip resembles a square speech bracket that ascends from the tooltip icon.](<Forms Description Tooltip.png>)

## Form Validation

Explorer has some simple form validation when editing or creating items.

### Email Fields

Email fields must be formatted correctly (e.g. `example@example.com`). Omitting part of an email address will produce a validation message in red. The border of the field will also turn red to highlight the issue.

![A screenshot demonstrating how email validation messages appear. In this example, the red text "Please enter a valid email" appears in an Email Address field, when the text "not an email" is entered into the field instead of a valid email address.](<Forms Email Validation.png>)

> **Note:** Email addresses which are incorrectly formatted can still be saved and submitted.

### Required Fields

Explorer also has validation for required fields. A required field will appear with a red asterisk after the field's name. In the example below, the *Date of Birth* field has been set to *Required*. If no data is entered, this field will display the message stating "This field is required" and the border of the field will turn red.

![Alt text](<Forms Required Validation.png>)

> **Note:** Explorer will *not* allow you to create a *new* item, unless all required fields have been filled. However, Explorer will allow you to save an item after a required field has had its data deleted.

## User Fields and Lookup Fields

**User Fields** and **Lookup Fields** behave similarly. These are special fields that link to another item in the site.

- The **Lookup Field** allows you to select an item from a Table that has been determined by your System Administrator.
- The **User Field** is similar to the Lookup Field, except that it will only allow you to link an item to a User of your Rapid site. The **User Table** is a [System Table](</docs/Rapid/3-User Manual/2-Explorer/1-Tables/5-system-tables/5-system-tables.md>) that is built into every Rapid site.

### Functionality

Below is an example of a **User Field**, followed by a table describing its functionality.

#### A User Field Without Data

![A screenshot of a User Field. The field's title reads: "Who si filling out this form?" It has a red, "required" asterisk after the field name. There are no words inside the Display Field box. At the right-hand side of the field are three buttons: cancel, which has an icon of an X (this is greyed out); go to, which has an icon of a box and an arrow in its upper-right corner (this is also greyed out); and a chevron pointing down, to indicate that the field will open a drop-down panel.](<User Field Empty Raw.png>)

#### A User Field With Data

![A screenshot of a User Field. The field's title reads: "Who si filling out this form?" It has a red, "required" asterisk after the field name. In the field's box is the words "Joel Data", who is a pretend user for this example. At the right-hand side of the field are three buttons: cancel, which has an icon of an X; go to, which has an icon of a box and an arrow in its upper-right corner; and a chevron pointing down, to indicate that the field will open a drop-down panel.](<User Field Raw.png>)

| Attribute | Description | Screenshot |
| --- | --- | --- |
| *Display Field* | In this example, the title of the item that is being linked to appears in the User or Lookup Field. Your System Administrator could also choose another column to display here, such as a subquery, computed field, etc. Clicking on this section will open the drop-down panel.| ![A screenshot of a User Field, annotated in red. The annotation is indicating where the displayed data from a linked item will appear.](<User Field Display.png>)|
| *Remove Value* | This is a button with an icon of an **X**. Clicking this button will delete the link between this item, and the item inside the *Display Field*. Note that this button will be greyed out, and cannot be used when no data is present in the *Display Field*.|![A screenshot that shows the location of the "Remove Value" button. This screenshot is annotated with a red box to indicate the location of the button. The button has an icon of an X.](<User Field Remove.png>)|
| *Open Item* | This button will navigate you away from the current item, and open the item that is being linked to.|![A screenshot that shows the location of the "Open Item" button. This screenshot is annotated with a red box to indicate the location of the button. The button has an icon of a box with an arrow in the upper-right corner.](<User Field Open.png>)|
| *Chevron* | This icon indicates that the **User Fields** and **Multi-lookup Fields** will open a drop-down panel. Clicking on this button will open the drop-down panel.|![A screenshot that shows the location of the chevron button. This screenshot is annotated with a red box to indicate the location of the button. The chevron indicates that this field will open a drop-down panel.](<User Field Chevron.png>)|
| *Drop-down Panel* | When a **User Field** or **Lookup Field** is pressed, it will open a drop-down panel where a connection to another item can be selected. If a **User** or **Item** is already selected, then selecting a *new* **User** or **Item** will replace it.| ![A screenshot that demonstrates the appearance of the drop-down panel from a User Field or Lookup Field. The screenshot is annotated with a red box to highlight the the drop-down panel. The following screenshots use this image, but different sections are annotated.](<User Field Dropdown.png>)|
| *Search Bar* | This allows you to quickly search a Table for a specific item. Typing a User's name here, for example, would return a specific user. | ![A screenshot demonstrating the location of the "Search Bar". The screenshot is annotated in red to highlight the location of this Search Bar.](<User Field Search.png>)|
| *Items List* | This is where you choose the specific **User** or **Item** that you want to link to this field to link. On the right-hand side of each item is the name of the table that contains the item. | ![A screenshot demonstrating the location of the "Items List". The screenshot is annotated in red to highlight the location of this list.](<User Field Items.png>)|
| *Views Panel* | Here you can filter the items being displayed in the *Items List* to find a specific item or user more quickly. These views are [created at the Table level](</docs/Rapid/3-User Manual/2-Explorer/4-Views/4-Views.md>). | ![A screenshot demonstrating the location of the "View Panel". The screenshot is annotated in red to highlight the location of this panel.](<User Field Views.png>)|
| *New Item Button* | This button will open the **Create Screen** panel, so that  new item can be created. This item can then be linked to using the **User Field** or **Lookup Field**. | ![A screenshot demonstrating the location of the "New Item Button". The screenshot is annotated in red to highlight the location of this button.](<User Field New.png>)|
| *Clear Item Button* | This operates identically to the *Remove Value* button in the *Display Field*. Pressing this button will remove the data in the **User Field** or **Lookup Field**. | ![A screenshot demonstrating the location of the "Clear Item Button". The screenshot is annotated in red to highlight the location of this button.](<User Field Clear.png>)|

## Multi-lookup Fields

Forms can also contain **Multi-lookup Fields** which share many similarities to **Lookup Fields**. A **Multi-lookup Field**, however, can link to multiple items, rather than just a single item.

A **Multi-lookup** field does not have the *Remove Values* or *Open Item* buttons in its *Display Field*. Instead, a **Multi-lookup** only contains a comma-separated list of items it links to, as well as the chevron.

![A screenshot that shows how a multi-lookup appears on the item page. In this example, the field is called "Environmental Factors". It also contains three example items that are being linked to: "Noise", "Lighting", and "Vibration".](<Multilookup Raw.png>)

When you click on a multi-lookup's field, a similar selection panel will open. Unlike a **Lookup Field**, however, you cannot open items using this panel.

The multi-lookup does allow new items to be created from the selection panel if desires, and also allows all items to be cleared with the *Clear* button.

By clicking the checkboxes beside each item, we are able to link or unlink multiple items using the component. The selected items appear as a comma-separated list in the *Display Field*.

![A screenshot of the selection panel that opens when a user clicks on a multi-lookup field. The screenshot is annotated with a red box to highlight the panel. The panel contains similar components to the lookup and user fields discussed earlier. For example: a search bar, list of items, new item button, and clear button. The key difference is that each item contains a checkbox beside it for adding the item to the list.](<Multilookup Item Panel.png>)