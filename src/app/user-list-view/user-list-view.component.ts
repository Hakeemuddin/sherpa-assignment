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

  queryParams: { userId: number; per_page: number; };
  previousUserIdMap: Map<number, number> = new Map();
  constructor() {}

  ngOnInit(): void {
    this.queryParams = { userId: 0, per_page: 9 };
    this.onPageChange({
      pageIndex: 1,
      previousPageIndex: 1,
      pageSize: 9,
      length: this.totalUserCount,
    });
  }

  onPageChange(pageEvent: PageEvent) {
   
    if (pageEvent?.pageIndex > pageEvent?.previousPageIndex) {
      this.previousUserIdMap.set(pageEvent?.previousPageIndex, this.queryParams.userId);
      this.queryParams.userId = this.users[this.users.length - 1].id;
    } else {
      this.queryParams.userId = this.previousUserIdMap.get(pageEvent?.pageIndex) ?? 0;
     
    }
   
    this.getUsers$.emit(this.queryParams);
  }
}
