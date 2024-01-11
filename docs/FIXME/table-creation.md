# Table Creation

The whole purpose of rapid platform is to allow users to create lists and have them displayed in whatever way they desire. To achieve this, entities are used. One entity correlates to an item list, and each item list correlates to a table within an SQL database. An entity is a great way of grouping information. For example, an entity could contain the contact information of employees, or number of stars in the sky on a particular day. Your data is important to you so lets group it up so you can access it with ease.

To get started, navigate to Designer and press Create Entity. This will bring you to the entity creation page. On this page, give your entity a good name. Remember, this name will need to be referenced by not only users but also the system and queries. So give your entities meaningful and distinct names.

## Entity Name Restrictions:

- Must be less than 50 characters
- Should not contain symbols
- Must not be exclusively numbers
- Must be unique

[![Creating Tables.png](https://docs.rapidplatform.com/uploads/images/gallery/2021-09/scaled-1680-/zJPGLQUQb2ic0o7a-creating-tables.png)](https://docs.rapidplatform.com/uploads/images/gallery/2021-09/zJPGLQUQb2ic0o7a-creating-tables.png)*Entity Creation*

Pressing the create button will initialise the entity creation wizard. From here you can

1. Select the entity name for your new list
2. Choose if this entity in a sub-type of an existing entity (See Entity Inheritance)
3. Select the display icon for your new entity
4. Select document library for your new entity. This is the location in SharePoint where its files will be stored