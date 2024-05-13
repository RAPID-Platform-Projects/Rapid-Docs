# Creating a New Asset Subtype

It is possible to create an additional asset subtype alongside "IT Assets" or "Vehicles". A subtype allows you to create a table with all the columns of the Assets table.

## How to Create an Assets Subtype

1. Select **Designer** &gt; **Create Table**

    ![image-1702445850673.png](<Create Table Button.png>)

2. Enter a table name

    ![image-1702445929554.png](<Create Table Name.png>)

3. Check the **Create Sub-Type** checkbox

    ![image-1702445975205.png](<Create Table Subtype.png>)

4. Click the **Extends Table** dropdown and select **Assets**

    ![image-1702446027491.png](<Create Table Extend Assets.png>)

5. Choose an appropriate icon

    ![image-1702446091533.png](<Create Table Icon.png>)

6. If you want to store files against these items, then you should select document storage location. This will connect to your site's sharepoint.

7. Press **Create**

    ![image-1702446158934.png](<Create Table Create Button.png>)

8. Add any relevant columns to the table for the additional data you wish to capture. In this example we will add a choice field called *Location*. This data represents where the equipment is located. For more information on creating columns and column types see the following documentation on [Creating Columns](/docs/Rapid/4-Keyper%20Manual/2-Designer/1-Tables/5-Table%20Configuration%20Guides/how-to-add-columns-to-a-data-table/how-to-add-columns-to-a-data-table.md).

:::note[Adding Columns]
This process is briefly explained at the end of this article.
:::

10. Press **Save**
    
11. Add your new table to the **Explorer Sidebar** (to see more details on how to do this see [Customising the Sidebar](/docs/Rapid/4-Keyper%20Manual/2-Designer/3-Menus/1-Setting%20up%20your%20sidebar/1-Setting%20up%20your%20sidebar.md))

## Adding New Columns to a Subtype

1. Press **Create Column**

![image-1702446301740.png](<Create Column Button.png>)

2. Enter the relevant details and press **Save**

![image-1702446354964.png](<Create Column Details.png>)