import { Component, OnInit } from '@angular/core';
import {Empresa} from '../../../models/empresa';
import {ConsultaEmpresaService} from '../../../services/consulta-empresa.service';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.css']
})
export class EmpresaListComponent implements OnInit {

empresa: Empresa;

  constructor(private empresaService: ConsultaEmpresaService) { }

  ngOnInit(){
    this.empresaService.getEmpresa().subscribe(
      (empresa) => this.empresa = empresa
    )
  }

}
