function mergeStr(arr, wrappedEl){
	var html = '', el, wrapEl;
	wrapEl = document.createElement('div');
	for(var i = 0; i<arr.length; i++){
		var el = document.createElement(wrappedEl);
		el.setAttribute('class', arr[i].color);
		el.innerHTML = arr[i].text;
		wrapEl.append(el);
	}
	return wrapEl.innerHTML;
}
module.exports = mergeStr;