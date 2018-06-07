//////////////////////////////////////////////////////////////////////////////////////////
////	DRAWER CART
//////////////////////////////////////////////////////////////////////////////////////////

function HelloWorld(){
	alert("Hello World!");
	printscreen();
}

function OpenDrawerCart(){
	var drawer_cart= document.getElementById("drawer_cart");
	if (drawer_cart.classList.contains("hide")){
		ToggleClasses(drawer_cart,"hide","display");
		MoveToLeft(drawer_cart,300,"medium","open");
	}

	//Control del OnResize()
	store_lwsize();

}

function CloseDrawerCart(){
	var drawer_cart= document.getElementById("drawer_cart");
	if (drawer_cart.classList.contains("display")){
		MoveToRight(drawer_cart,300,"medium","close");
	}
}


function ToggleClasses(elem,cborrar,cañadir){
	elem.classList.remove(cborrar);
	elem.classList.add(cañadir);
}


function MoveToLeft(elem,size,speed,type) {

	var pos;

	if(type=="resize_left") pos= (document.getElementById("drawer_cart").getBoundingClientRect().left);
	else if (type=="open") pos = window.innerWidth	|| document.documentElement.clientWidth	|| document.body.clientWidth;

	var chunk = parse_speed(speed,size);
	var count = 0;

	var delay;
	if(type=="resize_left") delay=1;
	else if (type=="open") delay=10;

	var id = setInterval(frame, delay);
	function frame() {
		if (count == size) {
			clearInterval(id);
		} 
		else {
			count += chunk;  
			elem.style.left = (pos-count) + 'px'; 
		}
	}
	store_lwsize();	
}



function MoveToRight(elem,size,speed,type) {

	var pos;

	pos= (document.getElementById("drawer_cart").getBoundingClientRect().left);
	
	var chunk = parse_speed(speed,size);
	var count = 0;


	var delay;
	if(type=="resize_right") delay=1;
	else if (type=="close") delay=10;

	var id = setInterval(frame, 1);
	function frame() {
		if (count == size) {
			if(type=="close"){ToggleClasses(drawer_cart,"display","hide");
		}
			clearInterval(id);
		} 
		else {
			count += chunk;  
			var sum = (pos+count);
			elem.style.left = (sum) + 'px'; 
		}
	}

	//Por race condition o scope variable no se guarda el nuevo valor.
	//Poner el teorico valor correcto para que en el segundo resize no haya error

	var posf= (document.getElementById("drawer_cart").getBoundingClientRect().left);
	store_lwsize();
	
}

function OnResizeDrawerCart(){

	var drawer_cart= document.getElementById("drawer_cart");
	var dist;

 	var wsize = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;

	var last_wsize = document.getElementById("wsize").innerHTML;

	//Si es un resize a pantalla mas grande, hide.
	//Pero a la vez recolocarlo para futuros open

	if(last_wsize < wsize){
		dist = wsize-last_wsize;
		MoveToRight(drawer_cart,dist,"inst","resize_right");
	}
	//Else: Haremos el Move hazia esa dirección.
	else{
		dist = last_wsize-wsize;
		MoveToLeft(drawer_cart,dist,"inst","resize_left");		
	}

}

function store_lwsize(){
	document.getElementById("wsize").innerHTML=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

function load_lwsize(){
	printf("load_lwsize() == "+document.getElementById("wsize").innerHTML);
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

function parse_speed(speed,size){

	var chunk;

	printf("parse() = size == "+size);

	switch (speed) {
	    case "low":
	        chunk = 10;
	        break;
	    case "medium":
	        chunk = 20;
	        break;
	    case "fast":
	        chunk = 40;
	        break;
	    case "inst":
	        chunk = size;
	        break;	        
	}

	return chunk;

}
