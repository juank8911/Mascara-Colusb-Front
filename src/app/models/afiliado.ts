export class Afiliado {

  bp:string;
 numeroDocumento: string;
  tipoDocumento: string;
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  fechaNacimiento: string;
  edad: string;
  genero: string;
  estadoCivil: string;
  personasACargo: string;
  nivelEducativo: string;
  telefono: string;
  motivoRetiro: string;
afiliacion: {
  fechaAfiliacion: string;
  categoria: string;
  grupo: string;
  tipoSalario: string;
  salario: string;
  salarioOtros: string;
  fechaRetiro: string;
  tipoCargo: string;
  horasLaboradas: string;
  tipoTrabajador: string;
};
tarjetaMultiservicios: {
  lote: String;
  numeroTarjeta: String;
  serialProximidad: String;
  gp: String;
  estado: String;
  fechaEntrega: String;
  estadoEntrega: String;
  entrega: String;
  fechaExpedicion: String;
  causaCambio: String;
  ultimoMesPagado: String;
  motivoBloqueo: String;
  metodoPago: {
    id: String;
    nombre: String;
  };
};
subsidio: {
  valor: string;
};

empleadores: {
  empleadoresConcurrentes: string;
  companias: [
    {
      bp: string;
     tipoDocumento: string;
     numberoDocumento: string;
     nombre: string;
     tipoAportante: string;
     tipoPersona: string;
     claserAportante: string;
     fechaInicioActividad: string;
     estado: string;

    }
  ]
};

}
