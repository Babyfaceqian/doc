# Tips
- <a href="#react">react</a>
- <a href="#1">redux</a>
- <a href="#1">redux-saga</a>
- <a href="#1">svg</a>
- <a href="#1">d3</a>
- <a href="#antd">antd</a>
- <a href="#css">css</a>
- <a href="#html">html</a>

*****
### <a name="react">react使用</a>
官方文档 https://reactjs.org/docs/getting-started.html
- eslint

    在vs code中使用eslint插件，可以实时提醒代码是否符合规范
- stateless component vs pure component vs state component

    按照此优先级使用component类型， 如果不需要存储状态和生命周期函数，可以使用stateless component；如果不需要deep checking props，可以使用pure component。
- 三目运算符

    尽量使用三目运算符代替if函数，三目运算符也可以在jsx中编写用于控制组件的加载条件。
- react tool

    使用react tool进行调试。
- snippets

    在编辑器使用snippet插件。
- bind this

    使用箭头函数绑定组件的`this`对象，如果无法使用箭头函数则在`constructor`函数中绑定，注意需要先写`super()`。如果将箭头函数写在组件上，每次渲染该组件时都会传入一个新的函数，可能会引起额外的渲染。另一种方法是使用autobind库，作用和在constructor里单独写一样。
- setState
  
    `setState`是异步调用函数，如果想要同时使用相应的`state`，应该使用如下方式。
    ```js
    this.setState((prevState, nextState) => {
    loading: !nextState.loading
    });
    ```
- small component
  
    尽量将组件拆分成多个小组件，便于阅读、重用、单元测试。

- 组件嵌套

    教程网址： https://youtu.be/YaZg8wg39QQ
    - **Circle**

        Stateful Component
    - **Small Circle**

        Stateless Component
    - **Small Circle in Circle**

        Container Component
    - **Small Circle in Circle in Dotted Circle**
        
        Higher-Order Component
    - **Small Circle in Dashed Circle in Circle**

        
- refs

    当父组件需要获取子组件并获取或设置子组件属性时，可通过给子组件添加ref属性的方式关联到父组件。
    - 旧版方式（不推荐，可能将来会被废弃）

    原因： https://github.com/facebook/react/issues/1373

    ```js
    class CustomTextInput extends React.Component {
  
    componentDidMount() {
        // 渲染后文本框自动获得焦点

        this.refs.inputRef.focus(); // 子组件中传入字符串，在父组件的refs对象中获取到子组件。
    }

    render() {
        return (
        <div>
            <input
            type="text"
            ref="inputRef"
            />
        </div>
        );
    }
    }
    ```
    - 新版方式

     ```js
    class CustomTextInput extends React.Component {
  
    componentDidMount() {
        // 渲染后文本框自动获得焦点

        this.inputReference.focus(); 
    }

    inputRef = (element) => {
        this.inputReference = element; // 传入回调，并获取到子组件。
    }

    render() {
        return (
        <div>
            <input
            type="text"
            ref={this.inputRef}
            />
        </div>
        );
    }
    }
    ```

- pure/impure function
  
    ```js
    function sum(a, b) {
        return a + b;
    }
    ```

    >Such functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs.

    >In contrast, this function is impure because it changes its own input:
    ```js
    function withdraw(account, amount) {
        account.total -= amount;
    }
    ```

    >All React components must act like pure functions with respect to their props.

- React组件的生命周期

    **加载时** 

    1. constructor()
    2. componentWillMount()
    3. render(), 如果渲染子组件，子组件也会走一遍这个流程，所有子组件都componentDidMount()完了才会到下一步
    4. componentDidMount()

    **更新时**
    
    1. componentWillReceiveProps(), 只有props改变才会触发。
    2. shouldComponentUpdate(), 必须返回true或false
    3. componentWillUpdate()
    4. render()，如果渲染子组件，子组件也会走一遍这个流程，所有子组件都componentDidMount()完了才会走到下一步
    5. componentDidUpdate()

    **移除时**

    1. componentWillUnmount()

- setState

    > That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:

    ```js
    this.setState((state, props) => ({
        counter: state.counter + props.increment
    }));

    ```

- SyntheticEvent

    > The SyntheticEvent is pooled. This means that the SyntheticEvent object will be reused and all properties will be nullified after the event callback has been invoked. This is for performance reasons. As such, you cannot access the event in an asynchronous way.
    
    ```js

    function onClick(event) {
      console.log(event); // => nullified object.
      console.log(event.type); // => "click"
      const eventType = event.type; // => "click"

      setTimeout(function() {
        console.log(event.type); // => null
        console.log(eventType); // => "click"
      }, 0);

      // Won't work. this.state.clickEvent will only contain null values.
      this.setState({clickEvent: event});

      // You can still export event properties.
      this.setState({eventType: event.type});
    }
    ```

    简单来讲，React中的合成事件是共用的，这就意味着事件对象会被复用。在什么时候被复用呢？在每次事件处理函数执行完后，事件对象属性会被重置，这时候就会被复用了。所以为了在事件处理函数内拿到正确的事件对象或对象内的值，在事件处理函数中不要异步使用event，如果要使用，请使用event缓存后的对象或值。或者

    > Note:
If you want to access the event properties in an asynchronous way, you should call event.persist() on the event, which will remove the synthetic event from the pool and allow references to the event to be retained by user code.

- Keys
  
  React中遍历出来的组件必须都加上key，且保证key值unique，用于区分组件。特别是在对组件进行排序，修改的时候。

