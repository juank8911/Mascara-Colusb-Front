import { Component, OnChanges,OnInit ,Input} from '@angular/core';
import {Afiliado} from '../../../models/afiliado';
import {TokenReq} from '../../../models/token-req';
import {ConsultaAfiliadoService} from '../../../services/consulta-afiliado.service';
import {AfiliadoSh} from '../../../models/afiliado-sh.interface'
import {FormConsultaComponent} from '../../formularios/form-consulta/form-consulta.component'


@Component({
  selector: 'app-afiliado-list',
  templateUrl: './afiliado-list.component.html',
  styleUrls: ['./afiliado-list.component.css']
})

export class AfiliadoListComponent {
  afiliadoSh: AfiliadoSh;
  buscar = false;
  afEnco = false;
  emEnco = false;
  @Input() afiliados: Afiliado;
  token: TokenReq;



  constructor(private afiliadoService: ConsultaAfiliadoService, private formCons: FormConsultaComponent) {
   }

  createPDF(){
    // this.pdgen.createPDF2(this.afiliados);

  }

  buscarEmpres(numeroId:string)
  {
    console.log(numeroId);
    this.formCons.buscarEmpres(numeroId);
  }






}
