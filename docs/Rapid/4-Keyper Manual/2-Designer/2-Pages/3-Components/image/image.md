# The Image component

## The Image component overview

Imagine you want to your company logo and branding elements to appear at the top of the Data Table List view or Items view.

This can be done using the image component.

The image component allows you to associate an image with the item(s).

However, please note that you cannot upload your image files directly to the Image component, rather you would need to upload and host it on an application and provide the url reference for the same.

## How to set up Image component in Designer

Steps for inserting and configuring an image into the image component:

1. Upload your subject image on a Image hosting site.
2. The image hosting site will provide a URL reference to the image.
3. Navigate to desired [page](</docs/Rapid/3-User Manual/glossary/glossary.md#page-layout-and-component> "Page, layout and component") in Rapid Platform.
4. [Add an Image component to the Page.](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-add-a-component/how-to-add-a-component.md "How to add a component to a Layout / Page?")   

    ![Image in component selection list](<Image in component selection list.png>)
5. [Edit preferences of the image component.](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/3-Components/2-configuring-components/2-configuring-components.md "How to configure / update component properties?")  

    ![Configuration panel](<Configuration panel.png>)
6. Pass the URL reference from step 2 into the Image component.
7. Click Save.

Please refer to the below video for illustration:

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="420" src="https://www.youtube.com/embed/Ew19myYqrgQ?si=sYXE0Pf_QJpMVh-5" title="YouTube video player" width="750"></iframe>

**Please note:**

- The image component does not appear by default on any layout. You need to add the same.
- The image component can be inserted on both Item Level (Singular) and Group Item (Plural) levels.
- The Edit preferences tab provides the following:  

    ![Breakdown of image configuration panel](<Breakdown of image configuration panel.png>)
    1. **The URL field** - you can provide the direct url reference to the hosted image.
    2. **Image preview** - based on the url, the preview of the image appears
    3. **Zoom to fill** - this field when checked, the system will consider the shape and size of the image component and fill the provided image into the same. Please note, this may chop certain parts of the image if the aspect ratio differs. With this field, you can toggle whether to Zoom to fill the entire image or not.
    4. Click on the "**Save**" button when configuration complete, to exit Edit window.
- You can set the [visibility of Image component on the Details breakpoint](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-hide-components-on-breakpoints/how-to-hide-components-on-breakpoints.md "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?").

    ![Visiblity toggle](<../Visiblity toggle.png>)
    The setting show in the above image will set the image component to only be visible on the Create Screen breakpoint.

    ![Image component visible example](<Image component visible example.png>)

- You can set the **[visibility of Image component on the Create Screen breakpoint](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-hide-components-on-breakpoints/how-to-hide-components-on-breakpoints.md "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?").   

    ![Display toggle](<../Display toggle.png>)
    
- If the Image component is on a Grid Layout, you can [resize and move the component over the layout](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-arrange-a-component-on-a-grid/how-to-arrange-a-component-on-a-grid.md "How to arrange a component on Grid layout?").

## Related articles

[Counter component](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/3-Components/counter/counter.md "What is a Counter component on a Layout / Page?")

[File Preview component](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/3-Components/file-preview/file-preview.md "What is a File Preview component on a Layout / Page?")
