import React, { Suspense, lazy } from 'react';
import styles from './index.less';
const Btn = lazy(() => import('./component/button'));

export default () => {
  return (
    <div>
      <h1 className={styles.title}>欢迎来到sub1</h1>
      <Suspense
        fallback={<div>Loading...</div>}
      >
        <Btn />
      </Suspense>
    </div>
  );
}
