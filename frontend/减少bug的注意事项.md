### react-saga

由于在react-saga用生成器请求api的方法中，如果因为某种原因请求失败，后续的代码将不会顺利执行，而且控制台也不会有相关的错误信息，所以在开发的时候就很难注意到，产生bug也很难定位原因。

**解决方案**

参考官方文档中错误处理
https://redux-saga-in-chinese.js.org/docs/basics/ErrorHandling.html

使用try/catch，或者Promise的catch来捕获错误。尽量写一下单元测试，mock服务返回不同的响应来确保应用不会因为请求失败而出现bug。

### 边界处理

由于js是弱类型语言，加上不同类型的变量会有不用的方法，我们必须时刻注意在使用方法的时候确保变量拥有正确的类型。一个常见的例子是在ES6中，数组对象可以使用forEach/map来遍历，当因为某种原因，该对象变成了其他类型的值比如null，undefined，{}，那么使用这两个方法就会报错。开发的时候也不容易测试到所有的情况。

**解决方案**
- 保险的方案是在使用的时候进行类型判断

```js
(Array.isArray(data) || []).map(() => {
    // ……
})

```
- 确保上游数据格式正确，可以减少不必要的类型判断。比如使用typescript。

### redux

action的type在一个store中不能重复，如果有多个页面多个action文件，很容易造成action重复，当触发某一个action时，如果store存在两个相同的type，则会触发两次监听事件。

**解决方案**

给每个type加上有意义的前缀