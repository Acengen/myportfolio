import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MywebService {
  removeClass: boolean = false;
  removeClassEmitter = new EventEmitter<boolean>();

  removeOnClick() {
    this.removeClass = true;
    this.removeClassEmitter.emit(this.removeClass);
  }
  constructor() {}
}
