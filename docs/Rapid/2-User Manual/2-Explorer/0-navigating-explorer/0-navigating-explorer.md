# Navigating Explorer

The main data manipulation tool that Rapid provides is the **Explorer** application. **Explorer** lets you view entities, modify, add and remove data. It is the primary front end experience that nearly all users interact with.

There are three main components which provide **Explorer** with its basic functionality: the **Jumbotron**, the **Sidebar**, and **Pages**. Each of these are explained below.

## Jumbotron

The **Jumbotron** is found at the top of all pages within **Explorer**.

![A screenshot that shows the location of the jumbotron at the top of the Rapid site. The screenshot is annotated with a red box to highlight its location.](<Jumbotron Location.png>)

The Jumbotron contains several features, such as Breadcrumbs, Buttons, and the Rapido Chatbot. Each of these are explained in detail below.

### Breadcrumbs

The Jumbotron displays the current Page's title, as well as a series of *Breadcrumbs* showing previous navigation steps. When viewing a Data Table, the Table's name will be presented in the breadcrumbs; in an item context, the item's title will be displayed.

:::note[Terminology]
The term "Breadcrumbs" comes from the fairytale *Hansel and Gretel* collected by the Brothers Grimm. In the story, the two children leave breadcrumbs behind them to find their way home. In web design, this term has come to mean a series of links that allow you to return to previous webpages that you have visited. Essentially, this type of component allows you to "retrace your steps".
:::

![A screenshot of the breadcrumbs section of the Jumbotron. The screenshot is annotated with a red box to highlight the series of links know as "breadcrumbs". The series of links reads: "Projects > Office Building Construction". The words "Officer Building Construction" are bold, an annotation explains that this is the current page name (item) and represents the current page being viewed. These words do not act as a hyperlink, as they are the current page. The word "Projects" is written in regular text. An annotation explains that this is the previous page name (for a table) and represents the table where the item is stored. Clicking this word would cause the user to be navigated back to the table.](<Jumbotron Breadcrumbs.png>)

The current page will be rendered in the *Breadcrumbs* as bold text, and cannot be clicked. Previous pages, however, will be rendered as regular text, and can be clicked on.

### Buttons

On the far right of the **Jumbotron** there are three buttons.

![A screenshot showing the location of the Jumbotron buttons: Environment Switch, Notifications, and User Token. The screenshot is annotated with a red box demonstrating the location of the buttons.](<Jumbotron Buttons.png>)

Each of the buttons and their functionality are explained below.

| Button Name | Description | Screenshot |
|---|---|---|
| **Environment Switch** | A button to quickly switch between the **Explorer** and **Designer** applications within the current item or list context. For example, if you are viewing the **Employees** table in **Explorer** and press this button, it will open the **Employees** table in **Designer**. Note that when you are in **Designer**, this button will change | ![A screenshot demonstrating the location of the Environment Switch button. The button's icon resembles a set square and a ruler. The screenshot is annotated with a red box to indicate the location of the button.](<Jumbotron Designer.png>)| 
| **Notifications** | A button to access a quick popup window that presents the current users notifications. | ![A screenshot demonstrating the location of the Notifications button. The button's icon resembles a bell. The screenshot is annotated with a red box to indicate the location of the button.](<Jumbotron Notifications.png>)|
| **User Token** | A button to access information about the current user, including a log out button. | ![A screenshot demonstrating the location of the User Token button. The button's icon is a coloured circle with the user's initials inside. In this example, the icon is green with the initials "JF" inside. The screenshot is annotated with a red box to indicate the location of the button.](<Jumbotron User.png>)|

### Rapido Chatbot

To the right of the **Jumbotron** is a button to access the Rapid ai-powered Chatbot. For more information please see our docs on [how to use the Chatbot](</docs/Rapid/2-User Manual/2-Explorer/6-Support Chatbot/How to create a support request/How to create a support request.md>).

![A screenshot showing the Rapido Chatbot, and its location on the jumbotron. The Rapido button is blue, and has a white icon of a robot head with a smiley face. The screenshot is annotated with a red box to highlight its location.](<Jumbotron Rapido.png>)

## Explorer Sidebar

The side bar is used for navigation, which can be found on the far left of any page inside Rapid Platform. This menu is fully customisable. Items in the sidebar can point to Rapid pages, external links, and can also open forms or applications.

By default, all **Tables** created in your Rapid site will be added to the **Explorer** sidebar.

![A screenshot of a sidebar from Rapid Standard as an example. The sidebar is dark blue and has the Rapid name and logo at the top. Underneath are a list of menu items that will navigate the user. The menu items from top to bottom are: Organisation, Tasks, Assets, CRM, Finance, Projects, Human Resources, WHS, Policies, Support, and System. At the very bottom of the sidebar are buttons to navigate between core applications. This is explained further below.](<Explorer sidebar.png>)

### Experience Buttons

#### Explorer

At the base of the **Sidebar** are several buttons used for navigating to other applications. When you are using **Explorer**, you will note that the **Explorer** button, which has an icon of a house, is highlighted.

![A screenshot of the Explorer experience button at the bottom of the Sidebar. The screenshot is annotated with a red box to indicate the location and appearance of the button. The button contains an icon of a house.](<Explorer Nav.png>)

#### Workflow

You can navigate to **Workflow** using the centre button, which has an icon of a flow chart.

![A screenshot of the Workflow experience button at the bottom of the Sidebar. The screenshot is annotated with a red box to indicate the location and appearance of the button. The button contains an icon of a flowchart.](<Workflow Nav.png>)

- [Learn more about **Workflow** here](</docs/Rapid/2-User Manual/4-Workflow/4-Workflow.md>).

#### Designer

You can also navigate to **Designer** using the button on the right. This button's icon resembles a ruler and a set square.

![A screenshot of the Designer experience button at the bottom of the Sidebar. The screenshot is annotated with a red box to indicate the location and appearance of the button. The button contains an icon of a ruler and set-square.](<Designer Nav.png>)

- [Learn more about **Designer** here](</docs/Rapid/2-User Manual/3-Designer/1-what-is-designer/1-what-is-designer.md>).

## Pages

The Page component is how all data is conveyed. A page can be set up in countless ways as there are a multitude of page components which can be added to a page. All entities that are present in the **Explorer Sidebar** can have pages added.
- You can also read an overview of [how to use pages](/docs/Rapid/3-Keyper%20Manual/2-Designer/2-Pages/3-Components/1-overview/1-overview.md).

![A screenshot demonstrating the location of a page. The page in this example is a projects page with a tab strip, and a projects form included. The screenshot is annotated with a red box that surrounds the page component.](<Page Example.png>)