import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebahomeComponent } from './pruebahome.component';

describe('PruebahomeComponent', () => {
  let component: PruebahomeComponent;
  let fixture: ComponentFixture<PruebahomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebahomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
