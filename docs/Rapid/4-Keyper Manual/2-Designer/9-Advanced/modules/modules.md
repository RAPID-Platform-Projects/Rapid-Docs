# Modules

## What are modules?

One can visualise Modules as a Package of Tables, Menus and Pages that are related to each other. For example - a CRM module is a package of CRM related tables, pages and menus. 

This is particularly helpful in managing the information infrastructure (tables / pages / menus) based on functional usage. For example - if an organisation does not want to use the CRM module, then they can simply disable the CRM module, and all the associated information infrastructure will be disabled from the system.

For product developers this is especially handy to create 'suites' of sub-systems within Rapid that can be toggled via policy, such as customers purchasing add-ons.

## Adding a module to the system

Please follow the below steps to add a module to the system:

1. Goto Designer
2. Click on Maintenance in Designer Sidebar
3. Select Modules

![Image showing Modules option in Designer Sidebar](<Add Module 1.png>)  

4. The Modules page (as shown below) will appear. 
5. Click Add module.
6. A section will appear with an module icon. Type the module title - say - CRM.
7. Click the save icon.

![Image showing how to add a new module to system](<Add Module 2.png>) 

This will add a new blank module to the system. This new module will not have any associated tables / menus / pages. Observe by default the module is in Enabled state. However, you can toggle it to disabled state, as needed. 

![Image showing a new module added to system](<Add Module 3.png>)


## Associating information infrastructure to Modules

### Tables

You can easily associate tables to a module. Please follow the steps:

1. Goto Designer
2. Navigate to your desired table.

![Image showing selection of table in designer](<Associate Module to table 1.png>)  

3. In the Options Tab, observe the dropdown field "Part of module".

![Image showing module association field on Options tab](<Associate Module to table 2.png>)  

4. Click on Part of module field and select the desired module title.
5. Click Save.  

![Image showing table association with mdoule](<Associate Module to table 3.png>)

That's it! the subject table is now associated with your desired module.

### Menus

To associate menus to a module, consider the following:

1. In Designer, navigate to your desired menu.
2. Observe two fields both titled as - "Part of module"  
    a. The field on top right corner of the menu screen, corresponds to all the menus in the page.
    b. The field at the bottom centre of the screen, corresponds to individual menu item.

![Image showing two options to associate menu and menu item to a module](<Associate module to menu.png>)  

Therefore, if you wish to associate all the menus, click a. and associate all menus on the page.
If you wish to associate selected menu items, then goto the desired menu item, click b. and select module as desired.

### Pages

To associate pages to modules, consider the following:

1. In Designer, navigate to your desired page.
2. Observe the field on top right corner of the screen - "Part of module".


![Image showing option to associate page to a module](<Associate module to page 1.png>)
3. This is the dropdown field. Select your desired module with which you wish to associate the page.  
4. Click Save.

Now all the components present on the page will get associated to the module.

![Image showing page associated with a module](<Associate module to page 2.png>)  


### Component

It is possible to associate a specific component (within a page) to a module.

1. Navigate to the desired page in Designer.
2. Click on the Edit (Pencil) icon on the component you desire to associate.

![Image highlighting component edit option](<Associate module to component 1.png>)  

3. An edit panel will open. In the Edit panel, locate the field "Part of module".
4. Select your desired module to associate the subject component. 
5. Click Save to close the Edit panel.  
6. Click to save the Page.

![Image showing component association with module in Edit panel](<Associate module to component 2.png>)  

This will associate only the subject component to the module.

### Enabling / Disabling modules

You can enable or disable modules by a toggle button. Please consider the following steps:

1. Goto Designer
2. In Designer Sidebar, click Maintenance
3. Select Modules  

![Image showing how to access modules from designer sidebar](<Add Module 1.png>)  

All the existing modules in the system will appear as tiles.
![Image showing all modules as tiles](<Disable module 1.png>)  

4. Toggle the state of the module to enable / disable it from the system.    

![Image showing how to toggle modules to enable / disable them](<Disable module 2.png>)

## What happens when you toggle a module?

Associated information infrastructure elements get enabled / disabled based on the state of the module.

To demonstrate how it works, we will take two modules - CRM (enabled state) and HR (disabled state) as shown above.

### Table

The below image shows three cases:

Case 1: The Table is not associated to any module.   
Result - the table appears in the Explorer sidebar  

![Image showing table appears when not associated with any module](<ED Table 0.png>)  

Case 2: The Table is associated with CRM module.  
Result - the table appears in the Explorer sidebar as CRM is in enabled state.  

![Image showing table appears when associated with an enabled module](<ED Table 1.png>)  

Case 3: The Table is associated with HR module.  
Result - the table does not appear in the Explorer sidebar as HR is in disabled state.

![Image showing table disappears when associated with a disabled module](<ED Table 2.png>)
  

### Menu List

Case 1: The menu list is not associated to any module.  
Result - All menu items appear in the command bar (Explorer) as configured.  

![Image showing menus appear when not associated with any module](<ED Menu 0.png>)  

Case 2: The menu list is associated to CRM module.  
Result - the menu items appear in the command bar (Explorer) as CRM is in enabled state.  

![Image showing menus appear when associated with an enabled module](<ED Menu 1.png>)  

Case 3: The menu list is associated to HR module.
Result - the menu items does not appear in the command bar (Explorer) as HR is in disabled state.

![Image showing menus disappear when associated with a disabled module](<ED Menu 2.png>)

### Menu item

Case 1: The menu item is not associated to any module.  
Result - All menu item appears in the command bar (Explorer) as configured.  

![Image showing menu item appears when not associated with any module](<ED Menu Item 0.png>)  

