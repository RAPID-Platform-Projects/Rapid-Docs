# Creating a New Asset Subtype

It is possible to create an additional asset subtype alongside "IT Assets" or "Vehicles". A subtype allows you to create a table with all the columns of the Assets table.

### How to Create an Assets Subtype

1. Select Designer &gt; Create Table

    ![image-1702445850673.png](./downloaded_image_1705285237147.png)

2. Enter a table name

    ![image-1702445929554.png](./downloaded_image_1705285238164.png)

3. Check the **Create Sub-Type** checkbox

    ![image-1702445975205.png](./downloaded_image_1705285239185.png)

4. Click the **Extends Table** dropdown and select **Assets**

    ![image-1702446027491.png](./downloaded_image_1705285240207.png)

5. Choose an appropriate icon

    ![image-1702446091533.png](./downloaded_image_1705285241226.png)

6. If you want to store files against these items, then you should select document storage location. This will connect to your site's sharepoint.

7. Press **Create**

    ![image-1702446158934.png](./downloaded_image_1705285242242.png)

8. Add any relevant columns to the table for the additional data you wish to capture. In this example we will add a choice field called *Location*. This data represents where the equipment is located. For more information on creating columns and column types see the following documentation on [Creating Columns](/docs/Rapid/4-Keyper%20Manual/2-Designer/1-Tables/5-Table%20Configuration%20Guides/how-to-add-columns-to-a-data-table/how-to-add-columns-to-a-data-table.md)

    1. Press **Create Column**

        ![image-1702446301740.png](./downloaded_image_1705285243259.png)

    2. Enter the relevant details and press **Save**

        ![image-1702446354964.png](./downloaded_image_1705285244284.png)

9. Add your columns to the form by clicking the Design Tab (For more information about how to add all the fields in a more structured way, see the following documentation on [Pages](/docs/Rapid/4-Keyper%20Manual/2-Designer/2-Pages/1-all-about-pages-in-designer.md))

10. Press **Save**
    
11. Add your new table to the explorer sidebar (to see more details on how to do this see [Customizing the Sidebar](/docs/Rapid/4-Keyper%20Manual/2-Designer/3-Menus/1-Setting%20up%20your%20sidebar/1-Setting%20up%20your%20sidebar.md))