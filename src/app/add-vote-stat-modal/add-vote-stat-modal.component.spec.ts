import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVoteStatModalComponent } from './add-vote-stat-modal.component';

describe('AddVoteStatModalComponent', () => {
  let component: AddVoteStatModalComponent;
  let fixture: ComponentFixture<AddVoteStatModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVoteStatModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVoteStatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