******
### <a name="d3">d3使用</a>
官方文档 https://github.com/d3/d3/wiki
*****
### <a name="antd">antd使用</a>
官方文档 https://ant.design/docs/react/introduce-cn
- antd table组件启用表体滚动时列不对齐问题的解决方案

    table组件在启用表体滚动时，也就是`overflow-y: scroll`，滚动条会占用表体的宽度，导致表体单元格宽度减小，而表头单元格宽度不变，从而导致表头与内容之间出现不对齐的现象。解决方案是，对表头也设置滚动，然后通过设置`margin-right: -20px;padding-right: 20px`来隐藏滚动条。

- antd table组件自适应高度

    该组件默认高度由固定行高撑起，如果需要让表格高度自适应屏幕高度，需要一层层修改表格的css样式，即让表格各层标签的高度按父元素高度的百分比来设定，这样整个表体的高度就会适应屏幕的高度。

- antd（2.x） Form组件用getFieldDecorator绑定表单域名重复的问题

    当有两个子表单表单域名类型相同、名字相同时，如

    ```js
    /*子表单1*/
        getFieldDecorator('fieldA', {
                            rules: [{ required: true, whitespace: true }],
                            initialValue: undefined
                        })

        ... ...
    /*子表单2*/

        getFieldDecorator('fieldA', {
                            rules: [{ required: true, whitespace: true }],
                            initialValue: undefined
                        })
    ```
    父表单在切换子表单后原表单的该表单域在初始化时生成的fieldMeta对象会影响当前子表单该表单域。如当前子表单还会沿用原表单的rules配置。
    当第一个表单域名字类型为数组，即field[1]，第二个表单域名字类型为字符串，即field时，第一个表单域初始化时生成的fieldMeta对象中的virtual值为true，将会影响到第二个表单域更改时获取方式。导致第二个表单域无法完成更改，并且一直处于validating中（组件效果是右侧一直有loading图标）。
    ```js

    /*createFieldsStore.js*/
    function getValueFromFields(name, fields) {
      var _this2 = this;

      var fieldsMeta = this.fieldsMeta;
    /*virtual为true，认为fieldA是数组类型*/
      if (fieldsMeta[name] && fieldsMeta[name].virtual) {   
        var ret = {};
        Object.keys(fieldsMeta).forEach(function (fieldKey) {
          var nameIfNested = getNameIfNested(fieldKey);
          if (nameIfNested.name === name && nameIfNested.isNested) {
            set(ret, fieldKey, _this2.getValueFromFieldsInternal(fieldKey, fields));
          }
        });
        /*走到这里，返回的是undefined*/
        return ret[name];
      }
      /*正常情况下会走到这里，返回正确的值*/
      return this.getValueFromFieldsInternal(name, fields);
    }
  }
    ```

    解决办法就是避免重复命名，可以为不同表单的表单域名加前缀，然后在父组件的handleSubmit函数中统一作处理。第二种解决办法是为子表单绑定自己的form，用refs来引用子表单的form对象进行处理。
- form 表单使用
*******
### <a name="css">css</a>
- **BFC**
  
    教程网址：https://www.cnblogs.com/lhb25/p/inside-block-formatting-ontext.html
    - **Box**: CSS布局的基本单位

        - block-level box：display属性为block，list-item，table的元素，会生成block-level box，并且会参与block formatting context。
        - inline-level box：display属性为inline，inline-block， inline-table的元素，会生成inline-level box，并且会参与inline formatting context。
        - run-in box：

    - Formatting Context

        Formatting context 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。最常见的 Formatting context 有 Block fomatting context (简称BFC)和 Inline formatting context (简称IFC)。

        CSS2.1 中只有 BFC 和 IFC, CSS3 中还增加了 GFC 和 FFC。
    - **BFC**布局

        BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。

    - **BFC**布局规则

        - 内部的Box会在垂直方向，一个接一个地放置。
        - Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
        - 每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
        - BFC的区域不会与float box重叠。
        - BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
        - 计算BFC的高度时，浮动元素也参与计算
    - **BFC**生成条件（任意一个）
        - 根元素
        - float属性不为none
        - position为absolute或fixed
        - display为inline-block, table-cell, table-caption, flex, inline-flex
        - overflow不为visible

*******
### <a name="#html">html</a>
- 在网页上添加锚点，点击链接后跳转到页面对应锚点位置。需要注意的是点击链接会改变路由的地址。
    
    ```html
    <a href="#mylink">my link</a>
    ... ...
    <div id="mypage">
        <a name="mylink">jump here</a>
    </div>
    ```

    如果要实现滚动页面的同时，导航栏也跟着滚动到对应的链接，需要监听页面的onscroll事件，比较简便的方法是
    ```js
    import $ from 'jquery';
    $('#mypage').onscroll = () => {
        // 获取锚点到页面顶部的距离，判断是否需要改变链接高亮
    } 
    ```

    通过判断锚点到页面顶部的距离会有一个bug，就是当点击导航栏某个链接时，页面滚动到相应的位置并且触发onscroll事件，如果此时页面内出现多个锚点，满足条件的锚点又有多个，此时高亮的链接可能会变成最后满足条件的锚点所对应的链接。即点击了链接一，结果链接二亮了。

    **解决方案**

    设定锚点到页面顶部的距离，确保在该距离内最多只会出现一个锚点；增加最后一个锚点后面内容高度，使其能够出现在页面顶部并满足条件。