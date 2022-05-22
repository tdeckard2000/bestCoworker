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

  modalOpen:boolean = false;

  ngOnInit(): void {
    this.modalService.getModalTrackerValues().subscribe((value: Array<string | null>) => {
      if (value.includes(this.modalId)) {
        this.modalOpen = true;
      } else {
        this.modalOpen = false;
      };
      console.log(this.modalId, " is open? ", this.modalOpen)

    });
  }


}
