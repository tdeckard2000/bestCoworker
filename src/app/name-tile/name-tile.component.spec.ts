import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameTileComponent } from './name-tile.component';

describe('NameTileComponent', () => {
  let component: NameTileComponent;
  let fixture: ComponentFixture<NameTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
