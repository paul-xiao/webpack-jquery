/*
*下拉刷新插件
*paul
*2018-10-26
*/


(function($){
	$.fn.extend({
		dropload:function(){
			var _this = this;
         _this.on("touchstart", function (event) {
				console.log(event);
				_this.css({
					"height": "100px",
					"transition": "all 0s"
				});
         });
		}
	});


	$(function(){
       $(".video-list").dropload();
	});
})(window.jQuery);