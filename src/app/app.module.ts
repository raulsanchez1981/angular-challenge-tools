import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {HeroDetailComponent} from './hero-detail.component';
import {AppComponent} from "./app.component";
import {HeroesComponent} from "./heroes.component";
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {HeroService} from "./hero.service";
import {HttpModule} from "@angular/http";
import {HeroModifyComponent} from "./hero-modify.component";
import {HeroCreationComponent} from "./hero-creation.component";




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroModifyComponent,
    HeroCreationComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})


export class AppModule { }
