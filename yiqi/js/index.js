$(function(){
	$(".left").on("tap",function(){
		$(".nav").show();
		$(".cel").animate({"left":"0"},1000)
	})
	$(".nav").on("tap",function(){
		$(".cel").animate({"left":"-140px"},1000,function(){
			$(".nav").hide();
		});
	})
	var i=0;
	$(".right").find("img:last").on("tap",function(){
		i++;
		if(i%2==1){
			$(".bottom_nav").animate({"top":"50px"},1000);
		}
		else{
			$(".bottom_nav").animate({"top":"-140px"},1000);
		}
	})
	$(".pen").on("tap",function(){
		open("xinzeng.html",name="_parent - URL");
	})
	//var atr=[]
	var arr=sessionStorage.getItem("txt");
	if(arr){
		var str=arr.split(",");
		for(var t=0;t<str.length-1;t++){
		var s;
		if(t==0){
				s="<li><span></span><span>"+str[t]+"</span></li>";
			}
			else{
				s+="<li><span></span><span>"+str[t]+"</span></li>";
			}
			
			$(".box").html(s);
		}
	}
	
	//console.log(str);
	
	$(".box").find("li").on("tap",function(){
		var t=$(this).index;
		var r=$(this).html();
		sessionStorage.setItem("pt",r);
		sessionStorage.setItem("idx",t);
		open("xqye.html",name="_parenr - URL")
	})
	//console.log(arr);
	
})
