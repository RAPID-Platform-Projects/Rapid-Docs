# What is a File Preview component on a Layout / Page?

## **What is a File Preview component?**

As the name suggests, a File Preview component provides an area on the layout or Page where you can view the Preview of the File.

While the [File Browser component](https://docs.rapidplatform.com/books/experiences/page/what-is-a-file-browser-component-on-a-layout-page "What is a File Browser component on a Layout / Page?") provides a Preview Pane, a similar function is served by the File Preview component for the [Attachment component](https://docs.rapidplatform.com/books/experiences/page/what-is-an-attachments-component-on-a-layout-page "What is an Attachments component on a Layout / Page?") and [Embedded Files component](https://docs.rapidplatform.com/books/experiences/page/what-is-an-embedded-files-component-on-a-layout-page "What is an Embedded Files component on a Layout / Page?").

## Important note:

If there are no files to preview, a logical message is displayed (in Explorer) as below:

![Blank file preview](<Blank file preview.png>)

The above message will appear if:

- **There is neither an Embedded File component nor an Attachment component present** - it is necessary that at least one of these two components is present on the Page (configured in Designer).
- **The Embedded Files and/or Attachment component are present but do not have any file added** - even with the components added in Designer, it is important that there should be at least one file to display in preview.

## **How to set up File Preview component in Designer?**

- You can **[add the File Preview component on to the Layout / Page](https://docs.rapidplatform.com/books/experiences/page/how-to-add-a-component-to-a-layout-page "How to add a component to a Layout / Page?")**. The File Preview component is not present anywhere by default.  
    ![Components list](<Components list.png>)
- If the File Preview component is on a Grid Layout, you can **[resize and move the component over the layout](https://docs.rapidplatform.com/books/experiences/page/how-to-arrange-a-component-on-grid-layout "How to arrange a component on Grid layout?").**
- You can set the [visibility of File Preview on the Details breakpoint](https://docs.rapidplatform.com/books/experiences/page/how-to-set-a-component-to-be-visible-hidden-on-item-details-and-create-breakpoints "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?").   
    ![Visibility toggle](<../Visiblity toggle.png>)
- You can set the [visibility of File Preview on the Create Screen breakpoint](https://docs.rapidplatform.com/books/experiences/page/how-to-set-a-component-to-be-visible-hidden-on-item-details-and-create-breakpoints "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?").   
    ![Display Toggle](<../Display toggle.png>)

**Please note:**

- The option to Edit preferences (pencil icon) is not present in this component.
- The File Preview component is capable of showing previews for multiple files in a carousal form.
- The File Preview component, although can be added to both Individual Item Level and Group Item List Level, logically it is meaningful to have it at the Individual Item Level, as both Attachments and Embedded Files can be placed there.

## **Related articles**

[**Image component**](https://docs.rapidplatform.com/books/experiences/page/what-is-an-image-component-on-a-layout-page "What is an Image component on a Layout / Page?")

[**Attachments component**](https://docs.rapidplatform.com/books/experiences/page/what-is-an-attachments-component-on-a-layout-page "What is an Attachments component on a Layout / Page?")

[**Embedded Files component**](https://docs.rapidplatform.com/books/experiences/page/what-is-an-embedded-files-component-on-a-layout-page "What is an Embedded Files component on a Layout / Page?")
