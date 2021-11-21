import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexLayoutGridComponent } from './flex-layout-grid.component';

describe('FlexLayoutGridComponent', () => {
  let component: FlexLayoutGridComponent;
  let fixture: ComponentFixture<FlexLayoutGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexLayoutGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexLayoutGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
