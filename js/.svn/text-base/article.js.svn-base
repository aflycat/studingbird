$(function(){
	$("#header").load("header.html");
	$("#footer").load("footer.html");
			
	$(".title_list .pen").click(function(){
		$(".title_list").animate({"width":"100px","backgroundPositionX":"-680px"},1000,function(){
			$(".title_list").animate({"width":"780px","backgroundPositionX":"-320px"},1300,'easeOutStrong');
		});
	});
	
	
	var likearr=["1",'2','3',"4"]
	var iflikebtnon=false;
	$(".like_btn").click(function(){
		if(!iflikebtnon){
			iflikebtnon=true;
			$(".like_tips").text(likearr[Math.floor(Math.random()*likearr.length)]);
			domove();
		}else if(iflikebtnon&&$(".like_tips").text()=="4"){
			$(".like_tips").text('bbbbb');
			domove();
		}
		
		function domove(){
			$(".like_tips").animate({"top":"0","opacity":"1"},600,function(){
			$(".like_tips").delay(600).animate({"left":"-500px",opacity:"0"},600,function(){
					$(".like_tips").animate({"top":"379px","left":"258px","opacity":"0"},0);
					$(".like_btn").addClass("like_btn_clicked");
				})
			})
		}
		
		
	})
	
	
	loadArticleDetail();
	
	
})
function loadArticleDetail(){
	
	if(getUrlParams("type")){
		var result=articleData[getUrlParams("type")+getUrlParams("articleId")];
	
		$("#typeTitle").html(result.data.typeTitle);
		$("#typeEntitle").html(result.data.typeEntitle);
		$("#articleTitle").text(result.data.title);
		$("#updateTime").text(result.data.updateAt);
		$("#cover").attr("src",result.data.coverImg);
		$("#author").text(result.data.creatByFullName);
		$("#content").html(result.data.content);
		
	}
	
	
}
function getUrlParams(name){
		var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
		var r=window.location.search.substr(1).match(reg);
		//var z=r.split("&")
		//var na=z[0].split("=")
		//var id=z[1].split("=")
//		if(r!=null){
//			if(name=="type"){
//				return na[1]
//				}else{
//					return id[1]
//				}
//		}else{
//			return ""
//		}
//		
		if(r!=null){
			return r[2]
		}else{
			return ""
		}
	}

