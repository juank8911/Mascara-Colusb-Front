import { Component, OnInit} from '@angular/core';
import {Afiliado} from '../../../models/afiliado';
import {ConsultaAfiliadoService} from '../../../services/consulta-afiliado.service';


@Component({
  selector: 'app-afiliado-list',
  templateUrl: './afiliado-list.component.html',
  styleUrls: ['./afiliado-list.component.css']
})
export class AfiliadoListComponent implements OnInit {

  buscar = true;
  afiliados: Afiliado;



  constructor(private afiliadoService: ConsultaAfiliadoService) { }

  ngOnInit(){
     this.afiliadoService.getafiliado().subscribe(
       (afiliados) => this.afiliados = afiliados
     );
  }

  createPDF(){

  }



}
