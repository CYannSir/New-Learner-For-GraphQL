# The Research Report on GraphQL


Author :  CYann
No. : 31401417
Teacher: Huomm
Publication time : 2017-06-11
>积一时之跬步，臻千里之遥程

![](D:\CYann_Work\Js_GraphQL\rec\GraphQL Logo.png)

## 背景 / Background

###研究背景 / Story 

​        从Graphql的技术研究是从离开大作业小组之后选择研究的技术，由于之前功夫的白费，所以在选题上也是尽量选择轻量级的、易理解的技术方面。在阅读完 [500 Lines or less -Dagoba: an in-memory graph database](http://www.aosabook.org/en/500L/dagoba-an-in-memory-graph-database.html) 之后，结合现如今的大数据趋势，我逐渐对 图数据库 `Graph Database`  产生了浓厚的兴趣.渐渐的，了解了`JavaScript` 前端的目前的技术，决定研究`GraphQL` 。后续发现 `` Graph Database`` 其实和本文所说的`GraphQL` 不是一个概念

### 研究日记 / Diary

​	2017-6-5-早 建立`Github`项目库和初始化，编写初步的`Readme`，并进行与 `VS Code` Git 的连接和测试

​	2017-6-5-中 开始尝试对于`GraphQL本地服务器的搭建`，使用的系统为`Windows 10`

​	2017-6-6-A Windows 10上无法搭建该本地服务器，尝试使用`Ubuntu 16.04`系统搭建该本地服务器 

​	2017-6-7-A 在`Github`上找到一个库是基于`Graphql-Github`的一个官方引导学习网站（运行该代码后，建立了一个本地服务```http://localhost:8444```，使用浏览器登录可以进行阅读官方文档）；在官方的引导下，搭建必要的依赖，一步步实现测试的```Demo```，```HelloWorld```,```Express搭建服务器实现HelloWorld```等操作；为后续实现Client的测试Demo埋下伏笔

​	2017-6-8-晚 对`GraphQL`所有文献进行细致的阅读，获取关键性的信息和知识

​	2017-6-9-晚 对```GraphQL``` 官方文档进行细致翻译和研究

​	2017-6-10-A 写入测试Demo

​	2017-6-11-A 写入所有基础知识，编写答辩PPT

​	2017-6-12-M 答辩

###技术背景 / History of GraphQL
####Web早期
​        早期的Web应用就是```静态HTML文档```。演化到网站想包含存在数据库（例如SQL）里的动态内容，并通过```JavaScript```来添加交互功能。绝大多数的Web内容都通过桌面电脑的Web浏览器来访问的，看起来一切都很美好
![](D:\CYann_Work\Js_GraphQL\rec\web早期.png)

####REST: API
​        快进到2007年Steve Jobs介绍iPhone的时候，除了智能手机对世界、文化和交流的深远影响，也让开发者的工作变复杂了很多。智能手机破坏了开发现状，短短几年后，我们突然就有了桌面电脑、iPhone、Android和平板电脑
​        作为回应，开发者开始用```RESTful API```给形状各异、尺寸不同的应用提供数据，新的开发模型差不多是这样：
![](D:\CYann_Work\Js_GraphQL\rec\REST API.png)

​        旧式 REST 模型如下图所示，先订购比萨饼，然后请商店送货上门，接着再打电话给干衣店上门取衣服。三个店铺，三个电话。
![](D:\CYann_Work\Js_GraphQL\rec\REST Example.png)

####GraphQL: API
​        GraphQL是一种API查询语言，由Facebook设计并开源。可以把GraphQL当做REST的备选项来构建API，而REST是一种概念模型，可以用来设计和实现API。GraphQL是一种标准化的语言、type系统和在客户端和服务器之间建立起强约定的规范定义。让所有设备之间通信有了一套标准语言，简化了创建大型跨平台应用的过程
​        用GraphQL的话，图就变成了这样子:
![](D:\CYann_Work\Js_GraphQL\rec\GRAPHQL.png)

​        GraphQL 就像一个私人助理。只需要给出三个地方的地址，然后告诉 Ta 你想要什么（“衣服要干洗，一个大比萨饼，两打鸡蛋” ），然后就可以坐等结果了。
![](D:\CYann_Work\Js_GraphQL\rec\Grapql example.png)

​        在 2015 React 欧洲大会上，Lee Byron 介绍了 Facebook 的 GraphQL ，包含 GraphQL 背后的故事，查询语句的示例，还有核心的概念。  

​	从 2011 开始，Facebook 开始越来越重视移动端，一支很小的团队开始去做 Android 与 iOS 应用。Facebook 的强项是 Web，也非常的了解 Web ，而且在这方面储备了大量的技术。当年 Facebook 的主要平台就是传统的 浏览器 ```Web 服务器 ``` 数据服务 的组合，Web 服务器响应浏览器的请求，到数据服务那里提供出数据，然后再交给浏览器去显示。

​	他们打算尽可能的使用现有的代码去实施移动端的应用，所以一开始 Facebook 的移动应用就是一个浏览器，加上了一个本地的壳，内容基本上就是简单的定制以后的移动 Web 网站。这样的好处就是可以使用所有的现有的 Web 平台上的东西。这样工程师们也可以使用平时创建东西的方法。这种方法在短时间内也得到了很大的成功，并且让公司把重点放在移动端上。

​	一开始都还好，不过在移动应用上添加越来越多的功能以后，就有点吃力了，移动浏览器经常会消耗掉所有的内存，让应用崩溃。另一面，在 Web 上，Facebook 仍然快速的生成，而移动端有点跟不上脚步了。这让他们决定要去做真正的本地的移动应用。

​	2012 年开始，Facebook 要开始开发真正的本地应用。 这跟 Web 很不一样，所以开始重新思考应用的平台。Web 就是请求一个 URL ，返回一堆 HTML。而本地移动应用，为了给应用提供需要的数据，填充数据模型 ，显示视图，要想的问题是，怎么去请求，准备，传递这些数据。而当时 Facebook 现有的服务器主要功能还是只提供 HTML。

​	工程师们试了一些方法，比如 RESTful API，对于 Facebook 这种复杂的应用，可能需要定义很多的端点，不同的端点返回来的数据只是略有不同，造成了资源浪费，而且还需要大量的逻辑去处理这些数据。后来他们又试了``` FQL```， 这是 Facebook 的公共接口，应该是一种查询语言。功能很强大，而且返回来的数据也有很好的结构。不好的地方是，查询用的语言非常难理解，比如多个``` JOIN``` ，主键什么的，所以经常会出错。

​	除了这些表面上遇到的问题，工程师们也非常不喜欢这些方法表达数据的形式，比如我们平时想像的数据并不是一大堆查询语言，```LEFT JOIN```，```RIGHT JOIN ```..   也不是资源的地址。而对象的形式非常适合表达数据，一个对象，里面有一些属性，不同的属性对应不同的值。几个工程师开始了现在的 ```GraphQL```，一种用对象，属性，关系的，有点像图形的方式来表达想要的数据。

​	三年前，Facebook 用了 ```GraphQL``` 做了第一款真正的本地移动应用，现在，应用每天会接受 260 亿的请求。[1]

​	在2016，```Github```宣布开放了一套使用```GraphQL```开发的公共```API``` [2]，以下为```Github``` 宣布使用```GraphQL``` 的告示：

> We’ve often heard that our REST API was an inspiration for other companies; countless tutorials refer to our endpoints. Today, we’re excited to announce our biggest change to the API since we snubbed XML in favor of JSON: we’re making the GitHub API available through GraphQL.																		                                                                                                                                      ——Github[5]



##简介 / Introduction  
​       GraphQL是一种应用层查询语言的设计提供了一个直观并且灵活的描述他们的数据请求和互动的语法和系统来建立客户端应用程序。
![](D:\CYann_Work\Js_GraphQL\rec\graphql intro.png)

###GraphQL 数据类型
####标量类型 / Scala
```Int``` ：整数，有符号的32位整型，对应 JavaScript 的 Number
```Float``` ：浮点数，有符号的双精度浮点型，对应 JavaScript 的 Number
```String``` ：字符串，UTF‐8字符序列，对应 JavaScript 的 String
```Boolean ```：布尔值，对应 JavaScript 的 Boolean
```ID``` ：ID 值，是一个序列化后值唯一的字符串，常用于获取数据的唯一标志，或缓存的键值，它也会被序列化为String，但可读性差。
​       上述为```GraphQL 规范``` 的基本类型。以下是简单的示例，修改了测试的demo代码```server.js```：
```javascript
/**
 * 基础类型测试server.js
 */
var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

//建立一个Schema ， 使用Graphql Schema 语言
var schema = buildSchema(`
  type Query {
    quoteOfTheDay: String
    random: Float!
    rollThreeDice: [Int]
  }
`);

//root对每一个API断点都提供了一个resolver功能
var root = {
  quoteOfTheDay: () => {
    return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
  },
  random: () => {
    return Math.random();
  },
  rollThreeDice: () => {
    return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
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

​       查询语句如下：
```graphql
{
  quoteOfTheDay
  random
  rollThreeDice
}
```
![](D:\CYann_Work\Js_GraphQL\rec\8.png)

####枚举 / Enum
​       枚举类型是标量类型的变体，不仅适用于可验证性，还提高了维护性，它同样被序列化为String。用于表示可枚举数据结构的类型，定义形如下例子：
```graphql
enum Unit {
	MM //MM代表米做单位
	mm //mm代表毫米做单位。
}
```
####对象 / Object
​       组成Schema最常用的是对象类型,它包含各种字段。例子：定义了一个```User```对象，包含```name(名字)```、```sex(性别)```、```intro(介绍)```属性字段，而这些属性字段都是标量```String类型```，当然属性也可以是对象类型。定义如下：
```graphql
type User{
　　name: String
　　sex: String
　　intro: String
}
```
####列表 / List
​       列表是其他类型的封装，通常用于对象字段的描述。通常用```[]```表示，示例定义如下：
```
type User{
  name: String
  sex: String
  intro: String
  skills: [String]
}
```
​       Skills就是一个列表集合，有点类似一个数组
####非空 / Non-Null
​       在类型声明后，使用```!``` 声明非空，示例如下：
```graphql
type Query {
  user(id:Int!):User
}
type User{
  name: String!
  sex: String
  intro: String
  skills: [String]!
}
```
​      以上的```user```查询接口，其参数为非空的```id```。我们做以下的例子，即不传入参数```id```会怎么样
```graphql
query{
  user {
    name
    sex
    intro
  }
}
```
​      果不其然，反馈异常
```JSON
{
  "errors": [
    {
      "message": "Field \"user\" argument \"id\" of type \"Int!\" is required but not provided.",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ]
    }
  ]
}
```
​      那么如果是```user```的```name```为非null，一旦服务器返回的```name```为```null```，则会反馈如下异常：
```json
{
  "data": {
    "user": null
  },
  "errors": [
    {
      "message": "Cannot return null for non-nullable field User.name.",
      "locations": [
        {
          "line": 3,
          "column": 5
        }
      ],
      "path": [
        "user",
        "name"
      ]
    }
  ]
}
```
​      还需要注意一件事情，注意区别 ```skills: [String]! ```与 ```skills: [String!] ```两种写法的区别
```markdown
skills: [String]!：List不能为null
skills: [String!]：List元素不能为null
```
####操作 / Operation
​      操作的请求模型[6]，如下图所示：
![](D:\CYann_Work\Js_GraphQL\rec\query.svg)
​      上图所示，```GraphQL 规范```有两种操作
```markdown
query：仅获取数据（fetch）的只读请求
mutation：获取数据后还有写操作的请求
```

​      这边引用了```APOLLO 社区```博主的文章内容[7]，来更好的理解关键的语法点（PS：纯个人翻译，翻译错误，请指出）：
![解释图解](D:\CYann_Work\Js_GraphQL\rec\query example.png)
```markdown
Operation type: 可以查询(Query)、更改(mutation)、订阅(subscription)。描述了需要操作的操作类型

