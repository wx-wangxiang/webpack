//载入样式
require('./style/color.css')
var mergeStr = require('./mergeStr')
function sayHello () {
	var element = document.createElement('ul'),
	html = '',
	colorArr = [
	{text: '红', color: 'red'}, 
	{text: '橙', color: 'orange'}, 
	{text: '黄', color: 'yellow'}, 
	{text: '绿', color: 'green'}, 
	{text: '青', color: 'lightgreen'}, 
	{text: '蓝', color: 'blue'},
	{text: '紫', color: 'purple'}];
	element.innerHTML =mergeStr(colorArr, 'li');
	return element;
}
module.exports = sayHello;