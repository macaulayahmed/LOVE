var myTouch;
$(document).ready(function () {
    myTouch = jsTouch.init('myTouch', { width: 320, page: 'pages/home.html' });
    //jsTouch.resize();
    resize();
    //custom.init();
});
// prevent default scroll 
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
document.addEventListener('orientationchange', resize, false);
window.addEventListener('resize', resize, false);

function resize() {
    var width = parseInt(window.innerWidth);
    var height = parseInt(window.innerHeight);
    if (width > 1000 || height > 1000) {
        myTouch.width = 320;
    } else {
        myTouch.width = width;
    }
    jsTouch.resize();
}
