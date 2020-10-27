import { Component, Inject ,OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';   
import { Observable } from 'rxjs';
import { CommercialWebService } from './../../../webServices/commercial-web-service.service';  
import { Commercial } from 'src/app/models/Commercial';


@Component({
  selector: 'app-nouveau-commercial',
  templateUrl: './nouveau-commercial.page.html',
  styleUrls: ['./nouveau-commercial.page.scss','./../../../app.component.scss'],
})
export class NouveauCommercialPage implements OnInit {

  commercial$: Observable<Commercial[]>;

  constructor(private commercialService: CommercialWebService) {
  }

  ngOnInit() {
    this.loadCommercial();
  }

  loadCommercial() {
    this.commercial$ = this.commercialService.getCommercial();
  }

}
