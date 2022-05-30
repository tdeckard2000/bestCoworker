import { Component, OnInit } from '@angular/core';
import { Persons, VoteOptions } from 'server/dbCollectionsInterface';
import { MainService } from '../services/main.service';
import { ModalServiceService } from '../services/modal-service.service';

@Component({
  selector: 'app-leader-board-modal',
  templateUrl: './leader-board-modal.component.html',
  styleUrls: ['./leader-board-modal.component.scss']
})
export class LeaderBoardModalComponent implements OnInit {

  constructor(private modalService: ModalServiceService, private mainService: MainService) { }

  allVoteOptions: Array<VoteOptions> | null = null;

  determineLeaders(allPersons: Array<Persons>, voteOptions: Array<VoteOptions>) {
    let highestVotes: {[key:string]: number} = {};

    for(let person of allPersons) {
      for(let voteOption of voteOptions) {
        let voteOptionName = voteOption.name.toLowerCase().replace(/\s+/g, '');
        if(!highestVotes[voteOptionName]) {
          highestVotes[voteOptionName] = 0;
        } else {
          console.log(highestVotes)
        }
      }
    }
    console.log(highestVotes)
  };

  onCloseModal() {
    this.modalService.closeModal('leaderBoard');
  };

  ngOnInit(): void {
    this.mainService.getAllPersons().subscribe((allPersons) => {
      console.log("GOT PERSONS")
      this.mainService.getAllVoteOptions().subscribe((voteOptions) => {
        console.log("GOT VOTE OPTIONS")
        this.allVoteOptions = voteOptions;
        this.determineLeaders(allPersons, voteOptions);
      });
    })
  }

}
