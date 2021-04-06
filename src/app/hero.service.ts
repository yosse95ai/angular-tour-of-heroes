import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';


import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageSercive: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageSercive.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero>{
    this.messageSercive.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
