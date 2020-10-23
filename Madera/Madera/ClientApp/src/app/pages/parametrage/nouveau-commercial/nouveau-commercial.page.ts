import { Component, Inject ,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ComposantWebServiceService } from './../../../webServices/composant-web-service.service';  

@Component({
  selector: 'app-nouveau-commercial',
  templateUrl: './nouveau-commercial.page.html',
  styleUrls: ['./nouveau-commercial.page.scss','./../../../app.component.scss'],
})
export class NouveauCommercialPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
