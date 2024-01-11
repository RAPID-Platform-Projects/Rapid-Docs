<!-- # Inability to create Grandfather Connections

##### **What does this limitation relate to?**

When we have three more tables and we try to reference them using Adaptive Documents in nested sections in a Adaptive Document, then it fails.

##### **Simulated Example:**

If we have three tables as shown below –

<table id="bkmrk-table-name-columns-c"><tbody><tr><td class="align-center" width="200">Table Name

</td><td class="align-center" width="200">Columns

</td><td width="200">Column Type

</td></tr><tr><td width="200">Test Grandfathers

</td><td width="200">Employee Name

</td><td width="200">Single Line of Text

</td></tr><tr><td rowspan="2" width="200">Test Fathers

</td><td width="200">Employee Name

</td><td width="200">Lookup on Test Grandfathers

</td></tr><tr><td width="200">Employee Department

</td><td width="200">Single Line of Text

</td></tr><tr><td rowspan="2" width="200">Test Children

</td><td width="200">Employee Department

</td><td width="200">Lookup on Test Fathers

</td></tr><tr><td width="200">Employee Team

</td><td width="200">Single Line of Text

</td></tr></tbody></table>

Now we try to reference these table fields in a nested section Adaptive Document as shown

[![Screenshot 2023-06-21 at 12.36.51 PM.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-06/scaled-1680-/XZElcTFjuGrXb4FF-screenshot-2023-06-21-at-12-36-51-pm.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-06/XZElcTFjuGrXb4FF-screenshot-2023-06-21-at-12-36-51-pm.png)

Here,

- the main page connection is made to the Test Grandfathers (titled Grandfather)
- the section titled “Father Section” is connected to Test Fathers with Parent Lookup on Test Grandfathers – Employee Name column
- the section titled “Child Section” is within the “Father Section” and is connected to Test Children table with Parent Lookup on Test Fathers – Employee Department column

Such an arrangement does not work in Rapid Platform at present.

##### **Use Case**

One of the use cases where Grandfather connections may be needed is the Project – Phase – Task hierarchy. -->