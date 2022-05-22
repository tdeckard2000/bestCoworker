import { Component, Input, OnInit } from '@angular/core';
import { ModalServiceService } from '../main/services/modal-service.service';

@Component({
  selector: 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.scss']
})
export class ModalTemplateComponent implements OnInit {
@Input() modalTitle: string = '';
@Input() modalId: string = '';

  constructor(private modalService: ModalServiceService) { }

  modalIsOpen:boolean = false;

  ngOnInit(): void {
    this.modalService.getModalStatus().subscribe((value: Array<string | null>) => {
      if (value.includes(this.modalId)) {
        this.modalIsOpen = true;
      } else {
        this.modalIsOpen = false;
      };
      console.log(this.modalId, " is open? ", this.modalIsOpen)


    });
  }


}
