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
		open("index.html",name="_parenr - URL")
	})
	var arr=JSON.parse(sessionStorage.getItem("txt"));
	
	var t=sessionStorage.getItem("idx");
	console.log(sessionStorage.getItem("idx"));
	
	var r="<li>"+arr[t].txt+"<span>"+arr[t].time+"</span></li>";
	$(".nav_1").html(r);
	//console.log($(".btn1"));
	
	//console.log(arr[t]);
	//var str=arr.split(",");
	
	//console.log(str instanceof Array);
	$(".btn1").on("tap",function(){
		arr.splice(t,1);
		//console.log(str);
		//$(".nav").html('');
		sessionStorage.setItem("txt",JSON.stringify(arr));
		open("index.html",name="_parenr - URL")
	})
	
	
})