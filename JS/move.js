function starMove(node,cssobj,complete){

clearInterval(node.timer);
node.timer = setInterval( function(){
    var isEnd=true;
    for(var attr in cssobj){
        var iTarget = cssobj[attr];
        var iCur = null;
        if (attr =="opacity"){
            iCur = parseInt(parseFloat(getStyle(node,"opacity"))*100);
        }else {
            iCur = parseInt (getStyle(node,attr));
        }
        var speed = (iTarget-iCur)/8;
        speed = speed>0?Math.ceil(speed):Math.floor(speed);
        if(attr == "opacity"){
            iCur += speed ;
            node.style.opacity = icur/100;
            node.style.filter = "alpha(opacity="+iCur+")";
        } else {
            node.style[attr]= iCur + speed+'px';
        }
        if (iCur!=iTarget){
            isEnd=false;
        }
        
    }
    if(isEnd){
        clearInterval(node.timer);
        if (complete){
            complete.call(node);
        }
    }
},30);

)

function getStyle(node,cssStr){
    return node.currentStyle ? node.currentStyle[cssStr]:getComputedStyle(node)[cssStr];
}

