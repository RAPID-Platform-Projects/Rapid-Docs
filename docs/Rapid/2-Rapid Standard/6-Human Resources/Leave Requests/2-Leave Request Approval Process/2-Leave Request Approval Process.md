# Leave Request Approval Process

### Overview

As a part of Rapid Standard, you get access to the leave request approval process. This process automatically assigns tasks to the direct manager of the requester for approval and then sends correspondence as to the outcome of the decision along with comments from the manager. In addition to this, for approved leave requests the manager will receive reminder emails a week before the employees leave.

### Triggers

The process is triggered in two ways:

1. **Public Form Trigger:** Through the creation of a leave request via the public form (See [Creating, Editing, and Deleting Leave](../1-creating-editing-and-deleting-leave-requests/1-creating-editing-and-deleting-leave-requests.md) requests for more details)
2. **Rapid Explorer Triggers:** Through the creation of the leave request through Rapid Explorer (See [Creating, Editing, and Deleting Leave](../1-creating-editing-and-deleting-leave-requests/1-creating-editing-and-deleting-leave-requests.md) requests for more details)

### Process Summary

Once Triggered the leave requests process follows the following stages:

1. **Approve/Reject Leave Request:** The direct manager of the employee will receive a task to Approve or Reject the Leave request. The direct manager can leave comments which will get sent to the employee in the correspondence stage. By default, receiving reminders is enabled. If the manager does not wish to receive a reminder they can change the receive reminders Boolean to false.
2. **Send Employee Leave Approved / Unapproved Email:** Following the managers assessment, an email will be sent to the employee stating the managers decision on the leave (Approved or Unapproved) along with the other details of the leave request (Start Date, Finish Date, and Manager Comments). If the leave request was unapproved the process ends following this communication
3. **(If Leave Request is Approved) Manager Reminder**: If the leave request is approved, 7 days before the leave request start date the manager will receive a reminder email, stating the details of the leave request.