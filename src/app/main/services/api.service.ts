import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  postNewPerson(name: string) {
    console.log("POST NEW NAME ", name)
  };

  postNewVoteStat(voteStat: string) {
    console.log("POST NEW VOTE STAT ", voteStat)
  };

  postVote() {
    console.log("POST VOTE")
  };

  getAllPersons() {
    console.log("GET ALL NAMES")
  };

  getAllVoteStats() {
    console.log("GET ALL VOTE STATS")
  };
}
