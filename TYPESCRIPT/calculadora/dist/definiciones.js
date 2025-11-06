"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let numeros = 0;
numeros = 102;
let arreglosnumeros;
arreglosnumeros = [1, 2, 3, 4, 5];
let arreglostring;
arreglostring = ['cadena', 'otracadena', 'algo'];
let decisiones;
decisiones = false;
let arreglobooleanos = [true, false, true, false];
arreglobooleanos[0] = false;
function info(a, b, c, d) {
    console.log(a + " " + b + " " + c + " " + (d == undefined ? '-' : d));
}
info(1, 'cadena', false);
info(1, 'cadena', false, 100);
var TipoUsuario;
(function (TipoUsuario) {
    TipoUsuario[TipoUsuario["Administrador"] = 0] = "Administrador";
    TipoUsuario[TipoUsuario["Moderador"] = 1] = "Moderador";
    TipoUsuario[TipoUsuario["Invitado"] = 2] = "Invitado";
})(TipoUsuario || (TipoUsuario = {}));
function usuarios(usuario) {
    console.log(usuario.nombre + " " + usuario.tipo + " " + usuario.autoriza + " " + ((usuario.ip == undefined) ? '' : usuario.ip));
}
usuarios({ nombre: 'Martin', tipo: TipoUsuario.Administrador, autoriza: true });
usuarios({ nombre: 'Leonardo', tipo: TipoUsuario.Moderador, autoriza: true, ip: '192.168.1.4' });
let tiempo = 76_000_000;
let animal = "dinosaurio";
let extinto = true;
let mivariable;
mivariable = "cadena";
mivariable = 42;
let animales = ['perro', 'gato', 'caballo'];
let numeros1 = [1, 2, 3, 4, 5, 6];
let atributos = [];
let numeros2 = [1, 2, 3, 4, 5];
let tupla = [1, 'cadena',];
tupla.push(12);
let tupla2 = [1, ['cadena', 'cadena2', 'cadena3']];
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extragrande = 'xl';
var talla;
(function (talla) {
    talla[talla["Chica"] = 1] = "Chica";
    talla[talla["Mediana"] = 2] = "Mediana";
    talla[talla["Grande"] = 3] = "Grande";
    talla[talla["Extragrande"] = 4] = "Extragrande";
})(talla || (talla = {}));
;
var talla1;
(function (talla1) {
    talla1["Chica"] = "s";
    talla1["Mediana"] = "m";
    talla1["Grande"] = "l";
    talla1["Extra"] = "xl";
})(talla1 || (talla1 = {}));
const tallaGrande = talla.Grande;
console.log("Talla: " + tallaGrande);
var EstadoCargaPagina;
(function (EstadoCargaPagina) {
    EstadoCargaPagina[EstadoCargaPagina["Sininiciar"] = 0] = "Sininiciar";
    EstadoCargaPagina[EstadoCargaPagina["Cargando"] = 1] = "Cargando";
    EstadoCargaPagina[EstadoCargaPagina["Exito"] = 2] = "Exito";
    EstadoCargaPagina[EstadoCargaPagina["Error"] = 3] = "Error";
})(EstadoCargaPagina || (EstadoCargaPagina = {}));
const estado = EstadoCargaPagina.Exito;
//# sourceMappingURL=definiciones.js.map