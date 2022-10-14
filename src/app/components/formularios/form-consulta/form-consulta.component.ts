import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ConsultaAfiliadoService} from '../../../services/consulta-afiliado.service';
import {ConsultaEmpresaService} from '../../../services/consulta-empresa.service';
import {Afiliado} from '../../../models/afiliado';
import {Empresa} from '../../../models/empresa';
import {PdgenerateComponent}from '../../pdgenerate/pdgenerate.component';
import Swal from 'sweetalert2';
import {AfiliadoSh} from '../../../models/afiliado-sh.interface'
import {formatDate} from '@angular/common'

@Component({
  selector: 'app-form-consulta',
  templateUrl: './form-consulta.component.html',
  styleUrls: ['./form-consulta.component.css']
})
export class FormConsultaComponent implements OnInit {
  form: FormGroup;

            nombreBene: string;
            nombreAfi:string
            afiliados: Afiliado
            empresa: Empresa;
            value: AfiliadoSh;
            esBenef=false;
            buscar = false;
            afEnco = false;
            emEnco = false;
             afiliado = true;
             genpdf=false;
             parentesco:string;
             retiro=false;
      checks=
      [
        {id:"afl", value:"afl", labl:"Afiliado"},
        {id:"emp", value:"emp", labl:"Empresa"}
      ];

  constructor( private afiliadoServ: ConsultaAfiliadoService, private empresaServ: ConsultaEmpresaService) {
  this.buildForm();

  }

  ngOnInit(): void {
    // console.log(this.checks);
  }

  private buildForm() {
  this.form = new FormGroup({
      tipoCons: new FormControl('afl', []),
      tipoId: new FormControl('CO1C'),
      numeroId: new FormControl('',Validators.required),
    });


    this.form.get('tipoCons')?.valueChanges.subscribe(value => {
      if(value == "emp")
      {
        this.form.get('tipoId')?.disable();
        this.form.get('tipoId')?.setValue('CO1N');
        this.afiliado = false;
        this.buscar = false;
        this.retiro=false;
        this.form.get('numeroId')?.setValue('');
      }
      else
      {
         this.form.get('tipoId')?.enable();
         this.form.get('tipoId')?.setValue('CO1C');
         this.afiliado = true;
         this.buscar = false;
         this.limpiarBusquedas();
         this.form.get('numeroId')?.setValue('');
      }

      console.log(value);
    })

    this.form.get('numeroId')?.valueChanges.subscribe(
      value => {this.limpiarBusquedas()}
    )
}




  myFunc(event: Event) {
  event.preventDefault();
  const value = this.form.value;
  this.buscar = true;
  console.log(value);
}

buscarEmpres(numeroId:string)
{

  this.afEnco=false;
  this.emEnco=false;
  this.buscar=true;
  this.esBenef=false;
  this.value.tipoCons='emp';
  this.value.tipoId="CO1N";
  this,this.value.numeroId=numeroId;
  this.buscarEm(this.value);
}

buscarAf(val:AfiliadoSh)
{
  console.log(val)
  this.afiliadoServ.getAfiliadoApi(val).subscribe(data=>{
    data.data[0].afiliado.numeroDocumento == val.numeroId?this.esBenef=false:this.esBenef=true,this.buscarNombreBenef(data,val.numeroId);
    if(data.data.length>0){
      if(data.data[0].afiliado.afiliacion.fechaRetiro!="")
      {

        let dRetiro = (new Date(formatDate(data.data[0].afiliado.afiliacion.fechaRetiro,'yyyy-MM-dd','en-Us')).getTime() - new Date(formatDate(Date(),'yyyy-MM-dd','en-Us')).getTime()/ 86400000)
        if(dRetiro>=51)this.retiro=true;
const Toast = Swal.mixin({
toast: true,
position: 'top-end',
showConfirmButton: false,
timer: 1500,
timerProgressBar: true,
didOpen: (toast) => {
toast.addEventListener('mouseenter', Swal.stopTimer)
toast.addEventListener('mouseleave', Swal.resumeTimer)
}
})

Toast.fire({
icon: 'success',
title: 'Afiliado encontrado'
})
      }
      console.log(data);
      this.afiliados = data;
      this.afEnco = true;
      this.buscar = false;
      }
      else{
        Swal.fire({
              icon: 'error',
              title: 'Usuario no encontrado',
              text: 'No se encuentra una persona afiliada con ese numeró de identificación',
              footer: 'Revisa los datos e intenta nuevamente'
              })
          this.afEnco = false;
          this.buscar = false;
          this.retiro=false;
      }

  })

}


buscarEm(vale:AfiliadoSh)
{
  console.log(vale)
  this.empresaServ.getEmpresaApi(vale).subscribe(data=>{
    console.log(data.data.length)
    if(data.data[0].contribuyente.nombre!="null"){
      this.afEnco = false;
      this.emEnco = true;
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Empresa encontrado'
      })


      console.log(data);
      this.empresa = data;
      this.buscar = false;
    }
    else{
      Swal.fire({
            icon: 'error',
            title: 'Empresa no encontrada',
            text: 'No se encontro una empresa con ese numero de identificacion',
            footer: 'Intente nuevamente'
            })
        this.emEnco = false;
        this.buscar = false;
        this.retiro=false;
    }
  }
  )
}





buscarAppi(event: Event)
{
  event.preventDefault();
  if(this.form.valid)
  {
    this.form.get('btnEn')?.disable();
    this.limpiarBusquedas();
    this.buscar=true;
    this.value = this.form.value;
    this.value.tipoCons=='afl'?this.buscarAf(this.value):this.buscarEm(this.value);
  }
  else
  {
    const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'error',
  title: 'Complete todos los campos'
})
  }

}

buscarNombreBenef(data:Afiliado,numDoc:string)
{
  this.nombreAfi = data.data[0].afiliado.primerNombre+" "+data.data[0].afiliado.primerApellido;
let beneficiarios =  data.data[0].pacs;
beneficiarios.map(benef=>{
  console.log(benef.numeroDocumento+" / "+numDoc)
  if(benef.numeroDocumento == numDoc){this.nombreBene = benef.primerNombre+" "+benef.apellido;
  this.parentesco =  benef.relacion.descripcion}
})
}



limpiarBusquedas()
{
  this.buscar = false;
  this.esBenef=false;
  this.afEnco = false;
  this.emEnco = false;
  this.retiro=false;

}


}
