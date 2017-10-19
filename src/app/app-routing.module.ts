import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroesComponent} from "./heroes.component";
import {NgModule} from "@angular/core";
import {HeroModifyComponent} from "./hero-modify.component";
import {HeroCreationComponent} from "./hero-creation.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'modify/:id', component: HeroModifyComponent},
  {path: 'create', component: HeroCreationComponent},
  {path: 'heroes', component: HeroesComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}
