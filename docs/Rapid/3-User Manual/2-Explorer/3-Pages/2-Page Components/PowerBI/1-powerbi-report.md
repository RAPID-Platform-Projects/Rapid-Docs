# PowerBI Reports
Microsoft's PowerBI software is directly supported by Rapid Platform. PowerBI Reports enables you to quickly explore, visualise, and analyse the data contained in your Rapid site.

![A screenshot that reveals what a PowerBI report looks like when attached to a page in Rapid.](<PowerBI Report Example.png>)
> *Pictured:* an example PowerBI report from Rapid Standard's **Projects** module.

PowerBI Reports are attached to a page. Clicking on a a component of a report, such as an item in a table, or a section of a graph, will "drill down" into that section of data and reveal information specific to the element being examined.

![A screenshot that demonstrates how clicking on a particular element in a PowerBI Report will "drill down" into the data on the particular element that has been selected.](<PowerBI Drilled Down.png>)
> *Pictured:* The same report once the "Office Building Construction" project has been selected on the lower bar graph. Now all of the visuals change to reflect this single project. Clicking on the same section of bar graph again will return to the "all projects" view.

### Slicers

Note that PowerBI Reports also contain **Slicers** which allows the data to "zoom in" on particular information. These slicers appear as drop-down boxes in the upper-right corner of the report. 

For example, we can "slice" the report so that it only displays projects with a particular *RAG Status*, or all of the projects for a particular *Client*, or all of the projects that have a particular *Project Status*.

![A screenshot the demonstrates how to apply a Slicer to a PowerBI report. Slicers help "filter" data in a PowerBI report, so that only certain items and their data are visible in the report.](<PowerBI Slicers Example.png>)

Slicers can also be combined together. For example, you could choose to select "All the reports with a "Red" *RAG Status*, that have a *Project Status* of "In Progress".

## How to Enable Editing for a Report
All PowerBI Reports in Rapid are able to have editing "enabled". This provides users with the ability to make small improvements to a PowerBI report without leaving the Rapid site.

To enable editing:
1. Go to a Report using **Explorer**.
2. Switch to the **Designer** application using the Designer button in the upper-right corner of the site.
3. Under the **Design** tab, ensure you are viewing the correct page or tab where the Report is located. In this example, the Report is contained in a tab labelled "Report"
4. Hover your mouse over the *Report* component, and select the pencil icon to edit the component.

![A screenshot that describes how to edit the properties of a report component. In order to this, the user must navigate to the Design tab in Designer, and find the component. They can then press the pencil icon to edit a reporting component. The screenshot is annotated with a red box that highlights the boundaries of the report component. It is also annotated with a red circle that highlights where the edit button is located for a reporting component.](<PowerBI Enable Editing.png>)

5. In the Edit sidepanel that opens, change the **Enable Edit Mode** toggle to *Enabled*.
6. **Save** changes.
7. Return to **Explorer**. The next section explains how to edit a PowerBI report once editing is enabled.

![A screenshot that indicates how to enable editing mode on a PowerBI report. After the user has selected the edit icon from the previous steps, they must choose to set the "Enable Edit Mode" to "Enabled". The screenshot is annotated with a red box that indicates the location of the "Enable Edit Mode" field.](<PowerBI Enable Editing Sidebar.png>)

## Editing a PowerBI Report
If editing is enabled, there will be an **Edit** button in the top right of the PowerBI Component. This button will allow you to edit and save the report. Being in *Edit* mode gives you full control over the visualisations of the report. The only thing which is not possible, is the changing of the data source for the report.

![A screenshot that highlights where the edit button is located for PowerBI reports, if reporting is enabled.](<PowerBI Edit Button Location.png>)

![A screenshot that depicts the view a user will see if they edit a PowerBI report.](<PowerBI Edit View.png>)

## Saving an Edited Report

To save a report, press the *File* dropdown and then press *Save*. This will ensure that any changes made to the report are saved.
![A screenshot that depicts how to save an edited PowerBI report.](<PowerBI File Save.png>)

To save a copy of the report, press *Save as*. This will create a copy of the report as of the time of the save and store it in the current workspace under the inputted name

![A screenshot of the final confirmation box when saving a PowerBI report. The report will request a new name for the file before it is saved.](<PowerBI Edit Save.png>)