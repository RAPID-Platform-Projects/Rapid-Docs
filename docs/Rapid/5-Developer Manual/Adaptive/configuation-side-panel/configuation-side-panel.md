# Configuration Side Panel

When configuring your component's side panel, It must have a consistent style and layout so the users who come to configure your component don't need to relearn where everything is. It also means that the configuration will be predictable, freeing up your users to focus on building their form without the need to spend more effort configuring.

Let's have a look at what that means in action, We provide many components by default, and these components are used to help you create a nice and consistent Configuration panel for your component. The first step to creating your components' schema, (which also holds your schema for the configuration panel of your component) is to have a memorial name which matches what your component is called.

<p class="callout info">Example Naming and File structure Read More</p>


>text-input-control/ ├─ text-input.tsx ├─ text-input.scsss ├─ text-input-control.ts
      readonly="readonly" spellcheck="false"
      
      tabindex="0" wrap="off"
```
  text-input-control/
  ├─ text-input.tsx
  ├─ text-input.scss
  ├─ text-input-control.ts
```

### Control Schema Structure

When you have created the (your file name)-control.ts file, you'll need to follow a specific JSON structure that is enforced due to the architecture of the Adaptive Renderer. While the initial configuration of the schema is rigid, inside some keys we allow customisation to your liking. For the moment, we will just focus on explaining all the keys available to you and how you should order them.

<p class="callout info">Example JSON structure of your components (your file name)-control.ts file</p>

```JSON
  import { Framework } from '@rapid/adaptive-framework';

  const textInputControl: Framework.TControl = {
    title: 'Title that will show inside the designer',
    description: 'What your component does',
    category: 'Where you want to group this component',
    icon: 'Fontawesome icon',
    exposedState: {}, //Optional
    defaultAttributes: {}, //Optional
    configurationSchema: {}, //Optional
    Component: () => import('./text-input'),
  };

  export default textInputControl;
```

##### Title

The title should tell your user in as few words as possible what your component is, for example a single line of text control would have a title of `title: 'Single Line of Text'`. The title shows up in various places throughout the Adaptive Designer, but the main place of which your users will see the title, is when selecting it from the component selector. You must make sure the name you've given your control, doesn't match up with an already existing name, As there is currently no name collision check.

##### Description

The Description field is second class to the title field, but still very much important, this should provide more detail to your component, rather than just repeating the title section. The description will also show up in the component selector. While it's not as essential for the description field to be unique, It is recommended as it provides more value to the user, likewise, the description doesn't need to be long paragraphs detailing everything about your component, it just needs to provide more descriptive test in case the title isn't clear enough. An example of this, following the text input example, would be `description: 'Allow user input in the form of a non-multiline text input following no required format'`.

##### Category

Defining a category for your component allows you to group similar components together, It also helps users narrow down their search by the defined categories, giving them a subset of components to look through rather than all at once. An example of this for the text input example is `category: 'Input Controls'`.

##### Icon

We use font-awesome for the icons available in the Adaptive Designer, as such you can use this field to define what icon will show alongside your title in the component selector. This provides a way for users to quickly identity your component by an icon, which allows for faster recognition than reading text.

[https://fontawesome.com/v5/search](https://fontawesome.com/v5/search)

##### Exposed State

The exposed state, is an object containing key value pairs, theses define any state inside your component, that can be used or listened to by other components inside the Adaptive Designer. The key defines the name of the state that you will be exporting, whereas the value, accepts only predefined values, its type and values are as follows:

```Nginx
  TStateType = 'string' | 'number' | 'boolean' | 'date' | 'array';
```

An example of this, using our text input component, will look like this `exposedState: {inputValue: 'string'};`

##### Default Attributes

The default attributes also consist of key value pairs, but unlike exposed state, the key values can be defined however you want, consisting of any type you also want (I.E Arrays, functions or objects). The default attributes are attributes that the component itself doesn't change, but instead only consumes. This is because the values, inside of default attributes, are changed by the configuration panel you have defined (Which we will discuss further down the page). When the user makes an edit in the configuration panel, the component which is handling all the change, will update its value inside the default attributes, which will then cause a re-rendering of your component providing new props with the updated default attributes.

For example, using the text input control, the default attributes would look something like this:

```YAML
defaultAttributes: {
	isRequired: false,
  	isHidden: false,
}
```

<div id="bkmrk-these-values-can-be-">These values can be changed by the user in the configuration panel, but shouldn't be changed directly by the text input component itself.</div>##### Component

This key, is simply just a function that returns an import statement to your component itself, the reason for the function, is so that we can dynamically load in your component when it's needed, improving performance.

##### Configuration Config

The configuration config, is where you will be designing what the config panel for your component consists of and looks like. This is also where you can add controls which edit the default attributes key in the overall schema.

Each Configuration config must have a root JSON schema followed by three children panels, the configuration schema provides proper padding, while the panels provide tabs which the user can switch to. There for each configuration config should at minim in, look like the following.

```js
{ $type: 'Panel', id: 'root-panel', attributes: { id: 'root-panel', type: 'panel', title: 'Root Panel', }, $children: [{ $type: 'Layout.Section', id: 'attributes-panel', title: 'Attributes', $children: [], }, { $type: 'Layout.Section', id: 'conditions-section', title: 'Conditions', $children: [{ $type: 'Adaptive.Conditions', id: 'conditions', },], },] }
```

When you're adding your configuration components, They must be contained inside a collapsible section. Which turns the above schema into:

```js
{
  $type: 'Panel',
  id: 'root-panel',
  attributes: {
    id: 'root-panel',
    type: 'panel',
    title: 'Root Panel',
  },
  $children: [
    {
      $type: 'Layout.Section',
      id: 'attributes-panel',
      title: 'Attributes',
      $children: [
      	{
          $type: 'Collapsible.Section',
          id: v4(),
          attributes: {
            iconName: 'fa-sliders-v-square',
            title: "Title goes here",
          },
          $children: [],
        };
      ],
    },
    {
      $type: 'Layout.Section',
      id: 'conditions-section',
      title: 'Conditions',
      $children: [
        {
          $type: 'Adaptive.Conditions',
          id: 'conditions',
        },
      ],
    },
  ],
}
```

##### Ordering Your Configuration Controls

The following order, should be the default order of all configuration panels.

1. Boolean Fields
2. Number Fields
3. Text Fields
4. Dropdown Fields
5. Lookup Fields
6. MultiLookup Fields