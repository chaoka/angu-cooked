import { Injectable } from '@angular/core'
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { UserService } from '../services/user.service'
import { first, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {
  constructor(private userServ: UserService, private router: Router) { }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.token || sessionStorage.token) {
      return this.userServ.user$.pipe(
        first(user => Object.keys(user).length > 0),
        map(({ is_coach }: any) => is_coach ? true : this.router.parseUrl('home'))
      )
    }
    return this.router.parseUrl('/')
  }
}
