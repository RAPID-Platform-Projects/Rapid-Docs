# Understanding the Element Picker

The element picker allows you to add elements to your Adaptive Document. 

## How does the Element Picker Work? (Control vs Element)

Using the Element Picker, you can select <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/glossary/#control" target="_blank">**control(s)**</a>. These controls can then be configured as <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/glossary/#element" target="_blank">**element(s)**</a> as they are added to your Adaptive Document. 

For example - imagine you are creating an Adaptive Document to capture details of the leads who visit your organisation's website.  You want to have two fields on the document :

1. First Name  
2. Last Name  

These two fields are two different elements on the Adaptive Document, but correspond to the same type of control (Single Line). So from the Element Picker you will add the control - Single Line twice and configure them as different elements. 


## What Appears on Element Picker?

![Image showing Element Picker map](<Element Picker 1.png>)

Consider the below points arranged as depicted in the above image:

### Tabs in Element Picker
There are two tabs (labelled in the above as 1 and 2). Selecting each tab will display a set of control categories (labelled as 3).

1. **Controls Tab** - when this tab is active, you will see six categories of control, which are present by default in any Adaptive Document.

2. **Connections Tab** - when this tab is active, you will see categories of control which appear based on the connections to the Rapid Lists of Items (for example - you will see titles of the data tables here, which are connected to the Adaptive Document.)   

![Image showing connections tab](<Element Picker 2.png>)

3. **Controls Categories** - Categories are the collection of controls (or templates) grouped together according on their nature. Based on the tab selected, the categories of controls are visible. To select a category, just click on the title. The selected category appears highlighted in blue.

### Categories in the Controls Tab

When the **Controls Tab** is active, then you will see six categories of controls:

   a. **All** - This category displays the list of all the controls and templates. Please note, it will also include controls from Connections as well.

   b. **Input** - This category includes all the controls that accept input from a user. For example - Single line, Number etc.  There are 19 controls in this category. 
   
   ![Image showing controls in the Input category](<Element Picker 3.png>)  

   :::note[Please note]
   "User" here is referred to the user of the Adaptive Document, the one for whom the Adaptive Document is intended. For example - the person filling up the lead form on the organisation is the User of the Adaptive Document.  
   :::

   c. **Control** - This category has two controls. They allow users to interact with the document in a defined manner. Buttons and Progress bar are the two controls in this category.   
   
   ![Image showing controls in the Control category](<Element Picker 4.png>)  

   :::warning[Please note]
   Do not confuse the title of this category with the control object, which can be configured as element. The title of this category is "Control" which derives its name from the interactive actions defined for the user.
   :::  

   d. **Layout** - This category includes controls that allow you to arrange and organise elements on the document. For example - Section, Accordion etc.  There are 17 controls in this category.

   ![Image showing controls in the Layout category](<Element Picker 5.png>)

   e. **Content** - This category includes any control that displays information on the Adaptive Document. For example - Static Text, Image etc. This category has six controls.

   ![Image showing controls in the Content category](<Element Picker 6.png>)

   f. **Simpli** - This is a special category and does not contain any controls, as such. However, it contains templates of layouts (controls arranged in predefined layouts) available for quick design. For example - Single Page Layout, Accordion Layout. You can select the template that most closes matches with your needs and then add or delete controls on the <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/glossary/#composition-area" target="_blank">**composition area**</a>. This category has five layout templates.

   ![Image showing templates in the Simpli category](<Element Picker 8.png>)

### Categories in the Connections Tab

When **Connections Tab** is active, the list of categories displayed are changed.

![Image showing categories in Connections tab](<Element Picker 9.png>)

a. **All** - This category does not change between Controls Tab and Connections Tab. It displays the list of all the controls and templates available across both the tabs.

b. ***List title*** - You can then see all the list titles for which the connection has been successfully established with the document, or the connection name if it has been chosen.

For example - Contacts and Lead Contacts are the two tables for which connection has been established with the document. They are visible in the above image. 

When you select a connections category, then it will show all the relevant controls as part of that list. For example - if you select data table Contacts, then all the columns of the table (both custom defined by keyper and system built-in columns) will be visible as controls.

![Image showing controls from a connection category](<Element Picker 10.png>)

4. **Search bar** - This search bar assists you in searching for the relevant control. You need to type in the title of the control (or a word relevant to it) as a keyword in this search bar and all the relevant controls will appear in the list.    
The benefit of using the search bar is that it displays the relevant control items and you do not need to scroll through the list, manually searching for the right control.  
The search tool will check the control attributes like - title, description etc. and display them in order of match relevance with the keyword.

:::note[Please note]
The search bar looks for the relevant controls in the **selected category only**. For example - searching "Single" in "All" category will return four controls, but will not have any effect if searched in "Control" category.  

![Image showing search feature in categories](<Element Picker 11a.png>)  

Further, note that the search results are pruned only for the "All" category. For all the other categories, the search results are sorted in the order of relevance.

For example, in the below image, observe that for the search keyword "Single", the "All" category shows 4 controls, whereas "Layout" category shows 17 controls (which is the number of controls in the Layout category). However, the search results for the Layout category are sorted in the order of relevance with the keyword "Single".

![Image showing search feature in categories](<Element Picker 11b.png>)
:::

5. **List of controls** - This is the section of the Element Picker where you see the list of all eligible controls (based on category selected / search keyword).

6. **Selection indicator** - This is the indicator that the subject control has been selected in the Element Picker and will be added to the Adaptive Document as an element (upon click of the Add button - labelled as 11). 

:::info[Please note]  
As the control is selected, the selection indicator toggles on and the control gets highlighted in blue.  

Click on it the indicator again to deselect it.   
:::  

7. **Control identifier icon** - Each control has a visual identifier icon. It is visible here, next to the Control title.

8. **Control title** - This is the title of the control. The title is of the highest relevance if you use it as a keyword in the search bar.

9. **Control description** - Each control has a description about the control. It is visible just below the Control title.

:::tip[Please note]  

For a connection control (from a data table connection), the Control title is the column title from the data table. Control description is the column type. Additionally, you can see the connection string which helps you identify the data table to which the control belongs to.  

![Image showing Control title and description in Connections control](<Element Picker 12.png>)
::: 

10. **Control counter** - This is the counter which displays the number of controls displayed in the List of Controls section (see point 5 above) out of the total number of controls available.    
The counter has two parts:  
   a. the number of controls displayed  
   b. the total number of controls available for the document at that instant

:::info[Please note]

The number of controls displayed changes based on the category selected OR based on the keyword for the "All" category. 

The total number of controls changes based on the connections created with the document. The lowest number it can have is 49 (without any connections). 

:::

11. **Add button** - This button adds the selected controls from the Element Picker to the Adaptive Document. The button is grey (disabled) when no control is selected. It turns blue when at least one control is selected.   
The Add button also displays the number of controls selected.


## Adding controls to the Adaptive Document from Element Picker

To add controls to the Adaptive Document:

1. Select the control(s) by clicking on them. (The selected control will be highlighted in blue).

2. Then press the "Add" button. 

:::tip[Please note]
You can select multiple unique controls from the Element Picker. 

![Image showing multiple ](<Element Picker 13.png>)
:::
