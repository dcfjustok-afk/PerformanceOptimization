import React, { useState } from 'react';
// 状态提升（父组件更新 → 所有子组件渲染）
function Parent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>加 1</button>
      <Child1 count={count} />
      <Child2 count={count} />
    </>
  );
}

// 状态局部化（只有相关组件更新）
const Child1 = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>加 1</button>;
};
const Child2 = () => <div>我不受 Child1 影响</div>;