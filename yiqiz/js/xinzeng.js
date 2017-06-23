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
		
		$(".xl").find("li:last").on("tap",function(){
			$("footer").animate({bottom:"0"},500);
		})
		$("section").on("tap",function(){
			$("footer").animate({bottom:"-50px"},500);
		})
		//console.log($(".xl").find("li:last"));
		$(".fine").on("tap",function(){
			var arr=$(".txt").val();
			var d=new Date();
			d=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()+","+d.getHours()+":"+d.getMinutes();
			console.log(d);
			
			if(!$(".txt").val()==""){
				var str=[{txt:arr,time:d}];
				$(".txt").val("");
			if(sessionStorage.getItem("txt")){
				var st=JSON.parse(sessionStorage.getItem("txt"));
				st.unshift({txt:arr,time:d});
				sessionStorage.setItem("txt",JSON.stringify(st));
			}
			else{
				sessionStorage.setItem("txt",JSON.stringify(str));
			}
			
			
//			location.href="index.html?txt="+str;
//			location.search.slice(1).split("=")[1];
//			console.log(str)
			}
			else{
				alert("请输入内容");
			}
			
			open("index.html",name="_parent - URL")
			
			
			//console.log(str instanceof Array);
			
		})	
		var pt=["red","blue","black","purple"]
		$("footer").find("li").on("tap",function(){
			var p=$(this).index();
			$(".txt").css("color",pt[p]);
			//alert("aaa");
			//console.log(p)
		})
		
})
