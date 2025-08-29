# Document Storage Configuration

If a new Table has been created, and *Sharepoint* document storage has not been enabled on the Table, the **File Browser** will prompt you to enable document storage.

When document storage is not enabled, the **File Browser** component's **Command Bar** will be greyed-out, and the main display area will have the following message:

![A screenshot of how the File Browser component will appear if document storage has not been established for a particular table. The component's command bar buttons are now grey. In the middle of the component is a question mark icon, inside a circle. The message to the user reads: "Document storage has not been configured for (name of table) items." Underneath the message is a button that reads "Open Designer". ](<Files Browser Not Configured.png>)

:::info[Caution]
Configuring file storage on a Table will cause *Sharepoint* to build a hierarchy of folders to accommodate any files uploaded to that Table's items. This can have the unintended consequence of creating clutter in the *Sharepoint* folder if not configured correctly.

Ensure you speak with your System Administrator before setting up Document Storage.
:::

- You can learn about [Configuring File Storage as a Keyper here](</docs/Rapid/3-Keyper Manual/2-Designer/2-Pages/3-Components/file-browser/file-browser.md>).