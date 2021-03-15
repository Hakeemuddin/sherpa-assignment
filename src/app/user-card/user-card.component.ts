import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: UserModel;
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  openDetails(){
    this._router.navigate(['details', this.user?.login])
  }



}
