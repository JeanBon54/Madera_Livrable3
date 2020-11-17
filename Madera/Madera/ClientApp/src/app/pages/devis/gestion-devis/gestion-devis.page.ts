import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevisService } from '../../../WebServices/devis-webservice.service';
import { ModuleComposantService } from './../../../webServices/modulecomposant-webservice.service';
import { Observable } from 'rxjs';
import { ModuleComposant } from 'src/app/models/ModuleComposant';
import { Devis } from 'src/app/models/Devis';

@Component({
  selector: 'app-gestion-devis',
  templateUrl: './gestion-devis.page.html',
  styleUrls: ['./gestion-devis.page.scss','./../../../app.component.scss'],
})
export class GestionDevisPage implements OnInit {
  devis$: Observable<Devis>;
  devisId: number;

    constructor(private dService: DevisService, private avRoute: ActivatedRoute) {
    const idParam = 'id';
    if (this.avRoute.snapshot.params[idParam]) {
      this.devisId = this.avRoute.snapshot.params[idParam];
    }
  }

  ngOnInit() {
    this.loadDevis();
  }

  loadDevis() {
    this.devis$ = this.dService.getDevis(this.devisId);
  }

  exportPDF(id) {
   this.dService.genPDF(id).subscribe();
  }

  back() {
    window.history.go(-1);
  }

}