Case 2: The menu item is associated to CRM module.  
Result - the menu item appears in the command bar (Explorer) as CRM is in enabled state.  

![Image showing menu item appears when associated with an enabled module](<ED Menu Item 1.png>)  

Case 3: The menu item is associated to HR module.
Result - the menu item does not appear in the command bar (Explorer) as HR is in disabled state.  

![Image showing menu item disappears when associated with a disabled module](<ED Menu Item 2.png>)


### Page

Case 1: The page is not associated to any module.  
Result - Page displays as configured in Explorer.  

![Image showing page enabled when not associated with any module](<ED Page 0.png>)  

Case 2: The page is associated to CRM module.  
Result - The page displays as CRM is in enabled state.  

![Image showing page enabled when associated with an enabled module](<ED Page 1.png>)  

Case 3: The page is associated to HR module.
Result - The page is disabled as HR is in disabled state.  

![Image showing page disabled when associated with a disabled module](<ED Page 2.png>)

### Component

Case 1: The component is associated to CRM module.  
Result - The component displays as CRM is in enabled state.

Case 2: The component is associated to HR module.
Result - The component is disabled as HR is in disabled state.  

![Image showing how components are enabled and disabled when associated with an enabled or disabled module](<ED Component.png>)


### New and Improved Notifications interface 

This release brings out an improvement how the notifications appear in Explorer. 

***Alert indicator for notifications***

Prior to this release, there were no visual alerts in Explorer to notify the unread notifications. One had to access the notifications area to view the list of unread ones.

Now, there is a new "Bell" icon which provides a visual alert of the number of unread notifications in red.

:::info[Please note]

The access point for notifications has now changed. Now we can access all notifications by clicking the "Bell" icon and the notification list will appear.
:::

![Image showing comparison between how to access old and new notifications interface](<Notification 1.png>)

***Easier segmentation for Reminders and Mentions***

The new notifications interface makes it easier to pickup the mentions and reminders from the remaining list. 

Earlier, there was one list of all notifications and one had to search for reminders / mentions. This was a peculiar problem when the list of notifications was long.

![Image showing comparison between old and new notification list with reference to visibility of  mention and reminders](<Notification 2.png>)

:::tip[Please note]  
Observe that the number of unread mentions and reminders is also visible.  

"All" will display the full list of notifications arranged in descending order of date and time. This is the default tab selected when you access notification interface. (shown above)

"Mentions" will show all unread mentions in descending order of date and time. Notice the icon of "@" comes against mentions.  

![Image showing mentions notification](<Notification 3.png>)

"Reminders" will display the list of unread reminders in descending order of date and time. Observe the icon of reminder against it.

![Image showing reminders notifications](<Notification 4.png>)
:::

***Header and body visible in the notification list***

The new notification interface will show both the header and the body (without truncating it) in the notification list itself. This brings ease of viewing the notification and reduces the time to assimilate the message.

Earlier, only the header used to appear in the notification list and the user had to open the notification to read the body.

![Image showing comparison between old and new notifications interface with reference to header and body of notification](<Notification 5.png>)

***Action buttons for notifications***

With each notification you get four action buttons:

![Image showing Action buttons](<Notification 6.png>)

1. **Snooze** - Just like the previous versions, you can still snooze a notification. The item will then disappear from the unread notifications list for the defined duration.

2. **Open** - Clicking this action button will open the item of the table, from where the notification originated. Once a notification is opened, it will the state of the notification to "Read". 

3. **Mark Read** - If this option is clicked, the subject notification;s state is changed to "Read" from "Unread". The "Read" notifications list sit below the unread ones. Notice that there is no Red dot against the notification item, which signifies it is not in "Unread" state.

![Image showing read notifications](<Notification 7.png>)
4. **Dismiss** - This will remove the notification from the list.

:::tip[Please note]

Once a notification is "Read", it cannot go back to the "Unread" state. Observe in the above image, there are only three action buttons. 
:::

***Mark all notifications as read***

It is now possible to change the state of all notifications and mark them as "Read" by a single click. 

![Image showing Mark All as Read button](<Notification 8.png>)

:::note[Please note]

Notifications list is updated with the page load and refreshed every minute.
:::

### Element level validations for Adaptive Documents (v3)

This release introduces the validation feature, which can be applied to individual elements.

To apply validations at the element level, please consider the following points:

1. Select the subject element, on which you want to apply validation.

![Image showing element level validation option](<Element Validation 1.png>)

2. Observe the element attributes panel has a "VALIDATION" section. Click on "+" icon to add a validation to the selected element.

![Image showing how to add validation criteria](<Element Validation 2.png>)

3. This will open the section to define conditions when the subject element is valid. Based on the nature of the element you will receive options. Think of it as a defining statement - This element is "Valid when ___ is ____". Both the blanks are dropdown fields. For example - you can select "data" and operator as "equals". The statement then becomes "Valid when data equals".

![Image showing operator options](<Element Validation 3.png>)![Image showing criteria statement](<Element Validation 4.png>)

4. Provide the value, which completes the criteria based on operator. 

![Image showing completed validation criteria](<Element Validation 5.png>)

:::tip[Please note]
The value provided will be case sensitive, if string.
:::

5. Finally, you can also provide the string that will be displayed if the validation criteria is not met. 

![Image showing string to be displayed for invalid values](<Element Validation 6.png>)

:::info[Application]
An application of this feature can be thought of as entering a password by a user.
If the Password matches, then the validation criteria is met. Else, a text like "You entered an incorrect password!" can be displayed.

There can be many such applications of this feature.
:::

