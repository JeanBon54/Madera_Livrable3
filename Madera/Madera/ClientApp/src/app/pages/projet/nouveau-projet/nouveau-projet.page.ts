import { ChangeDetectorRef,Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router'; 

import { Client } from 'src/app/models/Client';
import { ClientWebServiceService } from './../../../webServices/client-web-service.service'; 
import { ProjetWebService } from './../../../webServices/projet-webservice.service';
import { Projet } from 'src/app/models/Projet';
import { tap } from 'rxjs/operators';
import { AutocompleteClientService } from 'src/app/webServices/autocomplete-client.service';
import { AutoCompleteOptions } from 'ionic4-auto-complete';

@Component({
  selector: 'app-nouveau-projet',
  templateUrl: './nouveau-projet.page.html',
  styleUrls: ['./nouveau-projet.page.scss', './../../../app.component.scss'],
})
export class NouveauProjetPage implements OnInit {
  clients$: Observable<Client[]>;
  form: FormGroup;
  actionType: string;
  formTitle: string;
  formBody: string;
  libelleNom:string;
  libelleProjet:string;
  postId: number;
  errorMessage: any;
  existingProjetPost: Projet;
  public options: AutoCompleteOptions;


  constructor(private projetPostService: ProjetWebService, private cService: ClientWebServiceService, private formBuilder: FormBuilder, private avRoute: ActivatedRoute, private router: Router, public autocompleteClientService: AutocompleteClientService) {
    const idParam = 'id';
    this.actionType = 'Add';
    this.libelleNom = 'libelleNom';
    this.libelleProjet = 'libelleProjet';
    this.formBody = 'body';
    if (this.avRoute.snapshot.params[idParam]) {
      this.postId = this.avRoute.snapshot.params[idParam];
    }


    this.options = new AutoCompleteOptions();

    this.options.placeholder = '';
    this.options.searchIcon = 'undefined';
    this.options.type = 'search';
  }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        postId: 0,
        client: ['', [Validators.required]],
        libelleProjet: ['', [Validators.required]]
      }
    )
    
    this.loadClient();

    if (this.postId >= 0) {
      this.actionType = 'Add';
      this.projetPostService.getProjet(this.postId)
        .pipe(
          tap(data => {
              this.existingProjetPost = data,
              this.form.controls[this.libelleNom].setValue(data.LibelleNom),
              this.form.controls[this.libelleProjet].setValue(data.LibelleProjet)
            }
          )
        ).subscribe();
    }
  }

  loadClient() {
    this.clients$ = this.cService.getClient();
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let projet: Projet = {
        CommercialID: 1,
        ClientID: this.form.get("client").value ? this.form.get("client").value : null,
        LibelleNom: this.form.get(this.libelleProjet).value,
        LibelleProjet: this.form.get(this.libelleProjet).value,
        libelleRemarque: '',
        DateDebutProjet:new Date(),
        IdUtilisateurCreation: 1,
        DateCreation:new Date(),
        IdUtilisateurModification: 1,
        DateModification: new Date(),
        DateArchivage: new Date()
      };

      this.projetPostService.saveProjet(projet)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['gestion-projet/', data.id]);
        });
    }
  }
}
