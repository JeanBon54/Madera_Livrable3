import { ChangeDetectorRef,Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router'; 


import { ProjetWebService } from './../../../webServices/projet-webservice.service';
import { Projet } from 'src/app/models/Projet';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-nouveau-projet',
  templateUrl: './nouveau-projet.page.html',
  styleUrls: ['./nouveau-projet.page.scss', './../../../app.component.scss'],
})
export class NouveauProjetPage implements OnInit {
  form: FormGroup;
  actionType: string;
  formTitle: string;
  formBody: string;
  libelleNom:string;
  libelleProjet:string;
  postId: number;
  errorMessage: any;
  existingProjetPost: Projet;


  constructor(private projetPostService: ProjetWebService, private formBuilder: FormBuilder, private avRoute: ActivatedRoute, private router: Router) {
    const idParam = 'id';
    this.actionType = 'Add';
    this.libelleNom = 'libelleNom';
    this.libelleProjet = 'libelleProjet';
    this.formBody = 'body';
    if (this.avRoute.snapshot.params[idParam]) {
      this.postId = this.avRoute.snapshot.params[idParam];
    }

  }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        postId: 0,
        libelleNom: ['', [Validators.required]],
        libelleProjet: ['', [Validators.required]]
      }
    )

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

  save() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let projet: Projet = {
        CommercialID: 1,
        ClientID: 1,
        LibelleNom: this.form.get(this.libelleNom).value,
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
          this.router.navigate(['api/Projets/', data.ID]);
        });
    }
  }
}
