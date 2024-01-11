# Introduction to this guide

This guide discusses sending emails from RAPID Platform using SendGrid.

**Prerequisites:**

To take full advantage of this guide, we recommend, you should have completed the following:

1\) Created a SendGrid Account  
2\) Configured Sender, Inbound Parse, API Keys  
3\) Created an Integration between SendGrid and RAPID Platform site  
4\) Created a Dynamic Template

**We have two separate guidebooks which discuss the above:**

For points 1 to 3 - [SendGrid Setup Guide](https://docs.rapidplatform.com/books/sendgrid-setup-guide)  
For point 4 - [Dynamic Templates Guide](https://docs.rapidplatform.com/books/dynamic-templates-in-sendgrid)

**This guide will discuss the following cases:**

1\) Sending a static email from RAPID Workflow engine using SendGrid Template

- ***(Use case - Sending a Newsletter)***

2\) Sending an email from RAPID Workflow using Dynamic Template Substitution from Data Table values

- ***(Use case - Sending an acknowledgement email to a Lead who registered a query)***

3\) Sending a Static email from Explorer Menu option button using SendGrid

- ***(Use Case - Sending a generic rejection letter to candidates (on the fly) who do not qualify for the job)***

4\) Sending an email from Explorer Menu option using Substitution from Data Table values

- ***(Use Case - Sending a personalised email to successful candidates with date for next round of interview)***

5\) Configuring SendGrid options from a USER TASK in a RAPID Workflow.