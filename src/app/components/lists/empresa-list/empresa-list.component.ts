import { Component, OnInit, Input } from '@angular/core';
import {Empresa} from '../../../models/empresa';
import {ConsultaEmpresaService} from '../../../services/consulta-empresa.service';
import {PdEmpComponentComponent} from '../../pdgenerate/pd-emp-component/pd-emp-component.component'
import Swal from 'sweetalert2';
import {PdgenerateComponent} from '../../pdgenerate/pdgenerate.component';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.css']
})
export class EmpresaListComponent {

@Input() empresa: Empresa;
genpdf=false;
  constructor(private empresaService: ConsultaEmpresaService, private pdEmp: PdEmpComponentComponent ) { }

  createPDF(){
    Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Descargando certificado',
  showConfirmButton: false,
  timer: 3500
  })
    this.genpdf=true
    setTimeout(() => {
      this.pdEmp.openPDF();
      this.genpdf=false;
  }, 4000)

  }

}
