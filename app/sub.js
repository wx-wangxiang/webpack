function sayHello () {
	var element = document.createElement('h2');
	element.innerHTML = "hello";
	return element;
}
module.exports = sayHello;