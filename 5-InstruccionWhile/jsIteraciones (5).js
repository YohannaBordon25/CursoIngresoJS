function mostrar()

// a) mientras sexo no sea f y m
// mientras sexo sea distinto de f y distinto de m

{

var sexo = prompt("ingrese f ó m .");
//while (sexo== "f" || sexo == "m" )

while (sexo!="m" && sexo!= "f")    

sexo=prompt ("Sexo invalido. Reingrese de nuevo f o m ");  //tolowerCase para pasar de mayuscula a minuscula.
 





 document.getElementById('Sexo').value=sexo;


  

}//FIN DE LA FUNCIÓN