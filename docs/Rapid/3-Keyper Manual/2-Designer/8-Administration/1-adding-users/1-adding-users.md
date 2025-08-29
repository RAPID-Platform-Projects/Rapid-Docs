# Adding Users

In Rapid, Users are managed on the Principals table. Within this article User will be used to denote the person behind an account, while Principal will refer to the stored record for that account.

Principal records are set up to mirror Microsoft Azure records. In order to access a site, a User will need to be both registered within your Microsoft tenant and have a Principal record in your site. Here we will cover manually adding a Principal to the site with the assumption that the Microsoft Principal has already been configured. For more information managing Microsoft Principals, see [their documentation](https://learn.microsoft.com/en-us/microsoft-365/enterprise/manage-microsoft-365-accounts?view=o365-worldwide).

## Manually adding a Principal that exists in Azure

### Principal Setup in Azure

In our example Stationary Inc have a new member Jenny Harrison. We have already set her up in our Microsoft tenant like so.

![Example user Jenny displayed in Azure Portal](<Jenny User in Microsoft.png>)

First lets open up the Principal record and check the 'User principal name' (UPN) and 'Object ID' (OID). We can use either of these values to add Jenny to the site.

![Details panel of Jennys Principal in the Azure Portal](<Jenny Azure Identity Details.png>)

### Creating a Principal in Rapid

To add Jenny to the site:

1) Navigate to the Principals table in your site. By default this can be found under the System -> Settings -> Users & Groups menu in Explorer.

![Explorer Menu for Users and Groups under Settings, under System](<Users and Groups Menu Location.png>)

2) Press the 'New Principal' button

![New Principal button location at top of Principals page](<New Principal button.png>)

3) Fill in the Principal details. Here we have a few options we can choose:
    - In this example we can fill in just the UPN and Principal Type. As we have already set up the majority of details for Jenny in Microsoft, Rapid can sync that data with the created Principal based on the UPN value saving us from needing to fill in the Name and Email fields.
    - Alternatively, we can fill in just the OID and Principal Type. The sync requires at least UPN or OID to identify which Principal is which.
    - Finally we could fill in every field. This suits a situation where we have not created a Microsoft Principal. If Rapid can sync the Principal it will overwrite values entered here.

![New Principal form filled in with UPN and Principal Type populated](<New Principal Page Filled In.png>)

:::note[An aside on Principal Types]
There are 5 types of Principal within Rapid

| Type | Description |
| ---  | ---         |
| User | A 'normal' User, typically a person that logs into the site |
| Role | A group of Principals based around their business role, can be as few one |
| Unified | A Microsoft group or Team |
| SecurityGroup | A Microsoft security group |
| Application | A 'robot' User, typically 3rd party integrations |
:::

4) Press Create to generate the Principal and attempt to sync them with Microsoft

After creation, if you open the Principal item you will note that the fields are disabled. Once Rapid is able to sync a Principal with Microsoft, they become the final source of truth and local edits are disabled.

![Jenny Harrison Principal record in Rapid with all fields disabled](<Synced Jenny Principal Record.png>)

Note in this example the Given, Last and Display names are set as well as the OID by syncing with Microsoft.

