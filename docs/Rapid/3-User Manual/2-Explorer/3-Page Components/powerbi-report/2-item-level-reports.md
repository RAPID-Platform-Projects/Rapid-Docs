# Item-Level PowerBI Reports

PowerBI Reports can also provide information at an item-specific level. This means that instead of creating a report for all items, the report instead focuses on visualising data from a single item and its linked data.

For example, a report can be placed inside a tab on an item. This PowerBI report will then display information specific to the item that contains the report.

1. A user opens an item that contains a PowerBI Report.

![A screenshot that depicts how to open an item that contains a project report. The screenshot is annotated with a red box and a red arrow to show how to open an item.](<PowerBI Item Open.png>)

2. They then navigate to a tab or page where the item-specific report is located.

![A screenshot that depicts how to open the "Reports" tab of an item inside the Rapid Standard "Projects" module. The screenshot is annotated with a red box and a red arrow that indicate the location of the tab.](<PowerBI Item Report Tab.png>)

3. The user can now view a report that only displays information about the specific item that the report is attached to.

![A screenshot of an item-level or item-specific report inside a Rapid item. The screenshot is an example from the Rapid Standard "Projects" module.](<PowerBI Item Report Example.png>)

> *Pictured:* an example of an item-level report in Rapid. This example is from the Rapid Standard "Projects" module.

An item-level report will change depending on the Rapid item that it is attached to. This report reveals budgetary information for projects. Opening another project item will display the same report, but with the information of the new project.

Rapid Platform achieves this by placing the following filter on the report: 

```{listname}:{id}```

This simply tells Rapid to only return information in the report that is attached to the current item's ID.