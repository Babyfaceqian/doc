## 三大原则
1. 单一数据源

整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。

2. State 是只读的

唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。

3. 使用纯函数来执行修改

为了描述 action 如何改变 state tree ，你需要编写 reducers。

## state范式化

将redux store视为数据库，以表存储的形式，通过id进行关联；相同数据用相同的id引用，主要可以解决一下几个问题：
> - 当数据在多处冗余后，需要更新时，很难保证所有的数据都进行更新。
> - 嵌套的数据意味着 reducer 逻辑嵌套更多、复杂度更高。尤其是在打算更新深层嵌套数据时。
> - 不可变的数据在更新时需要状态树的祖先数据进行复制和更新，并且新的对象引用会导致与之 connect 的所有 UI 组件都重复 render。尽管要显示的数据没有发生任何改变，对深层嵌套的数据对象进行更新也会强制完全无关的 UI 组件重复 render

可以使用 Normaizr 库将数据范式化。

## 高阶reducer

创建一个高阶reducer，即返回reducer函数的函数，结合combineReducers，可以复用reducer逻辑。

## 不可变更新

state自身的变化可能会导致更新前后的state值相同，从而不能引起正确的渲染，所以redux的state自身必须是不可变的，每次reducer更新都是返回一个新的state。但是因为js对象引用的缘故，有些时候会出现修改原始state的情况，为了避免出现这种情况，有以下几种方法。

1. 手动拷贝某个嵌套的地方
2. 使用 dot-prop-immutable 

```js
state = dotProp.set(state, `todos.${index}.complete`, true)
```

## 初始化state
1. createStore 方法中的第二个可选参数 preloadedState，此方法优先于第二种方法。
2. 使用 ES6 中默认参数的语法 function myReducer(state = someDefaultValue, action)

## 组织state
是否需要将状态存储在store中：
> - 应用的其他部分是否关心这个数据？
> - 是否需要根据需要在原始数据的基础上创建衍生数据？
> - 相同的数据是否被用作驱动多个组件？
> - 能否将状态恢复到特定时间点（在时光旅行调试的时候）？
> - 是否要缓存数据（比如：数据存在的情况下直接去使用它而不是重复去请求他）？