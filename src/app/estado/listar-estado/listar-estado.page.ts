import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Estado } from '../entidade/estado';
import * as _ from 'lodash';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-listar-estado',
  templateUrl: './listar-estado.page.html',
  styleUrls: ['./listar-estado.page.scss'],
})
export class ListarEstadoPage implements OnInit {
  listaEstado: Observable<Estado[]>;
  listaFiltro:  Estado[];
  filtro = {}; //regras ativas do filtro
  estado: any;
  valor: string;
    constructor(private fire: AngularFireDatabase) {
      this.listaEstado = this.fire.list<Estado>('estado').snapshotChanges().pipe(
        map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
      );
    }

    ngOnInit() {
    }
  filtrar(){
    this.filtro['estado'] = val => val.includes(this.valor);
    this.listaFiltro = _.filter(this.estado, _.conforms(this.filtro));
  }

  excluir(key){
    this.fire.list<Estado>('estado').remove(key);
  }
  }
