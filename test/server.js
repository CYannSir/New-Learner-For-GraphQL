var express = require ('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require ('graphql');

//建立一个Schema ， 使用Graphql Schema 语言
/*
var schema = buildSchema(`
    type Query {
        hello: String
    }
`);
*/
var schema = buildSchema(`
    type Query {
  rollDice(numDice: Int!, numSides: Int): [Int]
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