import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-parametrage',
  templateUrl: './parametrage.page.html',
  styleUrls: ['./parametrage.page.scss', './../../../app.component.scss'],
})
export class ParametragePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(menuName: string) {
    this.router.navigate(['/' + menuName]);
  }

  logOut() {

  }
}
