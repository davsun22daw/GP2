/*
 GP2, per Victor Caballero, David Suñer i Martí Rodríguez
 26/10/2022
 v1
 */
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'aplicacio',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">{{titol}}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" routerLink="/mapa" routerLinkActive="active">Mapa </a>
        <a class="nav-item nav-link" routerLink="/taula" routerLinkActive="active">Taula</a>
        <a class="nav-item nav-link" routerLink="/compara" routerLinkActive="active">Compara</a>
      </div>
    </div>
  </nav>
    <router-outlet></router-outlet>
  `
})
export class encaminar {
  titol = 'InfoPaïsos';
}