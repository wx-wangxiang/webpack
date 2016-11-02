
var utility = {
	/**
	 * 兼容数字和数字字符串
	 * @return {Boolean} 返回true or false
	 */
	_isNumString: function(numString){
		return /^[0-9]+$/.test(numString);
	},
	/**
	 * 用于为数字格式化为指定位数的字符串 如1到01
	 * @param  {[type]} num   原整数数字或整数数字字符串
	 * @param  {[type]} digit 指定的位数
	 * @return {[type]}       [description]
	 */
	numFormat: function(num, digit){
		var numIsNum = this._isNumString(num),
			digitIsNum = this._isNumString(digit);
		if(numIsNum && digitIsNum){
			return (Math.pow(10, digit) + num * 1 + '').substr(1);
		}else{
			console.error('参数中含有非数字类型的字符!');
		}
	},

}
module.exports = utility