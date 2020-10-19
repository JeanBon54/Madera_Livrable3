import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConnexionPage } from './pages/connexion/connexion.page';
import { MenuPrincipalPage } from './pages/menu/menu-principal/menu-principal.page';
import { RechercheProjetPage } from './pages/projet/recherche-projet/recherche-projet.page';

const routerConfig: Routes = [
  {
    path: 'menu-principal',
    component: MenuPrincipalPage
  },
  {
    path: 'connexion',
    component: ConnexionPage
  },
  {
    path: 'recherche-projet',
    component: RechercheProjetPage
  },
  {
    path: '',
    redirectTo: '/menu-principal',
    pathMatch: 'full'
  },
  {
    path: 'recherche-devis',
    loadChildren: () => import('./pages/recherche-devis/recherche-devis.module').then( m => m.RechercheDevisPageModule)
  },
  {
    path: 'recherche-client',
    loadChildren: () => import('./pages/recherche-client/recherche-client.module').then( m => m.RechercheClientPageModule)
  },
  {
    path: 'nouveau-client',
    loadChildren: () => import('./pages/nouveau-client/nouveau-client.module').then( m => m.NouveauClientPageModule)
  },
  {
    path: 'parametrage',
    loadChildren: () => import('./pages/parametrage/parametrage.module').then( m => m.ParametragePageModule)
  },  {
    path: 'recherche-module',
    loadChildren: () => import('./pages/recherche-module/recherche-module.module').then( m => m.RechercheModulePageModule)
  },
  {
    path: 'recherche-gamme',
    loadChildren: () => import('./pages/recherche-gamme/recherche-gamme.module').then( m => m.RechercheGammePageModule)
  },
  {
    path: 'recherche-famille-composant',
    loadChildren: () => import('./pages/recherche-famille-composant/recherche-famille-composant.module').then( m => m.RechercheFamilleComposantPageModule)
  },
  {
    path: 'recherche-composant',
    loadChildren: () => import('./pages/recherche-composant/recherche-composant.module').then( m => m.RechercheComposantPageModule)
  },
  {
    path: 'recherche-commercial',
    loadChildren: () => import('./pages/recherche-commercial/recherche-commercial.module').then( m => m.RechercheCommercialPageModule)
  },
  {
    path: 'nouveau-commercial',
    loadChildren: () => import('./pages/nouveau-commercial/nouveau-commercial.module').then( m => m.NouveauCommercialPageModule)
  },
  {
    path: 'nouveau-composant',
    loadChildren: () => import('./pages/nouveau-composant/nouveau-composant.module').then( m => m.NouveauComposantPageModule)
  },
  {
    path: 'nouveau-module',
    loadChildren: () => import('./pages/nouveau-module/nouveau-module.module').then( m => m.NouveauModulePageModule)
  },
  {
    path: 'nouvelle-gamme',
    loadChildren: () => import('./pages/nouvelle-gamme/nouvelle-gamme.module').then( m => m.NouvelleGammePageModule)
  },
  {
    path: 'nouvelle-famille-composant',
    loadChildren: () => import('./pages/nouvelle-famille-composant/nouvelle-famille-composant.module').then( m => m.NouvelleFamilleComposantPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routerConfig, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
