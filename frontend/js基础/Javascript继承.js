/**
 * 原型链继承
 * 缺点：
 * 1. 不能对new A()传参
 * 2. 不能多继承，因为只有一个prototype对象
 * 3. A中的属性都直接挂在B.prototype上，对所有B的实例都是共享的
 */
function A() {
  this.name = 'Michael';
}
function B() {
  this.age = 30;
  B.prototype = new A();
  B.prototype.setAge = function(age) {
    this.age = age;
  }
}

/**
 * 借用构造函数继承
 * 优点：
 * 1. A的构造函数的属性都挂在B的构造函数
 * 2. 可传参
 * 3. 可多继承
 * 缺点：
 * 1. B的实例只是它自己的实例，没有与父类建立联系
 * 2. 只继承了父类的构造函数，没有继承父类的prototype
 * 3. 占用内存，无法服用
 */
function A() {
  this.name = 'Michael';
}
function C() {
  this.age = 30;
}
function B() {
  A.apply(this, arguments); // 修改A中this指向并执行
  C.apply(this, arguments);
  this.age = 30;
  B.prototype = new A();
  B.prototype.setAge = function(age) {
    this.age = age;
  }
}
/**
 * 组合继承（伪经典模式）
 * 优点：
 * 1. A的构造函数的属性都挂在B的构造函数
 * 2. 可传参
 * 3. 可多继承
 * 4. 获得父类的prototype
 * 缺点：
 * 1. 父类的构造函数执行了两遍
 * 2. B的属性和B的prototype中的属性可能重名，导致后者被屏蔽
 */
function A() {
  this.name = 'Michael';
}
function C() {
  this.age = 30;
}
function B() {
  A.apply(this, arguments); // 修改A中this指向并执行，传参
  C.apply(this, arguments);
  this.age = 30;
  B.prototype = new A();
  B.prototype.setAge = function(age) {
    this.age = age;
  }
}
/**
 * 组合寄生（完美继承）
 */
function A() {
  this.name = 'Michael';
}
function C() {
  this.age = 30;
}
function B() {
  A.apply(this, arguments); // 修改A中this指向并执行
  C.apply(this, arguments);
  this.age = 30;
  B.prototype.__proto__ = A.prototype; // 老的浏览器不能直接访问__proto__，可以使用下面的代替

  // B.prototype = new F();
  // B.prototype.constructor = B;

  // B.prototype = Object.create(A) // 这种方式同上，ES5支持
  // B.prototype.constructor = B;
  B.prototype.setAge = function(age) {
    this.age = age;
  }
}

function F() {
  F.prototype = A.prototype; // 去除A的属性
  return new F();
}
