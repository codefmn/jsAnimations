window.onload = function() {
	var lists = document.getElementsByTagName('li');
	for(var i = 0; i<lists.length; i++){
		lists[i].timer = null;
		lists[i].onmouseover = function(){
			move(this,400);
		}
		lists[i].onmouseout = function(){
			move(this,200);
		}
	}
}

function move(object, destination){
	clearInterval(object.timer);
	var speed = (destination - object.offsetWidth)/10;
	speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
	object.timer = setInterval(function(){
		if(object.offsetWidth==destination){
			clearInterval(object.timer);
		}else{
			object.style.width=object.offsetWidth+speed+'px';
		}
	},100);
}