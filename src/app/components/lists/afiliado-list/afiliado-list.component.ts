import { Component, OnInit} from '@angular/core';
import {Afiliado} from '../../../models/afiliado';
import {TokenReq} from '../../../models/token-req';
import {ConsultaAfiliadoService} from '../../../services/consulta-afiliado.service';
import {PdgenerateComponent} from '../../pdgenerate/pdgenerate.component';
import {AfiliadoSh} from '../../../models/afiliado-sh.interface'


@Component({
  selector: 'app-afiliado-list',
  templateUrl: './afiliado-list.component.html',
  styleUrls: ['./afiliado-list.component.css']
})
export class AfiliadoListComponent implements OnInit {

  buscar = true;
  afiliados: Afiliado;
  token: TokenReq;



  constructor(private afiliadoService: ConsultaAfiliadoService, public pdgen: PdgenerateComponent) {
   }

  ngOnInit(){

      this.afiliadoService.getafiliado().subscribe(
        (afiliados) => this.afiliados = afiliados
      );

     // this.afiliadoService.serviceToken().subscribe(
     //   data =>{console.log(data)}
     // );
     //  console.log('Prueba de Token  -------------- '+this.token)
  }

  createPDF(){
    // this.pdgen.createPDF2(this.afiliados);

  }



  async buscarAfiliado(formsh:AfiliadoSh)
  {
    this.afiliadoService.getAfiliadoApi(formsh).subscribe(data=> {
       this.afiliados = data
       console.log(this.afiliados)
       ;});

  }





}
