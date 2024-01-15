# Creating a New Asset Subtype

If you wish to create an additional asset subtype alongside "IT Assets" or "Vehicles," it is entirely possible. A subtype allows you to create a table with all the columns of the Assets table

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
6. OPTIONAL: If you want to store files against these items select a document storage. This will connect to your sharepoint
7. Press Create  
    ![image-1702446158934.png](./downloaded_image_1705285242242.png)
8. Add relevant columns to the table for fields you want to capture additional data. In this example we will add a choice field called location which will state which room the equipment is located. For more information on creating columns and column types see the following documentation on [Creating Columns](https://docs.rapidplatform.com/books/experiences/page/how-to-add-columns-to-a-data-table)
    1. Press create column  
        ![image-1702446301740.png](./downloaded_image_1705285243259.png)
    2. Enter the relevant details and press save  
        ![image-1702446354964.png](./downloaded_image_1705285244284.png)
    3. Add your columns to the form by clicking the Design Tab (For more information on how to add all the fields in a more structured way see the following documentation on [Pages](https://docs.rapidplatform.com/books/experiences/page/all-about-pages-in-designer)
    4. Press Save
    5. Add your new table to the explorer sidebar (to see more details on how to do this see [Customizing the Sidebar](https://docs.rapidplatform.com/books/experiences/page/how-to-customise-sidebars-using-menus))