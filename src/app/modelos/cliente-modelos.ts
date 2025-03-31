export type Clientes = Cliente[];

export interface Cliente {
    id?: number;
    nombreCompleto?: string;
    nombres?: string;
    apellidos?: string;
    tipoIdentificacion?: string;
    numeroIdentificacion?: string;
    direccion?: string;
    email?: string;
    celular?: string;
    haAutorizadoManejoInformacion?: boolean;
    nombreContactoPrincipal?: string;
    celularConctatoPrincipal?: string;
}
