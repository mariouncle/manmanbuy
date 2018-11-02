$(function() {
    /* 需求模板：当__按钮__被__点击__时，效果是__返回顶部__ */
    $('.go').click(function() {
        $('html,body').stop().animate({
            scrollTop: 0
        });
    });
    /* 需求模板：当__按钮__被__点击__时，效果是__展开更多导航栏__ */
    $('.nav-more').click(function() {
        $('.nav-footer').toggle();
    })
});