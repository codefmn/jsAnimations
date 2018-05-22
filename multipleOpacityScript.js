window.onload = function() {
	var divs = document.getElementsByTagName('div');
	for(var i = 0; i<divs.length; i++){
		divs[i].timer = null;
		divs[i].alpha = null;
		divs[i].onmouseover = function(){
			fade(this,100);
		}
		divs[i].onmouseout = function(){
			fade(this,20);
		}
	}
}

function fade(object, destination){
	clearInterval(object.timer);
	var speed = (destination - object.alpha)/10;
	speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
	object.timer = setInterval(function(){
		if(object.alpha == destination){
			clearInterval(object.timer);
		}else{
			object.alpha += speed;
			object.style.opacity = object.alpha/100;
			// object.style.filter = 'alpha(opacity:'+object.alpha+')';
		}
	},100);
}