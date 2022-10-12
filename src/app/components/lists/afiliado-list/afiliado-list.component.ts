import { Component, OnChanges,OnInit ,Input} from '@angular/core';
import {Afiliado} from '../../../models/afiliado';
import {TokenReq} from '../../../models/token-req';
import {ConsultaAfiliadoService} from '../../../services/consulta-afiliado.service';
import {PdgenerateComponent} from '../../pdgenerate/pdgenerate.component';
import {AfiliadoSh} from '../../../models/afiliado-sh.interface'
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-afiliado-list',
  templateUrl: './afiliado-list.component.html',
  styleUrls: ['./afiliado-list.component.css']
})
export class AfiliadoListComponent implements OnChanges {
  afiliadoSh: AfiliadoSh;
  buscar = false;
  afEnco = false;
  emEnco = false;
  @Input() afiliados: Afiliado;
  token: TokenReq;



  constructor(private afiliadoService: ConsultaAfiliadoService, private ActivatedRoute: ActivatedRoute) {
   }

  ngOnInit()
  {
        // this.afiliadoService.getAfiliadoApi(formsh:AfiliadoSh).subscribe()
     //  this.afiliadoService.getafiliado().subscribe(
     //    (afiliados) => this.afiliados = afiliados
     //  );
     //
     // this.afiliadoService.serviceToken().subscribe(
     //   data =>{console.log(data)}
     // );
     //  console.log('Prueba de Token  -------------- '+this.token)
  }


  ngOnChanges()
  {

  }

  createPDF(){
    // this.pdgen.createPDF2(this.afiliados);

  }

  cargarAfiliado(afiliadoSh:AfiliadoSh):void
  {
      this.ActivatedRoute.params.subscribe(params =>{
        this.afiliadoSh= params['afiliadoSh']
      if(this.afiliadoSh){
        this.afiliadoService.getAfiliadoApi(this.afiliadoSh).subscribe(
          data => this.afiliados = data
        )
      }
    })

  }



  async buscarAfiliado(formsh:AfiliadoSh)
  {
    this.buscar=true;
    this.afiliadoService.getAfiliadoApi(formsh).subscribe(data=> {
       this.afiliados = data
       console.log(this.afiliados)
       this.afEnco = true;
       this.emEnco = false;
       ;});

  }





}
