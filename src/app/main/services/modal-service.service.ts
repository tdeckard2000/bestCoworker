import { Injectable } from '@angular/core';
import { BehaviorSubject, last, Observable, Subject, take, takeLast } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  constructor() { }

  _modalTracker = new BehaviorSubject<Array<string | null>>([]);

  getModalStatus() {
    return this._modalTracker.asObservable();
  };

  closeModal(modalId: string) {
    this.getModalStatus().pipe(take(1)).subscribe((modalTracker) => {
      if (modalTracker.includes(modalId)) {
        modalTracker = modalTracker.filter(e => e != modalId);
        this._modalTracker.next(modalTracker);
      };
    });
  }

  openModal(modalId: string) {
    this.getModalStatus().pipe(take(1)).subscribe((modalTracker) => {
      if (modalTracker.includes(modalId)) {
        return
      } else {
        modalTracker.push(modalId);
        this._modalTracker.next(modalTracker);
      };
    });
  };

}
