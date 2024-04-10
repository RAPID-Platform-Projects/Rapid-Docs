# All about Pages in Designer

In Designer, you can configure a [**page to host components**](</docs/Rapid/3-User Manual/glossary/glossary.md#page> "Page and component"). Rapid Platform provides you with a set of 19 components. You can create or update pages in two ways:

1. via the Design Tab of a [Table in Designer](/docs/Rapid/4-Keyper%20Manual/2-Designer/1-Tables/1-all-about-tables-in-designer/1-all-about-tables-in-designer.md "All about Tables in Designer")
2. via the Pages option in [Designer Sidebar](</docs/Rapid/3-User Manual/glossary/glossary.md#sidebar> "Sidebar"). This is also called the Pages Manager.

![Navigate to page design tab](<Navigate to Page design tab.png>)

When you create / update a page from the Design Tab of a Table in Designer, then that page is with reference to that table. However, when a page is created / updated via Pages options in Designer Sidebar, then that page is created independent of any table in the system.

To better understand, if a table is deleted then:

- The page is deleted if created via option 1. above (subject table).
- The page remains present in the system if created via option 2. above.

## Pages in Designer Sidebar (Pages Manager)

![Pages page layout](<Pages page layout.png>)

This window enables you with the following information / options

1. **Create Page** - This button is used to create a new page in the system
2. **List of all pages in the system** - This section displays the list of all the pages in the system whether created from within Table in Designer or independently. The list is arranged in alphabetical order.
3. **Find a page** - This field allows you to enter a keyword (or a part of it) to filter the list of pages. It helps you easily find your desired page from the list.

## Design Tab of Table in Designer

![Design tab page layout](<Table Design tab layout.png>)

There are certain options which are always present on the Design Tab. These are:

1. **Switch between Singular and Plural set of pages** - 
    - Singular noun refers to the [**item of the table**](</docs/Rapid/3-User Manual/glossary/glossary.md#table-items-and-columns> "Table items and columns").
    - Plural name refers to the set of items of a table. For example - A table by the name "Assets" holds information about various assets like vehicle, computer, land etc. Each of these is an item in the table and will be referred as an "Asset" (Singular Noun).  
          
        The Design Tab provides you with options to define pages for both Singular (item level) and Plural (item group level). Using this dropdown field you can switch between Singular and Plural set of pages. Therefore, allowing you to define what information would appear on selection of a single item and the information that appears for the collection of items.
2. **Switch between Details and Create Screens** - 
    - The "Details" screen refers to the page(s) that define what information will be visible for the respective Singular and Plural sets upon selection (defined above in point 1.)
    - The "Create Screen" refers to the page(s) that correspond to the information to be provides / displayed while creating a new item of the table. Create Screen is always in sync with Details, or you can say, it is a narrower (physical screen width wise) version of Details. While Details displays information to the user, the Create Screen provides options to fill-out information in a form. The Create Screen has the built-in Create button which enables you to submit the form to create a new item.  
          
    To summarise the combination of above points:
    |   | Singular (Refers to the item level set of pages) | Plural (Refers to the set of pages for a group of items) |
    |---|---|---|
    | **Details** | Defines what information will be visible when an item is selected. | Defines what information will be visible for a set of items (Table view in Explorer) |
    | **Create Screen** | Defines what information will be visible when an item is created | No role of Create Screen in Plural definition |
    
    To learn more please refer to [**How to configure Item Details and Item Creation?**](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-configure-item-details-and-item-creation/how-to-configure-item-details-and-item-creation.md "How to configure Item Details and Item Creation?")
3. **Navigate to Explorer from current page** - It is very easy to access Explorer from the table window in Designer.
    
    Once you have opened the table in designer, look at the screen and lens icon at the top right corner of the window.  
      
    ![Go to Explorer button](<Go To Explorer button.png>)
    
    This shortcut to Explorer helps you to quickly view how your Design Tab definitions are shaping up in Explorer.
4. **Save -** Any changes made to the Design Tab need to be saved. In case you do not press the Save button, the changes will not take effect in Explorer.

Please refer to the below video for illustration of above points.

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="420" src="https://www.youtube.com/embed/NyhF0gWS7lk?si=VgEXLlrMQ0yhxdY2" title="YouTube video player" width="750"></iframe>

## Features and functions for Pages in Designer

Please consider the below links to learn more about Pages in Designer

[How to create a Page in Designer?](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-create-pages/how-to-create-pages.md "How to create a Page in Designer?")

[How to add a Layout to a Page?](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-add-a-layout-to-a-page/how-to-add-a-layout-to-a-page.md "How to add a Layout to a Page?")

[What are the available layouts for Pages?](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/4-Layouts/list-of-available-layouts/list-of-available-layouts.md "What are the available layouts for Pages?")

[How to add a component to a Layout / Page?](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-add-a-component/how-to-add-a-component.md "How to add a component to a Page?")

[What are the available components for Pages?](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/3-Components/1-overview/1-overview.md "What are the available components for Pages?")

[How to move a component on layout?](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-arrange-a-component-on-a-grid/how-to-arrange-a-component-on-a-grid.md "How to move a component on layout?")

[How to configure / update component properties?](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-configure-a-component/how-to-configure-a-component.md "How to configure / update component properties?")

[How to configure Item Details and Item Creation?](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-configure-item-details-and-item-creation/how-to-configure-item-details-and-item-creation.md "How to configure Item Details and Item Creation?")

[How to set a component to be visible / hidden on "Item Details" and "Create" screens?](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-hide-components-on-breakpoints/how-to-hide-components-on-breakpoints.md "How to set a component to be visible / hidden on 'Item Details' and 'Create' screens?")

[How to delete a component from a Layout / Page?](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-delete-a-component-from-a-page/how-to-delete-a-component-from-a-page.md "How to delete a component from a Layout / Page?")

[How to delete a Layout from a Page?](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-delete-a-layout-from-a-page/how-to-delete-a-layout-from-a-page.md "How to delete a Layout from a Page?")

## Related articles

[All about *Tables* in Designer](/docs/Rapid/4-Keyper%20Manual/2-Designer/1-Tables/1-all-about-tables-in-designer/1-all-about-tables-in-designer.md "All about Tables in Designer")

[All about *Menus* in Designer](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/1-all-about-pages-in-designer.md "All about Menus in Designer")
