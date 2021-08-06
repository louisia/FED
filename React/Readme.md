# React入门
## React简介
### JavaScript的缺陷
- 原生的JavaScript操作DOM繁琐，效率低
- 使用JavaScript直接操作DOM，浏览器会进行大量重绘重排
- 原生JavsScript没有组件化编码方案，代码复用率低

### React特点
- 采用组件化模式，声明式编码、提高开发效率及组件复用率
    - 声明式编码，对应于命令式编码
- 在React Native中可以使用React语法进行移动端开发
- 使用**虚拟DOM+优秀的Diffing**算法，尽量减少与真实DOM的交互

### 学习React之前需要掌握的JavaScript基础知识
- 判断this的指向
- class（类）
- ES6语法规范
- npm包管理器
- 原型、原型链
- 数组常用方法
- 模块化

## hello_react案例
### 官网
- 中文：
- 英文：
### 基本使用

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>

<body>
    <!--
        创建容器
    -->
    <div id="test">

    </div>

    <script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
    <script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
    <script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>

    <script type="text/babel"> // 此处必须写babel
        // 1. 创建虚拟DOM
        const VDOM = <h1>Hello React</h1> //此处一定不要写引号，因为不是字符串
        // 2. 渲染虚拟DOM到页面
        ReactDOM.render(VDOM, document.getElementById("test"))

    </script>
</body>
</html>
```

- 相关js库：babel.min.js、react-dom.development.js（扩展库）、react.development.js（核心库），引入时react必须在react-dom之前引入

## 创建虚拟DOM的两种方式
### js ---> jsx
### jsx
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>

<body>

    <div id="test">

    </div>

    <script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
    <script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
    <script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>

    <script type="text/babel"> // 此处必须写babel
        // 1. 创建虚拟DOM
        const VDOM = <h1 id="title"><span>Hello React</span></h1> //此处一定不要写引号，因为不是字符串
        // 2. 渲染虚拟DOM到页面
        ReactDOM.render(VDOM, document.getElementById("test"))

    </script>
</body>

</html>
```
### js
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>

<body>

    <div id="test">

    </div>

    <div id="test2">

    </div>

    <script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
    <script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>

    <script type="text/javascript">
        // 1. 原生js创建虚拟DOM
        const VDOM = React.createElement("h1", { id: "title" }, React.createElement("span", {}, "hello react"))
        // 2. 渲染虚拟DOM到页面
        ReactDOM.render(VDOM, document.getElementById("test"))


    </script>
</body>

</html>
```
### 关于虚拟DOM
- 本质是Object类型的对象（一般对象）
- 虚拟DOM比较“轻”，真是DOM比较“重”，因为虚拟DOM是React内部在用，无需真实DOM上那么多属性
- 虚拟DOM最终会被React转化城真实DOM，呈现在React上

## jsx语法规则
- 全称：JavaScript XML
- react定义的一种类似与XML的JS扩展语法：JS + XML
- 本质是React.createElement(component,props,……children)方法的语法糖
- 作用：用来简化创建虚拟DOM
    - 写法：var ele=<h1>Hello JSX<h1>
    - 注意1：不是字符串，也不是HTML/XML标签
    - 注意2：最终产生的就是一个JS对象
- 标签名任意：可以是html标签或其他
- 语法规则：
    - 定义虚拟DOM，不要写引号
    - 标签重混入**JS表达式**时需要用{}
    - 样式的类名不要用class，要用className
    - 内联样式要用style={{key:value}}的形式
    - jsx只允许一个根标签
    - 标签必须闭合
    - 标签首字母
        - 若小写字母开头，则将标签改为html同名元素，若html中无该标签对应的同名元素则报错
        - 若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错
### 表达式VS语句
- 一个表达式会产生一个值，可以放在任何一个需要值的地方
- 语句：
    - if(){}
    - for(){}
    - switch(){case:XXX}

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .title {
            background-color: orange;
            width: 200px;
        }
    </style>

</head>

<body>

    <div id="test">

    </div>

    <script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
    <script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
    <script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>

    <script type="text/babel"> // 此处必须写babel

        const data = ["Angular", "React", "Vue"]
        // 1. 创建虚拟DOM
        const VDOM = (
            <div>
                <h1>前端JS框架列表</h1>
                <ul >
                    {
                        data.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>

        ) 
        // 2. 渲染虚拟DOM到页面
        ReactDOM.render(VDOM, document.getElementById("test"))

    </script>
</body>

</html>
```



## 模块化与组件
### 模块
- 向外提供特定功能的js程序，一般就是一个js文件
- 作用：复用js、简化js编写、提高js运行效率
### 组件
- 用来实现局部功能效果代码和资源的集合(html、css、js)
- 复用编码、简化项目编写、提高运行效率
### 模块化
- 当应用的js都以模块来编写，就是模块化的组件
- 同理组件化


# React面向组件编程
## 基本理解和使用
- 安装react开发者工具：chrome extension
## 效果
### 函数式组件
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

    </style>

</head>

<body>

    <div id="test">

    </div>

    <script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
    <script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
    <script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>

    <script type="text/babel"> // 此处必须写babel
        // 1.创建函数式组件
        function MyComponent() {
            return <h1>我是用函数定义的组件（适用于简单的组件）</h1>
        }

        // 2.渲染组件到页面
        ReactDOM.render(<MyComponent />, document.getElementById("test"))

    </script>
</body>

</html>
```
### 类式组件