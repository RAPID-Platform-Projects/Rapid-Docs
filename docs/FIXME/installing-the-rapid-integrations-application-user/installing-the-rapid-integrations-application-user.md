---
id: install-rapid-integrations-user
title: Installing the Rapid-Integrations Application User
---

The purpose of this documentation is to show how to install the Rapid-Integrations Application user.

1. Logged in as the new site's Azure admin, consent to this link: [Azure Admin Consent](https://login.microsoftonline.com/common/adminConsent?client_id=fb8147ed-7455-4f88-8ee2-04225009475d)

2. After consenting, open Azure and go to Azure Active Directory > Enterprise Applications. Copy the Object ID of the Rapid-Integrations Enterprise application.

   ![Rapid-Integrations Object ID](./downloaded_image_1705285789567.png)

3. Login to the Rapid site in SMSS. Create a new user on the principals table with the following values:
   - Name: "Rapid Integrations"
   - OID: \{Object ID copied in step 2\}
   - Type: "Application"
