import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from './services/modal-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private modalService: ModalServiceService) { }

  onOpenModal(modalId: string) {
    this.modalService.openModal(modalId);
  }

  ngOnInit(): void {
  }

}
