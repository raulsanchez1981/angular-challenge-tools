
import {Component, OnInit} from "@angular/core";
import {HeroService} from "./hero.service";
import {Hero} from "./hero";
import {Character} from "./character";
import {CharacterFilter} from "./character-filter";
import {Router} from "@angular/router";

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ["./dashboard.component.css"]
})

export class DashboardComponent implements OnInit {

  heroes: Character[];
  constructor(private heroService: HeroService,
              private router: Router) { }


  ngOnInit(): void {
    this.heroService.getHeroes(new CharacterFilter()).then(heroes => this.heroes = heroes.slice(1, 100))
  }

  createHeroe(): void {
    this.router.navigate(['/create']);
  }

}
