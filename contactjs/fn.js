$(document).ready(function(){
	$('.cbp-ig-grid li ').mouseover(function(){
         var elem = this + ' a i'
        $(this).children('a').children('i').css('color','white')
    })
    $('.cbp-ig-grid li ').mouseleave(function(){
        var elem = this + ' a i'
        console.log(elem);
        $(this).children('a').children('i').css('color','#47a3da')
    })
})