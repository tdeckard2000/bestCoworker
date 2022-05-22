import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, takeLast } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  constructor() { }

  _modalTracker = new BehaviorSubject<Array<string | null>>(['f']);

  getModalTrackerValues() {
    return this._modalTracker;
  };

  openModal() {
    this.getModalTrackerValues().pipe(takeLast(1)).subscribe((value) => {
      console.log(value)
      return value
    })
  }

}

const myTest = new ModalServiceService;

console.log("jere")
myTest.openModal()
