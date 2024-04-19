# File Browser

The **File Browser** component allows you to directly access the files stored in your Rapid site's *Sharepoint* folders. With the **File Browser** you can upload, download, delete, rename, open, or email the files stored in *Sharepoint*.

![A screenshot of the "File Browser" component as it appears in Explorer. The screenshot is annotated with two red boxes to assist the viewer in locating the location of the file browser component. In the upper portion of the screen, the user has selected the "Files" tab of an item. In this example, the item is a Project titled "Office Building Construction". Underneath is the Command Bar, and below it is the File Browser component. The Browser component is similar to how files appear in Windows File Explorer: each file is placed in a row. In the "Name" column, the projects are labelled as: "Project Scope - 26-03-2024.docx" "Project Scope - 26-03-2024.pdf" and "Project Scope.docx". The next column has a "download" button for each file. The icon of the download button is a cloud, with an arrow pointing downwards. The next column states when files were modified. The column afterwards states who modified the file. The final column lists the size of the files.](<File Browser Example.png>)

The **File Browser** component will be labelled `<Item Name> Files` to indicate which item's files are being accessed.

<!-- These docs regarding how to configure document storage now seems outdated as its set up automatically? Or am I missing something...? We also discuss how to set up the component in Keyper Manual. -->

## Viewing Files

### Files as Items

Using the **File Browser** component, we are able to view a variety of file attributes and information. If we examine the example file item below, the following information is visible:

![A screenshot of the example file item "Example Attachment.docx" again.](<Files Item.png>)

| Column | Example | Explanation |
| --- | --- | --- |
| Icon | ![A screenshot of the Microsoft Word icon, zoomed in from the image above. It resembles a written page, with a blue W logo atop it.](<Files Word Example.png>) | Here the file's icon is displayed. In this example, a word document icon appears.|
| Name | Example Attachment.docx | Here the name of the file, and the file's extension are written out.|
| Download | ![A screenshot of the download icon, zoomed in from the image above. It resembles a cloud with an arrow descending from it.](<Files Download Button.png>) | Clicking this button will download the file to your computer.|
| Last Modified | 2 minutes ago | This is the (relative) time that the file was uploaded or last updated. |
| Modified by | Blurred out in this example for privacy reasons. | Here, the full name of the User or System that uploaded the file or edited it, will be displayed.
| Size | 0.0MB | This is the size of the file in megabytes. The document in this example is very small (less than 1MB), so it appears as 0MB here.|

### Selecting Multiple Files

Rapid Platform allows you to select multiple files at once. This allows you to use a button from the [Command Bar](</docs/Rapid/3-User Manual/glossary/glossary.md#command-bar>), and apply its commands to multiple items. Essentially, files in the **Files Browser** behave similarly to items in **Explorer's Tables**.

- Read about [how to select multiple items in a Table](</docs/Rapid/3-User Manual/2-Explorer/1-Tables/3-manipulating-data-using-tables/3-manipulating-data-using-tables.md#selecting-multiple-items>)

### File Preview

When **an item is selected** using its selection circle, a preview of the file's contents will be generated in the *File Preview* if the file is a common filetype (e.g. `.DOCX`, `.CSV`, `.PDF`, `.JPG`, `.PNG`, etc.)

For this to happen, the **File Preview** must be enabled by your system administrator. The **File Preview** can also be revealed or hidden by using the **Details** button in the **File Browser's** [Command Bar](</docs/Rapid/3-User Manual/glossary/glossary.md#command-bar>).

1. Ensure an item is selected in the **File Browser**.

![Alt text](<Files Selected Item.png>)

2. Press the **ⓘ Details** button in the **Command Bar**.

![A screenshot that shows the location of the details button. The screenshot is annotated with a red box to highlight the location of the button. The "Details" button has an icon of the letter "i" enclosed within a circle: symbolising that this button provides further information.](<Files Selected Item Details Button.png>)

3. If the **File Preview** is enabled, it will appear as a side panel on the right-hand side of the site.

![A screenshot of the File Preview and how it appears on the Rapid site. The screenshot is annotated with a red box that surrounds the File Preview. There is also a red arrow indicating that the item which has been selected is now displaying in the preview file.](<Files Selected Item Details Pane.png>)

4. If *multiple items* are selected, navigation arrows will appear at the top of the **File Preview** so that you can navigate between the files being previewed. In the centre of the arrows is displayed the name of the current document being previewed.

![A screenshot showing how the navigation arrows appear in the header. This is a "zoomed-in" view of the header from the previous image. The screenshot is annotated with red boxes to highlight the location of the arrows that point left and right at either side of the blue heading. The name of the current file is displayed in the centre of the header.](<Files Selected Multipane.png>)

- Read more about [how to use the **File Preview Component**](</docs/Rapid/3-User Manual/2-Explorer/3-Pages/2-Page Components/File Preview Component/File Preview Component.md>).

## Upload Files via Drag-and-Drop

If the folder being viewed in the **File Browser** component is empty, the main display section of the component will display the following message:

![A screenshot of the message. There is an icon of an empty folder at the top of the message. On the first line it reads: "This folder is empty." On the second line it reads: "Drag and drop some files from your device over this area to upload them to this Project."](<Files Empty.png>)

As soon as a file is uploaded to the **File Browser** component, this message will appear. Note, however, that the functionality of dragging-and-dropping files will persist despite the message vanishing.

1. Find the relevant file in your operating system's file browser.

2. Click the file, hold the mouse, and drag it onto the display area of the component

3. Release the mouse when the cursor displays the message `+ Copy`.

4. The file will now upload.

![A screenshot that demonstrates how a file can be dragged from the operating system of a computer onto the display area of the Files Browser Component in Rapid. The screenshot is annotated with a red box to indicate the operating system's file brows, and an arrow to indicate that an item can be dragged from this browser onto the component. The mouse cursor has a faint image of the word icon, and the message '+ Copy' beneath the cursor.](<Files DragDrop.png>)

In the next article, we will learn about the **File Browser's Command Bar** and its various functions, including an alternative method of file uploading.