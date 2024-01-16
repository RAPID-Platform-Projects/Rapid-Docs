# Process Inputs

Process inputs can be configured to support most field types within RAPID. These inputs can then be referenced within the process to alter it's flow and make process 'regard' its invoked context. When a process is executing inputs are regarded the same whether they are started manually or from a Call Activity.

## Configuring Call Activity Inputs

Adding an input to a diagram requires three pieces of information,

- Title : The friendly name presented to Users when manually starting a process
- ColumnName : The internal name used to reference the input. These should be all lowercase with no spaces
- Field Type : What kind of input this is

You can use the following field types

<table id="bkmrk-type-primitive-descr" ><thead><tr ><th >Type</th><th >Primitive</th><th >Description</th></tr></thead><tbody><tr ><td >Single Line of Text</td><td >String</td><td > </td></tr><tr ><td >Email</td><td >String</td><td > </td></tr><tr ><td >Multiple lines of Text</td><td >String</td><td > </td></tr><tr ><td >Date and Time</td><td >Date</td><td > </td></tr><tr ><td >Choice</td><td >String</td><td >These cannot be configured to present choices</td></tr><tr ><td >Lookup</td><td >Integer</td><td >Can be configured to regard a list. Will be automatically populated when manually triggered from an item of the related type</td></tr><tr ><td >Boolean</td><td >Boolean</td><td > </td></tr><tr ><td >Number</td><td >Number</td><td > </td></tr><tr ><td >Percentage</td><td >Number</td><td > </td></tr><tr ><td >Currency</td><td >Number</td><td >Cannot configure the currency type</td></tr><tr ><td >User</td><td >Integer</td><td > </td></tr><tr ><td >JSON</td><td >String</td><td > </td></tr><tr ><td >Whole number</td><td >Integer</td><td > </td></tr><tr ><td >Globally Unique Identifier</td><td >String</td><td > </td></tr><tr ><td >XML Data</td><td >String</td><td > </td></tr><tr ><td >PowerBI Report</td><td >String</td></tr></tbody></table>

## Referencing inputs with an expression

Inputs are placed on an inputs key within the process run. They can be referenced via

`<%= Process_1.inputs.{input column} %>`

## Inputs and Conditional Gateways

While configuring a condition on a sequence flow from a conditional gateway you can reference the inputs from the Process element. Within the Process Inputs item you will find each process input. Currently sequence flow rules regard all rules as strings so be wary of non-string scenarios. Using &gt; or &lt; comparators for numbers should work as expected within the same number of digits as `'44' < '48'` is true