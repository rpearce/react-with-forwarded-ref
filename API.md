# API Documentation

## Usage
Let's say you have a react component named `Comp`:

```js
// Comp.js file

const Comp = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
)

export default Comp
```

If you're using [`React.createRef()`](https://reactjs.org/docs/refs-and-the-dom.html#creating-refs<Paste>)
and want to pass this `ref` to a child component, you need to utilize
[forwarded refs](https://reactjs.org/docs/forwarding-refs.html). This component
handles all the hassle by using the [higher-order component
(HOC)](https://reactjs.org/docs/higher-order-components.html) pattern to wrap
your component, accept the `ref`, and forward it to you as `forwardedRef`.

```js
// Comp.js file

import withForwardedRef from 'react-with-forwarded-ref'

const Comp = ({ children, className, forwardedRef }) => (
  <div className={className} ref={forwardedRef}>
    {children}
  </div>
)

export default withForwardedRef(Comp)
```
