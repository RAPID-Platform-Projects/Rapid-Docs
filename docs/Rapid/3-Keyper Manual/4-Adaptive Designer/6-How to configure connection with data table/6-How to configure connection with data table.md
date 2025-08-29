# Connect to Data Tables

Establishing a connection with a data table enables your form to fetch items and views, or create new items in your database.

:::info[Please note]
In Adaptive Documents, there are two levels of connections:  
  1. at the document level - a table is connected to the entire document.
  2. at the element level - a table column is connected to an element of the document.  
  
  We shall discuss both these levels of connections in this article.  
  :::

## Document-Level Connections

At the document level, you can create two types of connections with data tables:

1. A **normal connection** to a data table has no conditions or dependencies.

2. A **child connection** to data table is based on dependencies from another table (called the parent table). For example, a connection with the **Tasks** table could have a child connection to the **Employees** table. This means the form can access can access information about any employees who are assigned a specific task. 

:::tip[Please note]

There can be a nested relationship among table connections. This means a child connection can have further children defined. 

![Image showing different types of connections](<Connection 1.png>)
:::

### Successful Document-Level Connections

When any connection (whether normal or child) is successfully created at the document level, then all the columns of the table(s) are available in the  <a href="https://docs.rapidplatform.com/docs/Rapid/Keyper%20Manual/Adaptive%20Designer/Element%20picker%20features/" target="_blank">Element Picker</a>. You can then add these input elements to the <a href="https://docs.rapidplatform.com/docs/Rapid/User%20Manual/glossary/#composition-area" target="_blank">composition area</a> and configure your Adaptive Document to interact with connected data tables.

### Creating a Normal Connection

To create a normal or parent type of connection to a data table, consider the following steps:

1. Select the <a href="https://docs.rapidplatform.com/docs/Rapid/Keyper%20Manual/Adaptive%20Designer/Understanding%20the%20Overview%20Tab/" target="_blank">Overview tab</a> for the desired Adaptive Document. 

2. Click on the **+** icon in the **Connections** section. This will open a connections panel in the middle of the screen.

![Image showing steps to connect root section to a table](<Root Connection 1.png>)

3. Select "RAPID Platform" in the first field as ***source***.

4. A new field appears. Select the ***method*** here. This defines the nature of connection. There are two options:  
    a. ***View*** connects the form to an **array of items**.  
    b. ***Single Item*** connects the form to a **single item**.  

![Image showing nature of connection options](<Root Connection 2.png>)

5. A section of arguments will appear. This has two fields:  
   a. ***Select list*** where you must the relevant **table** to establish the connection.  
   b. ***Fetch on Load*** is a toggle field that allows the form to <a href="https://docs.rapidplatform.com/docs/Rapid/User%20Manual/glossary/#fetch-on-load-adaptive-documents" target="_blank">load item data and display it to users</a>.

![Image showing arguments for connection](<Root Connection 3.png>)

6. Click **Create**

![Image showing Create button](<Root Connection 4.png>)

You now have a connection for the chosen table and will be able to pick its columns as elements from the <a href="https://docs.rapidplatform.com/docs/Rapid/User%20Manual/glossary/#element-picker" target="_blank">element picker</a>.

The connection will be visible in the Overview tab's Connections section.  The title of the connection is the title of the table.

![Image showing normal table connection in canvas](<Root Connection 5.png>)

:::danger[Changing Parent Tables]  
Be very careful while changing the table properties. If the table is a parent, it can break connection relationships. This will impact all associated element connections as well.
:::

### Creating Child Connections

To create a child connection under a parent connection:

1. In the Overview tab's **Connections** section, click on the title of the connection that you wish to be the parent.

    This will open a popup that displays the properties of the selected parent. This popup contains a **Children** section.

    ![Image showing Parent properties section](<Child connection 1.png>)

    :::info[Children Connections]
    There are three types of children connections that can be created here. 

    #### Universal Link

    This is a two-way link between the connecting tables' items. If the connection is established on **Tasks Table &gt; Task Assignee** column, then the system will fetch any **employee** assigned to the specific task AND also can fetch all the **tasks** where the assignee is a specific employee. It thus becomes a two-way link and a many-to-many relationship.

    #### Multilookup

    This is a one-way link between the connecting tables' items. The form can fetch multiple child items connected to the parent item in the database. If the connection is established on **Tasks Table &gt; Task Assignee** column, then the system can fetch all the Tasks where the assignee is a particular employee, *but* it cannot access employee details from the tasks table. Therefore, it is a one way, one-to-many relationship.

    #### Lookup

    This is a also one way link between the connecting tables' items and the system can only fetch a single child item that is connected to the parent. This is a one way, one-to-one relationship.
    :::

2. Click on one of the three options based on the type of child connection you wish to establish. This will open a section in the middle of the canvas. 

    ![Image showing different fields to fill for creating child connection](<Child connection 2.png>)

