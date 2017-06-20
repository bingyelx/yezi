$(function(){
	var i=0;
	$('.btn').on("tap",function(){
		i++;
		if(i%2==1){
			$(".xl").animate({"top":"50px"},1000);
		}
		else{
			$(".xl").animate({"top":"-300px"},1000);
		}
	})
	$(".top_1").find("img:first").on("tap",function(){
		open("index.html",name="_parent - URL");
	})
		var str=[];
		$(".fine").on("tap",function(){
			var arr=$(".txt").val()+";";
			str=arr.split(";")
			console.log(str instanceof Array);
			$(".txt").val("");
			if(sessionStorage.getItem("txt")){
				str+=sessionStorage.getItem("txt");
				sessionStorage.setItem("txt",str);
			}
			else{
				sessionStorage.setItem("txt",str);
			}
			
			
			console.log(sessionStorage.getItem("txt"))
//			location.href="index.html?txt="+str;
//			location.search.slice(1).split("=")[1];
//			console.log(str)
		})	
		
})
