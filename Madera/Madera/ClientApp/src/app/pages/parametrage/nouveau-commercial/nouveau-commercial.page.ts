import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Observable } from 'rxjs';
import { CommercialWebService } from './../../../webServices/commercial-web-service.service';  
import { Commercial } from 'src/app/models/Commercial';


@Component({
  selector: 'app-nouveau-commercial',
  templateUrl: './nouveau-commercial.page.html',
  styleUrls: ['./nouveau-commercial.page.scss','./../../../app.component.scss'],
})
export class NouveauCommercialPage implements OnInit {

  form: FormGroup;
  actionType: string;
  formTitle: string;
  formBody: string;
  postId: number;
  errorMessage: any;
  existingCommercialPost: Commercial;



  constructor(private commercialService: CommercialWebService, private formBuilder: FormBuilder, private avRoute: ActivatedRoute, private router: Router) {
    const idParam = 'id';
    this.actionType = 'Add';
    this.formTitle = 'title';
    this.formBody = 'body';
    if (this.avRoute.snapshot.params[idParam]) {
      this.postId = this.avRoute.snapshot.params[idParam];
    }

    this.form = this.formBuilder.group(
      {
        title: ['', [Validators.required]],
        body: ['', [Validators.required]],
        date: ['', [Validators.required]],
        email: ['', [Validators.required]],
      }
    )
  }

  ngOnInit() {
    if (this.postId > 0) {
      this.actionType = 'Edit';
      this.commercialService.getCommercialID(this.postId)
        .subscribe(data => (
          this.existingCommercialPost = data,
          this.form.controls[this.formTitle].setValue(data.NomCommercial),
          this.form.controls[this.formBody].setValue(data.PrenomCommercial)
        ));
    }
  }

  // save() {
  //   if (!this.form.valid) {
  //     return;
  //   }

  //   if (this.actionType === 'Add') {
  //     let comm: Commercial = {
  //       NomCommercial: this.form.get(this.formTitle).value,
  //       PrenomCommercial: 'Martin',
  //       EmailCommerce: this.form.get(this.formTitle).value,
  //       DateCreation: this.form.get(this.formBody).value
  //     };

  //     this.commercialService.saveCommercial(commercial)
  //       .subscribe((data) => {
  //         this.router.navigate(['/Commercial', data.ID]);
  //       });
  //   }


}
