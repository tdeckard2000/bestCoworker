import { Component, OnInit } from '@angular/core';
import { Persons, VoteOptions } from 'server/dbCollectionsInterface';
import { MainService } from '../main/services/main.service';

@Component({
  selector: 'app-name-tile',
  templateUrl: './name-tile.component.html',
  styleUrls: ['./name-tile.component.scss']
})
export class NameTileComponent implements OnInit {

  constructor(private mainService: MainService) { }

  nameTiles: Array<Persons> | null = null;
  voteOptions: Array<VoteOptions> | null = null;

  onVoteOptionClick(personName: string, voteOptionName: string) {
    console.log(personName, voteOptionName)
  }

  ngOnInit(): void {
    this.mainService.setAllPersons();
    this.mainService.getAllPersons().subscribe((res) => {
      this.nameTiles = res;
    });
    this.mainService.setAllVoteOptions();
    this.mainService.getAllVoteOptions().subscribe((res) => {
      this.voteOptions = res;
    });
  }

}
