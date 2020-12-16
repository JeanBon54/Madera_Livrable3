import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-parametrage',
  templateUrl: './parametrage.page.html',
  styleUrls: ['./parametrage.page.scss', './../../../app.component.scss'],
})
export class ParametragePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(numMenu) {

    switch (numMenu) {
      case 1:
        this.router.navigate(['/recherche-gamme'])
        break;
      case 2:
        this.router.navigate(['/nouveau-module'])
        break;
      case 3:
        this.router.navigate(['/recherche-famille-composant'])
        break;
      case 4:
        this.router.navigate(['/recherche-composant'])
        break;
      case 5:
        this.router.navigate(['/nouveau-commercial'])
        break;
      case 6:
        this.router.navigate(['/menu-principal'])
        break;
    }


  }

}
