# Adaptive Controls

To design your desired Adaptive Document, it is important that you select the right <a href="https://docs.rapidplatform.com/docs/Rapid/User%20Manual/glossary/#element" target="_blank">**elements**</a> to your document.

To add an element to your Adaptive Document's <a href="https://docs.rapidplatform.com/docs/Rapid/User%20Manual/glossary/#composition-area" target="_blank">**Composition area**</a>, use the element picker.

The element picker presents a list of <a href="https://docs.rapidplatform.com/docs/Rapid/User%20Manual/glossary/#control" target="_blank">**controls**</a> grouped across various categories. 

:::info[Please note]
This article discusses the controls that are present in an element picker by default. The controls that become available for selection in an element picker based on the connections to a data table are a subset of the Input category of controls (discussed below).  
:::

:::info[Please note]  
A control may be present in two or more categories. However, the nature and features of the control does not change based on the category it is grouped in.   
:::

## Features common to all 

Although every control has its own unique features, there are certain characteristics shared by all controls. These are:

![Image showing element id, title and icon](<Common features.png>)

**Element ID** - Every control when added to the composition area as an element gets a system generated Element ID. This is the element's identification from the system. Two elements based on same control will have different ids. ***You cannot change an Element ID.***

**Element Title** - You can define every element a title, irrespective of its nature. While an Element ID is a system generated string identifier for an element, an Element Title will help you better identify the elements as you can name them logically.

Every element has a title. If you have not manually set the title, the default title is the name of the control. 

:::tip[Please note]
You can set the Element Title in two ways:

1. From the <a href="https://docs.rapidplatform.com/docs/Rapid/User%20Manual/glossary/#element-configuration-panel" target="_blank">**Element configuration panel**</a> :

   a. Double Click on the title. This will make the Element title field editable.  
   b. Type in the desired title.  
   c. Press Enter.  
   The Element Title will now be updated with your typed text.  

   Please note, the Element Title gets updated in the <a href="https://docs.rapidplatform.com/docs/Rapid/User%20Manual/glossary/#document-structure-panel--tree-of-elements" target="_blank">**Document Structure Panel**</a> as well. 

   ![Image showing setting Element title from element configuration panel](<Set Element Title 1.png>)  

2. From the <a href="https://docs.rapidplatform.com/docs/Rapid/User%20Manual/glossary/#document-structure-panel--tree-of-elements" target="_blank">**Document Structure Panel**</a>:  

   a. Right click on the element. This will open the options for the element in Document Structure Panel.  
   b. Select Rename option. The field to type Element title will appear.  
   c. Type in the Element Title.  
   d. Press Enter.  
   The Element Title will now be updated with your typed text.  

   Please note, the Element Title gets updated in the <a href="https://docs.rapidplatform.com/docs/Rapid/User%20Manual/glossary/#element-configuration-panel" target="_blank">**Element configuration panel**</a> as well.    

   ![Image showing setting element title from document structure panel](<Set Element Title 2.png>)

:::

**Control Icon** - The control icon is visible next to the Element Title, depicting the nature of the element. Two elements based on the same control will display the same icon. You cannot update the icon. 

Apart from these characteristics, all the elements can be configured for 

a. <a href="https://docs.rapidplatform.com/docs/Rapid/Keyper%20Manual/Adaptive%20Designer/How%20to%20configure%20element%20level%20conditions/" target="_blank">**Conditions**</a>  
b. <a href="https://docs.rapidplatform.com/docs/Rapid/Keyper%20Manual/Adaptive%20Designer/How%20to%20setup%20element%20level%20validations/" target="_blank">**Validations**</a>  
c. <a href="https://docs.rapidplatform.com/docs/Rapid/Keyper%20Manual/Adaptive%20Designer/How%20to%20configure%20connection%20with%20data%20table/" target="_blank">**Connections**</a>

## Individual element features

Let us now discuss all the individual controls. 

Below is the list of controls grouped under categories. 

## Input category
This category includes all the controls that accept input from a user. For example - Single line, Number etc. There are 18 controls in this category.

1. Single line
2. Choice
3. Currency
4. Date Time
5. Date
6. Email
7. Multiple lines
8. Number
9. Percentage
10. Radio
11. Rating
12. Slider
13. Time
14. Toggle
15. Whole Number
16. Lookup
17. Multi Lookup
18. Fill In The Blank



:::note[Please note]  
The number of controls in a category change as the newer versions of the Rapid Platform / Adaptive Designer are released. The above are the list of controls across the various categories at the time of writing this article (v1.40).
:::