Operation name: 描述了需要操作的名称的名字，便于在出错是查找原因和查询

Variable definitions: 声明要提供的变量类型的地方，GraphQL是静态类型的，它可以验证你是传递正确的变量
```



####查询 / Query
​      格式如下：
```graphql
query queryName{
	operation
}
```
![解释图解](D:\CYann_Work\Js_GraphQL\rec\query query.png)
```markdown
Field: 请求的数据单位，它最终作为JSON响应数据中的一个字段。

Arguments: 连接到特定字段的一组键值对。这些被传递到这个字段的服务器端执行，并影响它如何解决。参数可以是文字值，如上面的查询或变量。注意，参数可以出现在任何字段上，甚至可以在操作中嵌套在字段中。
```
​      举个例子：
```graphql
query userQuery{
  user(id:0){
    name
    sex
    stature
  }
  users{
    name
    sex
    stature
  }
}
```
​      再精简一点：
```graphql
{
  user(id:0){
    name
    sex
    stature
  }
  users{
    name
    sex
    stature
  }
}
```

####维护 / Mutation
​     ```Mutataion```用来维护数据的，格式和查询类似，如下：
```graphql
mutation mutationName{
	operation
}
```
​      ```Mutaion```关键字是不可以省略的，否则被认为是Query而找不到操作名，举个例子:
```graphql
mutation{
  addUser(name:"testUser",sex:"男",intro:"简介",skills:[]){
    name
    sex
    intro
  }
}
```
####接口 / Interface
​     类似其他语言，GraphQL也有接口的概念，方便查询时返回统一类型，接口是抽象的数据类型，因此只有接口的实现才有意义，如
```graphql
interface Animal{
　　name: String!
}
type Dog implements Animal{
　　name: String!
　　legs: Int!
}
type Fish implements Animal{
　　name: String!
　　tailColor: String!
}
```
​     上面的接口Animal有两个实现：Dog和Fish，它们都有公共字段name
```graphql
type Query {
  animals:[Animal]!
}
```
​     而客户端的查询需要使用下面的```Fragment```，稍后展示
####联合 / Union
​     联合查询，类似接口式的组合，但不要求有公共字段，使用```union```关键字来定义，如
```graphql
type Dog{
　　chinaName: String!
　　legs: Int!
}
type Fish{
　　englishName: String!
　　tailColor: String!
}
union Animal = Dog | Fish
```
​      则```Animal```可以是Dog也可以是Fish，服务端定义查询可以和上面的接口相同，客户端查询也需要使用```Fragment```，稍后展示
####片段 / Fragment
​      片段是 GraphQL 的主要组合数据结构，通过片段可以重用重复的字段选择，减少 query 中的重复内容。片段又分为 ```FragmentSpread``` 和 ```InlineFragment```
​      以下是没有片段的正常查询语句
```graphql
query noFragments {
  user(id: 4) {
    friends(first: 10) {
      id
      name
      profilePic(size: 50)
    }
    mutualFriends(first: 10) {
      id
      name
      profilePic(size: 50)
    }
  }
}
```
​      可以发现重复选择集合：
```graphql
{
  id
  name
  profilePic(size: 50)
}
```
​      通过片段的概念，可以简化查询，如下：
```graphql
query withFragments {
  user(id: 4) {
    friends(first: 10) {
      ...friendFields
    }
    mutualFriends(first: 10) {
      ...friendFields
    }
  }
}

