import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'salvar', loadChildren: './login/salvar/salvar.module#SalvarPageModule' },
  { path: 'salvar', loadChildren: './cidade/salvar/salvar.module#SalvarPageModule' },
  { path: 'listar', loadChildren: './cidade/listar/listar.module#ListarPageModule' },
  { path: 'pagina', loadChildren: './pagina/pagina.module#PaginaPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
