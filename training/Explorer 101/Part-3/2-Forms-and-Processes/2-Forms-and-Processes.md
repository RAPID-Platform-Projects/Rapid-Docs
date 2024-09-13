# Forms and Processes

<iframe width="560" height="315" src="https://www.youtube.com/embed/T8iFlrw80ig?si=oPFTQaDFaEROzLYC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Let's take a closer look at how a form can be embedded in a task item. In *Rapid Business*, the **Assets** module allows us to track our company's assets and create **Service Logs** for these assets.

When a **Service Log** is created, that Rapid system creates a task to remind the user to fill out the service log a week before the service is due. When this task is automatically created by Rapid, it will contain an embedded form as seen below:

![A full page example of the Service Log task that is created in Rapid standard. The screenshot is annotated with a red box to highlight the location of the embedded form.](<task all.png>)

If we zoom in to look at the form, we can see that it is a simple web form that allows us to edit the details of the service item directly (without having to find the specific **Service Log**, because it is already linked to the task for us).

Note that the embedded form contains a "go to" button, which is indicated with a red box. This button will take you directly to the item page of the Service Log. However, we can edit all the relevant fields here in this form, and save the task to commit our changes to the Service Log item.

![An embedded form. This is simply a zoomed-in image taken from the previous screenshot. The title reads: "Form Details". It contains a subtitle that reads "Service Logs Details" and a "goto" button on the right. There "Asset Name" is a field that cannot be edited, because it is a greyed-out subquery. Below this field are the "Service Date", "Service Details" and "Next Service Date" fields which can be edited.](<task embedded.png>)

## Workflow Processes

You might be wondering how this automatic task was generated. You may recall at the start of this series we mentioned there are two other experiences: Designer and Workflow.

Using Workflow, we can design automated jobs, such as creating tasks for users. When an automated task is performed, it is called a **process run**.

If we click on the link icon in the upper-right of an item's page, we can see any tasks, items, or **process runs** that are linked to the current item we are viewing.

![A screenshot of the linked items submenu. The screenshot is annotated with a red box to highlight the location of the linked items button, and then process run that was used to create the task, titled: "Assets - Manage a Service (on Creation)"](<task linked items.png>)

If we click the "go to" button next to "Assets - Manage a Service", we can see the Workflow diagram that created this task.

![A screenshot of the workflow diagram that created the Assets - Manage a Service task. The elements and what they do are explained in detail below.](<workflow diagram.png>)

While it is beyond the scope of this training course to go through how workflow operates (we will examine it more closely in a future training course), it is worthwhile understanding that all the process runs Rapid creates can be understood and examined.

Looking at the example above, we read the diagram from left-to-right. Elements that are **Green** have been completed successfully. **Yellow** elements are currently in progress. **Red** elements have failed. **White** elements have not been run.

### Understanding the Workflow Diagram

1. So, we can see that a "Service Log Created" was triggered (because it is green).

    ![An element that is coloured green. It is a circle with a triangle inside it - a signal start event. Underneath it is the title "Service Log Created". An arrow protrudes out of the element and goes off-screen to the right.](<workflow start.png>)

2. Then, we have a timer that waited until "1 week before the service date". 

    ![An element that is coloured green. It is several concentric circles, with a clock in the centre. Underneath it is the title "1 Week Before Service Date". The arrow from the previous element is pointing to this element, and a new arrow points from this element off-screen to the right. This chain or flow of arrows continues for all the following images.](<workflow timer.png>)

3. Now, a task has been created for a user (because it has a person in the upper-left corner). This is the task that currently exists in our tasks list.

    ![An element that is coloured yellow. It is a rounded rectangle and has an icon of a man in the upper left of the rectangle. The text inside the rectangle reads: "Service or Arrange Service for Asset".](<workflow task 1.png>)
 
4. We can see after we complete the current Asset Service Log task, a new service log will be created (and thus the workflow will trigger again, and wait a week before the service to remind us). This item is white, and so it has not been triggered yet. It is waiting for the previous task to be completed.

    ![An element that is white. It is a rounded rectangle and has an icon of two cogs in the upper left corner. The text inside the rectangle reads: "Create Next Service Log".](<workflow task 2.png>)

5. Then, the workflow will terminate and end.

    ![An element that is coloured white. It is a circle with a thick outline. Unlike the previous images, there is no arrow leading away from this element. Instead, this is where the diagram terminates.](<workflow end.png>)

There are other elements on the workflow diagram, but for now it is enough for us to understand that this Workflow creates tasks and items in our site for us.

## Further Reading

- If you are interesting in learning more about workflow, you can visit our [User Manual](</docs/Rapid/User%20Manual/Workflow/>) to read a brief introduction on Workflow, and then be directed to other manuals where you can learn about the elements how how to create your own workflows.