# How to raise a Workflow Created Signal from a click of a Menu button?

This is configurable on only the ***[Command Bar](https://docs.rapidplatform.com/books/glossary/page/command-bar)*** menu type.

#### Overview

Just like we saw **Raise Create a Webhook Action** is used to trigger an application external to Rapid Platform, there may be a need where you wish to trigger a workflow based on user clicking the menu button. If there are multiple workflows triggered of the creation of this item type all will trigger.

Therefore, when you require a menu button, that when clicked by user, trigger starts a workflow execution designed in Rapid Platform, then you can configure this button as **Raise Workflow Created Signal**. This is most useful when new workflows have been created after items so as to backfill the missing triggers.

For example - you have created a workflow in Rapid Platform to generate and send an invoice to the customer. This workflow is triggered whenever a menu button is clicked.

#### How to configure a "Workflow Created Signal" on a Menu Button

1. Navigate to Designer &gt; Tables &gt; All Tables  
    [![image-1702254881217.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/scaled-1680-/XjUe0B4t03dGjPju-image-1702254881217.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/XjUe0B4t03dGjPju-image-1702254881217.png)
2. Open your desired table. (Find your desired table by using the search bar or scrolling through the list)  
    [![image-1702265202904.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/scaled-1680-/QjdJ55Cjf9PhBmWy-image-1702265202904.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/QjdJ55Cjf9PhBmWy-image-1702265202904.png)
3. Click on Menu  
    [![image-1702270949641.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/scaled-1680-/Rp5v8OxykXSgFjGQ-image-1702270949641.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/Rp5v8OxykXSgFjGQ-image-1702270949641.png)
4. Click on the **New Blank Item Drop down** then on **New Blank Item** [![image-1702271004715.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/scaled-1680-/tj1UoCTCZzpNoHOh-image-1702271004715.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/tj1UoCTCZzpNoHOh-image-1702271004715.png)
5. Choose a name and Icon  
    [![image-1702271084339.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/scaled-1680-/CbDl79gtd3qvltyO-image-1702271084339.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/CbDl79gtd3qvltyO-image-1702271084339.png)
6. Choose **Raise Workflow Created Signal** as the On-Click Action  
    [![image-1702271143878.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/scaled-1680-/E3bANJnJ7KYCmCMl-image-1702271143878.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/E3bANJnJ7KYCmCMl-image-1702271143878.png)
7. Press Save  
    [![image-1702273635024.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/scaled-1680-/EMYd8kWYhVlXGVS7-image-1702273635024.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/EMYd8kWYhVlXGVS7-image-1702273635024.png)

As observed, this action throws a signal for the Trigger Start event of workflow and therefore, there is no other configuration settings needed.

[Go back to ***On-Click Actions*** learning resource](https://docs.rapidplatform.com/books/experiences/page/how-to-set-on-click-action-for-a-menu-item "How to set On-Click Action for a menu item?")