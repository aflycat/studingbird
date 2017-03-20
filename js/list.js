
var globle=globle||{};
$(function(){

	
	$("#listmore").click(function(){
		if(globle.pageStart<globle.pageCount){
			loadArticlelist();
		}
		
	})
	loadArticlelist();

	//加载数据的方法
	function loadArticlelist(){
		
		//!globle.pageStart
		if(!globle.pageStart){
			
			$("#articlelist").html("");
			globle.pageStart=0;
		}
		//储存动态生成的html
		var itemHtml="";
		//储存数据
		var result=listData["listData0"+globle.pageStart];
		//拿到数据
		var list=result.data.list;
		
		if(!list||!list.length){
			$("#articlelist").html("暂时没有数据，敬请期待");
			
		}else{
			var updateTime;
			
			for(var i=0;i<list.length;i++){
//				updateTime=list[i].updateAt||list[i].creatAt;
//				itemHtml=$("#itemHtml").html().replace("$articleCover$",list[i].coverImg)
//				.replace("$articleId$",list[i].sysId)
//				.replace("$articleTitle$",list[i].title)
//				.replace("$updateTime$",updateTime?updateTime.substr(0,10):"")
//				.replace("$describle$",list[i].describe);
//				console.log(itemHtml);
//				console.log($("#articlelist"))
//				
//				$("#articlelist").append(itemHtml);
				
				updateTime?updateTime.substr(0,10):"";
				itemHtml+='<div class="content_one" articleid='+list[i].sysId+'>'
							+	'<div class="img_wrap"><img src='+list[i].coverImg +'/></div>'
							+		'<div class="content_text">'
							+			'<div class="title_small">'+list[i].title+'</div>'
							+			'<div class="date">'+updateTime+'</div>'
							+			'<p>'+list[i].describe+'</p>'
							+		'</div>'	
							+		'<img class="list_content" src="image/list_img_over_xiaojiantou.png" />'
							+	'</div>'
							+ '</div>'

			}
			$("#articlelist").append(itemHtml);
		}
		//用于加载下一页使用
		//加载完成要加1
		
		globle.pageStart=result.data.pageStart+1;
		globle.pageCount=Math.ceil(result.data.count/result.data.pageSize);
		if(globle.pageStart>=globle.pageCount){
			$("#listmore").css({"opacity":"0"}).prev("img").attr("src","image/list_gomore_bg_nomore.jpg")
			
		}
		
		
	}
	getUrlParams("type");
	
	//由于。content_one是后来加载的，直接绑定click没有用，采用事件委托的方式，，把事件绑定在父元素上
	$("#articlelist").delegate(".content_one","click",function(){
		
		window.open("article.html?"+"type="+getUrlParams("type")+"&articleId="+$(this).attr("articleId"),"_blank");
	})
	//加载数据的方法
	function getUrlParams(name){
		var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
		var r=window.location.search.substr(1).match(reg);
		//var z=r.split("=")
		if(r!=null){
			//return z[1]
			return r[2]
		}else{
			return ""
		}
	}
	
	
	
})
