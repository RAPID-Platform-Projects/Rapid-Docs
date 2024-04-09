# Embedded Files Component
The *Embedded Files* component allows you to attach files to an item in Rapid so that they are more visible, and have additional functionality.

### Viewing Embedded Files in a Table
While *Embedded Files* will appear as files in the default **Files** tab of an item's page, they are also visible when viewing an item in a Table. 

![A screenshot that demonstrates how embedded files appear as rows in a table. Each embedded file is added to a progress bar, to represent how many expected files have been uploaded to their respective containers in the embedded files tabstrip component.](<Embedded Files Table View.png>)

You can visit the <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/Explorer/Tables%20and%20items/data-tables/viewing-dates-and-files-using-tables#viewing-file-data" target="_blank">Viewing Files Using Tables</a> section to learn more about how *Embedded Files* are displayed in a Table.

### Viewing Embedded Files in the Files Preview Component
If an item's page is also configured with the *File Preview Component*, then a preview of the *Embedded File* will appear in the preview pane. This is will be most apparent when visiting the **Files** Tab when inspecting an item. You can learn more by visiting the <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/Explorer/Page%20Components/File%20Preview%20Component" target="_blank">Files Preview Component</a> page.

![A screenshot that describes](<Embedded Files Preview.png>)

## The Page Component
The component can be configured to appear on the details page of an item. When configured this way, the page component will appear as follows:

![A screenshot that shows how the page component for Embedded Files appears to the user. The component is a bevelled rectangle surrounded by a faint, dashed line border. At the top of the component is the label for the Embedded File. In the example provided, the label read "Policy". Below the label for the Embedded file is a faint grey box. Inside the grey box is the "Upload File" icon, and the prompt: "Click to choose a file, or drag a file into this area".](<Embedded Files Page Component.png>)

Note the component has the following attributes:

| *Attribute* | Description |
| --- | --- |
| *Label* | If configured by your system administrator, an *Embedded File* component will provide a label for the expected file that will be uploaded into the component. In the example above, the expected file is a "Policy" document.|
| *Attachment Area* | This section allows you to click and open a file using your computer's file browser, or to drag-and-drop a file from your computer onto the field. |

> **Important:** When a *Label* is provided (e.g. "Policy"), then the document that is uploaded will be **renamed**. For example, the Word document titled **Example.docx** will be renamed **Policy.docx** automatically. If no *Label* is provided, then the document will not be renamed.

## Uploading a File to the Page Component
### Clicking on the Attachment Area
If you click on the *Attachment Area* of the *Embedded Files* page component, your computer's file browser will open. You can navigate to the desired document, and then double-click on a file to upload it, or click the **Open** button on Windows, which will upload the document instead.

