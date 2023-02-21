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

> Check the console.log in the browser developer tool

* Click
  * `() => void`: no input event and return
    * `<button onClick={props.handleClick}>Click</button>`
    * `<Button handleClick={() => { console.log('Button clicked') }} />`
  * `(event: React.MouseEvent<HTMLButtonElement>) => void`: React event type
    * `<button onClick={props.handleClick}>Click</button>`
    * `<Button handleClick={(event) => { console.log('Button clicked', event) }} />`
  * `(event: React.MouseEvent<HTMLButtonElement>, id: number) => void`: (pass more variables)
    * `<button onClick={(event) => props.handleClick(event, 87)}>Click</button>`
    * `<Button handleClick={(event, id) => { console.log('Button clicked', id, event) }} />`

### HTML/CSS Props

* onClick: `React.MouseEvent<HTMLButtonElement>`
* onChange: `React.ChangeEvent<HTMLInputElement>`
* CSS: `React.CSSProperties`

### Tips

1. Destructure props when defining the component
2. Export types (separate types in different files): `*.types.ts`
3. Reusing types: use sub-type in multiple places (avoid duplication)

## Hook

### useState

> Login

* boolean value
* future value (null | Type)

Type Assertion: `as` keyword
