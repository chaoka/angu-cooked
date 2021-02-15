import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent {

  constructor(private userServ: UserService) { }

  user$ = this.userServ.user$

}
