import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogGameDetailComponent } from './dialog-game-detail.component';

describe('DialogGameDetailComponent', () => {
  let component: DialogGameDetailComponent;
  let fixture: ComponentFixture<DialogGameDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogGameDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogGameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
