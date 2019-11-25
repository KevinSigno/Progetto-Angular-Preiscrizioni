import { Component, OnInit } from '@angular/core';
import { utenteNewsLetter } from '../utenteNewsLetter';
import { UtenteNewsLetterService } from '../utente-news-letter.service';

@Component({
  selector: 'utente-news-letter',
  templateUrl: './utente-news-letter.component.html',
  styleUrls: ['./utente-news-letter.component.css']
})
export class UtenteNewsLetterComponent implements OnInit {
  
  //variabile utenti di tipo utenteNewsLetter
  utenti : utenteNewsLetter[];

  //al costruttore gli viene passato il servizio
  constructor(private utenteNewsLetterService: UtenteNewsLetterService) { }

  ngOnInit() {  
    //in runtime viene caricata la lista utenti
    this.getUtenti();
  }
  
  //metodo getUtenti che restituisce l'array di utenti
  getUtenti(): void {
    this.utenteNewsLetterService.getUtenti().subscribe(utenti => this.utenti = utenti);
  }


}
