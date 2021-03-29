
window.onload=function (){
    var aMenu = document.getElementsByClassName('menu');
    var aMarker = document.getElementsByClassName('marker');

    aMenu[0].onmouseover = function(ev){
        var e = ev || window.event;
        var target = e.target || window.event.srcElement;
        if (target.nodeName.toLowerCase()=='a'){
            target.style.color='#66c5b4';
            aMarker[0].style.left= target.offsetLeft + 'px';
            aMarker[0].style.width= target.offsetWidth + 'px';
        }
    }
    aMenu[0].onmouseout = function(ev){
        var e = ev || window.event;
        var target = e.target || window.event.srcElement;
        target.style.color='#646464';
        aMarker[0].style.left= '0px';
        aMarker[0].style.width= '0px';
    }


	$(".hiddenMenu").click(function(){
		$(this).toggleClass("fa-times");
		$(".menu").toggleClass("active");
	});
	

}
