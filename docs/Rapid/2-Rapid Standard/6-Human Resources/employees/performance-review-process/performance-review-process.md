# Performance Review Process

### Overview

The Rapid Core Human Resources module comes with a Performance Review process. This allows businesses to ensure that performance reviews are consistently taking place and that all relevant information is collected and reported.

### Triggers

The process is triggered in two ways:

1. **Automated Trigger:** On creation of the employee, if the **Trigger Performance Reviews** boolean is set to "Yes", the process will be triggered automatically for this employee.
2. **Manual Trigger:** The second way to trigger the process is by creating a “Performance Review” item. 
    1. On the explorer side bar, click **Human Resources** > **Performance Reviews**

        ![A screenshot that shows how to navigate Performance Review using the sidebar](<Side bar navigate to performance review.png>)

    2. Click **New Performance Review** 

        ![A screenshot that depicts how to create a new performance review](<create new performance review button.png>)

    3. Fill in the following required fields: **Employee**, **Manager**, **Review Date**, **Recurrence Rate** and click **Create**.  

        ![A screenshot that shows the Performance Review create screen](<performance review create screen.png>)

Once triggered, the performance review process follows these stages:

:::[Note:] All stages of this process can be customised to align with your specific business needs. Whether you want to modify email content sent to employees, or adjust the questions on the form, Rapid offers flexibility. Please reach out to a Rapid Consultant for assistance.
:::

1. **Manager Meeting Confirmation:** A task will be sent for the manager to confirm the meeting time, based on the specified “Review Date”. The manager has the option to change the meeting date or cancel the performance review upon completion of this task.
2. **Employee Pre-Review Form:** Following the manager's confirmation, the employee receives an email requesting them to complete a "Pre-Review Form." Completion of all fields on this form is mandatory.
3. **Manager's Assessment:** Subsequently, the manager is tasked with answering the same set of questions, to evaluate the employee's performance. The form displays the employee's responses to the manager, but the employee fields are disabled.
4. **Report Generation:** Once the manager completes their assessment, a report containing both manager and employee responses is generated and sent to the manager for reference during the performance review meeting.
5. **Performance Review Meeting:** Following the report generation, the manager is assigned a task to conduct the performance review meeting with the employee.
6. **Recurrence:** Finally, if the "Recurrence Rate" is set to "Does not recur," the process concludes. However, if any other cadence (e.g. "Every three months," "Every six months", etc.) is selected, the system will automatically create another performance review item with the review date set at the specified time interval from the previous review, thus initiating the entire process anew.