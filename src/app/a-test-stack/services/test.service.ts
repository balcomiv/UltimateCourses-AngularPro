import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TestService {
  private _data = new BehaviorSubject<unknown>({});
  //  data = this._data.asObservable();

  data: Observable<unknown> | null = null;

  constructor() {}
}
