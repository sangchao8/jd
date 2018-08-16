$(function () {
    tabGl();
    
});
function tabGl() {
    $(".notice-tit").find('li');
    // console.log( $(".notice-tit").find('li'));
    $(".notice-tit").find('li').mouseenter(function () {
        $(this).index();
    // console.log(this);
    // console.log( $(this).index());
        $(this).addClass('select').siblings('li').removeClass('select');
        
        $(".js-notice-con>div.mod").eq($(this).index()).show().siblings('div').hide();
        console.log( $(".js-notice-con>div.mod").eq($(this).index()));
});
}