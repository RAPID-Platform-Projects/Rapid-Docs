# Installation & Development

### Installation

[Watch the video tutorial](https://rapidplatform.sharepoint.com/:v:/s/projects/Ec7W_D-UN8BJukwGHoaderIBF4djCiiP8QGHJ0FgHiy2CA?e=em2uaj)

After downloading and extracting the SDK template, we need to install the dependencies.

```shell
yarn install
```

This will install the packages required to run the SDK.

<p class="callout info">The RAPID Platform internal packages are installed from `template/rapid_modules` where their tarballs are found. </p>

### Development

Once the dependencies have installed, we can start the development server:

```shell
yarn start
```

This will build the source using `esbuild` and serve the result to [localhost:9000](http://localhost:9000)

When navigating to [localhost:9000](http://localhost:9000) we should be met by the SDK login experience.

[![image-1687191896210.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-06/scaled-1680-/RPEJFn8zSpzExDuH-image-1687191896210.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-06/RPEJFn8zSpzExDuH-image-1687191896210.png)

Continue to the app by entering your environment, tenant, and site.  
  
After logging in through Microsoft, we will be placed on an empty page with the URL:

#### localhost:9000/\_environment/tenant/site

<p class="callout info">In future, manually adding these parameters to the URL will bypass the login page.  
</p>

The next step is setting up routing through the `<RapidApplication />` component.