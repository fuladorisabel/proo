import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { Usuario } from 'src/app/usuario/entidade/usuario';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  usuario: Usuario = new Usuario();
  constructor(private afAuth: AngularFireAuth, private router: Router) { }
  logar() {
    this.afAuth.auth.signInWithEmailAndPassword(this.usuario.email, this.usuario.senha).then(
      () => { this.router.navigate(['pagina']); }
    ).catch((erro) => console.log(erro));
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  }
   redefinir(){
     alert('verifique seu email');
     this.afAuth.auth.sendPasswordResetEmail(this.usuario.email).then(
       ()=> alert('verifique seu email'));{ this.router.navigate([]);}


   }
  }
