import { UtenteNewsLetterDetailComponent } from './utente-news-letter-detail/utente-news-letter-detail.component';
import { UtenteNewsLetterComponent } from './utente-news-letter/utente-news-letter.component';
import { NgModule, Component } from '@angular/core';
//importo il moduloRoutes e il routes per avere la possibilità di utilizzare la funzione routing
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';

//creo una costante routes e l'assegno ad un array Routes 
//ci sono due elementi all'interno: 
const routes: Routes = [

   //questo route reindirizza all'URL /dashboard quando inizialmente il percorso è vuoto
   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

   { path: 'dashboard', component: DashboardComponent },

  //route che fa vedere il dettaglio di un utente quindi la modifica
   { path: 'detail/:id' , component: UtenteNewsLetterDetailComponent},

   //il primo è il path che è una stringa che contiene l'URL che si aggiunge nella barra di navigazione
   //il secondo è il componente che il router deve creare
   { path: 'utenti' , component: UtenteNewsLetterComponent },
 
];

//il metadata NgModule inizializza il router
@NgModule({
  declarations: [],
  //importo il RouterModule e lo configuro  con il metodo forRoot e li passo l'array routes
  //il metodo forRoot() configura il router a livello di root dell'applicazione e fornisce le direttive necessarie per il routing
  imports: [RouterModule.forRoot(routes)],
  //rendo esportabile RouterModule
  exports: [RouterModule]
})
export class AppRoutingModule { }
