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
  selector: 'app-nouvelle-famille-composant',
  templateUrl: './nouvelle-famille-composant.page.html',
  styleUrls: ['./nouvelle-famille-composant.page.scss','./../../../app.component.scss'],
})
export class NouvelleFamilleComposantPage implements OnInit {

  form: FormGroup;
  actionType: string;
  libelleFamComposant : string;
  libelleComposant : string;
  postId: number;
  errorMessage: any;
  existingCommercialPost: familleComposant;
  composant$: Observable<SearchingComposant[]>;
  

  constructor(private composantService: ComposantWebServiceService, 
    private cd: ChangeDetectorRef,
    private formBuilder: FormBuilder, 
    private familleComposantService: FamilleComposantWebServiceService, 
    private avRoute: ActivatedRoute, 
    private router: Router) {
  
      const idParam = 'id';
      this.actionType = 'Add';
      this.libelleFamComposant = 'libelleFamComposant';
      this.libelleComposant = 'libelleComposant';
      if (this.avRoute.snapshot.params[idParam]) {
        this.postId = this.avRoute.snapshot.params[idParam];
      }
  
      this.form = this.formBuilder.group(
        {
          postId: 0,
          libelleFamComposant: ['', [Validators.required]],
          checkArray: this.formBuilder.array([], [Validators.required])
        }
      )
    }


  ngOnInit() {
    if (this.postId >= 0) {
      this.actionType = 'Add';
      this.familleComposantService.getFamComposantID(this.postId)
        .subscribe(data => (
          this.existingCommercialPost = data,
          this.form.controls[this.libelleFamComposant].setValue(data.libelleFamilleComposant)
        ));
    }
    this.loadComposant();
  }

  loadComposant() {
    this.composant$ = this.composantService.getComposant();
  }

  // save() {
  //   console.log(this.form.value)
  // }

  save() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let familleComposants: familleComposant = {
  
        libelleFamilleComposant: this.form.get(this.libelleFamComposant).value

      };
      this.familleComposantService.saveFamComposant(familleComposants)
        .subscribe((data) => {
          this.router.navigate(['api/familleComposants/', data.ID]);
        });
    }
  }


}