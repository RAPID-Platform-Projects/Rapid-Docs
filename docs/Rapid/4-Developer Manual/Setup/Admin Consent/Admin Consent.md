# Admin Consent
New Rapid sites by default have minimal consent. This limits Workflow to a one hour operating cycle, all automated file system behaviour and public forms disabled. To unlock the full power of the platform the application requires consent to access MS Graph resources without a User.

To unlock Admin Consent there are two main methods:
## Automatic
1)	In your site, navigate to the Designer experience using the bottom left buttons

![Navigating to Designer](A1-Open-Designer.png)
 
2)	Using the side menu, open Maintenance > Admin

![Navigating to admin page](A2-Open-Admin.png)
 
3)	Press the ‘Grant Admin Consent’ button in the command bar

![Press Grant Admin Consent button](A3-Open-Admin-Consent.png)
 
4)	Out of the two options, choose Automatic

![Select Automatic Mode](A4-Select-Automatic.png)
 
5)	Press the consent button to trigger the process

![Consent Button in modal](A5-Select-Consent.png)
 
6)	You should see a Microsoft login window, go through their flow and login. You will then be presented with the list of permissions. After reviewing them press Accept to continue

![List of permissions in Microsoft](A6-Review-Permissions.png)
 
7)	After accepting sometimes Microsoft will redirect the window to our blank signup screen instead of closing the popup. If it does, feel free to close the window.

![Blank signin screen](A7-Close-Window.png)
 
8)	After signing in, you should see the consent markers like this

![Consent marked as not working yet](A8-No-Consent.png)
 
9)	Pres Recheck to get the system to check with Microsoft that consent is complete. Microsoft can take up to 10 minutes before it filters through their system. In this example it took about 30 seconds, but your milage may vary.

![Consent ticked and working](A9-Yes-Consent.png)
 
Once you have both ticks, you are good to go!

## Manual Method
To enable Admin consent manually, login to the [Azure Portal](https://portal.azure.com) as an administrator

1)	Navigate to Entra ID and then open up Enterprise applications under the Manage header

![Navigate to Enterprise Apps](M1-Entra.png)
 
2)	Select Rapid Platform application. It will have an Application ID of cd5db0ec-1419-4ae6-9434-21cfb83fc42d

![Select Rapid App](M2-Select-Rapid.png)
 
3)	Under the Security heading select Permissions where you will see the Grant Admin Consent button. You will also see a list of requested permissions from the application. After reviewing the list, press the consent button to confirm consent.

![Consent Button Location](M3-Consent-Button.png)
 
4)	You should see the permissions (typically after an inline refresh) marked as consented by Admin consent like this. We have observed it can take up to 15 minutes (even longer than the automatic method) before this consent filters through the rest of the Microsoft infrastructure.

![Consented Permissions](M4-Consented-Permissions.png)
 
With consent granted you should now be done! 
