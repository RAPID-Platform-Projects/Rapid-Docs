# Setup

#### Prerequisites

To complete this guide, you will need:

- RAPID SDK Template app installed and set up. [Template App | RAPID Platform Documentation](https://docs.rapidplatform.com/books/sdk/chapter/template-app).
- A general understanding of RAPID API concepts. [API Concepts | RAPID Platform Documentation](https://docs.rapidplatform.com/books/rapid-api/page/api-concepts)
- Knowledge of Items in Explorer [Items | RAPID Platform Documentation](https://docs.rapidplatform.com/books/explorer/chapter/items), specifically: 
    - [Data Tables | RAPID Platform Documentation](https://docs.rapidplatform.com/books/explorer/page/data-tables)
    - [Item Page | RAPID Platform Documentation](https://docs.rapidplatform.com/books/explorer/page/item-page)
- An understanding of the state management tool [Valtio | RAPID Platform Documentation](https://docs.rapidplatform.com/books/sdk/chapter/valtio)

### Set up

Having installed and set up the SDK Template, we add a base route pointing towards an `<App />` component.

```JavaScript
//... SDK Template index.tsx<br></br><br></br>import App from './app';<br></br><br></br>const root = ReactDOM.createRoot(document.getElementById("root")!);<br></br><br></br>root.render(<br></br>    <RapidApplication<br></br>        subRoutes={[<br></br>            {<br></br>                id: 'base',<br></br>                element: <App />,<br></br>                path: '',<br></br>            }<br></br>        ]}<br></br>    /><br></br>);<br></br>
```

To begin with, `app.tsx` is just an empty component.

```JavaScript
import React from 'react';<br></br><br></br>export default function App() {<br></br>	return <div></div>;<br></br>}
```

#### Styling

Styling will not be the focus of this tutorial, but it will help display our list and items in a legible way.

Create `app.css` pasting in the below styles:

```CSS
.app {<br></br>    display: grid;<br></br>    grid-template-columns: 30% 1fr;<br></br>    grid-template-rows: 1fr;<br></br>    grid-template-areas: "sidebar list-item";<br></br>    justify-items: stretch;<br></br>    align-items: stretch;<br></br>    height: 100%;<br></br>}<br></br><br></br>.sidebar {<br></br>    grid-area: sidebar;<br></br><br></br>    border: 1px solid gray;<br></br><br></br>    display: flex;<br></br>    flex-direction: column;<br></br>    justify-content: stretch;<br></br>}<br></br><br></br>.select-data-source {<br></br>    padding: 1rem;<br></br>}<br></br><br></br>.data-table {<br></br>    display: flex;<br></br>    flex-direction: column;<br></br>    padding: 1rem;<br></br>}<br></br><br></br>.item {<br></br>    padding: 0.3rem;<br></br>    display: flex;<br></br>    align-items: center;<br></br>}<br></br><br></br>.status {<br></br>    margin-left: auto;<br></br>    font-size: 0.8rem;<br></br>    color: gray;<br></br>}<br></br><br></br>.item-page {<br></br>    grid-area: list-item;<br></br><br></br>    padding: 1rem;<br></br>}<br></br><br></br>.item-page-header {<br></br>    display: flex;<br></br>    align-items: center;<br></br>}<br></br><br></br>.item-page-header h2 {<br></br>    margin-right: auto;<br></br>}<br></br><br></br>label {<br></br>    display: flex;<br></br>    flex-direction: column;<br></br>}<br></br>
```

Then, import it into `app.tsx` making sure to add the `"app"` `className` to the root div.

```JavaScript
import React from 'react';<br></br>import "./app.css";<br></br><br></br>export default function App() {<br></br>	return <div className="app" ></div>;<br></br>}
```