export class Afiliado {

  estado: number;
  data:[{
  pacs: [
      {
          bNombre: string;
          bNombreAl:string;
          relacion: string;
          estado: string;
          fechaNacimineto: string;
          fechaInicioVigencia: string;
          genero: string;
          discapacidad: string;
          numeroDocumento: string;
          tipoDocumento:string;
      }
  ];
  afiliado: {
      estado: string;
      nombreAl: string;
      TipoDocumento:string;
      fechaNacimiento: string;
      fechaAfiliacion: string;
      categoria: string;
      porcentajeApor: string;
      gp: string;
      nombre: string;
      tipoTrabajador: string;
      tarjetaMultiservicios: string;
      metodoPago: string;
      ultimoMesPagado: string;
      subsidio: string;
      motivoBloqueo: string;
      fechaEntrega: string;
      estadoEntrega: string;
      numeroDocumento: string;
      fechaRetiro:string;
  };
  empleadores: {
                companias: [
                    {
                        tipoDocumento: string;
                        estado: string;
                        nombre: string;
                        numberoDocumento: string;
                    }
                ]
            }
}
]
  mensaje: string;
}
