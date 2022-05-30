import { Component, OnInit } from '@angular/core';
import { combineLatestWith } from 'rxjs';
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
  highestVotes: {[key:string]: {name: string, number: number}} = {};

  determineLeaders(allPersons: Array<Persons>, voteOptions: Array<VoteOptions>) {
    for(let person of allPersons) {
      for(let voteOption of voteOptions) {
        let voteOptionName = voteOption.name.toLowerCase().replace(/\s+/g, '');
        if(!this.highestVotes[voteOptionName]) {
          this.highestVotes[voteOptionName] = {name: '', number: 0};
        }
        if (person.votes[voteOptionName] && (person.votes[voteOptionName] > this.highestVotes[voteOptionName].number)) {
          this.highestVotes[voteOptionName].name = person.name;
          this.highestVotes[voteOptionName].number = person.votes[voteOptionName];
        }
      }
    }
  };

  onCloseModal() {
    this.modalService.closeModal('leaderBoard');
  };

  ngOnInit(): void {
    const $allPersons = this.mainService.getAllPersons();
    const $voteOptions = this.mainService.getAllVoteOptions();
    $allPersons.pipe(combineLatestWith($voteOptions)).subscribe(([allPersons, voteOptions]) => {
      this.allVoteOptions = voteOptions;
      this.determineLeaders(allPersons, voteOptions);
    });

  }

}
