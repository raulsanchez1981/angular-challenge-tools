import {Component, Input, OnInit} from "@angular/core";
import {HeroService} from "./hero.service";
import {Location} from '@angular/common';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Character} from "./character";

@Component({
  selector: 'hero-modify',
  templateUrl: './hero-modify.component.html'

})

export class HeroModifyComponent implements OnInit {

  @Input() hero: Character;

  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHeroReal(params.get('id')))
      .subscribe(character => this.hero = character);
  }

  saveHeroe(): void {
    this.heroService.updateHeroe(this.hero).then(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
