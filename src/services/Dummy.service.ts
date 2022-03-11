import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable()
export class DummyService {
  boolSubject$$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  setSubject(value: boolean) {
    this.boolSubject$$.next(value);
  }
}
