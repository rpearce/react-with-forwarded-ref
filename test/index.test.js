/* eslint react/prop-types: 0 */

import React, { createRef } from 'react'
import { renderIntoDocument } from 'react-dom/test-utils'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import withForwardedRef from '../source'

describe('withForwardedRef', () => {
  it('renders', () => {
    const Comp = ({ children, className, forwardedRef }) => (
      <div className={className} ref={forwardedRef}>
        {children}
      </div>
    )
    const WrappedComp = withForwardedRef(Comp)
    const ref = createRef()
    const wrapper = shallow(
      <WrappedComp className="foo" ref={ref}>
        Testing 123
      </WrappedComp>
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('renders, custom displayName', () => {
    const Comp = ({ children, className, forwardedRef }) => (
      <div className={className} ref={forwardedRef}>
        {children}
      </div>
    )
    Comp.displayName = 'FooBar'
    const WrappedComp = withForwardedRef(Comp)
    const ref = createRef()
    const wrapper = shallow(
      <WrappedComp className="foo" ref={ref}>
        Testing 123
      </WrappedComp>
    )
    const tree = toJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('ref points to HTMLDivElement', () => {
    const Comp = ({ children, className, forwardedRef }) => (
      <div className={className} ref={forwardedRef}>
        {children}
      </div>
    )
    const WrappedComp = withForwardedRef(Comp)
    const ref = createRef()
    renderIntoDocument(
      <WrappedComp className="foo" ref={ref}>
        Testing 123
      </WrappedComp>
    )
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
