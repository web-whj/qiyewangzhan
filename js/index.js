$(function () {
    let a = $(".banner") ,b=$(".dian");
    let bannerTime = setInterval(move,3000);
    let n = 1;
    function move() {
        n++;
        if(n == 4){
            n = 1;
        }
        if(n == 3){
            a.removeClass('banner banner2').addClass('banner1');
            b.removeClass('d-frist').eq(2).addClass('d-frist');
        }
        else if(n == 2){
            a.removeClass('banner banner1').addClass('banner2');
            b.removeClass('d-frist').eq(1).addClass('d-frist');
        }
        else if (n == 1){
            a.removeClass('banner2 banner1').addClass('banner');
            b.removeClass('d-frist').eq(0).addClass('d-frist');

        }
    }
    b.each(function(index,ele){
            ele.onmouseover = function(){
                clearInterval(bannerTime);
                n = index;
                move();
            }
            ele.onmouseout = function(){
                bannerTime =setInterval(move,3000);
            }
    }
    );
})