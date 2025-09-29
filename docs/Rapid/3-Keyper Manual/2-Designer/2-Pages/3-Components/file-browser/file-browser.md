# File Browser

## File Browser component overview

Rapid Platform allows you to set up SharePoint folders for each item. The File Browser component can be perceived as an interface to the relevant SharePoint folder. It allows you to access the relevant SharePoint folder, upload new files, view the contents of the folder, add folders and much more, all from within the Explorer interface.

## How to set up File Browser component in Designer

- You can [add the File Browser component on to the Layout / Page](/docs/Rapid/3-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-add-a-component/how-to-add-a-component.md "How to add a component to a Layout / Page?"). This component is present on the Individual Item (Singular) Details breakpoint [by default](/docs/Rapid/3-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-configure-item-details-and-item-creation/how-to-configure-item-details-and-item-creation.md "How to configure Item Details and Item Creation?"). It is in the Files Tab. 

    ![File browser in component list](<File browser in component list.png>)

- If the File Browser component is on a Grid Layout, you can [resize and move the component over the layout](/docs/Rapid/3-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-arrange-a-component-on-a-grid/how-to-arrange-a-component-on-a-grid.md "How to arrange a component on Grid layout?").
- You can set the **[visibility of File Browser on the Details breakpoint](/docs/Rapid/3-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-hide-components-on-breakpoints/how-to-hide-components-on-breakpoints.md "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?").   

    ![Visibility toggle](<../Visiblity toggle.png>)

- You can set the [visibility of File Browser on the Create Screen breakpoint](/docs/Rapid/3-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-hide-components-on-breakpoints/how-to-hide-components-on-breakpoints.md "How to set a component to be visible / hidden on "Item Details" and "Create" breakpoints?").   

    ![Display toggle](<../Display toggle.png>)

- You can configure the File Browser component by clicking on the Edit (pencil) icon. 

    ![Edit panel](<Edit panel.png>)
    
- You can enable / disable whether the preview pane (in the File Browser - Explorer) should appear by default or not. 

    ![Toggling default preview state](<Toggling default preview state.png>)

**Please note:**

- Although Files Browser component is present on the Files Tab of the Individual Item (Singular) Details breakpoint [by default,](/docs/Rapid/3-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-configure-item-details-and-item-creation/how-to-configure-item-details-and-item-creation.md "How to configure Item Details and Item Creation?") you can add it to other layouts as well.
- Files Browser component provides an interface to the Individual Item's *SharePoint* folder, therefore, although you can (theoretically) add the component to the Group Items List (Plural) level, it does not have a logical purpose there.
- You can configure the default setting (open or closed) for the **Preview Pane** from **Designer**. However, the user can open or close the preview pane in Explorer.
- It is worth noting that for each file, a Table has a *SharePoint* Folder allocated within a *SharePoint* Drive. Each new item is created as a folder within the Table's SharePoint folder. The File Browser points to the item's SharePoint Folder.

## Configuring Document Storage

1. When viewing the **File Browser** component on an item page, if the Table has not had its document storage configured, the component will display the following message:

![A screenshot of how the File Browser component will appear if document storage has not been established for a particular table. The component's command bar buttons are now grey. In the middle of the component is a question mark icon, inside a circle. The message to the user reads: "Document storage has not been configured for (name of table) items." Underneath the message is a button that reads "Open Designer".](<Files Browser Not Configured.png>)

2. Press the "Open Designer" button to launch the **Designer** application

![This screenshot is a "zoomed-in" view of the message and button from the previous image. The screenshot is annotated with a red box to indicate the location of the "Open Designer" button.](<Files Browser Button.png>)

3. In the **Designer** options page that opens, select the desired Document Library using the drop-down menu in the *Document Storage* section (this section is highlighted in the image below)

![A screenshot of the Options page for a Table. The screenshot is annotated with a red box to indicate the "Document Storage" location of the Options page, where the user will need to select a document library.](<Files Browser Designer.png>)

4. Select the desired documents folder in the desired *Storage Location*.

5. Ensure you **Save** your changes.

## Related articles

- [**File Preview** component](/docs/Rapid/3-Keyper%20Manual/2-Designer/2-Pages/3-Components/file-preview/file-preview.md "What is a File Preview component on a Layout / Page?")
- [**Attachments** component](/docs/Rapid/3-Keyper%20Manual/2-Designer/2-Pages/3-Components/attachments/attachments.md "What is an Attachments component on a Layout / Page?")