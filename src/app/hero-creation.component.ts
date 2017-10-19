import {Component, Input, OnInit} from "@angular/core";
import {HeroService} from "./hero.service";
import {Location} from '@angular/common';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Character} from "./character";

@Component({
  selector: 'hero-creation',
  templateUrl: './hero-creation.component.html'

})

export class HeroCreationComponent {

  @Input() hero = new Character;

  constructor(
    private heroService: HeroService,
    private location: Location) { }

  saveHeroe(): void {
    this.heroService.createHeroe(this.hero).then(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
