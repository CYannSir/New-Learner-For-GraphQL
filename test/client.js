/**
 * 测试粘贴代码
 
var xhr = new XMLHttpRequest();
xhr.responseType = 'json' ;
xhr.open("POST" , "/graphql");
xhr.setRequestHeader("Content-Type" , "application/json");
xhr.setRequestHeader("Accept" , "application/json");
xhr.onload = function(){
    console.log('data return:' , xhr.response);
}
xhr.send(JSON.stringify({query:"{hello}"}));
*/

/*//测试应对复杂数据客户端的使用和编写

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
*/

/**
 * 更改和输入类型测试client.js
 */
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