# Saving / Undoing Changes

You can make changes to the Gantt Chart.

Any change made to a task will affect other tasks as well, based on their dependency relationships.

For example, in the below image, the Task "Design/scoping" is changed. This led to a change in other tasks based on dependencies.

 ![5.png](./downloaded_image_1705285704779.png)

## Changes appear as bold

In the above image, observe that the tasks with changes appear bolder. Therefore, the "Discovery" task appear in normal (non-bold) font, whereas all the other tasks in the Chart appear as bold. A total of 8 items appear as bold in the Chart signifying that 8 items got modified.

### Save and Undo buttons appear

Observe that two new button appear in the command bar of the Gantt chart. These buttons provide you with Save and Undo options along with displaying the number of items being saved or reverted respectively.

![Save gantt.png](./downloaded_image_1705285705806.png)

**Save -** If you click the Save button then all the changes made to the chart will be committed sequentially.

**Undo -** If you click the Undo button then all the changes will be discarded and the chart will come back to its pre-modification state.

**Please note -** once you have pressed Save or Undo button, both the buttons will disappear. This becomes your new Chart State. Therefore, you cannot press "Control Z" to revert to previous state.

Please refer to the below GIF for illustration:

![Save](4hMR4nt772dzioTc-save-480p-230912.gif)