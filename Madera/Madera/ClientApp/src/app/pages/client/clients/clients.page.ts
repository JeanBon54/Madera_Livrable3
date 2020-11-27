import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/Client';
import { ClientWebServiceService } from './../../../webServices/client-web-service.service'; 


@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss','./../../../app.component.scss'],
})
export class CLientsPage implements OnInit {

  clientId: number;
  client$: Observable<Client>;

  constructor(private dService: ClientWebServiceService,
    private avRoute: ActivatedRoute) {
  const idParam = 'id';
  if (this.avRoute.snapshot.params[idParam]) {
    this.clientId = this.avRoute.snapshot.params[idParam];
  }
}

ngOnInit() {
  this.loadClient();
}

loadClient() {
  this.client$ = this.dService.getClientID(this.clientId);
}

back() {
  window.history.go(-1);
}

}
