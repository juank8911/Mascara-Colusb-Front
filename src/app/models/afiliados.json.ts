import {Afiliado} from './afiliado';

export const AFILIADOS: Afiliado =
 {
   estado: 200,
     mensaje: "Successful transaction",
     data: [
         {
             afiliado: {
                 bp: "0022916570",
                 numeroDocumento: "1018497540",
                 tipoDocumento: "CO1C",
                 primerNombre: "EDWING",
                 segundoNombre: "ALBERTO",
                 primerApellido: "QUINONES",
                 segundoApellido: "LOPEZ",
                 fechaNacimiento: "1997/09/25",
                 edad: "25",
                 genero: "2",
                 estadoCivil: "1",
                 personasACargo: "0",
                 nivelEducativo: "",
                 telefono: "3431920",
                 motivoRetiro: "",
                 estado: "VIGEN",
                 correoElectronico: "null",
                 contacto: [],
                 direccion: {
                     pais: {
                         id: "",
                         nombre: ""
                     },
                     departamento: {
                         id: "11",
                         nombre: ""
                     },
                     ciudad: {
                         id: "11001       ",
                         nombre: "null"
                     },
                     localidad: {
                         id: "",
                         nombre: "00000009"
                     },
                     direccionPrincipal: "CL 24 86 49",
                     direccionSecundaria: "null"
                 },
                 afiliacion: {
                     fechaAfiliacion: "2020-05-11T00:00:00.000Z",
                     categoria: "A",
                     grupo: "ZGRP",
                     tipoSalario: "03",
                     salario: "951914",
                     salarioOtros: "0",
                     fechaRetiro: "null",
                     tipoCargo: "01",
                     horasLaboradas: "6",
                     tipoTrabajador: "ZTRA",
                     porcentajeAporte: "4.0 ",
                     subsidio: "null",
                     servicios: {
                         nombre: "null"
                     }
                 },
                 cuotaMonetaria: {
                     tieneCuotaMonetaria: "",
                     lugarEntrega: "",
                     valorUltimoSubsidio: "          0",
                     monto: ""
                 },
                 tarjetaMultiservicios: {
                    metodoPago: {
                         id: "4",
                         nombre: "Tarjeta Afiliacion Cuota Mon."
                     },
                     lote: "095",
                     numeroTarjeta: "8800010064597101    ",
                     gp: "",
                     estado: "INACTIVA",
                     fechaEntrega: "2018-05-17T00:00:00.000Z",
                     estadoEntrega: "04",
                     fechaExpedicion: "2018-02-02T00:00:00.000Z",
                     causaCambio: "",
                     ultimoMesPagado: "",
                     motivoBloqueo: "",
                     serialProximidad: "1484342545"
                 }
             },
             empleadores: {
                 empleadoresConcurrentes: "1",
                 companias: [
                     {
                         bp: "0060013767",
                         tipoDocumento: "CO1N",
                         numberoDocumento: "8110089636",
                         nombre: "MULTIENLACE S.A. ",
                         tipoAportante: "",
                         claserAportante: "D1 -Afiliados Dependientes",
                         fechaInicioActividad: "1997-03-01T00:00:00.000Z",
                         estado: "VIGEN",
                         fechaIngresoAfiliado: "2020-05-11T00:00:00.000Z",
                         fechaInicioVigencia: "2020-05-11T00:00:00.000Z",
                         fechaFinVigencia: "null",
                         salario: "951914",
                         sucursal: "",
                         telefono: "8526356",
                         localidad: "00000009",
                         direccion: {
                             ciudad: "Bogota"
                         },
                         empresaPrincipal: "X"
                     }
                 ]
             },
             pacs: [
               {
                 bp: "0020361160",
                 tipoDocumento: "CO1L",
                 numeroDocumento: "1030665145",
                 primerNombre: "SANTIAGO",
                 segundoNombre: "",
                 apellido: "AREVALO",
                 segundoApellido: "BENAVIDES",
                 edad: " 6",
                 genero: "2",
                 fechaNacimiento: "20140414",
                 relacion: {
                   codigo: "SUB-0003",
                   descripcion: "Hijo"
                 },
                 fechaInicioVigencia: "20200131",
                 fechaFinVigencia: "",
                 fechaRegistroRetiro: "",
                 discapacidad: "0",
                 fechaLimiteComprobanteNutricional: "",
                 documentacion: {
                   motivoBloqueo: "",
                   bloqueo: "",
                   descripcionBloqueo: ""
                 },
                 subsidio: {
                   valor: "39000",
                   tipoEntrega: "",
                   administrador: {
                     nombre: {
                       primerNombr: "",
                       segundoNombre: "",
                       apellido: "",
                       segundoApellido: ""
                     },
                     documento: {
                       numero: "",
                       tipo: ""
                     }
                   }
                 },
                 tarjeta: {
                   numero: "",
                   estado: "",
                   lote: ""
                 },
                 cuotaMonetaria: {
                   motivoBloqueo: "",
                   salario: "0 ",
                   categoriaSalarial: "A"
                 },
                 comprobanteNutricional: "",
                 nivelEducativo: "01",
                 institucionEducativa: {
                   descripcion: "",
                   nombre: "",
                   documento: {
                     numero: "",
                     tipo: ""
                   }
                 },
                 fechaPersona: "2020-01-31",
                 fechaRegistro: "",
                 indicadorPersona: "1",
                 causaRetiro: "",
                 biologico: {
                   descripcion: "",
                   nombre: {
                     primerNombre: "",
                     segundoNombre: "",
                     apellido: "",
                     segundoApellido: ""
                   },
                   documento: {
                     numero: "",
                     tipo: ""
                   }
                 },
                 estado: "VIGEN"
               }
             ],
             validado: "null"
         }
     ]
}
