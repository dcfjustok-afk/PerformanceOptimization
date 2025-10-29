// import HeavyComponent from './HeavyComponent';
import { Suspense } from 'react';
import React from 'react';
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

function LazyDome() {
  return (
     <div>
      <h1>首页</h1>
      <Suspense fallback={<div>加载中...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default LazyDome;