import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdgenerateComponent } from './pdgenerate.component';

describe('PdgenerateComponent', () => {
  let component: PdgenerateComponent;
  let fixture: ComponentFixture<PdgenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdgenerateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdgenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
