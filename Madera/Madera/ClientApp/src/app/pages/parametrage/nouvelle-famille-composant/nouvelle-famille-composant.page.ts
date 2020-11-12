import { ChangeDetectorRef,Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Observable } from 'rxjs';
import { ComposantWebServiceService } from './../../../webServices/composant-web-service.service';  
import { Composant,SearchingComposant } from 'src/app/models/Composants';

import { SearchComposant } from '../../../models/Search/SearchComposant';
import { familleComposant,SearchingFamilleComposant } from 'src/app/models/FamilleComposant';
import { SearchFamilleComposant } from '../../../models/Search/SearchFamilleComposant';
import { FamilleComposantWebServiceService } from './../../../webServices/famille-composant-web-service.service'; 




@Component({
  selector: 'app-nouvelle-famille-composant',
  templateUrl: './nouvelle-famille-composant.page.html',
  styleUrls: ['./nouvelle-famille-composant.page.scss','./../../../app.component.scss'],
})
export class NouvelleFamilleComposantPage implements OnInit {

  composant$: Observable<SearchingComposant[]>;
  form: FormGroup;

  constructor(private composantService: ComposantWebServiceService, 
    private cd: ChangeDetectorRef,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        reference: ['', []]
      }
    )

    this.loadComposant();
  }

  loadComposant() {
    this.composant$ = this.composantService.getComposant();
  }

  searchComposant() {
    const search: SearchComposant = {
      LibelleComposant: this.form.get("reference").value
    };

    const searchString = JSON.stringify(search);
    this.composant$ = this.composantService.searchComposant<SearchingComposant[]>(searchString);

  }


}