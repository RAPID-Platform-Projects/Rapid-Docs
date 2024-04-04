# **Task:** Extend the Assets Table with an assets subtype called "Real Estate"
*Stationery Inc.* also has several stores around the country, and they would like to track these in their internal database.

Below is an outline of the steps that are required to complete this task. Try to build the new table using what you have learned from memory. If required, there are also links back to different sections of the training to help you.

### Steps
1. Create a new table, that is a **subtype** of the Assets table, and title it "Real Estate"

2. Add the following columns to the new table:

| Column Title | Column Type |
| --- | --- |
| Street Address | Single Line of Text |
| Suburb | Single Line of Text |
| Postcode | Single Line of Text |
| Next Rent Due | Date |
| Insurance Number | Single Line of Text |
| Insurance Details | Multiple Lines of Text |
| Insurance Expiry | Date |
| Cleaning Company | Single Lookup (to the "Accounts" table from CRM) |
| Groundskeepers | Single Lookup (to the "Accounts" table from CRM) |

**Note**: *the last two fields require access to the CRM module.*

3. Delete the new link to the table that has now been added to the sidebar.

4. Build the page form, so that the new type of assets can be created, and data can be added to them. Ensure that any irrelevant fields or columns are not included in the form (**Important:** Do not delete any fields inherited from the parent assets table! If you do this, it will delete the fields from all assets). Some fields that *should not* be included on the Real Estate form include: *model, good received date, make, manufactured date,* etc.

5. Add two test real estate properties into the table.

6. Create a workflow, which alerts the property-manager employee when the next rent or insurance payment is due. For our purposes, we don't need to concern ourselves with turning this feature off. [how to le]()