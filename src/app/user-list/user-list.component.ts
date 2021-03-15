import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$: Observable<UserModel[]>;
  constructor()  { }

  ngOnInit(): void {
  }

  getUsers(params: { userId: number, pageNo: number, count: number }) {

  }

}