fragment friendFields on User {
  id
  name
  profilePic(size: 50)
}
```
​      使用片段时需要加上```...```操作符表示展开片段内容
![解释图解](D:\CYann_Work\Js_GraphQL\rec\fragment.png)
```markdown
Fragment name: 每个片段的名字有一个graphql文件内是独一无二的。这是用于引用操作中或其他片段中的片段的名称。碎片名称也可以用于服务器端日志记录，类似于操作名，因此我们建议使用显式和有意义的名称。如果你把你的片段命名得很好，你可以追踪你的代码中哪一部分定义了这个片段，如果你想优化你以后的数据。

Type condition: graphql操作总是在查询(query)，更改(mutation)，或订阅(subscription)类型在您的架构，但片段可以用于任何选择集。因此，为了孤立地对您的模式进行验证，您需要指定它可以使用的类型，这就是类型条件出现的地方。
```
​      内联片段

```graphql
query inlineFragmentTyping {
  profiles(handles: ["zuck", "cocacola"]) {
    handle
    ... on User {
      friends {
        count
      }
    }
    ... on Page {
      likers {
        count
      }
    }
  }
}
```
![解释图解](D:\CYann_Work\Js_GraphQL\rec\inlineframent.png)
```markdown
Fragment spread: 当你使用一个片段里面的一个操作或另一个片段，你把“…”接着是片段名。这称为片段扩展，它可以出现在与命名的片段类型条件匹配的任何选择集中

