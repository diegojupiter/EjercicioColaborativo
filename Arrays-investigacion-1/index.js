//concat

/* lista1 = ["a", "b", "c", "d", "e"];
lista2 = ["f", "g", "h", "i", "j"];
lista3 = lista1.concat(lista2);
console.table(lista3);

//filter

const nombres = ["Diego", "Daniela", "Javiera", "Camila", "Fabián"];
const nombresLargos = nombres.filter(word => word.length > 6);
console.table(nombresLargos);
*/
// Ejercicio Pame (colaborativo)
/* Pedir al usuario que ingrese la cantidad de alumnos a los cuales les asignará una nota. Luego de ello, se va a desplegar un menú.
las opciones del menú serán las siguientes:
1) mostrar el promedio de notas
2) mostrar si la nota es aprobatoria o reprobatoria
3) mostrar si la nota esta x sobre el promedio o por debajo del promedio del curso

¿Qué es lo que tenemos que hacer? 
1- definir el array
2- pedir la cantidad de alumnos
3- solicitar las notas de cada alumno
4- saber cual es la nota aprobatoria 
5- validar que la cantidad de notas sea la correcta (límites de notas) y definir notas válidas
6- hacer una función x cada opoción del menú
7- crear el menú 
8- denifir cuando termina el menú
9- definir el promedio del curso
*/

// definimos el array
const notas = [];
// definimos la nota aprobatoria 
const notaAprobatoria = 4.0;

// le pedimos la cantidad de alumnos al usuario
let cantAlumnos = parseInt(prompt("Ingrese número de alumnos: "));

// vamos a pedir una nota x cada alumno 
for (let i = 1; i <= cantAlumnos; i++){
  // definimos la variable en donde guardaremos la nota 
  let notaAlumno=0; 
  // se declara un do... while para verificar que el valor de la nota está entre 1 y 7 y es correcto 
  do{
    notaAlumno = parseFloat(prompt("Ingrese nota del alumno  "+i+": ")); 
  }while(notaAlumno>7 || notaAlumno<1);
  // se ingresa la nota en el arreglo predefinido
  notas.push(notaAlumno);
}
/* funciones del menú */

// declaramos una función para la primera opción del menú 
// se declara con el nombre promedioNotas y se le entrega un parámetro el cual será reemplazado cuando la función sea llamada
function promedioNotas(arregloNotas){
  // declaramos una varialbe acumuladora llamada suma, la cual estará encargada de guardar la suma total de todas las notas de nuestro arreglo 
  let suma = 0;
  // para recorrer nuestro arreglo ocupamos la función "for", la cual parte en 0 hasta la cantidad de elementos que tenga el arreglo (.length)
  for(let i = 0; i < arregloNotas.length; i++){
    //sumamos todas las notas entre sí para obtener la suma total 
    suma = suma + arregloNotas[i];
  }
  //
  return suma/arregloNotas.length;
}

// crear una función que nos muestre si la nota es aprobatoria o reprobatoria 
function aprobado(notaAprobatoria, arregloNotas){
  // recorremos todas las notas una x una 
  for (let i = 0; i < arregloNotas.length; i++){
    // revisamos si es una nota con la que aprueba o reprueba
    if(arregloNotas[i]>=notaAprobatoria){
      // se le muestra al usuario la respuesta según sea el caso 
      console.log("La nota del alumno " + (i+1) + " fue de: " + arregloNotas[i] + " por lo que aprueba");
    }else{
      console.log("La nota del alumno " + (i+1) + " fue de: " + arregloNotas[i] + " por lo que reprueba");
    }
  }
}

// función que indica si la nota esta x debajo o sobre el promedio 

function sobrePromedio(arregloNotas, promedioNotas){
  // recorremos las notas una x una 
  for (let i = 0; i < arregloNotas.length; i++){
    // verificamos si esta x sobre o debajo el promedio 
    if(arregloNotas[i]>promedioNotas){
      // se le indica al usuario si la nota del alumno esta x sobre o x debajo de el promedio según sea el caso
      console.log("La nota del alumno " + (i+1) + "fue de: " + arregloNotas[i] + ", la cual está x sobre el promedio del curso, que fue de: " + promedioNotas);
    }else if(arregloNotas[i] == promedioNotas){
      console.log("La nota del alumno " + (i+1) + "fue de: " + arregloNotas[i] + ", la cual es igual al promedio del curso, que fue de: " + promedioNotas);
    }else{
      console.log("La nota del alumno " + (i+1) + "fue de: " + arregloNotas[i] + ", la cual está x debajo el promedio del curso, que fue de: " + promedioNotas);
    }
  }
}

console.log("***************** Comienzo del menú *****************");
// definimos la variable que guarda la opción del usuario
let opcion = 1;
while (opcion != 0){
  do{
    console.log("Bienvenido/a");
  console.log("Seleccione 1 si quiere obtener el promedio de notas.");
  console.log("Seleccione 2 si quiere ver si la nota es aprobatoria o reprobatoria");
  console.log("Seleccione 3 para ver si la nota está sobre o debajo del promedio");
  console.log("Seleccione 0 para salir del menú");
  opcion = parseInt(prompt("Ingrese opción: "));
  }while(opcion < 0 || opcion > 3);
  if (opcion == 1){
    console.log("El promedio de notas fue: " + promedioNotas(notas));
  }else if (opcion == 2){
    aprobado(notaAprobatoria, notas);
  }else if (opcion == 3){
    let promedio = promedioNotas(notas);
    sobrePromedio(notas, promedio);
  }else{
    console.log("Hasta la vista beibi :x");
  }
}

