import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdGroFamComponComponent } from './pd-gro-fam-compon.component';

describe('PdGroFamComponComponent', () => {
  let component: PdGroFamComponComponent;
  let fixture: ComponentFixture<PdGroFamComponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdGroFamComponComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdGroFamComponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
