# Attachments

Files may be attached to any item in Rapid, using the Attachments page component. For example, you may wish to:
- Upload a .PDF invoice to a project
- Attach a .DOCX purchase request to an asset
- Add an old .CSV spreadsheet to a quote
- Include an image file containing an employee's forklift license

Rapid enables you to upload external documentation, so it is accessible from within the system.

<a href="https://docs.rapidplatform.com/docs/Rapid/Keyper%20Manual/Designer/Pages/Components/attachments/" target="_blank">**Click here**</a> to learn about adding the **Attachments** component to your site.

## Using the Attachments Component
When viewing the **Attachments** component in **Explorer**, it will appear as a large "Upload" in the Command Bar.

![A screenshot showing how the Attachments component is displayed in Explorer. The Attachments component appears as a large "upload" icon: an arrow pointing upwards to a horizontal](<Attachments Upload Icon.png>)

There are two methods for uploading files using the **Attachments** component.
1. You can click the **Upload** icon to open your file browser, and select the files you wish to upload.

![A screenshot showing how the Attachments component uses your file browser and allows you to upload multiple files.](<Attachments OS Upload.png>)

2. You can also drag files from your device, onto the **Attachments** component.

## Attachment Records
While a file is uploading, a loading icon and progress bar will appear in the component. Once the file has finished uploading, the file's *Title*, *Type*, and *Icon* will be displayed as an **Attachment Record**. The Attachments component also includes options for you to *Open*, *Download*, or *Remove* the file.

Next, we will closely examine the **Attachment Record** that is created when attaching a file, and the functionality it provides.

![A screenshot demonstrating what an Attachment will look like once it is uploaded. The attachment has an icon, a title, and the file type or extension.](<Attachments Successful.png>)

### Downloading an Attachment Record
Files can also be downloaded from an **Attachment Record**, using the **Download** button.

1. **Click** on the Attachments component to see a drop-down menu
2. **Select** the file name you wish to download
3. **Select** "Download" from the side menu that opens

The file will appear in your browser's download history, and in the downloads folder on your device.

![A screenshot that displays how an Attachment Record has a "Download" button, that allows the user to download the attachment directly to their PC.](<Attachments Download.png>)

### Removing an Attachment Record
An Attachment Record can be removed. The file attached to the item will also be deleted.

1. **Click** on the Attachments component to see a drop-down menu
2. **Select** the file name you wish to download
3. **Select** "Remove" from the side menu that opens

![A screenshot that displays how an Attachment Record has a "Remove" button, where the attached files will be deleted from the item.](<Attachments Remove.png>)

### Uploading additional files
Multiple files may be uploaded to the Attachments component. The component will display multiple files if they are uploaded.

![A screenshot depicting multiple files that have been uploaded to the Attachments component.](<Attachments Multiple.png>)

## Attachments Page Component

In addition to appearing in the Command Bar, the Attachments component will also appear on an item's page. Below is an example of how the Attachments component can appear on the page, as well as its functionality.

![A screenshot demonstrating how the Attachments page component appears on the page. The component is a list of files, with a scroll bar on the far right. There are four red labels, numbered 1-4, which are annotated atop the image.](<Attachments Page Component.png>)

1. File identifier image
2. File name
3. Download file
4. Remove file

## Folders
All files uploaded via the **Attachments** component are placed inside an "Attachments" folder in your organisation's sharepoint. If an Attachments folder does not exist, the component will create this folder when the first file is uploaded.

Note that you can view any files or folders attached to an item by clicking the **Files** tab at the top of an item's page.

![A screenshot showing how to view the files and folders attached to an item. The user must navigate to the "Files" tab at the top of an item's page.](<Attachments Folders.png>)

You can open the "Attachments" folder, to view the attachment files inside. Additionally, the **Files** tab allows you to view the files inside your organisation's SharePoint, change the folder they are located in, or preview the file in the preview pane on the right.

![A screenshot demonstrating how files from the Attachments component are displayed in the files tab of an item. The screenshot also indicates how to find the exact SharePoint file where an attachment is being stored.](<Attachments Sharepoint.png>)

## Additional File Components
Rapid Platform has several additional components that are useful for storing and manipulating files. Other useful components include:
- <a href="https://docs.rapidplatform.com/docs/Rapid/User%20Manual/Explorer/Page%20Components/File%20Preview%20Component" target="_blank">File Preview</a>
- <a href="https://docs.rapidplatform.com/docs/Rapid/User%20Manual/Explorer/Page%20Components/Embedded%20Files">Embedded Files</a>
- <a href="https://docs.rapidplatform.com/docs/Rapid/User%20Manual/Explorer/Page%20Components/file-browser">File Browser</a>