import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByClassComponent } from './get-by-class.component';

describe('GetByClassComponent', () => {
  let component: GetByClassComponent;
  let fixture: ComponentFixture<GetByClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetByClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
