import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { UserModel } from "./user.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UserManagementService {
  constructor(private httpClient: HttpClient) {}

  getUsers(params: { userId: number; per_page: number }) {
    const queryParams = new HttpParams();
    queryParams.set("since", (params?.userId as any) as string);
    queryParams.set("per_page", (params?.per_page as any) as string);
    return this.httpClient.get<UserModel[]>(`https://api.github.com/users?since=${params.userId}&per_page=${params.per_page}`);
  }

  getUser(userName: string) {
    return this.httpClient.get<UserModel>(
      `https://api.github.com/users/${userName}`
    );
  }

  getUsersCount() {
    const queryParams = new HttpParams();
    queryParams.set("type", "user");
    const url = 'https://api.github.com/search/users?q=type%3Auser'
    return this.httpClient
      .get<any>(url)
      .pipe(map((users) => users?.total_count));
  }
}
