import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estado } from '../entidade/estado';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-salvar-estado',
  templateUrl: './salvar-estado.page.html',
  styleUrls: ['./salvar-estado.page.scss'],
})
export class SalvarEstadoPage implements OnInit {
  estado: Estado = new Estado();
  constructor(private fire: AngularFireDatabase, private rota: Router) { }

  ngOnInit() {
  }
  cadastrar() {
    this.fire.list('estado').push(this.estado);
    this.estado = new Estado();
    this.rota.navigate(['salvar-cidade']);
  }
}
