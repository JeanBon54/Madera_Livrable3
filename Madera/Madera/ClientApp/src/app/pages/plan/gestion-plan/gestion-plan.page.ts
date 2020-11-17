import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-plan',
  templateUrl: './gestion-plan.page.html',
  styleUrls: ['./gestion-plan.page.scss', './../../../app.component.scss'],
})
export class GestionPlanPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  back() {
    window.history.go(-1);
  }
}
