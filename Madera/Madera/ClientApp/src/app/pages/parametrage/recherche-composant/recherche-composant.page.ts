import { ChangeDetectorRef,Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Composant,SearchingComposant } from 'src/app/models/Composants';
import { SearchComposant } from '../../../models/Search/SearchComposant';
import { ComposantWebServiceService } from './../../../webServices/composant-web-service.service';  
@Component({
  selector: 'app-recherche-composant',
  templateUrl: './recherche-composant.page.html',
  styleUrls: ['./recherche-composant.page.scss','./../../../app.component.scss'],
})
export class RechercheComposantPage implements OnInit {

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
    console.log(this.composantService.getComposant());
  }

  searchComposant() {
    const search: SearchComposant = {
      LibelleComposant: this.form.get("reference").value
    };

    const searchString = JSON.stringify(search);
    this.composant$ = this.composantService.searchComposant<SearchingComposant[]>(searchString);

  }


}
