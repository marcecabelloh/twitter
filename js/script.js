

function agregar(){

//Texto ingresado en textarea y limpiar textarea

	var tareas = document.getElementById("tarea").value;

	document.getElementById("tarea").value = "";



//donde va a estar las tareas que ingresan desde textarea

	var cont = document.getElementById("contenedor");



//Crear nuevos nodos elementos

	var nuevasTareas = document.createElement("div");

	var textoNuevaTarea = document.createTextNode(tareas);

	var elementoContenedor = document.createElement("span");



//Asignar padres a nodos creados

	elementoContenedor.appendChild(textoNuevaTarea);

	nuevasTareas.appendChild(elementoContenedor);

	cont.appendChild(nuevasTareas);



//Crear checkbox, iconosy dar atributos y clases

	var chck = document.createElement("input");

	chck.type = "checkbox";

	chck.setAttribute("class", "check");

	var basura = document.createElement("span");

	basura.classList.add("fa", "fa-trash-o");

	var cora = document.createElement("span");

	cora.classList.add("fa", "fa-heart");



// padre a nodos creados

	nuevasTareas.appendChild(chck);

	nuevasTareas.appendChild(basura);

	nuevasTareas.appendChild(cora);



//crear un evento al hacer clic, elimine o agregue la clase "tachado" al elementoContenedor

	chck.addEventListener("click", function(){

		elemento.Contenedor.classList.toggle("tachado");

	})



//quitar el icono basurero al hacerle click sobre el

	basura.addEventListener("click", function(){

		cont.removeChild(nuevasTareas);

	})

	

}