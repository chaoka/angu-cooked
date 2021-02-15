import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly _user = new BehaviorSubject({})
  readonly user$ = this._user.asObservable()

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get('http://localhost:8080/api/rest-auth/user/')
  }
}
