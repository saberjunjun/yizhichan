//搜索框搜索切换
$(".logo-search-bar>div").click(function(){
    $(".logo-search-bar>p").slideToggle(500);
});

$(".logo-search-bar>p").click(function(){
    var txt = $(this).text();
    var txt2 = $(".logo-search-bar span").text();
    $(".logo-search-bar span").text(txt);
    $(this).slideUp(500);
    $(this).text(txt2);
    txt == "搜商标"?$(".logo-search-bar input").attr("placeholder","输入你想买的商标名称/商标号/适用服务"):$(".logo-search-bar input").attr("placeholder","输入你想买的专利名称");
});

//登录框内容无缝滚动
var Tp = $(".login-scroll>div>ul").height();
$(".login-scroll>div").append($(".login-scroll>div>ul").clone());
var time = setInterval(function(){
    var scrH = $(".login-scroll>div").position().top;
    if(scrH == -Tp){
        $(".login-scroll>div").css("top","0");
    }else {
        scrH --;
        $(".login-scroll>div").css("top",scrH+'px');
    }
},50);

$(".login-scroll>div").hover(
    function(){
        clearInterval(time);
    },
    function(){
        time = setInterval(function(){
            var scrH = $(".login-scroll>div").position().top;
            if(scrH == -Tp){
                $(".login-scroll>div").css("top","0");
            }else {
                scrH --;
                $(".login-scroll>div").css("top",scrH+'px');
            }
        },50);
    }
);

//登录表单
$(".header-bar-login").click(function(){
    $("#login-register li:eq(0)").addClass("login-register-border").siblings().removeClass("login-register-border");
    $("#register-pwd,#login-register p label:first").show();
    $("#login-register>div,#login-register p label:last").hide();
    $("#shadow").show();
    $("#login-register").show(350);
});

$(".header-bar-register").click(function(){
    $("#login-register li:eq(1)").addClass("login-register-border").siblings().removeClass("login-register-border");
    $("#register-pwd,#login-register p label:first").hide();
    $("#login-register>div,#login-register p label:last").show();
    $("#shadow").show();
    $("#login-register").show(350);
});

$("#login-register .icon-close").click(function(){
    $("#shadow,#login-register").hide();
});

//全部分类展示
$("#list").hover(
    function(){
        $(".list").height(168);
        $(".list-all").css("bottom","-63px").html("<p><span>收起</span><i class='iconfont icon-packup'></i></p>");
    },function(){
        $(".list").height(94);
        $(".list-all").css("bottom","0").html("<p><span>全部分类</span><i class='iconfont icon-unfold'></i></p>");;
    }
);

// 商标专利
addTab("#brand");
addTab("#patent");

// 底部定位切换
$(".bottom-position-close").click(function(){
    $("#bottom-position").css("left","-100%");
    $("#bottom-position-link").show();
});

$("#bottom-position-link").click(function(){
    $("#bottom-position").animate({left:0},300);
    $("#bottom-position-link").hide();
});

//左侧定位
$(window).scroll(function(){
    var h = document.body.scrollTop || document.documentElement.scrollTop;
    //新手攻略
    var list = $("#list").offset().top;
    //交易
    var brand = $("#brand").offset().top;
    //专利
    var patent = $("#patent").offset().top;
    //案例
    var case1 = $("#case").offset().top;
    //工具
    var tool = $("#tool").offset().top;
    //窗口高度
    var winH = document.documentElement.clientHeight/2;
    //初始化
    $(".iconfont").removeClass("icon");
    if(h >= list - winH && h < brand - winH){
        $("#left-position").show().find(".icon-fenlei").addClass("icon");
    }else if(h >= brand - winH && h < patent - winH){
        $("#left-position").show().find(".icon-R").addClass("icon");
    }else if(h >= patent - winH && h < case1 - winH){
        $("#left-position").show().find(".icon-zhuanli").addClass("icon");
    }else if(h >= case1 - winH && h < tool - winH){
        $("#left-position").show().find(".icon-anli").addClass("icon");
    }else if(h >= tool - winH && h < tool){
        $("#left-position").show().find(".icon-toolsbar").addClass("icon");
    }else {
        $("#left-position").hide()
    }
    //预加载
    var brand = $("#brand").offset().top;
    if(h >= brand - winH*2){
        if($("#brand .brand-img ul").eq(0).find("img").attr("src") == "images/idx01.gif"){
            $("#brand .brand-img ul").eq(0).find("img").attr("src",$("#brand .brand-img ul").eq(0).find("img").attr("data-src")).css("width","70%");
        }
    }
    var patent = $("#patent").offset().top;
    if(h >= patent - winH*2){
        if($("#patent .brand-img ul").eq(0).find("img").attr("src") == "images/idx01.gif"){
            $("#patent .brand-img ul").eq(0).find("img").attr("src",$("#patent .brand-img ul").eq(0).find("img").attr("data-src")).css("width","70%");
        }
    }
});

$("#left-position").on("click","li",function(){
    var id = $(this).attr("date-id");
    //窗口高度
    var winH = document.documentElement.clientHeight/2;
    var idH = $('#'+id).offset().top;
    var scrollH = idH - winH;
    $('html,body').animate({scrollTop:scrollH},700);
});

// 右侧定位
$("#right-position").on('mouseenter','li',function(){
    $(this).find(".right-position-move").show().animate({top:0,opacity:1},600);
    $(this).find(".right-position-down-div").show().animate({top:"-75px",opacity:1},600);
});

$("#right-position").on('mouseleave','li',function(){
    $("#right-position").find(".right-position-move").css({"top":"-20px","opacity":0}).hide();
    $("#right-position").find(".right-position-down-div").css({"top":"-95px","opacity":0}).hide();
});

//返回顶部
$(".back-top").click(function(){
    $("html,body").animate({scrollTop:0},900);
});
$(".back-top .right-position-move").click(function(){
    return false;
});

// tab
function addTab(obj){
    $(obj+" .brand-title li").each(function(item){
        $(this).hover(
            function(){
                $(obj+" .brand-title li a").eq(item).addClass("brand-title-border").parent().siblings().find("a").removeClass("brand-title-border");
                //预加载
                if($(obj+" .brand-img ul").eq(item).find("img").attr("src") == "images/idx01.gif"){
                    var url = $(obj+" .brand-img ul").eq(item).find("img").attr("data-src");
                    $(obj+" .brand-img ul").eq(item).find("img").attr("src",url).css("width","70%");
                }
                $(obj+" .brand-img ul").stop().eq(item).fadeIn(400).siblings().fadeOut(400);
            }
        );
    });

    $(obj+" .brand-img li").each(function(item){
        $(this).hover(
            function(){
                var txt = "<div class='brand-img-window'><div class='brand-img-price'><div></div><a href=''>询&nbsp;&nbsp;价</a></div><div class='brand-img-comunication'><div></div><a href=''>联&nbsp;系&nbsp;卖&nbsp;家</a></div><a class='brand-img-detail'>点击查看详情</a></div>";
                if($(obj+" .brand-img-window").length > 0){
                    $(obj+" .brand-img-window").remove();
                    $(obj+" .brand-img li").eq(item).append(txt);
                } else {
                    $(obj+" .brand-img li").eq(item).append(txt);
                }
            },
            function(){
                $(obj+" .brand-img-window").remove(); 
            }
        );
    });
}