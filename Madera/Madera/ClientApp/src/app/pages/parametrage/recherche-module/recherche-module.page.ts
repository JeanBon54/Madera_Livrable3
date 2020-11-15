import { ChangeDetectorRef,Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Module,SearchingModule } from 'src/app/models/Module';
import { SearchModule } from '../../../models/Search/SearchModule';
import { ModuleService } from './../../../webServices/module-web-service.service';  
@Component({
  selector: 'app-recherche-module',
  templateUrl: './recherche-module.page.html',
  styleUrls: ['./recherche-module.page.scss','./../../../app.component.scss'],
})
export class RechercheModulePage implements OnInit {

   modules$: Observable<SearchingModule[]>;
   form: FormGroup;

   constructor(private moduleService: ModuleService, 
     private cd: ChangeDetectorRef,
     private formBuilder: FormBuilder) {
   }

  ngOnInit() {
     this.form = this.formBuilder.group(
       {
         reference: ['', []]
       }
    
     )

 this.loadModule();
  console.log(this.modules$ );
  }

  loadModule() {
    this.modules$ = this.moduleService.getModules();
   
  }

  searchModule() {
    const search: SearchModule = {
      LibelleModule: this.form.get("reference").value
    };

 const searchString = JSON.stringify(search);
    this.modules$ = this.moduleService.searchModule<SearchingModule[]>(searchString);

  }


}
