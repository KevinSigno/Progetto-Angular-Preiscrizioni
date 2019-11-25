import { Location } from '@angular/common';
import { UtenteNewsLetterService } from './../utente-news-letter.service';
import { Component, OnInit, Input } from '@angular/core';
import { utenteNewsLetter } from '../utenteNewsLetter';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-utente-news-letter-detail',
  templateUrl: './utente-news-letter-detail.component.html',
  styleUrls: ['./utente-news-letter-detail.component.css']
})
export class UtenteNewsLetterDetailComponent implements OnInit {

  //variabile utente di tipo utenteNewsLetter
  utente: utenteNewsLetter;

  //al costruttore gli vengono passati tre parametri private: il primo per il routing,il secondo per il servizio e il terzo per la locazione(tasto back)
  constructor(private route: ActivatedRoute,
              private utenteNewsLetterService: UtenteNewsLetterService,
              private location: Location
             ) {}
  
  //in runtime vieni richiamato il metodo getUtente()
  ngOnInit():void {
    this.getUtente();
  }

  //metodo che restituisce l'utente selezionato tramite l'id
  getUtente():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.utenteNewsLetterService.getUtente(id).subscribe(utente => this.utente=utente);
  }
  
  //metodo per tornare alla pagina precedente
  goBack(): void{
    this.location.back();
  }

}
