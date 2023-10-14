import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private readonly _title$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(
    private readonly router: Router,
    private readonly titleService: Title,
  ) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeTitle = '';
          while (route!.firstChild) {
            route = route.firstChild;
          }
          if (route.snapshot.data['title']) {
            routeTitle = route!.snapshot.data['title'];
          }
          return routeTitle;
        }),
      )
      .subscribe((title: string) => (this.title = title));
  }

  get title$(): Observable<string> {
    return this._title$.asObservable();
  }

  set title(title: string) {
    this.titleService.setTitle(`Pokedex ${title}`);
    this._title$.next(title);
  }
}
