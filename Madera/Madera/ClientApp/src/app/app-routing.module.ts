import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConnexionPage } from './pages/connexion/connexion.page';
import { MenuPrincipalPage } from './pages/menu/menu-principal/menu-principal.page';
import { RechercheProjetPage } from './pages/projet/recherche-projet/recherche-projet.page';
import { NouveauProjetPage } from './pages/projet/nouveau-projet/nouveau-projet.page';
import { GestionProjetPage } from './pages/projet/gestion-projet/gestion-projet.page'

const routerConfig: Routes = [
  {
    path: '',
    component: MenuPrincipalPage
  },
  {
    path: 'menu-principal',
    component: MenuPrincipalPage
  },
  {
    path: 'connexion',
    loadChildren: () => import('./pages/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'recherche-projet',
    loadChildren: () => import('./pages/projet/recherche-projet/recherche-projet.module').then( m => m.RechercheProjetPageModule)
  },
  {
    path: 'gestion-projet/:id',
    loadChildren: () => import('./pages/projet/gestion-projet/gestion-projet.module').then(m => m.GestionProjetPageModule)
  },
  {
    path: 'gestion-plan/:id',
    loadChildren: () => import('./pages/plan/gestion-plan/gestion-plan.module').then(m => m.GestionPlanPageModule)
  },
  {
    path: 'nouveau-projet',
    loadChildren: () => import('./pages/projet/nouveau-projet/nouveau-projet.module').then( m => m.NouveauProjetPageModule)
  },
  {
    path: 'recherche-devis',
    loadChildren: () => import('./pages/devis/recherche-devis/recherche-devis.module').then( m => m.RechercheDevisPageModule)
  },
  {
    path: 'gestion-devis/:id',
    loadChildren: () => import('./pages/devis/gestion-devis/gestion-devis.module').then(m => m.GestionDevisPageModule)
  },
  {
    path: 'recherche-client',
    loadChildren: () => import('./pages/client/recherche-client/recherche-client.module').then( m => m.RechercheClientPageModule)
  },
  {
    path: 'nouveau-client',
    loadChildren: () => import('./pages/client/nouveau-client/nouveau-client.module').then( m => m.NouveauClientPageModule)
  },
  {
    path: 'parametrage',
    loadChildren: () => import('./pages/menu/parametrage/parametrage.module').then( m => m.ParametragePageModule)
  },
  {
    path: 'recherche-module',
    loadChildren: () => import('./pages/parametrage/recherche-module/recherche-module.module').then( m => m.RechercheModulePageModule)
  },
  {
    path: 'recherche-gamme',
    loadChildren: () => import('./pages/parametrage/recherche-gamme/recherche-gamme.module').then( m => m.RechercheGammePageModule)
  },
  {
    path: 'recherche-famille-composant',
    loadChildren: () => import('./pages/parametrage/recherche-famille-composant/recherche-famille-composant.module').then( m => m.RechercheFamilleComposantPageModule)
  },
  {
    path: 'recherche-composant',
    loadChildren: () => import('./pages/parametrage/recherche-composant/recherche-composant.module').then( m => m.RechercheComposantPageModule)
  },
  {
    path: 'recherche-commercial',
    loadChildren: () => import('./pages/parametrage/recherche-commercial/recherche-commercial.module').then( m => m.RechercheCommercialPageModule)
  },
  {
    path: 'nouveau-commercial',
    loadChildren: () => import('./pages/parametrage/nouveau-commercial/nouveau-commercial.module').then( m => m.NouveauCommercialPageModule)
  },
  {
    path: 'nouveau-composant',
    loadChildren: () => import('./pages/parametrage/nouveau-composant/nouveau-composant.module').then( m => m.NouveauComposantPageModule)
  },
  {
    path: 'nouveau-module',
    loadChildren: () => import('./pages/parametrage/nouveau-module/nouveau-module.module').then( m => m.NouveauModulePageModule)
  },
  {
    path: 'nouvelle-gamme',
    loadChildren: () => import('./pages/parametrage/nouvelle-gamme/nouvelle-gamme.module').then( m => m.NouvelleGammePageModule)
  },
  {
    path: 'nouvelle-famille-composant',
    loadChildren: () => import('./pages/parametrage/nouvelle-famille-composant/nouvelle-famille-composant.module').then( m => m.NouvelleFamilleComposantPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routerConfig, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
