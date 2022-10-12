export class Afiliado {

  estado: number;
  mensaje: string;
  data: [
      {
          afiliado: {
              bp: string;
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
              estado: string;
              correoElectronico: string;
              contacto: [];
              direccion: {
                  pais: {
                      id: string;
                      nombre: string
                  };
                  departamento: {
                      id: string;
                      nombre: string
                  };
                  ciudad: {
                      id: string;
                      nombre: string
                  };
                  localidad: {
                      id: string;
                      nombre: string;
                  };
                  direccionPrincipal: string;
                  direccionSecundaria: string
              };
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
                  porcentajeAporte: string;
                  subsidio: string;
                  servicios: {
                      nombre: string
                  }
              };
              cuotaMonetaria: {
                  tieneCuotaMonetaria: string;
                  lugarEntrega: string;
                  valorUltimoSubsidio:string;
                  monto:string
              };
              tarjetaMultiservicios: {
                  metodoPago: {
                      id: string;
                      nombre: string
                  };
                  lote: string;
                  numeroTarjeta: string;
                  gp: string;
                  estado: string;
                  fechaEntrega: string;
                  estadoEntrega: string;
                  fechaExpedicion: string;
                  causaCambio: string;
                  ultimoMesPagado: string;
                  motivoBloqueo: string;
                  serialProximidad: string;
              }
          };
          empleadores: {
              empleadoresConcurrentes: string;
              companias: [
                  {
                      bp: string;
                      tipoDocumento: string;
                      numberoDocumento: string;
                      nombre: string;
                      tipoAportante:string ;
                      claserAportante: string;
                      fechaInicioActividad: string;
                      estado: string;
                      fechaIngresoAfiliado: string;
                      fechaInicioVigencia: string;
                      fechaFinVigencia: string;
                      salario: string;
                      sucursal: string;
                      telefono: string;
                      localidad: string;
                      direccion: {
                          ciudad: string;
                      };
                      empresaPrincipal: string;
                  }
              ]
          };
          pacs: [
            {
              bp: string;
              tipoDocumento: string;
              numeroDocumento: string;
              primerNombre: string;
              segundoNombre: string;
              apellido: string;
              segundoApellido: string;
              edad: string;
              genero: string;
              fechaNacimiento: string;
              relacion: {
                codigo: string;
                descripcion: string;
              };
              fechaInicioVigencia: string;
              fechaFinVigencia: string;
              fechaRegistroRetiro: string;
              discapacidad: string;
              fechaLimiteComprobanteNutricional: string;
              documentacion: {
                motivoBloqueo: string;
                bloqueo: string;
                descripcionBloqueo: string;
              };
              subsidio: {
                valor: string;
                tipoEntrega: string;
                administrador: {
                  nombre: {
                    primerNombr: string;
                    segundoNombre: string;
                    apellido: string;
                    segundoApellido: string;
                  };
                  documento: {
                    numero: string;
                    tipo: string;
                  }
                }
              };
              tarjeta: {
                numero: string;
                estado: string;
                lote: string;
              };
              cuotaMonetaria: {
                motivoBloqueo: string;
                salario: string;
                categoriaSalarial: string;
              };
              comprobanteNutricional: string;
              nivelEducativo: string;
              institucionEducativa: {
                descripcion: string;
                nombre: string;
                documento: {
                  numero: string;
                  tipo: string;
                }
              };
              fechaPersona: string;
              fechaRegistro: string;
              indicadorPersona: string;
              causaRetiro: string;
              biologico: {
                descripcion: string;
                nombre: {
                  primerNombre: string;
                  segundoNombre: string;
                  apellido: string;
                  segundoApellido: string;
                };
                documento: {
                  numero: string;
                  tipo: string;
                }
              };
              estado: string;
            }
          ];
          validado: string
      }
  ]

}
