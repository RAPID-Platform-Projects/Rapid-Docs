# Adjusting Start, End and Due Dates

The Gantt Chart in RAPID Platform is not just an excellent visualization tool, but an efficient management tool as well. Using the Gantt Chart interface you can easily modify tasks with reference to time.

## Dragging a task on timeline

A task can be easily dragged across timeline to change its Start Date and End Date (or Due Date).

![Dragging timeline](dragging-timeline.gif)

:::note[Please note:]
- Dragging a task (as shown above) will change both the Start Date and End Date, while keeping the duration of the task as constant.
- The duration respects weekends in calendar and therefore, the Start Date and End Date gets modified accordingly maintaining the duration in business days.
:::

## Extending Start Date / End Date on timeline

While dragging a task changes both Start Date and End Date while maintaining the duration; you can also change either Start Or End Date that will change the duration of the task.

Consider the following points:

1. As you hover your mouse pointer over the task, a strip of white dotted vertical lines will appear near the boundary of the bar.
2. Place your mouse pointer over the dotted lines and it will display an arrow.
3. Click and drag the arrow in desired direction to modify Start Date / End Date.
4. The duration of the task will update automatically.

![Drag Start End](drag-handles.gif)

## Important points to note

- The Start Date of Active Tasks cannot be modified. Similarly, the Start and End Dates of Completed Tasks cannot be modified. In essence, you cannot drag and change the events that have occurred in past on timeline. An Active Task's Start Date has already occurred in past, and therefore, you cannot modify the same. While the End Date for an Active Task has not yet arrived, hence you can modify the same. For a Completed Task, both Start Date and End Date have occurred in past, hence, cannot be modified.
- Only Tasks can be modified for Start Date and End Date by dragging the boundaries. Parents can only be dragged around on timeline keeping duration constant. Start Date / End Date of Parents cannot be modified by dragging boundaries.
- Dragging tasks, or modifying Start / End Dates do not change the dependencies established between tasks.