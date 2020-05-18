import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';

import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { PresentationComponent } from './presentation/presentation.component';
import {CompetencesComponent} from './competences/competences.component';


const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'presentation', component: PresentationComponent},
  {path: 'domaineCompétences', component: CompetencesComponent},
  {path: '', redirectTo: 'accueil', pathMatch: 'full'}
];



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactComponent,
    AccueilComponent,
    FooterComponent,
    PresentationComponent,
    CompetencesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
