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

  goTo(menuName: string) {
    console.log(menuName);
    this.router.navigateByUrl(menuName);
  }

  logOut() {
    this.router.navigateByUrl('connexion');
  }

}
