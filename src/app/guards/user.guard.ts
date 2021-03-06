import { Injectable } from '@angular/core'
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { first, map, tap } from 'rxjs/operators'
import { UserService } from '../services/user.service'

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanLoad {
  constructor(private userServ: UserService, private router: Router) { }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.token || sessionStorage.token) {
      return this.userServ.user$.pipe(
        first(user => Object.keys(user).length > 0),
        map(({ is_coach }: any) => is_coach ? this.router.parseUrl('admin') : true)
      )
    }
    return this.router.parseUrl('/')
  }
}