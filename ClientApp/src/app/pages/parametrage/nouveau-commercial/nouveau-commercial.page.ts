import { Component, Inject ,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ComposantWebServiceService } from './../../../webServices/composant-web-service.service';  

@Component({
  selector: 'app-nouveau-commercial',
  templateUrl: './nouveau-commercial.page.html',
  styleUrls: ['./nouveau-commercial.page.scss','./../../../app.component.scss'],
})
export class NouveauCommercialPage implements OnInit {

  public composant = [];

  constructor(private ServiceService: ComposantWebServiceService) { }
  data: any;
  CompoForm: FormGroup;
  submitted = false;
  EventValue: any = "Save";  

  ngOnInit(): void {
    this.getdata();

  }
  getdata() {
    this.ServiceService.getData().subscribe((data: any[]) => {
      this.composant = data;
    })
  }

  Save() {
    this.submitted = true;

    if (this.CompoForm.invalid) {
      return;
    }
    this.ServiceService.postData(this.CompoForm.value).subscribe((data: any[]) => {
      this.data = data;
      this.resetFrom();

    })
  }


}
