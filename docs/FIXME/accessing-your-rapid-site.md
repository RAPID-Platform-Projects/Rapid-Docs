# Accessing your RAPID Site

## Accessing your RAPID Site

To access your site there are three main requirements which are the following:  
1\. Environment  
2\. Tenant Name  
3\. Site Name

[![image-1660886375890.png](https://docs.rapidplatform.com/uploads/images/gallery/2022-08/scaled-1680-/BQkSd9uHKhZmuoqn-image-1660886375890.png)](https://docs.rapidplatform.com/uploads/images/gallery/2022-08/BQkSd9uHKhZmuoqn-image-1660886375890.png)

### Environment

  
In order to create a site it must be connected to the database, this is the backbone of nearly all solutions that require data input and manipulation. The RapidPlatform uses SQL databases to achieve this.  
A simple way of knowing what database the site will be configured to is to inspect the URL.

There are currently three databases currently in use   
\####Development Fully-Qualified Domain Name:  
1\. rapid-platform-dev.australiaeast.cloudapp.azure.com - Location (Australia East)  
2\. rapid-platform-dev.southeastasia.cloudapp.azure.com - Location (Singapore)  
\####Production Fully-Qualified Domain Name:  
1\. rapid-platform-prod.australiaeast.cloudapp.azure.com - Location (Australia East)

\*\*Note:\*\* There are redirects for the Australian sites. Instead of the domain name being defined as above the shortcut versions are the following:

\####Australian Domains (Shortened)  
https://dev.rapidplatform.com.au - Development  
https://app.rapidplatform.com.au - Production

### Tenant Name

  
The Tenant Name specifies which tenant the site will belong to. A tenant is required before a site is created.  
A Tenant needs to have:  
1\. Users attached to it  
2\. Office 365 Licenses

The tenant needs to be configured correctly through Office365 before continuing.

### Site Name

  
The site name is a specific name which reflects and supports the idea or business plan behind the project. It should be carefully considered because the site name can \*\*NOT\*\* be changed once set.

Once the database, tenant and site name have been decided the URI is now complete and you can now navigate to the site. Once you navigate to the site the main dashboard will be displayed.

If a space is required in the site name typing $%20$ in replace of the space will do the trick.

  
!\[image.png\](/.attachments/image-11ac0dbe-d516-456b-ad16-4fde8c1109d6.png)  
\*RAPID Platform Dashboard\*