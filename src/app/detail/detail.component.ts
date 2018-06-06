import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  user: User;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.selectedUser;
    // this.user = this.userService.getSelectedUser();
  }

}
