# PowerBI Reports
Microsoft's PowerBI software is directly supported by Rapid Platform. PowerBI Reports enables you to quickly explore, visualise, and analyse the data contained in your Rapid site.

![A screenshot that reveals what a PowerBI report looks like when attached to a page in Rapid.](<PowerBI Report Example.png>)
> *Pictured:* an example PowerBI report from Rapid Standard's **Projects** module.

PowerBI Reports are attached to a page. Clicking on a a component of a report, such as an item in a table, or a section of a graph, will "drill down" into that section of data and reveal information specific to the element being examined.

![Alt text](<PowerBI Drilled Down.png>)
> *Pictured:* The same report once the "Office Building Construction" project has been selected on the lower bar graph. Now all of the visuals change to reflect this single project. Clicking on the same section of bar graph again will return to the "all projects" view.

### Slicers

Note that PowerBI Reports also contain **Slicers** which allows the data to "zoom in" on particular information. These slicers appear as drop-down boxes in the upper-right corner of the report. 

For example, we can "slice" the report so that it only displays projects with a particular *RAG Status*, or all of the projects for a particular *Client*, or all of the projects that have a particular *Project Status*.

![A screenshot the demonstrates how to apply a Slicer to a PowerBI report. Slicers help "filter" data in a PowerBI report, so that only certain items and their data are visible in the report.](<PowerBI Slicers Example.png>)

Slicers can also be combined together. For example, you could choose to select "All the reports with a "Red" *RAG Status*, that have a *Project Status* of "In Progress".

## Editing a PowerBI Report
If editing is enabled, there will be an **Edit** button in the top right of the PowerBI Component. This button will allow you to edit and save the report. Being in *Edit* mode gives you full control over the visualisations of the report. The only thing which is not possible, is the changing of the data source for the report.

![A screenshot that highlights where the edit button is located for PowerBI reports, if reporting is enabled.](<PowerBI Edit Button Location.png>)

![A screenshot that depicts the view a user will see if they edit a PowerBI report.](<PowerBI Edit View.png>)

## Saving an Edited Report

To save a report, press the *File* dropdown and then press *Save*. This will ensure that any changes made to the report are saved.
![A screenshot that depicts how to save an edited PowerBI report.](<PowerBI File Save.png>)

To save a copy of the report, press *Save as*. This will create a copy of the report as of the time of the save and store it in the current workspace under the inputted name

![A screenshot of the final confirmation box when saving a PowerBI report. The report will request a new name for the file before it is saved.](<PowerBI Edit Save.png>)

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