# Creating a SendGrid integration

Rapid natively supports SendGrid for bulk email sending in both the [Workflow engine](/docs/Rapid/3-Keyper%20Manual/3-Workflow/3-Execution/5-Activities/service-task/email-service-task/email-service-task.md) and via [menu action buttons](/docs/Rapid/3-Keyper%20Manual/2-Designer/3-Menus/Menu%20Actions/sendgrid-email/sendgrid-email.md). To use these features your site will need a SendGrid integration item that stores a link to the credentials needed to access their service.

## Connecting SendGrid to your site

1) Navigate to Designer
2) Using the side menu, navigate to Maintenance -> Integrations

![Designer menu integrations location](<Integration menu location in Designer.png>)

3) Give your new integration item a name using title. A name that helps you identify which service and account is typically most practical
4) Select the SendGrid service
5) If you plan to use the Inbound Parse system in SendGrid, fill in your email domain that will be receiving emails (everything after the @ symbol). This is used in Workflow to detect received emails to progress a diagram.
6) Finally, enter your API key from SendGrid. This will not be saved against your site and instead stored in a secure Azure Key Vault.

![Populated integration form following the steps above](<Populated integration form.png>)

Registering your new integration will create a Rapid Integrations item in your site. This item stores a unique reference to the stored Key Vault key in it's GUID column. This allows the system to reference your key without needing to directly store it.

You can now select the Rapid Integrations item in Menus and Workflow to start using your new integration.

![Email send task in workflow showing the new integration being picked](<Using the integration in Workflow.png>)