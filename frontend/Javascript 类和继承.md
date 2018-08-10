
```js
/** 
 * 原始模式
 * 缺点
 * 1. 多个实例书写麻烦
 * 2. 实例与原型没有联系
 */
// var Cat = {
//     name: '',
//     color: ''
// };
// var cat1 = {};
// cat1.name = '大毛';
// cat1.color = '黄色';
// var cat2 = {};
// cat2.name = '二毛';
// cat2.color = '黑色';

/**
 * 原始模式改进, 通过函数返回对象
 * 缺点
 * 1. 无法确定实例和原型的关系
 * 2. 实例之间没有联系
 * 优点
 * 1. 可以设置私有属性
 */
function Cat(name, color) {
    var myName = 'my '+ name;
    return {
        name: myName,
        color: color
    }
}
var cat1 = Cat('大毛', '黄色');
var cat2 = Cat('二毛', '黑色');
console.log(cat1 instanceof Cat)//false, 无法确定实例和原型之间的关系

/**
 * 构造函数方法
 * 优点
 * 1. 可以通过instanceof判断实例与原型之间的关系
 * 2. 可以设置共有属性和方法
 * 3. 可以设置私有属性和方法
 */

var Fruit = function (name, color) {
    this.name = name;
    this.color = color;
    var price = 0; //私有变量，通过函数改变，不会影响其他实例
    Fruit.prototype.setPrice = function (p) {
        price = p;
    }
    Fruit.prototype.getPrice = function () {
        console.log(this.name + ' costs ' + price);
    }
};
    Fruit.prototype.sell = "no";//共有属性，通过函数修改，会影响其他实例
    Fruit.prototype.getDetail = function () {
        console.log(this.name + ' is ' + this.color + ' $' + Fruit.prototype.sell);
    }
    Fruit.prototype.setDetail = function (name, color) {
        this.name = name;
        this.color = color;
    }
    Fruit.prototype.setSell = function (isSell) {
        Fruit.prototype.sell = isSell;
    }


var orange = new Fruit('Orange', 'orange');
orange.setSell("Yes")
orange.setPrice(20);
orange.getPrice();
orange.getDetail();
console.log(orange)
var banana = new Fruit('Banana', 'yellow');
banana.getPrice();
banana.getDetail();
console.log(banana)
console.log(orange instanceof Fruit) // Fruit(构造函数)的prototype存在于orange的原型链上
console.log(orange.hasOwnProperty('constructor'));//false
/**
 * new标识符的作用是
 * 1. 创建一个空对象
 * 2. 将实例的__proto__指向类的prototype
 * 3. 将this绑定到实例
 * 
 * 本例中，var orange = new Fruit('Orange', 'orange') 这行代码相当于
 * var orange = {};
 * orange.__proto__ = Fruit.prototype;
 * var result = Fruit.call(orange, 'Orange', 'orange');
 * return typeof result === 'object' ? result : orange;
 * 
 * 原型链为
 * orange.__proto__ -> Fruit.prototype -> Object.prototype -> null
 */


 /**
  * 极简主义法
  * 优点
  * 1. 不用设置this和prototype，代码清晰
  * 2. 可以设置私有属性和方法。
  * 3. 可以设置共有属性和方法。
  * 缺点
  * 1. 无法确定实例与类的关系。
  */

var Thing = {
    createNew: function () {
        var obj = {};
        obj.place = "Universe";
        return obj; 
    }
}
var Shape = {
    num: 0,
    getNumOfIns: function () {
        console.log('Num of Instanace: '+Shape.num);
    },
    createNew: function (name, border) {
        var obj = Thing.createNew(); //继承Thing的属性和方法
        Shape.num += 1;
        obj.name = name;
        obj.border = border;
        obj.getNumOfIns = Shape.getNumOfIns;
        return obj;
    }
};
var trigle = Shape.createNew("trigle", "3");
var rec = Shape.createNew('rec', '4');
console.log(trigle)
trigle.getNumOfIns();
console.log(trigle.getNumOfIns === rec.getNumOfIns) //true, 方法共用


```
