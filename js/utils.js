var utils = {
	convertToObj:function(str){
		// 1. 先获取URL地址中的参数
		// var params = location.search;  // "?id=6&name=tom&age=20"

		// 2. 截取字符串
		// var str = params.substr(1);
		str = str.substr(1);
		// console.log(str);

		// 3. 切割字符串 "id=6&name=tom&age=20"
		var arr = str.split("&");
		// console.log(arr); // ["id=6", "name=tom", "age=20"]

		// 4. 遍历数组继续切割
		var obj = {};
		for(var i=0;i<arr.length;i++){
			var temp = arr[i].split("=");
			obj[temp[0]] = temp[1];  // {id:6,name:'tom',age:20}
			// console.log(temp); // ["id", "6"]  ["name", "tom"]  ["age", "20"]
			// console.log(obj);
		}

		return obj;
	},
	convertToString:function(){
		
	}
}