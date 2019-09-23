import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

import { Cidade } from '../entidade/cidade';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-cidade-listar',
  templateUrl: './cidade-listar.page.html',
  styleUrls: ['./cidade-listar.page.scss'],
})
export class ListarPage implements OnInit {


  listaCidade: Observable<Cidade[]>;
  listaFiltro: Cidade[];
  filtro = {}; //regras ativas do filtro
  cidades: any;
  valor: string;

  constructor(private fire: AngularFireDatabase) {
    this.listaCidade = this.fire.list<Cidade>('cidade').snapshotChanges().pipe(
      map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
    );
  }

  ngOnInit() {
    this.listaCidade.subscribe(cidade => {
        this.cidades = cidade;
        this.listaFiltro = _.filter(this.cidades, _.conforms(this.filtro));
    })
  }

  filtrar(){
    this.filtro['nome'] = (val: { includes: (arg0: string) => void; }) => val.includes(this.valor);
    this.listaFiltro = _.filter(this.cidades, _.conforms(this.filtro));
  }

  excluir(key){
    this.fire.list<Cidade>('cidade').remove(key);
  }
}
