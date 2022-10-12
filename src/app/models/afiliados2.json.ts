import {Afiliado} from './afiliado';

export const AFILIADOS: Afiliado[] = [
  {
  bp: "0010754520",
  numeroDocumento: "1030605587",
  tipoDocumento: "CO1C",
  primerNombre: "PAOLA",
  segundoNombre: "ANDREA",
  primerApellido: "BENAVIDES",
  segundoApellido: "BERNAL",
  fechaNacimiento: "19920215",
  edad: "29",
  genero: "1",
  estadoCivil: "1",
  personasACargo: "2",
  nivelEducativo": "01",
  telefono: "3291503",
  motivoRetiro: "",
  direccion: {
     pais: {
       id: "null",
       nombre: "null"
     },
     departamento": {
      id: "11",
      nombre: "null"
     },
     ciudad: {
       id: "11001",
       nombre: "null"
     },
     localidad: {
       id: "",
       nombre: "null"
     },
     direccionPrincipal: "CL 46A 78H 58 SUR",
     direccionSecundaria: "null"
   },
  empresa: {
     cargo: {
       descripcion: "07"
     },
     simultaneas: "1 "
   },
   alcaldia: {
     codigo: ""
   },
   tarifa: "A",
   estado: "VIGEN",
   afiliacion: {
     fechaAfiliacion: "2020-01-31",
     categoria: "A",
     grupo: "ZGRP",
     tipoSalario: "02",
     salario: "1100000",
     salarioOtros: "0",
     fechaRetiro: "",
     tipoCargo: "07",
     horasLaboradas: "8",
     tipoTrabajador: "ZTRA"
   },
   empleadores: {
     empleadoresConcurrentes: "null",
     companias: [
       {
         bp: "0060006337",
         tipoDocumento: "CO1N",
         numberoDocumento: "8300054282",
         nombre: "IDENTIFICACION Y EQUIPOS DE OFICINA IDEQS S.A.S.",
         tipoAportante: "",
         tipoPersona: "",
         claserAportante: "B",
         fechaInicioActividad: "1995-06-09",
         estado: "VIGEN",
         fechaIngresoAfiliado: "20200129",
         fechaInicioVigencia: "20200131",
         fechaFinVigencia: "",
         salario: "1100000",
         sucursal: "",
         agrupacion: "",
         localidad: "",
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
   cuotaMonetaria: {
     tieneCuotaMonetaria: "S",
     lugarEntrega: "",
     valorUltimoSubsidio: " 78.000",
     monto: "78000"
   },
   tarjetaMultiservicios: {
     lote: "609",
     numeroTarjeta: "8800010058057864 ",
     serialProximidad: "1853453561",
     gp: "",
     estado: "INACTIVA",
     fechaEntrega: "2016-10-14",
     estadoEntrega: "04",
     entrega: "",
     fechaExpedicion: "2016-10-12",
     causaCambio: "",
     ultimoMesPagado": "2021-02-26",
     motivoBloqueo: "",
     metodoPago: {
       id: "4",
       nombre: "Tarjeta Afiliacion Cuota Mon."
     }
   }

}
]
