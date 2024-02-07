# The File Browser component

## File Browser component overview

Rapid Platform allows you to set up SharePoint folders for each item. The File Browser component can be perceived as an interface to the relevant SharePoint folder. It allows you to access the relevant SharePoint folder, upload new files, view the contents of the folder, add folders and much more, all from within the Explorer interface.

## How to set up File Browser component in Designer

- You can [**add the File Browser component on to the Layout / Page**](https://docs.rapidplatform.com/books/experiences/page/how-to-add-a-component-to-a-layout-page "How to add a component to a Layout / Page?"). This component is present on the Individual Item (Singular) Details breakpoint [**by default**](https://docs.rapidplatform.com/books/experiences/page/how-to-configure-item-details-and-item-creation "How to configure Item Details and Item Creation?"). It is in the Files Tab. 

    ![File browser in component list](<File browser in component list.png>)

- If the File Browser component is on a Grid Layout, you can [**resize and move the component over the layout**](https://docs.rapidplatform.com/books/experiences/page/how-to-arrange-a-component-on-grid-layout "How to arrange a component on Grid layout?").
- You can set the **[visibility of File Browser on the Details breakpoint](https://docs.rapidplatform.com/books/experiences/page/how-to-set-a-component-to-be-visible-hidden-on-item-details-and-create-breakpoints "How to set a component to be visible / hidden on "Item Details" and "Create" breakpoints?").   

    ![Visibility toggle](<../Visiblity toggle.png>)

- You can set the **[visibility of File Browser on the Create Screen breakpoint](https://docs.rapidplatform.com/books/experiences/page/how-to-set-a-component-to-be-visible-hidden-on-item-details-and-create-breakpoints "How to set a component to be visible / hidden on "Item Details" and "Create" breakpoints?").   

    ![Display toggle](<../Display toggle.png>)

- You can configure the File Browser component by clicking on the Edit (pencil) icon. 

    ![Edit panel](<Edit panel.png>)
    
- You can enable / disable whether the preview pane (in the File Browser - Explorer) should appear by default or not. 

    ![Toggling default preview state](<Toggling default preview state.png>)

**Please note:**

- Although Files Browser component is present on the Files Tab of the Individual Item (Singular) Details breakpoint [**by default**,](https://docs.rapidplatform.com/books/experiences/page/how-to-configure-item-details-and-item-creation "How to configure Item Details and Item Creation?") you can add it to other layouts as well.
- Files Browser component provides an interface to the Individual Item's SharePoint folder, therefore, although you can (theoretically) add the component to the Group Items List (Plural) level, yet it doesn't make logical purpose there.
- You can configure the default for preview pane from Designer, however, you can open / close the preview pane in Explorer.
- It is worth noting that for each data table has a SharePoint Folder allocated within a SharePoint Drive. Each new item is created as a folder within the Table's SharePoint folder. The File Browser points to the item's SharePoint Folder.

## Related articles

[**File Preview component**](https://docs.rapidplatform.com/books/experiences/page/what-is-a-file-preview-component-on-a-layout-page "What is a File Preview component on a Layout / Page?")

[**Attachments component**](https://docs.rapidplatform.com/books/experiences/page/what-is-an-attachments-component-on-a-layout-page "What is an Attachments component on a Layout / Page?")

[**Embedded Files component**](https://docs.rapidplatform.com/books/experiences/page/what-is-an-embedded-files-component-on-a-layout-page "What is an Embedded Files component on a Layout / Page?")
