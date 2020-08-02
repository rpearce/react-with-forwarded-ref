# react-with-forwarded-ref

[![npm version](https://img.shields.io/npm/v/react-with-forwarded-ref.svg?style=flat-square)](https://www.npmjs.com/package/react-with-forwarded-ref) [![npm downloads](https://img.shields.io/npm/dm/react-with-forwarded-ref.svg?style=flat-square)](https://www.npmjs.com/package/react-with-forwarded-ref) [![bundlephobia size](https://flat.badgen.net/bundlephobia/minzip/react-with-forwarded-ref)](https://bundlephobia.com/result?p=react-with-forwarded-ref) [![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

This React.js [higher-order component
(HOC)](https://reactjs.org/docs/higher-order-components.html) exists to provide
an appropriate wrapper for components that utilize
[forwarded refs](https://reactjs.org/docs/forwarding-refs.html). It accepts a
`ref` via `props` and renames `ref` to `forwardedRef` along
with whatever other `props` are passed in.

## Links
* [Installation](#installation)
* [Usage](#usage)
* [All Contributors](#usage)
* [Authors](./AUTHORS)
* [Changelog](./CHANGELOG.md)
* [Contributing](./CONTRIBUTING.md)
* [Code of Conduct](./CODE_OF_CONDUCT.md)

## Installation
```
npm i react-with-forwarded-ref
```
or
```
yarn add react-with-forwarded-ref
```

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

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://robertwpearce.com"><img src="https://avatars2.githubusercontent.com/u/592876?v=4" width="100px;" alt=""/><br /><sub><b>Robert Pearce</b></sub></a><br /><a href="https://github.com/rpearce/react-with-forwarded-ref/commits?author=rpearce" title="Code">💻</a> <a href="https://github.com/rpearce/react-with-forwarded-ref/commits?author=rpearce" title="Documentation">📖</a> <a href="#example-rpearce" title="Examples">💡</a> <a href="#ideas-rpearce" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/rpearce/react-with-forwarded-ref/commits?author=rpearce" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://zuffik.eu"><img src="https://avatars1.githubusercontent.com/u/7671752?v=4" width="100px;" alt=""/><br /><sub><b>Kristián Žuffa</b></sub></a><br /><a href="https://github.com/rpearce/react-with-forwarded-ref/commits?author=zuffik" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
