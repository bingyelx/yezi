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
	var st=sessionStorage.getItem("pt");
	var r="<li>"+st+"</li>"
	$(".nav").html(r);
	//console.log($(".btn1"));
	var arr=sessionStorage.getItem("txt");
	//console.log(arr);
	var str=arr.split(",");
	var t=sessionStorage.getItem("idx");
	//console.log(str instanceof Array);
	$(".btn1").on("tap",function(){
		str.splice(t,1);
		console.log(str);
		$(".nav").html('');
		sessionStorage.setItem("txt",str);
	})
	
	
})