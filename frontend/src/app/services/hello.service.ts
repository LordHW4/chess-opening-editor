import { Injectable } from '@angular/core';

@Injectable()
export class HelloService {
  public hello() {
    return 'Hello !';
  }
}
