import "../views/components/wjapp/vendor/frozenui.css";
import "../views/components/wjapp/styles/index.less";
import "font-awesome/css/font-awesome.css";
import "../styles/less/fonts/iconfont.css";
import "jquery-touchswipe";
import "video.js";
import "video.js/dist/video-js.css";

(function (doc, win) {
var docEl = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if(clientWidth>=750){
            docEl.style.fontSize = "100px";
        }else{
            docEl.style.fontSize = 100 * (clientWidth / 750) + "px";
        }
    };

if (!doc.addEventListener) return;
win.addEventListener(resizeEvt, recalc, false);
doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);

(function($) {
  $(".ui-searchbar").click(function() {
    $(".ui-searchbar-wrap").addClass("focus");
    $(".ui-searchbar-input input").focus();
  });
  $(".ui-searchbar-cancel").click(function() {
    $(".ui-searchbar-wrap").removeClass("focus");
  });

  $(".ui-icon-close").click(function() {
    $(".ui-searchbar-input input").val("");
  });
      
  var _alert = function(){
    var dom = "<div><button type='button' class='ui-btn' id='ok'>ok</button><button type='button' class='ui-btn' id='not'>not</button></div>";
    $("body").append(dom);

    $("#ok").click(function(){
      return false;
    });
     $("#not").click(function(){
      return true;
    });
  };

  console.log(_alert());
       var navList = ["热门1","热门2","热门3","热门4","热门5","热门6"];
       var currentNav = "热门1";
       var currentIndex =navList.indexOf(currentNav);
 $(".news-list").swipe( {
    //Generic swipe handler for all directions
    //swipe:function(event, direction, distance, duration, fingerCount, fingerData){
    swipe:function(event, direction){

       
     if (direction == "left") {

        if (currentIndex < navList.length && currentIndex!=-1){
          currentIndex++;
          currentNav = navList[currentIndex];
          switchTab(currentIndex+1);
        }
      } else if (currentIndex > 0 && direction == "right") {
        currentIndex--;
        currentNav = navList[currentIndex];
         switchTab(currentIndex+1); 
      }
     
       redirect($(".news-list"),"index.html");
    }
  });

var switchTab = function(index) {

  var ele = $(".ui-tab-nav li:nth-child("+index+")");
  var eleOffset = ele.position().left;
  var tabWidth = $(".ui-tab-nav-wrap").width();
 // var navWidth = $(".ui-tab-nav").width();
 if(eleOffset > tabWidth){
  var translate =tabWidth - eleOffset -ele.width()-32+"px";
 $(".ui-tab-nav").css("transform","translate("+translate+")"); 
 }else{
   $(".ui-tab-nav").css("transform","translate(0)"); 
 }
 ele.addClass("current").siblings().removeClass("current");
};

var redirect = function(ele,url) {
   $.get(url,function(data){
    ele.html(data);
    });
};



  var wjapp = {
    init: function() {
      this.pageLoading();
      this.toggleClass();
    },
    pageLoading: function() {
      var _LoadingHtml = "<div class='ui-loading-block show' id='loadingDiv'><div class='ui-loading-cnt'><i class='ui-loading-bright'></i><p>正在加载中...</p></div></div>";
      $("body").append(_LoadingHtml);
      document.onreadystatechange = completeLoading;

      function completeLoading() {
        if (document.readyState == "complete") {
          var loadingMask = document.getElementById("loadingDiv");
          loadingMask.parentNode.removeChild(loadingMask);
        }
      }

    },
    toggleClass:function(){

      var commentInput = $(".vedio-play-comment .comment-input");
      var commentList = $(".vedio-play-comment .comment-list");
      var commentBtn = $(".vedio-play-comment .comment-input button");
      var commentListClose = $(".comment-list-title i.close");
      var commentMsg = $(".vedio-play-interact i.msg");
      var playStart = $(".vedio-play-cover img:first");
      var vedioPause = $(".vedio-play-cover img:last");
      var _cover = $(".vedio-play-cover");
      var _Like = $(".vedio-play-interact i.zan");
      var _LoadingHtml = "<div class='ui-loading-block show' id='loadingDiv'><div class='ui-loading-cnt'><i class='ui-loading-bright'></i><p>正在加载中...</p></div></div>";

      //打开评论
      commentInput.find("input").click(function() {

        if (event && event.stopPropagation) {
          event.stopPropagation();
          commentList.css("bottom", 0);
          commentInput.addClass("active");
          commentBtn.text("发布");

        } else if (window.event) {
          window.event.cancelBubble = true;
        }
      });
      commentMsg.click(function(event) {

        if (event && event.stopPropagation) {
          event.stopPropagation();
          commentList.css("bottom", 0);
          commentInput.addClass("active");
          commentBtn.text("发布");

        } else if (window.event) {
          window.event.cancelBubble = true;
        }
      });



      //关闭评论
      commentListClose.click(function() {
        commentInput.removeClass("active");
        commentList.css("bottom", "-1000px");
        commentBtn.text("");
      });

      //点赞

      _Like.click(function() {
        var flag = $(this).hasClass("on");
        if (!flag) {
          $(this).addClass("on");
        } else {
          $(this).removeClass("on");
        }
      });

      //播放视频
      var vid = document.getElementById("myvideo");
      if(vid !=null){
          var myVedio = {
        _play: function(event) {
          if (event && event.stopPropagation) {
            event.stopPropagation();

            vid.play();
            playStart.hide();
            vedioPause.hide();
          } else if (window.event) {
            window.event.cancelBubble = true;
          }
        },
        _pause: function() {

          vid.pause();
          vedioPause.show();
        }
      };
      _cover.click(function() {
          if(playStart.css("display")=="none"){
             myVedio._pause();
          }
       
      });
      vedioPause.click(function() {
        myVedio._play(event);
      });

      playStart.click(function() {

        myVedio._play(event);
      });
      

     
      vid.addEventListener("waiting", function() {
      $("body").append(_LoadingHtml);
      });
       vid.addEventListener("canplay", function() {
        $("#loadingDiv").remove();
      }); 
      vid.addEventListener("ended", function() {
       playStart.show();
      });
      }

    },

    alert:function(){
        var shade = document.createElement("div");
        var box = document.createElement("div");
        var boxContent = document.createElement("div");
        var button = document.createElement("button");
        var shadeName = ["alert-shade"];
        var boxName = ["alert-wrap"];
        var boxContentName = ["alert-content"];

        shade.className = shadeName;
        box.className = boxName;
        boxContent.className = boxContentName;
        document.body.appendChild(shade);
        if (arguments[0]) {
          boxContent.innerHTML = arguments[0];
        }
        button.innerHTML = "关闭";
        shade.appendChild(box);
        box.appendChild(boxContent);
        box.appendChild(button);
        button.addEventListener("click", function() {
          shade.remove();
        });
    },
    confirm:function(msg,fun,title){
     
      title = title || "提示" ;  
      var _confirm = window.confirm;
      var _confirmHtml ="<div class='ui-dialog show' id='dialog1'><div class='ui-dialog-cnt'><div class='ui-dialog-bd' style='-webkit-box-orient: vertical;'><h3>"+title+"</h3><p>"+msg+"</p></div><div class='ui-dialog-ft'><button type='button' data-role='button'>确认</button> <button type='button' data-role='button' class='btn-recommand'>取消</button></div></div></div>";
      $("body").append(_confirmHtml);
       $(".ui-dialog-ft button:first").click(function(){ 
        $("#dialog1").remove();
         if (typeof fun === "function") {
              fun(true);
            } else {
                return _confirm(msg);
            }

        
       });

       $(".ui-dialog-ft button:last").click(function(){
        $("#dialog1").remove();
       if (typeof fun === "function") {
              fun(false);
            } else {
                return _confirm(msg);
            }

        
       });
    }


  };

window.wjapp = wjapp;

  wjapp.userInfoToggle = function() {
    $(".userInfoToggle").click(function() {
      $(".nav-aside").css("left", "0");
      $(".nav-shade").show();
    });
    $(".nav-shade").click(function() {
      $(".nav-aside").css("left", "-80%");
      $(".nav-shade").hide();
    });
  }();

  wjapp.moreTabs = function() {

    $(".more-tabs").click(function() {
      $(".tabs-select").show();
    });
    $(".tabs-select-list a").click(function() {
      $(".tabs-select").hide();
    });
  }();

  wjapp.shareWinToggle = function() {
    $("#share").click(function() {
      $(".share-box").css("bottom", "0");
      $(".shade").show();
    });
    $(".shade").click(function() {
      $(".share-box").css("bottom", "-300px");
      $(".shade").hide();
    });
    $(".share-box button").click(function() {
      $(".share-box").css("bottom", "-300px");
      $(".shade").hide();
    });
    $("#fav i").click(function() {
      if (!$(this).hasClass("fav_full")) {
        $(this).addClass("fav_full");
      } else {
        $(this).removeClass("fav_full");
      }
    });
  }();


  wjapp.likeToggle = function() {
    $(".like i").click(function() {
      //var like_count = parseInt($(this).prev().text());
      if (!$(this).hasClass("like_full")) {
        $(this).addClass("like_full");
        //like_count++;
        // $(this).prev().text(like_count);
      } else {
        $(this).removeClass("like_full");
        // like_count--;
        // $(this).prev().text(like_count);
      }
    });


  }();

  wjapp.tabSwipe = function() {
    //  var tabWidth = $(".news-tabs li").length*80+"px";
    // $(".news-tabs .ui-tab-nav").width(tabWidth);
    $(".x-tab li").click(function() {
      $(this).addClass("current").siblings().removeClass("current");
      // $(".tab-slide-item").eq($(this).index()).css({"left":"0","display":"block"}).siblings().css({"left":"100%","display":"none"});
    });
    $(".fixed-bottom .comment-input input").on("click", function(event) {
      if (event && event.stopPropagation) {
        event.stopPropagation();
        $(this).parents(".fixed-bottom").addClass("active");
        $("#publish").show();
        $("#publish").siblings().hide();
      } else if (window.event) {
        window.event.cancelBubble = true;
      }

    });
    $("#publish").click(function() {
      $(".fixed-bottom").removeClass("active");
      $("#publish").hide();
      $(this).siblings().show();
    });
    $(window).click(function() {
      $(".fixed-bottom").removeClass("active");
      $("#publish").hide();
      $("#publish").siblings().show();
    });
  }();


  wjapp.townTab = function() {
    var townList = $(".town li");
    //var communityList = $(".community li");
    townList.click(function() {
      $(this).addClass("active").siblings().removeClass("active");
    });
  }();




  wjapp.lottery = function() {
    $(".close").click(function() {
      $(".lottery-missed").hide();
      $(".lottery-goal").hide();
    });
  }();

  wjapp.moreDept = function() {
    $(".department a").click(function() {
      if ($(this).text() == "更多政务号" && $(".department-more .ui-col").length != 0) {
        $(".department-more").show();
        $(this).text("收起");
      } else if ($(this).text() == "收起" && $(".department-more .ui-col").length != 0) {
        $(".department-more").hide();
        $(this).text("更多政务号");
      } else {
        alert("没有更多数据！");
      }
    });
  }();



  wjapp.init();



})(window.jQuery);