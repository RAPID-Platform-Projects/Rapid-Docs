# Create A Form

Before you can create an anonymous form, you first need to create an adaptive form using the adaptive form designer.

<p class="callout info">NOTE: This guide won't cover every aspect of the adaptive form designer</p>

To create a form using the adaptive form designer, navigate to `<a href="https://designer.rapidplatform.dev/_prod/:tennant/:site,">https://designer.rapidplatform.dev/_prod/:tennant/:site</a>`, you should see the following:

[![image-1642835729932.png](https://docs.rapidplatform.com/uploads/images/gallery/2022-01/scaled-1680-/bVZPElHhI7AAoJSx-image-1642835729932.png)](https://docs.rapidplatform.com/uploads/images/gallery/2022-01/bVZPElHhI7AAoJSx-image-1642835729932.png)

If your page already has forms on it, don't worry, you can still follow the guide, we won't be touching any existing forms. Now that you're on the adaptive form designer creation page, click on the "New Adaptive Form" button in the top right corner of the page.

<p class="callout info">Screenshot showing were the "New Adaptive Form" button is highlighted in yellow</p>

[![image-1642835928011.png](https://docs.rapidplatform.com/uploads/images/gallery/2022-01/scaled-1680-/bPilOcdrVp8Cf6sg-image-1642835928011.png)](https://docs.rapidplatform.com/uploads/images/gallery/2022-01/bPilOcdrVp8Cf6sg-image-1642835928011.png)

Upon clicking on the "New Adaptive Form" creation button, you will be navigated to the form designer page. This is where you can build and design how you want your form to look, and how you want your uses to interact. As stated earler, this guide won't take you though everything about the adaptive form designer, for now we are just going to build a simple form, with a file field so that your users can upload a file with the form.

First lets add a "Single Line of text" field to our form. To add a field hover your mouse over the long white box in the top middle of the page. A blue plus button will appear, when clicked, a popup box appears either under or over the blue plus button. This panel holds all the components that you can use to build your form. Lucky for us, the "Single Line of text" is the first component in that list. Lets click on it, so that it adds the control to our form.

<p class="callout info">Screenshot showing where the blue plus button is highlighted in yellow</p>

[![image-1642836485371.png](https://docs.rapidplatform.com/uploads/images/gallery/2022-01/scaled-1680-/PWEQfJKMCRtZc803-image-1642836485371.png)](https://docs.rapidplatform.com/uploads/images/gallery/2022-01/PWEQfJKMCRtZc803-image-1642836485371.png)

<p class="callout info">Screenshot showing where the single line of text field is highlighted in yellow</p>

[![image-1642836737580.png](https://docs.rapidplatform.com/uploads/images/gallery/2022-01/scaled-1680-/VQ6JTp4G7YRBq8jI-image-1642836737580.png)](https://docs.rapidplatform.com/uploads/images/gallery/2022-01/VQ6JTp4G7YRBq8jI-image-1642836737580.png)

Now that the "Single Line of text" field has been added, your form should look like the following:

[![image-1642836866035.png](https://docs.rapidplatform.com/uploads/images/gallery/2022-01/scaled-1680-/nwu51ptAGLk8E5zk-image-1642836866035.png)](https://docs.rapidplatform.com/uploads/images/gallery/2022-01/nwu51ptAGLk8E5zk-image-1642836866035.png)

Lets following the same steps as before, to now add a file field.

<p class="callout info">HINT: You can also search for your component to save time</p>

[![image-1642837088191.png](https://docs.rapidplatform.com/uploads/images/gallery/2022-01/scaled-1680-/phVxXmU6d3YXaYXe-image-1642837088191.png)](https://docs.rapidplatform.com/uploads/images/gallery/2022-01/phVxXmU6d3YXaYXe-image-1642837088191.png)

With the file field added, you should now see two inputs for your form.

[![image-1642837132352.png](https://docs.rapidplatform.com/uploads/images/gallery/2022-01/scaled-1680-/G6z6DklRgPljNHe8-image-1642837132352.png)](https://docs.rapidplatform.com/uploads/images/gallery/2022-01/G6z6DklRgPljNHe8-image-1642837132352.png)

With our fields on the form, we now need to confugre then otherwise they won't submit any data back to your rapid site. To configure a field on a form, you just need to click on it, and the right side pane will display the avaliable configaurations for that form control.

<p class="callout info">Screenshot showing the configuation panel on the right of the screen</p>

[![image-1642837498373.png](https://docs.rapidplatform.com/uploads/images/gallery/2022-01/scaled-1680-/MHgW5ZpurK0IZ8Ee-image-1642837498373.png)](https://docs.rapidplatform.com/uploads/images/gallery/2022-01/MHgW5ZpurK0IZ8Ee-image-1642837498373.png)

To configure the "Single Line of text" to point to an entity field on our rapid site, we need to change the values inside the "Rapid Attributes" Collapsable section, specifically the fields "Select List" and "Select Column" everything else can be ignored for the remainder of this guide. select from the "Select List" dropdown, the entity "Tasks" as this already has a title field pre-configured when you load your rapid site. Next select "Title" from the dropdown "Select Column", this ensures that the value from our component on the form, will be placed inside the column "Title" when we submit the form.

<p class="callout info">Screenshot showing the changed fields on the configuration panel highlighted in yellow</p>

[![image-1642837911208.png](https://docs.rapidplatform.com/uploads/images/gallery/2022-01/scaled-1680-/6A3ydnEKIs1hqLAB-image-1642837911208.png)](https://docs.rapidplatform.com/uploads/images/gallery/2022-01/6A3ydnEKIs1hqLAB-image-1642837911208.png)

To configure the "File" there are some settings that you can leave if you don't want them to be applied, in this example we are just going to assign a list for the file to be uploaded to, but feel free to play around with the other settings, as they can give you grater control over where you want to store the file and what you want the file to be named as.

<p class="callout info">Screenshot showing the changed fields in the configuration panel for the file field highlighted in yellow</p>

[![image-1642839549445.png](https://docs.rapidplatform.com/uploads/images/gallery/2022-01/scaled-1680-/92by53x3RwMZLkqZ-image-1642839549445.png)](https://docs.rapidplatform.com/uploads/images/gallery/2022-01/92by53x3RwMZLkqZ-image-1642839549445.png)

Now that our form is configured, we can save the form by clicking on the save icon in the top right conor of the page.

<p class="callout info">Screenshot of the save button highlighted in yellow</p>

[![image-1642839640989.png](https://docs.rapidplatform.com/uploads/images/gallery/2022-01/scaled-1680-/J6s7uY3IbizGMzqr-image-1642839640989.png)](https://docs.rapidplatform.com/uploads/images/gallery/2022-01/J6s7uY3IbizGMzqr-image-1642839640989.png)