# Using the library

### Usage  


Templating engine exposes two main functions: `TemplateProxy` and `SecureTemplateProxy`. Both functions accept the same signature but there are a few important distinctions between both APIs

##### TemplateProxy

<p class="callout warning">**Warning!** This API uses the JavaScript [Function constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function#constructor) and is considered insecure! **Never** run untrusted code directly from a user in the template proxy without sanitization first.</p>

TemplateProxy is a JavaScript Proxy that will evaluate any string templates in any object passed to its constructor against any data. Templates are note evaluated until the property getter is invoked in the JavaScript proxy.

JavaScript templates are compiled using the function constructor and thus have access to the JavaScript global object.

##### SecureTemplateProxy

<p class="callout info">Currently only available on the server, SecureTemplateProxy is not available in the browser.</p>

SecureTemplateProxy is analogous to TemplateProxy except for one important distinction: The compiled function is evaluated inside a sandbox that does not have access to privileged members of the global object, and cannot escape the sandbox.

### Accessing the Source Code

Currently, the `@rapid/template-engine` library is hosted privately in the RAPID Platform repositories. If you have access, click [here](https://dev.azure.com/rapidplatform/RAPID%20Platform/_git/template-engine) to access the source code.

### Installation  


> **Note** A .npmrc file is required for access to this project.

```shell
yarn install @rapid/template-engine
```

### Examples

1\. Evaluating a simple template

```JavaScript
import { TemplateProxy } from '@rapid/template-engine';const data = {  user_name: 'Fred Smith';};const taskTemplate = {  title: 'A task for: <%= user_name %>',}const task = TemplateProxy(taskTemplate, data);console.log(task.title) // "A task for: Fred Smith"
```