import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from '../main/services/modal-service.service';

@Component({
  selector: 'app-add-vote-stat-modal',
  templateUrl: './add-vote-stat-modal.component.html',
  styleUrls: ['./add-vote-stat-modal.component.scss']
})
export class AddVoteStatModalComponent implements OnInit {

  constructor(private modalService: ModalServiceService) { }

  onCloseModal() {
    this.modalService.closeModal('addVoteStat')
  }

  ngOnInit(): void {
  }

}
