import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import {Http, Headers, RequestOptions} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Character} from "./character";
import {CharacterFilter} from "./character-filter";

@Injectable()
export class HeroService {
  handleError: any;
  //headers: Headers;
  options: RequestOptions;
  url: string;

  constructor(private http: Http) {
    this.url="https://btools-challenge.herokuapp.com/challenge/character";
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('userName', `adminBT`);
    this.options = new RequestOptions({headers: headers});
  }

  getHeroes(filter: CharacterFilter): Promise<Character[]> {
    const url = this.url+"/search";
    return this.http.post(url, filter, this.options)
      .toPromise()
      .then(response => response.json() as Character[])
      .catch(this.handleError);
  }


  getHeroReal(id: string): Promise<Character> {
    const url = this.url+'/'+id;
    return this.http.get(url, this.options)
      .toPromise()
      .then(response => response.json() as Character)
      .catch(this.handleError);
  }

  updateHeroe(heroe: Character): Promise<Character> {
    const url = this.url;
    return this.http.put(url, heroe, this.options)
      .toPromise()
      .then(response => response.json() as Character)
      .catch(this.handleError);
  }

  createHeroe(heroe: Character): Promise<Character> {
    const url = this.url;
    return this.http.post(url, heroe, this.options)
      .toPromise()
      .then(response => response.json() as Character)
      .catch(this.handleError);
  }
}
