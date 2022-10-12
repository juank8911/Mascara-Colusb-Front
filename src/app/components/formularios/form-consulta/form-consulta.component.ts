import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ConsultaAfiliadoService} from '../../../services/consulta-afiliado.service';
import {AfiliadoListComponent} from '../../lists/afiliado-list/afiliado-list.component';
import {Afiliado} from '../../../models/afiliado';
import {Empresa} from '../../../models/empresa';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-consulta',
  templateUrl: './form-consulta.component.html',
  styleUrls: ['./form-consulta.component.css']
})
export class FormConsultaComponent implements OnInit {
  form: FormGroup;

            afiliados: Afiliado
            empresa: Empresa;
            buscar = false;
            afEnco = false;
            emEnco = false;
             afiliado = true;
      checks=
      [
        {id:"afl", value:"afl", labl:"Afiliado"},
        {id:"emp", value:"emp", labl:"Empresa"}
      ];

  constructor(private afiliadList: AfiliadoListComponent, private afiliadoServ: ConsultaAfiliadoService) {
  this.buildForm();

  }

  ngOnInit(): void {
    // console.log(this.checks);
  }

  private buildForm() {
  this.form = new FormGroup({
      tipoCons: new FormControl('afl', []),
      tipoId: new FormControl('CO1C', [Validators.required]),
    numeroId: new FormControl('',[Validators.required]),
    });


    this.form.get('tipoCons')?.valueChanges.subscribe(value => {
      if(value == "emp")
      {
        this.form.get('tipoId')?.disable();
        this.form.get('tipoId')?.setValue('CO1N');
        this.afiliado = false;
        this.buscar = false;
        this.form.get('numeroId')?.setValue('');
      }
      else
      {
         this.form.get('tipoId')?.enable();
         this.form.get('tipoId')?.setValue('CO1C');
         this.afiliado = true;
         this.buscar = false;
         this.form.get('numeroId')?.setValue('');
      }

      console.log(value);
    })
}




  myFunc(event: Event) {
  event.preventDefault();
  const value = this.form.value;
  this.buscar = true;
  console.log(value);
}

async buscarAppi(event: Event)
{
    this.buscar = true;
  event.preventDefault();
  const value = this.form.value;
  console.log(value.tipoCons);
  if(value.tipoCons=='afl')
  {
      this.afiliadoServ.getAfiliadoApi(value).subscribe(data=>{
        console.log(data);
        this.afiliados = data;
        this.afEnco = true;
        this.buscar = false;
      })
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Usuario Encontrado',
        showConfirmButton: false,
        timer: 1500
        })
  }
  if(value.tipoCons=='emp')
  {
    this.afEnco = false;
    this.emEnco = true;
    console.log('empresa')
  }

}


}
