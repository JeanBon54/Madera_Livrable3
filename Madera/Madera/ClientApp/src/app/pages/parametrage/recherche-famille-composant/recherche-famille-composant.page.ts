import { ChangeDetectorRef,Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { familleComposant,SearchingFamilleComposant } from 'src/app/models/FamilleComposant';
import { SearchFamilleComposant } from '../../../models/Search/SearchFamilleComposant';
import { FamilleComposantWebServiceService } from './../../../webServices/famille-composant-web-service.service'; 

@Component({
  selector: 'app-recherche-famille-composant',
  templateUrl: './recherche-famille-composant.page.html',
  styleUrls: ['./recherche-famille-composant.page.scss','./../../../app.component.scss'],
})
export class RechercheFamilleComposantPage implements OnInit {

  famComposant$: Observable<SearchingFamilleComposant[]>;
  form: FormGroup;

  constructor(private famComposantService: FamilleComposantWebServiceService, 
    private cd: ChangeDetectorRef,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        reference: ['', []]
      }
    )

    this.loadFamComposant();
  }

  loadFamComposant() {
    this.famComposant$ = this.famComposantService.getFamComposant();
  }

  searchFamComposant() {
    const search: SearchFamilleComposant = {
      LIBELLE_FAMILLE_COMPOSANT: this.form.get("reference").value
    };

    const searchString = JSON.stringify(search);
    this.famComposant$ = this.famComposantService.searchFamComposant<SearchingFamilleComposant[]>(searchString);

  }


}