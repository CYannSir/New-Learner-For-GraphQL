/*
var express = require ('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require ('graphql');

//建立一个Schema ， 使用Graphql Schema 语言
var schema = buildSchema(`
    type Query {
        hello: String
    }
`);
//root对每一个API断点都提供了一个resolver功能
var root = {
    hello : ( ) =>{
        return 'Hello World' ;
    },
};

var app = express();
app.use('/graphql' , graphqlHTTP({
    schema:schema ,
    rootValue:root,
    graphiql:true,
}));

app.listen(4000);
console.log('Running a Graphql API server at localhost:4000/graphql');
*/

/**
 * 复杂的传参测试server.js
 */
/*var express = require('express');
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
*/

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