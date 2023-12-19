import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProfilpagePage } from './profilpage/profilpage.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profilpage/profilpage.module').then( m => m.ProfilpagePageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'modification',
    loadChildren: () => import('./modification/modification.module').then( m => m.ModificationPageModule)
  },
  {
    path: 'ajout',
    loadChildren: () => import('./ajout/ajout.module').then( m => m.AjoutPageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then(m => m.Tab5PageModule)
  }
  



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
