import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface IApiUser {
  id: number;
  firstName: string;
  lastName: string;
  isKnighted: boolean;
}

export interface IUser {
  id: number;
  fullName: string;
}

const userApiUri = '/user';

@Injectable()
export class UserService {

  constructor(private apiService: ApiService) { }

  getUser(): Observable<IUser> {
    return this.apiService
      .get(userApiUri)
      .map((apiUser: IApiUser) => {
        const honorific = apiUser.isKnighted ? 'Dame' : '';
        return {
          id: apiUser.id,
          fullName: `${honorific} ${apiUser.firstName} ${apiUser.lastName}`
        };
      });
  }

}

