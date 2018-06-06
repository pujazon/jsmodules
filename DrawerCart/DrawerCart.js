//////////////////////////////////////////////////////////////////////////////////////////
////	DRAWER CART
//////////////////////////////////////////////////////////////////////////////////////////


function HelloWorld(){
	alert("Hello World!");
	printscreen();
}

function OpenDrawerCart(){
	var drawer_cart= document.getElementById("drawer_cart");
	ToggleClasses(drawer_cart,"hide","display");
	MoveToLeft(drawer_cart,300,"medium");
}


function CloseDrawerCart(){
	var drawer_cart= document.getElementById("drawer_cart");
	MoveToRight(drawer_cart,300,"medium");
}



function ToggleClasses(elem,cborrar,cañadir){
	elem.classList.remove(cborrar);
	elem.classList.add(cañadir);
}


function MoveToLeft(elem,size,speed) {

 	var pos = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;

	var chunk = parse_speed(speed);
	var count = 0;

	var id = setInterval(frame, 10);
	function frame() {
		if (count == size) {
			clearInterval(id);
		} 
		else {
			count += chunk;  
			elem.style.left = (pos-count) + 'px'; 
		}
	}
}


function MoveToRight(elem,size,speed) {

	var pos= (document.getElementById("drawer_cart").getBoundingClientRect().left);

	var chunk = parse_speed(speed);
	var count = 0;

	var id = setInterval(frame, 10);
	function frame() {
		if (count == size) {
			ToggleClasses(drawer_cart,"display","hide");
			clearInterval(id);
		} 
		else {
			count += chunk;  
			elem.style.left = (pos+count) + 'px'; 
		}
	}
	
}

function printscreen(){
	var w = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;

	var h = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;

	var x = document.getElementById("demo");
	alert("Browser inner window width: " + w + ", height: " + h + ".");
}

function printf(string){console.log(string);}

function parse_speed(speed){

	var chunk;

	switch (speed) {
	    case "low":
	        chunk = 5;
	        break;
	    case "medium":
	        chunk = 10;
	        break;
	    case "fast":
	        chunk = 20;
	        break;
	}

	return chunk;

}
