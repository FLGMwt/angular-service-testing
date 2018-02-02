import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const stubUser = {
  id: 1,
  firstName: 'Ada',
  lastName: 'Lovelace',
  isKnighted: true,
};

@Injectable()
export class ApiService {

  get(url: string): Observable<any> {
    if (url === '/user') {
      return Observable.of(stubUser);
    } else {
      return Observable.of(null);
    }
  }

}
