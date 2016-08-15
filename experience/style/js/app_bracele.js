// JavaScript Document
$(function(){
	/*表单提示内容*/
	$.fn.Foc=function(){
		var $aInp=$(this).find('input').eq(0);
		var $aLab=$(this).find('label').eq(0);
		$aInp.focus(function(){
			$aLab.css('display',"none");
			$(this).parent().addClass('inputGroup1');
			$(this).parent().next().text('');
			})
		$aInp.blur(function(){
			$(this).parent().removeClass('inputGroup1');
			if($aInp.val()==''){
				$aLab.css('display',"block");
				switch($aLab.html()){
					case '手环领取码':
						$(this).parent().next().text('请填写手环领取码');
						break;
					case '手机验证码':
						$(this).parent().next().text('手机验证码不能为空');
						break;
					case '图片验证码':
						$(this).parent().next().text('请正确填写验证码');
						break;
					case '收件人姓名':
						$(this).parent().next().text('请填写收件人姓名');
						break;
					case '收件人详细地址':
						$(this).parent().next().text('请填写完整的收件人地址');
						break;
					}
				}
			})
	}
	
	$('.number').each(function() {
        $(this).Foc();
    })
	//判断手机号
	$('.number_photo').each(function(){
		$(this).blur(function(){
			var tel=this.value;
			var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
			if(!reg.test(tel)){
				$(this).parent().next().text('请正确填写手机号码');
			}
		})
	});
	//不能输入特殊字符
	var arrText=['select','insert','count','asc','mid','char','and ','net','or','delete','drop','script'];
	$('.number_input').each(function(){
		$(this).blur(function(){
			var tet=this.value;
			var testbus = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/;
			if(testbus.test(tet)){
				$(this).parent().next().text('请不要输入特殊字符');
			}else{
				//特殊字段
				for(var i = 0; i < arrText.length; i++){
					 if(tet==arrText[i]){
						 $(this).parent().next().text('您的输入信息有误');
					 }
				} 
			}
		})
	});
	//判读不是输入汉字
	
	/*提交申请为灰*/
	$('.btn_check[type=checkbox]').click(function(){
		var $aCheck=$('.btn_check[type=checkbox]').attr('checked');
		if($aCheck=='checked'){
			$('#checked').css('background','#cccccc');
			$('#checked').attr('disabled',true);
			$aCheck=$('.btn_check[type=checkbox]').attr('checked',false);
		}else{
			$('#checked').css('background','#00683d');
			$('#checked').attr('disabled',false);
			$aCheck=$('.btn_check[type=checkbox]').attr('checked',true);
		}
	})
	/*分享协议*/
	$('.txt').click(function(){
		$('.share').show();
		$('.share i').click(function(){
			$('.share').hide();
		})
	})
	/*提交信息*/
	var oUl=document.createElement('ul');
	var $text=[];
	$('#info').click(function(){
		$('.confirm').show();
		$('.mail .number_input').each(function(index, element) {
			$text.push($(this).val());
			
		});
		
		oUl.innerHTML='<h3>请确认一下信息:</h3>\
						<ul>\
							<li><span class="confirm_left">收件人:</span><span class="confirm_right">'+$text[0]+'</span></li>\
							<li><span class="confirm_left">收件人手机:</span><span class="confirm_right">'+$text[1]+'</span></li>\
							<li><span class="confirm_left">收件人地址:</span><span class="confirm_right">'+$text[2]+$text[3]+$text[4]+'</span></li>\
							<li><span class="confirm_left">收件人邮编:</span><span class="confirm_right">'+$text[5]+'</span></li>\
						</ul>'
		$('.consignee').append(oUl);
	})
	$('#return').click(function(){
		oUl.innerHTML='';
		$('.confirm').hide();
	})
	/*提交表单*/
	$('#checked').click(function(){
		$('.tab').hide();
		$('.tab').eq(1).show();
		$('.menu a').eq(1).addClass('menu_active');
		$('.move a').eq(1).addClass('move_active');
	})
	$('#three').click(function(){
		$('.tab').hide();
		$('.tab').eq(2).show();
		$('.menu a').eq(2).addClass('menu_active');
		$('.move a').eq(2).addClass('move_active');
		$('.arrdes').html('您的收货地址为：'+$text[2]+$text[3]+$text[4])
	});
	/*验证码已发送*/
	$('.gain').click(function(){
		$('.prov').slideDown();
		$('.prov .proving i').click(function(){
			$('.prov').hide();
			return false;
		})
		setTimeout(function(){
			$('.prov').hide();
		},2000)
		return false;	
	});
})