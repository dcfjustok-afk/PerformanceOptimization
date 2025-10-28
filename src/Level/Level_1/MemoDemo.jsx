import React from 'react';

const MemoChild = React.memo(({ value }) => {
  console.log('子组件渲染');
  return <div>{value}</div>;
});
export default MemoChild;

//下面是 该示例的 app.jsx
// import "./App.css";
// import MemoChild from './Level/Level_1/MemoDemo.jsx';
// import React from 'react';

// function App() {
//   const [count, setCount] = React.useState(0);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>加 1</button>
      
//       <MemoChild value="我是子组件" />
//     </div>
//   );
// }

// export default App;
