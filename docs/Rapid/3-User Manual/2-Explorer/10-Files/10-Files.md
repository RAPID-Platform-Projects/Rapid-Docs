# Files

When moving to Rapid, a common question is: "How do I store files on Rapid?"

Rapid offers several solutions for file management, which will allow you to not only store files, but to also connect those files to items in your Rapid site.

## Microsoft Sharepoint

Rapid's file management system is built upon Microsoft's *Sharepoint*, which is a cloud-based file storage system. This means that your files can be uploaded to *Sharepoint* and do not need to be stored on a local hard drive.

You can access all of your files directly using Sharepoint, or you can choose to manipulate them using Rapid components. Below, we will discuss how to do both.

## File Tabs on Items

### File Browser Component

By default, all Rapid [items](</docs/Rapid/3-User Manual/2-Explorer/2-Items/1-items-overview/1-items-overview.md>) include a **Files** tab.

The **Files** tab directs us to a [File Browser](</docs/Rapid/3-User Manual/2-Explorer/3-Pages/2-Page Components/file-browser/1-File-Browser/1-File-Browser.md>) component, which will display a *Sharepoint* folder containing all files stored against this item. This means we can quickly access an item, and then see all its associated files.

:::note[Example]
For an upcoming project, you are given a .PDF document that contains the signatures of key stakeholders who have signed off on the project. You can store a this .PDF document, or any other type of file, so that it appears in the "Files" tab of the Project item. 
:::

The **File Browser** allows you to upload, download, delete, rename, open, or email the files stored in *Sharepoint*. A sample of how files are displayed in **Explorer** via the **File Browser** component is below.

![A screenshot of the "File Browser" component as it appears in Explorer. The screenshot is annotated with two red boxes to assist the viewer in locating the location of the file browser component. In the upper portion of the screen, the user has selected the "Files" tab of an item. In this example, the item is a Project titled "Office Building Construction". Underneath is the Command Bar, and below it is the File Browser component. The Browser component is similar to how files appear in Windows File Explorer: each file is placed in a row. In the "Name" column, the projects are labelled as: "Project Scope - 26-03-2024.docx" "Project Scope - 26-03-2024.pdf" and "Project Scope.docx". The next column has a "download" button for each file. The icon of the download button is a cloud, with an arrow pointing downwards. The next column states when files were modified. The column afterwards states who modified the file. The final column lists the size of the files.](<File Browser Example.png>)

- Read an in-depth guide about [how to use the **File Browser**](</docs/Rapid/3-User Manual/2-Explorer/3-Pages/2-Page Components/file-browser/1-File-Browser/1-File-Browser.md>).

### File Preview Component

Files can also be previewed within **Explorer**. When a file is selected using the **File Browser**, a preview of the file and its contents will appear on the right-hand panel.

![A screenshot of the file preview component on the files tab. The screenshot is annotated in red. A label that reads "File Preview component on Files Tab" points towards the component, which is also annotated with a red box surrounding it. Inside the file previewer is the Rapid Platform logo.](<File Preview 1.png>)

- Read a detailed explanation about [how to use the **Attachments Component**](</docs/Rapid/3-User Manual/2-Explorer/3-Pages/2-Page Components/Attachments/Attachments.md>).

## Attachments Component

The **Attachments Component** allows you to display a file more prominently on an item's page alongside other page components or column fields.

![A screenshot demonstrating how the Attachments component appears on the Rapid site. The screenshot is annotated with a red box that highlights the location of the component on the page. In this example, the attachment component is placed on a "Project" page, underneath the "Project Wrap-up / Sign-off" section. The component displays a word document icon, the title of the file ("Example Attachment.docx") as well as three buttons bellow it: "Open", "Download", and "Remove".](<File Attachments Example.png>)

Note that files which are attached to an item using this component will also appear in the **File Browser** component, but inside a folder labelled "Attachments".

- Read a detailed explanation about [how to use the **Attachments Component**](</docs/Rapid/3-User Manual/2-Explorer/3-Pages/2-Page Components/Attachments/Attachments.md>).