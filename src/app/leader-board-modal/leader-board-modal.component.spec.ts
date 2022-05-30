import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderBoardModalComponent } from './leader-board-modal.component';

describe('LeaderBoardModalComponent', () => {
  let component: LeaderBoardModalComponent;
  let fixture: ComponentFixture<LeaderBoardModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderBoardModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderBoardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