3. Enter the details which will define the behaviour of the child connection. Consider the following:

    a. **Source** will be pre-selected here based on the parent.  
    b. **Method** defines the nature of connection. Select *View* (if you want an array of items) or *Single Item*. 
    c. **Select List** chooses the table that you wish to connect as a child. This is a dropdown field with titles of all the tables from your site.
    d. **Fetch item on load** toggles whether you wish to <a href="https://docs.rapidplatform.com/docs/Rapid/User%20Manual/glossary/#fetch-on-load-adaptive-documents" target="_blank">pre-fill the form with data</a>.  
    e. **Relationship with parent** is a dropdown field with three options:
      - Universal link   
      - MultiLookup   
      - Lookup

    f. **Fetched linked items** toggles whether you wish to fetch item(s) linked to the table.  

    g. **Select column**  

      - If the relationship with parent is selected as **Lookup**, then the dropdown in this field will show all the lookup columns on the table.   
          
      - If the relationship with parent is selected as **MultiLookup**, then the dropdown in this field will show all the multilookup columns.  

      - If the relationship with parent is selected as **Universal Link**, then this field will be disabled. As the system needs to fetch only the universally linked items, there is no need to select a column for connection.   
          
      :::note[Please note]
      
      If there are no columns defined in the table that support the selected relationship, then you cannot establish that type of connection.

      ![Image showing message if no supportive column type](<Child connection 3.png>)
      :::

    h. **Item $filter** provides an <a href="https://docs.rapidplatform.com/docs/Rapid/Developer%20Manual/API%20Concepts/#odata-filter-support" target="_blank">OData $filter query</a> to prune the list of child items. 

4. Click **Create**.

The child connection when created successfully will feature below the parent with a slight indent. 

![Image showing child connection below parent connection](<Child connection 4.png>)

:::tip[Please note]  
The Parent-child connections established in Adaptive Document can be different from the relationship existing between tables in Designer.  

You need to be careful on selecting the column that establishes the connection, as it should logically connect the tables.  
:::

## Element-Level Connections

The objective of establishing connections between an Adaptive Document and a Table is to ultimately be able to connect an item's field to an Adaptive Document's element.

While establishing Document level connection is the first step towards this, the objective is only achieved when the element is connected.

### Connection Information

The connection attributes of the element can be accessed in the <a href="https://docs.rapidplatform.com/docs/Rapid/User%20Manual/glossary/#element-configuration-panel-categories" target="_blank">connection category</a>  of the <a href="https://docs.rapidplatform.com/docs/Rapid/User%20Manual/glossary/#element-configuration-panel" target="_blank">element configuration panel</a>.

![Image showing connection category in the element configuration panel](<Element connection 1.png>)

Please note, this panel displays information about whichever element is selected. Ensure you select the correct element first.

![image showing fields in the connection category](<Element connection 2.png>)

The connection category in the Element configuration panel displays information and allows you to edit the connection for a selected element.

1. **Connected Table Title** is the title of the table that is connected to this element.

    Clicking on this field will open properties panel for the connected table again.

    ![Image showing Table properties panel](<Element connection 3.png>)

2. **Column of Connected Table** displays the database column or field that this element is connected to.

    If you click on this field, a dropdown will open. This dropdown list contains all the columns associated to the connected table. You can select the column of your choice, and it will replace the element on the canvas.

    ![Image showing how the connected element can be replaced from the connection category](<Element connection 4.png>)

    :::warning[Please note]
    Changing the element like this will not change the type of the element.

    If the initially connected element was an **Id** (i.e. a number) and it is changed to Title (i.e. text), the connection will occur but will cause errors.

    Please only use this feature for elements of the same type.
    :::

3. **Delete the connection**
    
    This only deletes the *connection* between the table and the element on the canvas. The table will remain connected at the document level, and the element will continue to exist on the canvas. However, the element will no longer be connected to the table.

### Connecting Individual Elements to Tables

There are two ways to connect an element to a table:

1. **Adding a connected element using the <a href="https://docs.rapidplatform.com/docs/Rapid/Keyper%20Manual/Adaptive%20Designer/Element%20picker%20features/#categories-in-connections-tab" target="_blank">Element Picker</a>**

    ![A screenshot of the element picker, as the user selects a relevant connected element. The screenshot is annotated in red. At the top, the "Connections" tab has been selected. Underneath, the "Tasks" table has been chosen from a list. On the right portion of the panel, there is a list of fields that the user can choose from. These fields are from the database table, and already built with the correct element type and database connection.](<Element Picker 2.png>)

    This method is preferable, because the element will be created with the connection already formed. The element type will also match the database column correctly.

2. **Adding an element, and then associating it.**

    In this method, the element must be manually connected to the correct database table and column.

    Please follow the below steps:

      1. Add an input control type of your choice from the **Element Picker**. For example - a *Single Line* text field.

      ![Image showing selection of text type input control from element picker](<Element connection 5.png>)  

      2. Select the element on the composition area. Observe that the Connection category in the Element configuration panel does not show anything. 

      ![Image showing element added to composition area without connection](<Element connection 6.png>)

      3. Click on the **Selection Connection** field. This is a dropdown showing a list of all the tables connected at the document level. Select the table of your choice here.

    ![Image showing list of connected tables in connection category](<Element connection 7.png>)

    4. The title of the selected table will appear now and the field **Select Connected Column** appears. Click on it to reveal a dropdown list of all the columns associated with the selected table. Select the desired column from the dropdown. 

    ![Image showing list of columns of selected table](<Element connection 8.png>)

    5. The element is now connected to the table. 

    ![Image showing connected element](<Element connection 9.png>)