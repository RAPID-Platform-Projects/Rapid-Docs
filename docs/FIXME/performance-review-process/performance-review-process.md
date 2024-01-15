# Performance Review Process

### Overview

The Rapid Core Human Resources module comes with a Performance Review process. This allows businesses to ensure that performance reviews are taking place on a consistent basis and that all the relevant information is collected and reported on (See HR Report Chapter for the details about the performance Reviews report).

### Triggers

The process is triggered in two ways:

1. **Automated Trigger:** On creation of the employee, if the “Trigger Performance Reviews” Boolean is true, the process will automatically be live for this employee.
2. **Manuel Trigger:** The second way to trigger the process is by creating a “Performance Review” item. 
    1. On the explorer side bar click **Human Resources** &gt; ****Performance Reviews**** [![image-1702529692518.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/scaled-1680-/LgtLB5BxTcOUQSW4-image-1702529692518.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/LgtLB5BxTcOUQSW4-image-1702529692518.png)
    2. Click ****New Performance Review**** [![image-1702529707258.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/scaled-1680-/JLZrnrtvqiXl7Llb-image-1702529707258.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/JLZrnrtvqiXl7Llb-image-1702529707258.png)
    3. Fill in the following required fields: **Employee**, **Manager**, **Review Date**, **Recurrence Rate** and click **Create**.  
        [![image-1702529747782.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/scaled-1680-/rQrjNpicLeC2ijlY-image-1702529747782.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-12/rQrjNpicLeC2ijlY-image-1702529747782.png)

Once triggered, the performance review process follows these stages:

**Note:** All stages of this process can be customized to align with your specific business needs. Whether you want to modify email content sent to employees or adjust the questions on the form, Rapid offers flexibility. Please reach out to a Rapid Consultant for assistance.

1. **Manager Meeting Confirmation:** A task will be set for the manager to confirm the meeting time based on the specified “Review Date”. The manager has the option to change the meeting date or cancel the performance review upon completion of this task.
2. **Employee Pre-Review Form:** Following the manager's confirmation, the employee receives an email requesting them to complete a "Pre-Review Form." Completion of all fields on this form is mandatory.
3. **Manager's Assessment:** Subsequently, the manager is tasked with answering the same set of questions, evaluating the employee's performance. The form displays the employee's responses to the manager, but the employee fields are disabled.
4. **Report Generation:** Once the manager completes their assessment, a report containing both manager and employee responses is generated and sent to the manager for reference during the performance review meeting.
5. **Performance Review Meeting:** Following the report generation, the manager is assigned a task to conduct the performance review meeting with the employee.
6. **Recurrence:** Finally, if the "Recurrence Rate" is set to "Does not recur," the process concludes. However, if any other cadence (e.g., "Every three months," "Every six months") is selected, the system will automatically create another performance review item with the review date set at the specified time interval from the previous review, thus initiating the entire process anew.