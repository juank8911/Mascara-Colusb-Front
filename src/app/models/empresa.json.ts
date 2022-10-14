import {Empresa} from './empresa';

export const EMPRESA: Empresa =
{
    estado: 200,
    mensaje: "Successful transaction",
    data: [
        {
            contribuyente: {
                nombre: "MULTIENLACE S.A. ",
                numeroDocumento: "8110089636",
                tipoDocumento: "CO1N",
                telefono: {
                    fijo: "3202633122",
                    celular: "3202633122"
                },
                direccion: {
                    pais: {
                        id: "null",
                        nombre: "null"
                    },
                    departamento: {
                        id: "11",
                        nombre: "BOGOTA D.C."
                    },
                    ciudad: {
                        id: "000000011001",
                        nombre: "BOGOTA D.C."
                    },
                    localidad: {
                        id: "null",
                        nombre: "null"
                    },
                    direccionPrincipal: "CL 24 71 00",
                    barrio: "LOC. FONTIBON",
                    direccionSecundaria: "null"
                },
                correoElectronico: "LFHERNANDEZ@GRUPOKONECTA.COM",
                sitioWebEmpresa: "null",
                representanteLegal: {
                    id: "03",
                    tipoDocumento: "CO1C",
                    numeroDocumento: "80426607",
                    nombre: "ANDRES  CEPEDA ANDRADE",
                    primerNombre: "ANDRES",
                    segundoNombre: "null",
                    primerApellido: "CEPEDA",
                    segundoApellido: "ANDRADE",
                    idPosicion: "null"
                },
                contactoAdministrador: {
                    tipoDocumento: "CO1C",
                    numeroDocumento: "39693356",
                    nombre: "CLAUDIA MARCELA ACEVEDO CALLEJAS"
                },
                nombreSujetoDerecho: "03",
                formaJuridica: "Privada",
                actividadEconomica: {
                    codigo: "8220",
                    descripcion: "Actividades de centros de llamadas (Call center)",
                    agrupacion: "Actividades de centros de llam"
                },
                clase: {
                    id: "A",
                    descripcion: "Aportante con 200 a más cotizantes"
                },
                leyMiPyme: "null",
                fechaAfiliacion: "19981008",
                idAlcaldia: "null",
                idOficinaColsubsidio: "null",
                localidad: "00000009",
                tipoPersona: "null",
                tipoContribuyente: "null",
                fechaInicio: "1997-03-01",
                detalleAportantes: [
                    {
                        tipoContrato: "S1",
                        descripcionContrato: "Cuenta Contrato Empresa Afiliada",
                        claseInterlocutor: "ZEMP",
                        descripcionInterlocutor: "Empresa",
                        estado: {
                            estadoId: "VIGEN",
                            fechaInicio: "19981008",
                            fechaFin: "99991231"
                        },
                        numeroCotizantes: 300,
                        numeroConyuges: 0,
                        numeroPacs: 0,
                        retiro: {
                            motivo: "null",
                            descripcion: "null"
                        },
                        modalidad: {
                            nombre: "null",
                            descripcion: "null"
                        },
                        pago: {
                            via: "4",
                            descripcion: "Tarjeta Afiliacion Cuota Mon."
                        },
                        ultimoCicloPagado: "202208",
                        fechaInicioAporte: "2013-01-01",
                        distribucionId: "null",
                        pagoAportesId: 4
                    }
                ]
            }
        }
    ]
}
