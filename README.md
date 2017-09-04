# React lazy loading boilerplate


Load async Routes
```js
// without reducer
const Home = asyncRoute(() => import('./views/Home'))
// with reducer
const Test = asyncRoute(() => import('./views/Test'), () => import('./reducers/bio'), './reducers/bio')
```
