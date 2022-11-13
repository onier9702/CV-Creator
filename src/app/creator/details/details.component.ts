import { Component, OnInit } from '@angular/core';

// declare module 'html2pdf.js';
// @ts-ignore
import * as html2pdf from 'html2pdf.js';

import { CV } from '../interfaces/cv-web-dev.interface';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  data!: CV;

  constructor() { }

  ngOnInit(): void {
    this.data = JSON.parse( localStorage.getItem('createdcv') || '' );
  }

  printProfile() {
    console.log('print');
    setTimeout(async () => {
      window.scrollTo(0, 0);
      let html = document.getElementById('profile');

      this.htmltoPDF(html, this.data.name);
    }, 1000);
  }

  htmltoPDF(html: any, fileName: string) {
      let opt = {
          margin: 5,
          filename: fileName + '.pdf',
          image: { type: 'png' },
          html2canvas: {
              scale: 4,
              useCORS: true,
              windowWidth: window.innerWidth
          },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
          pagebreak: { mode: 'css' }
      };
      html2pdf()
          .set(opt)
          .from(html)
          .save();
  }


}
