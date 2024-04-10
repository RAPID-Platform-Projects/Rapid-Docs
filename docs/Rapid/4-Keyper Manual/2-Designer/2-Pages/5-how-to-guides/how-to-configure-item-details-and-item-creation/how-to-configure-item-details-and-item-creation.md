# How to configure the Item Details and Creation pages

## The defaults on a Design Tab of a new Table

When you [**create a new table**](/docs/Rapid/4-Keyper%20Manual/2-Designer/1-Tables/3-creating-tables/3-creating-tables.md "How to create a new data table in Designer?"), the Design Tab will have the following:

- **Singular - Details breakpoint**

![Singular details.png](./downloaded_image_1705285550574.png)

Observe a [**Tab Strip**](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/4-Layouts/list-of-available-layouts/list-of-available-layouts.md "What are the available layouts for Pages?") is present by default. It has four tabs:

- **Details Tab** - This is an important tab which has a [**Grid Layout**](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/4-Layouts/list-of-available-layouts/list-of-available-layouts.md "What are the available layouts for Pages?") by default. The Grid Layout has two components: 
  - [**Forms Component**](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/3-Components/form/form.md "What is a Form Component on a Layout / Page?")
  - [**Activity Feed**](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/3-Components/activity-feed/activity-feed.md "What is an Activity Feed component on a Layout / Page?")

![Picture 1.png](./downloaded_image_1705285551585.png)

- **Activity Tab** - This tab has the Horizontal Layout by default. There is an Activity Feed Component by default in the layout.

    ![Activity Tab Default](<Activity Tab Default.png>)
- **Files Tab -** This tab has the Horizontal Layout by default. There is a File Browser Component by default in the layout.

    ![Files Tab Default](<Files Tab Default.png>)
- **Tasks Tab -** This tab has the Horizontal Layout by default. There is a Data Table Component by default in the layout. The Data Table component is configured for Tasks Table and All Views.

    ![Tasks Tab Default](<Tasks Tab Default.png>)

- **Singular - Create Screen breakpoint**

![S-create.png](./downloaded_image_1705285555890.png)

[**The "Create Screen" breakpoint is always in sync with the "Details" breakpoint and vice versa.**](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-hide-components-on-breakpoints/how-to-hide-components-on-breakpoints.md "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?") Therefore, we can observe that the "Create Screen" breakpoint is identical to its "Details" breakpoint counterpart. It has Tab Strip with same four Tabs and Details Tab (as seen in the image) has Grid Layout with Form component and Activity Feed component.

- **Plural - Details breakpoint**

![P details.png](./downloaded_image_1705285556911.png)

The Plural Details breakpoint has a [**Horizontal Layout**](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/4-Layouts/list-of-available-layouts/list-of-available-layouts.md "What are the available layouts for Pages?") by default. There is a [**Data Table Component**](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/3-Components/file-browser/file-browser.md "What is a File Browser component on a Layout / Page?") by default in the layout. The Data Table component is configured for *the subject* Table. This means that this page will show the list of items for the subject table.

## Configuring the Item Details and Item Creation pages

- **Singular - Details breakpoint**

**What this will do? -** As discussed above, there is a Tab Strip present by default on this Page. The Tab Strip contains a set of four Pages.

