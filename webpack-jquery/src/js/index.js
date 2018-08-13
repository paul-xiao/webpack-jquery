import  "../styles/less/index.less";
import  "../styles/less/fonts/iconfont.css";

(function($){

var xview = {};

xview.init = function(){
xview.toggleNav();

};
xview.toggleNav = function(){
	$(".x-nav-toggle").click(function(){
		if($(this).parent().hasClass("expand")){
			$(this).parent().removeClass("expand").addClass("collapse");
		}else{
			$(this).parent().addClass("expand").removeClass("collapse");
		}
    });
    $(".x-nav li>a").click(function(){
    $(this).siblings(".x-sub-nav").toggle();
 
     if($(this).find("i").last().hasClass("x-ad")){
    $(this).find("i").last().removeClass("x-ad").addClass("x-au");
    }else{
    $(this).find("i").last().removeClass("x-au").addClass("x-ad");
    }
    });
};



xview.init();
})(window.jQuery);