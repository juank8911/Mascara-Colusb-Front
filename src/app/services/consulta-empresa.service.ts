import { Injectable } from '@angular/core';
import {Empresa} from '../models/empresa';
import {AfiliadoSh} from '../models/afiliado-sh.interface';
import {Configs} from '../config/configs';
import {Observable,map} from 'rxjs';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import {TransDatosService} from '../services/trans-datos.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultaEmpresaService {

headers = new HttpHeaders;

  constructor(private http: HttpClient, private tranDatos: TransDatosService, private conf: Configs) { }



  getEmpresaApi(formsh:AfiliadoSh):Observable<Empresa>
  {

    this.headers.set('Access-Control-Allow-Origin','true');
    return this.http.get(this.conf.urlEm+formsh.numeroId,{headers:this.headers}).pipe(
      map(empres => {
        let emp = empres as Empresa
        if(emp.data[0].contribuyente.nombre!=null)emp = this.tranDatos.empresaTransDatos(emp);
        return emp;
      })
    )

    // .pipe(
    //   map( emp => {
    //   let  empresa = emp as Empresa
    //     if(empresa.data.length>0) console.log(empresa);
    //     return empresa
    //   }
    //
    //   )
    // )
  }

}
