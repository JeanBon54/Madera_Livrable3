import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GammeWebServiceService } from './../../../webServices/gamme-web-service.service';  

@Component({
  selector: 'app-recherche-gamme',
  templateUrl: './recherche-gamme.page.html',
  styleUrls: ['./recherche-gamme.page.scss','./../../../app.component.scss'],
})
export class RechercheGammePage implements OnInit {

  public gamme = [];

  constructor(private ServiceService: GammeWebServiceService) { }
  data: any;

  ngOnInit(): void {
    this.getdata();

  }
  getdata() {
    this.ServiceService.getData().subscribe((data: any[]) => {
      this.gamme = data;
    })
  }

}
