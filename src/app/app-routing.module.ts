import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'pagina', loadChildren: './pagina/pagina.module#PaginaPageModule' },
  { path: 'nova', loadChildren: './nova/nova.module#NovaPageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' }, 
  { path: 'salvar-cidade', loadChildren: './cidade/salvar-cidade/salvar-cidade.module#SalvarCidadePageModule' },
  { path: 'listar-cidade', loadChildren: './cidade/listar-cidade/listar-cidade.module#ListarCidadePageModule' },
  { path: 'salvar-estado', loadChildren: './estado/salvar-estado/salvar-estado.module#SalvarEstadoPageModule' },
  { path: 'listar-estado', loadChildren: './estado/listar-estado/listar-estado.module#ListarEstadoPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
