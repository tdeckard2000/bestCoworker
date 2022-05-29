import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Persons, VoteOptions } from 'server/dbCollectionsInterface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  AllPersons: Subject<Array<Persons>> = new Subject();
  AllVoteOptions: Subject<Array<VoteOptions>> = new Subject();

  constructor(private apiService: ApiService) { }

  getAllPersons() {
    return this.AllPersons.asObservable();
  };

  getAllVoteOptions() {
    return this.AllVoteOptions.asObservable();
  }

  setAllPersons() {
    this.apiService.getAllPersons().subscribe((res) => {
      this.AllPersons.next(res as Array<Persons>);
    });
  };

  setAllVoteOptions() {
    this.apiService.getAllVoteStats().subscribe((res) => {
      this.AllVoteOptions.next(res as Array<VoteOptions>);
    });
  };

}
