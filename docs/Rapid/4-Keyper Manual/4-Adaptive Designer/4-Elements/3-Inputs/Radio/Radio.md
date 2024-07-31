# Radio

## What is a Radio input control?

A radio control allows the user of the Adaptive Document to select an input from a defined set of options. 

For example: Imagine you are creating a feedback form. The users can register their objective opinion and can rate the service from _Excellent_ to _Very Poor_. 

![Image showing radio input](<Radio 1.png>)

:::tip[Radio control Vs Choice control]  
The radio control is very similar to the <a href="https://docs.rapidplatform.com/docs/Rapid/Keyper%20Manual/Adaptive%20Designer/Adaptive%20Controls/inputs-overview/Choice/" target="_blank">**Choice control**</a>. 

You may consider using the radio control over choice control when:
1. There are fewer options and are mutually exclusive in nature.
2. When visibility of all options at a glance is required for quick comparison by the user.
3. You have enough space to show all options and arrangement does not clutter experience.

![Image showing comparison of choice and radio elements](<Radio 2.png>)
:::

## How does the Element Configuration Panel for Radio control appear?

The Element configuration panel for the radio control appears as shown in the below image:

![Image showing element configuration panel for radio control](<Radio 3.png>)

The panel has five categories:

1. Attributes - To define the appearance of the Radio element.
2. Choices - To define the options that appear in the Radio element.
3. Conditions - To define the conditions when the Radio element be enabled/disabled and/or shown/hidden.
4. Validation - To define the validation rule for the Radio element.
5. Connection - To establish connection of the Radio element with a table column.

In this article, we shall discuss about Attributes and Choices configuration categories only. 

### Attributes category

Consider the following image and corresponding list sequentially explaining the fields of the attributes section for Radio control.

![Image showing various fields to configure radio element attributes](<Radio 4.png>)

   **a. Label** - This field allows you to type the label to the Radio control. The label shall appear above the element in the Adaptive Document and is used to provide context for the user.

   **b. Asterisk (*) sign** - If you click ON this field, then an asterisk sign will appear next to the label. This is used to indicate a special message to the users of the document. For example - conditions apply, the element is mandatory etc.  

   :::info[Please note]  
   It is important to note that the Asterisk sign is only a visual indicator and does not imply any logical condition on the control. For example - turning the Asterisk sign as ON will not make the Radio control a mandatory element for users. All logical behaviour for the control should be configured using conditions and validations.  
   :::

   **c. Default value** - The text typed in this field becomes the default value for the element. If the user selects a different value to the element, then the default value will be replaced by the user selected value. If the user does not interact with the element, then the default value will be submitted as element value. 

   :::tip[Please note]
   A default value may be useful when you feel most users will select the same value, however, you still want to give them a flexibility to change the value of the element. For example - you may want to keep the default value of satisfaction from service as _Excellent_. If the user does not agree with this option, one has the flexibility to change the same.  
   :::

   ![Image showing default value](<Radio 5.png>)

   :::warning[Please note]  
   The default value that you type in the field will be effective only if it matches with one of the defined choices for the element. 

   In case, the typed value does not match any of the defined choice values, then the default value will be taken as NULL.  

   ![Image showing Null default value](<Radio 6.png>)
   :::

   **d. Force disable** - If this field is clicked ON, then it will supersede all enable conditions and the element will always remain in disabled mode.

   **e. Force hide** - If this field is clicked ON, then it will supersede all show conditions and the element will always remain hidden from the user.

   **f. Justify choices** - The value in this field will justify the options **along** the line of the axis of the **direction** (discussed next). Therefore, if the direction is selected as _Top to Bottom_ (vertical), the justify will arrange options top-down, while if direction is selected _Right to Left_  (horizontal), the justify will arrange options left-right.

   The below image shows various arrangements for _Right to Left_ direction.

   ![Image showing various arrangements of options based on values of Justify Choices field](<Radio 7.png>)

   You can learn more about justify and align in <a href="https://docs.rapidplatform.com/docs/Rapid/Keyper%20Manual/Adaptive%20Designer/How%20to%20configure%20Attributes%20of%20Root%20Section/" target="_blank">**this article on Root Section**</a>.

   **g. Direction** - This field defines the axis along which the options will be displayed. This field as two options:

   - Right to Left - arranges options in horizontal direction
   - Top to Bottom - arranges options in vertical direction

   ![Image showing various arrangements of options based on values of Direction field](<Radio 8.png>)

   **h. Display as** (type of checkbox) - This field defines how the checkbox will appear to the user. This checkbox appears before the option and indicates whether the option has been selected or not. 

   There are two options:

   - Square
   - Circle

   ![Image showing various arrangements of options based on values of Display as field](<Radio 9.png>)

   **i. Colour of checkbox** - You can select the colour of the checkbox appearance. Colour can be set using the colour setting panel.

   To open colour setting panel, click on the field.
   
   ![Image showing colour panel](<Radio 10.png>)
   
   You will receive the following options to set colour for the option.
   
   i. Drag the point on the color shade.
   ii. Drag the point to change the colour over the spectrum.
   iii. Click on the dropper to copy colour settings from other image point visible on the screen.
   iv. Set code for colour definition method (for example - set code for R, G and B).
   v. Change the colour definition method. There are three options available - RGB, HSL and Hex.
   
   vi. The defined colour is visible in the circle.
   
   You can set the colour of the checkbox for both checked and unchecked options.

   ![Image showing colour of checked and unchecked options](<Radio 11.png>)

   **j. Icon to appear within checkbox** - You can select the icon that will appear within the checkbox to indicate selected / unselected options.

   To set the option icon consider the following steps:
   1. Click on this field.
   2. The icon picker will open.  The icon picker has a list of 1389 icons. 
   
   ![Image showing icon picker for button](<Radio 12a.png>)  
   
   Each cell represents an icon with the icon image displayed on top and its title display below it. 
   
   ![Image showing a cell in icon picker](<Radio 12b.png>)  
   
   3. You can search for the icon from the search icons bar. The system matches the typed keyword with the icon title and displays all the icon cells that match. 
   
   4. Select an icon by clicking on the cell. The selected cell is highlighted in blue. Please note, you can select one and only one cell.
   
   5. Click Add at the bottom right corner of the icon picker.

   You can set the icons for both checked (selected) and unchecked (unselected) options.

   ![Image showing icon of checked and unchecked options](<Radio 12.png>)

   **k. Class names** - In this field, you can type the name of the CSS class and the element will be styled as per the CSS class definition.

### Choices category

This category houses all the options which the choice element will display to a user. 

When creating the options for the first time for the element, the category will appear as shown below:

![Image showing options in Choice category](<Radio 13.png>)

It has two buttons:

a. "+"  - Clicking on this open the field to define a new option for the choice element.

b. ">" - This button toggles the open/collapse choices category.

#### Adding new choices

To add new choices to the element, consider the following steps:

1. Click on "+". The "Add new choice" field will appear.

2. Type the text for the option title.

![Image showing field to type option title](<Radio 14.png>)

3. Press enter. The entered text will now become an option.

![Image showing option added](<Radio 15.png>)

#### Updating existing options

You can perform the following update actions on the option:

***a. Update the option text***

Double click on the option text and it will become editable. 

![Image showing editing of option title](<Radio 16.png>)

Update the text and press enter. 
The option text will be updated.

***b. Delete an option***

Click on the X icon and the option will be deleted from the list.

![Image showing how to delete an option](<Radio 18.png>)

:::info[Please note]  

The colour of the option in the choices category does not take effect. 

![Image showing option colour not effective](<Radio 17.png>)  

:::
