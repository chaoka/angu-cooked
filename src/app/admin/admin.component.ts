import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit {

  constructor(private userServ: UserService) { }

  ngOnInit(): void {
    this.userServ.getUser().subscribe(console.log)
  }

}
