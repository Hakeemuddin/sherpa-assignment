import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";

import { UserModel } from "../user.model";

@Component({
  selector: "app-user-list-view",
  templateUrl: "./user-list-view.component.html",
  styleUrls: ["./user-list-view.component.scss"],
})
export class UserListViewComponent implements OnInit {
  @Input() users: UserModel[];
  @Input() totalUserCount: number;
  @Output() getUsers$ = new EventEmitter<{
    userId: number;
    per_page: number;
  }>();
  lastPageUserId: number;
  lastPageUsers: UserModel[];
  constructor() {}

  ngOnInit(): void {
    this.onPageChange({
      pageIndex: 1,
      previousPageIndex: 1,
      pageSize: 9,
      length: this.totalUserCount,
    });
  }

  onPageChange(pageEvent: PageEvent) {
    const queryParam = { userId: 0, per_page: 9, previous_userId: 0 };
    this.lastPageUserId = this.users? this.users[0]?.id : 1;
    console.log(this.lastPageUserId);
    console.log(pageEvent);
    if (pageEvent?.pageIndex > pageEvent?.previousPageIndex) {
      queryParam.previous_userId = queryParam.userId;
      queryParam.userId = this.users[this.users.length - 1].id;
    } else {
      queryParam.userId =  queryParam.previous_userId;
    }
    console.log(queryParam);
    this.getUsers$.emit(queryParam);
  }
}
