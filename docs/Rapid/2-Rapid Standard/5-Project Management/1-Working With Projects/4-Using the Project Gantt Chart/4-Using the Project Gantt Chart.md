# Using the Project Gantt Chart

A Project's **Gantt Chart** is a useful visual for Project Management to visualise the steps required to complete the project and where in that sequence of events the project is currently at. Moreover, the tasks that the Gantt chart is comprised of can be edited directly from the visual. For example, the *Start Date* and *Finish Date* of each task can be adjusted by simply dragging the length of the item.

## Accessing a Project's Gantt Chart

1. Navigate to **Projects** &gt; **Projects**  

![A screenshot showing how to navigate to the projects table](<Projects Sidebar Navigation.png>)

2. Open a Project. You can find a specific project by either scrolling through the list or using the search bar.  

![A screenshot showing how to find the desired project from the projects list](<Project Item Navigation.png>)

3. Click on the **Project Management** tab  

![A screenshot showing the location of the project management tab for the user to click on](<Project Management Tab.png>)

4. Click on the **Gantt** tab 

![A screenshot showing the location of the Gantt tab for the user to click on to display the Gantt Chart](<Gantt Tab Navigation.png>)

## Adjusting the Start and End dates of a Project's Tasks

1. Navigate to a Project's Gantt Chart by doing the following:
    - Navigate to **Projects** &gt; **Projects**.
    - Open a **Project** item. You can find this project by either scrolling through the list or using the search bar.  
    - Click on the **Project Management** tab  
    - Click on the **Gantt** tab  

:::info[Detailed Steps]
The above steps are discussed in more detail here: [Accessing a Project's Gantt Chart](<#accessing-a-projects-gantt-chart>)
:::

2. Identify the task where you wish to alter the *Start Date* or *End Date*

3. Click and drag the front of the task to edit the *Start Date* 

![A screenshot showing how to edit the start date of the task on the Gantt chart by clicking and dragging the left handle](<Gantt Edit Start Date.png>)

4. Click and drag the end of the task to edit the *End Date*

![A screenshot showing how to edit the end date of a task on the Gantt chart by clicking and dragging the right handle ](<Gantt Edit End Date.png>)

5. Click and drag the middle of the task to shift the both the *Start Date* and *End Date*

![A screenshot showing how to change both the start and end dates of a task on a gantt by clicking and dragging the whole task item left or right](<Gantt Edit Start End Date.png>)

6. Press **Save X Items**

![A screenshot showing the location of the Save button, to save all changes made to tasks on the Gantt](<Gantt Save X Items.png>)

## Creating Finish-to-Start Dependencies on a Project's Gantt Chart

A **Gantt Chart** dependency is a relationship between two or more tasks in a project that dictates the sequence in which they must be executed. Dependencies illustrate the order and timing of task completion, outlining the relationships that exist between different project activities. A Finish-to-Start dependency is the most common type, where the start of one task depends on the completion of another. Task B cannot begin until Task A finishes. Follow the steps below to create Finish-to-Start Dependencies:

1. Navigate to a Project's Gantt Chart by doing the following:
    - Navigate to **Projects** &gt; **Projects**.
    - Open a **Project** item. You can find this project by either scrolling through the list or using the search bar.  
    - Click on the **Project Management** tab  
    - Click on the **Gantt** tab  

:::info[Detailed Steps]
The above steps are discussed in more detail here: [Accessing a Project's Gantt Chart](<#accessing-a-projects-gantt-chart>)
:::

2. Identify the task you wish to create a dependency from (Task A) and the task to you wish to create a dependency to (Task B)

3. Hover your cursor over Task A, you will notice a white circle appear at the end of this task. Click and drag your cursor to the white circle at the start of Task B.  

![A screenshot showing the user how to connect a task to another in a Gantt chart with a Finish-to-Start Dependency](<Gantt Create Dependency.png>)

4. This results in the Task B start date shifted to the Task A End date. There is logic to accommodate non-work days.  

![A screenshot showing the result of adding a Finish-to-Start dependency and how the dates of the respective tasks have shifted](<Gantt Dependency.png>)

5. Press **Save X Items** 

![A screenshot showing the location of the Save button so that users can save the tasks that now have a a Finish-to-Start dependency](<Gantt Save X Items 2.png>)

:::note[Gantt Charts]
For further information on using Gantt Charts and creating other dependencies see the full Gantt documentation at: 
[Gantt Basics](</docs/Rapid/3-User Manual/2-Explorer/3-Pages/2-Page Components/Gantt/Gantt.md>)
:::

## Editing a Task from a Project's Gantt Chart

1. Navigate to a Project's Gantt Chart by doing the following:
    - Navigate to **Projects** &gt; **Projects**.
    - Open a **Project** item. You can find this project by either scrolling through the list or using the search bar.  
    - Click on the **Project Management** tab  
    - Click on the **Gantt** tab  

:::info[Detailed Steps]
The above steps are discussed in more detail here: [Accessing a Project's Gantt Chart](<#accessing-a-projects-gantt-chart>)
:::

2. Double-click on the task you want to edit  

![A screenshot showing how the user should double click on Gantt task to open the task item](<Gantt Task Open.png>)

3. Edit any relevant fields on the sub item page as needed.  

![A screenshot showing the details of the sub-item and fields that can be edited](<Gantt Task Edit.png>)

4. Once you have finished editing, click on **Save** or **Save and Close**

![A screenshot showing the location of the save button so that users can save any of the edits they made against the task](<Gantt Task Save.png>)