import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get('http://localhost:8080/api/rest-auth/user/', {
      headers: {
        Authorization: `Token ${localStorage.token}`
      }
    })
  }
}
