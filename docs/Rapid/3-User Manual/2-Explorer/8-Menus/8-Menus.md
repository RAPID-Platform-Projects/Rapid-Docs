# Menus

Menus are the chief means of navigating around a Rapid site. However, they have additional functionality, as will be discussed in this article. You can observe menu items in the [Sidebar](</docs/Rapid/3-User Manual/glossary/glossary.md#sidebar>) or in the [Command Bar](</docs/Rapid/3-User Manual/glossary/glossary.md#command-bar>).

You can read a thorough explanation of [how to create menu items](</docs/Rapid/4-Keyper Manual/2-Designer/3-Menus/2-where-to-find-a-list-of-all-menus/2-where-to-find-a-list-of-all-menus.md>). The various functions of a menu item are outlined below.


## Navigating to a Page

A menu can navigate to another page in your Rapid site. The [Sidebar](</docs/Rapid/3-User Manual/glossary/glossary.md#sidebar>) is an example of this.

![A screenshot that demonstrates a mouse cursor hovering over a menu item in the Sidebar. The menu item reads "Tasks Portal" and has an icon of clipboard with a checkmark. This screenshot is used to illustrate a common type of button that a user will interact with.](<Menus Item.png>)

Clicking on the **Tasks Portal** menu item, for example, will navigate the user to a page that contains the **Tasks Data Table** as its main page component.

## Expanding Menu Sections

Some menu items are used as "folders" or "containers" to hold other menu items. A menu item that contains other menu items will have a sideways chevron ( **>**) at the end of the menu button. When a menu folder is opened, its contents appear in a flyout panel to the right.

In the example below, the "CRM" menu item does not navigate you to another page. Instead, it opens a flyout panel that contains many other menu items such as "Leads", "Opportunities", "Accounts", etc.

![An example of a menu item that is used as a contained for other menu items. The user has clicked on "CRM", and now a flyout panel has opened beside the sidebar.](<Menus Open Container.png>)

Arranging menu items in this way can help group together tables logically, and can reduce visual clutter in the Sidebar.

### Nested Menu Folders

Menu Folders can open additional menu folders. These "nested" folders allow more complex grouping. They are, however, limited by the width of the screen that you are working on.

In the example below, the user has clicked on the following menu item folders: 
`System > Settings > Adaptive` and has now arrived at the "Adaptive Designer" menu item that will navigate them to a different page.

![An example of opening multiple menu items. The items that the user has clicked are described in the paragraph before this image. The user's cursor now hovers over the item "Adaptive Designer" on the far right.](<Menus Open Multiple.png>)

- [More information about **Menus in the Sidebar**](</docs/Rapid/4-Keyper Manual/2-Designer/3-Menus/1-Setting up your sidebar/1-Setting up your sidebar.md>)

## Open a Hyperlink

A menu item can also open a hyperlink to an external website. This is useful if your company has another site it wants to link to. In this case, the menu button operates like a hyperlink or URL.

Note that Rapid Platform also provides an [External Page Component](</docs/Rapid/3-User Manual/2-Explorer/3-Pages/2-Page Components/External Page Component/External Page Component.md>) for viewing webpages within your site if there is a particular website that is used frequently by employees.

- [More information about **Menus Opening Hyperlinks**](</docs/Rapid/4-Keyper Manual/2-Designer/3-Menus/Menu Actions/open-hyperlink/open-hyperlink.md>)

## Open App

You can create a menu button that opens one of Rapid's other applications, such as [Explorer](</docs/Rapid/3-User Manual/2-Explorer/0-navigating-explorer/0-navigating-explorer.md>), [Workflow](</docs/Rapid/3-User Manual/4-Workflow/workflow-introduction.md>), or [Designer](</docs/Rapid/3-User Manual/3-Designer/1-what-is-designer/1-what-is-designer.md>). Your System Designer can also specify a particular URL sub-path so that a button opens a particular **Workflow** diagram, or a particular **Designer** page, etc.

- [More information about **Menus Opening Apps**](</docs/Rapid/4-Keyper Manual/2-Designer/3-Menus/Menu Actions/open-app/open-app.md>)

## Perform Remote Action

A menu item can also interact other web applications such as Microsoft 365. Essentially, this type of menu item will send .json or simple code to another web application. This prevents you as a user needing to copy-and-paste data, or move between two different websites.

For example, this menu item could be used to trigger and run **Azure Functions** or **Power Automate Flows**.

- [More information about **Menus Performing Remote Actions**](</docs/Rapid/4-Keyper Manual/2-Designer/3-Menus/Menu Actions/perform-remote-action/perform-remote-action.md>)

## Raise Create Webhook Action

## Raise Workflow Created Signal

## Update Items

## Generate SendGrid Emails

## Open a Flyout

## Execute Workflow Processes

## Open Adaptive Documents

Menu items sometimes may open an **Adaptive Document** for you to fill out. Alternatively, your System Administrator may create a menu item that opens an **Adaptive Document** to save user time. Consider the following example, where a "Leads Form" is linked to, so that a travelling salesperson or consultant can quickly gather the information of a lead.

![A screenshot demonstrating a button that reads "Public Leads Form" with the mouse cursor placed on top of the button.](<Menus Link Adaptive Forms.png>)

When an **Adaptive Document** menu item is pressed, it will open the **Adaptive Document** in a new browser tab.

![A screenshot of an example Adaptive Document. This one has the title "Let's Stay in Touch". Underneath is a web form for gathering personal contact information so that a sales person can contact a lead. At the bottom of the form is a Captcha and a "Submit" button. On the left-hand side of the screenshot is a "Save Progress" button to allow users to save their progress on a web form.](<Menus Adaptive Forms.png>)