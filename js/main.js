/**
 * Created by BenTfu on 2017/6/28.
 */
//iframe
$(document).ready(function () {
    var ex_iframe = $("#ex_iframe");
    $("#list_title").find("a").on("click",function () {
        switch (this.innerText){
            case this.innerText = "内资注册":
                ex_iframe.attr("src","info01.html");
                break;
            case this.innerText = "外资注册":
                ex_iframe.attr("src","info02.html");
                break;
            case this.innerText = "港外企注册":
                ex_iframe.attr("src","info03.html");
                break;
            case this.innerText = "特殊行业注册":
                ex_iframe.attr("src","info04.html");
                break;
            case this.innerText = "代理记账":
                ex_iframe.attr("src","info05.html");
                break;
            case this.innerText = "优惠政策":
                ex_iframe.attr("src","info06.html");
                break;
            case this.innerText = "增值服务":
                ex_iframe.attr("src","info07.html");
                break;
            default:
                ex_iframe.attr("src","info01.html");
        }
    })
});
$(document).ready(function () {
    $(".li_title").on("click",function () {
        $(".li_title").removeClass("li_active");
        $(this).addClass("li_active");
    })
});
$(document).ready(function () {
    var g_more = $(".g_more");
    g_more.css("display","none");
    $("#more").on("click",function () {
       g_more.slideToggle("slow");
       if (this.innerText == "┼ 更多"){
            this.innerText = "︽ 收起";
       }else {
           this.innerText = "┼ 更多";
       }
    })
});
//底部导航
$(document).ready(function () {
    $("#Nav").bind('click',function toshare() {
        $(".am-share").addClass("am-modal-active");
        if($(".sharebg").length>0){
            $(".sharebg").addClass("sharebg-active");
        }else{
            $("body").append('<div class="sharebg"></div>');
            $(".sharebg").addClass("sharebg-active");
        }
        $(".sharebg-active,.share_btn").click(function(){
            $(".am-share").removeClass("am-modal-active");
            setTimeout(function(){
                $(".sharebg-active").removeClass("sharebg-active");
                $(".sharebg").remove();
            },300);
        })
    })
});

