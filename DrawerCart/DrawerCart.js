//////////////////////////////////////////////////////////////////////////////////////////
////	DRAWER CART
//////////////////////////////////////////////////////////////////////////////////////////


function HelloWorld(){
	alert("Hello World!");
}

function OpenDrawerCart(){
	var drawer_cart= document.getElementById("drawer_cart");
	ToggleClasses(drawer_cart,"hide","display");
}


function CloseDrawerCart(){
	var drawer_cart= document.getElementById("drawer_cart");
	ToggleClasses(drawer_cart,"display","hide");
}



//////////////////////////////////////////////////////////////////////////////////////////
////Name:	ToggleClasses
////Pre:	elem: Elemnt where you will toggle classes
////		cborrar: First goes class name to delete
////		cañadir: After goes class name to add
///Post: 	Toggles classes, removes first one and adds the second 
//////////////////////////////////////////////////////////////////////////////////////////

function ToggleClasses(elem,cborrar,cañadir){
	elem.classList.remove(cborrar);
	elem.classList.add(cañadir);
}

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
