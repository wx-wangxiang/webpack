var sub = require('./sub');
var app = document.createElement('h1');
var mergeStr = require('./mergeStr');
var utility = require('./myUtility');
var colorArr = [
	{text: 'w', color: 'red'},
	{text: 'e', color: 'orange'},
	{text: 'l', color: 'yellow'},
	{text: 'c', color: 'green'},
	{text: 'o', color: 'lightgreen'},
	{text: 'm', color: 'blue'},
	{text: 'e', color: 'purple'}];
app.innerHTML = mergeStr(colorArr, 'span');
app.appendChild(sub());
document.body.appendChild(app);
console.log(utility.numFormat('1d2', 4));