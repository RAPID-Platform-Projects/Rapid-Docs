# **Challenge 3:** Extend the Assets Table with an assets subtype called "Real Estate"
### Scenario:
> *Stationery Inc.* also has several stores around the country, and they would like to track these in their internal database.

### Instructions
Below are the steps required to complete this task. Each step also contains a link back to different sections of the training to help you. However, try to  build the new table below from memory.

1. Create a new table, that is a *subtype* of the **Assets** table, and title it **"Real Estate Assets"**

2. Add the following columns to the new table:

| Column Title | Column Type | Additional Info |
| --- | --- | --- |
| Street Address | Single Line of Text |
| Suburb | Single Line of Text |
| Postcode | Single Line of Text |
| Next Rent Due | Date | The **DateTime** field type does not track timezone changes, and so dates will appear differently in different timezones. The **Date** field is therefore usually the best choice for most applications.|
| Insurance Number | Single Line of Text |
| Insurance Details | Multiple Lines of Text |
| Insurance Expiry | Date |
| Location Type | Choice | Contains two options: "Office" and "Warehouse" |
| Cleaning Company | Single Lookup (to the "Accounts" table from CRM) |
| Groundskeepers | Single Lookup (to the "Accounts" table from CRM) |

> **Note**: *the last two fields require access to the CRM module.*

3. Delete the new menu item that has now been added to the sidebar.

4. Create a new tab on the **Assets** page, that links to the new table **Real Estate Assets**.

5. Build the **Details** and **Create Screen** pages in **Designer**, for the new table that has been created. Ensure that any irrelevant fields or columns are not included in the form. (**Important:** Do not delete any fields inherited from the parent assets table! If you do this, it will delete the fields from all assets). Some fields that *should not* be included on the Real Estate form include: *model, good received date, make, manufactured date,* etc.

5. Add two test items into the table (i.e. two pretend properties).

6. Return to the **Coffee Machine Assets** table in **Designer**.

7. Delete the old *Machine Location* column.

8. Create a new *Machine Location* column with the following characteristics:

| Column Name | Column Type | Additional Info | Column Description |
| --- | --- | --- | --- |
| *Machine Location* | Lookup | Should look up to the **Real Estate Assets** table. | Describes the location where the coffee machine is installed. |

9. Return to **Explorer** and open the **Coffee Machine Assets** table. Add some test coffee machines, and check that you can now select a *Machine Location* from your **Real Estate Assets** table.