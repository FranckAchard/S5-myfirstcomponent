import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  users;
  // selectedUser;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // le composant est prêt (à être utilisé)
    this.users = this.userService.users;
    // this.selectedUser = this.userService.selectedUser;
  }

  selectUser(u: User) {
    this.userService.selectedUser = u;
  }

}
