export interface UserModel {
  
    id: number;
    login: string;
  
    avatar_url: string;
    url: string;
    name?: string;
    followers?: number;
    following?: number;
}