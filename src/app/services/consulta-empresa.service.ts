import { Injectable } from '@angular/core';
import {Empresa} from '../models/empresa';
import {of,Observable} from 'rxjs';
import {EMPRESA} from '../models/empresa.json'

@Injectable({
  providedIn: 'root'
})
export class ConsultaEmpresaService {

  constructor() { }

  getEmpresa():Observable<Empresa>
  {
    return of(EMPRESA);
  }
}
