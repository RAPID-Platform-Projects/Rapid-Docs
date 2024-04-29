# Process Inputs

Process inputs can be configured to support most field types within RAPID. These inputs can then be referenced within the process to alter it's flow and make process 'regard' its invoked context.

When a process is executing inputs are regarded the same whether they are started manually or from a Call Activity.

## Configuring Call Activity Inputs

Adding an input to a diagram requires three pieces of information,

- Title : The friendly name presented to Users when manually starting a process
- ColumnName : The internal name used to reference the input. These should be all lowercase with no spaces
- Field Type : What kind of input this is

You can use the following field types

| Type | Primitive | Description |
| --- | --- | --- |
| Single Line of Text | String | |
| Email | String | |
| Multiple lines of Text | String | |
| Date and Time | Date |
| Choice | String | These cannot be configured to present choices | 
| Lookup | Integer | Can be configured to regard a list. Will be automatically populated when manually triggered from an item of the related type |
| Boolean | Boolean | |
| Number | Number | |
| Percentage | Number | |
| Currency | Number | Cannot configure the currency type |
| User | Integer | |
| JSON | String | |
| Whole number | Integer | |
| Globally Unique Identifier | String | |
| XML Data | String | |
| PowerBI Report | String | |


## Referencing inputs with an expression

Inputs are placed on an input's key within the process run. They can be referenced via:

`<%= Process_1.inputs.{input column} %>`

## Inputs and Conditional Gateways

While configuring a condition on a sequence flow from a conditional gateway you can reference the inputs from the Process element. Within the Process Inputs item you will find each process input.

Currently, sequence flow rules regard all rules as strings so be wary of non-string scenarios. Using &gt; or &lt; comparators for numbers should work as expected within the same number of digits as `'44' < '48'` is true.