$(function(){
	var pass=sessionStorage.getItem("pass");
	var i=0;
	var t;
	$(".num").find("span").on("tap",function(){
		i++;
		$(".list").find("li").eq(i-1).addClass("on");
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
				if(t===pass){
					open("xqye.html",name="_parenr - URL");
				}
				else{
					alert("密码不正确");
					i=0;
					t=null;
					$(".list").find("li").removeClass("on");
				}
			},10)
			
		}
		console.log(t);
	})
	$(".top").find("img:first").on("tap",function(){
		open("index.html",name="_parenr - URL");
	})
})
