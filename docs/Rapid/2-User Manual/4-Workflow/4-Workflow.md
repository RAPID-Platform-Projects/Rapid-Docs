# Workflow

The **Workflow** application is one of the [Five Pillars of Rapid](</docs/Rapid/1-Getting Started/2-the-five-pillars/2-the-five-pillars.md>). **Workflow** allows confident key persons (Keypers) to create [BPMN 2.0](https://www.bpmn.org/)-compliant diagrams of company processes, and then to automate those diagrams using a combination of code and flowchart logic.

![A screenshot that demonstrates an example diagram from Workflow. The screenshot depicts a complex diagram that beings on the left, and moves to the right. The start and end points are circles. Between the circles are square tasks that are labelled, and a diamond-shaped logic gate. Arrows point between the components to demonstrate the flow of logic. Part of the diagram is coloured green, to show the path that the flowchart and logic has taken to conclude the process.](<Workflow Example Demo.png>)

These diagrams are also called **Processes** once they begin running, and their code executes. **Rapid Standard** includes several complex **Processes** that can do the following:

1. Automatically copy and convert an item (e.g. a *quote*) to another type of item (e.g. an *invoice*).
2. Schedule tasks and assign those tasks to a User that is selected in a User lookup field.
3. Create a flow of tasks that waits for a response from users before automating the next task. This can create automating processes such as onboarding, probation reviews, work performance reviews, etc.
4. Generate emails using dynamic data (changing what the email says, depending on the data in an item)
5. Generate documents and PDFs using data from the Rapid site

If you have received a task created by the **Rapid System**, this is because a **Workflow Process** has been triggered, and this has created a user task for you to complete.

:::info[Caution]
**Workflow** is a complex application is only suitable for Keypers, System Administrators, users who have received permission to create automated systems for their organisations.

This is because, by its nature, **Workflow** is designed to run behind-the-scenes: updating data, creating tasks and items, and sometimes even deleting data. As a result, it can cause data loss or corruption if not handled properly.

You can learn about [how to use **Workflow** via the **Keyper Manual**](</docs/Rapid/3-Keyper Manual/3-Workflow/1-overview/1-overview.md>).
:::