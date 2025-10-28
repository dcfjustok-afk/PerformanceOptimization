import React from "react";

const UseCallback = React.memo(({ onClick }) => {
  console.log("子组件渲染");
  return <button onClick={onClick}>点我</button>;
});

export default UseCallback;

// import "./App.css";
// import MemoChild from './Level/Level_1/MemoDemo.jsx';
// import React, { useCallback } from 'react';
// import UseCallback from './Level/Level_1/UseCallback.jsx';



// function App() {
//   const [count, setCount] = React.useState(0);
//   const handleClick = useCallback(() => setCount(c => c + 1), []);
  
//   return <Child onClick={handleClick} />;
// }

// export default App;
