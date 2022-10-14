import { Injectable } from '@angular/core';
import {Afiliado} from '../models/afiliado';
import {Empresa} from '../models/empresa'
import {formatDate} from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class TransDatosService {

  constructor() { }

afiliadrTrnsfData(afiliado: Afiliado)
{
  let afiliados = afiliado;
  if(afiliado.data[0].afiliado.correoElectronico == "null")afiliado.data[0].afiliado.correoElectronico="";
  if(afiliado.data[0].afiliado.afiliacion.subsidio=="null")afiliado.data[0].afiliado.afiliacion.subsidio="Sin subsido";
  afiliado.data[0].afiliado.fechaNacimiento !=null? afiliado.data[0].afiliado.fechaNacimiento = formatDate(afiliado.data[0].afiliado.fechaNacimiento,'YYYY/MM/dd'+1,'es'):"";
  afiliado.data[0].afiliado.afiliacion.fechaAfiliacion!=null? afiliado.data[0].afiliado.afiliacion.fechaAfiliacion = formatDate(afiliado.data[0].afiliado.afiliacion.fechaAfiliacion,'YYYY/MM/dd','es'):"";
  afiliado.data[0].afiliado.afiliacion.fechaRetiro != null? afiliado.data[0].afiliado.afiliacion.fechaRetiro = formatDate(afiliado.data[0].afiliado.afiliacion.fechaRetiro,'YYYY/MM/dd','es'):"";
  afiliado.data[0].afiliado.tarjetaMultiservicios.fechaEntrega = formatDate(afiliado.data[0].afiliado.tarjetaMultiservicios.fechaEntrega,'YYYY/MM/dd','es');
  afiliado.data[0].empleadores.companias[0].tipoDocumento = "Nit";
  afiliado.data[0].pacs.map(benf=>{
    benf.fechaFinVigencia!=null? benf.fechaFinVigencia = formatDate(benf.fechaFinVigencia,'YYYY/MM/dd','es'):"";
    benf.fechaInicioVigencia!=null? benf.fechaInicioVigencia = formatDate(benf.fechaInicioVigencia,'YYYY/MM/dd','es'):"";
    benf.fechaRegistroRetiro!=null? benf.fechaRegistroRetiro = formatDate(benf.fechaRegistroRetiro,'YYYY/MM/dd','es'):"";
    benf.fechaNacimiento!=null? benf.fechaNacimiento = formatDate(benf.fechaNacimiento,'YYYY/MM/dd','es'):"";
    console.log(benf.tipoDocumento)
    switch (benf.tipoDocumento)
    {
      case "CO1C":benf.tipoDocumento="Cédula De Ciudadanía"
        break;
        case "CO1E": benf.tipoDocumento="Cédula de extranjería"
          break;
          case "CO1T": benf.tipoDocumento="Tarjeta de identidad"
            break;
            case "CO1L": benf.tipoDocumento="Registro Civil"
              break;
              case "CO1P": benf.tipoDocumento="Pasaporte"
                break;
                case "CO1D": benf.tipoDocumento="Carnet Diplomático"
                  break;
                  case "CO1S":
                  benf.tipoDocumento="Sin identificación del exterior"
                    break;
                    case "CO1V":
                      benf.tipoDocumento="Permiso Especial de Permanencia"
                      break;
                      case "CO1X":
                        benf.tipoDocumento="Tarjeta de extranjería"
                        break;
                        case "CO1W":
                          benf.tipoDocumento="Permiso de Protección Temporal"
                          break;

      default:
        break;
    }

  })
return afiliados
}

empresaTransDatos(empresa:Empresa)
{
  let emp = empresa;
  emp.data[0].contribuyente.tipoDocumento = "Nit";
  console.log('Fecha Inicio')
  console.log(emp.data[0].contribuyente.fechaInicio);
  emp.data[0].contribuyente.fechaInicio = formatDate(emp.data[0].contribuyente.fechaInicio,"YYYY/MM/dd"+1,"es");
  if(emp.data[0].contribuyente.tipoContribuyente=="null" || emp.data[0].contribuyente.tipoContribuyente==null)emp.data[0].contribuyente.tipoContribuyente="";
  emp.data[0].contribuyente.detalleAportantes[0].ultimoCicloPagado = emp.data[0].contribuyente.detalleAportantes[0].ultimoCicloPagado+"01";
  emp.data[0].contribuyente.detalleAportantes[0].ultimoCicloPagado = formatDate(emp.data[0].contribuyente.detalleAportantes[0].ultimoCicloPagado,'YYYYMMdd',"es");
  console.log(emp.data[0].contribuyente.detalleAportantes[0].ultimoCicloPagado);
  emp.data[0].contribuyente.detalleAportantes[0].ultimoCicloPagado = formatDate(emp.data[0].contribuyente.detalleAportantes[0].ultimoCicloPagado,'YYYYMMdd','es');
  return emp;
}


}
