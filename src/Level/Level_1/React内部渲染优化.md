React内部渲染优化
    React 渲染流程：
        1.组件 state/props更新 -> 触发渲染
        2.虚拟DOM(Virtual DOM)更新 -> 生成新的虚拟DOM
        3.Diff算法 -> 比较新旧虚拟DOM的差异， 计算最小更新
        4.DOM更新 -> 只更新有变化的部分到真实DOM
    核心问题：
        React 默认 父组件 更新 -> 子组件也 会自动渲染; 
        耗时操作或大组件容易导致性能瓶颈
        1. 频繁的state/props更新导致的性能问题
        2. 复杂的组件树导致的性能问题
        3. 大量的DOM操作导致的性能问题
    
*****避免不必要的重新渲染*****

    1. 使用 React.memo  缓存组件
        作用： 缓存组件， 只有 props发生变化才重新渲染
        使用：
            import React from 'react';
            const MemoChild = React.memo(({ value }) => {
                console.log('子组件渲染');
                return <div>{value}</div>;
            });
        
    
    2. 使用 useCallback  缓存函数
        作用： 缓存函数， 只有依赖项发生变化才重新创建函数
        避免每次渲染都创建新函数，导致 ***子组件*** 重新渲染
        使用：
            import React, { useCallback } from 'react';
            const handleClick = useCallback(() => {
                console.log('按钮点击');
            }, []);
        此时   [] 依赖空数组 → 永远不变
    

    3.useMemo 缓存计算结果
        作用：避免每次渲染重复执行耗时计算
        原因是每一次渲染（首次渲染和后续组件更新渲染），组件所有语句都会执行一遍
        使用：
            import React, { useMemo } from 'react';
            const expensiveValue = useMemo(() => {
                // 耗时计算
                return someExpensiveOperation();
            }, [dependency]);
        只有当 dependency 变化时，才会重新执行耗时计算 ， 其他的（组件更新的情况）情况都不会重新执行