Inline fragment: 当您只需根据结果的类型执行某些字段，但不希望将其拆分为单独的定义时，可以使用内联片段。这就像一个命名的片段，但作为查询的一部分被编写。内联片段的一个区别是它们实际上不需要有一个类型条件，并且可以只使用一个指令使用，我们在下面的例子中会看到。
```
​      内联片段在单个查询上会比较方便，
​      外联片段在多个查询上更简洁，易明白
​      如上面的接口示例，Dog和Fish都是接口Animal的实现，有接口的公共字段name，简单的内联
```graphql
//内联
{
  animals{
    name
    ... on Dog{
      legs
    }
    ... on Fish{
      tailColor
    }
  }
  animalSearch(text:"dog"){
    name
    ... on Dog{
      legs
    }
    ... on Fish{
      tailColor
    }
  }
}
```

```
//外联
{
  animals{
    ... animalName
    ... dogLegs
    ... fishTail
  }
  animalSearch(text:"dog"){
    ... animalName
    ... dogLegs
    ... fishTail
  }
}
fragment animalName on Animal {
  name
}
fragment dogLegs on Dog{
  legs
}
fragment fishTail on Fish{
  tailColor
}
```

####指令 / Directive
​      指令要解决的是 query 执行时字段参数无法覆盖的情况，例如引入或者忽略某个字段。指令为 GraphQL 执行添加了更多的信息
```markdown
fragment @skip(if: $isTrue) 当$isTrue为真(true)时不使用fragment；
fragment @include(if: $isTrue) 当$isTrue为真(true)时使用fragment；
```
​      参数变量是通过```query```或```mutation```传递的；变量形如```$withName:Boolean!```，以```$```开头，以类型结尾，类型必须是标量(scalar)、枚举(enum)或输入类型(input)
```graphql
query(
  $noWithDog:Boolean!,
  $withName:Boolean!,
  $withFish:Boolean!
){
  animals{
    name @include(if:$withName)
      ... dogQuery @skip(if:$noWithDog)
      ... on Fish @include(if:$withFish){
      tailColor
    }
  }
}
fragment dogQuery on Dog{
  legs 
}
```
​      传入参数```$noWithDog(是否带着狗狗)```、```$withName(是否带着Name)```、```$withFish(是否带着鱼儿)```参数变量
```graphql
{
  "noWithDog": true,
  "withName": true,
  "withFish": true
}
```
​      查询结果
```json
{
  "data": {
    "animals": [
      {
        "name": "dog"
      },
      {
        "name": "fish",
        "tailColor": "red"
      }
    ]
  }
}

