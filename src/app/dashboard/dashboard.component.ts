import { utenteNewsLetter } from './../utenteNewsLetter';
import { UtenteNewsLetterService } from './../utente-news-letter.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  utenti: utenteNewsLetter[] = [];

  //al costruttore gli viene passato un parametro private, il servizio
  constructor(private UtenteNewsLetterService:UtenteNewsLetterService) { }

  ngOnInit() {
    this.getUtenti();
  }

  //metodo getUtenti che ritorna i primi 5 utenti dell'array
  getUtenti(): void {
    this.UtenteNewsLetterService.getUtenti()
      //metodo slice che prende dal primo valore al 5
      .subscribe(utenti => this.utenti = utenti.slice(0, 5));
  }

}
