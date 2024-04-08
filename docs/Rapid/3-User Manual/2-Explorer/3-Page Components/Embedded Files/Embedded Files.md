# Embedded Files Component
The *Embedded Files* component allows you to attach files to an item in Rapid so that they are more visible, and have additional functionality.

### Viewing Embedded Files in a Table
While *Embedded Files* will appear as files in the default **Files** tab of an item's page, they are also visible when viewing an item in a Table. 

![A screenshot that demonstrates how embedded files appear as rows in a table. Each embedded file is added to a progress bar, to represent how many expected files have been uploaded to their respective containers in the embedded files tabstrip component.](<Embedded Files Table View.png>)

You can visit the <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/Explorer/Tables%20and%20items/data-tables/viewing-dates-and-files-using-tables#viewing-file-data" target="_blank">Viewing Files Using Tables</a> section to learn more about how *Embedded Files* are displayed in a Table.

## The Tabstrip Component
### Component Appearance
- label (generated embedded file name if configured correctly)
- Files retain their source name when uploaded with no file name configured
- thumbnail (when images or certain types of docs are uploaded)

### Rendering the Component on the Tabstrip
- the embedded files component must be configured by a user before it will render in the tabstrip
- to do this...
- explain multimode here as well, and link to the title below

### Embedded Files Dropdown Menu
- Can open the containing folder when a file is uploaded
- Can download the file when a file is uploaded
- Can remove the file and delete it from SharePoint

## Uploading Files
- Can upload files for generated embedded file definitions
- Uploading the same file in single mode replaces the existing file

## Multi-Mode Embedded Files
- can have multiple files uploaded simultaneously
- can each be downloaded or removed separately
- uploading new files in multi mode adds to the number of files

- Can see defined embedded file definitions when on the item
- Selecting a drive for an item with no DriveID prompts to fix it
- Selecting a drive for an item with no folderID creates one
- When configured for 'this item' which has no folderId, generates a folder on initial upload