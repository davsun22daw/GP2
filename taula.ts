/*
 GP2 David Suñer i Martí Rodríguez
 26/10/2022
 v1
 */
 import { Component } from '@angular/core';
 import paisesData from './paisos.json';

interface Pais {
  Pais: String;
  Capital: String;
  Poblacion: Number;
  Extension: Number;
  PiB: Number;
  EsperanzaVida: Number;
  Idioma: String;
  Moneda: String;
}

@Component({
    selector: 'aplicacio',
    templateUrl: 'taula.html',
})

export class taula {
  title = 'GP2';
  paises: Pais[] = paisesData;

}