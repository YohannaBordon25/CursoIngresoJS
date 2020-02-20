function mostrar() {
	// declarar variables
	var contador = 0;
	var respuesta = 's';
	var numero;

	//pido un numero al usuario
	do {
		numero = parseInt(prompt("Ingrese un numero"));

		while (isNaN(numero)) {
			numero = parseInt(prompt("Esto no es un numero.Ingrese un numero: "));
		}
			//pregunto si quiere continuar
			respuesta = prompt ("¿Quiere continuar ingresando numeros?");



		 }while (respuesta == 's');


		
		//me fijo si es maximo o minimo
		if (flag == 0 || numero > maximo) {
			maximo = numero;

		
		if (flag == 0 || numero < minimo) 
			minimo = numero;
			flag = 1;
		


		}
	
	

	//nuestra informaciòn
{	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value= minimo;



	}}

	

		
//FIN DE LA FUNCIÓN