import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from './services/user.service'

@Component({
  selector: 'app-redir',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RedirComponent {

  constructor(userServ: UserService, router: Router) {
    if (localStorage.token || sessionStorage.token) {
      userServ.getUser().subscribe(({ is_coach }: any) => router.navigate([is_coach ? 'admin' : 'home'], { skipLocationChange: true }))
    } else {
      router.navigate(['landing'], { skipLocationChange: true })
    }
  }

}
