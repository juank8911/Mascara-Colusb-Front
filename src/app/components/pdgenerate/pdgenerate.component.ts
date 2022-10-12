import { Component, OnInit } from '@angular/core';
import {Afiliado} from '../../models/afiliado';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-pdgenerate',
  templateUrl: './pdgenerate.component.html',
  styleUrls: ['./pdgenerate.component.css']
})
export class PdgenerateComponent implements OnInit {
  afiliado: Afiliado;
  constructor() { }

  ngOnInit(): void {
  }


    createPDF(afiliados: Afiliado){
      const doc = new jsPDF();
      this.afiliado = afiliados;
    doc.text('Hello world!'+this.afiliado.data, 10, 10);
    doc.save('hello-world.pdf');
  }



}
