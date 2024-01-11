# FAQ

#### Why do I need to set up powerBI?

You need to set up powerBI in your Azure AD tenant because the Rapidplatform system uses premium powerBI workspaces for each site, meaning you don't need to have a subscription to powerBI. However, Rapidplatform asks for this permission upfront, which means to accept the permissions, you will need to have set up a free powerBI account tied to your Azure AD Admin user.

#### Can I use a different provider other than Azure?

No. Rapidplatform currently only supports custom apps with an App record inside the Azure AD Applications list.

#### What frameworks can I use with the SDK?

Rapidplatform SDK is built using ReactJS with the [MSAL Library](https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-overview) by Microsoft; You should use ReactJS to create your custom application, and we recommend using the [create react app](https://create-react-app.dev/) template developed by Facebook to get started.

#### Why do I need an Azure AD App registration?

'somthing here'