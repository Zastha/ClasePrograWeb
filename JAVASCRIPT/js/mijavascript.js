document.write("<h1>Programacion Web<h1>");

console.log("Hacia la Consola");

//console.error("Lanza un error");

let x;//debilmente tipado

console.log(x);
cnosop
//tipos de datos:
/*
UNDEFINED = TIPO DE DATO Y VALOR
BOOLEAN = 
NUMBER
string 
big int
symbol
null
object
function*/

let esPW = !true;

if(esPw){
    console.log("Estamos en clase");
}else{
        console.log("No estamos en calse.")
    }let numero =123.0

    
    console.log(numero);

    let palabra = "Programacion 'Web'";
    let palabra2 = "P''W" + numero;
    let palabra3 = `Programacion web con mas de una linea
    y puedo agregar interpolacion de variables ejemplo: ${numero}`;

    console.log(palabra);
    console.log(palabra2);
    console.log(palabra3);

    let id1 = Symbol("id");
    let id2 = Symbol("id");

    console.log(id1)

    let usuario = {nombre: "Juan",[id1]:48};
    console.log(`${usuario.nombre} ${usuario[id1]}`)
    let variablesnulas = null;
    console.log(variablesnulas);

    const PI = 3.1416;
    console.log(PI);

    //Arreglos
    let arreglo = [];
    console.log(arreglo);
    arreglo = [1,2,3];
    console.log(arreglo);
    arreglo.push(4);
    console.log(arreglo);
    arreglo.pop();
    console.log(arreglo);
    arreglo.shift();
    console.log(arreglo);
    ///agregar un elemento a la primera posicion
    arreglo.unshift(10);
    console.log(arreglo);

    let objeto={nombre:"martin",edad:48}
    console.log(Object.keys(objeto))
    console.log(Object.values(objeto))
    console.log(Object.entries(objecto))