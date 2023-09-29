import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}

  doarAlimentos() {
    this.callLink('alimentos');
  }

  doarRoupas() {
    this.callLink('roupas');
  }
  doarSangue() {
    this.callLink('sangue');
  }
  callLink(ponto: string) {
    console.log('Doar ' + ponto);
    window
      .open(
        'https://www.google.com/maps/search/?api=1&query=ponto+doação+' + ponto,
        '_blank'
      )
      .focus();
  }
}
