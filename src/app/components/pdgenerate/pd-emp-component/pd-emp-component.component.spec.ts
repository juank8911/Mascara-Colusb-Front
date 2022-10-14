import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdEmpComponentComponent } from './pd-emp-component.component';

describe('PdEmpComponentComponent', () => {
  let component: PdEmpComponentComponent;
  let fixture: ComponentFixture<PdEmpComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdEmpComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdEmpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
