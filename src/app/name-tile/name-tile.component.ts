import { Component, OnInit } from '@angular/core';
import { Persons, VoteOptions } from 'server/dbCollectionsInterface';
import { ApiService } from '../services/api.service';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-name-tile',
  templateUrl: './name-tile.component.html',
  styleUrls: ['./name-tile.component.scss']
})
export class NameTileComponent implements OnInit {

  constructor(private mainService: MainService, private apiService: ApiService) { }

  nameTiles: Array<Persons> | null = null;
  voteOptions: Array<VoteOptions> | null = null;

  onVoteOptionClick(personName: string, voteOptionName: string) {
    this.apiService.postAddVote(personName, voteOptionName).subscribe(() => {
      this.mainService.setAllPersons();
    });
  };

  ngOnInit(): void {
    this.mainService.setAllPersons();
    this.mainService.getAllPersons().subscribe((res) => {
      console.log('update')
      this.nameTiles = res;
    });
    this.mainService.setAllVoteOptions();
    this.mainService.getAllVoteOptions().subscribe((res) => {
      this.voteOptions = res;
    });
  }

}
