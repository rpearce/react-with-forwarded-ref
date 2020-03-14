import React, {
  ComponentType,
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  PropsWithoutRef,
  RefAttributes,
  RefObject,
  forwardRef
} from 'react'

interface WithForwardedRef<A = any> {
  ref?: RefObject<A>
}

export default function withForwardedRef<A = any, B = {}>(
  Comp: ComponentType<B>
): ForwardRefExoticComponent<PropsWithoutRef<B> & RefAttributes<A>> {
  const WrappedComp: ForwardRefRenderFunction<A, B> = (props, ref) => (
    <Comp {...props} forwardedRef={ref} />
  )

  const name = Comp.displayName || Comp.name
  WrappedComp.displayName = `withForwardedRef(${name})`

  return forwardRef(WrappedComp)
}