```

##Demo编写 / Writing  Demo 
###前提 / Prerequisites 
​       环境搭建需要有```Node v6```以上的版本安装在机子上。接着需要在你的电脑上创建一个新的工程文件夹，之后在该目录下安装```GraphQL.js``` 。[注意：使用终端或者Win+R cmd]
```
npm init
npm install graphql --save
```
![](D:\CYann_Work\Js_GraphQL\rec\2.png)
### 简单实现GraphQL / Writing Code 
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

### 简单实现GraphQL服务器 /  Writing Code 
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

###简单实现GraphQL客户端 / Writing Code 
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

### 简单实现GraphQL的参数传递 / Writing Code 
​      首先是创建一个```Schema``` ，如下：
```graphql
type Query {
  rollDice(numDice: Int!, numSides: Int): [Int]
}
```
​      上述代码中```Int!``` 指的是```numDice``` 不能为空。（PS：这样的好处是在后期处理数据的时候，我们可以少掉一些数据的验证逻辑） 
​      当```root resolver``` 函数有带参数，那么就会把第一个参数传给函数，所以进行对之前的```server.js``` 的```root resolver```进行修改，如下：
```javascript
var root = {
  rollDice: function (args) {
    var output = [];
    for (var i = 0; i < args.numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (args.numSides || 6)));
    }
    return output;
  }
};
```
​      当然使用 [ES6 destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)来定义这些参数，可以将上面的代码进行优化，如下：
```javascript
var root = {
  rollDice: function ({numDice, numSides}) {
    var output = [];
    for (var i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
  }
};
```
​      将以上修改成的```server.js``` ，完整的代码如下：
```javascript
/**
 * 复杂的传参测试server.js
 */
var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

//建立一个Schema ， 使用Graphql Schema 语言
var schema = buildSchema(`
  type Query {
    rollDice(numDice: Int!, numSides: Int): [Int]
  }
`);

//root对每一个API断点都提供了一个resolver功能
var root = {
  rollDice: function ({numDice, numSides}) {
    var output = [];
    for (var i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
  }
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
​      修改后的```server.js``` ，执行，并使用浏览器打开```http://localhost:4000/graphql```,之后进行```GraphQL query```
```
node server.js
```
```graphql
{
  rollDice(numDice: 3, numSides: 6)
}
```
![](D:\CYann_Work\Js_GraphQL\rec\7.png) 

​      在```GraphQL Client```使用```$```符号进行传值，如下：
```javascript
var dice = 3;
var sides = 6;
var xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open("POST", "/graphql");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.onload = function () {
  console.log('data returned:', xhr.response);
}
var query = `query RollDice($dice: Int!, $sides: Int) {
  rollDice(numDice: $dice, numSides: $sides)
}`;
xhr.send(JSON.stringify({
  query: query,
  variables: { dice: dice, sides: sides },
}));
```
![](D:\CYann_Work\Js_GraphQL\rec\7-2.png) 

### 简单实现GraphQL的更改和写入数据 / Writing Code 
​      使用```Mutation```来代替```Query```，那么```Schema```中可以这样，如下：
```graphql
input MessageInput {
  content: String
  author: String
}

type Message {
  id: ID!
  content: String
  author: String
}

type Query {
  getMessage(id: ID!): Message
}

type Mutation {
  createMessage(input: MessageInput): Message
  updateMessage(id: ID!, input: MessageInput): Message
}
```
​      当然，也需要有相应的```root resolver```：
```javascript
var fakeDatabase = {};
var root = {
  setMessage: function ({message}) {
    fakeDatabase.message = message;
    return message;
  },
  getMessage: function () {
    return fakeDatabase.message;
  }
};
```
​      整合之后，如下：
```javascript
/**
 * 更改和输入类型测试server.js
 */
var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

//建立一个Schema ， 使用Graphql Schema 语言
var schema = buildSchema(`
  input MessageInput {
    content: String
    author: String
  }

  type Message {
    id: ID!
    content: String
    author: String
  }

  type Query {
    getMessage(id: ID!): Message
  }

  type Mutation {
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }
`);

// 将消息赋值在这个对象上
class Message {
  constructor(id, {content, author}) {
    this.id = id;
    this.content = content;
    this.author = author;
  }
}

var fakeDatabase = {};
//root对每一个API断点都提供了一个resolver功能
var root = {
  getMessage: function ({id}) {
    if (!fakeDatabase[id]) {
      throw new Error('no message exists with id ' + id);
    }
    return new Message(id, fakeDatabase[id]);
  },
  createMessage: function ({input}) {
    //创建一个随机的id赋给我们创建Schema
    var id = require('crypto').randomBytes(10).toString('hex');

    fakeDatabase[id] = input;
    return new Message(id, input);
  },
  updateMessage: function ({id, input}) {
    if (!fakeDatabase[id]) {
      throw new Error('no message exists with id ' + id);
    }
    //替换掉所有的旧的数据
    fakeDatabase[id] = input;
    return new Message(id, input);
  },
}

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => {
  console.log('Running a GraphQL API server at localhost:4000/graphql');
});

```
​      在graphql查询使用关键字```mutation```（PS：在介绍中也声明了，不使用关键字，默认为```query```）。若要传递输入类型，写入的数据设置为JSON对象。例如，通过上面定义的```Schema```，您可以创建一个新消息，并用此操作返回新消息的ID
```graphql
mutation {
  createMessage(input: {
    author: "andy",
    content: "hope is a good thing",
  }) {
    id
  }
}
```
![](D:\CYann_Work\Js_GraphQL\rec\9.png) 
​      当然使用相应的客户端用法代码也是可行的，如下：
```javascript
var author = 'andy';
var content = 'hope is a good thing';
var xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open("POST", "/graphql");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.onload = function () {
  console.log('data returned:', xhr.response);
}
var query = `mutation CreateMessage($input: MessageInput) {
  createMessage(input: $input) {
    id
  }
}`;
xhr.send(JSON.stringify({
  query: query,
  variables: {
    input: {
      author: author,
      content: content,
    }
  }
}));
```
###进阶 / Advanced
​      使用```GraphQLSchema```的构造器来创建一个```schema```是一个进阶的方法。那么我们进行一个比较学习，如下为原来的定义方法：
```JavaScript
var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type User {
    id: String
    name: String
  }

  type Query {
    user(id: String): User
  }
`);

// Maps id to User object
var fakeDatabase = {
  'a': {
    id: 'a',
    name: 'alice',
  },
  'b': {
    id: 'b',
    name: 'bob',
  },
};

var root = {
  user: function ({id}) {
    return fakeDatabase[id];
  }
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

​      使用```GraphQLSchema```的构造器，如下：
```JavaScript
var express = require('express');
var graphqlHTTP = require('express-graphql');
var graphql = require('graphql');

var fakeDatabase = {
  'a': {
    id: 'a',
    name: 'alice',
  },
  'b': {
    id: 'b',
    name: 'bob',
  },
};

// 定义用户类型
var userType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString },
  }
});

// 定义查询类型
var queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: userType,
      // `args` describes the arguments that the `user` query accepts
      args: {
        id: { type: graphql.GraphQLString }
      },
      resolve: function (_, {id}) {
        return fakeDatabase[id];
      }
    }
  }
});

var schema = new graphql.GraphQLSchema({query: queryType});

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
```
​      可见```root resolver```直接实现了```query```和```mutation```类，并没有使用```root``` 我个人认为，这样更加直接了当，更加简洁明了

##总结 / Summarize  

GraphQL提供了一些自用的强大工具集，用来构建高效的数据驱动应用。乍看 GraphQL 可能很复杂，因为它是一种跨领域技术。但是，如果你花时间了解基础概念，我想你会发现很多东西只是有意义的。所以无论你是否真的使用它，我相信值得花时间熟悉 GraphQL。越来越多的公司和框架正在采用它，并且在未来几年内可能最终成为网络的关键组成部分之一。

***
***
1. 作者 王皓 文章名称 ：[GraphQL 介绍](https://ninghao.net/blog/2857)  
   发布时间： 2015-08-17  更新时间：  2016-10-08

2. 作者 局长 文章名称：[Github 为什么开放了一套 GraphQL 版本的 API](http://www.oschina.net/news/78302/why-github-open-graphql-api)
   发布时间：2016-10-23

3. Github 项目名称：[graphql.github.io](https://github.com/graphql/graphql.github.io)  ， 内有Facebook提供的```GraphQL``` 官方文档

4. 作者 黯羽轻扬  文章名称：[GraphQL](http://www.tuicool.com/articles/RjquMfj)
   发布时间：2017-06-10

5. Github 文章名称：[The GitHub GraphQL API](https://githubengineering.com/the-github-graphql-api/)
   更新时间：2016-09-14

6. Github 文章名称：[Event-stream based GraphQL subscriptions.md](https://gist.github.com/OlegIlyenko/a5a9ab1b000ba0b5b1ad)

7. 作者 Sashko Stubailo 文章名称：[The Anatomy of a GraphQL Query](https://dev-blog.apollodata.com/the-anatomy-of-a-graphql-query-6dffa9e9e747)
   发布时间：2017-03-08

8. 作者 翟前锋 文章名称：[GraphQL系列二 数据类型](http://www.zhaiqianfeng.com/2017/06/learn-graphql-type-system.html)
   发布时间：2017-06-06

9. 作者 Taobao FED 文章名称：[深入理解 GraphQL](http://www.tuicool.com/articles/EJF7bez)
   发布时间：2016-03-10
   
10. 文章名称：Getting Started With GraphQL.js _ GraphQL.js Tutorial

11. 文章名称：Basic Types _ GraphQL.js Tutorial

12. 文章名称：Running an Express GraphQL Server _ GraphQL.js Tutorial

13. 文章名称：GraphQL Clients _ GraphQL.js Tutorial

14. 文章名称：Passing Arguments _ GraphQL.js Tutorial

15. 文章名称：Mutations and Input Types _ GraphQL.js Tutorial

16. 文章名称：Constructing Types _ Advanced Guides






