import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Pagina } from './entidade/pagina';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.page.html',
  styleUrls: ['./pagina.page.scss'],
})
export class PaginaPage implements OnInit {

  resultadoMarrom: number;
  resultadoAzul: number;
  resultadoVerde: number;
  pagina: Pagina = new Pagina();

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['home']);
  }
  olhos() {
    if (this.pagina.pai == "marrom" && this.pagina.mae == "marrom") {
      alert("Seu Baby Ruru poderar ter os olhos 75% Marrom 6,25% Azul 18,75% Verde");

    }
    else if (this.pagina.pai == "verde" && this.pagina.mae == "verde") {
      alert("Seu Baby Ruru poderar ter os olhos 1% Marrom 75% Azul 25% Verde");

    }
    else if (this.pagina.pai == "verde" && this.pagina.mae == "marron") {
      alert("Seu Baby Ruru poderar ter os olhos 50% Marrom 37,5% Azul 12,5% Verde");

    }
    else if (this.pagina.pai == "azul" && this.pagina.mae == "marrom") {
      alert("Seu Baby Ruru poderar ter os olhos 50% Marrom 50% Azul 0% Verde");

    }
    else if (this.pagina.pai == "verde" && this.pagina.mae == "azul") {
      alert("Seu Baby Ruru poderar ter os olhos 0% Marrom 50% Azul 50% Verde");

    }
    else if (this.pagina.pai == "azul" && this.pagina.mae == "azul") {
      alert("Seu Baby Ruru poderar ter os olhos 0% Marrom 99% Azul 1% Verde");

    }
    else if (this.pagina.mae == "verde" && this.pagina.pai == "marron") {
      alert("Seu Baby Ruru poderar ter os olhos 50% Marrom 37,5% Azul 12,5% Verde");

    }
    else if (this.pagina.mae == "verde" && this.pagina.pai == "marron") {
      alert("Seu Baby Ruru poderar ter os olhos 50% Marrom 37,5% Azul 12,5% Verde");

    }
    else if (this.pagina.mae == "azul" && this.pagina.pai == "marrom") {
      alert("Seu Baby Ruru poderar ter os olhos 50% Marrom 50% Azul 0% Verde");

    }
    else if (this.pagina.mae == "verde" && this.pagina.pai == "azul") {
      alert("Seu Baby Ruru poderar ter os olhos 0% Marrom 50% Azul 50% Verde");

    }
  }
}
