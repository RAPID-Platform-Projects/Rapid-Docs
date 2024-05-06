# How to configure connection with data table?

Establishing a connection with a data table enables the system to fetch and / or feed data to the data table from the form.   

:::info[Please note]
In Adaptive Documents, there are two ways to levels of connections:  
  1. at the document level - the table is connected to the document.
  2. at the element level - the table column is connected to the element of the document.  
  
  We shall discuss both these levels of connections in this article.  
  :::

## Connections at the Document Level

At the document level, you can create two types of connections with data tables:

1. **The normal connection** - A normal connection refers to a connection of the Adaptive Document with a data table without any conditions or dependencies on any other data table. For example - a connection with a Tasks table will allow the system to fetch / feed information from / to the Adaptive Document.

2. **The child connection** - A child connection refers to a connection of the Adaptive Document with a data table based on dependencies defined on another table (called the parent table). For example - a connection with Employees table which is made a child connection to Tasks table can fetch / feed information based on Task Assignee value. Therefore, the system can access information to Employees who are assigned a specific task. 

:::note[Please note]
A normal connection becomes a parent connection when a child connection is defined based on it. For example - in the above example, the Tasks table is a normal connection till a child connection on Employees table is defined based on its Task Assignee value. The Tasks table now becomes the parent table.   
:::

:::tip[Please note]
There can be a nested relationship among table connections ie. a child connection can have further children defined based on its value. 

![Image showing different types of connections](<Connection 1.png>)
:::

### What happens when a connection is successfully created at the document level?

When a connection (whether normal or child) is successfully created at the document level, then all the columns of the table(s) are available in the  <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/Keyper%20Manual/Adaptive%20Designer/Element%20picker%20features/" target="_blank">**Element Picker**</a>. You can then add these input elements from connections to the <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/glossary/#composition-area" target="_blank">**composition area**</a> and configure your Adaptive Document to interact with connected data tables.

### How to create a normal / parent connection?

To create a normal or parent type of connection to a data table consider the following steps:

1. Select the  <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/Keyper%20Manual/Adaptive%20Designer/Understanding%20the%20Overview%20Tab/" target="_blank">**Overview tab**</a> for the desired Adaptive Document. 

2. Click on "+" icon of the "Connections". This will open a connections panel in the middle of the screen.

3. Select "RAPID Platform" in the first field as source.

![Image showing steps to connect root section to a table](<Root Connection 1.png>)

4. A new field appears. Select the nature of connection here. There are two options:  
    a. ***View*** - allows the system to fetch / feed an array of items.  
    b. ***Single Item*** - allows the system to fetch / feed one single item.  

![Image showing nature of connection options](<Root Connection 2.png>)

5. A section on arguments appear. This has two fields:  
   a. ***Select list*** - here you can select the relevant table / list to establish the connection.  
   b. ***Fetch on Load*** - this is a toggle field. To learn more about Fetch on Load field, <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/glossary/#fetch-on-load-adaptive-documents" target="_blank">**click here**</a>.

![Image showing arguments for connection](<Root Connection 3.png>)

6. Click Create

![Image showing Create button](<Root Connection 4.png>)

You now have a connection for the chosen table and will be able to pick its columns as elements from the <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/glossary/#element-picker" target="_blank">**element picker**</a>.

The connection will be visible in the Overview tab's Connections section.  The title of the connection is the title of the Data Table.

![Image showing normal table connection in canvas](<Root Connection 5.png>)

### How to create a child connection?

To create a child connection under a parent connection, please consider the following steps:

1. In the Overview tab's Connections section, click on the title of the connection. This will open a section in the middle of the canvas. This section displays the properties of the parent select.

Observe there is a Children section, which has three options.

![Image showing Parent properties section](<Child connection 1.png>)

  :::info[Please note]   
  There are three types of children connections that can be created here. 

    1. **UNIVERSAL LINK** - This is a two way link between the connecting tables' items. For example - let the parent be Tasks table and child be Employees table. If the connection is established on Task Assignee column, then the system will fetch / feed employee assigned to the specific task AND also can fetch / feed all the tasks where the assignee is a specific employee. It thus becomes a two-way link and a many-to-many relationship (based on data).

    2. **MULTILOOKUP** - This is a one way link between the connecting tables' items and the system can fetch multiple items of the child connected to the parent. For example - let the parent be Employees table and child be the Tasks table. If the connection is established on Task Assignee column, then the system can fetch / feed all the Tasks where the assignee is a particular employee **but** cannot access employee details from tasks table. Therefore, it is a one way, one-to-many relationship.

    3. **LOOKUP** - This is a also one way link between the connecting tables' items and the system can fetch a single item of the child connected to the parent. For example - let the parent be Tasks table and child be the Employees table. If the connection is established on Task Assignee column, then the system can fetch / feed only one employee who is assigned to the particular task **but** cannot access other task details from Employees table. Therefore, it is a one way, one-to-one relationship.
:::


2. Click on one of the three options based on the type of child connection you wish to establish. 

This will open a section in the middle of the canvas. 

![Image showing different fields to fill for creating child connection](<Child connection 2.png>)

3. Fill-out the details which will define the behaviour of the child connection. consider the following:

   a. **Source** - The source will be pre-selected here based on the parent.  
   b. **Nature of connection** - Select View (if you want an array of items) or Single Item.  
   c. **Select List** - Select the table that you wish to connect as child. This is a dropdown field with titles of all the lists in the source selected.  
   d. **Fetch item on load** - Select the value on the toggle field. To learn more about Fetch on Load field, <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/User%20Manual/glossary/#fetch-on-load-adaptive-documents" target="_blank">**click here**</a>.  
   e. **Relationship with parent** - This is a dropdown field with three options.    
     1. Universal link   
     2. MultiLookup and   
     3. Lookup  
     
    You can change / select the type of connection from this field. Based on the value selected here, the fields below will appear.  
    f. **Fetched linked items** - This is a toggle field. You can select "Yes" if you wish to fetch the item(s) from the child table.  
    g. **Select column** - Based on the relationship with parent selected, the values will appear in this field. 

        If the relationship with parent is selected as "Lookup", then the dropdown in this field will show all the columns of lookup type (defined in Designer while creating the table). You can select the appropriate column for establishing the connection.  
          
        If the relationship with parent is selected as "MultiLookup", then the dropdown in this field will show all the columns of Multi - lookup type. You can select the appropriate column for establishing the connection.   

        If the relationship with parent is selected as "Universal Link", then this field will be disabled. As the system needs to fetch only the universally linked items, there is no need to select a column for connection.   
          
        :::note[Please note]
        If there are no columns defined in the table that support the selected relationship then you cannot establish that type of connection. There has to be at least one column type to support.

      ![Image showing message if no supportive column type](<Child connection 3.png>)
      :::  
    h. **Item $filter** - You can provide the <a href="https://docs.rapidplatform.com/docs/Rapid/Developer%20Manual/API%20Concepts/#odata-filter-support" target="_blank">**OData $filter query**</a> here to prune the list of child items. 

4. Click Create.

The child connection when created successfully will feature below the parent with a slight indent. 

![Image showing child connection below parent connection](<Child connection 4.png>)




