import { Component ,Input} from '@angular/core';
import {Afiliado} from '../../../models/afiliado';
import {TokenReq} from '../../../models/token-req';
import {AfiliadoSh} from '../../../models/afiliado-sh.interface'
import Swal from 'sweetalert2';
import {FormConsultaComponent} from '../../formularios/form-consulta/form-consulta.component'
import {PdgenerateComponent} from '../../pdgenerate/pdgenerate.component';


@Component({
  selector: 'app-afiliado-list',
  templateUrl: './afiliado-list.component.html',
  styleUrls: ['./afiliado-list.component.css']
})

export class AfiliadoListComponent {
  afiliadoSh: AfiliadoSh;
  buscar = false;
  afEnco = false;
  emEnco = false
  genpdf=false;
  @Input() afiliados: Afiliado;
  token: TokenReq;



  constructor(private formCons: FormConsultaComponent, private pdgen:PdgenerateComponent) {
   }

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
      this.pdgen.openPDF();
      this.genpdf=false;
}, 4000)

  }

  buscarEmpres(numeroId:string)
  {
    console.log(numeroId);
    this.formCons.buscarEmpres(numeroId);
  }






}
