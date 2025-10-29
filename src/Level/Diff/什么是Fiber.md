Fiber
    是React16新增的一中内部数据结构， 可以理解为
        react用来描述组件状态、树结构、更新任务的对象，每个组件、DOM元素对应一个Fiber
    简单来说：
        1.每个Fiber对应一个React元素（组件、DOM元素）
        2.Fiber记录了组件的状态、props、子节点、兄弟节点、父节点等信息
        3.Fiber使得React可以终端、调度、优先更新UI

Fiber的作用
    1.可中断渲染
    2.增量渲染
    3.保存组件状态
    4.优化Diff

Fiber结构示意图：
    {
        type: ComponentType,       // 组件类型或DOM类型
        key: string | null,        // 唯一标识（列表中）
        stateNode: any,            // 对应的实例：类组件实例或DOM节点
        return: Fiber | null,      // 父 Fiber
        child: Fiber | null,       // 第一个子节点 Fiber
        sibling: Fiber | null,     // 下一个兄弟节点 Fiber
        pendingProps: object,      // 新 props
        memoizedProps: object,     // 上一次 props
        memoizedState: object,     // 上一次 state
        effectTag: number,         // 需要执行的副作用标识
        nextEffect: Fiber | null,  // 副作用链表
    }

    直观理解：Fiber 就像 组件节点的工作单元，React 用它来记录组件树和更新信息。

Fiber 如何工作
    1.Render Phase （渲染阶段）
        1.1 React 遍历组件树，为每个组件创建或更新 Fiber 节点。
        1.2 计算那些Fiber需要更新、挂载或删除
        1.3 可以中断渲染，将控制权交还给浏览器，浏览器可以处理其他任务（如用户交互）
        1.4 不会修改真实DOM，而是构建一个 Fiber 树，React 稍后会根据这个树来更新真实 DOM。
    2. Commit Phase （提交阶段）
        2.1 根据Fiber树更新DOM
        2.2 执行副作用（如调用生命周期方法、更新DOM属性）
        2.3 提交更新，将最终结果渲染到屏幕上
        2.4 不可中断，必须一次性完成

Fiber 与 Diff结合
    Diff算法用Fiber实现：
        1.每个节点都是Fiber
        2.React在Diff时对比新旧Fiber
            1.key + type → 判断是否复用 Fiber
            2.相同 Fiber → 更新 props/state
            3.不同 Fiber → 卸载旧节点，创建新节点
        3.Fiber链表结构让React可以增量渲染子树，而不是同步渲染整个树
        
Fiber 的优势
    增量渲染，不卡主线程
    支持优先级调度
    可复用组件实例，提高性能
    为 Concurrent Mode、Suspense 等特性打基础