import  "../views/components/wjapp/vendor/frozenui.css";
import  "../views/components/wjapp/styles/wjapp.less";
import  "../styles/less/fonts/iconfont.css";


(function($){

 $(".ui-searchbar").click(function(){
    $(".ui-searchbar-wrap").addClass("focus");
    $(".ui-searchbar-input input").focus();
 });
 $(".ui-searchbar-cancel").click(function(){
    $(".ui-searchbar-wrap").removeClass("focus");
 });
 
 var wjapp = {};
 wjapp.userInfoToggle=function(){
   $(".user-info").click(function(){
     $(".nav-aside").css("left","0");
     $(".nav-shade").show();
   });
   $(".nav-shade").click(function(){
     $(".nav-aside").css("left","-80%");
     $(".nav-shade").hide();
   });
 }();

 wjapp.moreTabs = function(){
 
  $(".more-tabs").click(function(){
  $(".tabs-select").show();
  });
  $(".tabs-select-list a").click(function(){
  $(".tabs-select").hide();
  });
 }();

 wjapp.shareWinToggle = function(){
   $("#share").click(function(){
   $(".share-box").css("bottom","0");
   $(".shade").show();
   });
   $(".shade").click(function(){
   $(".share-box").css("bottom","-300px");
   $(".shade").hide();
   });
   $(".share-box button").click(function(){
   $(".share-box").css("bottom","-300px");
   $(".shade").hide();
   });
   $("#fav i").click(function(){
   if(!$(this).hasClass("fav_full")){
   $(this).addClass("fav_full");
   }else{
    $(this).removeClass("fav_full");
   }
   });
 }();


 wjapp.likeToggle = function(){
  $(".like i").click(function(){
  //var like_count = parseInt($(this).prev().text());
  if(!$(this).hasClass("like_full")){
  $(this).addClass("like_full");
  //like_count++;
 // $(this).prev().text(like_count);
  }else{
  $(this).removeClass("like_full");
 // like_count--;
 // $(this).prev().text(like_count);
  }
  });


 }();

 wjapp.tabSwipe =function(){
   var tabWidth = $(".news-tabs li").length*80+"px";
  $(".news-tabs .ui-tab-nav").width(tabWidth);
 $(".x-tab li").click(function(){
  $(this).addClass("current").siblings().removeClass("current");
 // $(".tab-slide-item").eq($(this).index()).css({"left":"0","display":"block"}).siblings().css({"left":"100%","display":"none"});
 });
 $(".comment-input input").focus(function(){
  $(this).parents(".news-detail-comment").addClass("active");
  $("#publish").show();
 });
 $("#publish").click(function(){
 $(".news-detail-comment").removeClass("active");
  $("#publish").hide();
 });
 }();

})(window.jQuery);

   