Whatever is configured on this breakpoint will be visible on the individual Item Details in Explorer ie. this configuration defines what details are shown for each [**Item**](</docs/Rapid/3-User Manual/glossary/glossary.md#table> "Table items and columns").

For instance - consider the below image. The Singular Details breakpoint configuration is shown in Image 1 for a Table titled - *Milestones*. Observe that it has four Tabs on the Tab Strip. The Details Tab has a [**Form Component**](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/3-Components/form/form.md "What is a Form Component on a Layout / Page?") with certain fields and an [**Activity Feed Component**](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/3-Components/activity-feed/activity-feed.md "What is an Activity Feed component on a Layout / Page?").

![image 1.png](./downloaded_image_1705285557929.png)

Now observe corresponding Image 2. This is the Item Details for an [**Item**](</docs/Rapid/3-User Manual/glossary/glossary.md#table> "Table items and columns") in *Milestones* Table titled - *Project Completed.* Observe that this has same four Tabs as defined. Further, the Details Tab shows the same fields as configured in the Form Component. The fields are now shown with respective Data. Also visible is the Activity Feed Component with relevant Data.

![Image - 2.png](./downloaded_image_1705285558956.png)

Therefore, whatever we configure in the Singular - Details breakpoint, will be visible in the individual Item Details.

**Imagine if this isn't configured then you wont be able to add / view Item Details in Explorer.**

### How to configure Singular - Item Details

Here you would first want to configure the Forms Component in the Details Tab. This will allow you show the required details about the subject item in Explorer.

**Imagine you have created a new table titled - Business Contacts. The columns of this table have been defined. For example - Full Name, Email, Phone Number are all columns of this table.**

1. Navigate to the Design Tab of Business Contacts table in Designer. Observe that you can see the Singular - Details breakpoint. The default tabs are present on the Tab Strip. The first tab of the Tab Strip - Details Tab is active.  
      
    ![1.png](./downloaded_image_1705285559982.png)  
      
    **Observe on Details Tab you can see two components - Form Component and Activity Feed Component.**
2. Focus on the Form Component. There are two options -  
      
    **1. Add all Business Contacts columns** - If you click on this option, the Form component will include all the existing columns to it. (Please note - the system built-in columns would not be included)  
      
    **2. Configure** - if you click on this option, the Form component will allow you to custom choose the columns you wish to add to the Form from the list of all columns.  
      
    Assume, you click the Configure option.  
      
    ![2.png](./downloaded_image_1705285560999.png)
3. A Form Fields panel opens at the right side of the screen. This panel displays the list of all columns in the Table. Observe there is a checkbox to the left of each column name.  
      
    ![3.png](./downloaded_image_1705285562025.png)
4. Also observe, there is a Label component. This is used to provide a context to the set of Form fields. Click on the Label.  
      
    ![4.png](./downloaded_image_1705285563048.png)
5. As you click on the Label component, it gets added to the Form. Click the "Label text" field.  
      
    ![5.png](./downloaded_image_1705285564069.png)
6. Type in your desired Label Text.   
    Then click on the "+" icon in the Form component.  
      
    ![6.png](./downloaded_image_1705285565084.png)
7. Select all the desired column fields.  
      
    ![7.png](./downloaded_image_1705285566102.png)
8. Post selecting all the desired fields, click "Add to Form".  
      
    ![8.png](./downloaded_image_1705285567119.png)
9. Observe the default list of fields appear in the alphabetical order. To re-order the fields in the desired sequence, just go to the respective fields horizontal option bar and drag to its desired position.  
      
    ![9.png](./downloaded_image_1705285568139.png)
10. Observe that fields "Full Name" and "Email" have been dragged to the top of the list. The system automatically pushes the remaining fields down.  
      
    ![10.png](./downloaded_image_1705285569161.png)
11. Further, you can also resize the fields. Click on the small bottom right part of rectangle. Click and drag the same to resize.  
      
    ![11.png](./downloaded_image_1705285570175.png)
12. You can resize the fields as needed.  
      
    ![12.png](./downloaded_image_1705285571197.png)
13. You can then arrange the fields as desired. Observe "Mobile Phone" and "Email" fields are arranged parallel to each other instead of horizontal.Also observe, in case you have too many fields and wish to increase the size of the Form canvas, you can click on the bottom right corner of the Form component and drag to the desired length.  
      
    ![13.png](./downloaded_image_1705285572213.png)
14. Finally, click "Save" for all your configuration to take effect.  
      
    ![14.png](./downloaded_image_1705285573229.png)

### Singular - Create Screen breakpoint

**What this will do:**

[**The Create Screen breakpoint is always in sync with the Details breakpoint and vice versa.**](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-hide-components-on-breakpoints/how-to-hide-components-on-breakpoints.md "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?")

Once you have created the Singular - Details breakpoint, it will automatically reflect in the Create Screen breakpoint. Observe in the image below. The Singular - Create Screen shows exactly how the Forms component was configured above.

![image 3.png](./downloaded_image_1705285574246.png)

Please note, on the you would need to [**arrange the fields**](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-arrange-a-component-on-a-grid/how-to-arrange-a-component-on-a-grid.md "How to arrange a component on Grid layout?") in the order you want to see them in the Create Item Form.

:::info[Important]

You can set the fields of the Form Component as [**hidden / visible on the Item Details and Item Creation form**](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-hide-components-on-breakpoints/how-to-hide-components-on-breakpoints.md "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?").
:::

## Related articles

[How to create a Page in Designer?](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-create-pages/how-to-create-pages.md "How to create a Page in Designer?")

[How to add a Layout to a Page?](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-add-a-layout-to-a-page/how-to-add-a-layout-to-a-page.md "How to add a Layout to a Page?")

[How to add a component to a Layout / Page?](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-add-a-component/how-to-add-a-component.md "How to add a component to a Page?")

[What are the available components for Pages?](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/4-Layouts/list-of-available-layouts/list-of-available-layouts.md "What are the available components for Pages?")

[How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-hide-components-on-breakpoints/how-to-hide-components-on-breakpoints.md "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?")