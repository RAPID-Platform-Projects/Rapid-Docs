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

## How to Enable Editing for an Item-Level Report
All PowerBI Reports in Rapid are able to have editing "enabled". This provides users with the ability to make small improvements to a PowerBI report without leaving the Rapid site.

To enable editing:
1. Go to a Report using **Explorer**.
2. Switch to the **Designer** application using the Designer button in the upper-right corner of the site.
3. Under the **Design** tab, ensure you are viewing the correct page or tab where the Report is located. In this example, the Report is contained in a tab labelled "Report"
4. Hover your mouse over the *Report* component, and select the pencil icon to edit the component.

![A screenshot that describes how to edit the properties of a report component. In order to this, the user must navigate to the Design tab in Designer, and find the component. They can then press the pencil icon to edit a reporting component. The screenshot is annotated with a red box that highlights the boundaries of the report component. It is also annotated with a red circle that highlights where the edit button is located for a reporting component.](<PowerBI Enable Editing.png>)

## How to Upload or Replace an Item-Level Report
From the same editing panel in the previous section, the user can also upload an existing report from your site, or replace an existing report.

![A screenshot that depicts how to upload or replace and existing Item-Level Report using the editing sidebar of the reporting component. The screenshot is annotated with a red box that highlights where to upload or replace a report.](<PowerBI Uploading a Report.png>)

> Note that the user can choose to either "Select Existing Report" *or* "Upload a New Report". The user cannot do both.

1. When uploading an item-level report, ensure that **Filter Report At Item Level** is toggled to *Yes*.

2. The **Select Existing Report** option allows the user to choose a report that has been uploaded elsewhere to the site, and to also present that report inside this component as well. For example, a report could be uploaded on a separate page to collate item data; then, the same report could be uploaded at the item-level. Any edits made to a report will also affect the other locations where the report is uploaded.

3. The **Upload a New Report** option allows the user to click and upload a .pbix or .rdl file from Microsoft PowerBI. The user can also drag and drop the file from the OS onto the attachment box.

4. Ensure you press **Save**