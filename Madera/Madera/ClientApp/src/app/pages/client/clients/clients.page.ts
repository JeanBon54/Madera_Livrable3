import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/Client';
import { ClientWebServiceService } from './../../../webServices/client-web-service.service'; 
import { ProjetWebService } from './../../../webServices/projet-webservice.service';
import { Projet } from 'src/app/models/Projet';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss','./../../../app.component.scss'],
})
export class CLientsPage implements OnInit {
  form: FormGroup;
  clientId: number;
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
  client$: Observable<Client>;
  projets$: Observable<Projet[]>;

  constructor(private clientService: ClientWebServiceService,
    private projetService: ProjetWebService, 
    private formBuilder: FormBuilder,
    private router: Router, 
    private avRoute: ActivatedRoute,) {

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
    this.clientId = this.avRoute.snapshot.params[idParam];
  }

  this.form = this.formBuilder.group(
    {
      postId: 0,
      nomClient: ['', [Validators.required]],
      prenomClient: ['', [Validators.required]],
      dateNaissance: ['', [Validators.required]],
      // adresseClient: ['', [Validators.required]],
      // villeClient: ['', [Validators.required]],
      // cpClient: ['', [Validators.required]],
      // telephoneClient: ['', [Validators.required]],
      // emailClient: ['', [Validators.required]]
    }
  )

}

ngOnInit() {
  this.loadClient();
  this.loadProjet();
}

loadClient() {
  this.client$ = this.clientService.getClientID(this.clientId);
}

loadProjet() {
  this.projets$ = this.projetService.getProjets();
 }

back() {
  window.history.go(-1);
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
        this.router.navigate(['recherche-client/']);
      });
  }
}

}
