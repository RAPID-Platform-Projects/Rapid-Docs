# Common Issues
When adding a new table, there a several features that will need to be implemented before it will work as expected. For example, we need to ensure that a user can navigate to the table without using Designer; the user should also be able to create new items and add them to the table. These steps are explained below in more detail.

### Editing the sidebar

1.	The problem here is, we want Coffee Machines to appear under Assets. It looks strange sitting here under System. It looks like we’re going to have to redesign the sidebar, so we’ll need to go back into DESIGNER. Now, it’s important to note that we are in EXPLORER.
2.	Click the Designer button at the bottom of the sidebar again.
3.	We want to change the menu that we saw on the sidebar, so on the sidebar here, let’s choose the menus button. We want to edit the Explorer Menu, so let’s click on the EXPLORER menu button.
4.	Here, we see the main sidebar menu that we’ve been using, laid out with folders (like this Tasks folder) and then each of the apps or modules we’ve been using underneath it. Our Coffee Machines menu button appears at the bottom of the list, but we want it here under the ASSETS folder.
5.	Let’s scroll down to the bottom. Here, we can see the COFFEE MACHINES menu button. We can change where it displays, by clicking and holding the handle that looks like three lines stacked on top of each other. You can see my mouse changes to show I can move this item.
6.	By clicking and holding, I can move my mouse up towards the top of the screen to drag the menu button up higher. Once I reach the assets folder, I can drop it where I want the button to go.
7. However, if we look inside the Assets folder, we can see that the other types of assets aren't displayed as unique menu buttons. In that case, we should delete this menu button, and we will allow the user to access the table in a different way.
8. To delete a table from the sidebar, we... [how to?]()
9. If we open the assets table, we can see that the other asset table subtypes are displayed as tabs along the tab strip at the top. Let's add our new table to this tab strip...[how to?]()

[Link to docs]()

### Creating a form that connects to a table
1.	Let’s build a way to CREATE new Coffee Machines and EDIT their details. We go up to the DESIGNER button in the top right. Then, we make sure the drop-down is set to “COFFEE MACHINE”, singular, and that this display area says FORM.
2.	Rapid Standard gives us this helpful blue button that says, “Add all Coffee Machines columns…”. There’s also a Configure button underneath it, which allows you to choose just the fields you are interested in. Let’s press the configure button. Here, I’ll choose the fields I think are most relevant for a Coffee Machine. Once I’m done, I’ll click “Add to Form.”
3.	Let’s now configure what will appear when we create a COFFEE MACHINE. We do this by pressing the “Create Screen” button here. Just like before, we will configure and choose the fields that we want the user to see and enter information into.
4.	We can drag the layout around and prioritise the information that is most important to *Stationery Inc.* at the top, and less important information below it. By hovering over and of the fields that we have added, a list of options will appear. The most important option here is the MANDATORY button, which has an asterisk icon. The MANDATORY button will make it so that a new COFFEE MACHINE cannot be added without this field being added. For example, we might make the SERIAL NUMBER of the machine mandatory, so the same machine cannot be entered multiple times into the database.
5.	We need to make sure that we save our changes.
6.	Now, if we click on the explorer button in the top right corner of the page, we can see that now when we create a COFFEE MACHINE, we are able to enter data. And, when we open a COFFEE MACHINE item by double-clicking on it, we can edit all the fields that we added to the form.

[Link to docs]()