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