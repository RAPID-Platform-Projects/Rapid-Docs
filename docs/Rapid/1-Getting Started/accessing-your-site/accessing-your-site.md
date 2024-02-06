# Accessing your RAPID Site

## Accessing your RAPID Site



To access your site there are three main requirements:  

1. Environment  
2. Tenant Name  
3. Site Name  

![URL Breakdown](<URL breakdown.png>)


### Environment
  
In order to create a site it must be connected to the database, this is the backbone of nearly all solutions that require data input and manipulation. The Rapid Platform uses SQL databases to achieve this.
A simple way of knowing what database the site will be configured to is to inspect the URL.

https://app.rapidplatform.com.au - Production  
https://test.rapidplatform.com.au - Development  

### Tenant Name

The Tenant Name specifies which tenant the site will belong to. A tenant is required before a site is created.  

A Tenant needs to have:  
1. Users
2. Office 365 Licenses

The tenant needs to be configured correctly through Office365 before continuing.

### Site Name

The site name is a specific name which reflects and supports the idea or business plan behind the project. It should be carefully considered because the site name can **NOT** be changed once set.

Once the database, tenant and site name have been decided the URI is now complete and you can now navigate to the site. Once you navigate to the site the main dashboard will be displayed.
