# Connecting to Data Tables

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
There can be a nested relationship among table connections ie. a child connection can have further children defined. 

![Image showing different types of connections](<Connection 1.png>)
:::

### What happens when a connection is successfully created at the document level?

When a connection (whether normal or child) is successfully created at the document level, then all the columns of the table(s) are available in the  <a href="https://docs.rapidplatform.com/docs/Rapid/Keyper%20Manual/Adaptive%20Designer/Element%20picker%20features/" target="_blank">**Element Picker**</a>. You can then add these input elements from connections to the <a href="https://docs.rapidplatform.com/docs/Rapid/User%20Manual/glossary/#composition-area" target="_blank">**composition area**</a> and configure your Adaptive Document to interact with connected data tables.

### How to create a normal / parent connection?

To create a normal or parent type of connection to a data table consider the following steps:

1. Select the  <a href="https://docs.rapidplatform.com/docs/Rapid/Keyper%20Manual/Adaptive%20Designer/Understanding%20the%20Overview%20Tab/" target="_blank">**Overview tab**</a> for the desired Adaptive Document. 

2. Click on "+" icon of the "Connections". This will open a connections panel in the middle of the screen.

3. Select "RAPID Platform" in the first field as ***source***.

![Image showing steps to connect root section to a table](<Root Connection 1.png>)

4. A new field appears. Select the ***method*** here. This defines the nature of connection. There are two options:  
    a. ***View*** - allows the system to fetch / feed an array of items.  
    b. ***Single Item*** - allows the system to fetch / feed one single item.  

![Image showing nature of connection options](<Root Connection 2.png>)

5. A section on arguments appear. This has two fields:  
   a. ***Select list*** - here you can select the relevant table / list to establish the connection.  
   b. ***Fetch on Load*** - this is a toggle field. To learn more about Fetch on Load field, <a href="https://docs.rapidplatform.com/docs/Rapid/User%20Manual/glossary/#fetch-on-load-adaptive-documents" target="_blank">**click here**</a>.

![Image showing arguments for connection](<Root Connection 3.png>)

6. Click Create

![Image showing Create button](<Root Connection 4.png>)

You now have a connection for the chosen table and will be able to pick its columns as elements from the <a href="https://docs.rapidplatform.com/docs/Rapid/User%20Manual/glossary/#element-picker" target="_blank">**element picker**</a>.

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
   b. **Method** -  This _method_ field defines the nature of connection. Select View (if you want an array of items) or Single Item. 
   c. **Select List** - Select the table that you wish to connect as child. This is a dropdown field with titles of all the lists in the source selected.  
   d. **Fetch item on load** - Select the value on the toggle field. To learn more about Fetch on Load field, <a href="https://docs.rapidplatform.com/docs/Rapid/User%20Manual/glossary/#fetch-on-load-adaptive-documents" target="_blank">**click here**</a>.  
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

:::tip[Please note]  
The Parent-child connections established in Adaptive Document can be different from the relationship existing between tables in Designer.  

For example - In Designer, a Table Employee Contacts may be a child of Business Contacts table. However, in Adaptive Document you can make a relationship where Employee Contacts is the parent and Business Contacts is a child.  

You need to be careful on selecting the column that establishes the connection and it should logical correct.  
:::

## Connections at the Adaptive Document's element level

The objective of establishing connections between an Adaptive Document and a Table is to ultimately be able to connect a table item's field to an Adaptive Document's element.

While establishing Document level connection is the first step towards it, the objective is achieved when the element is connected.

### Where to locate connection information for the element?

The connection attributes of the element can be accessed in the <a href="https://docs.rapidplatform.com/docs/Rapid/User%20Manual/glossary/#element-configuration-panel-categories" target="_blank">**connection category**</a>  of the <a href="https://docs.rapidplatform.com/docs/Rapid/User%20Manual/glossary/#element-configuration-panel" target="_blank">**Element configuration panel**</a> .

![Image showing connection category in the element configuration panel](<Element connection 1.png>)

Please note, the connection category in the element configuration panel is associated to the element selected on the canvas.

### What information / features are available in the connection section for the element?

![image showing fields in the connection category](<Element connection 2.png>)

The connection category in the Element configuration panel displays information / provides features to edit connection attributes for the selected element.

Below is the description in order of labels as displayed in the above image:

1. This is the title of the table to which the connection belongs.  

If you click on this area, the panel of properties of the connected table will open in the middles of the canvas. 

![Image showing Table properties panel](<Element connection 3.png>)

:::note[Please note]  
This is the same panel of table properties which opens from the document level connection of the Overview Tab. Therefore, any change made here can change the properties of the connection at the document level. 

This panel of table properties provides the name of the parent (if the subject table is a child table), list of child connections (if the subject table has any children) and a list of all the elements associated to the subject table.

This panel helps to review all information about the table and associated elements at a single location.   
:::

2. This is the element associated to the connected table.

If you click on this field, a dropdown will open. This dropdown list contains all the columns associated to the connected table. You can select the column of your choice and it replaces the element on the canvas in a click. The selected control becomes the new element connected to the table.

![Image showing how the connected element can be replaced from the connection category](<Element connection 4.png>)

:::warning[Please note]  
Changing the element like this will not change the type of the element.   

For example - if the initially connected element was Id (type number) and it is changed to Title (type text). The element will get connected to the Title column of the table, however, its type in the Adaptive Document will remain Number.   

This can create a potential mismatch, if not configured thoughtfully.   
:::


3. Delete the connection.

Please note, clicking the bin icon only deletes the connection between the table and the element. The table remains connected at the document level and the element continues to exist on the canvas, however, the element is no more connected to the table.


### Associating element connections to the table

There are two ways to associate an element to a connected table:

1. Method 1 - via adding an element directly through the connected table by using the <a href="https://docs.rapidplatform.com/docs/Rapid/Keyper%20Manual/Adaptive%20Designer/Element%20picker%20features/#categories-in-connections-tab" target="_blank">**Element Picker's Connection tab**</a> .

The element added via this method is born associated to the connected table. The element is of the same type as the selected table column. 

For example - if Id is selected from the Element Picker's Connections tab's Businesses table, then the new element will be of Number type and connected to the Businesses Table's Id column.

2. Method 2 - Add an element to the composition area from the Element Picker and then associate it with the connected table.

In this method, the element is not born as connected. 

Please follow the below steps:

1. Add an element of the input control type of your choice from the Element Picker. For example - Single line of Text.

![Image showing selection of text type input control from element picker](<Element connection 5.png>)  

2. Select the element on the composition area. Observe that the Connection category in the Element configuration panel does not show anything. 

![Image showing element added to composition area without connection](<Element connection 6.png>)

3. Click on the SELECT CONNECTION field. This is a dropdown showing a list of all the tables connected at the document level.  
Click and select the table of your choice here.

![Image showing list of connected tables in connection category](<Element connection 7.png>)

4. The title of the selected table will appear now and a new field - SELECT CONNECTED COLUMN appears. Click on it to reveal a dropdown list of all the columns associated with the selected table.  
Select the desired column from the dropdown. 

![Image showing list of columns of selected table](<Element connection 8.png>)

5. The element is now connected to the table. 

![Image showing connected element](<Element connection 9.png>)

Please note, the type of the element does not change with the selected column. For example - if you had initially added a text type of element and connected the Id column (type - number), the element on the canvas will be Id (type - text).

:::danger[Please note]  
Be very careful while changing the table properties whether from Overview Tab or Element Configuration Panel. If the table is a parent, it can break the connection relationships, impacting  all associated element connections as well.
:::
