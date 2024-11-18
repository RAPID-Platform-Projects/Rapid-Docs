# Bulk Update

You can use the Update Items menu action to quickly update several items on a data table. This system uses the Adaptive v2 version of Adaptive Documents.

## Steps

1) Navigate to [Adaptive Designer v2](https://designer.rapidplatform.com/)
2) Create a new Form
3) Add a single item connection to the form for the table we want to edit

![Add single item connection](<Single item connection.png>)

4) Add the fields you want to be updatable

![Add fields to the form](<Add fields to form.png>)

5) Save the new form
6) Navigate to Designer for the table you want and open the Menu tab

![Navigate to menu](<Navigate to menu page.png>)

7) Add a new menu action of type 'Update Items' and select your created form

![Configure the menu](<Menu configuration.png>)

8) Save the menu item
9) Navigate back to the data table and select the items you want to update

![Select several items](<Select several items.png>)

10) Press your new menu action and set the values you want to update. Note: Not touching a field will ignore setting it, and not set that value to blank/null.

![Use the form](<Use the form.png>)

11) Press OK and watch each item update

![Observe items have been modified](<Note items update.png>)