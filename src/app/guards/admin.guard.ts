import { Injectable } from '@angular/core'
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { UserService } from '../services/user.service'
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {
  constructor(private userServ: UserService, private router: Router) { }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.token || sessionStorage.token) {
      return this.userServ.getUser().pipe(
        map(({ is_coach }: any) => is_coach ? true : this.router.parseUrl('home'))
      )
    }
    return this.router.parseUrl('/')
  }
}
