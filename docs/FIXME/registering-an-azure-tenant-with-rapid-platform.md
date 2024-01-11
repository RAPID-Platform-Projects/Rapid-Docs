# Registering an Azure tenant with Rapid Platform

The purpose of this page is to provide step by step instructions on how to onboard a new tenant to rapid.

This process is best completed in person. However, if done remotely it is best for the client to set up a temporary admin account to give the Rapid consultant. This account would be deleted as soon as the tenant is connected to rapid.

1. Use that account to sign into powerBi.com (this associates the tenant with a powerBi account needed for the rapid plugin to work)
2. Navigate to the partner portal logged in with a rapid or simpli login to add the test site plugin by navigating to: [https://partners.test.rapidplatform.com/tenants](https://partners.test.rapidplatform.com/tenants)
    1. Click New Tenant &gt; Grant Consent (This creates a consent link for a user from the client tenant)
    2. Login with a user with admin permissions from the tenant
    3. Accept the permissions
    4. If this gives an infinite load you may need to repeat these steps
3. Navigate to the prod partner portal and repeat step 2: [https://partners.rapidplatform.com/tenants](https://partners.rapidplatform.com/tenants)
4. Navigate to rapid site 
    1. Test: test.rapidplatform.com/"tenantName"/"siteName"
    2. Create a Admin group on azure, add a user
    3. Use the [admin portal](https://www.microsoft.com/en-au/microsoft-365/business/office-365-administration) to purchase a license for at least one user (business basic is the cheapest) this creates a SharePoint required for Rapid to work (this allows SharePoint to work)
    4. Double check a billing account is made