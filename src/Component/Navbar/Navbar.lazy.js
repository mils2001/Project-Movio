import React, { lazy, Suspense } from 'react';

const Lazynavbar = lazy(() => import('./navbar'));

const navbar = props => (
  <Suspense fallback={null}>
    <Lazynavbar {...props} />
  </Suspense>
);

export default navbar;
