# File Browser

The **File Browser** component allows you to directly access the files stored in your Rapid site's *Sharepoint* folders. With the **File Browser** you can upload, download, delete, rename, open, or email the files stored in *Sharepoint*.

![A screenshot of the "File Browser" component as it appears in Explorer. The screenshot is annotated with two red boxes to assist the viewer in locating the location of the file browser component. In the upper portion of the screen, the user has selected the "Files" tab of an item. In this example, the item is a Project titled "Office Building Construction". Underneath is the Command Bar, and below it is the File Browser component. The Browser component is similar to how files appear in Windows File Explorer: each file is placed in a row. In the "Name" column, the projects are labelled as: "Project Scope - 26-03-2024.docx" "Project Scope - 26-03-2024.pdf" and "Project Scope.docx". The next column has a "download" button for each file. The icon of the download button is a cloud, with an arrow pointing downwards. The next column states when files were modified. The column afterwards states who modified the file. The final column lists the size of the files.](<File Browser Example.png>)

The **File Browser** component will be labelled `<Item Name> Files` to indicate which item's files are being accessed.

<!-- These docs regarding how to configure document storage now seems outdated as its set up automatically? Or am I missing something...? We also discuss how to set up the component in Keyper Manual. -->

## Uploading A File

### Via the Command Bar

1. Click the **Upload files** button in the **Command Bar**.

![A screenshot demonstrating the location of the "Upload files" button in the command bar. The screenshot is annotated with a red box to highlight the button's location.](<Files Upload.png>)

2. Select the intended file to upload and click **Open** in the pop-out window from your operating system's file browser.

![A screenshot demonstrating how to select a file from the operating system and then click "open" on the pop-out window. The screenshot is annotated in red. A red box surrounds the item that should be selected, then a red arrow directs the user that they must click the "Open" button afterwards.](<Files Upload OS.png>)

3. The file will now upload.

![A screenshot of the file now uploaded. The screenshot is annotated in red to show how the file will appear in a list within the component. The File's name is "Example Attachment.docx", followed by a download icon, which is a cloud with an arrow pointing downwards. In this example, the file states it was "Last Modified an hour ago". The "Modified By" column is blurred out to protect the privacy of the user. The file size is 0.0MB as it is an empty document.](<Files Upload Complete.png>)

### Via Drag-and-Drop

If the folder being viewed in the **File Browser** component is empty, the main display section of the component will display the following message:

![A screenshot of the message. There is an icon of an empty folder at the top of the message. On the first line it reads: "This folder is empty." On the second line it reads: "Drag and drop some files from your device over this area to upload them to this Project."](<Files Empty.png>)

As soon as a file is uploaded to the **File Browser** component, this message will appear. Note, however, that the functionality of dragging-and-dropping files will persist despite the message vanishing.

1. Find the relevant file in your operating system's file browser.

2. Click the file, hold the mouse, and drag it onto the display area of the component

3. Release the mouse when the cursor displays the message `+ Copy`.

4. The file will now upload.

![A screenshot that demonstrates how a file can be dragged from the operating system of a computer onto the display area of the Files Browser Component in Rapid. The screenshot is annotated with a red box to indicate the operating system's file brows, and an arrow to indicate that an item can be dragged from this browser onto the component. The mouse cursor has a faint image of the word icon, and the message '+ Copy' beneath the cursor.](<Files DragDrop.png>)

## Viewing Files

### Preview Pane



### Files as Items


- Can see a file name
- Can see a file last modified as a moment
- Can see a file modified by as a User name
- Can see the size of a file
- Can download a file inline
- Can select multiple files
- Selected files highlight for their Office colours as appropriate (doc, xls, ppt, etc)
- Selecting a file opens the preview pane if enabled
- Selecting a file does not open the preview pane if disabled
- Can toggle the preview pane

### Opening Files

- How to

## Manipulating Files

### Deleting A File

To delete a file:

1. In a configured document storage with an uploaded file, check the radio box that you wish to delete.
2. Click **Delete** in the command bar to delete the file.

### Renaming A File

To rename a file:

1. In a configured document storage with an uploaded file, check the radio box that you wish to rename.
2. Click **Rename** to rename the file.
3. Press **Enter** to save the changes.

- Files with illegal file names prompt for a rename
- When renaming a file validation warns for illegal names

### Emailing Files

To email a file:

1. In a configured document storage with an uploaded file, check the radio box that you wish to email.
2. Click **E-mail Files** to email the file.
3. The default email app will open allowing you to send an email with the file attached.

### Creating A Task with Attachments

- TODO

## Additional File Components

Rapid Platform has several additional components that are useful for storing and manipulating files. Other useful components include:

- <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/Explorer/Pages/Page%20Components/File%20Preview%20Component" target="_blank">File Preview</a>
- <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/Explorer/Pages/Page%20Components/Attachments">Attachments</a>
- <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/Explorer/Pages/Page%20Components/Embedded%20Files">Embedded Files</a>

You can also read more about <a href="https://support.office.com/en-us/article/what-is-a-document-library-3b5976dd-65cf-4c9e-bf5a-713c10ca2872">the functionality of Microsoft Sharepoint</a> on their website.