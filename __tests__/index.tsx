import React, { FC, ReactNode, RefObject, createRef } from 'react'
import { render } from '@testing-library/react'
import withForwardedRef from '../source'

interface Props<A = any> {
  children: ReactNode
  className: string
  forwardedRef?: RefObject<A>
}

describe('withForwardedRef', () => {
  it('renders', () => {
    const Comp: FC<Props> = ({ children, className, forwardedRef }) => (
      <div className={className} ref={forwardedRef}>
        {children}
      </div>
    )
    const WrappedComp = withForwardedRef(Comp)
    const ref = createRef()
    const { asFragment } = render(
      <WrappedComp className="foo" ref={ref}>
        Testing 123
      </WrappedComp>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders, custom displayName', () => {
    const Comp: FC<Props> = ({ children, className, forwardedRef }) => (
      <div className={className} ref={forwardedRef}>
        {children}
      </div>
    )
    Comp.displayName = 'FooBar'
    const WrappedComp = withForwardedRef(Comp)
    const ref = createRef()
    const { asFragment } = render(
      <WrappedComp className="foo" ref={ref}>
        Testing 123
      </WrappedComp>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('ref points to HTMLDivElement', () => {
    const Comp: FC<Props> = ({ children, className, forwardedRef }) => (
      <div className={className} ref={forwardedRef}>
        {children}
      </div>
    )
    const WrappedComp = withForwardedRef(Comp)
    const ref = createRef()

    render(
      <WrappedComp className="foo" ref={ref}>
        Testing 123
      </WrappedComp>
    )

    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
