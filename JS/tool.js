
window.onload=function (){
    var menu = document.getElementById('menu');
    var marker = document.getElementById('marker');

    menu.onmouseover = function(ev){
        var e = ev || window.event;
        var target = e.target || window.event.srcElement;
        if (target.nodeName.toLowerCase()=='a'){
            target.style.color='#66c5b4';
            marker.style.left= target.offsetLeft + 'px';
            marker.style.width= target.offsetWidth + 'px';
        }
    }
    menu.onmouseout = function(ev){
        var e = ev || window.event;
        var target = e.target || window.event.srcElement;
        target.style.color='#646464';
        marker.style.left= '0px';
        marker.style.width= '0px';
    }

}