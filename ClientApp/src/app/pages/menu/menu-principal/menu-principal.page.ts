import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss', './../../../app.component.scss'],
})
export class MenuPrincipalPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  goTo(numMenu) {

    switch (numMenu) {
      case 1: 
        this.router.navigate(['/recherche-projet'])
        break;
      case 2:
        this.router.navigate(['/nouveau-projet'])
        break;
      case 3:
        this.router.navigate(['/recherche-devis'])
        break;
      case 4:
        this.router.navigate(['/recherche-client'])
        break;
      case 5:
        this.router.navigate(['/nouveau-client'])
        break;
      case 6:
        this.router.navigate(['/parametrage'])
        break;
    }


  }


  logOut() {
    this.router.navigate(['/connexion'])

    //TODO 
  }




}
