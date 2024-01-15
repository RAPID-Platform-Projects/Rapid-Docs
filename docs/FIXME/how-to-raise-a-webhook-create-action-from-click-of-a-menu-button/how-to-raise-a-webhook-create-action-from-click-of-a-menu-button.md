# How to raise a Webhook Create Action from click of a Menu button?

This is configurable on both the ***[Side Bar](https://docs.rapidplatform.com/books/glossary/page/sidebar)*** and ***[Command Bar](https://docs.rapidplatform.com/books/glossary/page/command-bar)*** menu types.

#### Overview

Rapid provides the flexibility to configure create, edit and delete webhooks on any list in the system. In particular cases you may want to retrigger the "Created" webhook signal on an item that has already been created.

NOTE: This is distinct from a **Workflow Created Signal** which causes a **Process Diagram** to initiate, while a **Webhook Created Signal** results in a **Webhook** triggering

Such an event can be configured on a Menu button click, using the **Raise Create Webhook Action**.

This is different from **Perform Remote Action** type, as in this case, no additional data is sent along with the network request. Raise Create Webhook Action is often used as a trigger start to an external application.

#### How to configure the "Raise Webhook Create Action" for a menu button

1. Navigate to Designer &gt; Tables &gt; All Tables  
    [![image-1702254881217.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/scaled-1680-/XjUe0B4t03dGjPju-image-1702254881217.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/XjUe0B4t03dGjPju-image-1702254881217.png)
2. Open your desired table. (Find your desired table by using the search bar or scrolling through the list)  
    [![image-1702265202904.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/scaled-1680-/QjdJ55Cjf9PhBmWy-image-1702265202904.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/QjdJ55Cjf9PhBmWy-image-1702265202904.png)
3. Click on Menu  
    [![image-1702270949641.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/scaled-1680-/Rp5v8OxykXSgFjGQ-image-1702270949641.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/Rp5v8OxykXSgFjGQ-image-1702270949641.png)
4. Click on the **New Blank Item Drop down** then on **New Blank Item** [![image-1702271004715.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/scaled-1680-/tj1UoCTCZzpNoHOh-image-1702271004715.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/tj1UoCTCZzpNoHOh-image-1702271004715.png)
5. Choose a name and Icon  
    [![image-1702271084339.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/scaled-1680-/CbDl79gtd3qvltyO-image-1702271084339.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/CbDl79gtd3qvltyO-image-1702271084339.png)
6. Choose **Raise Create Webhook Action** as the On-Click Action  
    [![image-1702272072115.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/scaled-1680-/zyXCHK6igaWWO28j-image-1702272072115.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/zyXCHK6igaWWO28j-image-1702272072115.png)

As we can observe, there are no other configuration fields in this type, as it will just throw a trigger event for an external to Rapid application.

[Go back to ***On-Click Actions*** learning resource](https://docs.rapidplatform.com/books/experiences/page/how-to-set-on-click-action-for-a-menu-item "How to set On-Click Action for a menu item?")