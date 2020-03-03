function mostrar() {
    var numero;
    var letra;
    var respuesta;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var promedioPositivo;
    var contadorPositivos = 0;
    var sumaPositivos = 0;
    var sumaNegativos = 0;
    var numeroMaximo;
    var numeroMinimo;
    var letraMaximo;
    var letraMinimo;
    var flag = 0;
    var flag2 = 0;
    var flag3 = 0;

    //pedir numeros:

    do {
        numero = parseFloat(prompt('ingrese un numero entre -100 y 100'));

        //Verificar
        while (isNaN(numero) || numero < -100 || numero > 100) {

            numero = parseFloat(prompt('Error. Ingrese un número entre -100 y 100'));

        }

        //pedir letra

        letra = prompt(' ingrese una letra');
        // contador de ceros
        if (numero % 2 == 0) {
            contadorCeros++;
        }
        //contador de positivos
        if (numero > 0 || flag3 == 0) {

            sumaPositivos = sumaPositivos + numero;
            contadorPositivos++;
        }
        // suma de negativos
        if (numero < 0) {

            sumaNegativos = sumaNegativos + numero;
        }

        // numero minimo
        if (numero < numMinimo || flag == 0) {

            numMinimo = numero;
            letraMinimo = letra;
            flag = 1;
        }

        //numero maximo
        if (numero > numMaximo || flag2 == 0) {

            numMaximo = numero;
            letraMaximo = letra;
            flag2 = 1

        }

        //preguntar si quiere continuar
        respuesta = prompt('desea continuar?').toLocaleLowerCase();
    }
    while (respuesta == 's');

    //Promedio de positivos

    promedioPositivo = sumaPositivos / contadorPositivos;

    if (flag3 = 0) {
        promedioPositivo = 0
    }

    //respuesta
    document.write("Numeros pares : " + contadorPares + "</br> Numeros impares : " + contadorImpares + " </br> Cantidad de ceros: " + contadorCeros + "</b> Promedios de positivos ingresados :" + contadorPositivos.toFixed(2) + "</br> Suma negativos : " + sumaNegativos + "</b> Maximo ingresado : " + numMaximo + "Letra :" + letraMaximo + "</br> Minimo ingresado: " + numMinimo + "Letra : " + LetraMinimo);


}






}

