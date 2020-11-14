import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Observable } from 'rxjs';
import { Client,SearchingClient } from 'src/app/models/Client';
import { ClientWebServiceService } from './../../../webServices/client-web-service.service'; 
import { SearchClient } from '../../../models/Search/SearchClient';

@Component({
  selector: 'app-nouveau-client',
  templateUrl: './nouveau-client.page.html',
  styleUrls: ['./nouveau-client.page.scss','./../../../app.component.scss'],
})


export class NouveauClientPage implements OnInit {

  form: FormGroup;
  actionType: string;
  nomClient : string;
  prenomClient: string;
  dateNaissance :any ;
  adresseClient: string;
  villeClient: string;
  cpClient: any;
  telephoneClient: any;
  emailClient : string;
  postId: number;
  errorMessage: any;
  existingClientPost: Client;



  constructor(private clientService: ClientWebServiceService, private formBuilder: FormBuilder, private avRoute: ActivatedRoute, private router: Router) {
    
    const idParam = 'id';
    this.actionType = 'Add';
    this.nomClient = 'nomClient';
    this.prenomClient= 'prenomClient';
    this.dateNaissance='';
    this.adresseClient='',
    this.villeClient='';
    this.cpClient='';
    this.telephoneClient='';
    this.emailClient = 'emailClient';

    if (this.avRoute.snapshot.params[idParam]) {
      this.postId = this.avRoute.snapshot.params[idParam];
    }

    this.form = this.formBuilder.group(
      {
        postId: 0,
        nomClient: ['', [Validators.required]],
        prenomClient: ['', [Validators.required]],
        dateNaissance: ['', [Validators.required]],
        adresseClient: ['', [Validators.required]],
        villeClient: ['', [Validators.required]],
        cpClient: ['', [Validators.required]],
        telephoneClient: ['', [Validators.required]],
        emailClient: ['', [Validators.required]]
      }
    )
  }

  ngOnInit() {
    if (this.postId >= 0) {
      this.actionType = 'Add';
      this.clientService.getClientID(this.postId)
        .subscribe(data => (
          this.existingClientPost = data,
          this.form.controls[this.nomClient].setValue(data.NomClient),
          this.form.controls[this.prenomClient].setValue(data.PrenomClient),
          this.form.controls[this.dateNaissance].setValue(data.DateNaissanceClient),
          this.form.controls[this.adresseClient].setValue(data.AdresseClient),
          this.form.controls[this.villeClient].setValue(data.VilleClient),
          this.form.controls[this.cpClient].setValue(data.CpClient),
          this.form.controls[this.telephoneClient].setValue(data.Telephone),
          this.form.controls[this.emailClient].setValue(data.EmailClient)
        ));
    }
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let client: Client = {
        NomClient: this.form.get(this.nomClient).value,
        PrenomClient: this.form.get(this.prenomClient).value,
        DateNaissanceClient : this.form.value.dateNaissance,
        AdresseClient :  this.form.value.adresseClient,
        VilleClient :  this.form.value.villeClient,
        CpClient :  this.form.value.cpClient,
        Telephone:  this.form.value.telephoneClient,
        EmailClient: this.form.get(this.emailClient).value,
        IdUtilisateurCreation :1,
        DateCreation :new Date(),
        IdUtilisateurModification :1,
        DateModification :new Date(),
        DateArchivage :new Date()
      };

      this.clientService.saveClient(client)
        .subscribe((data) => {
          this.router.navigate(['api/Clients/', data.ID]);
        });
    }
  }

}
