$(function(){if(navigator.appVersion.match(/MSIE [0-9]+/))$('body').append($('<div id="ieTipsBox"><a href="/caution/upbrowser?referrer='+window.location.href+'"><span>Browser access below IE11 may cause problems such as view confusion and security. It is recommended that you upgrade your browser. </span><i>Read More</i></a></div>'))});
 $(function(){var hd=$('#b_5cfdc451d3d281 [module-setting="hd"]').val(),pd=$('#b_5cfdc451d3d281 [module-setting="padding"]').val(),posi=$('#b_5cfdc451d3d281 [module-setting="posi"]').val(),tit=$('#b_5cfdc451d3d281 [module-setting="title"]').val();$('#b_5cfdc451d3d281').find('.left').addClass(tit);$('#b_5cfdc451d3d281').parents('.item').attr('data-state',hd);$('#b_5cfdc451d3d281').parents('.item').attr('data-posi',posi);$('#b_5cfdc451d3d281').parents('.item').css({'padding-top':pd,'padding-bottom':pd})});
 $("#s_5cfdc451d58f72 .menu_tg").unbind("click").click(function(){$('#s_5cfdc451d58f72 .list-group').slideToggle(400)});$("#s_5cfdc451d58f72 .list-group-item").each(function(index){$("#s_5cfdc451d58f72 .list-group-item").eq(index).find('.icon').hide();$("#s_5cfdc451d58f72 .list-group-item").eq(index).find('.icon').parent('a').addClass();if($("#s_5cfdc451d58f72 .list-group-item").eq(index).find('ul').hasClass('list-group2')){$("#s_5cfdc451d58f72 .list-group-item").eq(index).find('.icon').show()}})
var posi=$('#s_5cfdc451d58f72 [module-setting="posi"]').val();if(posi=='true'){$("#s_5cfdc451d58f72 .list-group-item .icon").parent('a').removeClass('left')}else{$("#s_5cfdc451d58f72 .list-group-item .icon").parent('a').addClass('left')}
$(function(){$("#s_5cfdc451d58f72 .switch").unbind("click").click(function(){($(this).data("target")=="this")?$(this).toggleClass((typeof($(this).data("class"))!="undefined")?$(this).data("class"):"ON"):$($(this).data("target")).toggleClass((typeof($(this).data("class"))!="undefined")?$(this).data("class"):"ON");$(this).find('span').toggleClass("icon-list9");$(this).find('span').toggleClass("icon-list10")})});$("#s_5cfdc451d58f72 .list-group-item> a> span").click(function(event){$(this).find('.icon-more2').toggleClass('_more');$(this).parent('a').siblings('.list-group2').stop().slideToggle(300);return!1});$("#s_5cfdc451d58f72 .wrap").css('border-radius',$('#s_5cfdc451d58f72 [module-setting="radius"]').val());
 $(document).ready(function(){$('.pages_5cfdc451e513f7').val(location.href);$("#inquire_form").bootstrapValidator({feedbackIcons:{valid:'icon-checkmark',invalid:'icon-cancel3',validating:'icon-refresh'},fields:{name:{validators:{notEmpty:{message:"Do not allow empty"}}},phone:{validators:{notEmpty:{message:"Do not allow empty"}}},contents:{validators:{notEmpty:{message:"Do not allow empty"}}},email:{validators:{notEmpty:{message:"Do not allow empty"},emailAddress:{message:"Please enter a valid e-mail format"}}},yzm:{validators:{notEmpty:{message:"Do not allow empty"}}}}})});
 $(document).ready(function(){$("#inquire_form").bootstrapValidator({feedbackIcons:{valid:'icon-checkmark',invalid:'icon-cancel3',validating:'icon-refresh'},fields:{contents:{validators:{notEmpty:{message:"Do not allow empty"}}},email:{validators:{notEmpty:{message:"Do not allow empty"},emailAddress:{message:"Please enter a valid e-mail format"}}},yzm:{validators:{notEmpty:{message:"Do not allow empty"}}}}})});
 function downloadApp(){$('#download-app img').each(function(){$(this).attr('src',$(this).data('src'))})}
var userAgent=window.navigator.userAgent;if(userAgent.toLowerCase().match(/MicroMessenger/i)=='micromessenger'){$(".app-wechat").show()}else if(userAgent.indexOf("Safari")>-1&&userAgent.indexOf("iPhone")>-1){$(".app-safari").show()}else{if($(".app-android").length){$(".app-android").show()}else{$("[data-content='create-app']").hide()}};
 var mqChatFanyi=["Do not allow empty","Please enter a valid e-mail format","Name","Phone","E-mail","Content","Chat Online","verification code is incorrect","E-mail address does not exist","The sending failed, This may be a malformed format of the mailbox, Please check the following contents.","Quantity"];
 $(function(){var $class=$('.mobile_bottom');if($class.find('.icon-uniE633').parent().attr('href')=='tel:')$class.find('.icon-uniE633').parents('li').addClass('hide');if($class.find('.icon-uniE621').parent().attr('href')=='sms:')$class.find('.icon-uniE621').parents('li').addClass('hide');if($class.find('.icon-uniE63A').parent().attr('href')=='mailto:')$class.find('.icon-uniE63A').parents('li').addClass('hide');$('.mobile-bottom ul li').click(function(){$(this).find('span, i').addClass('font-color').parent('a').parent('li').siblings().find('span, i').removeClass('font-color')});$('#mobile_bottom_iquire').click(function(){if($('body').hasClass('cms_product')){if($('#cms_comment').length)$('html,body').animate({scrollTop:$('#cms_comment').offset().top-80},800);else if($('#inquire_form').length)$('html,body').animate({scrollTop:$('#inquire_form').offset().top-80},800)}else $(this).attr('href','/inquire/cart')});var _share=$('.tem01-beshare.addClass').parent('[widget-style="wrap"]');var _time=500;var timer1=null;var timer2=null;if(!_share.length||_share.hasClass('hidden')||!_share.find('li').length){$class.find('.icon-share').parents('li').addClass('hidden')};$('#mobile_bottom_share').on('click',function(){var _item=_share.find('.tem01-beshare.addClass');_item.toggleClass('on');if(_item.hasClass('on')){clearTimeout(timer2);_item.css('display','block');timer1=setTimeout(function(){_item.addClass('startAnimation')},10)}else{clearTimeout(timer1);_item.removeClass('startAnimation');timer2=setTimeout(function(){_item.css('display','none')},_time)}})});var navactive=function(activeobj){if(!$('body').hasClass('designer-body')){$('[prodetails-con]').hide();$('[prodetails-con='+activeobj+']').show()}}