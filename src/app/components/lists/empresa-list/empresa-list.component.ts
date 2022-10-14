import { Component, OnInit, Input } from '@angular/core';
import {Empresa} from '../../../models/empresa';
import {ConsultaEmpresaService} from '../../../services/consulta-empresa.service';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.css']
})
export class EmpresaListComponent {

@Input() empresa: Empresa;

  constructor(private empresaService: ConsultaEmpresaService) { }


}
