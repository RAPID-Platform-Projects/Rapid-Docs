# Sidebar

<p class="callout success">Watch the video tutorial [HERE](https://rapidplatform-my.sharepoint.com/:v:/g/personal/alex_litzow_rapidplatform_com_au/EYUkJPP-QwFIhmOKHRcFG9EBmznJSASSpxw77AtrJWJdIw?e=5EO1Yw)</p>

#### Prerequisites

To complete this guide, you will need to be setup with the RAPID SDK Template app. [Setup | RAPID Platform Documentation](https://docs.rapidplatform.com/books/sdk/page/setup)

### Getting List Items

Now that we are all set up, we can start by getting the tasks view items. We will do this in a new component, `sidebar.tsx`

```JavaScript
import React from 'react';<br></br><br></br>export default function Sidebar() {<br></br>	return <aside className="sidebar" ></aside>;<br></br>}
```

To get the view items, we use the SDK Hook `useViewItems`, which returns a tuple, `[snapshot, proxy]`. This is a common pattern with SDK hooks, as it enables us to use the snapshot to present the data and mutate the proxy to update the data.

`viewItemsSnap` provides the method `map`, which we can use to render a component for each of the items in the view.

```JavaScript
import { useViewItems } from '@rapid/sdk';<br></br>import { ListItemMixin } from '@rapid/sdk/lib/store/list-item';<br></br>import React from 'react';<br></br><br></br>export default function Sidebar() {<br></br>    const [viewSnap, viewProxy] = useViewItems('Tasks', 'All');<br></br><br></br>    return (<br></br>        <aside className='sidebar'><br></br>            <div className='data-table' ><br></br>                {viewSnap.map<ListItemMixin, React.ReactNode>(item => (<br></br>                    <Link className='item' key={item.id} to={`${item.id}`} ><br></br>                        {item.title} {item.status}<br></br>                    </Link><br></br>                ))}<br></br>            </div><br></br>        </aside><br></br>    )<br></br>}
```

Putting this on the page and refreshing, we see nothing. This is because we have not fetched the view items, so the SDK store is not aware of any items in `"All"` view for the Tasks list. We can add a `useEffect` that will get the view items on component mount.

```JavaScript
import { useViewItems } from '@rapid/sdk';<br></br>import { ListItemMixin } from '@rapid/sdk/lib/store/list-item';<br></br>import React, { useEffect } from 'react';<br></br><br></br>export default function Sidebar() {<br></br>    const [viewSnap, viewProxy] = useViewItems('Tasks', 'All');<br></br><br></br>    useEffect(function getViewItems() {<br></br>        viewProxy.get();<br></br>    }, []);<br></br><br></br>    return (<br></br>        <aside className='sidebar'><br></br>            <div className='data-table' ><br></br>                {viewSnap.map<ListItemMixin, React.ReactNode>(item => (<br></br>                    <Link className='item' key={item.id} to={`${item.id}`} ><br></br>                        {item.title} {item.status}<br></br>                    </Link><br></br>                ))}<br></br>            </div><br></br>        </aside><br></br>    )<br></br>}
```

### Changing Data Sources

Next, we want to allow users to select a view, instead of leaving them locked to the default `"All"` view. To do this we will use another SDK Hook, `useListDataSources` which provides us with a list of all data sources available for a specified list, in our case `"Tasks"`.

We can add a select element, mapping over the data sources to populate its options, and store the current view in a local `useState`.

```JavaScript
import { useListDataSources, useViewItems } from '@rapid/sdk';<br></br>import { ListItemMixin } from '@rapid/sdk/lib/store/list-item';<br></br>import React, { useEffect, useState } from 'react';<br></br>import { Link } from 'react-router-dom';<br></br><br></br>export default function Sidebar() {<br></br>    const [activeDataSource, setActiveDataSource] = useState('All');<br></br><br></br>    const onChangeDataSource = (e: React.ChangeEvent<HTMLSelectElement>) => {<br></br>        setActiveDataSource(e.target.value);<br></br>    }<br></br><br></br>    const [viewSnap, viewProxy] = useViewItems('Tasks', activeDataSource);<br></br><br></br>    const [datasources] = useListDataSources('Tasks');<br></br><br></br>    useEffect(function getViewItems() {<br></br>        viewProxy.get();<br></br>    }, [activeDataSource]);<br></br><br></br>    return (<br></br>        <aside className='sidebar'><br></br>            <div className='select-data-source'><br></br>                <label><br></br>                Select view:<br></br>                <select onChange={onChangeDataSource} ><br></br>                    {datasources.map(ds => (<br></br>                        <option value={ds.Title} key={ds.Title}>{ds.Title}</option><br></br>                    ))}<br></br>                </select><br></br>                </label><br></br>            </div><br></br>            <div className='data-table' ><br></br>                {viewSnap.map<ListItemMixin, React.ReactNode>(item => (<br></br>                    <Link className='item' key={item.id} to={`${item.id}`} ><br></br>                        {item.title} {item.status}<br></br>                    </Link><br></br>                ))}<br></br>            </div><br></br>        </aside><br></br>    )<br></br>}
```

Now when we change the data source, the `useEffect` will be triggered, getting the new view.

In the next section, we will add the Item profile page.