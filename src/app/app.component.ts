import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { delay } from 'rxjs/operators'
import { UserService } from './services/user.service'

@Component({
  selector: 'app-root',
  template: `
  <h1 i18n>Hello world!</h1>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  constructor() { }
}
