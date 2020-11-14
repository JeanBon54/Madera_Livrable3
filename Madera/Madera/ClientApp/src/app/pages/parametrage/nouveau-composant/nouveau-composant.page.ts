import { ChangeDetectorRef,Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,FormArray,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Observable } from 'rxjs';

import { familleComposant,SearchingFamilleComposant } from 'src/app/models/FamilleComposant';
import { FamilleComposantWebServiceService } from './../../../webServices/famille-composant-web-service.service'; 

import { ComposantWebServiceService } from './../../../webServices/composant-web-service.service';  
import { Composant } from 'src/app/models/Composants';

@Component({
  selector: 'app-nouveau-composant',
  templateUrl: './nouveau-composant.page.html',
  styleUrls: ['./nouveau-composant.page.scss','./../../../app.component.scss'],
})
export class NouveauComposantPage implements OnInit {

  form: FormGroup;
  actionType: string;
  idFamille: any;
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
    this.idFamille = 0;
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
        idFamille:0, 
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
          this.form.controls[this.idFamille].setValue(data.FamilleComposantID),
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
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let composant: Composant = {
        LibelleComposant: this.form.get(this.libelleComposant).value,
        NatureComposant: this.form.get(this.natureComposant).value,
        CaractComposant: this.form.get(this.caractComposant).value,
        FamilleComposantID : this.form.get(this.idFamille).value,
        UniteUsageComposant : 3,
        IdUtilisateurCreation :1,
        DateCreation :new Date(),
        IdUtilisateurModification :1,
        DateModification :new Date(),
        DateArchivage :new Date()
      };

      this.commercialService.saveComposant(composant)
        .subscribe((data) => {
          this.router.navigate(['api/Composants/', data.ID]);
        });
    }
    
  }
}
