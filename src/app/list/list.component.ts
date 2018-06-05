import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public users;

  constructor(public userService: UserService) { }

  ngOnInit() {
    // le composant est prêt (à être utilisé)
    this.users = this.userService.users;
  }
selectUser() {

}

}
