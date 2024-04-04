# Adding Columns to a Subtype Table

Now that we have the main columns inherited from the **Assets** table, we can create our necessary columns that are specific to the **Coffee Machine Assets**.

### Create a New Column
1. Ensure that you are viewing the **Coffee Machine Assets** table in **Designer**.
2. Switch to the **Columns** tab
3. Press the **+ Create Column** button, in the Command Bar.

Remember, we need to build the following columns that will track:
> - The employee responsible for cleaning the machine at the end of each day
> - The employee responsible for purchasing the milk and coffee beans
> - The office or warehouse location where the coffee machine is installed

## Challenge 2: Add several columns using a description
1. Below is a table that describes which columns need to be created. Using its information, build the three columns it describes.

| Column Name | Column Type | Additional Info | Column Description |
| --- | --- | --- | --- |
| *Machine Cleaner* | Lookup | Should look up to the "Employees" table. | *The employee responsible for cleaning the machine at the end of each day.*|
| *Machine Gopher* | Lookup | Should look up to the "Employees" table. | *The employee responsible for purchasing the milk and coffee beans.*|
| *Machine Location* | Choice | This could also be a lookup field if your site had a table that contained the different offices and warehouses of the company. For now, use a choice field and invent some location names. | *The office or warehouse location where the coffee machine is installed.* |


> **Remember:** When adding a new table or columns, there a several features that will need to be implemented before the table will work as expected. For example, we need to ensure that a user can navigate to the table without using Designer; the user should also be able to create new items and add them to the table. Complete the steps on the next page, to ensure the **Coffee Machine Assets** table can be implemented just like the other asset tables.