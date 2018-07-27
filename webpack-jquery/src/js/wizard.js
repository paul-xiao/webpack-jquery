import  "../styles/less/index.less";


(function($){
  $(".tips span:nth-child(2)").hover(function(){
  $(".tip").toggle();
  });

  var a=0;
 var Int = setInterval(function(){
  a++;
   switch(a){
    case 1:
    $(".progress-bar-info").css("background-color","lightblue");
    $(".progress-bar").width("10%");
    $(".progress-value").text("10%");
    $(".progress-info").text("正在安装数据库");
    break;
     case 2:
     $(".progress-bar-info").css("background-color","lightgreen");
     $(".progress-bar").width("25%");
      $(".progress-value").text("25%");
    $(".progress-info").text("正在安装Tomcat");
    break;
     case 3:
     $(".progress-bar-info").css("background-color","lightyelllow");
     $(".progress-bar").width("60%");
      $(".progress-value").text("60%");
      $(".progress-info").text("正在安装部署后台应用");
    break;
     case 4:
     $(".progress-bar-info").css("background-color","lightgreen");
     $(".progress-bar").width("85%");
      $(".progress-value").text("85%");
       $(".progress-info").text("正在启动系统");
    break;
     case 5: 
    $(".progress-bar-info").css("background-color","lightblue");
    $(".progress-bar").width("100%");
     $(".progress-value").text("100%");
     $(".progress-info").text("部署完成");
     $(".opt a").last().removeClass("disabled");
    break;
   }


   console.log(a);
  },2000);


setTimeout(function(){
window.clearInterval(Int);
},10000);

})(window.jQuery);