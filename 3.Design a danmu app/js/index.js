// 创建一个div
$("#send").click(function() {
    var div = $("<div></div>");
    var value = $("#danmu").val();
    var that = div;
    that.html(value)
    that.addClass("move")
    $(".wallpaper").append(div)
    init(that)
    move(that)
})
// 清除弹幕
$("#clear").click(function() {
    for (var i = 0; i < timers.length; i++) {
        clearInterval(timers[i])
    }
    $(".move").remove()
})
// 把每一个setInterval 放到数组中
var timers = [];
// div 移动
function move(that) {
    var i = 0;
    var timer = setInterval(function() {
        that.css({
            right: (i += 1) + "px"
        });
        if ((that.offset().left + that.width()) < $(".wallpaper").offset().left) {
            that.remove()
            clearInterval(timer)
        }

    }, 10)
    timers.push(timer)

}
// 初始化div 设置div宽度，字体颜色，
function init(that) {

    var r = Math.floor(Math.random() * 254);
    var g = Math.floor(Math.random() * 254);
    var b = Math.floor(Math.random() * 254);
    that.css({
        "color": "rgb(" + r + "," + g + "," + b + ")",
        top: Math.floor(Math.random() * $(".wallpaper").height()) + "px",
        right: -that.width(),
        width: that.width()
    })
    console.log(that.width())
}