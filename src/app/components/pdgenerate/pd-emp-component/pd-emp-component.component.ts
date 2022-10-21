import { Component, ViewChild, ElementRef,Input } from '@angular/core';
import {Empresa} from '../../../models/empresa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-pd-emp-component',
  templateUrl: './pd-emp-component.component.html',
  styleUrls: ['./pd-emp-component.component.css']
})
export class PdEmpComponentComponent {
  @ViewChild('htmlData') htmlData!: ElementRef;
  @Input() empresa: Empresa;
  fechaHoy = new Date();

  constructor() { }

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Certificado-Empresa.pdf');
    });
  }

}
