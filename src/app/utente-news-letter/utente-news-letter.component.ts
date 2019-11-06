import { Component, OnInit } from '@angular/core';
import { utenteNewsLetter } from '../utenteNewsLetter';
import { UTENTI } from '../mock-utenteNewsLetter';

@Component({
  selector: 'utente-news-letter',
  templateUrl: './utente-news-letter.component.html',
  styleUrls: ['./utente-news-letter.component.css']
})
export class UtenteNewsLetterComponent implements OnInit {
  
  //creo una variabile che prende l'array UTENTI
  utenti=UTENTI;

  utenteSelezionato : utenteNewsLetter;

  constructor() { }

  ngOnInit() {  
  }
  
  //metodo che in input ha l'utente selezionato 
  onSelect(utente: utenteNewsLetter): void {
    this.utenteSelezionato = utente;
  }

}
