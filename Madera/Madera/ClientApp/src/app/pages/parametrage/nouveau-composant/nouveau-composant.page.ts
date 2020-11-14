import { ChangeDetectorRef,Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,FormArray,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Observable } from 'rxjs';

import { ComposantWebServiceService } from './../../../webServices/composant-web-service.service';  
import { Composant,SearchingComposant } from 'src/app/models/Composants';
import { SearchComposant } from '../../../models/Search/SearchComposant';
import { familleComposant,SearchingFamilleComposant } from 'src/app/models/FamilleComposant';
import { SearchFamilleComposant } from '../../../models/Search/SearchFamilleComposant';
import { FamilleComposantWebServiceService } from './../../../webServices/famille-composant-web-service.service'; 

@Component({
  selector: 'app-nouveau-composant',
  templateUrl: './nouveau-composant.page.html',
  styleUrls: ['./nouveau-composant.page.scss','./../../../app.component.scss'],
})
export class NouveauComposantPage implements OnInit {

  form: FormGroup;
  actionType: string;
  familleCompo: number;
  libelleComposant : string;
  natureComposant : string;
  caractComposant : string;
  postId: number;
  errorMessage: any;
  existingCommercialPost: Composant;
  famComposant$: Observable<SearchingFamilleComposant[]>;



  constructor(private commercialService: ComposantWebServiceService, 
    private cd: ChangeDetectorRef,
    private formBuilder: FormBuilder, 
    private familleComposantService: FamilleComposantWebServiceService, 
    private avRoute: ActivatedRoute, 
    private router: Router) {
    
    const idParam = 'id';
    this.familleCompo = 0;
    this.actionType = 'Add';
    this.libelleComposant = 'libelleComposant';
    this.natureComposant= 'natureComposant';
    this.caractComposant = 'caractComposant';

    if (this.avRoute.snapshot.params[idParam]) {
      this.postId = this.avRoute.snapshot.params[idParam];
    }

    this.form = this.formBuilder.group(
      {
        postId: 0,
        familleCompo:0, 
        libelleComposant: ['', [Validators.required]],
        natureComposant: ['', [Validators.required]],
        caractComposant: ['', [Validators.required]]

      }
    )
  }

  ngOnInit() {
    if (this.postId >= 0) {
      this.actionType = 'Add';
      this.commercialService.getComposantID(this.postId)
        .subscribe(data => (
          this.existingCommercialPost = data,
          this.form.controls[this.familleCompo].setValue(data.FamilleComposantID),
          this.form.controls[this.libelleComposant].setValue(data.LibelleComposant),
          this.form.controls[this.natureComposant].setValue(data.NatureComposant),
          this.form.controls[this.caractComposant].setValue(data.CaractComposant)


          ));
    }

    this.loadFamComposant();
  }

  loadFamComposant() {
    this.famComposant$ = this.familleComposantService.getFamComposant();
  }

  save() {
    console.log(this.form.value.familleCompo)
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let composants: Composant = {
        FamilleComposantID : this.form.value.familleCompo,
        LibelleComposant: this.form.get(this.libelleComposant).value,
        NatureComposant: this.form.get(this.natureComposant).value,
        CaractComposant: this.form.get(this.caractComposant).value,
        UniteUsageComposant : 3,
        IdUtilisateurCreation :1,
        DateCreation :new Date(),
        IdUtilisateurModification :1,
        DateModification :new Date(),
        DateArchivage :new Date()
      };

      this.commercialService.saveComposant(composants)
        .subscribe((data) => {
          this.router.navigate(['api/Composants/', data.ID]);
        });
    }
    
  }
}
