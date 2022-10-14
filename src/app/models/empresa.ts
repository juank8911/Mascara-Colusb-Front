export class Empresa {
    estado: number;
    mensaje: string;
    data: [
        {
            contribuyente: {
                nombre: string;
                numeroDocumento: string;
                tipoDocumento: string;
                telefono: {
                    fijo: string;
                    celular: string;
                },
                direccion: {
                    pais: {
                        id: string;
                        nombre: string;
                    },
                    departamento: {
                        id: string;
                        nombre: string;
                    },
                    ciudad: {
                        id: string;
                        nombre: string;
                    },
                    localidad: {
                        id: string;
                        nombre: string;
                    },
                    direccionPrincipal: string;
                    barrio: string;
                    direccionSecundaria: string;
                },
                correoElectronico: string;
                sitioWebEmpresa: string;
                representanteLegal: {
                    id: string;
                    tipoDocumento: string;
                    numeroDocumento: string;
                    nombre: string;
                    primerNombre: string;
                    segundoNombre: string;
                    primerApellido: string;
                    segundoApellido: string;
                    idPosicion: string;
                },
                contactoAdministrador: {
                    tipoDocumento: string;
                    numeroDocumento: string;
                    nombre: string;
                },
                nombreSujetoDerecho: string;
                formaJuridica: string;
                actividadEconomica: {
                    codigo: string;
                    descripcion: string;
                    agrupacion: string;
                },
                clase: {
                    id: string;
                    descripcion: string;
                },
                leyMiPyme: string;
                fechaAfiliacion: string;
                idAlcaldia: string;
                idOficinaColsubsidio: string;
                localidad: string;
                tipoPersona: string;
                tipoContribuyente: string;
                fechaInicio: string;
                detalleAportantes: [
                    {
                        tipoContrato: string;
                        descripcionContrato: string;
                        claseInterlocutor: string;
                        descripcionInterlocutor: string;
                        estado: {
                            estadoId: string;
                            fechaInicio: string;
                            fechaFin: string;
                        },
                        numeroCotizantes: number;
                        numeroConyuges: number;
                        numeroPacs: number;
                        retiro: {
                            motivo: string;
                            descripcion: string;
                        },
                        modalidad: {
                            nombre: string;
                            descripcion: string;
                        },
                        pago: {
                            via: string;
                            descripcion: string;
                        },
                        ultimoCicloPagado: string;
                        fechaInicioAporte: string;
                        distribucionId: string;
                        pagoAportesId: number;
                    }
                ]
            }
        }
    ]
}
