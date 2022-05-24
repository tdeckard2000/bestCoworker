import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { ModalServiceService } from './services/modal-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private modalService: ModalServiceService, private apiService:ApiService) { }

  onOpenModal(modalId: string) {
    this.modalService.openModal(modalId);
  }

  ngOnInit(): void {
    this.apiService.getAllPersons().subscribe((result) => {
      console.log(result)
    });
  }

}
