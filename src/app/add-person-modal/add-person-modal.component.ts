import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { min } from 'rxjs';
import { ApiService } from '../main/services/api.service';
import { MainService } from '../main/services/main.service';
import { ModalServiceService } from '../main/services/modal-service.service';

@Component({
  selector: 'app-add-person-modal',
  templateUrl: './add-person-modal.component.html',
  styleUrls: ['./add-person-modal.component.scss']
})
export class AddPersonModalComponent implements OnInit {

  constructor(private modalService: ModalServiceService, private apiService: ApiService, private mainService: MainService) { }

  showCharacterRequirementsError: boolean = false;

  addPersonForm = new FormGroup({
    personName: new FormControl('', Validators.minLength(2))
  });

  onCloseModal() {
    this.modalService.closeModal('addPerson')
  }

  onSubmit() {
    const newPersonName = this.addPersonForm.value['personName'];
    if (this.addPersonForm.value['personName'] && this.addPersonForm.get('personName')?.valid) {
      this.showCharacterRequirementsError = false;
      this.apiService.postNewPerson(newPersonName).subscribe(() => {
        this.mainService.setAllPersons();
        this.onCloseModal();
        this.addPersonForm.setValue({personName: ''});
      });
    } else {
      this.showCharacterRequirementsError = true;
    }
  };

  ngOnInit(): void {
  }

}
