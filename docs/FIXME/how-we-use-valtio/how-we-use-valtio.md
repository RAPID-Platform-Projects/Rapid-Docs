# How we use Valtio

Internally, the SDK uses valtio to build an object graph representing the user's site.

```Ruby
{<br></br>  	currentSite: RAPIDSiteFile,<br></br>	listItems: {<br></br>		[LISTITEM_ID]: ListItemMixin<br></br>	},<br></br>  	viewItems: {<br></br>		[LIST_NAME]: {<br></br>			[VIEW_NAME]: ViewMixin<br></br>        }<br></br>    },<br></br>	auth: {<br></br>		account: AccountInfo,<br></br>      	tenant: string,<br></br>      	site: string,<br></br>      	env: string,<br></br>      	...<br></br>    }<br></br>}
```

Interacting with this object graph manually is cumbersome and time-consuming. Thankfully, the SDK provides helper functions that make the process much easier and more streamlined. We can use hooks like `useListItem` and `useViewItems` inside our React components or, If we are outside the React tree, we can use the non hook variations of these, such as `getListItem` and `getViewDataByName`.  
  
As this is all built on top of a Valtio proxy store, we can snapshot any list item and use it as state to drive our React components.