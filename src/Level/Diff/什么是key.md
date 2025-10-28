Key
    在React中， key是一个 特殊的属性，用来帮助React识别那些元素改变，添加或删除
        1.只同级（兄弟节点）中有效
        2.React通过key来匹配旧节点和新节点。从而决定是否复用组件实例
        3.没有key时，React会使用索引作为key。这在列表静态渲染时是可以的，但如果列表有动态操作（如排序、增删），会导致性能问题

Key 的作用
    React的Diff算法在比较两个虚拟DOM树时，会遵循一下规则
        1.元素类型不同 -> 直接销毁旧节点，创建新节点
        2.元素类型相同 -> 比较属性是否改变
            2.1 如果key相同 -> 复用该组件实例
            2.2 如果key不同 -> 更新组件实例

❌ 不使用 key（容易出问题）
function List() {
  const [items, setItems] = React.useState(['A','B','C']);
  return items.map((item, index) => <div>{item}</div>);
}
当列表顺序发生变化时（比如删除第一个元素），React 按索引匹配，可能把 B 的内容直接复用到第一个位置 → 产生错误状态或渲染混乱。

✅ 使用 key（推荐）
function List() {
  const [items, setItems] = React.useState([
    { id: 1, text: 'A' },
    { id: 2, text: 'B' },
    { id: 3, text: 'C' }
  ]);

  return items.map(item => (
    <div key={item.id}>{item.text}</div>
  ));
}


总结
    key 是给每个同级元素一个唯一标识

    React 通过 key 匹配旧节点和新节点，决定是否复用组件实例

    没有 key 或 key 不唯一 → React 默认按索引匹配 → 易出问题

    使用稳定唯一的 key（比如 id）是列表渲染最佳实践