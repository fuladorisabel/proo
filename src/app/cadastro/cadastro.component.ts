import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { Usuario } from '../usuario/entidade/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.Component.html',
})
export class CadastroComponent implements OnInit {
  usuario: Usuario = new Usuario();
  constructor(private afAuth: AngularFireAuth, private router: Router) { }
  ngOnInit() {
  }
  cadastrar() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.usuario.email, this.usuario.senha).then(
      () => { this.router.navigate(['pagina']); }
    ).catch((erro) => console.log(erro));
  }

}
