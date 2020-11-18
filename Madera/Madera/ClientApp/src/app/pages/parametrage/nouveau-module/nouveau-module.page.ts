import { ChangeDetectorRef,Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,FormArray,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Observable } from 'rxjs';
import { ComposantWebServiceService } from './../../../webServices/composant-web-service.service';  
import { SearchingComposant } from 'src/app/models/Composants';
import { Module } from 'src/app/models/Module';
import { ModuleService } from './../../../webServices/module-web-service.service';  

@Component({
  selector: 'app-nouveau-module',
  templateUrl: './nouveau-module.page.html',
  styleUrls: ['./nouveau-module.page.scss', './../../../app.component.scss'],
})
export class NouveauModulePage implements OnInit {

  form: FormGroup;
  actionType: string;
  postId: number;
  errorMessage: any;
  existingModulePost: Module;
  composant$: Observable<SearchingComposant[]>;
  listeComposantChecked: number[] = [];

  constructor(private moduleService: ModuleService, 
    private cd: ChangeDetectorRef,
    private formBuilder: FormBuilder, 
    private composantService: ComposantWebServiceService, 
    private avRoute: ActivatedRoute, 
    private router: Router) {
  
      const idParam = 'id';
      this.actionType = 'Add';
      
      if (this.avRoute.snapshot.params[idParam]) {
        this.postId = this.avRoute.snapshot.params[idParam];
      }
  
      this.form = this.formBuilder.group(
        {
          postId: 0,
          libelleModule: ['', [Validators.required]],
        }
      )
    }


  ngOnInit() {
    if (this.postId >= 0) {
      this.actionType = 'Add';
      this.moduleService.getModule(this.postId)
        .subscribe(data => (
          this.existingModulePost = data,
          this.form.controls['libelleModule'].setValue(data.LibelleModule)
        ));
    }
    this.loadComposant();
  }

  loadComposant() {
    this.composant$ = this.composantService.getComposant();
  }

  submitForm() {
    console.log(this.form.value)
  }



  onCheckboxChange(e) {
    if (e.target.checked) {
      this.listeComposantChecked.push(e.target.value);
    } else {
      const indexItem = this.listeComposantChecked.indexOf(e.target.value);
      if (indexItem !== -1) {
        this.listeComposantChecked.splice(indexItem, 1);
      }
    }
    console.log(this.listeComposantChecked);
  }



  save() {
   if (!this.form.valid || !this.listeComposantChecked || this.listeComposantChecked.length === 0) {
       return;
     }

    if (this.actionType === 'Add') {
      const module: Module = {
        LibelleModule: this.form.get('libelleModule').value,
        ListeIdComposant: this.listeComposantChecked
      };
      console.log(module);
     this.moduleService.savemodule(module)
         .subscribe((data) => {
          this.router.navigate(['api/modules/', data.ID]);
        });
     }
   }


}  