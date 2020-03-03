var nota;
var sexo;
var sexoMenor;
var contadorVaronesMas6=0;
var acumuladorNotas=0;
var promedio;
var flag=0;

for (var i=0; i<5; i++) {
    nota= parseInt (prompt ("Ingrese nota (0-10):  "));
    while (nota <0 || nota >10 || isNaN (nota)) {
        nota=parseInt (prompt( "Nota invalida. Ingrese nota (0-10): "));
    }
    
    //validar nota 
    sexo= prompt ("Ingrese sexo (f-m):  ");
    while (sexo !='f' && sexo != 'm'){
        sexo=prompt ("Sexo invalido. Ingrese sexo (f-m): ");
    }
    
    //acá valido el sexo 
    acumuladorNotas=acumuladorNotas + nota;

    if (nota < notaMenor || flagg== 0) {
        notaMenor=nota;
        sexoMenor=sexo;
        flag=1;
    }
    if (sexo == 'm' && nota >=6) {
        contadorVaronesMas6++

    }
    }

    promedio= acumuladorNotas / 5;

    alert ("Primedio Notas : " + promedio + " \nNota Baja: " + notaMenor + "\nSexonota baja: " + sexoMenor + "\nContador Varones nota >6: " + contadorVaronesMas6 );

}





