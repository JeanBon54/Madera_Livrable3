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
  nomCommercial : string;
  prenomCommercial : string;
  emailCommercial : string;
  postId: number;
  errorMessage: any;
  existingCommercialPost: Commercial;



  constructor(private commercialService: CommercialWebService, private formBuilder: FormBuilder, private avRoute: ActivatedRoute, private router: Router) {
    
    const idParam = 'id';
    this.actionType = 'Add';
    this.nomCommercial = 'nomCommercial';
    this.prenomCommercial= 'prenomCommercial';
    this.emailCommercial = 'emailCommercial';

    if (this.avRoute.snapshot.params[idParam]) {
      this.postId = this.avRoute.snapshot.params[idParam];
    }

    this.form = this.formBuilder.group(
      {
        postId: 0,
        nomCommercial: ['', [Validators.required]],
        prenomCommercial: ['', [Validators.required]],
        emailCommercial: ['', [Validators.required]]
      }
    )
  }

  ngOnInit() {
    if (this.postId >= 0) {
      this.actionType = 'Add';
      this.commercialService.getCommercialID(this.postId)
        .subscribe(data => (
          this.existingCommercialPost = data,
          this.form.controls[this.nomCommercial].setValue(data.NomCommercial),
          this.form.controls[this.prenomCommercial].setValue(data.PrenomCommercial),
          this.form.controls[this.emailCommercial].setValue(data.EmailCommerce)
        ));
    }
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let commercial: Commercial = {
        NomCommercial: this.form.get(this.nomCommercial).value,
        PrenomCommercial: this.form.get(this.prenomCommercial).value,
        EmailCommerce: this.form.get(this.emailCommercial).value,
        MdpCommercial : 'toto',
        IdUtilisateurCreation :1,
        DateCreation :new Date(),
        IdUtilisateurModification :1,
        DateModification :new Date(),
        DateArchivage :new Date()
      };

      this.commercialService.saveCommercial(commercial)
        .subscribe((data) => {
          this.router.navigate(['api/Commercials/', data.ID]);
        });
    }
  }
}


