import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { SearchingCommercial } from 'src/app/models/Commercial';
import { Observable } from 'rxjs';
import { CommercialWebService } from './../../../webServices/commercial-web-service.service';


@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss', './../../../app.component.scss'],
})
export class MenuPrincipalPage implements OnInit {
  commercial$: Observable<SearchingCommercial>;

  constructor(private router: Router, private commercialService: CommercialWebService) { }

  ngOnInit() {
    this.loadCommercial();
  }

  loadCommercial() {
    var id = localStorage.getItem('id')
    this.commercial$ = this.commercialService.getCommercialID(+id);
  }
  
  goTo(menuName: string) {
    this.router.navigateByUrl(menuName);
  }

  logOut() {
    localStorage.setItem('token', null);
    localStorage.setItem('id', null);
    this.router.navigateByUrl('connexion');
  }

}
