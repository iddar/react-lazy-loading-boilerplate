# React lazy loading boilerplate

## Dev plugins

- [x] [EditorConfig](http://editorconfig.org/)
- [x] [JavaScript Standard Style](https://github.com/feross/standard)

## Setup

```
$ git colone
$ npm install
```

## Running

```
$ npm start
```

## Build

```
$ npm run build
```

## Load async Routes
```js
// without reducer
const Home = asyncRoute(() => import('./views/Home'))
// with reducer
const Test = asyncRoute(() => import('./views/Test'), () => import('./reducers/bio'), './reducers/bio')
```
