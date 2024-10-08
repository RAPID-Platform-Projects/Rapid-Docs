# Final Challenge
Extend the Assets Table with an subtype table called **Real Estate**

## Scenario:
*Stationary Inc.* also has several stores around the country, and they would like to track these in their internal database.

## Instructions
Below are the steps required to complete this task. Each step also contains a link back to different sections of the training to help you. However, try to  build the new table below from memory.

1. Create a new table, that is a *subtype* of the **Assets** table, and title it **"Real Estate Assets"** (<a href="https://docs.rapidplatform.com/training/Making%20Rapid%20Business%20Your%20Own/Part%203/Creating%20a%20Subtype%20Table/">Review how to build a subtype table</a>).

2. Add the following columns to the new table.
<a href="https://docs.rapidplatform.com/training/Making%20Rapid%20Business%20Your%20Own/Part%202/Adding%20columns%20to%20an%20existing%20table/">Review how to add columns to a table</a>).

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
(<a href="https://docs.rapidplatform.com/docs/Rapid/Keyper%20Manual/Designer/Menus/menu-button-configuration/how-to-crud-a-menu-item/">Review how to edit the sidebar</a>).

4. Create a new tab on the **Assets** page, that links to the new table **Real Estate Assets**.
([Review how to add a new tab to the Tab Strip](/docs/Rapid/Keyper%20Manual/Designer/Pages/Layouts/list-of-available-layouts)).

5. Build the **Details** and **Create Screen** pages in **Designer**, for the new table that has been created. Ensure that any irrelevant fields or columns are not included in the form.
    - (**Important:** Do not delete any fields inherited from the parent assets table! If you do this, it will delete the fields from all assets). Some fields that *should not* be included on the Real Estate form include: *model, good received date, make, manufactured date,* etc.
    - (<a href="https://docs.rapidplatform.com/training/System%20Build%20Foundational/Pages%20in%20Designer/Activity/">Review how to build the Create Screen and Details Page layouts</a>).

5. Add two test items into the table (i.e. two pretend properties).

6. Return to the **Coffee Machine Assets** table in **Designer**.

7. Delete the old *Machine Location* column.
    - Go to the **Columns** tab.
    - Select the *Machine Location* column from the list.
    - Click the **Delete** button that will appear in the Command Bar.

8. Create a new *Machine Location* column with the following characteristics. (<a href="https://docs.rapidplatform.com/docs/Rapid/Keyper%20Manual/Designer/Tables/Table%20Configuration%20Guides/how-to-add-columns-to-a-data-table/">Review how to add columns to a table</a>).

| Column Name | Column Type | Additional Info | Column Description |
| --- | --- | --- | --- |
| *Machine Location* | Lookup | Should look up to the **Real Estate Assets** table. | Describes the location where the coffee machine is installed. |

9. Return to **Explorer** and open the **Coffee Machine Assets** table. Add some test coffee machines, and check that you can now select a *Machine Location* from your **Real Estate Assets** table.