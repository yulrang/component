var $layerLink = document.getElementsByClassName('link-layer');
for(var i=0; i<$layerLink.length; i++){
	$layerLink[i].addEventListener('click', function(e){
		this.nextElementSibling.classList.add('on');
		if( this.nextElementSibling.classList.contains("layer") ){
			document.body.classList.add('layer-scroll-block');
		}
		e.preventDefault();
	})
}

// 레이어 공통부분
var $layerDim = document.getElementsByClassName('layer-dim');
var $layerClose = document.getElementsByClassName('layer-close');

for(var i=0; i<$layerDim.length; i++){
	$layerDim[i].addEventListener('click', function(){
		this.parentElement.classList.remove('on');
		document.body.classList.remove('layer-scroll-block');
	})
}
for(var i=0; i<$layerClose.length; i++){
	$layerClose[i].addEventListener('click', function(){
		this.closest('.layer-flow').classList.remove('on');
	})
}


// 폴리필
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
                                Element.prototype.webkitMatchesSelector;
}
if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
	    var el = this;
	    if (!document.documentElement.contains(el)) return null;
	    do {
	        if (el.matches(s)) return el;
	        el = el.parentElement;
	    } while (el !== null);
	    return null;
	};
}
