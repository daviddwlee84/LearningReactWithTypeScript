# React TypeScript Tutorial For Beginners

> * [React TypeScript Tutorial for Beginners - YouTube Playlist](https://www.youtube.com/playlist?list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK)

## Environment

## Getting Started

```powershell
npx create-react-app react-typescript-demo --template typescript

cd react-typescript-demo
npm start
```

## Props

### What is Props and Type vs. Interface

Given `props` types

Type vs. Interface

* Use type when building applications
* Use interface when building libraries

### Data Props

* `string`
* `number`
* `boolean`
* object: `{}`
* `children`
* React Component: `React.ReactNode`
* Optional props: `?:`

> Assign default value to an object `const { parameter = 0 } = props`

### Event Props

* Click
  * `() => void`: no input event and return
  * `(event: React.MouseEvent<HTMLButtonElement>) => void`: React event type
