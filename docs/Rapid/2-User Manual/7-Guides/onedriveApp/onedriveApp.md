---
title: Managing files with OneDrive Mobile
---

# Working with the OneDrive Mobile App and Rapid Files

When working with files in Rapid, everything is hosted on MS SharePoint. You can access these files via your SharePoint site directly, MS Teams and the OneDrive app.
This article covers different ways to get from files & folders on Rapid Items to the same on OneDrive. 

## Item folders and Rapid files
Files in Rapid are stored in the SharePoint site configured at the table level. For example all Task files will all be located in the same place. We call these Table Folders.

![Tasks in Designer showing the folder being set](<Tasks Folder Setup.png>)

Here Tasks **(1)** has been configured in designer to use the Documents folder within Sharepoint **(2)**. You can navigate directly to this location in SharePoint using the blue link text.

Table folders have a new folder created for each item with files inside. We call these sub-folders Item Folders. By default the folder name matches the title of the created item, but there are different configuration options to control file names. Item Folders can be renamed and moved anywhere within SharePoint without the Rapid item 'losing' them. It is recommended to keep Item Folders organised under their Table Folder for consistancy.

![Task with an empty folder in Explorer](<Task Files Empty.png>)

Here we have a Task **(1)** with a local folder set. You can navigate directly to this folder using the SharePoint button **(2)**.

![Task folder in SharePoint](<Tasks Folder Empty in SharePoint.png>)

## OneDrive advantages

Working with files on mobile can be greatly enhanced using the OneDrive app. Here are some key benefits that make it a powerful tool for file management on the go.

### Uploading files from your device
With the OneDrive app, uploading files directly from your mobile device is quick and easy. Whether it’s photos, documents, or any other type of file, you can conveniently upload them to the appropriate folder in Rapid site. This ensures that your important files are backed up and accessible from any device, eliminating the hassle of transferring files manually later.

### Downloading files for offline use
One of the standout features of the OneDrive app is the ability to mark files for offline use. This allows you to keep a local copy on your device that stays in sync with your Rapid site whenever you have internet access. While offline files are marked as read-only, they provide the flexibility to view important documents, presentations, or images without needing a data connection. This is particularly useful for travel or in areas with limited connectivity, ensuring you always have access to your essential files.

To [mark a file for offline use](https://support.microsoft.com/en-au/office/working-offline-with-onedrive-ad1c0938-aa89-4a6b-8775-a35998fb6ecf):
1) Open the OneDrive App and navigate to the file of your choice
2) Select the vertical three dots to open the file menu

![Files in the OneDrive App](<Task Folder in OneDrive.jpg>)

3) Enable the 'Make available offline' toggle

![File menu in OneDrive](<Onedrive Set File Offline.jpg>)

### Uploading files while offline
You have the ability to mark folders for offline access. This feature allows you to directly access your important files from the offline menu, ensuring that you can work without interruptions. 

If you upload a file to an offline folder while you’re not connected to the internet, it will be securely stored and automatically uploaded the next time you have Wi-Fi access. This seamless syncing process ensures that your files are always up to date, giving you peace of mind while you work remotely.

#### Marking a folder for offline use

1) Open the OneDrive app and navigate to the folder you want to use offline
2) Select the vertical three dots to open the file menu

![Folder menu button in OneDrive](<Onedrive navigate to folder.jpg>)

3) Enable the 'Make available offline' toggle

![Marking a folder for offline](<OneDrive mark folder offline.jpg>)

#### Uploading while offline

While offline you can 'upload' files to offline folders which will wait until you have internet again to upload. You can navigate to the marked folder as above, or navigate directly from the Me tab like so:

1) Open the Me tab **(1)** and select 'Files available offline' **(2)**

![OneDrive Me tab showing options](<OneDrive ME page.jpg>)

2) From the list of offline folders, select your chose folder. Note the Offline checkmark indictates the folder is available for syncing.

![OneDrive list of offline folders](<OneDrive list of offline folders.jpg>)

Once you are in your chose folder, press the top + (plus) button to bring up the upload menu.

![Upload menu on a synced folder](<Onedrive upload to folder.jpg>)

Select Upload **(1)** to choose files from your device to add to the folder.

![File waiting to be uploaded](<Offline folder with pending upload.jpg>)

Once you have added the file(s), they will be sitting in a pending state with an empty progress bar. These files will persist even after closing the app.

![File uploading](<OneDrive uploading folder when online.jpg>)

Once you are back online OneDrive will try to sync the files to the cloud. You can see the upload happening here while the app is open.

![OneDrive upload notification panel](<OneDrive upload notification.jpg>)

Alternatively, even when the app is closed OneDrive will try to sync pending files. You will see an upload notification on your notification bar as its progressing.

:::warning
Using the document scan feature within OneDrive while offline will always fail. To upload photos it is advised to use your photo app and upload directly from the camera roll while offline.
:::

## Finding item folders

### Navigating through the app
You can access SharePoint folders directly from the OneDrive app.

1) First open the Libaries tab. This will show all the SharePoint sites and Teams you have access to. Select the SharePoint site for your Rapid site.

![OneDrive Libary Tab](<OneDrive Libary Tab.jpg>)

2) Open the drive the list you are trying to find files for is configured to. By default this is `Documents`

![Selected Libary list of Drives](<OneDrive Documents.jpg>)

3) Navigate to the Table Folder for your item

![Folders in OneDrive](<OneDrive List of Table Folders.jpg>)

4) Finally find the folder for your item in the list

![Opened task folder](<Task Folder in OneDrive Raw.jpg>)


:::tip[Attachments]
Some files in Rapid are stored against an item as an [Attachment](/docs/Rapid/2-User%20Manual/2-Explorer/10-Files/10-Files.md). Attachments are contained within the Item Folder under a `Attachments` sub folder.
:::