import { Injectable } from '@angular/core';
import {Afiliado} from '../models/afiliado';
import {Empresa} from '../models/empresa'
import {formatDate} from '@angular/common'
import {TRAN} from '../config/transformaciones'
import moment from 'moment';
moment.locale("es");

@Injectable({
  providedIn: 'root'
})
export class TransDatosService {
  tran = TRAN;
  constructor() { }

afiliadrTrnsfData(afiliado: Afiliado)
{

}


async cambiarFoematoFecha(fech:string)
{

}

empresaTransDatos(empresa:Empresa)
{
  let emp = empresa;
  emp.data[0].contribuyente.tipoDocumento = "Nit";
  console.log('Fecha Inicio')
  console.log(emp.data[0].contribuyente.fechaInicio);
  emp.data[0].contribuyente.fechaInicio = formatDate(emp.data[0].contribuyente.fechaInicio,"YYYY/MM/dd","es");
  if(emp.data[0].contribuyente.tipoContribuyente=="null" || emp.data[0].contribuyente.tipoContribuyente==null)emp.data[0].contribuyente.tipoContribuyente="";
  emp.data[0].contribuyente.detalleAportantes[0].ultimoCicloPagado = emp.data[0].contribuyente.detalleAportantes[0].ultimoCicloPagado+"01";
  emp.data[0].contribuyente.detalleAportantes[0].ultimoCicloPagado = formatDate(emp.data[0].contribuyente.detalleAportantes[0].ultimoCicloPagado,'YYYYMMdd',"es");
  console.log(emp.data[0].contribuyente.detalleAportantes[0].ultimoCicloPagado);
  emp.data[0].contribuyente.detalleAportantes[0].ultimoCicloPagado = formatDate(emp.data[0].contribuyente.detalleAportantes[0].ultimoCicloPagado,'YYYYMMdd','es');
  return emp;
}


}
