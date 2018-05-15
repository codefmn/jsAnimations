window.onload = function(){
    var sidebar = document.getElementById('sidebar');
    sidebar.onmouseover = function(){
        move(0);
    }
    sidebar.onmouseout = function(){
        move(-200);
    }
}

var timer = null;
function move(destination){
    clearInterval(timer);
    var sidebar = document.getElementById('sidebar');
    var speed = (destination - sidebar.offsetLeft)/10;
    speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
    timer = setInterval(function(){
        if(sidebar.offsetLeft==destination){
            clearInterval(timer);
        }else{
            sidebar.style.left = sidebar.offsetLeft+speed+'px';
        }
    },50);
}