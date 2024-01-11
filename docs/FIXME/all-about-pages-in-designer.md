# All about Pages in Designer

In Designer, you can configure a **[page to host components](https://docs.rapidplatform.com/books/glossary/page/page-and-component "Page and component")**. Rapid Platform provides you with a set of 19 components. You can create or update pages in two ways:

1. via the Design Tab of a [Table in Designer](https://docs.rapidplatform.com/books/experiences/page/all-about-tables-in-designer "All about Tables in Designer")
2. via the Pages option in [Designer Sidebar](https://docs.rapidplatform.com/books/glossary/page/sidebar "Sidebar"). This is also called the Pages Manager.

[![PAge 2.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-10/scaled-1680-/9CdZH40JmG47jjIs-page-2.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-10/9CdZH40JmG47jjIs-page-2.png)

When you create / update a page from the Design Tab of a Table in Designer, then that page is with reference to that table. However, when a page is created / updated via Pages options in Designer Sidebar, then that page is created independent of any table in the system.

To better understand, if a table is deleted then:

- The page is deleted if created via option 1. above (subject table).
- The page remains present in the system if created via option 2. above.

##### **Pages in Designer Sidebar (Pages Manager)**

[![Pages in DesignerSidebar.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-10/scaled-1680-/ZKvxan2xdEx6d3PB-pages-in-designersidebar.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-10/ZKvxan2xdEx6d3PB-pages-in-designersidebar.png)

This window enables you with the following information / options

1. **Create Page** - This button is used to create a new page in the system
2. **List of all pages in the system** - This section displays the list of all the pages in the system whether created from within Table in Designer or independently. The list is arranged in alphabetical order.
3. **Find a page** - This field allows you to enter a keyword (or a part of it) to filter the list of pages. It helps you easily find your desired page from the list.

##### **Design Tab of Table in Designer**

[![DesignTab2.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-10/scaled-1680-/gXuLLGt0QINexbWX-designtab2.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-10/gXuLLGt0QINexbWX-designtab2.png)

There are certain options which are always present on the Design Tab. These are:

1. **Switch between Singular and Plural set of pages** - 
    - Singular noun refers to the **[item of the table](https://docs.rapidplatform.com/books/glossary/page/table-items-and-columns "Table items and columns")**.
    - Plural name refers to the set of items of a table. For example - A table by the name "Assets" holds information about various assets like vehicle, computer, land etc. Each of these is an item in the table and will be referred as an "Asset" (Singular Noun).  
          
        The Design Tab provides you with options to define pages for both Singular (item level) and Plural (item group level). Using this dropdown field you can switch between Singular and Plural set of pages. Therefore, allowing you to define what information would appear on selection of a single item and the information that appears for the collection of items.
2. **Switch between Details and Create Screen breakpoints** - 
    - The "Details" breakpoint refers to the page(s) that define what information will be visible for the respective Singular and Plural sets upon selection (defined above in point 1.)
    - The "Create Screen" refers to the page(s) that correspond to the information to be provides / displayed while creating a new item of the table. Create Screen is always in sync with Details, or you can say, it is a narrower (physical screen width wise) version of Details. While Details displays information to the user, the Create Screen provides options to fill-out information in a form. The Create Screen has the built-in Create button which enables you to submit the form to create a new item.  
          
        To summarise the combination of above points:
        
        <table border="1" style="border-collapse: collapse; width: 106.839%;"><tbody><tr><td style="width: 36.6539%;">  
        </td><td style="width: 31.2783%;">##### **Singular** 
        
        **\* refers to the item level set of pages**
        
        </td><td style="width: 32.123%;">##### **Plural**
        
        **\* refers to set of pages for a group of items**
        
        </td></tr><tr><td style="width: 36.6539%;">##### **Details**
        
        **\* defines what information is visible upon selection**
        
        </td><td style="width: 31.2783%;">Defines what information will be visible when an item is selected.
        
        </td><td style="width: 32.123%;">Defines what information will be visible for a set of items (Table view in Explorer)</td></tr><tr><td style="width: 36.6539%;">##### **Create Screen** 
        
        **\* always in sync with Details**
        
        **\* provides option to submit item details to the system to create a new item**
        
        </td><td style="width: 31.2783%;">Defines what information will be visible when an item is created
        
        </td><td style="width: 32.123%;">No role of Create Screen in Plural definition</td></tr></tbody></table>
        
          
        To learn more please refer to [***How to configure Item Details and Item Creation?***](https://docs.rapidplatform.com/books/experiences/page/how-to-configure-item-details-and-item-creation "How to configure Item Details and Item Creation?")
3. **Navigate to Explorer from current page** - It is very easy to access Explorer from the table window in Designer.
    
    Once you have opened the table in designer, look at the screen and lens icon at the top right corner of the window.  
      
    [![Screenshot 2023-10-11 at 11.56.39.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-10/scaled-1680-/CqwHHbRQmAo2jaZC-screenshot-2023-10-11-at-11-56-39.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-10/CqwHHbRQmAo2jaZC-screenshot-2023-10-11-at-11-56-39.png)  
    This shortcut to Explorer helps you to quickly view how your Design Tab definitions are shaping up in Explorer.
4. **Save -** Any changes made to the Design Tab need to be saved. In case you do not press the Save button, the changes will not take effect in Explorer.

Please refer to the below video for illustration of above points.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="420" src="https://www.youtube.com/embed/NyhF0gWS7lk?si=VgEXLlrMQ0yhxdY2" title="YouTube video player" width="750"></iframe>

##### **Features and functions for Pages in Designer**

Please consider the below links to learn more about Pages in Designer

[How to create a Page in Designer?](https://docs.rapidplatform.com/books/experiences/page/how-to-create-a-page "How to create a Page in Designer?")

[How to add a Layout to a Page?](https://docs.rapidplatform.com/books/experiences/page/how-to-add-a-layout-to-a-page "How to add a Layout to a Page?")

[What are the available layouts for Pages?](https://docs.rapidplatform.com/books/experiences/page/what-are-the-available-layouts-for-pages "What are the available layouts for Pages?")

[How to add a component to a Layout / Page?](https://docs.rapidplatform.com/books/experiences/page/how-to-add-a-component-to-a-page "How to add a component to a Page?")

[What are the available components for Pages?](https://docs.rapidplatform.com/books/experiences/page/what-are-the-available-components-for-pages "What are the available components for Pages?")

[How to move a component on layout?](https://docs.rapidplatform.com/books/experiences/page/how-to-move-a-component-on-layout "How to move a component on layout?")

[How to configure / update component properties?](https://docs.rapidplatform.com/books/experiences/page/how-to-configure-update-component-properties "How to configure / update component properties?")

[How to configure Item Details and Item Creation?](https://docs.rapidplatform.com/books/experiences/page/how-to-configure-item-details-and-item-creation "How to configure Item Details and Item Creation?")

[How to set a component to be visible / hidden on "Item Details" and "Create" breakpoints?](https://docs.rapidplatform.com/books/experiences/page/how-to-set-a-component-to-be-visible-hidden-on-item-details-and-create-breakpoints "How to set a component to be visible / hidden on "Item Details" and "Create" breakpoints?")

[How to delete a component from a Layout / Page?](https://docs.rapidplatform.com/books/experiences/page/how-to-delete-a-component-from-a-layout-page "How to delete a component from a Layout / Page?")

[How to delete a Layout from a Page?](https://docs.rapidplatform.com/books/experiences/page/how-to-delete-a-layout-from-a-page "How to delete a Layout from a Page?")

##### **Related articles** 

**[All about *Tables* in Designer](https://docs.rapidplatform.com/books/experiences/page/all-about-tables-in-designer "All about Tables in Designer")**

[**All about *Menus* in Designer**](https://docs.rapidplatform.com/books/experiences/page/all-about-menus-in-designer "All about Menus in Designer")

<div class="pointer-container" id="bkmrk-%C2%A0-2"><div class="pointer anim is-page-editable"><svg class="svg-icon" data-icon="link" role="presentation" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg><div class="input-group inline block"><input id="bkmrk--2" placeholder="url" readonly="readonly" type="text"></input> <button class="button outline icon" data-clipboard-target="#pointer-url" title="Copy Link" type="button"><svg class="svg-icon" data-icon="copy" role="presentation" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg></button></div><svg class="svg-icon" data-icon="edit" role="presentation" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg></div></div>[***Go back to Designer Learning Resource***](https://docs.rapidplatform.com/books/experiences/page/how-to-access-designer-dezigna-application "How to access Designer (Dezigna application)?")