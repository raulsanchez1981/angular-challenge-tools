import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Router} from "@angular/router";
import {Character} from "./character";
import {CharacterFilter} from "./character-filter";

@Component({
  selector: 'my-heroes',
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})


export class HeroesComponent implements OnInit {
  heroes: Character[];
  selectedHero: Character;

  constructor(
    private heroService: HeroService,
    private router: Router) { }

  onSelect(hero: Character) {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes(new CharacterFilter()).then(characters => this.heroes = characters);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
