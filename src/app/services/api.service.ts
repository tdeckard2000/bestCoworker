import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }
  headers = { 'content-type': 'application/json'}
  route = 'http://localhost:3000'

  postNewPerson(name: string) {
    return this.http.post(this.route + '/newPerson', {name: name}, {'headers': this.headers});
  };

  postNewVoteStat(voteStat: string) {
    return this.http.post(this.route + '/newVoteStat', {name: voteStat});
  };

  postAddVote(personName: string, voteOptionName: string) {
    return this.http.post(this.route + '/addVote', {personName: personName, voteOptionName: voteOptionName});
  };

  getAllPersons() {
    return this.http.get(this.route + '/allPersons');
  };

  getAllVoteStats() {
    return this.http.get(this.route + '/allVoteStats');

  };
}
