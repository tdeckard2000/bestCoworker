import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  route = 'http://localhost:3000'

  postNewPerson(name: string) {
    console.log("POST NEW NAME ", name)
    return this.http.post(this.route + '/newPerson', {});
  };

  postNewVoteStat(voteStat: string) {
    console.log("POST NEW VOTE STAT ", voteStat)
    return this.http.post(this.route + '/newVoteStat', {});
  };

  postAddVote() {
    console.log("POST VOTE")
    return this.http.post(this.route + '/addVote', {});
  };

  getAllPersons() {
    console.log("GET ALL NAMES")
    return this.http.get(this.route + '/allPersons');
  };

  getAllVoteStats() {
    console.log("GET ALL VOTE STATS")
    return this.http.get(this.route + '/allVoteStats');

  };
}
