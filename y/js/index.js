$(function(){
	$(".left").on("tap",function(){
		$(".nav").show();
		$(".cel").animate({"left":"0"},500)
	})
	$(".nav").on("tap",function(){
		$(".cel").animate({"left":"-140px"},500,function(){
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
	if(sessionStorage.getItem("txt")){
		
	
	var arr=JSON.parse(sessionStorage.getItem("txt"));
	
	
//		var str=arr.split(",");
		for(var t=0;t<arr.length;t++){
		var s;
		if(t==0){
				s="<li><span></span><span>"+arr[t].txt+"</span><span>"+arr[t].time+"</span></li>";
			}
			else{
				s+="<li><span></span><span>"+arr[t].txt+"</span><span>"+arr[t].time+"</span></li>";
			}
			
			//console.log(s);
			$(".box").html(s);
		}
	
	}
	
	//console.log(str);
	$(".box").find("li").on("tap",function(){
		//var r=$(this).text();
		var pass=sessionStorage.getItem("pass");
		var t=$(this).index();
		if(pass){
			
		//console.log(t);
		//sessionStorage.setItem("pt",r);
		open("passin.html",name="_parenr - URL");
		}
		else{
			open("xqye.html",name="_parenr - URL");
		}
		sessionStorage.setItem("idx",t);
		//console.log()
	})
	
	//console.log(pass);
	$(".bottom_nav").find("li:last").on("tap",function(){
		open("pass.html",name="_parenr - URL")
	})
})
