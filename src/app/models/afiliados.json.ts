import {Afiliado} from './afiliado';

export const AFILIADOS: Afiliado =
 {
   bp: "0010754520",
   numeroDocumento: "1030605587",
   tipoDocumento: "CO1C",
   primerNombre: "PAOLA",
   segundoNombre: "ANDREA",
   primerApellido: "BENAVIDES",
   segundoApellido: "BERNAL",
   fechaNacimiento: "1992-02-15",
   edad: "29",
   genero: "1",
   estadoCivil: "1",
   personasACargo: "2",
   nivelEducativo: "01",
   telefono: "3291503",
   motivoRetiro: "",
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
      ultimoMesPagado: "2021-02-26",
      motivoBloqueo: "",
      metodoPago: {
        id: "4",
        nombre: "Tarjeta Afiliacion Cuota Mon."
      }
    },
    subsidio: {
      valor: "30000"
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
        }
      ]
    }

}
