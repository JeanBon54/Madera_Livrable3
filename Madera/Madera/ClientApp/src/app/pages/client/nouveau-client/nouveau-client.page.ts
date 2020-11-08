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
  emailClient : string;
  postId: number;
  errorMessage: any;
  existingClientPost: Client;



  constructor(private clientService: ClientWebServiceService, private formBuilder: FormBuilder, private avRoute: ActivatedRoute, private router: Router) {
    
    const idParam = 'id';
    this.actionType = 'Add';
    this.nomClient = 'nomClient';
    this.prenomClient= 'prenomClient';
    this.emailClient = 'emailClient';

    if (this.avRoute.snapshot.params[idParam]) {
      this.postId = this.avRoute.snapshot.params[idParam];
    }

    this.form = this.formBuilder.group(
      {
        postId: 0,
        nomClient: ['', [Validators.required]],
        prenomClient: ['', [Validators.required]],
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
        DateNaissanceClient : new Date(),
        AdresseClient : 'toto',
        VilleClient :'toto',
        CpClient :12,
        Telephone:23456,
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
