# How we use Valtio

Internally, the SDK uses valtio to build an object graph representing the user's site.

```Ruby
{  	currentSite: RAPIDSiteFile,	listItems: {		[LISTITEM_ID]: ListItemMixin	},  	viewItems: {		[LIST_NAME]: {			[VIEW_NAME]: ViewMixin        }    },	auth: {		account: AccountInfo,      	tenant: string,      	site: string,      	env: string,      	...    }}
```

Interacting with this object graph manually is cumbersome and time-consuming. Thankfully, the SDK provides helper functions that make the process much easier and more streamlined. We can use hooks like `useListItem` and `useViewItems` inside our React components or, If we are outside the React tree, we can use the non hook variations of these, such as `getListItem` and `getViewDataByName`.  
  
As this is all built on top of a Valtio proxy store, we can snapshot any list item and use it as state to drive our React components.