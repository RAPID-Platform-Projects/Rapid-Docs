# Tasks as a Standalone Experience

This is an alternative method of engaging with **Tasks**. 

### Benefits

Using the **Tasks Experience** has several benefits:

- The **Tasks Experience** user interface enables you to focus on tasks in isolation, rather than viewing the entirety of the Rapid site.
- This can provide further security, as some employees might only need to access their Tasks (as opposed to being able to access the entirety of a Rapid site). This functionality can, however, be implemented using [Permissions](</docs/Rapid/3-User Manual/2-Explorer/1-Tables/6-permissions/6-permissions.md>).
- **Tasks Experience** integrates closely with **Adaptive Designer**, allowing forms to be created for all Tasks, and specialised forms to be created for certain [Task Inheritances and Subtypes](</docs/Rapid/3-User Manual/glossary/glossary.md#inherit-tables>).

The need to design specific **Adaptive Documents** for items in the **Tasks Experience** means that this is a more advanced and complex solution. Thus, it may not be suitable for your company.

## Accessing the Tasks Experience

Your System Administrator may have provided you with a link to the **Tasks Experience**, or created a link to it as a Sidebar menu button. Alternatively, you can also visit the **Tasks Experience** by visiting the following URL in your web browser:

> `https://tasks.rapidplatform.com/_env/tenant/site`

 **Important:** You must replace `_env/tenant/site` with your Rapid `environment`, `tenant`, and `site`. To determine what your environment, tenant, and site are, refer to the table below, or read the [Accessing Your Site](</docs/Rapid/1-Getting Started/accessing-your-site/accessing-your-site.md>) article.

| Term | Explanation | Example |
|---|---|---|
| Environment | This determines whether you are accessing the `production` database of your site, or the `test` database.| This will usually be set to `/_prod/` in order to access the production database. However, if you wish to access the test database of your site via the **Tasks Experience**, you would replace this with `/_test/` |
| Tenant | This is the subdirectory that follows the top-level domain (`.com/`), in your site's URL. | If I examine the following URL from my site: `https://app.rapidplatform.com/rapidplatform/mysite/`, then `/rapidplatform/` is the tenant, because it follows `.com/`.|
| Site | This is the subdirectory that follows your site's tenant. | In the above example, `/mysite/` is the site's name, because it follows the tenant's subdirectory (`/rapidplatform/`) |

Ensure that no other subdirectories are included in the URL when navigating to the **Tasks Experience**.
For example, the following URL will cause an error, because of the addition of `/tasks%portal` at the end of the URL:
> `https://tasks.rapidplatform.com/_prod/rapidplatform/mysite/tasks%portal`

Instead, remove all additional subdirectories, and the **Tasks Experience** should load as expected:

> `https://tasks.rapidplatform.com/_prod/rapidplatform/mysite/`