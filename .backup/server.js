var AV = require('leanengine');

var APP_ID = process.env.LC_APP_ID;
var APP_KEY = process.env.LC_APP_KEY;
var MASTER_KEY = process.env.LC_APP_MASTER_KEY;

console.log(APP_ID)
console.log(APP_KEY)
console.log(MASTER_KEY)


AV.initialize(APP_ID, APP_KEY, MASTER_KEY);


//var app = require('./app');
var app = require("./app.js");

// 端口一定要从环境变量 `LC_APP_PORT` 中获取。
// LeanEngine 运行时会分配端口并赋值到该变量。
//need to change the port for the LC_APP_PORT
var PORT = parseInt(process.env.LC_APP_PORT || 3000);
var server = app.listen(PORT, function () {
  console.log('Node app is running, port:', PORT);
});
