# Adjusting Start, End and Due Dates

The Gantt Chart in RAPID Platform is not just an excellent visualization tool, but an efficient management tool as well. Using the Gantt Chart interface you can easily modify tasks with reference to time.

## Dragging a task on timeline

A task can be easily dragged across timeline to change its Start Date and End Date (or Due Date).

![Dragging timeline](dragging-timeline.gif)

**Please note:**

- Dragging a task (as shown above) will change both the Start Date and End Date, while keeping the duration of the task as constant.
- The duration respects weekends in calendar and therefore, the Start Date and End Date gets modified accordingly maintaining the duration in business days.

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

## Related articles

[How to change start date, duration and resource from left panel?](</docs/Rapid/3-User Manual/2-Explorer/3-Page Components/Gantt Component/altering-dates/altering-dates.md> "How to change start date, duration and resource from left panel?")

[How to Save and Undo changes made to the Gantt Chart?](</docs/Rapid/3-User Manual/2-Explorer/3-Page Components/Gantt Component/how-to-save-undo-changes-to-a-gantt-chart/how-to-save-undo-changes-to-a-gantt-chart.md> "How to Save / Undo changes to a Gantt Chart?")

[How to open Task Details page from Gantt Chart?](</docs/Rapid/3-User Manual/2-Explorer/3-Page Components/Gantt Component/how-to-open-task-item-profiles-from-gantt-chart/how-to-open-task-item-profiles-from-gantt-chart.md> "How to open task item profiles from Gantt Chart?")

[How to create and edit dependencies in a Gantt Chart?](</docs/Rapid/3-User Manual/2-Explorer/3-Page Components/Gantt Component/how-to-create-and-edit-dependencies-in-a-gantt-chart/how-to-create-and-edit-dependencies-in-a-gantt-chart.md> "How to create and edit dependencies in a Gantt Chart?")

[How to Auto-schedule tasks in Gantt Chart?](</docs/Rapid/3-User Manual/2-Explorer/3-Page Components/Gantt Component/how-to-auto-schedule-tasks-in-gantt-chart/how-to-auto-schedule-tasks-in-gantt-chart.md> "How to Auto-schedule tasks in Gantt Chart?")

[How to interact with Gantt Chart component in Explorer with data?](</docs/Rapid/3-User Manual/2-Explorer/3-Page Components/Gantt Component/1-how-to-interact-with-a-gantt-chart-in-explorer/1-how-to-interact-with-a-gantt-chart-in-explorer.md> "How to interact with a Gantt Chart?")