
function hello_world(){
  console.log('hello world!')
}

var WB_Epsilon = require('./math/WB_Epsilon.js')


//var WB_Epsilon = require('math/WB_Epsilon');
//console.log('yeah!' +WB_Epsilon)


exports.hello_world = hello_world;
exports.EPSILON = WB_Epsilon.EPSILON;