![A screenshot that demonstrates how clicking on the attachment area of a will open the computer's file browser. In the example provided, the file browser only contains a single word document titled "Example". ](<Embedded Files OS Browser.png>)

### Dragging and Dropping from Your Computer
You can instead upload a file to the *Embedded Files* component by clicking and dragging a file from your computer's file browser, and then "dropping" it onto the component.

![A screenshot that demonstrates how a user can drag a file from Windows Explorer (or a similar program on Max or Linux). The file can then be "dropped" onto the Embedded Files component.](<Embedded Files OS Browser Drag.png>)

### Uploaded File Appearance
When a file is uploaded to the *Embedded Files* component, the component's appearance will change.

![A screenshot that reveals how a file that is uploaded via the Embedded Files page component appears to the user. The component now has a document icon, a document name and type as a hyperlink, as well as a download and delete button at the far right of the component.](<Embedded Files Page Component Uploaded.png>)

Note the component will now have the following attributes and functionality:

| *Attribute* | Fuctionality | Screenshot |
| --- | --- | --- |
| *Icon* | Rapid Platform will display the icons of common filetypes that are uploaded to the *Embedded Files* component. | ![A screenshot that is annotated with a red box to show the location of an icon in the Embedded Files page component. The icon is at the far left of the component, and is a word document icon in this example.](<Embedded Files Page Uploaded Icon.png>) |
| *File Name* | This is the name of the embedded file. The name is rendered as a hyperlink, and clicking on the link will open the document in a new tab. | ![A screenshot that is annotated with a red box to show the location of the file name in the Embedded Files page component. The icon is to the right of the icon, and reads "Policy.docx" this example.](<Embedded Files Page Uploaded Open.png>) |
| *Download Button* | This button allows you to download the embedded file to your computer. | ![A screenshot that is annotated with a red box to show the location of the file name in the Embedded Files page component. The icon at the far right of the component, and has an icon that resembles an arrow descending from a cloud.](<Embedded Files Page Uploaded Download.png>) |
| *Delete Button* | This button allows you to delete the embedded file from the component, and from your site's Sharepoint. | ![A screenshot that is annotated with a red box to show the location of the file name in the Embedded Files page component. The icon at the far right of the component, and has an icon that resembles an X.](<Embedded Files Page Uploaded Remove.png>) |

### Overwriting Files
When the *Embedded Files* component is configured to only allow one file to be uploaded, uploading any additional files to a component will "overwrite" the file that is currently stored in the *Embedded Files* component. This means the original file will be deleted, and the new file will replace it.

However, if the *Embedded Files* component has <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/Explorer/Page%20Components/Embedded%20Files#Mutli-Mode%20Embedded%20Files">Multi-Mode enabled</a>, then multiple documents can be uploaded to the same component.

Files that will be renamed of overwritten will have the following message appear in the *Embedded Files* component, before you press **Save**. Note that you will need to save the item for the overwrite to take effect. The change can be undone by clicking the cancel **X** button on the far right of the alert.

![A screenshot that demonstrates how the component changes when a new file will overwrite another file, or a file will be renamed. The grey attachment area changes, and is now filled with the following information: a green plus icon on the far left to indicate a file is being added, a message that states (in this example) "Policy rename to Policy". The word "Policy" is bold, to inform the user that these are file names. The message indicates that a new "Policy" file will replace the original "Policy" file. Finally, there is an X or cross icon on the far right of the document attachment area, indicating that this change can be undone.](<Embedded Files Overwrite.png>)

## The Tabstrip Component
Instead of adding the *Embedded Files* component to page layout of an item, it can instead be configured so that files appear in the tabstrip instead. Note that the tabstrip component is more compact than the page component. When the component is configured in this way, it will appear as shown below:

![A screenshot that shows how the tabstrip component for Embedded Files appears to the user. The component is a bevelled rectangle surrounded by a faint, dashed line border. At the leftmost side of the component is a grey square. To the right of this is the label for the Embedded File. In the example provided, the label reads "Policy". Below the label for the Embedded file is the small prompt: "Click or drag to upload".](<Embedded Files Tab Empty.png>)

| *Attribute* | Description |
| --- | --- |
| *Thumbnail* | A small grey rectangle that is empty currently. When a document is uploaded, this thumbnail will show a file preview of images, or certain supported file types.|
| *Label* | If configured by your system administrator, an *Embedded File* component will provide a label for the expected file that will be uploaded into the component. In the example above, the expected file is a "Policy" document.|
| *Attachment Area* | The entire component area will allows to click and open a file using your computer's file browser, or to drag-and-drop a file from your computer onto the field. |

### Uploaded File Appearance
When a file is uploaded to the *Embedded Files* component, the component's appearance will change.

![A screenshot that reveals how a file that is uploaded via the Embedded Files tab strip component appears to the user. The component now has a document preview image, a document name and type as a hyperlink, as well as a drop-down menu chevron at far right of the component.](<Embedded Files Tab Uploaded.png>)

Note the component now has a drop-down menu, which is indicated by the chevron ( **V** ) on the right side of the component. Clicking the chevron opens the drop-down menu. Note the following functionality is now available:

![Alt text](<Embedded Files Tab Dropdown Raw.png>)

| *Attribute* | Fuctionality | Screenshot |
| --- | --- | --- |
| *Thumbail* | Rapid Platform will display a preview thumbnail of common filetypes that are uploaded to the *Embedded Files* component. | ![A screenshot that is annotated with a red box to show the location of the file thumbnail in the Embedded Files tabstrip component. The icon is at the far left of the component, and shows a snapshot of the first page in this example.](<Embedded Files Tab Dropdown Thumnail.png>) |
| *File Name* | This is the name of the embedded file. The name is rendered as a hyperlink, and clicking on the link will open the document in a new tab. | ![A screenshot that is annotated with a red box to show the location of the file name in the Embedded Files tabstrip component. The icon is to the right of the icon, and reads "Policy.docx" this example.](<Embedded Files Tab Dropdown Name.png>)|
| *Open Containing Folder* | This drop-down option allows you open your site's Sharepoint folder in a new tab, and see the file in its Sharepoint folder. | ![A screenshot that is annotated with a red box to show the location of the "Open Containing Folder" option in drop-down section of the Embedded Files tabstrip component. The option has an icon of an open folder, and the option's prompt reads: "Open Containing Folder"](<Embedded Files Tab Dropdown Open.png>) |
| *Download* | This drop-down option allows you to download the embedded file to your computer. | ![A screenshot that is annotated with a red box to show the location of the "Download" option in drop-down section of the Embedded Files tabstrip component. The option has an icon of an arrow pointing downwards to a line, and the option's prompt reads: "Download"](<Embedded Files Tab Dropdown Download.png>) |
| *Clear File* | This drop-down option allows you to delete the embedded file from the component, and from your site's Sharepoint. | ![A screenshot that is annotated with a red box to show the location of the "Clear File" option in drop-down section of the Embedded Files tabstrip component. The option has an icon of a trash bin, and the option's prompt reads: "Clear File"](<Embedded Files Tab Dropdown Clear.png>) |

### Overwriting Files
When the *Embedded Files* component is configured to only allow one file to be uploaded, uploading any additional files to a component will "overwrite" the file that is currently stored in the *Embedded Files* component. This means the original file will be deleted, and the new file will replace it.

However, if the *Embedded Files* component has <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/Explorer/Page%20Components/Embedded%20Files#Mutli-Mode%20Embedded%20Files">Multi-Mode enabled</a>, then multiple documents can be uploaded to the same component.

> **Warning:** Unlike the *Embedded Files* page component, the tabstrip component will not display a message when a file is being overwritten.  

## Multi-Mode Embedded Files
Note that the embedded files component can be configured by your system administrator so that multiple files can be attached simultaneously to the *Embedded Files* component.

The also enables you to download, view, or remove each file separately. Instead of overwriting files, when a new file is uploaded to an *Embedded Files* component with **Multi-Mode** enabled, the component will instead upload additional documents.