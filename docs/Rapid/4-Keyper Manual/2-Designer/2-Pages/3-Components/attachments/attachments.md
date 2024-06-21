# Attachments

## Attachments component overview

The Files Tab ([File Browser component](../file-browser/file-browser.md "What is a File Browser component on a Layout / Page?")) is the place to upload / view files with reference to an item. However, in real-life business scenarios the Files Tab can a long list, and sometimes heavy files.

Attachments typically serve the need for referencing a small number of lightweight files, which can be referenced easily and frequently (in Explorer).

Attachments are visible in the [Tasks experience](</docs/Rapid/3-User Manual/glossary/glossary.md#task-experience> "Task Experience").

## How to set up an Attachments component in Designer

- You can [add the Attachments component on to the Layout / Page](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/3-Components/1-overview/1-overview.md "How to add a component to a Layout / Page?"). The Attachments component is not present anywhere by default.  

    ![Component list](<Component list.png>)

- If the Attachments component is on a Grid Layout, you can [resize and move the component over the layout](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-arrange-a-component-on-a-grid/how-to-arrange-a-component-on-a-grid.md "How to arrange a component on Grid layout?").
- You can set the [visibility of Attachments on the Details breakpoint](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-hide-components-on-breakpoints/how-to-hide-components-on-breakpoints.md "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?").   

    ![Visibility toggle](<../Visiblity toggle.png>)
- You can set the [visibility of Attachments on the Create Screen breakpoint](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-hide-components-on-breakpoints/how-to-hide-components-on-breakpoints.md "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?").   

    ![Display toggle](<../Display toggle.png>)

:::info[Note]
The Attachments component displays the list of attached files in Explorer. This will not be visible to users in Explorer if there are no files attached.

![A screenshot of how the attachments component is visible in Designer, but will become invisible in Explorer if no files are attached to the component. The screenshot is a comparison, with Designer on top and Explorer's view underneath.](<Attachments Designer.png>)
:::

## Enabling the Attachment File bar

To provide the ability to upload files in Explorer, you need to enable the **Attachment File** bar from Tab Strip.

1. Navigate to **Designer** of your desired Table.
2. Go to the **Design Tab** and select **Singular** (Item level) set of pages
3. On the **Tab Strip**, click the **Edit** icon.

![A screenshot demonstrating the location and appearance of the "Edit" icon for the Tab Strip. The user has selected the pencil icon in the upper right corner. The screenshot is annotated with a red box to highlight the location of the button and is also annotated with text that reads "Click Edit icon".](<Designer Tab Strip Edit.png>)

4. The **Tab Strip Edit Panel** will open showing the list of all the tabs
5. Toggle the **Show Attachment File Bar** button for the tabs where you want to provide the users with ability to access Attachments.
5. Click **Save**

![A screenshot that demonstrates how to set the "Show Attachments" toggle so that users can see attachments on different tab strips of an item page.](<Show Attachments.png>)

## Related articles

- [**File Preview** component](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/3-Components/file-preview/file-preview.md "What is a File Preview component on a Layout / Page?")
- [**File Browser** component](../file-browser/file-browser.md "What is a File Browser component on a Layout / Page?")