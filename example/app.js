/* eslint react/prop-types: 0 */

import React, { Component, createRef } from 'react'
import ReactDOM from 'react-dom'

import withForwardedRef from '../dist/esm'

// example component
const Comp = ({ children, className, forwardedRef }) => (
  <div className={className} ref={forwardedRef}>
    {children}
  </div>
)

// usage of withForwardedRef
const WrappedComp = withForwardedRef(Comp)

class App extends Component {
  constructor(...params) {
    super(...params)
    this.ref = createRef()
  }

  render() {
    return (
      <WrappedComp className="foo" ref={this.ref}>
        Testing 123
      </WrappedComp>
    )
  }
}

const container = document.querySelector('[data-app]')
ReactDOM.render(<App />, container)
