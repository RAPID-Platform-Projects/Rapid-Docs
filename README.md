# Website

Welcome to the Rapid Platform documentation!
This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

This documentation site serves to cover the Core Rapid Platform User, Keyper & Developer documentation as well as the Base Rapid User documentation.
If you find any problems with the documentation, feel free to report an issue [Here](https://github.com/RAPID-Platform-Projects/Rapid-Docs/issues/new?assignees=MattFranklin-Rapid&labels=Report&projects=&template=bug-form.yml)

If you are looking to get started with Rapid yourself, please check out our [Main Site](https://rapidplatform.com)

## Installation

```
$ npm install
```

## Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

# Training

The training plugin allows us to present more directed tutorial like groups of documentation. 

## File strucutre

The training packs live in the `./training` folder in the root of the project. The packs displayed on the overview page reflect the structure of the folders and files inside `./training`;

```
/training/
    |--> /Using Explorer/
        |--> /overview.json
        |--> /thumbnail.png
        |--> /Part 1/
            |--> /Introduction.md
            |--> /Menus and Navigation.md
        |--> /Part 2/
            |--> /Items.md
            |--> /Handling Views.md
    |--> /Designing Public Forms/
        |--> /overview.json
        |--> /thumbnail.png
        |--> /Part 1/
            |--> /Introduction.md
```

In the above snippet you can see the general outline of the expected file strucutre.

### Overview JSON File

Inside each pack folder we expect an `overview.json` file. 

```typescript
interface IPackOverview {
  /* Fontawesome icon used as fallback if thumbnail unavailable e.g. 'fa-cheese' */
  icon?: string;
  /* Single line description shown on card and header of overview page */
  description?: string;
  /* Multiline overview shown on overview page. Add \n (new line characters) to get paragraph breaks */
  overview?: string;
  /* Estimated reading time in minutes. Shown on card */
  reading_time?: number;
}
```

### Thumbnail Image

An image named `thumbnail.png` can be placed in a pack folder next to `overview.json` it will be rendered as the image on the card and shown on the overview page in the header. 

These images are `base64` encoded so they need to be as small as possible. The images used on `rapidplatform.com` to show features are a good size to aim for.

### Sidebar

Currently we only support one level deep folders containing markdown files. These will be used to generate documentation pages and sidebars in the same way as the `docs` side of the site. 

### Embedded Videos

To embed videos we can add an `<iframe />` directly into the markdown file with it's `src` pointing towards a youtube video.

```html
<iframe allowfullscreen="allowfullscreen" frameborder="0" height="420" src="https://www.youtube.com/embed/Jt8bMFjSEd8?si=EuMNECVgOZA9bjSy" title="YouTube video player" width="750"></iframe>
```

## Feedback

This plugin is still a work in progress and we want you, the training pack authors, to have a had in shaping it moving forward. If you have any questions or suggestions please reach out to Alex or Matt F. 
