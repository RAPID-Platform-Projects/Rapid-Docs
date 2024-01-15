# Deleting Tables

A fundamental feature of design platforms is the ability to undo and revert. The *Delete Table* function serves this purpose. The intended use is for during the prototyping phase of the site development. During this time, the system design changes dynamically to fit the requirements so having this ability is useful.

**Note:** Deleting an table is an irreversible action and will remove all references to the affected table

Before proceeding with the deletion of a *RAPID Table*, here is a checklist to follow:

1. Be sure that no data is affected. It is your responsibility to ensure that the deletion of an table will not negatively affect the user experience of your *RAPID Site*
2. Ensure the table does not have any inherited entities depending on it

To open the *Table Deletion* flyout, navigate to the desired table that is to be deleted and navigate to the *Security &amp; Permissions* tab.

![Deleting Tables Step 01.png](./downloaded_image_1705285483117.png)

Once the *Security &amp; Permissions* page loads, press the **Advanced Options** button, this will open a drop-down menu where the delete functionality resides.

![Deleting Tables Step 02.png](./downloaded_image_1705285484128.png)

Press Delete

to open the deletion flyout pane.

![Deleting Tables Step 03.png](./downloaded_image_1705285485141.png)

This flyout requires the Table list page to be inputted before the deletion pipeline is executed. From here, only the selected table can be deleted and it demands that the typed phrase exactly matches the list page name for that table.

![Deleting Tables Step 04.png](./downloaded_image_1705285486151.png)

Only after the list page for that particular table is inputted, the **Delete** button will become active. At this point, the deletion pipeline can be initiated.