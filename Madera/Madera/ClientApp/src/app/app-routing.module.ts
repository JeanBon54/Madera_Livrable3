import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'connexion',
    loadChildren: () => import('./pages/connexion/connexion.module').then(m => m.ConnexionPageModule)
  },
  {
    path: '',
    redirectTo: 'connexion',
    pathMatch: 'full'
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('./pages/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'menu-admin',
    loadChildren: () => import('./pages/menu-admin/menu-admin.module').then( m => m.MenuAdminPageModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./pages/clients/clients.module').then( m => m.CLientsPageModule)
  },
  {
    path: 'gestion-projet',
    loadChildren: () => import('./pages/gestion-projet/gestion-projet.module').then( m => m.GestionProjetPageModule)
  },
  {
    path: 'gestion-plan',
    loadChildren: () => import('./pages/gestion-plan/gestion-plan.module').then( m => m.GestionPlanPageModule)
  },
  {
    path: 'gestion-devis',
    loadChildren: () => import('./pages/gestion-devis/gestion-devis.module').then( m => m.GestionDevisPageModule)
  },
  {
    path: 'gestion-modelisation',
    loadChildren: () => import('./pages/gestion-modelisation/gestion-modelisation.module').then( m => m.GestionModelisationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
