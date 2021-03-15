import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UserManagementService {
  constructor(private httpClient: HttpClient) {}

  getUsers(params: { userId: number; per_page: number }) {
    const queryParams = new HttpParams();
    queryParams.set("since", (params?.userId as any) as string);
    queryParams.set("per_page", (params?.per_page as any) as string);
    return this.httpClient.get(`https://api.github.com/users`, {
      params: queryParams,
    });
  }

  getUser()
}
