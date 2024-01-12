# Raise Workflow created signal

This is configurable on only the ***[Command Bar](https://docs.rapidplatform.com/books/glossary/page/command-bar)*** menu type.

## Overview

Just like we saw **Raise Create a Webhook Action** is used to trigger an application external to Rapid Platform, there may be a need where you wish to trigger a workflow based on user clicking the menu button. If there are multiple workflows triggered of the creation of this item type all will trigger.

Therefore, when you require a menu button, that when clicked by user, trigger starts a workflow execution designed in Rapid Platform, then you can configure this button as **Raise Workflow Created Signal**. This is most useful when new workflows have been created after items so as to backfill the missing triggers.

For example - you have created a workflow in Rapid Platform to generate and send an invoice to the customer. This workflow is triggered whenever a menu button is clicked.

## How to configure a "Workflow Created Signal" on a Menu Button

1. Navigate to Designer &gt; Tables &gt; All Tables  
    ![Navigate to Tables](<../../../Navigate to Tables.png>)
2. Open your desired table. (Find your desired table by using the search bar or scrolling through the list)  
    ![Open your table](<../../../Open Table.png>)
3. Click on Menu  
    ![Open the Tables menu](<../../Navigate to Table Menus.png>)
4. Click on the **New Blank Item Drop down** then on **New Blank Item** 
    ![Create new menu item](<../Create new menu item.png>)
5. Choose a name and Icon  
    ![Set menu icon and title](<../Set menu title and icon.png>)
6. Choose **Raise Workflow Created Signal** as the On-Click Action  
    ![Set on-click action](<Set onclick action.png>)
7. Press Save  
    ![Save the menu](<../Save the menu.png>)

As observed, this action throws a signal for the Trigger Start event of workflow and therefore, there is no other configuration settings needed.
