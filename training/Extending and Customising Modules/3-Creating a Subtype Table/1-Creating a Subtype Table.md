# Creating a Subtype Table
Eventually, you will want to extend your Rapid site by adding new tables beyond what is offered in the Assets modual of Rapid Standard. This section will the process of adding new tables (specifically subtype tables).

Read the scenario below for context.

### *Stationery Inc.* Coffee Machines Scenario
> The company *Stationery Inc.* owns several commercial-grade coffee machines at their various offices and warehouses. However, the company wishes to track additional information for their coffee machines, and so the general Assets table is no longer suitable.
>
> Our task is to create a table that will track the company's coffee machines, as well as: 
> - The employee responsible for cleanin
g the machine at the end of each day
> - The employee responsible for purchasing the milk and coffee beans
> - The office or warehouse location where the coffee machine is installed

## Creating the Table
1. Create a new table. (You can learn how to create a new table <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/Keyper%20Manual/Designer/Tables/creating-tables/" target="_blank">here</a>).
2. We need to name the table. We should give it a plural name because it is a collection of similar items. So, we will call it **Coffee Machine Assets**.
3. Coffee Machines are a type of asset, so we are going to tick the “Create Sub-Type” button to inherit the columns from the **Assets** table. We then choose the **Assets** table from the drop-down menu.

![A screenshot demonstrating how to create a Coffee Machine Assets subtype table. It highlights the importance of naming the table and choosing the correct subtype.](<Coffee Machine Subtype.png>)

4. The best part of making a new table is that you get to choose an icon to represent it. If we search for "coffee" in the icons search box, we can see  several suitable icons appear.

![A screenshot demonstrating how to create a Coffee Machine Assets subtype table. It highlights the importance of choosing a descriptive icon.](<Coffee Machine Icon.png>)

5. Lastly, we must choose where our table items and files will be stored in SharePoint. I’m going to choose Base **Rapid > Documents**, which is the main documents folder. I want Rapid Platform to create neat folders for each item in my Sharepoint system, so I’ll press the checkbox.
6. Press **Create**

![A screenshot demonstrating how to create a Coffee Machine Assets subtype table. It highlights the importance of choosing the correct file structure.](<Coffee Machine Storage.png>)

7.	If we open our new table by finding it in **Designer**'s table list, we can see all the columns that were in the **Assets** table have been inherited into the **Coffee Machine Assets** table. Look at all these columns we don’t have to build. Hours of work saved.

![A screenshot demonstrating how to create a Coffee Machine Assets subtype table. It highlights why creating a subtype is powerful: all of the columns from the main Assets table are now inherited by the new subtype table.](<Coffee Machine Columns Inherited.png>)

## Opening the Table
We can now access our new table two different ways.
1. We can click the explorer button in the upper right corner of the site. This will allow us to view the **Coffee Machine Assets** table via the **Explorer** application.

![A screenshot demonstrating how to create a Coffee Machine Assets subtype table. It highlights how to switch from the Designer to Explorer applications when viewing a table.](<Coffee Machine Columns Explorer.png>)

2. The new table will also now appear at the bottom of the **Explorer** sidebar. You may have to refresh the page, but the new table will now appear in the sidebar once you return to **Explorer**.

![A screenshot demonstrating how to create a Coffee Machine Assets subtype table. It highlights the fact that when a new table is created, it is automatically added to the bottom of the sidebar.](<Coffee Machine Sidebar.png>)