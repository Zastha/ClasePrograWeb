let numeros:number = 0;
numeros = 102;

let arreglosnumeros:number[];

arreglosnumeros=[1,2,3,4,5];

let arreglostring:string[];

arreglostring = ['cadena','otracadena','algo'];
let decisiones:boolean;
decisiones = false;
let arreglobooleanos:boolean[] = [true,false,true,false];

arreglobooleanos[0] = false;

function info(a:number,b:string,c:boolean,d?:number):void{
    console.log(a+" "+b+" "+c+" "+(d==undefined ? '-':d));
}

info(1,'cadena',false);


info(1,'cadena',false,100);

enum TipoUsuario{
    Administrador,
    Moderador,
    Invitado
}
type Usuario = {
    nombre:string,tipo:TipoUsuario,autoriza:boolean
}

type UsuarioRedes = Usuario &{
    ip?:string;
}

function usuarios(usuario:UsuarioRedes):void{
    console.log(usuario.nombre+" "+usuario.tipo+" "+usuario.autoriza+" "+((usuario.ip == undefined) ? '':usuario.ip));
}



usuarios({nombre:'Martin',tipo:TipoUsuario.Administrador,autoriza:true});

usuarios({nombre:'Leonardo',tipo:TipoUsuario.Moderador,autoriza:true,ip:'192.168.1.4'});

//Tipos que solo existen en TS
let tiempo:number = 76_000_000;
let animal:string = "dinosaurio";
let extinto: boolean = true;
//Tipo Any
let mivariable;
mivariable = "cadena"
mivariable = 42;
//Arreglos
let animales:string[] = ['perro','gato','caballo'];
let numeros1:number[] = [1,2,3,4,5,6];
let atributos:boolean[] = []
let numeros2: Array<number> = [1,2,3,4,5];
//numeros1.map(x=>x.)
//animales.map(x=>x.)
//atributos.map(x=>x.)

//tuplas
let tupla:[number,string] = [1,'cadena',];
tupla.push(12);
let tupla2:[number,string[]] = [1,['cadena','cadena2','cadena3']];


//enums
const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

enum talla {Chica=1, Mediana, Grande, Extragrande};
enum talla1 {
Chica = 's',
Mediana = 'm',
 Grande = 'l',
Extra = 'xl'
}

const tallaGrande = talla.Grande;
console.log("Talla: "+tallaGrande);

//Ponemos const para la enum
const enum EstadoCargaPagina{Sininiciar, Cargando, Exito, Error}
const estado:number = EstadoCargaPagina.Exito;