var app = require('./src/app.js')

app.hello_world()
console.log(app.EPSILON)

var p = require('./src/math/WB_Epsilon.js')

/*
var the_app = requirejs(['app'], function(app){
  console.log(app);
  test();
});

function test(){

  the_app.hello_world();

}
*/
