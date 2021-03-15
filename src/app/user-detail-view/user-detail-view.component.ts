import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-user-detail-view',
  templateUrl: './user-detail-view.component.html',
  styleUrls: ['./user-detail-view.component.scss']
})
export class UserDetailViewComponent implements OnInit {
  @Input() user: UserModel;
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onBack() {
    this._router.navigate(['../']);
  }

}
