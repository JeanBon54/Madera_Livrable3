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
    path: '**',
    redirectTo: '/menu-principal',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routerConfig, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
