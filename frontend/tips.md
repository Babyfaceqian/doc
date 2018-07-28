# Tips
- <a href="#react">react</a>
- <a href="#1">redux</a>
- <a href="#1">redux-saga</a>
- <a href="#1">svg</a>
- <a href="#1">d3</a>
- <a href="#antd">antd</a>

### <a name="react">react使用</a>
- eslint

在vs code中使用eslint插件，可以实时提醒代码是否符合规范
- stateless component vs pure component vs state component

按照此优先级使用component类型， 如果不需要存储状态和生命周期函数，可以使用stateless component；如果不需要deep checking props，可以使用pure component。
- 三目运算符

尽量使用三目运算符代替if函数，三目运算符也可以在jsx中编写用于控制组件的加载条件。
- react tool

使用react tool进行调试。
- snippets

在编辑器使用snippet插件。
- bind this

使用箭头函数绑定组件的this对象，如果无法使用箭头函数则在constructor函数中绑定，注意需要先写super(props)。
- setState
  
setState是异步调用函数，如果想要同时使用相应的state，应该使用如下方式。
```
this.setState((prevState, nextState) => {
    loading: !nextState.loading
});
```
- small component
  
尽量将组件拆分成多个小组件，便于阅读、重用、单元测试。
### <a name="d3">d3使用</a>
官方文档 https://github.com/d3/d3/wiki

### <a name="antd">antd使用</a>
- antd table组件启用表体滚动时列不对齐问题的解决方案

table组件在启用表体滚动时，也就是```overflow-y: scroll```，滚动条会占用表体的宽度，导致表体单元格宽度减小，而表头单元格宽度不变，从而导致表头与内容之间出现不对齐的现象。解决方案是，对表头也设置滚动，然后通过设置```margin-right: -20px;padding-right: 20px```来隐藏滚动条。