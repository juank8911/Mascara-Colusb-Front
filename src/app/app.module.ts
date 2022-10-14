import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormConsultaComponent } from './components/formularios/form-consulta/form-consulta.component';
import { AfiliadoListComponent } from './components/lists/afiliado-list/afiliado-list.component';
import {RouterModule,Routes} from '@angular/router';
import { EmpresaListComponent } from './components/lists/empresa-list/empresa-list.component';
import {PdgenerateComponent} from './components/pdgenerate/pdgenerate.component';
import {ConsultaAfiliadoService} from './services/consulta-afiliado.service';
import {Configs} from './config/configs'


const routes: Routes = [
  {path: '', redirectTo:'/consultaafiliado', pathMatch: 'full'},
  {path: 'consultaafiliado', component: FormConsultaComponent},
  {path: 'afiliado', component: AfiliadoListComponent},
  {path: 'empresa',component: EmpresaListComponent },
  {path: 'pdf', component:PdgenerateComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormConsultaComponent,
    AfiliadoListComponent,
    EmpresaListComponent,
    PdgenerateComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  // schemas:[
  //    CUSTOM_ELEMENTS_SCHEMA
  // ],
  providers: [
    PdgenerateComponent,
    ConsultaAfiliadoService,
    AfiliadoListComponent,
    Configs,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
