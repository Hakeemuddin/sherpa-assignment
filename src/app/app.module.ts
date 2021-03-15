import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent } from './user-list/user-list.component';
import { UserListViewComponent } from './user-list-view/user-list-view.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDetailViewComponent } from './user-detail-view/user-detail-view.component';
import {MatCardModule} from '@angular/material/card';
import { UserCardComponent } from './user-card/user-card.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserListViewComponent,
    UserDetailComponent,
    UserDetailViewComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatPaginatorModule,
    MatBadgeModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
