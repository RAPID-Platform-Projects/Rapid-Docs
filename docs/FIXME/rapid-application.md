# Rapid Application

### Rapid Application Component

[Watch the video tutorial](https://rapidplatform.sharepoint.com/:v:/s/projects/EfrR5B_wRQ9LqN_TV7uOEN4B9n_fy51mLnX1ZBZC-pUKNA?e=P61L3O)

In `index.tsx` you will find the `<RapidApplication />` component, which is the main entry to all SDK apps.

```JavaScript
// src/index.tsx<br></br><br></br>const root = ReactDOM.createRoot(document.getElementById("root")!);<br></br><br></br>root.render(<RapidApplication />);
```

<div id="bkmrk-the-%3Crapidapplicatio"><div><div>The `<RapidApplication />` handles authentication, and provides a routing mechanism. This way, we can assert that users will be properly authenticated by the time they reach any of your components.   
  
</div></div></div>### Application Routing  


[Watch the video tutorial](https://rapidplatform.sharepoint.com/:v:/s/projects/EX3Zg48pmJZHojQkaJO2BL0B6YSRI2RPWXAizSRM6JvRwQ?e=3IKzYB)

To add our entry component, `<App />`, we need to configure the `subRoutes` prop of the `<RapidApplication />`.

```JavaScript
subRoutes={[<br></br>	{<br></br>      	path: '',<br></br>		id: 'app-root',<br></br>		element: <App />,<br></br>	}<br></br>]}
```

<p class="callout info">The SDK uses React Router DOM v6's `createBrowserRouter` for routing. More information can be found [here](https://reactrouter.com/en/main/routers/create-browser-router)  
</p>

Because we have set the `path` to an empty string, this will render `<App />` at the URL `localhost:9000/_environment/tenant/site`.   
  
To render any other routes, we can add them to the `children` collection of the `'app-root'` route we have just added.

```JavaScript
subRoutes={[<br></br>	{<br></br>      	path: '',<br></br>		id: 'app-root',<br></br>		element: <App />,<br></br>        children: [<br></br>			{<br></br>            	path: 'child',<br></br>            	id: 'child',<br></br>                element: <Child />,<br></br>			}<br></br>		]<br></br>	}<br></br>]}
```

Making sure to add an `<Outlet />` into our `<App />` component so React Router DOM knows where to place the children when their routes match.

<p class="callout info">React Router DOM `<Outlet />` documentation can be found [here](https://reactrouter.com/en/main/components/outlet)</p>