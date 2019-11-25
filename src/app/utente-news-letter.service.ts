import { Injectable } from '@angular/core';
import { utenteNewsLetter } from './utenteNewsLetter';
import { UTENTI } from './mock-utenteNewsLetter';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtenteNewsLetterService {

  
  constructor() { }

  //metodo getUtenti che ritorna l'array di utenti
  getUtenti(): Observable<utenteNewsLetter[]> {
    return of(UTENTI);
  } 

  //metodo getUtente che ritorna l'utente selezionato
  getUtente(id: number): Observable<utenteNewsLetter>{
    return of(UTENTI.find(utente => utente.id === id))
  }
}
