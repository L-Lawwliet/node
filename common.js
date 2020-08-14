function getNowDate(){
	function addZero(num){
		var str = '';
		if(num>=0 && num<10){
			str = '0'+num;
		}else{
			str = ''+num;
		}
		return str;
	}
	var now = new Date();
	var returnStr = '';
	var year = now.getFullYear();
	var month = now.getMonth();
	month = addZero(month);
	var date = now.getDate();
	date = addZero(date);
	var hours = now.getHours();
	hours = addZero(hours);
	var min = now.getMinutes();
	min = addZero(min);
	returnStr = year+'-'+month+'-'+date+' '+hours+':'+min;
	return returnStr;
}
module.exports = {
    getNowDate
}