var GLOBLE=GLOBLE||{};
jQuery(function(){
	$(".wrap_block, .main_wrap, .gaishu_block").css("height",($(window).height()-50)+"px");
	$(".gaishu_block").width($(window).width());
	
	
	$(window).resize(function(){
		$(".wrap_block, .main_wrap, .gaishu_block").css("height",($(window).height()-50)+"px");
		$(".gaishu_block").width($(window).width());
		//滚动下标
		if(mainslideindex){
			if(GLOBLE.resizeTimer){
				clearInterval(GLOBLE.resizeTimer);
			}
			GLOBLE.resizeTimer=setTimeout(function(){
				mainslidegoing=true;
				mainslidego();
				dochange();
			},200)
			
		}
		
	});
	
	//欢迎动画
	dowelcomeanimate();
	function dowelcomeanimate(){
		GLOBLE.welcomeanimatetimer=setTimeout(function(){
			$(".welcome_content").animate({"top":"40%"},600);
			//each循环元素。绑定事件
			$(".welcome_content .welcome_animate").each(function(index,ele){
				var $this=$(this);
				setTimeout(function(){
					$this.show().addClass("animated fadeInUp");
				},200*(index+1))
			});
			
			setTimeout(function(){
				$(".welcome_wrap").slideUp(600,"easeOutStrong",function(){
					GLOBLE.welcomeover=true;
				})
			},2500)
			
		},4000)
	}
	
	var welcomedclick=false;
	$(".welcome_content").click(function(){
	
		if(welcomedclick){
			
			$(".welcome_wrap").slideUp(600,"easeOutStrong",function(){
				GLOBLE.welcomeover=true;
			});
		}else{
			welcomedclick=true;
		}
	})



	//单页滚动
	//滚动下标
	var mainslideindex=0;
	//	判断页面是否在运动false为不滚动
	var mainslidegoing=false;
//	是否第一次
	var mainsildedelay=0;
	var mainslidetimer=null;
	var scrollfunc=function(e){
		var e=e||window.event;
		if(e.wheelDelta){//判断浏览器ie，谷歌
			if(e.wheelDelta>0){
				
				mainslideup()//网上
			}
			if(e.wheelDelta<0){
				GLOBLE.welcomeover?mainslidedown():"";
			}
		}else if(e.detail){
			if(e.detail>0){
				GLOBLE.welcomeover?mainslidedown():"";
			}//firfox滑轮
				
				
				if(e.detail<0){
					mainslideup();
				}
		}
		
	}
	
	if(document.addEventListener){//ff
		document.addEventListener("DOMMouseScroll",scrollfunc,false)
	}
	window.onmousewheel=document.onmousewheel=scrollfunc;
	
	function mainslidedown(){
		if(mainsildedelay<1){
			clearInterval(mainslidetimer);//第一次鼠标滚动不执行，第二次在执行
			mainslidetimer=setTimeout(function(){
				mainsildedelay++;
			},100)
		}else if(!mainslidegoing){
			mainslidegoing=true;
			mainslideindex++;
			if(mainslideindex>$(".wrap_block").length-2){
				mainslideindex=$(".wrap_block").length-2
			}
			mainslidego();
		}
	}
	function mainslideup(){
		if(mainsildedelay<1){
			clearInterval(mainslidetimer);
			mainslidetimer=setTimeout(function(){
				mainsildedelay++;
			},100)
		}else if(!mainslidegoing){
			mainslidegoing=true;
			mainslideindex--;
			if(mainslideindex<0){
				mainslideindex=0;
			}
			mainslidego();
		}
		
	}
	
	function mainslidego(){
		$(".main_slide").animate({"top":"-"+$(".wrap_block").height()*mainslideindex+"px"},600,function(){
			mainslidegoing=false;
			
			mainsildedelay=0;
			if(mainslideindex==0){
				
			}else if(mainslideindex==4){
				$(".nav_piece").removeClass("now").eq(mainslideindex-1).addClass("now");
				$(".nav_piece").eq(mainslideindex).addClass("now");
			}else{
				$(".nav_piece").removeClass("now").eq(mainslideindex-1).addClass("now");
			}
		})
	}
	
	$(".nav_piece h1").click(function(){
		var navindex=$(this).parent().index(".nav_piece");
		if(navindex==4){
			navindex=3;
		}
		if(navindex!=5){
			mainslideindex=navindex+1;
			mainslidego();
		}
	});
	//如果进入页面，需要跳转相应的页面
	var mainHash=window.location.hash.substring(1);
	if(mainHash){
		if(mainHash==0||mainHash==1||mainHash==2||mainHash==3||mainHash==4){
			$(".welcome_wrap").slideUp(0,function(){
				GLOBLE.welcomeover=true;
			});
			mainslideindex=mainHash;
			mainslidego();
			dochange();
		}
	}
	
	
	//点击向下按钮
	$(".welcome2_content .donext").click(function(){
		mainslideindex=1;
		mainslidego()
	})
	
	//概述切换轮播
	var goleft=$(".gaishu_goleft");
	var goright=$(".gaishu_goright");
	var onewidth=$(".gaishu_block").width();
	
	goleft.add(goright).mousemove(function(){
		$(this).removeClass("nohover");
	});
	
	var getindex=0;
	
	goleft.click(function(){
		getindex--;
		if(getindex<0){
//			$(this).css({"opacity":"0.3"});
			getindex=2;
			dochange()
		}else{
			dochange()
		}
	});
	goright.click(function(){
		getindex++;
		if(getindex>2){
//			$(this).css({"opacity":"0.3"});
			getindex=0;
			dochange()
		}else{
			dochange()
		}
	})
	
	function dochange(){
		goleft.add(goright).css({"opacity":"0.3"});
		$(".gaishu_slider").animate({"left":-onewidth*getindex},600,function(){
			goleft.add(goright).css({"opacity":"1"});
		})
	}
	
	GLOBLE.timer=setInterval(function(){
		$(".jiazhi_shineimg").fadeIn(1200,function(){
			$(".jiazhi_shineimg").delay(100).fadeOut(1200)
		})
	},1200)
	

	var odiv=$(".btn_box div");
	var btnwidth=$(".btn_box div").width()
	var scrolldiv=$(".yun_slider");
	var srollwidth=$(".yun_slider div").width();
	odiv.each(function(i,ele){
		$(this).click(function(){
			$(this).find("span").removeClass("now").animate({"left":"0"},600);
			scrolldiv.animate({"left":-srollwidth*i},1000);
			addnow(i);
		})
	})
	
	function addnow(i){
		odiv.eq(i).find("span").addClass("now").animate({"left":"0"},100);
		if(0==i){
			odiv.eq(i).siblings().find("span").remove("now").animate({"left":-btnwidth},100)
		}else{
			odiv.eq(i).siblings().find("span").remove("now").animate({"left":btnwidth},100)
		}
		
	}
	
	
})
