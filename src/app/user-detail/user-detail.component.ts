import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { UserManagementService } from "../user-management.service";
import { UserModel } from "../user.model";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"],
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user$: Observable<UserModel>;
  activatedSubscription: Subscription;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _userManagementService: UserManagementService
  ) {}
  ngOnDestroy(): void {
    this.activatedSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.activatedSubscription = this._activatedRoute.params.subscribe((p) => {
      this.user$ = this._userManagementService.getUser(p?.userName);
    });
  }
}
