import { Injectable } from '@angular/core';
import {Afiliado} from '../models/afiliado';
import {Configs} from '../config/configs';
import {TokenReq} from '../models/token-req';
import {Observable,map} from 'rxjs';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import {AfiliadoSh} from '../models/afiliado-sh.interface';
import {TransDatosService} from '../services/trans-datos.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultaAfiliadoService {

  headers = new HttpHeaders;

  //crera archivo de configuracion
  uriSh:String = "/v2/afiliacion/validador?";


  tokenrq: TokenReq;


  constructor(private http: HttpClient, private tranDatos: TransDatosService, private confi: Configs) {
  }

  getafiliado(): Observable<Afiliado> {

   return this.http.get<Afiliado>('http://localhost:8080/afiliado/CO1C/1018497540',{headers:this.headers});

  }



getAfiliadoApi(formsh:AfiliadoSh):Observable<Afiliado>
{

  this.headers.set('Access-Control-Allow-Origin','true');
  return this.http.get(this.confi.urlAf+formsh.tipoId+"/"+formsh.numeroId,{headers:this.headers}).pipe(
    map( afil => {
    let  afiliado = afil as Afiliado
      if(afiliado.data.length>0)afiliado = this.tranDatos.afiliadrTrnsfData(afiliado);
      return afiliado
    }

    )
  )
}


}
