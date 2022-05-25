import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../main/services/api.service';
import { ModalServiceService } from '../main/services/modal-service.service';

@Component({
  selector: 'app-add-vote-stat-modal',
  templateUrl: './add-vote-stat-modal.component.html',
  styleUrls: ['./add-vote-stat-modal.component.scss']
})
export class AddVoteStatModalComponent implements OnInit {

  constructor(private modalService: ModalServiceService, private apiService:ApiService) { }

  showCharacterRequirementError: boolean = false;

  addVoteStatForm = new FormGroup({
    voteStatName: new FormControl('', Validators.minLength(2))
  });

  onCloseModal() {
    this.modalService.closeModal('addVoteStat')
  }

  onSubmit() {
    const newVoteStatName = this.addVoteStatForm.value['voteStatName'];
    if(this.addVoteStatForm.get('voteStatName')?.valid) {
      this.showCharacterRequirementError = false;
      this.apiService.postNewVoteStat(newVoteStatName).subscribe((res) => {
        console.log(res)
      });
    } else {
      this.showCharacterRequirementError = true;
    }
  }

  ngOnInit(): void {
  }

}
