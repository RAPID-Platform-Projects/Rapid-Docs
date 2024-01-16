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
//... SDK Template index.tsximport App from './app';const root = ReactDOM.createRoot(document.getElementById("root")!);root.render(    <RapidApplication        subRoutes={[            {                id: 'base',                element: <App />,                path: '',            }        ]}    />);
```

To begin with, `app.tsx` is just an empty component.

```JavaScript
import React from 'react';export default function App() {	return <div></div>;}
```

#### Styling

Styling will not be the focus of this tutorial, but it will help display our list and items in a legible way.

Create `app.css` pasting in the below styles:

```CSS
.app {    display: grid;    grid-template-columns: 30% 1fr;    grid-template-rows: 1fr;    grid-template-areas: "sidebar list-item";    justify-items: stretch;    align-items: stretch;    height: 100%;}.sidebar {    grid-area: sidebar;    border: 1px solid gray;    display: flex;    flex-direction: column;    justify-content: stretch;}.select-data-source {    padding: 1rem;}.data-table {    display: flex;    flex-direction: column;    padding: 1rem;}.item {    padding: 0.3rem;    display: flex;    align-items: center;}.status {    margin-left: auto;    font-size: 0.8rem;    color: gray;}.item-page {    grid-area: list-item;    padding: 1rem;}.item-page-header {    display: flex;    align-items: center;}.item-page-header h2 {    margin-right: auto;}label {    display: flex;    flex-direction: column;}
```

Then, import it into `app.tsx` making sure to add the `"app"` `className` to the root div.

```JavaScript
import React from 'react';import "./app.css";export default function App() {	return <div className="app" ></div>;}
```