<!-- # Valtio Overview

[Watch the video tutorial](https://rapidplatform-my.sharepoint.com/:v:/g/personal/alex_litzow_rapidplatform_com_au/EZyWMTPMJ4JGqLPXtVqoZNsBgXhY3StSO8GQ7gJGNx6i8Q?e=UrJ8Ef)  
  
The RAPID Platform SDK is built on top of the state management tool Valtio, this is how it's described in the documentation:

<p class="callout info">The Valtio API is minimal, flexible, unopinionated and a touch magical. Valtio's proxy turns the object you pass it into a self-aware proxy, allowing fine-grained subscription and creativity in making state updates. In React, Valtio shines at render optimization.   
  
- Valtio Documentation [FIND IT HERE](https://valtio.pmnd.rs/docs/introduction/getting-started)</p>

### Creating Proxy State  


Valtio proxy state is made by passing the `proxy` function an initial store object.

```JavaScript
import { proxy } from 'valtio';<br></br><br></br>const state = {<br></br>	count: 0,<br></br>};<br></br><br></br>const stateProxy = proxy(state);
```

Valtio takes your state object and wraps it in a JavaScript `new Proxy` instance, which is used to track any changes.

### Using State Snapshot

To access the data inside this state object, we will use `useSnapshot`. A Valtio hook that adds access-tracking to our state object. This means that our component will only update if a key that is being used inside it changes.

```JavaScript
//... <br></br><br></br>const state = {<br></br>	count: 0,<br></br>};<br></br><br></br>const stateProxy = proxy(state);<br></br><br></br>export default function Counter() {<br></br>  const stateSnap = useSnapshot(stateProxy);<br></br><br></br>  return (<br></br>      <div><br></br>          <h3>{stateSnap.count}</h3><br></br>          <button>Increment</button><br></br>      </div><br></br>  )<br></br>}
```

In the above example, our component will only re-render with `state.count` is changed.

### Changing State

Changing state is as easy is mutating the state proxy, any changes we make will be reflected by the snapshot. Commonly, these mutations are wrapped up in functions called actions.

```JavaScript
//... <br></br><br></br>const state = {<br></br>	count: 0,<br></br>};<br></br><br></br>const stateProxy = proxy(state);<br></br><br></br>const incrementCount = () => ++stateProxy.count;<br></br><br></br>export default function Counter() {<br></br>  const stateSnap = useSnapshot(stateProxy);<br></br><br></br>  return (<br></br>      <div><br></br>          <h3>{stateSnap.count}</h3><br></br>          <button onClick={incrementCount}>+</button><br></br>      </div><br></br>  )<br></br>}
```

Now, when we click the button, `state.count` will be incremented by 1. This change will be picked up by `useSnapshot` causing a re-render of our component.  
  
Here is the full component, as an exercise try adding a `decrementCount` action that does the opposite of `incrementCount`.

```JavaScript
import { proxy, useSnapshot } from 'valtio';<br></br>import React from 'react';<br></br><br></br>const state = {<br></br>    count: 0,<br></br>};<br></br><br></br>const stateProxy = proxy(state);<br></br><br></br>const incrementCount = () => ++stateProxy.count;<br></br><br></br>export default function Counter() {<br></br>    const stateSnap = useSnapshot(stateProxy);<br></br><br></br>    return (<br></br>        <div><br></br>            <h3>{stateSnap.count}</h3><br></br>            <button onClick={incrementCount}>+</button><br></br>        </div><br></br>    )<br></br>}
``` -->