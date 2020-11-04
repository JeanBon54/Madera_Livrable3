import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetWebService } from './../../../webServices/projet-webservice.service';
import { Observable } from 'rxjs';
import { Projet, ProjetCommercial } from 'src/app/models/Projet';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchProjet } from '../../../models/Search/SearchProjet';

@Component({
  selector: 'app-recherche-projet',
  templateUrl: './recherche-projet.page.html',
  styleUrls: ['./recherche-projet.page.scss', './../../../app.component.scss'],
})


export class RechercheProjetPage implements OnInit {

  projets$: Observable<ProjetCommercial[]>;
  form: FormGroup;

  constructor(private projetService: ProjetWebService,
    private cd: ChangeDetectorRef,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        reference: ['', []],
        client: ['', []], 
        date: ['', []]
      }
    )


    this.loadProjet();
  }

  loadProjet() {
    this.projets$ = this.projetService.getProjets();
  }

  searchProjet() {
    const search: SearchProjet = {
      LibelleProjet: this.form.get("reference").value,
      ClientId: this.form.get("client").value ? this.form.get("client").value : null,
      DateCreation: this.form.get("date").value ? this.form.get("date").value : null
    };

    const searchString = JSON.stringify(search);
    this.projets$ = this.projetService.searchProjet<ProjetCommercial[]>(searchString);

  }

}





