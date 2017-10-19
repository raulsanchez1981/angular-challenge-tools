import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {HeroService} from "./hero.service";
import "rxjs/add/operator/switchMap";
import {Location} from '@angular/common';
import {Character} from "./character";

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  hero = new Character();


  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHeroReal(params.get('id')))
      .subscribe(character => this.hero = character);

  }

  goBack(): void {
    this.location.back();
  }

  goEdit(id: string): void {
    this.router.navigate(['/modify', id]);
  }
}
