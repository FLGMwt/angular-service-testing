import { TestBed, async } from '@angular/core/testing';
import { UserService, IApiUser } from './user.service';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';

class StubApiService {
  get(url: string) {}
}

let stubApiService: StubApiService;
let service: UserService;
const stubUser: IApiUser = {
  id: 10,
  firstName: 'Test',
  lastName: 'User',
  isKnighted: true,
};

describe('UserService', () => {
  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      providers: [
        UserService,
        { provide: ApiService, useClass: StubApiService }
      ]
    });

    stubApiService = bed.get(ApiService);
    service = bed.get(UserService);
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

  it('should call ApiService with /user', () => {
    const getSpy = spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    service.getUser();

    expect(getSpy).toHaveBeenCalledWith('/user');
  });

  it('should transform an ApiUser response to a User', () => {
    spyOn(stubApiService, 'get')
      .and.returnValue(Observable.of(stubUser));

    const user$ = service.getUser();

    user$.subscribe(user => {
      expect(user.fullName).toEqual('Dame Test User');
    });
  });

});
