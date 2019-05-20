# NodeJS VM 初探
[官网](https://nodejs.org/api/vm.html)
## 概念
以下内容译自官方
> `vm`提供了在V8虚拟上下文中编译和执行代码的能力。它不是一种安全机制。不要用它运行不信任的代码。这里的虚拟上下文（沙箱），只是一个单纯的独立上下文，不能保证安全。
> 
> 一个普遍的用法是将代码运行在一个沙箱内，而沙箱其实就是一个独立对象，类似js中的this（执行上下文），可以和其他代码分隔开来。
> 
> 沙箱也是一个独立的global对象。

## 常用方法
- vm.createContext
- vm.runInContext
```javascript
const vm = require('vm');

const x = 1;

const sandbox = { x: 2 };
vm.createContext(sandbox); // Contextify the sandbox.

const code = 'x += 40; var y = 17;';
// `x` and `y` are global variables in the sandboxed environment.
// Initially, x has the value 2 because that is the value of sandbox.x.
vm.runInContext(code, sandbox);

console.log(sandbox.x); // 42
console.log(sandbox.y); // 17

console.log(x); // 1; y is not defined.
```
- vm.runInNewContext

相当于vm.createContext + vm.runInContext
- 