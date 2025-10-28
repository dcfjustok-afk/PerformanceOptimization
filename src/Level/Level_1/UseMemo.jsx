import React, { useMemo } from 'react';
function UseMemo() {
  const [count, setCount] = React.useState(0);
  const [num, setNum] = React.useState(0);
  const expensiveValue = useMemo(() => {
    // 耗时计算
    console.log("耗时计算完成");
    
    return count * 2;
    
  }, [count]);
  const test=() => {
    console.log("这是一条测试");
    return 1;
  }
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count 加 1</button>
      <button onClick={() => setNum(num + 1)}>num 加 1</button>
      <p>当前计数: {count}</p>
      <p>当前 num: {num}</p>
      <p>耗时计算结果: {expensiveValue}</p>
      {/* <p>{test()}</p> */}
    </div>
  );
}
// export default UseMemo;
// import UseMemo from './Level/Level_1/UseMemo.jsx';



// function App() {
//   return (
//     <div>
//       <UseMemo />
//     </div>
//   );
// }

// export default App;
