# What is a File Preview component on a Layout / Page?

##### **What is a File Preview component?**

As the name suggests, a File Preview component provides an area on the layout or Page where you can view the Preview of the File.

While the [File Browser component](https://docs.rapidplatform.com/books/experiences/page/what-is-a-file-browser-component-on-a-layout-page "What is a File Browser component on a Layout / Page?") provides a Preview Pane, a similar function is served by the File Preview component for the [Attachment component](https://docs.rapidplatform.com/books/experiences/page/what-is-an-attachments-component-on-a-layout-page "What is an Attachments component on a Layout / Page?") and [Embedded Files component](https://docs.rapidplatform.com/books/experiences/page/what-is-an-embedded-files-component-on-a-layout-page "What is an Embedded Files component on a Layout / Page?").

##### Important note:

If there are no files to preview, a logical message is displayed (in Explorer) as below:

[![Screenshot 2023-11-30 at 18.52.00.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/YdoSGr0q54cmjWRy-screenshot-2023-11-30-at-18-52-00.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/YdoSGr0q54cmjWRy-screenshot-2023-11-30-at-18-52-00.png)

The above message will appear if:

- **There is neither an Embedded File component nor an Attachment component present** - it is necessary that at least one of these two components is present on the Page (configured in Designer).
- **The Embedded Files and/or Attachment component are present but do not have any file added** - even with the components added in Designer, it is important that there should be at least one file to display in preview.

##### **How to set up File Preview component in Designer?**

<div class="pointer-container" id="bkmrk-%C2%A0-0"><div class="pointer anim is-page-editable"><svg class="svg-icon" data-icon="link" role="presentation" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg><div class="input-group inline block"><input id="bkmrk--0" placeholder="url" readonly="readonly" type="text"></input> <button class="button outline icon" data-clipboard-target="#pointer-url" title="Copy Link" type="button"><svg class="svg-icon" data-icon="copy" role="presentation" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg></button></div><svg class="svg-icon" data-icon="edit" role="presentation" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg></div></div>- You can **[add the File Preview component on to the Layout / Page](https://docs.rapidplatform.com/books/experiences/page/how-to-add-a-component-to-a-layout-page "How to add a component to a Layout / Page?")**. The File Preview component is not present anywhere by default.  
    [![1 2.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/HsApzg2RgKX9ANih-1-2.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/HsApzg2RgKX9ANih-1-2.png)
- If the File Preview component is on a Grid Layout, you can **[resize and move the component over the layout](https://docs.rapidplatform.com/books/experiences/page/how-to-arrange-a-component-on-grid-layout "How to arrange a component on Grid layout?").**
- You can set the **[visibility of File Preview on the Details breakpoint](https://docs.rapidplatform.com/books/experiences/page/how-to-set-a-component-to-be-visible-hidden-on-item-details-and-create-breakpoints "How to set a component to be visible / hidden on "Item Details" and "Create" breakpoints?").   
    [![2 2.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/zt0uq03YQ5BkTLJD-2-2.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/zt0uq03YQ5BkTLJD-2-2.png)**
- You can set the **[visibility of File Preview on the Create Screen breakpoint](https://docs.rapidplatform.com/books/experiences/page/how-to-set-a-component-to-be-visible-hidden-on-item-details-and-create-breakpoints "How to set a component to be visible / hidden on "Item Details" and "Create" breakpoints?").   
    [![3 2.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/Ck920l7VsXrbvRJh-3-2.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/Ck920l7VsXrbvRJh-3-2.png)**

**Please note:**

- The option to Edit preferences (pencil icon) is not present in this component.
- The File Preview component is capable of showing previews for multiple files in a carousal form.
- The File Preview component, although can be added to both Individual Item Level and Group Item List Level, logically it is meaningful to have it at the Individual Item Level, as both Attachments and Embedded Files can be placed there.

##### **Related articles**

[**Image component**](https://docs.rapidplatform.com/books/experiences/page/what-is-an-image-component-on-a-layout-page "What is an Image component on a Layout / Page?")

[**Attachments component**](https://docs.rapidplatform.com/books/experiences/page/what-is-an-attachments-component-on-a-layout-page "What is an Attachments component on a Layout / Page?")

[**Embedded Files component**](https://docs.rapidplatform.com/books/experiences/page/what-is-an-embedded-files-component-on-a-layout-page "What is an Embedded Files component on a Layout / Page?")

***[Go back to All Components Page](https://docs.rapidplatform.com/books/experiences/page/what-are-the-available-components-for-pages)***