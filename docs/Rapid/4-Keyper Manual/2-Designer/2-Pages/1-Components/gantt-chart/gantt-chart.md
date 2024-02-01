# Gantt Chart

## Overview

Gantt charts are useful project management tools that visually represent the schedule and progress of tasks or activities over time. They offer a clear and structured way to plan, coordinate, and track various elements of a project. Rapid has the ability to configure Gantt charts based on the Tasks and Sub-Types of Tasks in your system

### **Can you create Gantt Chart for your Table?**

**Important note: Gantt charts can only be configured for the "Tasks" table or a table that is a subtype of the "Tasks" table.**

A table is a subtype of the Tasks table if while creating the table, it has inherited the Tasks.

![image-1702246145115.png](./downloaded_image_1705285575257.png)

**To learn more about how to create sub-type tables read our documentation on [Table Creation Options](https://docs.rapidplatform.com/books/experiences/page/creating-a-new-table-table-options "Creating a new Table - Table Options").**

### Check if your Table qualifies for Gantt Chart**

**To check whether your desired table is a subtype of Tasks or not, please follow the below points:**

1. Navigate to Designer &gt; Tables &gt; All Tables
2. Check the "Subtype Of" column for your desired table
3. If it is a subtype of the "Tasks" table then you can make a Gantt from this.

For example, a Gantt chart **CAN** be constructed from the Projects table as it is a subtype of Tasks.

![image-1702247343193.png](./downloaded_image_1705285576278.png)

### Configuring the Gantt Chart Page Component**

**Please consider the following steps for configuring a Gantt Chart for your Table.**

1. Navigate to Designer &gt; Tables &gt; All Tables
    ![image-1702247570296.png](./downloaded_image_1705285577323.png)
2. Open the Table you wish to configure a Gantt Chart on. (You can scroll through the list or use the search bar to find the table)  
    ![image-1702247690642.png](./downloaded_image_1705285578421.png)
3. Click the Design Tab  
    
    1. If not on the Singular page. Change to this using the dropdown.  
        ![image-1702247866804.png](./downloaded_image_1705285579440.png)
4. Add a new Tab to the page (For the purpose of this illustration we are placing the Gantt chart on a new tab, but it can also be placed on an already existing tab.)  
    ![image-1702248964804.png](./downloaded_image_1705285580459.png)
5. Configure the Tab 
    1. Select the Table (The name of the Tasks table or Subtype table you are on)
    2. Provide an Appropriate Page name. Page names must be unique.
    3. Provide a Tab Name. This will be what displays on the Tab strip.
    4. Press OK  
        ![image-1702249173289.png](./downloaded_image_1705285581474.png)
6. Press Create Page (If the page does not already exist)  
    ![image-1702249223043.png](./downloaded_image_1705285582493.png)
7. Press Add a Layout  
    ![image-1702249270033.png](./downloaded_image_1705285583512.png)
8. Select the "Gantt Chart" Component. Use the search bar or scroll through the list to find it.  
    ![image-1702249318284.png](./downloaded_image_1705285584535.png)
9. Select the Edit Gantt Button
    
    ![image-1702249375734.png](./downloaded_image_1705285585554.png)
10. Configure the Gantt Component 
    1. Select the Table you want the Gantt configured from. In this case a Project is made up of Tasks. So the Tasks lists will be selected.
    2. Select an appropriate default Zoom level
    3. Select a view. Views can be used to filter out particular rows. (See Views documentation for more information on how these work)
    4. If you do not want people to be able to create Subtypes of Tasks from the Gantt Chart Hide this
    5. Determine if you want the tree collapsed or open  
        **The below images depict how a collapsed and expanded tree may look like in Explorer view.**

        **Collapsed Tree**
        [Col.png](./downloaded_image_1705285586574.png)
        **Tree with individual tasks open**
        ![Non-col.png](./downloaded_image_1705285587587.png)

    6. Disable features you do not want users to configure
    7. Press Save  
        ![image-1702251415080.png](./downloaded_image_1705285588612.png)
11. Navigate to explorer, the project and the Gantt Tab to see the produce Gantt  
    ![image-1702251471114.png](./downloaded_image_1705285589638.png)

### **Related articles**

**How to hide / show Gantt Chart on Design page?**

**How to hide / show Gantt Chart on Create Screen page?**

**How to arrange Gantt Chart on the layout?**

**How to delete a Gantt Chart component?**

[**How to interact with Gantt Chart component in Explorer with data?**](https://docs.rapidplatform.com/books/experiences-oxn/page/how-to-interact-with-a-gantt-chart "How to interact with a Gantt Chart?")

[**Board component**](https://docs.rapidplatform.com/books/experiences/page/what-is-a-board-component-on-a-layout-page "What is a Board component on a Layout / Page?")

[**Pipeline component**](https://docs.rapidplatform.com/books/experiences/page/what-is-a-pipeline-component-on-a-layout-page "What is a Pipeline component on a Layout / Page?")

[**Go back to All Components Page**](https://docs.rapidplatform.com/books/experiences/page/what-are-the-available-components-for-pages)