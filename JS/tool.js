
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
	
    var oUl = document.getElementById("ul1");
	            
         oUl.innerHTML += oUl.innerHTML;
         oUl.style.width = 120 *32 +'px';
                
         var timer = null ;
         clearInterval(timer);
         timer = setInterval(function(){
            oUl.style.left = oUl.offsetLeft-5 +"px";
            if (oUl.offsetLeft <= -oUl.offsetWidth/2){
                oUl.style.left= 0;
            }

         },120);   

        var zoom = document.getElementById('zoom');
        var bigImg = document.getElementById('bigImg');
        var aImages = document.getElementsByClassName('work');

        for ( var i = 0; i< aImages.length; i++){

            aImages[i].onclick = function (){
                    
              zoom.style.display = 'block';

              var img = this.getElementsByTagName("img");
              bigImg.src = img[0].src;

               }
        }

        bigImg.onclick = function() {
              zoom.style.display = 'none';
            }



        var modal = document.getElementById('modal');
        var bgImg = document.getElementById('bgImg');
        var myImg = document.getElementById('myImg');

        myImg.onclick = function() {
            modal.style.display = 'block';
        }

        bgImg.onclick = function() {
            modal.style.display = 'none';
        }	 
}
