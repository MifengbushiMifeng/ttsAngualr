import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  constructor() {
  }

  loginWithCredentials(username: string, password: string) {

    return username === 'Jonathan';

  }

}
