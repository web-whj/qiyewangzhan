$(function () {
  console.log($('.dis'),$('.left>ul>li>.qie'))
    $('.left>ul>li>.qie').each(function (index,ele) {
    	ele.onclick=function(){
    		$('.dis').removeClass('d-frist').eq(index).addClass('d-frist');
    	}
    })
})