function mostrar()

  
    var contadorTemperaturaPar=0;
    var maspesado =0;
    var flag=0;
    var contadorProductosBajoCero=0;
    var acumuladorpeso=0;
    var contadorPeso=0;
    var promedioPeso;
    var pesoMaximo;
    var pesoMinimo;
    var respuesta;
    var flag =0;
    var flag2=0;


    //Pedir marca y peso
    do {
var marca=prompt('Ingrese la marca: ');
var peso= parseFloat (prompt ('Ingrese el peso')); 

//Validad peso
while (isNaN (peso) || peso < 1 || peso <100) {
    peso=parseFloat (prompt( 'Error. Ingrese el peso: '));

}
//Pedir temperatura
var tempertaturaAlmacenamiento = parseFloat (prompt ('ingrese temperatura de almacenamiento'));

while (isNaN (temperaturaAlmacenamiento)|| temperaturaAlmacenamiento <-30 || temperaturaAlmacenamiento >30){
    temperaturaAlmacenamiento =parseFloat (prompt('Error. Ingrese Temperatura almacenamiento'));
}

acumuladorPeso=acumuladorPeso +peso;
contadorPeso ++;

if (temperaturaAlmacenamiento %2 ==0) {
    contadorTemperaturasPares++;
}
    if (peso > masPesado || flag==0){
        masPesado=peso;
        Marcamaspesado=marca;
        flag=1;

    }
    

    if (temperaturaAlmacenamiento <0) {
        contadorProductosBajoCero++

    }
    if (peso>pesoMaximo || flag1 ==0) {
        pesoMaximo= peso;

    }

    if (peso <pesoMinimo ||flag2 ==0) {
        pesoMinimo=peso;
    }

    respuesta= prompt ('desea continuar?'). toLowerCase ();
} while (respuesta == 's');

PromedioPeso= acumuladorPeso/contadorPeso;


alert ("La cantidad de temperaturas pares : " + contadorTemperaturasPares + "Marca del producto máspesado :" + Marcamas pesado + "Cantidad de productos que se conservan a menos de 0 grados: " + contadorProductosBajoCero+ "Promedio del peso de todos los productos:  " + PromedioPeso.toFixed (2) + "Peso Máximo : " + pesoMaximo + "Peso minimo: " + pesoMinimo);




)




    }
   
}
