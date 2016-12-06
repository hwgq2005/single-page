
/* APP入口*/

define(function(require, exports, module) {

	//初始化App模块
	var app = require('modules/app/main'); //App模块
	//显示页面
	app.showPage('.page-index');

	//初始化各页面级模块
	// require('modules/index/main').init(); //页模块

	//输出提示
	console.log('\n运行成功！');
	// $('.app-footer').after($('input[data-weiin-callback]'));
});