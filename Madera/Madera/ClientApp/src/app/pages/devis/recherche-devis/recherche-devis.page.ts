import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recherche-devis',
  templateUrl: './recherche-devis.page.html',
  styleUrls: ['./recherche-devis.page.scss','./../../../app.component.scss'],
})
export class RechercheDevisPage implements OnInit {

  devis: [] = [];

  constructor() { }

  ngOnInit() {
  }

}
