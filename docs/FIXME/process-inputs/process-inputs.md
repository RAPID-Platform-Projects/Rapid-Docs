# Process Inputs

Process inputs can be configured to support most field types within RAPID. These inputs can then be referenced within the process to alter it's flow and make process 'regard' its invoked context. When a process is executing inputs are regarded the same whether they are started manually or from a Call Activity.

## Configuring Call Activity Inputs

Adding an input to a diagram requires three pieces of information,

- Title : The friendly name presented to Users when manually starting a process
- ColumnName : The internal name used to reference the input. These should be all lowercase with no spaces
- Field Type : What kind of input this is

You can use the following field types

<table id="bkmrk-type-primitive-descr" style="height: 629px;"><thead><tr style="height: 46px;"><th style="height: 46px; width: 172px;">Type</th><th style="height: 46px; width: 100px;">Primitive</th><th style="height: 46px; width: 535px;">Description</th></tr></thead><tbody><tr style="height: 29px;"><td style="height: 29px; width: 172px;">Single Line of Text</td><td style="height: 29px; width: 100px;">String</td><td style="height: 29px; width: 535px;"> </td></tr><tr style="height: 29px;"><td style="height: 29px; width: 172px;">Email</td><td style="height: 29px; width: 100px;">String</td><td style="height: 29px; width: 535px;"> </td></tr><tr style="height: 46px;"><td style="height: 46px; width: 172px;">Multiple lines of Text</td><td style="height: 46px; width: 100px;">String</td><td style="height: 46px; width: 535px;"> </td></tr><tr style="height: 29px;"><td style="height: 29px; width: 172px;">Date and Time</td><td style="height: 29px; width: 100px;">Date</td><td style="height: 29px; width: 535px;"> </td></tr><tr style="height: 29px;"><td style="height: 29px; width: 172px;">Choice</td><td style="height: 29px; width: 100px;">String</td><td style="height: 29px; width: 535px;">These cannot be configured to present choices</td></tr><tr style="height: 46px;"><td style="height: 46px; width: 172px;">Lookup</td><td style="height: 46px; width: 100px;">Integer</td><td style="height: 46px; width: 535px;">Can be configured to regard a list. Will be automatically populated when manually triggered from an item of the related type</td></tr><tr style="height: 46px;"><td style="height: 46px; width: 172px;">Boolean</td><td style="height: 46px; width: 100px;">Boolean</td><td style="height: 46px; width: 535px;"> </td></tr><tr style="height: 46px;"><td style="height: 46px; width: 172px;">Number</td><td style="height: 46px; width: 100px;">Number</td><td style="height: 46px; width: 535px;"> </td></tr><tr style="height: 46px;"><td style="height: 46px; width: 172px;">Percentage</td><td style="height: 46px; width: 100px;">Number</td><td style="height: 46px; width: 535px;"> </td></tr><tr style="height: 46px;"><td style="height: 46px; width: 172px;">Currency</td><td style="height: 46px; width: 100px;">Number</td><td style="height: 46px; width: 535px;">Cannot configure the currency type</td></tr><tr style="height: 29px;"><td style="height: 29px; width: 172px;">User</td><td style="height: 29px; width: 100px;">Integer</td><td style="height: 29px; width: 535px;"> </td></tr><tr style="height: 29px;"><td style="height: 29px; width: 172px;">JSON</td><td style="height: 29px; width: 100px;">String</td><td style="height: 29px; width: 535px;"> </td></tr><tr style="height: 29px;"><td style="height: 29px; width: 172px;">Whole number</td><td style="height: 29px; width: 100px;">Integer</td><td style="height: 29px; width: 535px;"> </td></tr><tr style="height: 46px;"><td style="height: 46px; width: 172px;">Globally Unique Identifier</td><td style="height: 46px; width: 100px;">String</td><td style="height: 46px; width: 535px;"> </td></tr><tr style="height: 29px;"><td style="height: 29px; width: 172px;">XML Data</td><td style="height: 29px; width: 100px;">String</td><td style="height: 29px; width: 535px;"> </td></tr><tr style="height: 29px;"><td style="height: 29px; width: 172px;">PowerBI Report</td><td style="height: 29px; width: 100px;">String</td></tr></tbody></table>

## Referencing inputs with an expression

Inputs are placed on an inputs key within the process run. They can be referenced via

`<%= Process_1.inputs.{input column} %>`

## Inputs and Conditional Gateways

While configuring a condition on a sequence flow from a conditional gateway you can reference the inputs from the Process element. Within the Process Inputs item you will find each process input. Currently sequence flow rules regard all rules as strings so be wary of non-string scenarios. Using &gt; or &lt; comparators for numbers should work as expected within the same number of digits as `'44' < '48'` is true