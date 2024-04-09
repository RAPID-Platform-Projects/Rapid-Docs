# How to configure connection of root section with data table?

Establishing a connection of a section with a data table enables the system to fetch and / or feed data to the data table from the form.   
  
Please consider the below steps for establishing connection of root section with data table:  

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

The root section is now connected to the desired table.
