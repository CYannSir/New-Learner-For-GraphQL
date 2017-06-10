# GraphQL

Author CYann
>积一时之跬步，臻千里之遥程

![](D:\CYann_Work\Js_GraphQL\rec\GraphQL Logo.png)

##Overview / 前瞻

## Background / 背景

###研究背景

​        从Graphql的技术研究是从离开大作业小组之后选择研究的技术，由于之前功夫的白费，所以在选题上也是尽量选择轻量级的、易理解的技术方面。在阅读完 [500 Lines or less -Dagoba: an in-memory graph database](http://www.aosabook.org/en/500L/dagoba-an-in-memory-graph-database.html) 之后，结合现如今的大数据趋势，我逐渐对 图数据库 `Graph Database`  产生了浓厚的兴趣.渐渐的，了解了`JavaScript` 前端的目前的技术，决定研究`GraphQL` 。后续发现 `` Graph Database`` 其实和本文所说的`GraphQL` 不是一个概念

### 研究日记

​	2017-6-5-早 建立`Github`项目库和初始化，编写初步的`Readme`，并进行与 `VS Code` Git 的连接和测试

​	2017-6-5-中 开始尝试对于`GraphQL本地服务器的搭建`，使用的系统为`Windows 10`

​	2017-6-6-A Windows 10上无法搭建该本地服务器，尝试使用`Ubuntu 16.04`系统搭建该本地服务器 

​	2017-6-7-A 在`Github`上找到一个库是基于`Graphql-Github`的一个官方引导学习网站（运行该代码后，建立了一个本地服务```http://localhost:8444```，使用浏览器登录可以进行阅读官方文档）；在官方的引导下，搭建必要的依赖，一步步实现测试的```Demo```，```HelloWorld```,```Express搭建服务器实现HelloWorld```等操作；为后续实现Client的测试Demo埋下伏笔

​	2017-6-8-晚 对`GraphQL`所有文献进行细致的阅读，获取关键性的信息和知识

​	2017-6-9-晚 对```GraphQL``` 官方文档进行细致翻译和研究

​	2017-6-10-A

​	2017-6-11-A

###技术背景

​        在 2015 React 欧洲大会上，Lee Byron 介绍了 Facebook 的 GraphQL ，包含 GraphQL 背后的故事，查询语句的示例，还有核心的概念。  

​	从 2011 开始，Facebook 开始越来越重视移动端，一支很小的团队开始去做 Android 与 iOS 应用。Facebook 的强项是 Web，也非常的了解 Web ，而且在这方面储备了大量的技术。当年 Facebook 的主要平台就是传统的 浏览器 ```Web 服务器 ``` 数据服务 的组合，Web 服务器响应浏览器的请求，到数据服务那里提供出数据，然后再交给浏览器去显示。

​	他们打算尽可能的使用现有的代码去实施移动端的应用，所以一开始 Facebook 的移动应用就是一个浏览器，加上了一个本地的壳，内容基本上就是简单的定制以后的移动 Web 网站。这样的好处就是可以使用所有的现有的 Web 平台上的东西。这样工程师们也可以使用平时创建东西的方法。这种方法在短时间内也得到了很大的成功，并且让公司把重点放在移动端上。

​	一开始都还好，不过在移动应用上添加越来越多的功能以后，就有点吃力了，移动浏览器经常会消耗掉所有的内存，让应用崩溃。另一面，在 Web 上，Facebook 仍然快速的生成，而移动端有点跟不上脚步了。这让他们决定要去做真正的本地的移动应用。

​	2012 年开始，Facebook 要开始开发真正的本地应用。 这跟 Web 很不一样，所以开始重新思考应用的平台。Web 就是请求一个 URL ，返回一堆 HTML。而本地移动应用，为了给应用提供需要的数据，填充数据模型 ，显示视图，要想的问题是，怎么去请求，准备，传递这些数据。而当时 Facebook 现有的服务器主要功能还是只提供 HTML。

​	工程师们试了一些方法，比如 RESTful API，对于 Facebook 这种复杂的应用，可能需要定义很多的端点，不同的端点返回来的数据只是略有不同，造成了资源浪费，而且还需要大量的逻辑去处理这些数据。后来他们又试了``` FQL```， 这是 Facebook 的公共接口，应该是一种查询语言。功能很强大，而且返回来的数据也有很好的结构。不好的地方是，查询用的语言非常难理解，比如多个``` JOIN``` ，主键什么的，所以经常会出错。

​	除了这些表面上遇到的问题，工程师们也非常不喜欢这些方法表达数据的形式，比如我们平时想像的数据并不是一大堆查询语言，```LEFT JOIN```，```RIGHT JOIN ```..   也不是资源的地址。而对象的形式非常适合表达数据，一个对象，里面有一些属性，不同的属性对应不同的值。几个工程师开始了现在的 ```GraphQL```，一种用对象，属性，关系的，有点像图形的方式来表达想要的数据。

​	三年前，Facebook 用了 ```GraphQL``` 做了第一款真正的本地移动应用，现在，应用每天会接受 260 亿的请求。[1]

​	在2016，```Github```宣布开放了一套使用```GraphQL```开发的公共```API``` [2]，以下为```Github``` 宣布使用```GraphQL``` 的告示：

> We’ve often heard that our REST API was an inspiration for other companies; countless tutorials refer to our endpoints. Today, we’re excited to announce our biggest change to the API since we snubbed XML in favor of JSON: we’re making the GitHub API available through GraphQL.																		                                                                                                                                      ——Github



##Introduction / 简介
​       GraphQL是一种查询语言的设计提供了一个直观并且灵活的描述他们的数据请求和互动的语法和系统来建立客户端应用程序


https://dev-blog.apollodata.com/the-anatomy-of-a-graphql-query-6dffa9e9e747

##Writing code for a Demo / 测试Demo编写
###Prerequisites / 前提
​       环境搭建需要有```Node v6```以上的版本安装在机子上。接着需要在你的电脑上创建一个新的工程文件夹，之后在该目录下安装```GraphQL.js``` 。[注意：使用终端或者Win+R cmd]
```
npm init
npm install graphql --save
```
![](D:\CYann_Work\Js_GraphQL\rec\2.png)
###Writing Code / 简单实现GraphQL
​       编写程序“Hello World” ：新建一个文件```server.js``` ,在这个文件里，我们需要定义一个```schema```定义出一个```Query``` 类型，同时需要一个```API root``` ，每个API的节点都需要一个```resolver```的函数。  
```server.js```
```javascript
var { graphql, buildSchema } = require('graphql');

// 构造出一个schema，包含Query类型
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// API root 为每一个节点提供了一个resolver的函数
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

// 执行查询语句query '{ hello }'，并且打印结果
graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});
```
​      接着，运行该文件
```
node server.js
```
​      运行得到的结果：
```json
{ data: { hello: 'Hello world!' } }
```
![](D:\CYann_Work\Js_GraphQL\rec\1.png)

###Writing Code / 简单实现GraphQL服务器
​      使用```Express``` 是最简单的方式去运行
```
npm install express express-graphql --save
```
![](D:\CYann_Work\Js_GraphQL\rec\3 截取部分.png) 
​      在以上`HelloWorld` 的基础上，进行部分的修改，使得可以使用`express` 来运行一个网络服务并且替代直接调用`GraphQL`函数执行查询，使用`express-graphql`部署`GraphQL Api Server` 在`"/graphql"`的HTTP的节点上

```javascript
var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// 构造出一个schema，包含Query类型
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);


// API root 为每一个节点提供了一个resolver的函数
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
```
​      通过运行以下命令开启一个```http://localhost:4000/graphql``` ,如果你使用```Chrome```或者其他web浏览器，你就可以看到一个可以键入你的查询请求的一个接口网站
```
node server.js
```
![](D:\CYann_Work\Js_GraphQL\rec\4. 服务器运行.png) 
![](D:\CYann_Work\Js_GraphQL\rec\4 服务器搭建.png)

###Writing Code / 简单实现GraphQL客户端
​      我们先像以上的步骤部署出一个```GraphQL server``` 地址为```http://localhost:4000/graphql``` ,我们可以将我们想要查询的写进```terminal```，例子如下：
```
curl -X POST \
-H "Content-Type: application/json" \
-d '{"query": "{ hello }"}' \
http://localhost:4000/graphql
```
​      上述的输出将是以```JSON``` 的形式
```JSON
{"data":{"hello":"Hello world!"}}
```

​      当然，也可以通过浏览器进行发送```GraphQL``` 。先打开```http://localhost:4000```并且打开```开发者工具(快捷键：F12)```，
输入以下代码：
```javascript
var xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open("POST", "/graphql");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.onload = function () {
  console.log('data returned:', xhr.response);
}
xhr.send(JSON.stringify({query: "{ hello }"}));
```
​      你将看到返回的数据，如下：
```javascript
data returned: Object { hello: "Hello world!" }
```
![](D:\CYann_Work\Js_GraphQL\rec\5 console模拟客户端.png) 




##Summarize / 总结

---
***
1. 作者 王皓 文章名称 [GraphQL 介绍](https://ninghao.net/blog/2857)  
   发布时间 2015-08-17  更新时间  2016-10-08
2. 作者 局长 文章名称[Github 为什么开放了一套 GraphQL 版本的 API](http://www.oschina.net/news/78302/why-github-open-graphql-api)
   发布时间2016-10-23
3. Github 项目名称：[graphql.github.io](https://github.com/graphql/graphql.github.io)  ， 内有Facebook提供的```GraphQL``` 官方文档




