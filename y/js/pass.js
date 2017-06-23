$(function(){
	var i=0;
	var t;
	$(".num").find("span").on("tap",function(){
		i++;
		$(".list").find("li").eq(i-1).addClass("on");
		//console.log($("list"))
		if(t){
			t+=$(this).html();
		}
		else{
			t=$(this).html();
		}
		if(i>4){
			return t;
		}
		if(i==4){
			setTimeout(function(){
				alert("设置成功");
				open("index.html",name="_parenr - URL");
			},10)
			
		}
		
		
		console.log(t);
		sessionStorage.setItem("pass",t);
	})
	$(".top").find("img:first").on("tap",function(){
		open("index.html",name="_parenr - URL");
	})
})
	

