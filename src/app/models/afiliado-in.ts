export interface AfiliadoIn {

    estado: number;
    mensaje: string;
    data: [
        {
            afiliado: {
                bp: number;
                numeroDocumento: number;
                tipoDocumento: string;
                primerNombre: string;
                segundoNombre: string;
                primerApellido: string;
                segundoApellido: string;
                fechaNacimiento: Date;
                edad: number;
                genero: number;
                estadoCivil: number;
                personasACargo: number;
                nivelEducativo: string;
                telefono: number;
                motivoRetiro: string;
                estado: string;
                correoElectronico: string;
                contacto: [];
                direccion: {
                    pais: {
                        id: number;
                        nombre: string
                    };
                    departamento: {
                        id: number;
                        nombre: string
                    };
                    ciudad: {
                        id: number;
                        nombre: string
                    };
                    localidad: {
                        id: number;
                        nombre: number
                    };
                    direccionPrincipal: string;
                    direccionSecundaria: string
                };
                afiliacion: {
                    fechaAfiliacion: Date;
                    categoria: string;
                    grupo: string;
                    tipoSalario: string;
                    salario: string;
                    salarioOtros: number;
                    fechaRetiro: string;
                    tipoCargo: number;
                    horasLaboradas: string;
                    tipoTrabajador: string;
                    porcentajeAporte: DoubleRange;
                    subsidio: string;
                    servicios: {
                        nombre: string
                    }
                };
                cuotaMonetaria: {
                    tieneCuotaMonetaria: string;
                    lugarEntrega: string;
                    valorUltimoSubsidio:number;
                    monto:string
                };
                tarjetaMultiservicios: {
                    metodoPago: {
                        id: number;
                        nombre: string
                    };
                    lote: string;
                    numeroTarjeta: number;
                    gp: string;
                    estado: string;
                    fechaEntrega: Date;
                    estadoEntrega: number;
                    fechaExpedicion: Date;
                    causaCambio: string;
                    ultimoMesPagado: string;
                    motivoBloqueo: string;
                    serialProximidad: number
                }
            };
            empleadores: {
                empleadoresConcurrentes: number;
                companias: [
                    {
                        bp: number;
                        tipoDocumento: string;
                        numberoDocumento: number;
                        nombre: number;
                        tipoAportante:string ;
                        claserAportante: string;
                        fechaInicioActividad: Date;
                        estado: string;
                        fechaIngresoAfiliado: Date;
                        fechaInicioVigencia: Date;
                        fechaFinVigencia: string;
                        salario: number;
                        sucursal: string;
                        telefono: number;
                        localidad: number;
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
