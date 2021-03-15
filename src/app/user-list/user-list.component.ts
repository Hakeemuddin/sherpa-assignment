import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { UserManagementService } from "../user-management.service";
import { UserModel } from "../user.model";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  users$: Observable<UserModel[]>;
  totalUserCount$: Observable<number[]>;
  constructor(private _userManagementService: UserManagementService) {}

  ngOnInit(): void {
    this.totalUserCount$ = this._userManagementService.getUsersCount();
  }

  getUsers(params: { userId: number; per_page: number }) {
    this.users$ = this._userManagementService.getUsers({ ...params });
  }
}
