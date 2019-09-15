# Babel配置
1. 配置方式
- .babelrc (and .babelrc.js) files
- package.json files with a "babel" key

2. @babel/polyfill 与 @babel/plugin-transform-runtime的区别
- `@babel/polyfill`是直接改变对象上的方法从而达到增强对象的作用，所以会污染全局对象，而且打包体积也会增加许多。
- `@babel/plugin-transform-runtime`提供一个runtime的沙箱环境，新功能的实现其实是调用的沙箱内的函数，所以这种方法不会污染全局对象。但有一个缺点是对象字面量无法调用相应的方法，可参考以下引用方法。
> A plugin that enables the re-use of Babel's injected helper code to save on codesize.
> 允许重用Babel注入的helper代码以节省代码大小

> NOTE: Instance methods such as "foobar".includes("foo") will only work with core-js@3. If you need to polyfill them, you can directly import "core-js" or use @babel/preset-env's useBuiltIns option.
> 注意：要想使用诸如`"foobar".includes("foo")`的实例方法，必须使用`core-js@3`。如果你需要实现这种实例方法，你可以直接引入`core-js`或者配置`@Babel/preset-env`的`useBuiltIns`属性