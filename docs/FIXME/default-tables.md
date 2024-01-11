# Default Tables

When installing a fresh Rapid site, there are a number of system lists which are already configured these lists are essential in ensuring correct functionality of the Rapid site. To view all of the system lists, navigate back to Designer and observe the items under the 'Entities' expandable drop-down of the Nav Menu.

[![Default Tables 01.png](https://docs.rapidplatform.com/uploads/images/gallery/2021-09/scaled-1680-/WIiLs1zJ25xji1zM-default-tables-01.png)](https://docs.rapidplatform.com/uploads/images/gallery/2021-09/WIiLs1zJ25xji1zM-default-tables-01.png)

*System Table List*

All of these entities (lists) are required and their configuration should not be altered, with the exception of Tasks as it is special. Tasks will be covered in greater detail in the next section.

#### Database Migrations

The Database Migration table is a list which tracks major site changes. It is to keep a log of key events in the site file updates so a site administrator or user can trace major changes made to their Rapid site. This list tracks events such as:

- Site creation
- Table Deletion

Click on the Database Migrations table through the nav bar. Then once the Table is opened, press the button in the top right, this button is found across Rapid and will switch between Designer and Explorer whilst maintaining the current context.

[![Default Tables 02.png](https://docs.rapidplatform.com/uploads/images/gallery/2021-09/scaled-1680-/HPrDPuFwiiqOeb0a-default-tables-02.png)](https://docs.rapidplatform.com/uploads/images/gallery/2021-09/HPrDPuFwiiqOeb0a-default-tables-02.png)*Database Migration Table - Designer*

You will now be in the context of the Database Migration table in Explorer. You will notice a data table with only one item as the site has only recently been created.

[![Default Tables 03.png](https://docs.rapidplatform.com/uploads/images/gallery/2021-09/scaled-1680-/R8EHH9Urzn8lfnKm-default-tables-03.png)D](https://docs.rapidplatform.com/uploads/images/gallery/2021-09/R8EHH9Urzn8lfnKm-default-tables-03.png)*atabase Migration Table - Explorer*

#### Dependencies

Dependencies are not accessible through the user interface. Attempting to open this table in Explorer will present an error message, this is intended. Dependencies are most commonly used in Gantt charts where one task is dependant on another task if that is the case, there will be an item in the Dependency table which consists of a sourceID and targetID.

#### Notes

Notes is another table which is not directly accessible through the user interface. Attempting to directly open this table in Explorer will present an error message, this is intended. Notes are however widely used throughout a Rapid site. The Notes table allows for the storage of the notes that are created on the site.

#### Principals

Principals is an immutable list of people and groups who have access to this particular Rapid Site. Opening this table in Explorer will display the full list of users who are recognised by the site and have access to it. Permissions run a lot deeper than this, but if a User is not on this list they will not be able to be authenticated to even open the Rapid site.

[![Default Tables 04.png](https://docs.rapidplatform.com/uploads/images/gallery/2021-09/scaled-1680-/sYajSN5AJ8wKxQCJ-default-tables-04.png)](https://docs.rapidplatform.com/uploads/images/gallery/2021-09/sYajSN5AJ8wKxQCJ-default-tables-04.png)*Principals Table - Explorer*

Despite not being able to manually delete entries in this list, or manually modify users directly. This list was initially created from the members of the Office 365 Group that was selected on site creation. Therefore, to modify this list, you will need to go to your Office 365 admin and modify the user group to either add or remove users. Once the list is different to the list in Rapid you can then Import Users and Groups and select the group you wish to import. There are three states a user can be under when this import action occurs:

1. User is in both lists - This is common if the list remains largely unchanged > In this case, the user will remain unchanged after the import and will remain Active on the Rapid site
2. User is removed from imported Group but present in Rapid > In this case, the user will remain on the Principals list but set to 'Inactive'
3. User not present on Rapid but present in imported list > The user will be added to the Principal list in Rapid and set to Active

[![Default Tables 05.png](https://docs.rapidplatform.com/uploads/images/gallery/2021-09/scaled-1680-/YlUNU7BkSqSV3l9X-default-tables-05.png)](https://docs.rapidplatform.com/uploads/images/gallery/2021-09/YlUNU7BkSqSV3l9X-default-tables-05.png)

*Users and Groups Importer Interface*

#### Tasks

There are multiple page components and Rapid experiences that are dependant on the Tasks table. It is the backbone for My Work and ToDo where one work item or notification represents one task.