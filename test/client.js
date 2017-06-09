/**
 * 测试粘贴代码
 */
var xhr = new XMLHttpRequest();
xhr.responseType = 'json' ;
xhr.open("POST" , "/graphql");
xhr.setRequestHeader("Content-Type" , "application/json");
xhr.setRequestHeader("Accept" , "application/json");
xhr.onload = function(){
    console.log('data return:' , xhr.response);
}
xhr.send(JSON.stringify({query:"{hello}"}));