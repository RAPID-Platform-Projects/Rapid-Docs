# Generating a Bearer Token for custom applications

First you will need

- An app registration on your tenant.
- Once you have created the application, you will see it in the list of your apps. Open the application and head to the Certificates &amp; secrets section
- Create a new secret and copy paste it somewhere for later.
- Create a scopes uri for your client scopes by heading the the overview page and clicking on the Application ID URI option and clicking set.
- Finally add your scopes in the API permissions section and grant admin consent for them

### Adding the application to another tenant

- Go to this url [https://login.microsoftonline.com/\{tenant-id}/adminconsent?client\_id=\{client-id}](https://login.microsoftonline.com/%7Btenant-id%7D/adminconsent?client_id=%7Bclient-id%7D) replace tenant-id with the tenant id of the tenant you want to add the app too and replace client-id with YOUR application client-id.
- Grant admin consent with the admin user of the tenant you are trying to add the app to.

### Generate Auth on behalf of another application

**Example Request**

```
POST: https://login.microsoftonline.com/contoso.onmicrosoft.com/oauth2/token
    x-www-form-urlencoded
        client_id=0088c3ea-4dae-447d-bdaf-f8cff3cb7f68
        &client_secret=Coolsecret64
        &grant_type=client_credentials
        &resource=api://other apps Application URI

```

### Generate Auth

- To generate auth you are gonna need the client-id, the client-secret and the scope uri from the first step
- The url looks like this -&gt;  
```
POST 
https://login.microsoftonline.com/{tenant name}.onmicrosoft.com/oauth2/v2.0/token
```
- When making the request use the url above, the method for the request it a POST

**Example Request**

```
POST: https://login.microsoftonline.com/contoso.onmicrosoft.com/oauth2/v2.0/token
    x-www-form-urlencoded
        client_id=0088c3ea-4dae-447d-bdaf-f8cff3cb7f68
        &client_secret=Coolsecret64
        &grant_type=client_credentials
        &scope=api://0088c3ea-4dae-447d-bdaf-f8cff3cb7f68/.default

```

All the keys above are mandatory.

- The client\_id is the ID of your application.
- The client\_secret is the secret you generated
- The grant\_type is the type of token you are requesting, in this case we are wanting a application token
- The grant\_type for an application token is client\_credentials

This is based on the grant flow from Microsoft -&gt; [https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow)

The scope is the Application ID URI attaching the scopes to the requested token

- Adding the application user into RAPID;
- Go to the tenant you want to add the Application user to.
- Go to that tenants Enterprise Applications
- You will see the App you added in step 2
- Copy the OID from there and use that to create a principal in the principal list for that tenants RAPID