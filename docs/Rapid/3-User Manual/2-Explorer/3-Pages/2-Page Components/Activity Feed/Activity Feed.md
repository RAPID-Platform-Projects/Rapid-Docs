# Activity Feed
 
An activity feed can be thought of as a bulletin board and an activity log for the Table Item. 

The activity feed allows you to view a timeline of previous events of the individual item including any changes that have been made or notes that have been attached.

The activity feed comes default with every item that is created.  The below image displays a typical Activity Feed page.  

![Image of an Activity Feed Page](<Activity Feed 1.png>)

## Viewing The Activity Feed

It is important to note that the Activity Feed component displays information related to an [item of an entity.](/docs/Rapid/3-User Manual/glossary/glossary.md#table-items-and-columns)


To view the default activity feed from Explorer, it is assumed that an item is present within the entity for which you want to view the Activity Feed. To view the activity feed from the default tab that is provided with every item:

1. In the navigation menu, select Explorer experience, and navigate to the entity of choice.  
![Image showing selection of a table from Explorer Sidebar](<Select entity in Explorer.png>)  

2. Click on an item in the entity to select the same. By default this will open the Item Details page.  
![Image showing selection of an item from a list in a data table](<Select item.png>)  

3. In the list of tabs, click Activity. The Activity Feed should now appear on your screen displaying the information for the selected item.  
![Image showing Activity Tab selection](<Select Activity Tab.png>)

:::danger[**Important note**]

The above are the steps to access Activity Feed present in the default position for every table item. However, the system administrator might have configured the Item Details in a way to include Activity Feed Component in some other desired location.  
:::  

:::info
![Image showing key points of information in an Activity Feed](<Activity feed key info.png>)  

Observe that: 
1. The published note contains a link to the subject item. You can click on the link and navigate to the subject Item Details page.  
2. Each timeline entry displays the timestamp of its publishing. You can intuitive observe when this entry was created.
3. Note that the entries are in Rich Text Format hence would retain formatting / legibility  wherever possible.

:::


## Activity Feed Filters
As a user, you have the ability to filter the Activity Feed to show specific content only. There are four different filters that can be applied to the Activity Feed. You can find these filters at the right side of the Activity Feed.  
![Image showing four types of Activity Feed Filters](<Activity Feed Filters.png>)


1. Hide Notes: Toggling this filter hides associated Notes that have been created for an item.

2. Hide System: Toggling this filter hides System Notes that has been created for an item.

3. Hide Item Updates: Toggling this filter hides Item Updates that have been created for an item.

4. Hide Item Created: Toggling this filter hides the Item Created note that states when an item was created.

## Filtering The Activity Feed
To filter the Activity Feed:

1. In the Activity Feed that you wish to filter, navigate to the top-right of the feed.
2. Just click to toggle the relevant filters you wish to apply to the Activity Feed.  

:::danger[**Important note**]

The Activity Feed may load with filters in default mode. If you observe that one or more of the filters are in Toggled OFF mode by default, this means they have been configured at the Activity Feed Component preferences level. You can click on the filter to manually set to ON state.

:::

## Notes in the Activity Feed
Imagine you are the lead manager managing a pipeline of 50 leads. Details of each of these 50 leads is entered as an item in the Leads Table. Now you wish to record certain "Notes" against specific lead items. These Notes can be referred by other stakeholders.   

This is possible via the Activity Feed's Notes feature.  

Users have the ability to view all the notes previously added to the item.  

Users can also add their own notes against items. To add notes to an activity feed:

1. In the activity feed of the item you wish to add a note to, enter your desired note in the text box located at the bottom of the page.
2. Click the Submit Note button at the edge of the text box to save your note to the item. 

:::tip  

You can also press Ctrl + Enter to Submit the note.

:::  

The published note will appear on the timeline of the Activity Feed.  

![Image to show addition of notes in Activity Feed](<Activity Feed Notes.png>)  

## Editing Notes
Users can also edit notes that have been created. To edit notes:

1. Navigate to the Activity Feed of the note that you wish to edit.
2. At the note you wish to edit, click edit.  
![Image showing how to edit a note in Activity Feed](<Edit note icon.png>)  

3. You may now alter the note in the Edit Note popup window.  
![Image showing Edit Note popup window](<Edit Note popup.png>)  

4. Click Save and Close to save the changes that have been made and close the window. Your note has now been updated.
![Image showing edited note published on Activity Feed timeline](<Note edited.png>)

## Suggested Reminders
Suggested Reminders allows users to set reminders for themselves either using the automated reminder system or by manually assigning a reminder date.

### Automatically Generated Reminders (_smart reminders_)
Automatically generated reminders utilize specific phrases to identify reminders. To set an automatically generated reminders:

1. In the text box, begin the sentence with phrases such as Remind me..., Chase up..., Check on..., along with the rest of the reminder followed with a date and time, e.g. Remind me to check invoices today at 6:00PM.
2. Click the Submit button at the edge of the text box to save your reminder note to the item.
![Image showing how to create a smart reminder in Activity Feed](<Smart reminder.png>)  

[**Click here to learn more about Smart Reminders**](./smart-reminders/smart-reminders.md)

### Manually Generated Reminders
To manually generate reminders:
 
1. In the Activity Feed of the item you wish to manually generate a reminder, click the Suggested Reminders button above the text box.
2. Click Add Reminder.
3. Enter a phrase as well as a date and time.
4. Click the close icon "X" at the top right corner to exit.  

![Image showing how to create manual reminders](<manual reminders.png>)  

:::tip  

You may add more than one reminder, to add another click Add Reminder again.  

:::  

:::danger[Please note:]  

Once all the reminders have been set, you need to add a note.  
Click the Submit button at the edge of the text box to save your reminder note to the item.  
**If the note is not created, then the manual reminder does not take effect.**
:::

### Removing a reminder
You can easily remove a reminder by clicking on the bin icon. This will delete the reminder.
![Image showing how to delete a reminder](<Delete reminder.png>)  

:::danger[**Important note**]

Please note you can delete a reminder only till the moment you have not published the reminder note. Once the note is published, the reminder is set in the system and can only be dismissed using the action buttons in Notifications. (discussed below)
:::  

### Viewing reminders
The reminders can be viewed in the Notifications section for your user. You can click on your user profile icon at the top right corner of your Rapid Site.  

The list of all notifications will appear here.

If the notification is for the reminder, you will receive action buttons to snooze and dismiss reminder. 

![Image showing how to access notifications section for reminders](<Reminder notification.png>)

To know more about notifications - [**click here**](/docs/Rapid/3-User%20Manual/2-Explorer/5-Notifications/5-Notifications.md)

#### Actions buttons for reminders in Notifications

1. **Snooze** - as the  name suggests, this will snooze the notification for a defined time interval. Clicking on the Snooze dropdown you will get four options to choose from (as shown in image)  
![Image showing snooze option](<snooze reminder notification_1.png>)

2. **Dismiss** - This action will close the reminder and remove it from notifications list.
![Image showing dismiss option](<Dismiss option notification.png>)

3. **Open** - Clicking on this button will give you the link to navigate to the subject Item Details page. 
![Image showing the Open option for the reminder notification](<open option notification.png>)

## Notes with mentions
Imagine you wish a public note to be addressed for a specific person. For example - a lead requires special attention as it can be a potential enterprise client. You want this to be noticed by your Sales Manager. Therefore, you can publish a note with a mention to your Sales Manager.

To create a note with mention:
1. Write "@"
2. This will open the list containing all the eligible system users and groups. Select your desired entity.![Image showing how entity list opens when @ is written in textbox](<Note mention 1.png>)
3. Complete your note and press Submit.![Image showing how mentioned note appears before submission](<Note mention 2.png>)

The note can be seen in the timeline as well as will be received in the notifications section of the mentioned entity.![Image showing published note in timeline and notifications list of mentioned entity](<Note mention 3.png>)