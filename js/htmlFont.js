// 入口函数
window.onload = function() {
    // 封装函数
    setHtmlFont();

    function setHtmlFont() {
        // 设置搞的宽度 / 基础值 = 要适配的屏幕宽度 / 字体的大小
        // 字体大小 =要适配的屏幕的宽度 * 基础值/ 设计稿的宽度
        /* 
            由上可知 1 适配的宽度已知到 基础值为100px  设置稿的宽度为640px;
        */
        //    基础值
        var baseVal = 100;
        //    设置稿的宽度
        var pageWidth = 640;
        //    屏幕的宽度
        var screenWidth = document.querySelector('html').offsetWidth;
        var fs = (screenWidth * baseVal) / pageWidth;
        document.querySelector('html').style.fontSize = fs + "px";
    }
    // 当屏幕的宽度改变的时候调用函数
    window.onresize = function() {
        setHtmlFont();
    }
}