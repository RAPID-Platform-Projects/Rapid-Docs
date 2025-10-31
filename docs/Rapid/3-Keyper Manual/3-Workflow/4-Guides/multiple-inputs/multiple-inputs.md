# Handling Multiple Inputs

When using Signal start events it is a frequent occurrence to want to have multiple different triggers for a particular process. For example Assets could have several sub-types that all share a set-up process. Here we would want to create a separate trigger for each type of asset like so:

![Process with three inputs into an exclusive gateway](<Three Input Process.png>)

When creating the task to set up the Asset, it would be useful to include the item's name so we can tell which task is which. The problem is we don't know which start event will have fired, so how do we reference the Asset's name?

![Task title with a question mark for the lodash](<Creating a task title.png>)

## Coalescing sub-types with data cans

Given that all three asset types share a common name column, we can use a Data Can to 'hold' whichever start event triggered. This will give us a stable single place to reference columns for the 'starting' item.

![The three start events with their ID labelled and a single Assets data can](<Data Can and three start events.png>)

When referencing elements that haven't triggered, they will behave as if they didn't exist. For example if an IT Asset was created, `StartEvent_1twuj1g` would have values inside it, but `StartEvent_1` and `StartEvent_0tztc2m` would behave as if they were `undefined`. In our Lodash implementation `undefined` is a [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) (as in false like) value so we can use logical operators to 'pick out' the valid value.

![A data can configured to Assets with no ID configured](<Configuring the Data Can step 1.png>)

In our example, either `StartEvent_1`, `StartEvent_1twuj1g` or `StartEvent_0tztc2m` will have a value, as at least one start event must have begun the process. We can use the logical OR operator `||` to pick between them. To configure the data can we want to select the ID value of the start event, but trying to access a value on a missing element will return an error. To overcome this we can use [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) (the `?.` syntax) to try to access the value and return `undefined` if it isn't there. This would end up with a lodash statement like `<%= StartEvent_1?.properties?.id || StartEvent_1twuj1g?.properties?.id || StartEvent_0tztc2m.properties.id %>`.

Logical operators process from left to right, so this statement is essentially saying:
- If `StartEvent_1` exists and has an ID value, then use it, otherwise
- If `StartEvent_1twujig` exists and has an ID value, then use it, otherwise
- Use `StartEvent_0tztc2m`'s ID value

Note how the last choice doesn't use the `?.` optional chain. It could use it, but if none of the three start events have started we have a larger problem (erroring on the last item can help in identifying this problem).

![Data can referencing a start event](<Data Can populated.png>)

Executing the process, now we have a stable place to pull the name of whatever triggered the run which makes writing our task title nice and easy. For completeness, the task title ends up looking like this:

`Ensure asset <%= workflow['Asset'].properties.item.name %> loaded into site`

![Task title configuration with the data can name reference](<Task title with asset name lodash.png>)
