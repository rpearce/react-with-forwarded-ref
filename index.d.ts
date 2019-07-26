import * as React from 'react';

export interface WithForwardedRef<T = any> {
    forwardedRef?: React.RefObject<T>;
}

export default function withForwardedRef<T = any, P = {}>(component: React.ComponentType<P>): React.ComponentType<P & WithForwardedRef<T>>;
