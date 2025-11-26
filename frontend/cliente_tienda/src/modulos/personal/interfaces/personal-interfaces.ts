export interface Personal{
    id: number,
    nombre: string;
    direccion: string,
    telefono: string,
    estatus:number
}

export type PersonalAgregar = Omit<Personal,'id'>