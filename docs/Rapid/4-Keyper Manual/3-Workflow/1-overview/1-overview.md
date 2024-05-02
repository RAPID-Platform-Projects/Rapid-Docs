# Workflow Overview

There are two faces to the Workflow coin:
1) A [BPMN 2.0](https://www.bpmn.org/)-compliant drawing tool to enable living documentation of your business
2) A process execution engine to help automate the drudgery of day-to-day activities

![A screenshot that demonstrates an example diagram from Workflow. The screenshot depicts a complex diagram that beings on the left, and moves to the right. The start and end points are circles. Between the circles are square tasks that are labelled, and a diamond-shaped logic gate. Arrows point between the components to demonstrate the flow of logic. Part of the diagram is coloured green, to show the path that the flowchart and logic has taken to conclude the process.](<Workflow Example Demo.png>)

The **Workflow** experience is one of the [Five Pillars of Rapid](</docs/Rapid/1-Getting Started/2-the-five-pillars/2-the-five-pillars.md>). With this experience, you can create flowchart diagrams of your organisation's processes that can then be automated using code.

These diagrams are also called **Processes** once they begin running, and their code executes. For example, **Processes** can do the following:

1. Automatically copy and convert an item (e.g. a *quote*) to another type of item (e.g. an *invoice*).
2. Schedule tasks and assign those tasks to a User that is selected in a User lookup field.
3. Create a flow of tasks that waits for a response from users before automating the next task. This can create automating processes such as onboarding, probation reviews, work performance reviews, etc.
4. Generate emails using dynamic data (changing what the email says, depending on the data in an item)
5. Generate documents and PDFs using data from the Rapid site

:::note[Keypers]
**Workflow** is a complex tool and is only suitable for Keypers, System Administrators, or users who have received permission to create automated systems for their organisations.

This is because, by its nature, **Workflow** is designed to run behind-the-scenes: updating data, creating tasks and items, and sometimes even deleting data. As a result, it can cause data loss or corruption if not handled properly.
:::

## Accessing Workflow

To access **Workflow**:

1. Press the **Workflow** button at the bottom of your Rapid site's [Sidebar](</docs/Rapid/3-User Manual/glossary/glossary.md#sidebar>). (The button's icon resembles a flowchart).

![A screenshot demonstrating the location of the "Workflow" button in the sidebar of a Rapid site. The "Workflow" button is in the centre of the site, and resembles three nodes of a flowchart. The screenshot is annotated with a red box to demonstrate the location of the button.](<Sidebar Designer Button.png>)

2. In the [Sidebar](</docs/Rapid/3-User Manual/glossary/glossary.md#sidebar>) menu, press the **All Diagrams** button.

This will open a Table titled "**Workflows**". Each item in this table is a unique **Process Diagram** or **Workflow**.

![A screenshot demonstrating the location and appearance of the "All Diagrams" button in the Workflow sidebar. The screenshot is annotated with a red box and red arrow to highlight the location of the button.](<Sidebar All Diagrams.png>)

3. Press the **New Process Diagram** button in the **Workflow** Table's [Command Bar](</docs/Rapid/3-User Manual/glossary/glossary.md#command-bar>).

![A screenshot demonstrating the location and appearance of the "New Process Diagram" in the Command Bar of the Workflows table. The screenshot is annotated with a red box to indicate the location of the button. The icon of the button resembles two square "nodes" of a flowchart, connected by a curved line.](<New Process Diagram.png>)

4. In the **New Process Diagram** side panel that opens, give your **Process Diagram** a descriptive name, and choose a folder to save the diagram in (if applicable).

![A screenshot demonstrating the appearance of the "New Process Diagram" side panel. The side panel has a dark blue banner with a title that reads "New Process Diagram." Underneath it is a Command Bar of buttons that includes: "Create", "Edit Diagram", "Upload Diagram", and "Create and Open". Underneath are two fields titled "Title" and "Folder".](<Diagram New.png>)

:::note[Uploading Diagrams]
You can also upload any diagrams that you have downloaded from another site at this step, using the **Upload Diagram** button at the top of the side bar.

![A screenshot demonstrating the appearance and location of the "Upload Diagram" button in the New Process Diagram side panel. The screenshot is annotated with a red box to highlight the button's location. The button has an icon of a cloud, with an arrow ascending into the cloud.](<Diagram Upload.png>)
:::

5. Press **Create** or **Create and Open**.

:::note[Opening Diagrams]
Your **Process Diagram** has now been added to the **Workflows** table. You can open the diagram just like a regular item, by navigating to the table as before, and then double-clicking on the desired workflow (or single-clicking its title field).
:::

## Developing a Diagram

The first step in creating a **Process** is drawing the process diagram. This initial step is often accompanied by a review of internal business processes. 

*(i.e. How does your organisation currently operate? Or, what are its current processes?)*

Then, these processes can be drawn into an organisational flowchart using Rapid's **Workflow** [BPMN 2.0](https://www.bpmn.org/)-compliant drawing tool. It is a good idea to "segment" your process diagrams. That means to break each diagram up into as small a section as necessary.

:::note[Example]
Let's say your company sells stationery, and you have been tasked with creating a diagram that creates two documents: one is a "daily summary of all sales", and the other is a summary of "leave requests for the day".

You should **avoid creating a single, complex diagram that achieves multiple goals**. Why? Having a process diagram that achieves multiple goals will become infinitely more complex: it will need to access more tables, more items, and the diagram itself will become more difficult to read and understand. Giving the diagram a title would become trickier. Additionally, it will become more difficult to "de-bug" or fix issues with the process if it is more complex.

Instead, two *separate processes* should be generated: this will make each diagram easier to read, easier to name (as they are only achieving one goal each), and easier to troubleshoot if problems arise.
:::

## Executing Workflows

There are several methods of executing Rapid **Workflows**, which are outlined here:
- [Executing Rapid Workflows](</docs/Rapid/4-Keyper Manual/3-Workflow/13-executing-workflows/13-executing-workflows.md>)