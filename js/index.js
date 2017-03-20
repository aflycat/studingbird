jQuery(function(){
	(function(){
		var banwrap=$(".banner_wrap");
		var pre=$(".bchange .prev");
		var next=$(".bchange .next");
		var pointerctl=$(".bchange .middle span");
		var nowIndex=0;
		var animateFather=null;
		animateFather=$(".banner_one").eq(0);
		animateImg();
		
		
//			前一页点击
		pre.click(function(){
			nowIndex--;
			if(nowIndex<0){
				nowIndex=2;
			}
			banneranimate();
		});
		
		next.click(function(){
			nowIndex++;
			if(nowIndex>2){
				nowIndex=0;
			}
			
			banneranimate();
		});
		
		pointerctl.click(function(){
			nowIndex=$(this).index();
			
			banneranimate();
		});
		function banneranimate(){
			pointerctl.eq(nowIndex).addClass("now").siblings().removeClass("now");
			$(".banner_one").fadeOut();
			animateFather=$(".banner_one").eq(nowIndex);
			animateFather.fadeIn();
			animateImg();
		}
		
		function animateImg(){
			
			animateFather.find("img").eq(0).addClass("animated fadeInLeft");
			setTimeout(function(){
			animateFather.find("img").eq(1).addClass("animated fadeInRight");
			animateFather.find("img").eq(2).addClass("animated fadeInDown");
			},200)
		}
		
	
	
	})();
	
	(function(){
		var product_one=$("#product_one");
		var prebtn=$("#product_one .change_line .prev");
		var nextbtn=$("#product_one .change_line .next");
		var now_line=$("#product_one .now_line .now_linebtn_one");
		var aspan=$("#product_one .now_linebtn_one");
		
		var content=$("#product_one .content .content_one");
		var nownum=0;
			prebtn.click(function(){
				nownum--;
				
				nownum<0?nownum=5:nownum=nownum;
				dofade("fadeInLeft");
				
			});
			nextbtn.click(function(){
				nownum++;
				
				nownum>5?nownum=0:nownum=nownum;
				dofade("fadeInRight");
			});
			aspan.each(function(i,elem){
				$(this).click(function(){
				var act=i>nownum?"fadeInRight":"fadeInLeft";
				nownum=i;
				dofade(act);
				
				})
			})
			
		
		function dofade(action){
			console.log(action);
			//i标签添加now；
			aspan.eq(nownum).addClass("now").siblings().removeClass("now");
			content.hide().eq(nownum).fadeIn();
			content.find("h1,p,h2,img").attr("class","").addClass("animated "+action);
			
		}
		
		
	})();
	
	$(".jianjie .now_line, .jianjie .change_line span").css("opacity",'0');
	(function(){
		var yewu=$(".yewucontent_wrap");
		var centerimg=$(".yewucontent_wrap .centerimg");
		var icon=$(".yewucontent_wrap .shousuo_icon");
		var yewucontent_dit=$(".yewucontent_wrap .yewucontent_ditail");
		var nowindex=0;
		centerimg.add(icon).hover(function(){
			$(this).addClass("animated tada")
		},function(){
			$(this).removeClass("animated tada")
		});
		
		centerimg.click(function(){
			nowindex=centerimg.index($(this));
			
			doslide();
		});
		icon.click(function(){
			console.log(icon.parents(".yemucontent").index());
			nowindex=icon.index($(this));
			
			doslide();
			
		})
		function doslide(){
			if(icon.eq(nowindex).hasClass("zhankai")){
				yewucontent_dit.stop().slideUp();
				icon.removeClass("zhankai");
			}else{
				yewucontent_dit.stop().slideUp().delay(300).eq(nowindex).slideDown(300);
				icon.removeClass("zhankai").eq(nowindex).addClass("zhankai");			
			}
		}
		
	})();
	
	
	(function(){
			$(".teamcontent_wrap .team_move .heading").hover(function(){
			$(this).find("a").stop().fadeIn(300);
		},function(){
			$(this).find("a").stop().fadeOut(300);
		});
		var team=$(".teamcontent_wrap");
		var pre=$(".teamcontent_wrap .prev");
		var next=$(".teamcontent_wrap .next");
		var scrodiv=$(".teamcontent_wrap .twoteam_wrap");
		var scrowrap=$(".teamcontent_wrap .team_move");
		var icon=$(".teamcontent_wrap .middle span")
		var nowindex=0;
		var num=scrodiv.length
		var timer=null;
		pre.click(function(){
			clearInterval(timer);
			scrollright()
			timer=setInterval(scrollright,3000);
		});
		next.click(function(){
			clearInterval(timer);
			srollleft()
			timer=setInterval(srollleft,3000);
		});
		
		scrodiv.hover(function(){
			clearInterval(timer)
		},function(){
			timer=setInterval(srollleft,3000);
		});
		
			timer=setInterval(srollleft,3000);
			
		

		function srollleft(){
			scrowrap.animate({"left":"300px"},1000,function(){
				scrowrap.animate({"left":"-1130px"},600,function(){
				$(".teamcontent_wrap .twoteam_wrap").first().appendTo(scrowrap);
				scrowrap.css({left:0})
				});
			});
			nowindex++;
			changeindex();
		};
		function scrollright(){
			
			$(".teamcontent_wrap .twoteam_wrap").last().prependTo(scrowrap);
			scrowrap.animate({'left':'-1130px'},0)
			scrowrap.animate({'left':"0"},1000,'backOut')
				nowindex--;
			changeindex()
			
		};
		function changeindex(){
			if (nowindex>num-1) {
				nowindex=0;
			} else if(nowindex<0){
				nowindex=num-1
			}
			icon.eq(nowindex).siblings().removeClass("now").end().addClass("now");
		}
		
		
	})();
		
		//联系我们
		var lianxi=$(".lianxi");
		var input_wrap=lianxi.find(".input_wrap");
		var inputs=input_wrap.find(".input_box input");
		var textareas=input_wrap.find(".textarea_box textarea");
		inputs.add(textareas).focus(function(){
			$(this).parent().addClass("focus_input_box");
		}).blur(function(){
			$(this).parent().removeClass("focus_input_box");
		});
		
})
