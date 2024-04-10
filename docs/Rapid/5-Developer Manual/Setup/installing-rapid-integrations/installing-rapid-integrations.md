# Installing Rapid-Integrations

Rapid-Integrations powers Rapid Standard installations with dedicated functionality.
In order to install Rapid-Integrations follow these steps to add the application to your tenant and site:

1. With a user that has Admin privileges, open [This Consent Link](https://login.microsoftonline.com/common/adminConsent?client_id=fb8147ed-7455-4f88-8ee2-04225009475d)
2. Consent to the application, this will register the application in your tenant
3. Navigate to the [Entra Portal](https://portal.azure.com/)
4. Open the Microsoft Entra ID > Enterprise Applications blade
5. Find the Rapid-Integrations application and copy the Object ID. We will use this to add the registration to your site
    ![Entra Enterprise application panel](<Entra Enterprise application panel.png>)
6. Navigate to your Rapid site and open the Principals list
7. Add a new Principal and paste the Object ID into the Object ID column

After adding the Principal you should see their details updated after syncing the Object Id with your tenant (typically under 30 seconds). If the display name field does not populate the sync may not be completed.