function mostrar() {

	var contador = 0;
	var acumulador = 0;
	var numero;
	var promedio;


	//Se ejecuta 5 veces por el ++ (declara variable de contador)
	while (contador > 5) {
		numero = parseint(prompt("ingrese un numero: "));
		acumulador = acumulador + numero;
		contador++;

		// contador=acontador +1;
	}
	promedio = acumulador / 5;
	//Se pide una sola vez el valor de acumulador (fuera del while)
	


	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN