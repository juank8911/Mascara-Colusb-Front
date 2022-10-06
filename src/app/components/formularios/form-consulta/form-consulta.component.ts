import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-consulta',
  templateUrl: './form-consulta.component.html',
  styleUrls: ['./form-consulta.component.css']
})
export class FormConsultaComponent implements OnInit {
  form: FormGroup;

            buscar = false;
             afiliado = true;
      checks=
      [
        {id:"afl", value:"afl", labl:"Afiliado"},
        {id:"emp", value:"emp", labl:"Empresa"}
      ];

  constructor() {
  this.buildForm();

  }

  ngOnInit(): void {
    console.log(this.checks);
  }

  private buildForm() {
  this.form = new FormGroup({
      tipoCons: new FormControl('afl', []),
      tipoDoc: new FormControl('CO1C', [Validators.required]),
      numDoc: new FormControl('',[Validators.required]),
    });


    this.form.get('tipoCons')?.valueChanges.subscribe(value => {
      if(value == "emp")
      {
        this.form.get('tipoDoc')?.disable();
        this.form.get('tipoDoc')?.setValue('CO1N');
        this.afiliado = false;
        this.buscar = false;
        this.form.get('numDoc')?.setValue('');
      }
      else
      {
         this.form.get('tipoDoc')?.enable();
         this.form.get('tipoDoc')?.setValue('CO1C');
         this.afiliado = true;
         this.buscar = false;
         this.form.get('numDoc')?.setValue('');
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


}
