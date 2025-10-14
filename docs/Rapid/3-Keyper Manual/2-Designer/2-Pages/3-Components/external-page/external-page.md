# External Page

## External Page component overview

Imagine an Air Traffic Controller is looking at the schedule of the Incoming and Outgoing flights from the Airport. He wants to add a Live Weather feed from an external website.

The above is possible via the External Page component.

This component enables you to display websites and webpages onto your Rapid Page.

## How to set up External Page component in Designer

- You can [add the External Page component on to the Layout / Page](/docs/Rapid/3-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-add-a-component/how-to-add-a-component.md "How to add a component to a Layout / Page?"). This component is not present anywhere by default. 

    ![Component list](<Component list.png>)

- If the External Page component is on a Grid Layout, you can [resize and move the component over the layout](/docs/Rapid/3-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-arrange-a-component-on-a-grid/how-to-arrange-a-component-on-a-grid.md "How to arrange a component on Grid layout?").
- You can set the [visibility of External Page on the Details breakpoint](/docs/Rapid/3-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-hide-components-on-breakpoints/how-to-hide-components-on-breakpoints.md "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?").   

    ![Visibility toggle](<../Visiblity toggle.png>)

- You can set the [visibility of External Page on the Create Screen breakpoint](/docs/Rapid/3-Keyper%20Manual/2-Designer/2-Pages/5-how-to-guides/how-to-hide-components-on-breakpoints/how-to-hide-components-on-breakpoints.md "How to set a component to be visible / hidden on 'Item Details' and 'Create' breakpoints?").   

    ![Display toggle](<../Display toggle.png>)

- You can configure the External Page component by clicking on the Edit (pencil) icon. 

    ![Configuration panel](<Configuration panel.png>)

- You can provide two types of inputs in the "Hyperlink Label Template" field:

  1. **Static input -** You can provide the URL of the hyper link in the "Hyperlink Label Template" field. For example - "https://wikipedia.org".
  2. **Dynamic input -** Imagine you have a column in the table which stores the value of the page name.

    - For example -
       - There is a Cities Table - which contains information about all the major cities in Australia.
       - This table has a column titled **loc\_info** - which contains wikipedia page id for subject item.
       - An item of this table is Brisbane.
       - The loc\_info field of this item contains value "**wiki/brisbane**".
       - The External Page component can be configured to show `"https://wikipedia.org/<%- value.loc_info %>"`
       - The system will display the portion of the page with url - "**https://wikipedia.org/wiki/brisbane**" by substituting the value of the column.
    - In this manner a dynamic value can be passed to the External Page component.

**Please note**

- `<% value.{column} %>` is the syntax to pass variable value of url to the component.
- The External Page component can be added to both Item Details (Singular) and Items List (Plural) levels.
- There is no "Save" button in the Edit preferences panel of the component. After entering the value in the field, just click outside the field and it gets saved.
- Not all websites can be connected to the External Page component. Only the sites that allow iFrame connection can be displayed on the Page. For sites that do not allow iFrame connection will display an error message as below: 

    ![Errored external page](<Errored external page.png>)

- You need to provide proper url. For example [https://wikipedia.org](https://wikipedia.org). In case you provide - www.wikipedia.org then the system would not recognise the url and provide a login page.

    ![Rapid login page](<Rapid login page.png>)

## Related articles

[Image component](/docs/Rapid/3-Keyper%20Manual/2-Designer/2-Pages/3-Components/image/image.md "What is an Image component on a Layout / Page?")

[Activity Feed component](/docs/Rapid/3-Keyper%20Manual/2-Designer/2-Pages/3-Components/activity-feed/activity-feed.md "What is an Activity Feed component on a Layout / Page?")