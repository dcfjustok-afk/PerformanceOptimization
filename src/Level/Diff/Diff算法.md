Diff算法
    React 用于比较新旧虚拟DOM（vDOM）的差异，计算最小更新量，然后更新真实DOM
    核心目标：最小化真实DOM操作，提高渲染性能

Diff算法核心思想
    React采用分层策略 + 假设局部变动
        1. 树级比较（Shallow Comparison）
            1.1 React 只在同一层级内比较节点，不同层级直接替换
            1.2 避免整棵树全量比较
        2. 同类型节点复用
            2.1 相同类型节点复用 （更新props）
            2.2 不同类型节点直接销毁重建
        3. key用于列表优化
            列表节点通过 key 进行高效匹配 ， React只移动或更新必要节点
                3.1 相同 key 节点复用
                3.2 不同 key 节点销毁重建
Diff算法的规则
    1. 不同类型的元素，  直接删除 旧的 ， 创建新的
        // old
        <div></div>
        // new
        <span></span>
        // React 会删除 div，创建 span

    2. 相同类型的元素，只更新属性
        // old
        <div id="old"></div>
        // new
        <div id="new"></div>
        // React 只更新 id 属性，不删除或创建节点

    3. 组件更新 -> 深入比较props
        // old
        <MyComponent id="old" />
        // new
        <MyComponent id="new" />
        // React 会调用 MyComponent 的生命周期方法，更新 id 属性
        
    4. 列表Diff -> 基于key进行高效匹配
        4.1 相同key 节点复用
        4.2 不同key 节点销毁重建
        // old
        <ul>
            <li key="a">A</li>
            <li key="b">B</li>
        </ul>
        // new
        <ul>
            <li key="b">B</li>
            <li key="a">A</li>
        </ul>