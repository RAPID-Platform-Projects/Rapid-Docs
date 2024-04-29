# Data Table

The data table is arguably the most important page component, as it is used to *create*, *delete*, *edit*, *view*, and *sort* [Items](</docs/Rapid/3-User Manual/2-Explorer/2-Items/1-items-overview/1-items-overview.md>). Whenever a Table is added to your Rapid site's database, the following happens automatically:

- A [Page](</docs/Rapid/3-User Manual/2-Explorer/3-Pages/3-Pages.md>) is created for your Table
- A [Menu Item](</docs/Rapid/3-User Manual/2-Explorer/8-Menus/8-Menus.md>) is created in the sidebar, which links to the Page
- The **Data Table** component is placed on that Page, and connected to the database Table

Therefore, the **Data Table** page component is crucial for viewing our items and data.

The **Data Table** can also be placed on *any* Page. For example, a **Data Table** can be placed inside an item's page to show connections between [Linked Items](</docs/Rapid/3-User Manual/2-Explorer/2-Items/6-items-linked/6-items-linked.md>), for example.

- If you are unfamiliar with **Tables**, you should first read about how [Tables View and Manipulate Data](</docs/Rapid/3-User Manual/2-Explorer/1-Tables/1-viewing-data-using-tables/1-viewing-data-using-tables.md>).

## Creating Items

Using the **Create** button in a **Data Table** component, you can create new items within a Table.

![A screenshot demonstrating how to create a new item in a data table. This screenshot is annotated with a red box. Inside the red box are the words "New Employee" with an icon of two people. The rest of the image is a sample table that contains employee information, such as their Name, Date of Birth, and Email Addresses.](<Create Item.png>)

- Visit this link: [Creating Items via Tables](</docs/Rapid/3-User Manual/2-Explorer/2-Items/3-item-creation/3-item-creation.md>), to read about item creation in detail.

## Deleting Items

Items can be deleted by selecting them, and then pressing the **Delete** button that will appear in the [Command Bar](</docs/Rapid/3-User Manual/glossary/glossary.md#command-bar>).

- You can read more about [when and how to delete items](</docs/Rapid/3-User Manual/2-Explorer/2-Items/7-items-deleting/7-items-deleting.md>) here.

## Opening and Editing Items

Opening items is the same as using any of the main tables in your Rapid Site. If you "open" an item using the **Data Table** component, you will navigate away from the current page, and will instead view the item's page you opened.

- You can read about [how to open and edit items](</docs/Rapid/3-User Manual/2-Explorer/2-Items/2-items-editing/2-items-editing.md>) here.

## Refreshing Data Tables

If the data within in a table is updated, the table will need to be refreshed in order for that data to be visible. Refreshing the entire page is not desirable as you may need to reauthenticate, which will take time.

Rapid Platform includes an *Inline Refresh* button, that allows you to refresh all the items in a data table component. The *Inline Refresh* is located in the [Command Bar](</docs/Rapid/3-User Manual/glossary/glossary.md#command-bar>), and has an icon that resembles a clockwise arrow.

![A screenshot that shows what the inline refresh button looks like. The screenshot is annotated with a red box. The inline refresh button is a clockwise arrow.](<Data Table Inline Refresh.png>)

## The Command Bar Can Be Disabled

It is possible to edit the [Command Bar](</docs/Rapid/3-User Manual/glossary/glossary.md#command-bar>) so certain menu items do not appear. For example, you can disable editing, or prevent the user from changing the table view.

- You can read about [how to disable a Data Table's Command Bar](</docs/Rapid/4-Keyper Manual/2-Designer/1-Tables/5-Table Configuration Guides/disabling-the-command-bar/disabling-the-command-bar.md>) here.

## Data Tables Can Filter and Sort Items

There are several methods for filtering and sorting the items visible on a **Data Table**. Filtering Items allows us to quickly find the relevant data we need.

**Table Views** provide a means to control what items are shown in a list. You can consider **Table Views** as a filter on a **Data Table**, which organises and displays information based on defined criteria.

Views work in tandem with **Filters**. For example, a **Table** can have a [Quick Filter](</docs/Rapid/3-User Manual/2-Explorer/1-Tables/1-viewing-data-using-tables/1-viewing-data-using-tables.md#quick-filtering-items>) enabled, as well as a View. This means that as a user, you can quickly find the item you are searching for.

- You can read about [Views and Filtering Items](</docs/Rapid/3-User Manual/2-Explorer/1-Tables/1-viewing-data-using-tables/1-viewing-data-using-tables.md>) here.